var nama = "windowName"; // window
var a = {
	name: "Cherry",
	fn: function() {
		console.log(this.name);
	}
}
a.fn(); // Cherry

var b = a.fn;
b(); // 普通函数来运行 window
b.apply(a); // 使用apply方法将b中this指向a Cherry
b.call(a); // 使用apply方法将b中this指向a Cherry