'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../styles/styles.css');

var _Title = require('./Title');

var _Title2 = _interopRequireDefault(_Title);

var _Error = require('./Error');

var _Error2 = _interopRequireDefault(_Error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var id = _ref.id,
        name = _ref.name,
        value = _ref.value,
        title = _ref.title,
        placeholder = _ref.placeholder,
        disabled = _ref.disabled,
        maxLength = _ref.maxLength,
        change = _ref.change,
        blur = _ref.blur,
        error = _ref.error,
        className = _ref.className,
        titleStyle = _ref.titleStyle,
        errorStyle = _ref.errorStyle;
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Title2.default, { title: title, className: className, titleStyle: titleStyle }),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('input', { type: 'text', id: id || name, name: name, value: value, className: (className || '') + ' rf-textbox',
                onChange: change, onBlur: blur, placeholder: placeholder, disabled: disabled, maxLength: maxLength })
        ),
        _react2.default.createElement(_Error2.default, { error: error, className: className, errorStyle: errorStyle })
    );
};