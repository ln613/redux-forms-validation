import React from 'react';
import { connect } from 'react-redux';
import InputWrapper from './InputWrapper';
import { ignoreBootStrap, getNameFromTitle, getError } from '../util';
import { isNil } from 'ramda';

class Form extends React.Component {
  componentWillMount() {
    const p = this.props;
    const f = p.forms[p.name];
    if (!f) {
      this.props.dispatch({ type: 'form_create', form: p.name });
      this.setDefault(p, f);
    }
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

  checkAndUpdate = (f, pc, v, s) => {
    const m = this.checkError(f, pc, v, s);
    this.update(pc, v, m);
    return m;
  }

  update = (pc, v, err) => {
    if (typeof v === 'undefined') return;
    const p = this.props;
    const o = { form: p.name, name: pc.name, title: pc.title };
    p.dispatch({ type: 'form_update', ...o, value: v, required: pc.required, err });
  }

  checkError = (f, pc, v, s) => {
    return getError(f, pc.title, pc.name, v, pc.required, pc.isValid, pc.errMsg, s);
  }

  formHasErrorAfterDirty = f => f && f.errors && Object.keys(f.errors).filter(x => f.errors[x]).length > 0;

  formHasError = f => f._dirty ? this.formHasErrorAfterDirty(f) : !this.validateChildren(this.props, f, true);

  propHasError = (f, p) => f && f.errors && f.errors[p];

  submit = (f, onClick) => {
    if (this.validateChildren(this.props, f))
      onClick();  
  }

  validateChildren = (p, f, checkOnly) => React.Children.map(p.children, x => {
    const xp = x.props;

    if (!xp) return true;

    const n = xp.name || getNameFromTitle(xp.title || '');

    if (!n) {
      if (xp.children)
        return this.validateChildren(xp, f, checkOnly);
      return true;
    }

    if (f.errors[n]) return false;

    const pc = { ...xp, name: n };
    const v = (typeof f[n] === 'undefined') ? null : f[n];

    return isNil(checkOnly ? this.checkError(f, pc, v) : this.checkAndUpdate(f, pc, v));
  
  }).every(v => v);

  // p = current elem's props, f = form obj in the store
  renderChildren = (p, f) =>
    React.Children.map(p.children, x => {
      const xp = x.props;

      if (!xp) return x;

      if (xp.submit)
        return (
          <div>
            {this.formHasErrorAfterDirty(f) ? <div className="rf-error">Form has error</div> : null}
            {React.cloneElement(x, {
              onClick: e => this.submit(f, xp.onClick),
              disabled: xp.disableOnError && this.formHasError(f)
            })}
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
          const t = i || e.target;
          let val = t.value;
          if (t.type === 'checkbox') val = t.checked;
          if (typeof val === 'undefined') val = v;
          this.checkAndUpdate(f, { ...xp, name }, val, true);
        },
        onKeyDown: e => e.key,
        onBlur: e => this.checkAndUpdate(f, { ...xp, name }, e.target.value),
      };

      if (xp.onEnter || xp.onEscape) {
        ps.onKeyDown = e => {
          switch (e.key) {
            case 'Enter':
              xp.onEnter();
              break;
            case 'Escape':
              xp.onEscape();
              break;
            default:
              break;
          };
        };
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

export default connect(x => ({ forms: x.forms }))(Form);