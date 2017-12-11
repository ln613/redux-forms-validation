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
      items = _ref.items,
      value = _ref.value,
      placeholder = _ref.placeholder,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      className = _ref.className;
  return _react2.default.createElement(
    'select',
    { id: id || name, name: name, value: value, className: (className || '') + ' rf-select', onChange: onChange, disabled: disabled },
    placeholder ? _react2.default.createElement(
      'option',
      { value: '' },
      placeholder
    ) : null,
    (items || []).map(function (x) {
      return _react2.default.createElement(
        'option',
        { key: x.value, value: x.value },
        x.text
      );
    })
  );
};