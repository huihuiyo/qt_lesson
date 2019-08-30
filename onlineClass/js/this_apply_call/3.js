var a = {
	name: "Cherry",
	fn: function(x, y) {
		console.log(this.name, x, y)
	}
}
var b = a.fn;

b.apply(a, [1, 2]);
b.call(a, 1, 2);