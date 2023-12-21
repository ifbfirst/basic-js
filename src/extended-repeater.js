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

  let res ='';
  let subStr ='';
  let subStr2=''
  for (let i=0;i<options.repeatTimes-1;i++){
      subStr ='';
      if (options['addition'] !== undefined){
        
    for (let a = 0;a<options.additionRepeatTimes-1;a++){
      
      subStr = `${subStr}${options.addition}${options.additionSeparator}`;
    }
  
    subStr =`${subStr}${options.addition}`
      
  } 
  res = `${res}${str}${subStr}${options.separator}`;
      
  }
  res = `${res}${str}${subStr}`;
  return res;
    
  }

module.exports = {
  repeater
};
