var countBits = function(n) {
	// Program Me
	// const arr = n.toString(2).split('').sort();
	// return arr.lastIndexOf("1") != -1 
	// 		? arr.lastIndexOf("1") - arr.indexOf("1") + 1
	// 		: 0;

	// clever way
	return n.toString(2).split('0').join('').length;
};

console.log(countBits(1234));