// Set

// // Set与Array之间的相互转换
// // Set可以将数组作为参数直接用来初始化
// // Set -> Array
// let arr = [1, 2, 3, 3]
// let set = new Set(arr)
// console.log(set) // Set { 1, 2, 3 }

// // Array -> Set
// const arrFromSet1 = Array.from(set)
// const arrFromSet2 = [...set]
// console.log(arrFromSet1) // [ 1, 2, 3 ]
// console.log(arrFromSet2) // [ 1, 2, 3 ]

// 自身方法
// 与Map数据结构内置方法相同
// let arr = [1, 2, 3, 3]
// let set = new Set(arr)
// // 增删改查
// set.add(4)
// console.log(set) // Set { 1, 2, 3, 4 }
// set.delete(3)
// console.log(set) // Set { 1, 2, 4 }
// console.log(set.has(4)) // true

// // 遍历方法 因为在Set结构中没有键名只有健值，所以keys方法和values方法完全一致
// console.log(set.keys()) // [Set Iterator] { 1, 2, 4 }
// console.log(set.values()) // [Set Iterator] { 1, 2, 4 }

// for (const item of set.entries()) {
//   console.log(item) //[ 1, 1 ]
//                     // [ 2, 2 ]
//                     // [ 4, 4 ]
// }

// const obj = {
//   name: 'objName'
// }
// set.forEach(function (key, value) {
//   console.log(key, value, this.name) // 1 1 'objName'
//                                      // 2 2 'objName'
//                                      // 4 4 'objName'
// }, obj)

// // 其他方法
// console.log(set.size) // 3
// set.clear()
// console.log(set) // Set {}

// 应用场景
let a = new Set([1, 2, 3])
let b = new Set([2, 3, 4])

// 并集
let union = new Set([...a, ...b])
console.log(union) // Set { 1, 2, 3, 4 }
// 交集
let intersect = new Set([...a].filter(x => b.has(x)))
console.log(intersect) // Set { 2, 3 }
// 差集
let difference = new Set([...[...a].filter(x => !b.has(x)), ...[...b].filter(x => !a.has(x))])
console.log(difference) // Set { 1, 4 }

// 赋新值
let aDouble = new Set([...a].map(x => x * 2))
console.log(aDouble) // Set { 2, 4, 6 }

let bDouble = new Set(Array.from(b, x => x * 2))
console.log(bDouble) // Set { 4, 6, 8 }