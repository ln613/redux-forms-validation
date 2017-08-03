import React from 'react';
import '../styles/styles.css';
import Title from './Title';
import Error from './Error';

export default ({ id, name, value, title, placeholder, disabled, maxLength, change, blur, error, className, titleStyle, errorStyle }) => (
    <div>
        <Title title={title} className={className} titleStyle={titleStyle} />
        <div>
            <input type="text" id={id || name} name={name} value={value} className={`${className || ''} rf-textbox`}
                onChange={change} onBlur={blur} placeholder={placeholder} disabled={disabled} maxLength={maxLength} />
        </div>
        <Error error={error} className={className} errorStyle={errorStyle} />
    </div>
);