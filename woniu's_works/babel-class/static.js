// class Person {
//   constructor () {
//     this.state = {
//       count: 0
//     }
//   }
// }

// 实例属性
// class Person {
//   state = {
//     count: 0
//   }
// }

// function Person () {
//   this.state = {
//     count: 0
//   }
// }

// 静态方法
class Person {
  static sayHello () {
    return 'hello'
  }
}

console.log(Person.sayHello())

// es5
function Person () {}
Person.sayHello = function () {
  return 'hello'
}

// 静态属性
class Person {}
Person.name = 'wn'

class Person {
  static name = 'wn'
}

function Person () {}
Person.name = 'wn'