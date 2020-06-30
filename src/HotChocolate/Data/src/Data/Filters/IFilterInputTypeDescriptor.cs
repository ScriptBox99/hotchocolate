using System;
using System.Linq.Expressions;
using HotChocolate.Types;
using HotChocolate.Language;

namespace HotChocolate.Data.Filters
{
    public interface IFilterInputTypeDescriptor<T>
        : IDescriptor<FilterInputTypeDefinition>
        , IFluent
    {
        /// <summary>
        /// Defines the name of the <see cref="FilterInputType{T}"/>.
        /// </summary>
        /// <param name="value">The filter type name.</param>
        /// <exception cref="ArgumentNullException">
        /// <paramref name="value"/> is <c>null</c> or
        /// <see cref="string.Empty"/>.
        /// </exception>
        IFilterInputTypeDescriptor<T> Name(NameString value);

        /// <summary>
        /// Adds explanatory text of the <see cref="FilterInputType{T}"/>
        /// that can be accessed via introspection.
        /// </summary>
        /// <param name="value">The filter type description.</param>
        ///
        IFilterInputTypeDescriptor<T> Description(string value);

        /// <summary>
        /// Defines the filter binding behavior.
        ///
        /// The default binding behavior is set to
        /// <see cref="BindinrBehavior.Implicit"/>.
        /// </summary>
        /// <param name="bindingBehavior">
        /// The binding behavior.
        ///
        /// Implicit:
        /// The filter type descriptor will try to infer the filters
        /// from the specified <typeparamref name="T"/>.
        ///
        /// Explicit:
        /// All filters have to be specified explicitly via one of the `Filter`
        /// methods.
        /// </param>
        IFilterInputTypeDescriptor<T> BindFields(
            BindingBehavior bindingBehavior);

        /// <summary>
        /// Defines that all filters have to be specified explicitly.
        /// </summary>
        IFilterInputTypeDescriptor<T> BindFieldsExplicitly();

        /// <summary>
        /// The filter type will will add
        /// filters for all compatible fields.
        /// </summary>
        IFilterInputTypeDescriptor<T> BindFieldsImplicitly();

        /// <summary>
        /// Defines a <see cref="FilterOperationField"> property.
        /// </summary>
        /// <param name="operation">
        /// The operation identifier for the operation 
        /// </param>
        IFilterOperationFieldDescriptor Field(
            int operation);

        /// <summary>
        /// Defines a <see cref="FilterField"> for the given property.
        /// </summary>
        /// <param name="property">
        /// The property for which a field should be created 
        /// </param>
        IFilterFieldDescriptor Field(
            Expression<Func<T, string>> property);

        /// <summary>
        /// Ignore the specified property.
        /// </summary>
        /// <param name="property">The property that hall be ignored.</param>
        IFilterInputTypeDescriptor<T> Ignore(
            Expression<Func<T, object>> property);

        IFilterInputTypeDescriptor<T> Directive<TDirective>(
            TDirective directiveInstance)
            where TDirective : class;

        IFilterInputTypeDescriptor<T> Directive<TDirective>()
            where TDirective : class, new();

        IFilterInputTypeDescriptor<T> Directive(
            NameString name,
            params ArgumentNode[] arguments);

        public class RequireStruct<TStruct> where TStruct : struct { }
    }
}
