import React from 'react';
import $ from 'jquery';
import 'jquery-mask-plugin';
import TextBox from './TextBox';

export default class MaskedTextBox extends React.Component {
    componentDidMount() {
        const id = this.props.id || this.props.name;
        if (id) {
            $(`#${id}`).mask(this.props.mask, { placeholder: this.props.placeholder });
        }
    }

    render() {
        return (
            <TextBox {...this.props} />
        );
    }
}