"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var id = _ref.id,
      name = _ref.name,
      title = _ref.title,
      value = _ref.value,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      className = _ref.className;
  return _react2.default.createElement(
    "label",
    null,
    _react2.default.createElement("input", { type: "checkbox", id: id || name, name: name, checked: value,
      onChange: onChange, disabled: disabled }),
    "\xA0",
    title
  );
};