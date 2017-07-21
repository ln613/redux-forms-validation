export default (s = {}, a) => {
    switch (a.type) {
        case 'form_update':
            const s1 = { ...s, [a.form]: { ...s[a.form], [a.name]: a.value } };
            const req = a.title ? a.title + ' is required' : 'Required';
            if (!a.value && a.required)
                return setErr(s1, a.form, a.name, req);
            if (a.value && s1[a.form].errors && s1[a.form].errors[a.name] === req)
                return setErr(s1, a.form, a.name, null);
            return s1;
        case 'valid':
            const invalid = a.title ? a.title + ' is invalid' : 'Invalid';
            if (!a.valid)
                return setErr(s, a.name, invalid);
            if (a.valid && s.form.errors[a.name] === invalid)
                return setErr(s, a.name, null);
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