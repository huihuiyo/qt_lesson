// demo 1
// function Person(name) {
//   this.name = name
//   // return 666 // 不影响
//   // return {} // 空对象
//   // return {name} // {name: 'hh'}
// }

// let p = new Person('hh')

// // p.__proto__ == Person.prototype
// console.log(p.__proto__)
// console.log(Person.prototype)

// // [Function]
// console.log(Person.__proto__)
// // Object
// console.log(Function.__proto__)



// demo 2
// for in
// 1.index是索引为字符串型数字，不能进行几何运算
// 2.遍历的顺序有可能不是按照实际数组的内部顺序进行
// 3.使用 for in 会遍历数组所有可枚举属性，包括原型

// for of
// 遍历的是数组的元素
// 不包括数组原型和索引
// Array.prototype.method = function() {}
// var myArray = [1, 2, 3, 4, 5, 6, 7]
// myArray.name = 'hh'
// for (let index of myArray) {
//   console.log(index) // 
// }

// for (const index in myArray) {
//   console.log(index)
// }



// demo 3
// 递归

var gArr = [1, [2, 3], 4, 5, [6, 7, [3, 2, 8]]]
var oArr = [1, 2, 3, 4, 5, 6, 7, 3, 2, 8]

// way 1
// var res = []
// function openArr (arr) {
//   for (var item of arr) {
//     if (Array.isArray(item)) {
//       openArr(item)
//     } else {
//       res.push(item)
//     }
//   }
// }
// openArr(gArr)
// console.log(res)

// way 2
function openArr (arr) {
  return arr.reduce((pre, item) => {
    return pre.concat(Array.isArray(item) ? openArr(item) : item)
  }, [])
}

console.log(openArr(gArr))