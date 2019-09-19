// es5的经典话题

// Global
var name = "windowName";
function a() {
	// 局部函数作用域
	var name = "Cherry";
	console.log(name);
	console.log(this.name);
}
a()