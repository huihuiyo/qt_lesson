// 浅拷贝

// function shallowCopy (obj) {
//   var retObj = {}
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       retObj[key] = obj[key];
//     }
//   }
//   return retObj
// }

// var testObj = {
//   'name': 'currName',
//   'nums': [1, [2, 3]],
//   'objs': {
//     'innerObj': 'content'
//   }
// }
// var secObj = shallowCopy(testObj)

// Object.assign()介绍
// var testObj = {
//   'name': 'currName',
//   'nums': [1, [2, 3]],
//   'objs': {
//     'innerObj': 'content'
//   }
// }
// var secObj = Object.assign({}, testObj)
// secObj.name = 'changedName'
// secObj.nums[0] = '一'
// secObj.nums[1] = ['二', '三']
// secObj.objs['innerObj'] = 'changedContent'
// console.log(testObj) // { name: 'currName',
//                      // nums: [ '一', [ '二', '三' ] ],
//                      // objs: { innerObj: 'changedContent' } }
// console.log(secObj) // { name: 'changedName',
//                     // nums: [ '一', [ '二', '三' ] ],
//                     // objs: { innerObj: 'changedContent' } }

// Object.freeze()介绍
var testObj = {
  'name': 'currName',
  'nums': [1, [2, 3]],
  'objs': {
    'innerObj': 'content'
  }
}
var secObj = Object.freeze(testObj)
secObj.name = 'changedName'
secObj.nums[0] = '一'
secObj.nums[1] = ['二', '三']
secObj.objs['innerObj'] = 'changedContent'
secObj.age = 18
delete secObj.name
console.log(testObj) // { name: 'currName',
                     // nums: [ '一', [ '二', '三' ] ],
                     // objs: { innerObj: 'changedContent' } }
console.log(secObj) // { name: 'currName',
                    // nums: [ '一', [ '二', '三' ] ],
                    // objs: { innerObj: 'changedContent' } }