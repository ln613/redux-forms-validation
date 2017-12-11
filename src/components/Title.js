import React from 'react';

export default ({ title, className, titleStyle }) => (
    <div className={`${className} rf-title`} style={titleStyle}>{title}</div>
);