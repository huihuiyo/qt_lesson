// 引用

var testObj = {
  name: 'currName'
}
var secObj = testObj
secObj.name = 'changedName'
console.log(testObj) // { name: 'changedName' }

// var testArr = [0, [1, 2]]
// var secArr = testArr
// secArr[0] = 'x'
// console.log(testArr) // [ 'x', [ 1, 2 ] ]
