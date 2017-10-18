import React from 'react';
import '../styles/styles.css';

export default ({ id, name, title, value, disabled, onChange, className }) => (
  <label>
    <input type="checkbox" id={id || name} name={name} checked={value}
      onChange={onChange} disabled={disabled} />&nbsp;
    {title}
  </label>
);