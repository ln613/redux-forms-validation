import React from 'react';
import { connect } from 'react-redux';

class TextBox extends React.Component {
    update = (v, validate) => {
        const p = this.props;
        p.dispatch({ type: 'textbox', name: p.name, value: v, required: p.required, title: p.title });
        if (v && validate && p.isValid)
            p.dispatch({ type: 'valid', name: p.name, valid: p.isValid(v), title: p.title });
    }
    change = e => this.update(e.target.value);
    blur = e => this.update(e.target.value, true);

    componentWillReceiveProps(p) {
        const n = this.props.name;
        const v1 = this.props.form.validate || {};
        const v2 = p.form.validate || {};
        if (v1[n] == null && v2[n] != null) {
            this.update(v2[n], true);
            this.props.dispatch({ type: 'validate', name: n, value: null });
        }
    }

    render() {
        const p = this.props;
        const err = p.form.errors && p.form.errors[p.name];

        const input = <input type="text" id={p.id || p.name} name={p.name} value={p.form[p.name]} className="form-control"
            onChange={this.change} onBlur={this.blur} placeholder={p.placeholder} disabled={p.disabled} maxLength={p.maxLength} />

        return (
            <div>
                <div>{p.title}</div>
                <div>{input}</div>
                {err ? <div className="error">{err}</div> : null}
            </div>
        );
    }
}

export default connect(x => ({ form: x.form.form }))(TextBox);