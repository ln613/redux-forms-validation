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

var _util = require('../util');

var _ramda = require('ramda');

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
            var name = xp.name || (0, _util.getNameFromTitle)(xp.title);
            _this.update(_extends({}, xp, { name: name }), xp.default || xp.items[0].value);
          }
      });
    }, _this.checkAndUpdate = function (f, pc, v, s) {
      var m = _this.checkError(f, pc, v, s);
      _this.update(pc, v, m);
      return m;
    }, _this.update = function (pc, v, err) {
      if (typeof v === 'undefined') return;
      var p = _this.props;
      var o = { form: p.name, name: pc.name, title: pc.title };
      p.dispatch(_extends({ type: 'form_update' }, o, { value: v, required: pc.required, err: err }));
    }, _this.checkError = function (f, pc, v, s) {
      return (0, _util.getError)(f, pc.title, pc.name, v, pc.required, pc.isValid, pc.errMsg, s);
    }, _this.formHasErrorAfterDirty = function (f) {
      return f && f.errors && Object.keys(f.errors).filter(function (x) {
        return f.errors[x];
      }).length > 0;
    }, _this.formHasError = function (f) {
      return f._dirty ? _this.formHasErrorAfterDirty(f) : !_this.validateChildren(_this.props, f, true);
    }, _this.propHasError = function (f, p) {
      return f && f.errors && f.errors[p];
    }, _this.submit = function (f, onClick) {
      if (_this.validateChildren(_this.props, f)) onClick();
    }, _this.validateChildren = function (p, f, checkOnly) {
      return _react2.default.Children.map(p.children, function (x) {
        var xp = x.props;

        if (!xp) return true;

        var n = xp.name || (0, _util.getNameFromTitle)(xp.title || '');

        if (!n) {
          if (xp.children) return _this.validateChildren(xp, f, checkOnly);
          return true;
        }

        if (f.errors[n]) return false;

        var pc = _extends({}, xp, { name: n });
        var v = typeof f[n] === 'undefined' ? null : f[n];

        return (0, _ramda.isNil)(checkOnly ? _this.checkError(f, pc, v) : _this.checkAndUpdate(f, pc, v));
      }).every(function (v) {
        return v;
      });
    }, _this.renderChildren = function (p, f) {
      return _react2.default.Children.map(p.children, function (x) {
        var xp = x.props;

        if (!xp) return x;

        if (xp.submit) return _react2.default.createElement(
          'div',
          null,
          _this.formHasErrorAfterDirty(f) ? _react2.default.createElement(
            'div',
            { className: 'rf-error' },
            'Form has error'
          ) : null,
          _react2.default.cloneElement(x, {
            onClick: function onClick(e) {
              return _this.submit(f, xp.onClick);
            },
            disabled: xp.disableOnError && _this.formHasError(f)
          })
        );

        if (!xp.name && !xp.title) {
          if (xp.children) return _react2.default.cloneElement(x, { children: _this.renderChildren(xp, f) });else return x;
        }

        var name = xp.name || (0, _util.getNameFromTitle)(xp.title);

        var ps = {
          name: name,
          className: xp.className || p.className,
          value: f && f[name] || '',
          onChange: function onChange(e, i, v) {
            var t = i || e.target;
            var val = t.value;
            if (t.type === 'checkbox') val = t.checked;
            if (typeof val === 'undefined') val = v;
            _this.checkAndUpdate(f, _extends({}, xp, { name: name }), val, true);
          },
          onKeyDown: function onKeyDown(e) {
            return e.key;
          },
          onBlur: function onBlur(e) {
            return _this.checkAndUpdate(f, _extends({}, xp, { name: name }), e.target.value);
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
            className: (0, _util.ignoreBootStrap)(xp.className) || (0, _util.ignoreBootStrap)(p.className),
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

exports.default = (0, _reactRedux.connect)(function (x) {
  return { forms: x.forms };
})(Form);