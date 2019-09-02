function newFn (fn, ...args) {
	var obj = {}
	if(fn.prototype !== null) obj.__proto__ = fn.prototype;
	var ret = fn.apply(obj, args);
	return typeof ret === 'object' ? ret : obj;
}

function TestFn (num1, num2) {
	this.number1 = num1;
	return {
		n1: this.number1,
		n2: num2
	}
	
}

console.log(newFn(TestFn, 1, 2));