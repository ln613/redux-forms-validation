'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _InputWrapper = require('./InputWrapper');

var _InputWrapper2 = _interopRequireDefault(_InputWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args))), _this), _this.setDefault = function (p, f) {
      return _react2.default.Children.map(p.children, function (x) {
        var xp = x.props;
        if (xp.default || Array.isArray(xp.items) && xp.items.length > 1 && !xp.placeholder // select without placeholder
        ) {
            var name = xp.name || getNameFromTitle(xp.title);
            _this.update(_extends({}, xp, { name: name }), xp.default || xp.items[0].value);
          }
      });
    }, _this.update = function (pc, v, validate) {
      if (typeof v === 'undefined') return;
      var p = _this.props;
      var o = { form: p.name, name: pc.name, title: pc.title };
      p.dispatch(_extends({ type: 'form_update' }, o, { value: v, required: pc.required }));
      if (v && validate && pc.isValid) p.dispatch(_extends({ type: 'form_valid' }, o, { valid: pc.isValid(v), msg: pc.errMsg }));
    }, _this.hasError = function (f) {
      return f && f.errors && Object.keys(f.errors).filter(function (x) {
        return f.errors[x];
      }).length > 0;
    }, _this.submit = function (f) {
      _this.validateChildren(_this.props, f);
    }, _this.validateChildren = function (p, f) {
      return _react2.default.Children.map(p.children, function (x) {
        var xp = x.props;

        if (!xp) return;

        var n = xp.name || getNameFromTitle(xp.title || '');

        if (!n) {
          if (xp.children) _this.validateChildren(xp, f);
          return;
        }

        if (f.errors[n]) return;

        _this.update(_extends({}, xp, { name: n }), typeof f[n] === 'undefined' ? null : f[n], true);
      });
    }, _this.renderChildren = function (p, f) {
      return _react2.default.Children.map(p.children, function (x) {
        var xp = x.props;

        if (!xp) return x;

        if (xp.submit) return _react2.default.createElement(
          'div',
          null,
          _this.hasError(f) ? _react2.default.createElement(
            'div',
            { className: 'rf-error' },
            'Form has error'
          ) : null,
          _react2.default.cloneElement(x, { onClick: function onClick() {
              return _this.submit(f);
            } })
        );

        if (!xp.name && !xp.title) {
          if (xp.children) return _react2.default.cloneElement(x, { children: _this.renderChildren(xp, f) });else return x;
        }

        var name = xp.name || getNameFromTitle(xp.title);

        var ps = {
          name: name,
          className: xp.className || p.className,
          value: f && f[name] || '',
          onChange: function onChange(e, i, v) {
            var t = i || e.target;
            var val = t.value;
            if (t.type === 'checkbox') val = t.checked;
            if (typeof val === 'undefined') val = v;
            _this.update(_extends({}, xp, { name: name }), val);
          },
          onKeyDown: function onKeyDown(e) {
            return e.key;
          },
          onBlur: function onBlur(e) {
            return _this.update(_extends({}, xp, { name: name }), e.target.value, true);
          }
        };

        if (xp.onEnter || xp.onEscape) {
          ps.onKeyDown = function (e) {
            switch (e.key) {
              case 'Enter':
                xp.onEnter();
                break;
              case 'Escape':
                xp.onEscape();
                break;
              default:
                break;
            };
          };
        };

        return _react2.default.createElement(
          _InputWrapper2.default,
          {
            title: x.props.title,
            className: ignoreBootStrap(xp.className) || ignoreBootStrap(p.className),
            titleStyle: xp.titleStyle || p.titleStyle,
            errorStyle: xp.erroStyle || p.errorStyle,
            error: f && f.errors && f.errors[name] || ''
          },
          _react2.default.cloneElement(x, ps)
        );
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Form, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var p = this.props;
      var f = p.forms[p.name];
      if (!f) {
        this.props.dispatch({ type: 'form_create', form: p.name });
        this.setDefault(p, f);
      }
    }

    // p = current elem's props, f = form obj in the store

  }, {
    key: 'render',
    value: function render() {
      var p = this.props;
      var f = p.forms[p.name] || { errors: {} };
      return _react2.default.createElement(
        'div',
        { className: p.className },
        this.renderChildren(p, f)
      );
    }
  }]);

  return Form;
}(_react2.default.Component);

var ignoreBootStrap = function ignoreBootStrap(x) {
  return x && x.replace(/form-control/g, '');
};

var getNameFromTitle = function getNameFromTitle(t) {
  return t.trim().split(' ').map(function (x) {
    return x.trim();
  }).filter(function (x) {
    return x;
  }).map(function (x, i) {
    return i > 0 ? x[0].toUpperCase() + x.slice(1).toLowerCase() : x.toLowerCase();
  }).join('');
};

exports.default = (0, _reactRedux.connect)(function (x) {
  return { forms: x.forms };
})(Form);