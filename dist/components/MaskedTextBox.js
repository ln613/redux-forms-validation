'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('jquery-mask-plugin');

var _TextBox = require('./TextBox');

var _TextBox2 = _interopRequireDefault(_TextBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MaskedTextBox = function (_React$Component) {
    _inherits(MaskedTextBox, _React$Component);

    function MaskedTextBox() {
        _classCallCheck(this, MaskedTextBox);

        return _possibleConstructorReturn(this, (MaskedTextBox.__proto__ || Object.getPrototypeOf(MaskedTextBox)).apply(this, arguments));
    }

    _createClass(MaskedTextBox, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var id = this.props.id || this.props.name;
            if (id) {
                (0, _jquery2.default)('#' + id).mask(this.props.mask, { placeholder: this.props.placeholder });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_TextBox2.default, this.props);
        }
    }]);

    return MaskedTextBox;
}(_react2.default.Component);

exports.default = MaskedTextBox;