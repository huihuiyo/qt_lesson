var jsonStr = '{ "age": 20, "name": "jack" }';
// eval与new Function有相同的字符串参数特性,
// 同时都有动态编译js代码的作用，
// 但在编程中不推荐使用。
var json1 = eval('(' + jsonStr + ')');
var json2 = (new Function('return ' + jsonStr))();

console.log('eval转换：', json1);
console.log('new Function()转换：', json2);