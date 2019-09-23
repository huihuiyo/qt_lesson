// map |  flatMap | reduce | filter | find | every | some | includes | fill

// // flat
// const testArr = [1, 2, [3, [4]]]
// const flatArr = testArr.flat()
// console.log(flatArr) // [1, 2, 3, Array(1)] -> 0: 1
//                      //                        1: 2
//                      //                        2: 3
//                      //                        3: [4]

// const arr = [1, 2, 3]

// // map
// const mapArr = arr.map(x => x * 2)
// console.log(mapArr) // [2, 4, 6]

// arr.map((item, index, arr) => {
//   console.log(item, index, arr) // 1 0 (3) [1, 2, 3]
//                                 // 2 1 (3) [1, 2, 3]
//                                 // 3 2 (3) [1, 2, 3]
// })

// // flatMap
// // arr.flatMap(x => [x * 2]) === arr.map(x => x * 2)
// const flatMapArr = arr.flatMap(x => [x * 2])
// console.log(flatMapArr) // [2, 4, 6]

// reduce
// const arr = [1, 2, 3, 4, 5]

// const reduceArr = arr.reduce((pre, next) => {
//   console.log(pre, next) // 1 2
//                          // 3 3
//                          // 6 4
//                          // 10 5
//   return pre + next
// })
// console.log(reduceArr) // 15

// arr.reduce((pre, next) => {
//   console.log(pre, next) // 9 1
//                          // 9bala 2
//                          // 9balabala 3
//                          // 9balabalabala 4
//                          // 9balabalabalabala 5
//   return pre += 'bala'
// }, 9)


// //  filter | find 
// const arr = [1, 2, 3, 4, 5]
// const obj = {num: 3}
// // filter
// const filterArr = arr.filter(function (value, index, arr) {
//   console.log(index, arr) // 0 [1, 2, 3, 4, 5]
//                           // 1 [1, 2, 3, 4, 5]
//                           // 2 [1, 2, 3, 4, 5]
//                           // 3 [1, 2, 3, 4, 5]
//                           // 4 [1, 2, 3, 4, 5]
//   return value > this.num
// }, obj)
// console.log(filterArr) // [4, 5]
// // find
// const findResult = arr.find(function (value, index, arr) {
//   console.log(index, arr) // 0 [1, 2, 3, 4, 5]
//                           // 1 [1, 2, 3, 4, 5]
//                           // 2 [1, 2, 3, 4, 5]
//                           // 3 [1, 2, 3, 4, 5]
//   return value > this.num
// }, obj)
// console.log(findResult) // 4
// // findIndex
// const findIndexResult = arr.findIndex(function (value) { return value > this.num }, obj)
// console.log(findIndexResult) // 3

// // every | some
// // every
// const arr = [1, 2, 3, 4, 5]
// const obj = { num: 3 }
// const everyResult = arr.every(function(value, index, arr) {
//   console.log(index, arr) // 0 [1, 2, 3, 4, 5]
//                           // 1 [1, 2, 3, 4, 5]
//                           // 2 [1, 2, 3, 4, 5]
//   return value < this.num
// }, obj)
// console.log(everyResult) // false
// // some
// const someResult = arr.some(function(value, index, arr) {
//   console.log(index, arr) // 0 [1, 2, 3, 4, 5]
//                           // 1 [1, 2, 3, 4, 5]
//                           // 2 [1, 2, 3, 4, 5]
//                           // 3 [1, 2, 3, 4, 5]
//   return value > this.num
// }, obj)
// console.log(someResult) // true

// includes
const arr = [1, 2, 3, NaN]
console.log(arr.includes(NaN)) // true
console.log(arr.includes(2, 2)) // false