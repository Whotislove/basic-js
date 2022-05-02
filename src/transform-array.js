const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr){
  let arr2=[]
let doubleNext = '--double-next'
let doublePrev = '--double-prev'
let discardNext = '--discard-next'
let discardPrev = '--discard-prev'
  if(Array.isArray(arr)!== true){
    return '\'arr\' parameter must be an instance of the Array!'
  }
for (let i = 0; i<arr.length;i++){
  if(arr[i]===doubleNext){
    arr2.push(arr[i+1])
  } else if(arr[i]===doublePrev){
    if(i ===0){continue}
    arr2.push(arr[i-1])
  } else if(arr[i]===discardNext){
    i+=2
  } else if(arr[i] === discardPrev){
    arr2.splice(i-1,1)
  } else{arr2.push(arr[i])}
}
return arr2
}

module.exports = {
  transform
};
