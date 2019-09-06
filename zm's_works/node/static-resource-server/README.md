## 静态资源
   静态：不会随着服务器进行改变的资源，
   资源放在服务器上面的
   常见的静态资源：hmtl css js jpg

## 浏览器
file:///F:/Workspace/qt_lesson/zm's_works/node/static-resource-server/index.html
http://localhost:9090
浏览器支持两个不同的协议

http://localhost:9090/static/img.jpg

1. 浏览器知道这是一个html
2. script img link src属性 浏览器会请求对应的src 得到对应的结果
3. 服务器 要返回 对应的内容 js/css

http://127.0.0.1:8080/static/img.jpg
和磁盘路径一一对应
req.url === c:/static/x.jpg
作用：统一处理了 静态资源的请求

静态资源的请求 都会有 某些特点
static.u51.com
u51.com/static/a.jpg

异步：
1. 回调
2. Promise