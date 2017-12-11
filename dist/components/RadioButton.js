'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioButton = function (_React$Component) {
    _inherits(RadioButton, _React$Component);

    function RadioButton() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, RadioButton);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RadioButton.__proto__ || Object.getPrototypeOf(RadioButton)).call.apply(_ref, [this].concat(args))), _this), _this.update = function (v) {
            return _this.props.dispatch({ type: 'radio', name: _this.props.name, value: v });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(RadioButton, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var p = this.props;
            var s = this.state || {};
            var v = p.form[p.name] || p.items[0].id;

            var btn = function btn(x) {
                return _react2.default.createElement(
                    'label',
                    { className: 'btn btn-default ' + (x.id === v ? 'active' : '') },
                    _react2.default.createElement('input', { type: 'radio', name: p.name, value: x.id, onClick: function onClick() {
                            return _this2.update(x.id);
                        } }),
                    x.name
                );
            };

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    p.title
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'btn-group', 'data-toggle': 'buttons' },
                    p.items.map(btn)
                )
            );
        }
    }]);

    return RadioButton;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (x) {
    return { form: x.form };
})(RadioButton);