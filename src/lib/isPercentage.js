import assertString from './util/assertString';

export default function isPercentage(str) {
  assertString(str);
  let x = parseFloat(str);

  if (isNaN(x) || x < 0 || x > 100) {
    return false;
  }

  return true;
}
