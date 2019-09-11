- 链接带来了页面的互联
  一切皆资源 链接表示 URL
  传统页面 重新刷新 坏事 体验有点差
  SPA Single Page Application
## 路由的做法 vue-router 会用不算什么 框架的实现
- 单页应用的结构
  不再是n个页面了，一个页面，分为不动的部分和动的部分
  导航 nav a #/page1
  /page1 path 页面切换的
  #/page1 锚链接 URL改变了的事件，container 元素里 动态DOM
  大型页面，方便跳转
  锚链接让点击链接，不跳转页面成可能 #/page1 #开头

  路由接管一切 new HashRouter();
  constructor 订阅hashChange事件


- 新的前端世界在打开 要有新的秩序
  管住所有路由 #/page hashRouter
  hash => func(); // container 显示;
  class hashRouter
  this.routers = {}
  向外提供 register(hash, callback = function () {}) 方法
  load()
  window.addEventListener('hashchanged', this.load.bind(this)) 
  call, apply es5 手动指定函数内部this的API
  bind this 一样，返回一个新的函数，适合事件执行时

  VUE REACT   SPA Single Page Application 应用体验更好，页面会白一下
  传统网页 链接把网站组织起来的 重新加载新的页面，新的http请求
  /about req, res 过程
  req /about 
  时间 网路传输时间，01 二进制 电频信号 波速->光速 + node/java/python 后端代码，查数据库执行的时间，
  把html 返回回去 = 白屏时间 100 - 200
  1.5s 用户就会离开，0.1s 1000W
  res /about about.html

路由的独立的
- 网站MVC => 应用（Vue App）体验产生路由 白屏问题
VueRouter 就来了
- hashRouter
  #/shop  #/
  优点是 ie8以上都支持
  缺点：路由不纯粹， /shop
  HistoryRouter history 历史的 /shop 访问的历史、记录
  VUERouter 两种实现方式 = HashRouter(兼容性好#/shop) + HistoryRouter(长的好/shop,移动端兼容性还是没有问题的)