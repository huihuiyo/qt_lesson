/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs[0]) return ''
  if (strs.length == 1) return strs[0]
  var resStr = ''
  resStr = strs.reduce((pre, next) => {
    return judgeTwoStr(pre, next)
  })
  return resStr
};
function judgeTwoStr (str1, str2) {
  var res = '';
  for (let i = 0; i < str1.length; i++) {
    var op = str1[i] === str2[i]
    if(op) {
      res += str1[i]
    } else {
      break
    }
  }
  return res
}
console.log(longestCommonPrefix(["aca","cba"]))