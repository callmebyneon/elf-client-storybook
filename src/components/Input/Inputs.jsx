import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Select as SelectField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import Radio from '@mui/material/Radio';
import Slider from '@mui/material/Slider';

export function Form({ defaultValues, children, onSubmit, onError }) {
  const methods = useForm({ defaultValues });
  const { handleSubmit } = methods;
  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      {React.Children.map(children, (child) => {
        return child.props.name ? React.createElement(child.type, {
          ...{
            ...child.props,
            register: methods.register,
            key: child.props.name
          }
        }) : child;
      })}
    </form>
  )
};
Form.propTypes = {
  /**
   * Default form value object
   * @see https://react-hook-form.com/api/useform/#defaultValues
   * @type {FieldValues | Promise<FieldValues>}
   */
  defaultValues: PropTypes.any,
  /**
   * SubmitHandler : A successful callback
   * @see https://react-hook-form.com/api/userform/handlesubmit/
   * @type {(data: Object, e?: Event) => Promise<void>}
  */
  onSubmit: PropTypes.func.isRequired,
  /**
   * SubmitErrorHandler (Optional) : An error callback.
   * @see https://react-hook-form.com/api/userform/handlesubmit/
   * @type {(errors: Object, e?: Event) => Promise<void>}
   */
  onError: PropTypes.func,
}


export function Select({ register, options, name, ...rest }) {
  return (
    <SelectField inputProps={register(name, { required: rest?.required ? true : false })} {...rest}>
      {options.map(value => {
        if (typeof value !== 'string' || typeof value !== 'number') {
          return (
            <MenuItem key={value.value} value={value.value}>
              {String(value.label)}
            </MenuItem>
          )
        }
        return (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        )
      })}
    </SelectField>
  )
};

Select.propTypes = {
  /**
   * @see https://mui.com/material-ui/api/select/#props
   */
  ...SelectField.propTypes,
  /** 
   * The register function from `useForm` 
   * @see https://react-hook-form.com/api/useform/register/
   */
  register: PropTypes.func.isRequired,
  /** 
   * Options of select input
   * @type {Array<string | number | object>}
   */
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
      label: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])
    })),
  ]).isRequired,
  /**
   * Name of the form control.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name
   * When use with `register(name)`, it is input's name being registered.
   * @see https://react-hook-form.com/api/useform/register/
   */
  name: PropTypes.string.isRequired,
}


// `Slider` component replace `input[type="range"]`
export const RangeInput = ({ register, name, ariaLabel, ...rest }) => {
  if (!register) return <Slider name={name} aria-label={ariaLabel} {...rest} />
  return <Slider {...register(name, { required: rest?.required ? true : false })} aria-label={ariaLabel} {...rest} />;
}
RangeInput.propTypes = {
  /**
   * @see https://mui.com/material-ui/api/slider/#props
   */
  ...Slider.propTypes,
  /** 
   * The register function from `useForm` 
   * @see https://react-hook-form.com/api/useform/register/
   */
  register: PropTypes.func,
  /**
   * Name of the form control.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name
   * When use with `register(name)`, it is input's name being registered.
   * @see https://react-hook-form.com/api/useform/register/
   */
  name: function (props, propName, componentName) {
    // name property is required with register
    if (props['register'] && (!props[propName] || typeof props[propName] !== 'string')) {
      return new Error(`With \`register\` property, The \`${componentName}\` must have ${propName} property.`)
    }
  },
  /**
   * The label text of the slider
   */
  ariaLabel: PropTypes.string
}


export const CheckboxInput = ({ register, name, label, ...rest }) => {
  if (!register) return <FormControlLabel control={<Checkbox name={name} {...rest} />} label={label} />
  return <FormControlLabel control={<Checkbox inputProps={register(name, { required: rest?.required ? true : false })} {...rest} />} label={label} />
}
CheckboxInput.propTypes = {
  /**
   * @see https://mui.com/material-ui/api/checkbox/#props
   */
  ...Checkbox.propTypes,
  /** 
   * The register function from `useForm` 
   * @see https://react-hook-form.com/api/useform/register/
   */
  register: PropTypes.func,
  /**
   * Name of the form control.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name
   * When use with `register(name)`, it is input's name being registered.
   * @see https://react-hook-form.com/api/useform/register/
   */
  name: function (props, propName, componentName) {
    // name property is required with register
    if (props['register'] && (!props[propName] || typeof props[propName] !== 'string')) {
      return new Error(`With \`register\` property, The \`${componentName}\` must have ${propName} property.`)
    }
  },
  /**
   * A text to be used in an enclosing label element.
   */
  label: PropTypes.string
}


// This switch is invalid html props: <input type="switch">❌, only using UI component
export const SwitchInput = ({ register, name, label, ...rest }) => {
  if (!register) return <FormControlLabel control={<Switch name={name} {...rest} />} label={label} />
  return <FormControlLabel control={<Switch inputProps={register(name, { required: rest?.required ? true : false })} {...rest} />} label={label} />
}
SwitchInput.propTypes = {
  /**
   * @see https://mui.com/material-ui/api/switch/#props
   */
  ...Switch.propTypes,
  /** 
   * The register function from `useForm` 
   * @see https://react-hook-form.com/api/useform/register/
   */
  register: PropTypes.func,
  /**
   * Name of the form control.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name
   * When use with `register(name)`, it is input's name being registered.
   * @see https://react-hook-form.com/api/useform/register/
   */
  name: function (props, propName, componentName) {
    // name property is required with register
    if (props['register'] && (!props[propName] || typeof props[propName] !== 'string')) {
      return new Error(`With \`register\` property, The \`${componentName}\` must have ${propName} property.`)
    }
  },
  /**
   * A text to be used in an enclosing label element.
   */
  label: PropTypes.string
}


export const RadioInput = ({ register, name, label, value, ...rest }) => {
  if (!register) return <FormControlLabel control={<Radio name={name} {...rest} />} label={label} value={value} />
  return <FormControlLabel control={<Radio inputProps={register(name, { required: rest?.required ? true : false })} {...rest} />} label={label} value={value} />
}
RadioInput.propTypes = {
  /**
   * @see https://mui.com/material-ui/api/radio/#props
   */
  ...Radio.propTypes,
  /** 
   * The register function from `useForm` 
   * @see https://react-hook-form.com/api/useform/register/
   */
  register: PropTypes.func,
  /**
   * Name of the form control.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name
   * When use with `register(name)`, it is input's name being registered.
   * @see https://react-hook-form.com/api/useform/register/
   */
  name: function (props, propName, componentName) {
    // name property is required with register
    if (props['register'] && (!props[propName] || typeof props[propName] !== 'string')) {
      return new Error(`With \`register\` property, The \`${componentName}\` must have ${propName} property.`)
    }
  },
  /**
   * A text to be used in an enclosing label element.
   */
  label: PropTypes.string,
  /**
   * The value of the Radio component
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}


export const TextInput = ({ register, name, inputProps, ...rest }) => {
  if (!register) return <TextField name={name} inputProps={inputProps} {...rest} />;
  return <TextField inputProps={{ ...register(name, { required: rest?.required ? true : false }), ...inputProps }} {...rest} />;
}
TextInput.propTypes = {
  /**
   * @see https://mui.com/material-ui/api/text-field/#props
   */
  ...TextField.propTypes,
  /** 
   * The register function from `useForm` 
   * @see https://react-hook-form.com/api/useform/register/
  */
  register: PropTypes.func,
  /**
   * Name of the form control.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name
   * When use with `register(name)`, it is input's name being registered.
   * @see https://react-hook-form.com/api/useform/register/
   */
  name: function (props, propName, componentName) {
    // name property is required with register
    if (props['register'] && (!props[propName] || typeof props[propName] !== 'string')) {
      return new Error(`With \`register\` property, The \`${componentName}\` must have ${propName} property.`)
    }
  },
  /**
   * Attributes applied to the `input` element.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes
   */
  inputProps: PropTypes.object
}
TextInput.defaultProps = {
  inputProps: {}
}
