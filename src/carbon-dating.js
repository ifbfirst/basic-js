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
  let res2;
let num = Number(sampleActivity);
if(typeof num !== Number ){
  return false;
} else{
  let res1 = 15 / num;
  let k = 0.693 / 5730;
  res2 = Math.log(res1)/k;
  return res2;
}
}

module.exports = {
  dateSample
};
