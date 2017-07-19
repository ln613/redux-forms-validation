import React from 'react';
import TextBox from './TextBox';

const pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export default p => {
    return (
        <TextBox {...p} isValid={v => new RegExp(pattern).test(v)} />
    );
};