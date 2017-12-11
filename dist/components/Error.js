'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../styles/styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var error = _ref.error,
        className = _ref.className,
        errorStyle = _ref.errorStyle;
    return error ? _react2.default.createElement(
        'div',
        { className: className + ' rf-error', style: errorStyle },
        error
    ) : null;
};