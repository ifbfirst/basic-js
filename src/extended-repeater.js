const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  let { 
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;

  let result = '';
  let additions = '';

  if (addition !== '') {
    additions = repeater(addition, {repeatTimes: additionRepeatTimes, separator: additionSeparator});
  }

  if (repeatTimes > 0) result = str + additions;
  repeatTimes--;
  
  for (let i = 0; i < repeatTimes;) {
    result += (separator + str + additions);
    repeatTimes--;
  }
  return result;
}

module.exports = {
  repeater
};
