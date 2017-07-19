import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/datepicker';
import TextBox from './TextBox';

class DatePicker extends React.Component {
    componentDidMount() {
        const id = this.props.id || this.props.name;
        if (id) {
            $(`#${id}`).datepicker({
                dateFormat: 'yy/mm/dd',
                defaultDate: new Date(1975, 0, 1),
                onSelect: v => this.props.dispatch({ type: 'validate', name: id, value: v })
            });
            $(`#${id}`).addClass('hasDatepicker');
        }
    }

    componentWillUnmount() {
        const id = this.props.id || this.props.name;
        if (id)
            $(`#${id}`).datepicker('destroy');
    }

    render() {
        return (
            <TextBox {...this.props} isValid={d => !isNaN(Date.parse(d))} />
        );
    }
}

export default connect(x => ({ form: x.form }))(DatePicker);