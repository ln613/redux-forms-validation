import React from 'react';
import Title from './Title';
import Error from './Error';

export default ({ title, error, className, titleStyle, errorStyle, children }) => (
    <div>
        <Title title={title} className={className} titleStyle={titleStyle} />
        <div className={`${className} rf-inputDiv`}>{children}</div>
        <Error error={error} className={className} errorStyle={errorStyle} />
    </div>
);