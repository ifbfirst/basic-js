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
 const obj = {};
  for (let i=0; i<str.length; i++){
!obj[str[i]] ? obj[str[i]]=1 : obj[str[i]]++
  }
return obj.values().join('');
}

module.exports = {
  encodeLine
};
