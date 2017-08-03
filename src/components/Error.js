import React from 'react';
import '../styles/styles.css';

export default ({ error, className, errorStyle }) =>
    error ? <div className={`${className} rf-error`} style={errorStyle}>{error}</div> : null
;