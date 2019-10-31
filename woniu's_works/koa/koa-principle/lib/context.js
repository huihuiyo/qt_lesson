let proto = {}

function defineGetter(prop, name) { // 参数分别是 代理的对象 和 对象上的属性
  proto.__defineGetter__(name, function() { // 每个对象都有一个__defineGetter__方法，用这个方法来实现代理
    return this[prop][name] // this -> ctx
  })
}
function defineSetter(prop, name) {
  proto.__defineSetter__(name, function(value) {
    this[prop][name] = value
  })
}

defineGetter('request', 'url')
defineGetter('request', 'path')

defineGetter('response', 'body') // ctx.body 代理 response的body属性
defineSetter('response', 'body')

module.exports = proto