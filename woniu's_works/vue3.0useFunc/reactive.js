// vue3.0 响应式原理
// vue2.0   1. 默认执行递归 2. 数组改变length无效 3. 对象不存在的属性

let toProxy = new WeakMap() // 弱引用映射表， 防止原对象：代理过的对象
let toRow = new WeakMap() // 弱引用映射表， 代理过的对象: 原对象

function isObject(val) {
  return typeof val === 'object' && val !== null
}
// 响应式的核心方法
function reactive(target) {
  // 创建响应式对象
  return createReactiveObject(target)
}

function createReactiveObject(target) {
  if (!isObject(target)) {
    return
  }
  let proxy = toProxy.get(target)
  if (proxy) {
    return proxy
  }
  if (toRow.has(target)) {
    return target
  }
  let baseHandler = {
    get (target, key, receiver) {
      // proxy + reflect 反射
      // Object.defineProperty === Reflect.defineProperty
      let res = Reflect.get(target, key, receiver)
      console.log('获取')
      return isObject(res) ? reactive(res) : res
    },
    set (target, key, value, receiver) {
      let res = Reflect.set(target, key, value, receiver)
      console.log('设置')
      return res
    },
    deleteProperty(target, key) {
      console.log('删除')
    }
  }
  let observed = new Proxy(target, baseHandler)
  toProxy.set(target, observed)
  toRow.set(observed, target) // 防止reactive再次new proxy
  return observed
}

// let proxy = reactive({name: 'hh'})
// proxy.name = 'www'
// console.log(proxy.name)

// let proxy = reactive([1, 2, 3])
// proxy.push(4)

// 记录一下这个对象是否被代理过， 如果是， 就不要再new了
// hash表 映射表 {key => value} 已经变成 {{} => value}
let object = {
  name: {
    n: 'hh'
  }
}
let proxy = reactive(object)

reactive(proxy)
proxy.name.n = 'HH'