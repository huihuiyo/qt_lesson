global.gc()
console.log(process.memoryUsage().heapUsed); // 小
let key = new Array(5 * 1024 * 1024); // 1
let wmap = new WeakMap()
wmap.set(key, 1) // 2
key = null // -1
console.log(process.memoryUsage().heapUsed); // 大
global.gc()
console.log(process.memoryUsage().heapUsed); // 小