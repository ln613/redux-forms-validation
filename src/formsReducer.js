import { assocPath } from 'ramda';
import { getError } from './util';

export default (s = {}, a) => {
  switch (a.type) {

    case 'form_create':
      return assocPath([a.form, 'errors'], [], s);

    case 'form_update':
      return update(s, a);

    case 'form_valid':
      return assocPath([a.form, '_valid'], a.valid, s);

    default:
      return s;
  }
}

const setErr = (state, form, name, value) => assocPath([form, 'errors', name], value, state);

const update = (s, a) => {
  const s1 = assocPath([a.form, a.name], a.value, s);
  s1._dirty = true;

  if (typeof a.err !== 'undefined')
    return setErr(s1, a.form, a.name, a.err);
  
  return s1;
}