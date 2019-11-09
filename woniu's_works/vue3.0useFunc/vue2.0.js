let oldArrayPrototype = Array.prototype
let proto = Object.create(oldArrayPrototype);

['push', 'shift', 'pop'].forEach(method => {
  proto[method] = function () { // 函数劫持，把函数重写，内部调用的还是老方法
    updataView() // 切片编程
    oldArrayPrototype[method].call(this, ...arguments)
  }
})

function observe(target) {
  if (typeof target !== 'object' || target == null) {
    return target
  }
  if (Array.isArray(target)) { // 拦截数组，给数组中的方法进行重写
    target.__proto__ = proto
  }
  for (const key in target) {
    defineReactive(target, key, target[key])
  }
}
function defineReactive(target, key, value) {
  observe(value)
  Object.defineProperty(target, key, {
    get() {
      return value
    },
    set(newVal) {
      if (newVal !== value) {
        updataView()
        value = newVal
      }
    }
  })
}
function  updataView() {
  console.log('更新视图了')
}
let data = {
  name: 'ff',
  // age: {
  //   'n': 18
  // }
  age: [
    'n'
  ]
}

observe(data)
// data.age.n = 17 // 存在浅拷贝问题
data.age.push(4)