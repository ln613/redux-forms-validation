import React from 'react';

export default ({ id, name, value, title, placeholder, disabled, maxLength, change, blur, err }) => (
    <div>
        <div>{title}</div>
        <div>
            <input type="text" id={id || name} name={name} value={value} className="form-control"
                onChange={change} onBlur={blur} placeholder={placeholder} disabled={disabled} maxLength={maxLength} />
        </div>
        {err ? <div className="error">{err}</div> : null}
    </div>
);