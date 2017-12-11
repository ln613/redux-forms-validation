'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Title = require('./Title');

var _Title2 = _interopRequireDefault(_Title);

var _Error = require('./Error');

var _Error2 = _interopRequireDefault(_Error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var title = _ref.title,
        error = _ref.error,
        className = _ref.className,
        titleStyle = _ref.titleStyle,
        errorStyle = _ref.errorStyle,
        children = _ref.children;
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Title2.default, { title: title, className: className, titleStyle: titleStyle }),
        _react2.default.createElement(
            'div',
            { className: className + ' rf-inputDiv' },
            children
        ),
        _react2.default.createElement(_Error2.default, { error: error, className: className, errorStyle: errorStyle })
    );
};