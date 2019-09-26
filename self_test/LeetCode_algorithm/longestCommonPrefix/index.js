/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs[0]) return ''
  if (strs.length == 1) return strs[0]
  
  var resArr = [];
  [...strs].reduce((pre, next) => {
    resArr = [];
    [...pre].every(function (item, index) {
      let op = ([...next][index] === item)
      op ? resArr.push(item) : null;
      return op
    })
    return resArr
  })
  return resArr.join('')
};
console.log(longestCommonPrefix(["dog","racecar","car"]))