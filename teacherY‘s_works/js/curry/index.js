const curry =  require('./b.js');

// 普世
function checkByRegExp (reg, string) {
	return reg.test(string);
}

let checkCellPhone = curry(checkByRegExp)(/^1[3-9]\d{9}$/);
let checkEmail = curry(checkByRegExp)(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/);

console.log(checkCellPhone('15000000005'));
console.log(checkEmail('727101151@qq.com.cn'));
// console.log(checkByRegExp(/^1[3-9]\d{9}$/, '15000000005'));
// console.log(checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/, '727101151@qq.com.cn'));

// checkByRegExp(/^1[3-9]\d{9}$/, '15000000005');
// checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/, '7777@qq.com.cn');
