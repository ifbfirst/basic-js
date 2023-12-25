const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const words = s2.split("");
  return s1.split("").reduce((accumulator, currentValue) => {
    const i = words.indexOf(currentValue);
    if (i !== -1) {
      words.splice(i, 1);
      accumulator += 1;
    }
    return accumulator;
  }, 0);
}

module.exports = {
  getCommonCharacterCount
};
