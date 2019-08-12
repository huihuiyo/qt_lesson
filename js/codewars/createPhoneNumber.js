// create Phone Number
// (123)456-7890 字符串
// 编写一个函数, 接受一个由10个整数组成的数组
// (123)456-7890 电话号码 www.coderwars.com
// const createPhoneNumber = (arr) => "(" + arr[0] + arr[1] + arr[2] +")" + arr.slice(3,5) + "-" + arr.slice(6);
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
const createPhoneNumber = (numbers) => {
	let format = "(xxx)- xx-xxx";
	// replace
	for (let i = 0; i < numbers.length; i++) {
		format = format.replace('x', numbers[i]);
	}
	return format;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));