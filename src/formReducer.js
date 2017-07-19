export default (s = { form: { errors: {}, validate: {} } }, a) => {
    switch (a.type) {
        case 'textbox':
        case 'select':
        case 'radio':
        case 'checkbox':
            const s1 = { ...s, form: { ...s.form, [a.name]: a.value } };
            const req = a.title ? a.title + ' is required' : 'Required';
            if (!a.value && a.required)
                return setErr(s1, a.name, req);
            if (a.value && s1.form.errors[a.name] === req)
                return setErr(s1, a.name, null);
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

const setErr = (s, n, v) => ({ ...s, form: { ...s.form, errors: { ...s.form.errors, [n]: v } } });