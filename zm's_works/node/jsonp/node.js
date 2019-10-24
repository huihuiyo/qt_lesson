const http = require('http');

http.createServer((req, res) => {
  const url = require('url').parse(req.url);
  if (url.pathname === './api/books') {
    const methodName = url.query && url.query.split('=')[1];
    let list = [ {book1: 'bkk1', book2: 'bkk2'} ];
    res.end(`${methodName}(${JSON.stringify(list)})`);
  }
})
.listen(3002, () => {
  console.log('server is running http://localhost:3002');
})
