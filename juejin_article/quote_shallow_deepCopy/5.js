// WeakMap

// set、get、has、delete
// let wMap = new WeakMap()
// let key = {}
// let obj = {name: 'objName'}

// wMap.set(key, obj)
// console.log(wMap.get(key)) // { name: 'objName' }
// console.log(wMap.has(key)) // true

// wMap.delete(key)
// console.log(wMap.has(key)) // false

// 示例1
// let element = document.getElementById('box')
// let wMap = new WeakMap()
// wMap.set(element, {clickCount: 0})
// element.addEventListener('click', () => {
//   let countObj = wMap.get(element)
//   countObj.clickCount++

//   console.log(wMap.get(element).clickCount) // click -> n+=1
// })

// 示例2
const _age = new WeakMap()
const _fn = new WeakMap()
class Girl {
  constructor (age, fn) {
    _age.set(this, age)
    _fn.set(this, fn)
  }
  changeAge () {
    let age = _age.get(this)
    age = age >= 18 ? 18 : null
    _age.set(this, age)

    _age.get(this) === 18
    ? _fn.get(this)() // forever 18 !
    : console.log('error')
  }
}

const girl = new Girl(25, () => console.log('forever 18 !'))
girl.changeAge()