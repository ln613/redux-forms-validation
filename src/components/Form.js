import React from 'react';
import { connect } from 'react-redux';

class Form extends React.Component {
    update = (x, v, validate) => {
        const pf = this.props;
        const pc = x.props;
        pf.dispatch({ type: 'form_update', form: pf.name, name: pc.name, value: v, required: pc.required, title: pc.title });
        // if (v && validate && p.isValid)
        //     p.dispatch({ type: 'valid', name: p.name, valid: p.isValid(v), title: p.title });
    }
    change = e => this.update(e.target.value);
    blur = e => this.update(e.target.value, true);

    // componentWillReceiveProps(p) {
    //     const n = this.props.name;
    //     const v1 = this.props.form.validate || {};
    //     const v2 = p.form.validate || {};
    //     if (v1[n] == null && v2[n] != null) {
    //         this.update(v2[n], true);
    //         this.props.dispatch({ type: 'validate', name: n, value: null });
    //     }
    // }

    render() {
        const p = this.props;
        const c = p.forms[p.name];
        return <div>{React.Children.map(p.children, x => React.cloneElement(x, {
            value: (c && c[x.props.name]) || '',
            change: e => this.update(x, e.target.value),
            //blur: this.blur
            err: (c && c.errors && c.errors[x.props.name]) || ''
        }))}</div>;
    }
}

export default connect(x => ({ forms: x.forms }))(Form);