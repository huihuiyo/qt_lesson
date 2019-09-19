console.log('---------第 1 题---------')
const box = {
  a: 10,
  b: {
    c: 100
  }
}
Object.freeze(box) // 仅冻结外第一层对象
box.a = 100
box.b.c = 1000

const box1 = box
box1.a = 100
box1.b.c = 10000
// box ?
console.log('box:', box)
console.log('box1:', box1)

const arr = [0, [1, 2]]
Object.freeze(arr); // 仅冻结外第一层数组
arr[0] = 123
arr[1][0] = 123
console.log(arr)

console.log('---------第 2 题---------')
let {name: Myname} = {name: 'lihua'}
// console.log(name) // undefined 对象解构可以设置值

console.log('---------第 3 题---------')
const add = () => {
  const cache = {} // 闭包
  return num => {
    if (num in cache) {
      return `from cache ${num}`
    } else {
      const r = num + 10
      cache[num] = r
      return `calcul ${r}`
    }
  }
}
const addFuc = add()
console.log(addFuc(10)) // calcul 20
console.log(addFuc(10)) // from cache 10
console.log(addFuc(2 * 5)) // from cache 10

console.log('---------第 4 题---------')

const arr4 = ['lihua', 'lilei']
// 枚举一个对象里面的属性
// {'0': 'lihua', '1': 'lilei'}
for (const item1 in arr4) {
  console.log(item1)
}
// 数组 Map Set String (可迭代对象)
// for of 可以用来遍历可迭代对象
for (const item1 of arr4) {
  console.log(item1)
}
// 可迭代对象 ？？
// 1. 有 iterator 属性
// 2. iterator 的值是一个方法
// 解释在 ./for-of.html

console.log('---------第 5 题---------')

var status = 'global'
var obj = {
  status: 'obj',
  getStatus: function () {
    return this.status
  }
}
console.log(obj.getStatus())
var fun = obj.getStatus
console.log(fun())

// this 调用时候才能决定this 指向哪里

console.log('---------第 6 题---------')
function Foo () {}
// class Foo {
// }
// 只是一个语法糖，背后还是es5
console.log(typeof Foo)

console.log('---------第 7 题---------')
let a = Symbol('a')
let b = Symbol('a')
console.log(a === b)
// 给对象添加属性不会覆盖之前的属性
var obj = {
  [a]: 'a value',
  b: 'a value',
  b: '123'
}
console.log(Object.keys(obj)) // 返回一个对象上面可枚举的属性
console.log(a in obj)
console.log(Object.getOwnPropertySymbols(obj))