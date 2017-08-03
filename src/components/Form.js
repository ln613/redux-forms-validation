import React from 'react';
import { connect } from 'react-redux';
import InputWrapper from './InputWrapper';

class Form extends React.Component {
    update = (pc, v, validate) => {
        const p = this.props;
        const o = { form: p.name, name: pc.name, title: pc.title };
        p.dispatch({ type: 'form_update', ...o, value: v, required: pc.required });
        if (v && validate && pc.isValid)
            p.dispatch({ type: 'form_valid', ...o, valid: pc.isValid(v) });
    }

    change = e => this.update(e.target.value);

    blur = e => this.update(e.target.value, true);

    hasError = f => f && f.errors && Object.keys(f.errors).filter(x => f.errors[x]).length > 0;

    submit = f => {
        this.validateChildren(this.props, f);
    }

    validateChildren = (p, f) => React.Children.map(p.children, x => {
        const xp = x.props;

        if (!xp) return;

        const n = xp.name || getNameFromTitle(xp.title || '');

        if (!n) {
            if (xp.children) this.validateChildren(xp, f);
            return;
        }

        if (f.errors[n]) return;

        this.update({...xp, name: n }, f[n], true);
    });

    // componentWillReceiveProps(p) {
    //     const n = this.props.name;
    //     const v1 = this.props.form.validate || {};
    //     const v2 = p.form.validate || {};
    //     if (v1[n] == null && v2[n] != null) {
    //         this.update(v2[n], true);
    //         this.props.dispatch({ type: 'validate', name: n, value: null });
    //     }
    // }

    // p = current elem's props, f = form obj in the store
    renderChildren = (p, f) => React.Children.map(p.children, x => {
        const xp = x.props;

        if (!xp) return x;

        if (xp.submit)
            return (
                <div>
                    {this.hasError(f) ? <div className="rf-error">Form has error</div> : null}
                    {React.cloneElement(x, { onClick: () => this.submit(f) })}
                </div>
            );

        if (xp.children)
            return React.cloneElement(x, { children: this.renderChildren(xp, f) });

        if (!xp.name && !xp.title) return x;

        const name = xp.name || getNameFromTitle(xp.title);

        const ps = {
            name,
            className: xp.className || p.className,
            value: (f && f[name]) || '',
            onChange: e => this.update({...xp, name}, e.target.value),
            onBlur: e => this.update({...xp, name}, e.target.value, true),
        };

        return (
            <InputWrapper
                title={x.props.title}
                className={ignoreBootStrap(xp.className) || ignoreBootStrap(p.className)}
                titleStyle={xp.titleStyle || p.titleStyle}
                errorStyle={xp.erroStyle || p.errorStyle}
                error={(f && f.errors && f.errors[name]) || ''}
            >
                {React.cloneElement(x, ps)}
            </InputWrapper>
        );
    });

    render() {
        const p = this.props;
        const f = p.forms[p.name] || { errors: {} };
        // return <div>{React.Children.map(p.children, x => React.cloneElement(x, {
        //     value: (c && c[x.props.name]) || '',
        //     change: e => this.update(x, e.target.value),
        //     //blur: this.blur
        //     error: (c && c.errors && c.errors[x.props.name]) || ''
        // }))}</div>;
        return <div>{this.renderChildren(p, f)}</div>;
    }
}

const ignoreBootStrap = x => x && x.replace(/form-control/g, '');

const getNameFromTitle = t => t.trim().split(' ').map(x => x.trim()).filter(x => x)
    .map((x, i) => i > 0 ? x[0].toUpperCase() + x.slice(1).toLowerCase() : x.toLowerCase()).join('');

export default connect(x => ({ forms: x.forms }))(Form);