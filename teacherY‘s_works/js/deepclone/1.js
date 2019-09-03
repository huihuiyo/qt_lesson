// 简单类型的拷贝是拷贝值
let a = 1;
let b = a;

b = 2
// console.log(a); // 1

// 复杂数据类型，拷贝是引用式赋值
let obj = {
	a: 1,
	b: function () {
		console.log('bbb');
	}
};

// 二线公司
// 深拷贝
// 返回新的对象
// 数组中有什么操作，返回新数组的
let obj2 = JSON.parse(JSON.stringify(obj));
obj2.a = 2;

// 浅拷贝 let obj2 = obj 
console.log(obj);
console.log(obj2)