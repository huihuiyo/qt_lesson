function testApplyFn (arr) {
	var ret = this.a;
	arr.forEach(item => {
		ret += item;
	});
	return ret;
}
var testObj = {
	a: '1',
}
Function.prototype.applyFn = function (obj, rest) {
	obj._fn = this;
	let res = obj._fn(rest);
	delete obj._fn;
	return res;
};

console.log(testApplyFn.applyFn(testObj, ['2', '3']))