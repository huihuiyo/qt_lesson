Function.prototype.testBind = function () {
  let retFunc = function () { }
  retFunc.prototype = this.prototype
  return retFunc
}

function Test1 () {}
let Test2 = Test1.testBind()
Test2.prototype.a = function () {}
const test = new Test2
console.log(Test2.prototype) // {a: ƒ, constructor: ƒ}
console.log(Test1.prototype) // {a: ƒ, constructor: ƒ}
