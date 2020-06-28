import React from 'react';

const RenderField = (props: any) => {
  const {
    input,
    label,
    type,
    meta: { touched, error, warning }
  } = props;
  return (
    <div className='input_group'>
    <input id={input.name} {...input} placeholder={label} type={type} className={`auth-inputbox_field ${touched && error ? 'input-error' : ''}`} />
    <label htmlFor={input.name} className={`auth-inputbox_label ${touched && error ? 'is-error' : ''}`} >{label}</label>

    {touched &&
      ((error && <span className="error">{error}</span>) ||
        (warning && <span>{warning}</span>))}

  </div>
  )

}
export default RenderField;