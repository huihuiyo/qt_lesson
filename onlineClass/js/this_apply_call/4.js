var a = {
	name: "Cherry",
	func1: function() {
		console.log(this.name);
	},
	func2: function() {
		console.log(this, '--------');
		var that = this;
		// this 丢失
		setTimeout(() => {
			// this -> window
			// console.log(this); //window
			that.func1();
		}, 1000)
	}
}
a.func2();