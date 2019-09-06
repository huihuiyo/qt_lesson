const http = require('http');
const fs = require('fs');
const path = require('path');

function staticServer (req, res) {
  const reqUrl = req.url;
  const filePath = path.join(__dirname, reqUrl);
  // static/img.jpg
  // static/7.jpg
  fs.exists(filePath, exists => {
    if (!exists) {
      res.writeHead(404);
      res.end();
      return false;
    }
    fs.readFile(filePath, 'binary', (err, file) => {
      res.write(file, 'binary');
      res.end();
    });
  })
}

http.createServer((req, res) => {
  const reqUrl = req.url;
  if (/^\/static\//.test(reqUrl)) {
    staticServer(req, res)
    return false;
  }
  // if (req.url === '/static/img.jpg') {
  //   fs.readFile('./static/img.jpg', 'binary', (err, file) => {
  //     res.write(file, 'binary');
  //     res.end();
  //   });
  //   return false;
  // }
  // if (req.url === '/static/7.jpg') {
  //   fs.readFile('./static/7.jpg', 'binary', (err, file) => {
  //     res.write(file, 'binary');
  //     res.end();
  //   });
  //   return false;
  // }
  fs.readFile('./index.html', 'binary', (err, file) => {
    res.write(file, 'binary');
    res.end();
  });
}).listen(9090, () => {
  console.log('server is running 9090.');
});