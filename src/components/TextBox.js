import React from 'react';

export default ({ id, name, value, placeholder, disabled, maxLength, onChange, onBlur, className }) => (
  <input type="text" id={id || name} name={name} value={value} className={`${className || ''} rf-textbox`}
    onChange={onChange} onBlur={onBlur} placeholder={placeholder} disabled={disabled} maxLength={maxLength} />
);