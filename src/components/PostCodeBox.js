import React from 'react';
import MaskedTextBox from './MaskedTextBox';

export default p => {
    return (
        <MaskedTextBox {...p} mask="S0S 0S0" placeholder="__ __" isValid={v => v.length === 7} />
    );
};