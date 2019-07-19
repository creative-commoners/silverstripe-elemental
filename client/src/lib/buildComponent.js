import React from 'react';
import Injector from 'lib/Injector';

// Functionality borrowed from FormBuilder::buildComponent
export const buildComponent = (
  props,
  identifier,
  createFn = null,
  injectorContainer = Injector
) => {
  // Inline `input` props into main field props
  // (each component can pick and choose the props required for it's <input>
  // See http://redux-form.com/6.0.5/docs/api/Field.md/#input-props
  const inputProps = props.input || {};
  const componentProps = {
    ...props,
    ...props.input,
    schemaComponent: props.component || props.schemaComponent || null,
    onChange: inputProps.onChange
      ? (event, payload) => {
        inputProps.onChange(payload ? payload.value : event);
      }
      : null,
  };

  console.log(componentProps);

  delete componentProps.input;
  const { name } = componentProps;
  // 'component' key is renamed to 'schemaComponent' in normalize*() methods
  const SchemaComponent = componentProps.schemaComponent !== null
    ? prepInjector(injectorContainer).get(componentProps.schemaComponent, `${identifier}.${name}`)
    : getComponentForDataType(componentProps.schemaType, name, identifier, injectorContainer);

  if (SchemaComponent === null) {
    return null;
  } else if (componentProps.schemaComponent !== null && SchemaComponent === undefined) {
    throw Error(`Component not found in injector: ${componentProps.schemaComponent}`);
  }

  // Provides container components a place to hook in
  // and apply customisations to scaffolded components.
  if (typeof createFn === 'function') {
    return createFn(SchemaComponent, componentProps);
  }
  return <SchemaComponent key={componentProps.id} {...componentProps} />;
};

export const fieldToComponent = (
  field,
  identifier,
  propsReducer = fieldProps => fieldProps,
  BaseFieldComponent = null,
  createFn = null,
  injectorContainer = Injector
) => {
  const builder =
      fieldSchema => buildComponent(fieldSchema, identifier, createFn, injectorContainer);

  const FieldComponent = BaseFieldComponent ||
    prepInjector(injectorContainer).get('ReduxFormField');

  let props = field;
  if (field.children) {
    props = Object.assign(
      {},
      field,
      { children: field.children.map(builder), }
    );
  }
  props = propsReducer(props);

  // Don't wrap structural or readonly fields, since they don't need connected fields.
  // The redux-form connected fields also messed up reactstrap's tab handling.
  if (field.schemaType === 'Structural' || field.readOnly === true) {
    return builder(props);
  }

  return <FieldComponent key={props.id} {...props} component={builder} />;
};

export const getComponentForDataType = (
  dataType,
  name,
  identifier,
  injectorContainer = Injector
) => {
  const get = (type) => prepInjector(injectorContainer).get(type, `${identifier}.${name}`);

  switch (dataType) {
    case 'Integer':
    case 'Decimal':
      return get('NumberField');
    case 'String':
    case 'Text':
      return get('TextField');
    case 'Date':
      return get('DateField');
    case 'Time':
      return get('TimeField');
    case 'Datetime':
      return get('DatetimeField');
    case 'Hidden':
      return get('HiddenField');
    case 'SingleSelect':
      return get('SingleSelectField');
    case 'Custom':
      return get('GridField');
    case 'Structural':
      return get('CompositeField');
    case 'Boolean':
      return get('CheckboxField');
    case 'MultiSelect':
      return get('CheckboxSetField');
    default:
      return null;
  }
};

const prepInjector = container => {
  const { component, form, query } = container;

  return {
    query: query.get.bind(query),
    get: component.get.bind(component),
    validate: form.getValidation.bind(form),
  };
};


export default buildComponent;
