setTimeout(() => {
  console.log(1111111) // 3
}, 0)

console.time('test')
for (let i = 0; i < 1000000; i++) {
  i === (1000000 - 1)
}
console.timeEnd('test') // 1

console.log(2222222) // 2

// 1. js引擎线程
// 2. GUI线程
// 3. HTTP网络请求线程(处理用户的get，post请求)
// 4. 定时触发器线程(setTimeout、setInterval，等待时间结束后把执行函数推入到任务队列)
// 5. 浏览器事件处理线程
