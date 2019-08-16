function digital_root(n) {
	// 自身迭代
// 	var arr = (n + '').split('');
// 	while(arr.length != 1) {
// 		arr = addFunc(arr);
// 	}
// 	return parseInt(arr[0]);
// }

// function addFunc(arr) {
// 	var res = 0;
// 	arr.forEach(item => {
// 		res += parseInt(item);
// 	});
// 	return (res + '').split('');
	
	// 数学方法解题
	// return (n - 1) % 9 + 1;

	// 递归 + 数组 reduce 方法解题
	if (n < 10) return n;
	return digital_root(n.toString().split('').reduce((pre, next) => {
		return pre + +next;
	}, 0));
}

console.log(digital_root(888))