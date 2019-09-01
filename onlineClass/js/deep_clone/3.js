var obj = {a: {a: 'hello', b: 21}};
var initialObj = Object.assign({}, obj); // 浅拷贝
initialObj.a.a = "changed";
console.log(obj.a.a); // changed