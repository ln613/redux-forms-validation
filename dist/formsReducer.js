'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _util = require('./util');

exports.default = function () {
  var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var a = arguments[1];

  switch (a.type) {

    case 'form_create':
      return (0, _ramda.assocPath)([a.form, 'errors'], [], s);

    case 'form_update':
      return update(s, a);

    case 'form_valid':
      return (0, _ramda.assocPath)([a.form, '_valid'], a.valid, s);

    default:
      return s;
  }
};

var setErr = function setErr(state, form, name, value) {
  return (0, _ramda.assocPath)([form, 'errors', name], value, state);
};

var update = function update(s, a) {
  var s1 = (0, _ramda.assocPath)([a.form, a.name], a.value, s);
  s1._dirty = true;

  if (typeof a.err !== 'undefined') return setErr(s1, a.form, a.name, a.err);

  return s1;
};