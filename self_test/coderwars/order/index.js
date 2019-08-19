function order(words){
	// ...
	// var map = new Map;
	// var result = '';
	// words.split(' ').forEach(item => {
	// 	map[item.split('').sort()[0]] = item;
	// });;
	// for(var key in map) {
	// 	result += map[key] + ' ';
	// }
	// var temp = result.split('');
	// temp.pop();
	// result = temp.join('')
	// return result;


	// clever way
	return words.split(' ').sort((a, b) => {
		return a.match(/\d/) - b.match(/\d/);
	}).join(' ');
}
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));