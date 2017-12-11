'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MaskedTextBox = require('./MaskedTextBox');

var _MaskedTextBox2 = _interopRequireDefault(_MaskedTextBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (p) {
    return _react2.default.createElement(_MaskedTextBox2.default, _extends({}, p, { mask: '(000) 000-0000', pattern: '(\\d{3}) \\d{3}-\\d{4}',
        placeholder: '(__) __-____', isValid: function isValid(v) {
            return v.length === 14;
        } }));
};