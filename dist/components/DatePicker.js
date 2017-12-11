'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('jquery-ui/ui/widgets/datepicker');

var _TextBox = require('./TextBox');

var _TextBox2 = _interopRequireDefault(_TextBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatePicker = function (_React$Component) {
    _inherits(DatePicker, _React$Component);

    function DatePicker() {
        _classCallCheck(this, DatePicker);

        return _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).apply(this, arguments));
    }

    _createClass(DatePicker, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var id = this.props.id || this.props.name;
            if (id) {
                (0, _jquery2.default)('#' + id).datepicker({
                    dateFormat: 'yy/mm/dd',
                    defaultDate: new Date(1975, 0, 1),
                    onSelect: function onSelect(v) {
                        return _this2.props.dispatch({ type: 'validate', name: id, value: v });
                    }
                });
                (0, _jquery2.default)('#' + id).addClass('hasDatepicker');
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var id = this.props.id || this.props.name;
            if (id) (0, _jquery2.default)('#' + id).datepicker('destroy');
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_TextBox2.default, _extends({}, this.props, { isValid: function isValid(d) {
                    return !isNaN(Date.parse(d));
                } }));
        }
    }]);

    return DatePicker;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (x) {
    return { form: x.form };
})(DatePicker);