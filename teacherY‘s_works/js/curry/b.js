// curry 函数，返回一个新函数，逐渐的消化
function curry(fn, len = fn.length) {
	// this
	return _curry.call(this, fn, len);
}

function _curry(fn, len, ...args) {
	// typeof function
	return function(...params) {

		// 自己调用自己 递归
		// 如果没到数量，返回函数
		// 到了，执行代码
		
		// 调试 理解
		// console.log(params);
		// console.log(...args, '-----------');
		// console.log(...params, '+++++++++++++');
		// console.log(len, '**************');

		// 用于保存已用过的参数
		args = [...args, ...params];
		
		if(args.length >= len) {
			return fn.apply(this, args);
		} else {
			return _curry.call(this, fn, len, ...args);
		}
	}
}

let _fn = curry(function(a, b, c, d, e) {
	console.log(a, b, c, d, e);
})
_fn(1)(2)(3)(4)(5);

// commonjs 模块化机制 curry能力
module.exports = curry;