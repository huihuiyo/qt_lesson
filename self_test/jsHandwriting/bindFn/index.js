// apply、call是参数形式上的区别，
// call、bind是返回类型上的区别，
// call：res = obj._fn(args); return res; --函数返回值
// bind： resFn = function () {...}; return resFn; --函数
function testBind (b, c) {
	return this.a + b + c;
}

var obj = {
	a: 'a_value'
}

Function.prototype.bindFn = function (content) {
	let fn = this;
	let args = [...arguments].slice(1);
	let resFn = function () {
		return fn.apply(this instanceof resFn ? this : content, args.concat(...arguments));
	};
	function Temp () {};
	Temp.prototype = this.prototype;
	resFn.prototype = new Temp() ;
	return resFn;
}

console.log(testBind.bindFn(obj, 1, 2));