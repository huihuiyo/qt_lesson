function persistence(num) {
	// 提交不能使用全局变量！！！坑
// 	var iterUse = new IterativeUse();
// 	iterUse.iterFunc(num)
// 	return iterUse.count;
// }
// function IterativeUse() {
// 	this.count = 0;
// 	this.iterFunc = function (num) {
// 		if(num.toString().split('').length === 1)
// 			return this.count;
// 		this.count++;
// 		this.iterFunc(num.toString().split('').reduce((pre, next) => pre * next));
// 	}

	// clever way
	return `${num}`.length > 1 
		? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
		: 0;
}
console.log(persistence(999));