const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(number){
  let arr = number.toString().split('')
  if(arr[0]<arr[1]){
    arr.splice(0,1)
    return Number(arr.join(''))
  }
  let minNumber = Math.min(...arr)
  let index = arr.indexOf(minNumber.toString())
  arr.splice(index,1)
  return Number(arr.join(''))
}

module.exports = {
  deleteDigit
};
