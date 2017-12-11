'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function () {
  var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var a = arguments[1];

  switch (a.type) {
    case 'form_update':
      var s1 = _extends({}, s, _defineProperty({}, a.form, _extends({}, s[a.form], _defineProperty({}, a.name, a.value))));
      var txt = a.title ? a.title + ' is required' : 'Required';
      if (!a.value && a.required) return setErr(s1, a.form, a.name, txt);
      if (a.value && s1[a.form].errors && s1[a.form].errors[a.name] === txt) return setErr(s1, a.form, a.name, null);
      return s1;
    case 'form_valid':
      var err = s[a.form].errors[a.name];
      var isBool = typeof a.valid === 'boolean';
      var hasError = isBool && !a.valid || !isBool && a.valid;
      txt = isBool ? a.msg || (a.title ? a.title + ' is invalid' : 'Invalid') : a.valid;
      if (hasError) return setErr(s, a.form, a.name, txt);else if (err === txt) return setErr(s, a.form, a.name, null);
      return s;
    case 'error':
      return setErr(s, a.name, a.value);
    case 'validate':
      return _extends({}, s, { form: _extends({}, s.form, { validate: _extends({}, s.form.validate, _defineProperty({}, a.name, a.value)) }) });
    case 'form_invalid':
      return _extends({}, s, _defineProperty({}, a.name + 'Invalid', a.value));
    default:
      return s;
  }
};

var setErr = function setErr(s, f, n, v) {
  return _extends({}, s, _defineProperty({}, f, _extends({}, s[f], { errors: _extends({}, s[f].errors, _defineProperty({}, n, v)) })));
};