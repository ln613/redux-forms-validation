import React from 'react';

export default ({ id, name, items, value, placeholder, disabled, onChange, className }) => (
  <select id={id || name} name={name} value={value} className={`${className || ''} rf-select`} onChange={onChange} disabled={disabled}>
    {placeholder ? <option value="">{placeholder}</option> : null}
    {(items || []).map(x => <option key={x.value} value={x.value}>{x.text}</option>)}
  </select>
)