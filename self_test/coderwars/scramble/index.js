function scramble(str1, str2) {
	//code me
	return includes(filterStr(str1), filterStr(str2))
}
function filterStr (str) {
	var tmpArr = [];
	str.split('').forEach(item => {
		if(tmpArr.indexOf(item) === -1) {
			tmpArr.unshift(item)
		}
	})
	return tmpArr.sort();
}
function includes(arr1, arr2) {
	return arr1 == arr2 ? false : arr2.every(val => arr1.includes(val));
}

console.log(scramble('scriptjava','javascript')); // true
console.log(scramble('scriptingjava','javascript')); // true
console.log(scramble('scriptsjava','javascripts')); // true
console.log(scramble('jscripts','javascript')); // false
console.log(scramble('aabbcamaomsccdd','commas')); // true