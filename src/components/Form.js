import React from 'react';
import { connect } from 'react-redux';
import InputWrapper from './InputWrapper';

class Form extends React.Component {
  componentWillMount() {
    const p = this.props;
    const f = p.forms[p.name];
    if (!f) this.setDefault(p, f);
  }

  setDefault = (p, f) => React.Children.map(p.children, x => {
    const xp = x.props;
    if (xp.default ||
      (Array.isArray(xp.items) && xp.items.length > 1 && !xp.placeholder) // select without placeholder
    ) {
      const name = xp.name || getNameFromTitle(xp.title);
      this.update({ ...xp, name }, xp.default || xp.items[0].value);
    }
  })

  update = (pc, v, validate) => {
    const p = this.props;
    const o = { form: p.name, name: pc.name, title: pc.title };
    p.dispatch({ type: 'form_update', ...o, value: v, required: pc.required });
    if (v && validate && pc.isValid)
      p.dispatch({ type: 'form_valid', ...o, valid: pc.isValid(v), msg: pc.errMsg });
  }

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

    this.update({ ...xp, name: n }, f[n], true);
  });

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

    if (!xp.name && !xp.title) {
      if (xp.children)
        return React.cloneElement(x, { children: this.renderChildren(xp, f) });
      else
        return x;
    }  

    const name = xp.name || getNameFromTitle(xp.title);

    const ps = {
      name,
      className: xp.className || p.className,
      value: (f && f[name]) || '',
      onChange: (e, i, v) => {
        let val = e.target.value;
        if (e.target.type === 'checkbox') val = e.target.checked;
        if (typeof e.target.value === undefined) val = v;
        this.update({ ...xp, name }, val);
      },
      onBlur: e => this.update({ ...xp, name }, e.target.value, true),
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
    return <div className={p.className}>{this.renderChildren(p, f)}</div>;
  }
}

const ignoreBootStrap = x => x && x.replace(/form-control/g, '');

const getNameFromTitle = t => t.trim().split(' ').map(x => x.trim()).filter(x => x)
  .map((x, i) => i > 0 ? x[0].toUpperCase() + x.slice(1).toLowerCase() : x.toLowerCase()).join('');

export default connect(x => ({ forms: x.forms }))(Form);