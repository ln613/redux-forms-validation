export default (s = {}, a) => {
  switch (a.type) {
    case 'form_create':
      return { ...s, [a.form]: { errors: [] } };
    case 'form_update':
      const s1 = { ...s, [a.form]: { ...s[a.form], [a.name]: a.value } };
      let txt = a.title ? a.title + ' is required' : 'Required';
      if (!a.value && a.required)
        return setErr(s1, a.form, a.name, txt);
      if (a.value && s1[a.form].errors && s1[a.form].errors[a.name] === txt)
        return setErr(s1, a.form, a.name, null);
      return s1;
    case 'form_valid':
      let err = s[a.form].errors[a.name];
      const isBool = typeof a.valid === 'boolean';
      const hasError = (isBool && !a.valid) || (!isBool && a.valid);
      txt = isBool ? (a.msg || (a.title ? a.title + ' is invalid' : 'Invalid')) : a.valid;
      if (hasError)
        return setErr(s, a.form, a.name, txt);
      else if (err === txt)
        return setErr(s, a.form, a.name, null);
      return s;
    case 'error':
      return setErr(s, a.name, a.value);
    case 'validate':
      return { ...s, form: { ...s.form, validate: { ...s.form.validate, [a.name]: a.value } } };
    case 'form_invalid':
      return { ...s, [a.name + 'Invalid']: a.value };
    default:
      return s;
  }
}

const setErr = (s, f, n, v) => ({ ...s, [f]: { ...s[f], errors: { ...s[f].errors, [n]: v } } });
