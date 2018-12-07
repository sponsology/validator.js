"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPercentage;

var _assertString = _interopRequireDefault(require("./util/assertString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isPercentage(str) {
  (0, _assertString.default)(str);
  var x = parseFloat(str);

  if (isNaN(x) || x < 0 || x > 100) {
    return false;
  }

  return true;
}

module.exports = exports.default;