var { counter, obj, changeVal } = require('./node-common.js');

console.log(counter, obj)
changeVal();
console.log('-------------')
console.log(counter, obj)

var a = 1,
    b = a;
a = 2;
var aa = {},
    bb = aa;
aa.name = 'bbname';
// commonJs require 的时候 类比 js
// 基本数据类型 复杂数据类型 的复制
// 它也就是 复制了一份导出来的东西