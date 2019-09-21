// ES6 Map

// // Map自身方法介绍
// let map = new Map([
//   ['name', 'currName'],
//   ['nums', [1, [2, 3]]],
//   ['objs', {'innerObj': 'content'}]
// ])
// // 增 删 改 查
// map.set('test', 'testContent')
// map.delete('objs')
// map.set('name', 'changedName')
// console.log(map.get('nums')) // [ 1, [ 2, 3 ] ]
// console.log(map.has('nums')) // true
// console.log(map) // Map {
//                  // 'name' => 'changedName',
//                  // 'nums' => [ 1, [ 2, 3 ] ],
//                  // 'test' => 'testContent' }

// // 遍历方法
// console.log(map.keys()) // [Map Iterator] { 'name', 'nums', 'test' }
// console.log(map.values()) // [Map Iterator] { 'changedName', [ 1, [ 2, 3 ] ], 'testContent' }
// console.log(map.entries()) // [Map Iterator] {
//                            // [ 'name', 'changedName' ],
//                            // [ 'nums', [ 1, [ 2, 3 ] ] ],
//                            // [ 'test', 'testContent' ] }

// const testObj = {
//   objName: 'objName'
// }
// map.forEach(function (value, key) {
//   console.log(key, value, this.objName) // name changedName objName
//                                         // nums [ 1, [ 2, 3 ] ] objName
//                                         // test testContent objName
// }, testObj)

// // 其他方法
// console.log(map.size) // 3

// console.log(map) // Map {
//                  // 'name' => 'changedName',
//                  // 'nums' => [ 1, [ 2, 3 ] ],
//                  // 'test' => 'testContent' }
// map.clear()
// console.log(map) // Map {}



// // obj 转 Map方法
// function objToMap (object) {
//   let map = new Map()
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       map.set(key, object[key])
//     }
//   }
//   return map
// }
// var testObj = {
//   'name': 'currName',
//   'nums': [1, [2, 3]],
//   'objs': {
//     'innerObj': 'content'
//   }
// }
// let map = objToMap(testObj)
// map.set('name', 'changedName')
// console.log(testObj) // { name: 'currName',
//                      //   nums: [ 1, [ 2, 3 ] ],
//                      //   objs: { innerObj: 'content' } }
// console.log(map) // Map {
//                  // 'name' => 'changedName',
//                  // 'nums' => [ 1, [ 2, 3 ] ],
//                  // 'objs' => { innerObj: 'content' } }


// Map应用场景
let n = 100
let map = new Map()
function upStairs (n) {
  if (n === 1) return 1
  if (n === 2) return 2
  if (map.has(n)) return map.get(n)
  let ret = upStairs(n - 1) + upStairs(n - 2)
  map.set(n, ret)
  return ret
}
console.log(upStairs(n)) // 573147844013817200000