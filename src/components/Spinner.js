import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/spinner';
import TextBox from './TextBox';

export default class Spinner extends React.Component {
    componentDidMount() {
        const p = this.props;
        const id = p.id || p.name;
        if (id) {
            const spinner = $(`#${id}`).spinner({
                min: p.min || 0,
                max: p.max || 100000000,
                step: p.step || 1
            });
            if (typeof(p.default) === 'number')
                spinner.spinner('value', p.default);
            if (p.format)
                spinner.spinner("option", "numberFormat", p.format);
        }
    }

    componentWillUnmount() {
        const id = this.props.id || this.props.name;
        if (id)
            $(`#${id}`).spinner('destroy');
    }

    render() {
        return (
            <TextBox {...this.props} />
        );
    }
}
