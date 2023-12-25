const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let res;
let num = parseFloat(sampleActivity);
if(isNaN(num) || num <= 0 || num > 15){
  return false;
} else{
  res = Math.ceil((Math.log(MODERN_ACTIVITY / num) * HALF_LIFE_PERIOD) / Math.log(2));
  return res;
}
}

module.exports = {
  dateSample
};
