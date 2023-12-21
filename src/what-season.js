const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let season;
  let month = date.getMonth();

  if (typeof date !== 'object'){
      return 'Unable to determine the time of year!';
  }
  else if (month < 6 && month > 2){
      season = 'spring';
  } else if(month < 9 && month > 5){
      season = 'summer';
  } else if(month < 12 && month > 8){
      season = 'autumn';
  } else {
      season = 'winter';
  }
  
  return season;


}

module.exports = {
  getSeason
};
