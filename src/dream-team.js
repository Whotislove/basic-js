const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam (arr){
  let res
  let strArr = []
  if(Array.isArray(arr)){
    arr.forEach((e)=>{
    if(typeof e === 'string'){
      strArr.push(e.toUpperCase())
    }
  })
  for(let i = 0; i<strArr.length; i++){
   strArr[i] = strArr[i].trim().slice(0,1)
 }
  strArr.sort()
  res = strArr.join('')
  }
  else {
    return false
  }
  return res
}

module.exports = {
  createDreamTeam
};
