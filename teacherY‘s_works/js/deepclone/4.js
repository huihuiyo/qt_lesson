// n个台阶，每次你可以跨1个台阶或2个台阶，请问有多少种走法 n=7 值为多少？
const n = 7;
const option = {
	option1: 1,
	option2: 2
}
var ret = 0;
// fn(n) = fn(n - 1) + fn(n - 2)
function totalStep(n) {
	if (n === option.option1) {
		return 1;
	}
	if (n === option.option2) {
		return 2;
	}
	return totalStep(n-1) + totalStep(n-2)
}

console.log(totalStep(n));
