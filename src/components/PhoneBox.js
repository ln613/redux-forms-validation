import React from 'react';
import MaskedTextBox from './MaskedTextBox';

export default p => {
    return (
        <MaskedTextBox {...p} mask="(000) 000-0000" pattern="(\d{3}) \d{3}-\d{4}"
            placeholder="(__) __-____" isValid={v => v.length === 14} />
    );
};