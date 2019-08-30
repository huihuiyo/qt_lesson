// way 1 通过call方法改变this指向
// function Parent1() {
// 	this.name = 'parent1';
// }
// function Child1() {
// 	Parent1.call(this);
// 	this.type = 'child1';
// }
// console.log(new Child1);



// way 2 通过原型链修改
// function Parent2 () {
// 	this.name = 'parent2';
// 	this.play = [1, 2, 3]
// }
// function Child2 () {
// 	this.type = 'child2';
// }
// Child2.prototype = new Parent2();
// var child2 = new Child2;
// console.log(child2.play);

// console.log('+++++++++++++++++')
// var c1 = new Child2;
// var c2 = new Child2;
// c1.play.push(4); // 会改变原型对象的值 缺陷
// console.log(c1.play);
// console.log('-----------------')
// console.log(c2.play);



// 组合继承 改变this指向及原型链
function Parent3 () {
	this.name = 'parent3';
	this.play = [1, 2, 3]
}
function Child3 () {
	Parent3.call(this);
	this.type = 'child3';
}
// Child3.prototype = Parent3.prototype; // 会默认将Parent3构造器也给到Child3
Child3.prototype = Object.create(Parent3.prototype);
Child3.prototype.constructor = Child3;
console.log(new Child3);

console.log('+++++++++++++++++')
var c1 = new Child3;
var c2 = new Child3;
c1.play.push(4); // 不会改变原型对象的值
console.log(c1.play);
console.log('-----------------')
console.log(c2.play);