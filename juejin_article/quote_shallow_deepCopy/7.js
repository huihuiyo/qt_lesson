// WeakSet

// let obj1 = {'name': 1}
// let obj2 = {'name': 2}
// let wSet = new WeakSet()
// wSet.add(obj1).add(obj2)
// console.log(wSet.has(obj2)) // true
// wSet.delete(obj2)
// console.log(wSet.has(obj2)) // false

// 应用
// 1
let wSet = new WeakSet()
wSet.add(document.getElementById('box'))

const _boy = new WeakSet()
// 2
class Boy {
  constructor () {
    _boy.add(this)
  }
  method () {
    if (!_boy.has(this)) {
      throw new TypeError('Boy.prototype.method 只能在Boy的实例上调用！')
    }
  }
}