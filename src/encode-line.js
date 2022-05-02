const { NotImplementedError } = require('../extensions/index.js');

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
  let arr = []
  let amount = 1
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]){
       amount++
        } else {
          arr.push(amount,str[i])
         amount = 1
    }
  }
  arr.forEach((e)=>{
    if(e<2){
      arr.splice(arr.indexOf(e),1)
    }
  })
  return arr.join('')
}

module.exports = {
  encodeLine
};
