import React from 'react';
import '../styles/styles.css';

export default ({ title, className, titleStyle }) => (
    <div className={`${className} rf-title`} style={titleStyle}>{title}</div>
);