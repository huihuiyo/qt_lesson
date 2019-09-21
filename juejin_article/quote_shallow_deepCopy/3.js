// 深拷贝

// // Version 1
// function deepCopy(content) {
//   var retObj = {}
//   for (const key in content) {
//     if (content.hasOwnProperty(key)) {
//       retObj[key] = typeof content[key] === 'object' 
//       ? deepCopy(content[key])
//       : content[key];
//     }
//   }
//   return retObj
// }

// Version 2
function deepCopy (obj) {
  var tempTool = Array.isArray(obj) ? [] : {} 
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      tempTool[key] = typeof obj[key] === 'object' 
      ? deepCopy(obj[key])
      : Array.isArray(obj) ? Array.prototype.concat(obj[key]) : obj[key];
    }
  }
  return tempTool
}

var testObj = {
  'name': 'currName',
  'nums': [1, [2, 3]],
  'objs': {
    'innerObj': 'content'
  }
}
var secObj = deepCopy(testObj)
secObj.name = 'changedName'
secObj.nums[0] = '一'
secObj.nums[1] = ['二', '三']
secObj.objs['innerObj'] = 'changedContent'
secObj.age = 18
console.log(testObj) // { name: 'currName',
                      //  nums: [ 1, [ 2, 3 ] ],
                      //  objs: { innerObj: 'content' } }
console.log(secObj) // { name: 'changedName',
                      // nums: [ '一', [ '二', '三' ] ],
                      // objs: { innerObj: 'changedContent' },
                      // age: 18 }