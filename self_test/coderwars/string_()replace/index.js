function duplicateEncode(word){
	//选出重复字符 放入tmp
	// var wordStr = word.toLowerCase();
	// var wordArr = word.toLowerCase().split('');
	// var tmp = [];
	// wordArr.sort().reduce((pre, next) => {
	// 	if (pre == next && tmp.indexOf(next) === -1) {
	// 		tmp.push(next);
	// 	}
	// 	return next;
	// });
	// var newWord = '';
	// // replace
	// for (let item of wordStr) {
	// 	if (tmp.indexOf(item) === -1) {
	// 		newWord += '(';
	// 	} else {
	// 		newWord += ')';
	// 	}
	// }
	// return newWord;

	// best way
	return word
	.toLowerCase()
	.split('')
	.map( function (a, i, w) {
		return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
	})
	.join('');
}
console.log(duplicateEncode("(( @"));