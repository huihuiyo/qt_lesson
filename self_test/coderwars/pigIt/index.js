function pigIt(str){
	//Code here
	// let result = '';
	// str.split(" ").forEach(item => {
	// 	var itemArr = item.toString().split('');

	// 	if(item == "!" || item == "?")
	// 		return result += itemArr.join('');
		
	// 	var fstlet = itemArr.shift();
	// 	itemArr.push(fstlet);
	// 	return result += itemArr.join('') + 'ay ';
	// });
	// let temp = result.split('');
	// if(temp[temp.length - 1] == "!" || temp[temp.length - 1] == "?") {
	// 	return result;
	// }
	// temp.pop();
	// result = temp;
	// return result.join('');

	// 正则解法 
	// /(\w) -> 匹配一个字符 (\w*) -> 匹配多个字符 (\s) -> 匹配单个空格符/
	// \$n 表示分组为n的内容
	return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3");
}

console.log(pigIt("Pig latin is cool !"));