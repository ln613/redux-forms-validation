'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var id = _ref.id,
      name = _ref.name,
      value = _ref.value,
      placeholder = _ref.placeholder,
      disabled = _ref.disabled,
      maxLength = _ref.maxLength,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      className = _ref.className;
  return _react2.default.createElement('input', { type: 'text', id: id || name, name: name, value: value, className: (className || '') + ' rf-textbox',
    onChange: onChange, onBlur: onBlur, placeholder: placeholder, disabled: disabled, maxLength: maxLength });
};