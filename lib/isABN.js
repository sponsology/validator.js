'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isABN;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validator = require('au-bn-validator');

function isABN(str) {
  (0, _assertString2.default)(str);
  return validator.validateABN(str);
}
module.exports = exports['default'];