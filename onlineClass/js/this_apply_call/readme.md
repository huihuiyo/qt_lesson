## this指向及指定 (call, apply)

- this 并不是由定义函数时决定，由最后运行方式来决定
 - 函数是普通函数，运行方式 this指向window
 - 函数作为对象的方法被运行，this指向函数本身

- 手动指定this
  function 是一等对象 js 灵活的this指向在规则之外，提供了apply、call这些方法，手动的绑定函数最后的执行时的this
- apply 与 call 的区别
  区别在于参数 apply可将参数打包为数组传参 call需要将参数展开传参
- 其他方案
  - 在外层手写that 形成闭包保留外层this申明为that
    var that = this; 
  - ()=>{//箭头函数this指向外一层}