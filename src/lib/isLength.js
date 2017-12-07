import assertString from './util/assertString';

/* eslint-disable prefer-rest-params */
export default function isLength(str, options) {
  //assertString(str);
  let str2 = ""+str;
  let min;
  let max;
  if (typeof (options) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else { // backwards compatibility: isLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }
  const surrogatePairs = str2.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
  const len = str2.length - surrogatePairs.length;
  return len >= min && (typeof max === 'undefined' || len <= max);
}
