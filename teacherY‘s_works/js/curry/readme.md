<!-- 柯里化

编写函数 校验电话号码，邮箱 -->

通用函数有好处 接受n个参数 每次返回一个函数
可以裂变嘛？
checkCellPhone = checkByRegExp(/^1[3-9]\d{9}$/);
checkEmail = checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/);
checkCellPhone('13555555555');
函数式编程

- 返回函数，每次只接受一个参数
- 返回的函数运行， 闭包， 最初参数的数量， 最后的参数时， 运行完成， 否则继续返回函数

- 分函数收集参数的过程
  return function() {} 闭包 fn.length fn 闭合
- 收集参数的过程

- require + module.exports es5 模块化方案