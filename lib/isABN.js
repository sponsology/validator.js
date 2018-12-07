"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isABN;

var _assertString = _interopRequireDefault(require("./util/assertString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateABN(abn) {
  var weights = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  var modulus = 89;

  if (typeof abn === 'string') {
    abn = abn.replace(/\s/g, '').replace(/-/g, '').split('');
  }

  if (abn.length !== 11) {
    return false;
  }

  var abnSum = weights.map(function (val, index) {
    return val * (abn[index] - (index ? 0 : 1));
  }).reduce(function (p, w) {
    return p + w;
  }, 0);
  var rem = abnSum % modulus;
  return abnSum > 0 && rem === 0;
}

function isABN(str) {
  (0, _assertString.default)(str);
  return validateABN(str);
}

module.exports = exports.default;