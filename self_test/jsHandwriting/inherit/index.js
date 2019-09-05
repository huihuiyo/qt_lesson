function Parent (name) {
	this.parentName = name;
}
function Child (name, parentName) {
	Parent.call(this, parentName);
	this.childName = name;
}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

var parent = new Parent('father');
parent.sayName;

var child = new Child('son', 'father');
child.sayName;
console.log(parent);
console.log(child);
