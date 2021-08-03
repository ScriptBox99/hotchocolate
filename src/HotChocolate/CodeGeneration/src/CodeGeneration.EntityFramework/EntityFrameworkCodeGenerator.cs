using System;
using System.Linq;
using HotChocolate.CodeGeneration.EntityFramework.Types;
using HotChocolate.CodeGeneration.Types;
using HotChocolate.Types;
using HotChocolate.Types.Introspection;
using Humanizer;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using static HotChocolate.CodeGeneration.TypeNames;
using static Microsoft.CodeAnalysis.CSharp.SyntaxFactory;
using SyntaxKind = Microsoft.CodeAnalysis.CSharp.SyntaxKind;

namespace HotChocolate.CodeGeneration.EntityFramework
{
    public partial class EntityFrameworkCodeGenerator : ICodeGenerator
    {
        public CodeGenerationResult Generate(CodeGeneratorContext context)
        {
            var result = new CodeGenerationResult();

            ISchema schema = EntityFrameworkSchemaHelper.CreateSchema(context.Documents);

            GenerateTypes(
                result,
                DataGeneratorContext.FromSchema(schema),
                context,
                schema);

            return result;
        }

        private static void GenerateTypes(
            CodeGenerationResult result,
            DataGeneratorContext dataContext,
            CodeGeneratorContext generatorContext,
            ISchema schema)
        {
            var @namespace = generatorContext.Namespace;

            var typeName = "AppDbContext";

            var usePluralizedTableNames = true; // TODO: Grab from a @tableNamingConvention or something directive on Schema type.

            ClassDeclarationSyntax dbContextClass =
                ClassDeclaration(typeName)
                    .AddGeneratedAttribute()
                    .AddModifiers(
                        Token(SyntaxKind.PublicKeyword),
                        Token(SyntaxKind.PartialKeyword)); // TODO: Should it be partial?

            var objectTypes = schema.Types
                .OfType<ObjectType>()
                .Where(type => !IntrospectionTypes.IsIntrospectionType(type))
                .ToList();

            foreach (ObjectType objectType in objectTypes)
            {
                GenerateModel(
                    result,
                    usePluralizedTableNames: usePluralizedTableNames,
                    dbContextClass,
                    @namespace,
                    objectType);
            }

            // Generate DbContext class
            result.AddClass(@namespace, "AppDbContext", dbContextClass);
        }

        private static void GenerateModel(
            CodeGenerationResult result,
            bool usePluralizedTableNames,
            ClassDeclarationSyntax dbContextClass,
            string @namespace,
            IObjectType objectType)
        {
            TypeNameDirective? typeNameDirective =
                objectType.GetFirstDirective<TypeNameDirective>("typeName");
            var modelName = typeNameDirective?.Name ?? objectType.Name.Value;
            var modelConfigurerName = $"{modelName}Configurer";

            TableDirective? tableDirective =
                objectType.GetFirstDirective<TableDirective>(TableDirectiveType.NameConst);
            JsonDirective? jsonDirective =
                objectType.GetFirstDirective<JsonDirective>(JsonDirectiveType.NameConst);

            var tableName = tableDirective is not null || jsonDirective is null
                ? tableDirective?.Name ?? DeriveTableName(objectType.Name.Value, usePluralizedTableNames) // TODO: Use Humanizer or something I guess
                : null;
            var pluralizedTableName = tableName.Pluralize(inputIsKnownToBeSingular: false);

            ClassDeclarationSyntax modelDeclaration =
                ClassDeclaration(modelName)
                    .AddGeneratedAttribute()
                    .AddModifiers(
                        Token(SyntaxKind.PublicKeyword),
                        Token(SyntaxKind.PartialKeyword));

            ClassDeclarationSyntax modelConfigurerDeclaration =
                ClassDeclaration(modelConfigurerName)
                    .AddGeneratedAttribute()
                    .AddModifiers(
                        Token(SyntaxKind.PublicKeyword))
                    .WithBaseList(GetModelConfigurerBaseList(modelName))
                    .WithMembers(GetModelConfigurerConfigureMethod(modelName));

            foreach (IEntityFrameworkDirective directive in objectType.Directives
                .OfType<IEntityFrameworkDirective>())
            {

            }

            foreach (IObjectField field in objectType.Fields.Where(t => !t.IsIntrospectionField))
            {
                modelDeclaration =
                    modelDeclaration.AddProperty(
                        field.GetPropertyName(),
                        IdentifierName(field.GetTypeName(@namespace)),
                        field.Description,
                        setable: true);
            }

            // Generate model and model configurer classes
            result.AddClass(@namespace, modelName, modelDeclaration);
            result.AddClass(@namespace, modelConfigurerName, modelConfigurerDeclaration, _modelConfigurerUsings);

            // Add it on to the DbContext
            GenericNameSyntax? dbSetType = GetDbSetTypeName(@namespace, modelName);
            dbContextClass = dbContextClass.AddProperty(
                pluralizedTableName,
                dbSetType,
                description: null,
                setable: true);
        }

        private static string DeriveTableName(string objectTypeName, bool usePluralizedTableNames)
        {
            return objectTypeName + "s"; // TODO: Leverage Humanizer 
        }

        private static readonly QualifiedNameSyntax _msEfCoreQualifiedNameForNs =
            QualifiedName(
                IdentifierName("Microsoft"),
                IdentifierName("EntityFrameworkCore"));

        private static readonly QualifiedNameSyntax _msEfCoreQualifiedName =
            QualifiedName(
                AliasQualifiedName(
                    IdentifierName(Token(SyntaxKind.GlobalKeyword)),
                    IdentifierName("Microsoft")),
                IdentifierName("EntityFrameworkCore"));

        private static readonly GenericNameSyntax _dbSetGenericName =
            GenericName(Identifier("DbSet"));

        private static readonly UsingDirectiveSyntax[] _modelConfigurerUsings = new[]
        {
            UsingDirective(_msEfCoreQualifiedNameForNs),
            UsingDirective(
                QualifiedName(
                    QualifiedName(
                        _msEfCoreQualifiedNameForNs,
                        IdentifierName("Metadata")),
                    IdentifierName("Builders")))
        };

        private static BaseListSyntax GetModelConfigurerBaseList(string modelTypeName) =>
            BaseList(
                SingletonSeparatedList<BaseTypeSyntax>(
                    SimpleBaseType(
                        GenericName(
                            Identifier("IEntityTypeConfiguration"))
                        .WithTypeArgumentList(
                            TypeArgumentList(
                                SingletonSeparatedList<TypeSyntax>(
                                    IdentifierName(modelTypeName)))))));

        private static SyntaxList<MemberDeclarationSyntax> GetModelConfigurerConfigureMethod(string modelTypeName) =>
            SingletonList<MemberDeclarationSyntax>(
                MethodDeclaration(
                    PredefinedType(
                        Token(SyntaxKind.VoidKeyword)),
                    Identifier("Configure"))
                .WithModifiers(
                    TokenList(
                        Token(SyntaxKind.PublicKeyword)))
                .WithParameterList(
                    ParameterList(
                        SingletonSeparatedList<ParameterSyntax>(
                            Parameter(
                                Identifier("builder"))
                            .WithType(
                                GenericName(
                                    Identifier("EntityTypeBuilder"))
                                .WithTypeArgumentList(
                                    TypeArgumentList(
                                        SingletonSeparatedList<TypeSyntax>(
                                            IdentifierName(modelTypeName))))))))
                .WithBody(
                    Block()));

        private static GenericNameSyntax GetDbSetTypeName(string @namespace, string modelTypeName)
        {
            IdentifierNameSyntax fullModelTypeName =
                IdentifierName(Global(@namespace + "." + modelTypeName));

            return _dbSetGenericName.WithTypeArgumentList(
                TypeArgumentList(
                    SingletonSeparatedList<TypeSyntax>(fullModelTypeName)));
        }
    }

    public static class ExtensionsToRefactorElsewhere
    {
        public static void AddClass(
            this GeneratorExecutionContext context,
            string @namespace,
            string className,
            ClassDeclarationSyntax classDeclaration)
        {
            context.AddClass(@namespace, className, classDeclaration, Array.Empty<UsingDirectiveSyntax>());
        }

        public static void AddClass(
            this GeneratorExecutionContext context,
            string @namespace,
            string className,
            ClassDeclarationSyntax classDeclaration,
            UsingDirectiveSyntax[] usings)
        {
            NamespaceDeclarationSyntax namespaceDeclaration =
                NamespaceDeclaration(IdentifierName(@namespace))
                    .AddMembers(classDeclaration);

            CompilationUnitSyntax compilationUnit =
                CompilationUnit()
                    .AddMembers(namespaceDeclaration)
                    .AddUsings(usings)
                    .NormalizeWhitespace(elasticTrivia: true);

            context.AddSource(@namespace + $".{className}.cs", compilationUnit.ToFullString());
        }
    }
}