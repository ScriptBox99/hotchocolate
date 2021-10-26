using System;
using System.Collections.Generic;
using System.Linq;
using HotChocolate.Configuration;
using HotChocolate.Language;
using HotChocolate.Resolvers;
using HotChocolate.Types.Descriptors;
using HotChocolate.Types.Descriptors.Definitions;
using static HotChocolate.Types.Errors.ErrorContextData;

#nullable enable

namespace HotChocolate.Types.Errors
{
    internal class ErrorTypeInterceptor : TypeInterceptor
    {
        private readonly List<(ITypeReference, UnionType)> _needsErrorField = new();
        private readonly HashSet<ObjectType> _objectTypes = new();
        private readonly List<(ITypeCompletionContext, ObjectTypeDefinition)> _contexts = new();


        public override void OnBeforeRegisterDependencies(
            ITypeDiscoveryContext discoveryContext,
            DefinitionBase? definition,
            IDictionary<string, object?> contextData)
        {
        }

        public override void OnAfterRegisterDependencies(
            ITypeDiscoveryContext discoveryContext,
            DefinitionBase? definition,
            IDictionary<string, object?> contextData)
        {
            if (discoveryContext.Type is ObjectType objectType)
            {
                _objectTypes.Add(objectType);
            }

            if (definition is ObjectTypeDefinition objectTypeDefinition)
            {
                foreach (var field in objectTypeDefinition.Fields)
                {
                    if (!field.IsIntrospectionField &&
                        field.ContextData.TryGetValue(ErrorDefinitions, out var value) &&
                        value is List<ErrorDefinition> definitions)
                    {
                        UnionType errorUnion = new(d =>
                        {
                            d.Name(field.Name.ToTypeName(suffix: "Error"));

                            d.Extend()
                                .OnBeforeCreate(unionDef =>
                                {
                                    foreach (ErrorDefinition def in definitions)
                                    {
                                        ExtendedTypeReference typeRef = discoveryContext
                                            .TypeInspector
                                            .GetTypeRef(def.SchemaType);

                                        unionDef.Types.Add(typeRef);
                                    }
                                });
                        });

                        _needsErrorField.Add((field.Type!, errorUnion));

                        IReadOnlyList<CreateError> factories =
                            definitions.Select(t => t.Factory).ToArray();

                        FieldMiddleware middleware =
                            FieldClassMiddlewareFactory.Create<ErrorMiddleware>(
                                (typeof(IReadOnlyList<CreateError>), factories));

                        field.MiddlewareDefinitions.Insert(0, new(middleware));

                        var unionTypeRef = new SchemaTypeReference(errorUnion);
                        discoveryContext.Dependencies.Add(new(unionTypeRef));
                        field.ContextData.Remove(ErrorDefinitions);
                    }
                }
            }
        }

        public override void OnAfterCompleteName(
            ITypeCompletionContext completionContext,
            DefinitionBase? definition,
            IDictionary<string, object?> contextData)
        {
            if (completionContext.Type is ObjectType objectType &&
                definition is ObjectTypeDefinition objectTypeDef &&
                _objectTypes.Contains(objectType))
            {
                _contexts.Add((completionContext, objectTypeDef));
            }
        }

        public override void OnAfterCompleteTypeNames()
        {
            ITypeCompletionContext firstContext = _contexts.First().Item1;

            foreach ((ITypeReference typeRef, UnionType unionType) in _needsErrorField)
            {
                if (firstContext.TryGetType(typeRef, out IType? type) &&
                    type.NamedType() is ObjectType objectType &&
                    _contexts.FirstOrDefault(t => t.Item1.Type == objectType) is
                    {
                        Item1: { } context,
                        Item2: { } objectTypeDef
                    })
                {
                    foreach (ObjectFieldDefinition field in objectTypeDef.Fields)
                    {
                        FieldMiddleware? middleware = FieldClassMiddlewareFactory
                            .Create<ReturnNullWhenErrorWasThrow>();
                        field.MiddlewareDefinitions.Insert(0, new(middleware));
                        field.Type = RewriteTypeToNullableType(field, firstContext.TypeInspector);
                    }

                    var descriptor = ObjectFieldDescriptor.New(context.DescriptorContext, "errors");

                    descriptor
                        .Type(new ListType(new NonNullType(unionType)))
                        .Resolve(ctx => ctx.ScopedContextData
                            .TryGetValue(ErrorContextData.Errors, out var value)
                            ? value
                            : null);

                    objectTypeDef.Fields.Add(descriptor.CreateDefinition());
                }
            }
        }

        private static ITypeReference RewriteTypeToNullableType(
            ObjectFieldDefinition definition,
            ITypeInspector typeInspector)
        {
            ITypeReference? reference = definition.Type;

            if (reference is ExtendedTypeReference extendedTypeRef)
            {
                return extendedTypeRef.Type.IsNullable
                    ? extendedTypeRef
                    : extendedTypeRef.WithType(
                        typeInspector.ChangeNullability(extendedTypeRef.Type, true));
            }

            if (reference is SchemaTypeReference schemaRef)
            {
                return schemaRef.Type is NonNullType nnt
                    ? schemaRef.WithType(nnt.Type)
                    : schemaRef;
            }

            if (reference is SyntaxTypeReference syntaxRef)
            {
                return syntaxRef.Type is NonNullTypeNode nnt
                    ? syntaxRef.WithType(nnt.Type)
                    : syntaxRef;
            }

            throw new NotSupportedException();
        }
    }
}
