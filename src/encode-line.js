const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let result = ''; // 1. Объявляем строку для результата
  let count = 1;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count += 1;
    } else {
      // 2. Добавляем count, только если он больше 1
      result += (count > 1 ? count : '') + str[i];
      count = 1;
}
  }
}
module.exports = {
  encodeLine
};
