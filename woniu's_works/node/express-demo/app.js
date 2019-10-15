// 1. 原生node 启动服务
// let http = require('http');

// let server = http.createServer()

// server.on('request', (req, res) => {
//   res.end('hello world!')
// })
// server.listen(3000, () => {
//   console.log('3000 server is running.')
// })

// 2. express启动服务
const express = require('express');
const app = express()
app.get('/', (req, res) => {
  res.end('hello world!')
})
app.listen(3000, () => {
  console.log('3000 server is running.')
})