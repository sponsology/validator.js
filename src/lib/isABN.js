import assertString from './util/assertString';

let validator = require('au-bn-validator');

export default function isABN(str) {
  assertString(str);
  return validator.validateABN(str);
}
