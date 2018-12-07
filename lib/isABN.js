"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isABN;

var _assertString = _interopRequireDefault(require("./util/assertString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validator = require('au-bn-validator');

function isABN(str) {
  (0, _assertString.default)(str);
  return validator.validateABN(str);
}

module.exports = exports.default;