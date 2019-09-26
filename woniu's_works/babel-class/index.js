class Person {
  constructor (name) {
    this.name = name
  }
  sayHello () {
    return 'Hello, I\'m ' + this.name
  }
}

var wn = new Person('wn')
console.log(wn.sayHello())

console.log(Person.prototype.sayHello.name)
console.log(Object.keys(Person))