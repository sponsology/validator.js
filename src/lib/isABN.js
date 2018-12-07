import assertString from './util/assertString';

function validateABN(abn) {
  const weights = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  const modulus = 89;

  if (typeof abn === 'string') {
    abn = abn.replace(/\s/g, '').replace(/-/g, '').split('');
  }

  if (abn.length !== 11) {
    return false;
  }

  let abnSum = weights.map((val, index) => {
    return val * (abn[index] - (index ? 0 : 1));
  }).reduce((p, w) => {
    return p + w;
  }, 0);

  let rem = abnSum % modulus;

  return abnSum > 0 && rem === 0;
}

export default function isABN(str) {
  assertString(str);
  return validateABN(str);
}
