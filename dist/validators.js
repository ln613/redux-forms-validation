"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

var isEmail = exports.isEmail = function isEmail(x) {
  return new RegExp(emailPattern).test(x);
};

var isNumber = exports.isNumber = function isNumber(x) {
  return !isNaN(+x);
};

var max = exports.max = function max(x) {
  return function (y) {
    return x >= y;
  };
};

var min = exports.min = function min(x) {
  return function (y) {
    return x <= y;
  };
};

var all = exports.all = function all() {
  for (var _len = arguments.length, a = Array(_len), _key = 0; _key < _len; _key++) {
    a[_key] = arguments[_key];
  }

  return function (x) {
    return a.every(function (f) {
      return f(x);
    });
  };
};

var any = exports.any = function any() {
  for (var _len2 = arguments.length, a = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    a[_key2] = arguments[_key2];
  }

  return function (x) {
    return a.some(function (f) {
      return f(x);
    });
  };
};