// function greeter (person: string): string {
//   // return 'hello, ' + person;
//   return greeter(person)
// }

// const user = '123'

// console.log(greeter(user))

// 基础数据类型：((string number boolean null undefined symbol) void bigint)

// const isLoading: boolean = false

// const a: number = 6
// const b: number = 0xf00d

// const book: string = 'ts'

// function warnUser(): void {
//   alert('test')
// }

// const c: void = undefined

// let u: undefined = undefined
// let n: null = null

// const sym1 = Symbol('key1')
// const sym2 = Symbol('key2')
// sym1 === sym2 // false

// const max = Number.MAX_SAFE_INTEGER
// const max1 = max + 1
// const max2 = max + 2

// declare let foo: number
// declare let bar: bigint
// foo === bar // false



// any
// unknow // 跟any一样，但是unknow更严格
// never
// object

// let notSure: any = 4
// notSure = '4'
// notSure.foo.bar = 1
// notSure()
// new notSure()
// notSure[0][1]

// let value: unknown = 4
// value = '4'
// value.foo.bar = 1
// value()
// new value()
// value[0][1]

// function error(message: string): never {
//   throw new Error(message)
// }
// const empty: never[] = []
// empty.push(1)

// const list1: Array<number> = [1, 2, 3] // 泛型
// const list2: number[] = [1, 2, 3]

// 元组
// let x: [string, number]
// x = ['hello', 10]

// object
enum Direction {
  Center = 1
}
let val: object
val = Direction
val = [1]
val = ['1', 'hello']
val = {}


// 枚举
enum Direction1 {
  up = 'up',
  down = 'down',
  left = 'left',
  right = 'right'
}
// console.log(Direction1.up === 0) // true
// console.log(Direction1.down) // 11
console.log(Direction1.up, Direction1['down'])

// 接口 interface
interface User {
  name: string,
  age?: number,
  readonly isMale: boolean,
  say: (words: string) => string
}
const getUserName = (user: User) => user.name
// user.say = function(words: string) {}

// 属性检查
interface Config {
  width?: number,
  [propName: string]: any // 添加字符串索引签名
}

function CalculateAreas(config: Config): {area: number} {
  let square = 100
  if (config.width) {
    square = config.width * config.width
  }
  return {area: square}
}

let mySquare1 = CalculateAreas({widdth: 5})

// 类型断言
let mySquare2 = CalculateAreas({widdth: 5} as Config)


let options = {widdth: 5}
let mySquare3 = CalculateAreas(options)


// 抽象类
abstract class Animal {
  abstract makeSound(): void
  move(): void {
    console.log('mmmove~')
  }
}

// let animal = new Animal()
// 实例化抽象类，需要创建一个子类来继承基类，然后就可以实例化子类
class Cat extends Animal {
  makeSound() {
    console.log('mmmia~')
  }
}

let cat = new Cat()

cat.makeSound()
cat.move()

class Car {
  public run() { // 被public修饰的成员是可以被外部访问的
    console.log('启动')
  }
  private stop() { // 被private修饰的成员只可以在内部访问
    console.log('停止')
  }
  protected pause() { // 被protected修饰的成员只能够在内部访问和继承的子类中访问
    console.log('暂停')
  }
}
const car = new Car()
car.run()
// car.stop()

class Mini extends Car {
  init() {
    this.pause()
  }
}