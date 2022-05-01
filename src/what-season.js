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
  let res
  if (date === undefined) {
    return 'Unable to determine the time of year!'
  } else {
    let month = date.getMonth()
    switch (month) {
      case 11: res = 'winter'
        break;
      case 0: res = 'winter'
        break;
      case 1: res = 'winter'
        break;
      case 2: res = 'spring'
        break;
      case 3: res = 'spring'
        break;
      case 4: res = 'spring'
        break;
      case 5: res = 'summer'
        break;
      case 6: res = 'summer'
        break;
      case 7: res = 'summer'
        break;
      case 8: res = 'autumn'
        case 9 : res = 'autumn'
        break;
        case 10: res = 'autumn'
        break;
    }
  }
  return res
}

module.exports = {
  getSeason
};
