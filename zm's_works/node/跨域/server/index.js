const Koa = require('koa');
const KoaRouter = require('koa-router');
const KoaStatic = require('koa-static');
const path = require('path');

var app = new Koa();
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  ctx.set('Access-Control-Allow-methods', 'POST, GET, PUT, DELETE, OPTIONS');
  ctx.set('Access-Control-Allow-Headers', 'X-custume, Content-Type');
  // 允许 是否发送 cookie ...
  ctx.set('Access-Control-Allow-Credentials', true)
  await next();
})
var router = new KoaRouter();
 
router.post('/api/books', (ctx, next) => {
  console.log(ctx.cookies.get('hello'))
  // ctx.router available
  ctx.body = [
    { bookNmae: 'php 入门到精通' },
    { bookNmae: 'node 入门到精通' },
  ]
});
 
app
  .use(router.routes())
  .use(router.allowedMethods());

app.use(KoaStatic(path.join(__dirname, './static')))
app.listen(3000, () => {
  console.log('server is running http://localhost:3000');
})