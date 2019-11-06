const http = require('http')
const { fork } = require('child_process')


const httpServer = http.createServer((req, res) => {
  if (req.url == '/computer') {
    const childComputer = fork('./fork-computer.js')
    childComputer.send('open')
    childComputer.on('message', (sum) => {
      res.end(`${sum}`)
    })
    console.log('不再被阻塞了') // 进程不再等待上面的任务
  } else {
    res.end('ok')
  }
})

httpServer.listen(3333, () => {
  console.log('server is running 3333')
})