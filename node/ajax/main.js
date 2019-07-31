// live-server
// index.html http 访问支持 web server
const http = require('http');
const fs = require('fs');
const index = fs.createReadStream('./index.html');
// web server 一直伺服的 3000
// 向request 返回response   资源
const server = http.createServer((req, res) => {
    // res.end('hello world!')
    // index.html 显示出来  /->代表默认页
    // req 浏览器 访问网站的代理
    if (req.url == '/') {
        index.pipe(res);
        // res.end('index page!');
    } else if (req.url == '/userinfo'){
        const info = {
            'name': '李颖',
            'desc': 'huihui'
        }
        res.writeHead(200, {
            'Content-type': 'text/plain;charset=utf8'
        });
        res.end(JSON.stringify(info));
    } else {
        res.end('hello world!');
    }
})
server.listen(1314);