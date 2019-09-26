let obj = {
  a: 'aaa',
  b: 'bbb',
  c: 'ccc',
  [Symbol('d')]: 'ddd'
}
Object.defineProperty(obj, 'e', {
  value: 'eee',
  enumerable: true // 可枚举属性 默认为false
})
console.log(Object.keys(obj))
for (const key in obj) {
  console.log(key)
}
