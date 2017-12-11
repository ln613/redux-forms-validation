'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _TextBox = require('./TextBox');

var _TextBox2 = _interopRequireDefault(_TextBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddressBox = function (_React$Component) {
    _inherits(AddressBox, _React$Component);

    function AddressBox() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, AddressBox);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddressBox.__proto__ || Object.getPrototypeOf(AddressBox)).call.apply(_ref, [this].concat(args))), _this), _this.autoFill = function (name, box, address) {
            var t = address.address_components.filter(function (x) {
                return x.types.length > 0 && x.types[0] === name;
            });
            if (t && box) _this.props.dispatch({ type: 'validate', name: box, value: t[0].short_name });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(AddressBox, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // const p = this.props;
            // const autoComplete = new window.google.maps.places.Autocomplete(document.getElementById(p.id || p.name), {
            //     componentRestrictions: { country: 'ca' },
            //     types: ['geocode']
            // });
            // this.setState({ autoComplete });

            // autoComplete.addListener('place_changed', () => {
            //     const address = autoComplete.getPlace();
            //     if (address && address.address_components) {
            //         this.props.dispatch({ type: 'validate', name: p.id || p.name, value: address.formatted_address.split(',')[0] });

            //         this.autoFill('locality', p.cityBox, address);
            //         this.autoFill('administrative_area_level_1', p.provinceBox, address);
            //         this.autoFill('postal_code', p.postCodeBox, address);
            //     }
            // });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_TextBox2.default, this.props);
        }
    }]);

    return AddressBox;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (x) {
    return { form: x.form };
})(AddressBox);