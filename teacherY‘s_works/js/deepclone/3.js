let obj = {
	a: 1,
	field4: {
		child: 'child',
		child2: {
			child2:'child2'
		}
	}
}
function clone(target) {
	if (typeof target === 'object') {
		let cloneTarget = {};
		// 性能开销
		for (const key in target) {
			cloneTarget[key] = clone(clone[key]);
		}
		return cloneTarget;
	} else {
		return target;
	}
}
let obj1 = clone(obj);
obj1.a = 2;
obj1.field4.child = 'newChild';
console.log(obj);