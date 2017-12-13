import { is } from 'ramda';

export const getError = (form, title, name, value, required, isValid, errMsg, silent) => {
  const reqMsg = title ? title + ' is required' : 'Required';
  
  if (!value && required)
    return reqMsg;

  if (!silent && is(Function, isValid)) {
    const invalidMsg = title ? title + ' is invalid' : 'Invalid';
    const valid = isValid(value);
    const isBool = is(Boolean, valid);
    const hasError = (isBool && !valid) || (!isBool && valid);
    if (hasError)
      return isBool ? (errMsg || invalidMsg) : a.valid;
  }

  if (form && form.errors && form.errors[name])
    return null;
}

export const ignoreBootStrap = x => x && x.replace(/form-control/g, '');

export const getNameFromTitle = t => t.trim().split(' ').map(x => x.trim()).filter(x => x)
  .map((x, i) => i > 0 ? x[0].toUpperCase() + x.slice(1).toLowerCase() : x.toLowerCase()).join('');
