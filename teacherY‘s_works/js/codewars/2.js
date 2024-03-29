// 140 likes
// 喜欢的人 [] 'no one likes this.'
// ["Peter"] 'Peter likes this.'
// ['Jacob', 'Alex'] 'Jacob and Alex like this.'
// ['Max', 'John', 'Mark'] 'Max, John and Mark like this.'
// ['Alex', 'Jacob', 'Mark', 'Max'] 'Alex, Jacob, Mark and Max like this.'

const likes = (names) => {
	// switch(names.length) {
	// 	case 0:
	// 		return ('no one likes this.');
	// 	case 1:
	// 		return names[0] + ' likes this';
	// 	case 2:
	// 		return names[0] + 'and' + names[1] + ' like this.';
	// 	case 3:
	// 		return names[0] + 'and' + names[1]+ 'and' + names[2] + ' like this.';
	// 	case 4:
	// 		return names[0] + 'and' + names[1]+ 'and' + names[2] + 'and' + names[3] + ' like this.';
	// }
	// 顺序思维 数学思维
	// 4 种可能 likes 的模式？
	// phone number 1种模式里的匹配 name names[i]
	let templates = [
		'no one likes this.',
		'{name} likes this.',
		'{name} and {name} like this.',
		'{name}, {name} and {name} like this.',
		'{name}, {name} and {n} others like this.'
	];
	let idx = Math.min(names.length, 4); // 哪一个模式
	return templates[idx].replace(/{name}|{n}/g, function (val) {
		return val === "{name}" ? names.shift() : names.length;
	});
}
console.log(likes(["Peter", "YY", 'DD', 'TT', 'WW']))