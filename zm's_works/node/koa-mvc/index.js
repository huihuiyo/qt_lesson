const Koa = require('koa')
const KoaBodyParser = require('koa-bodyparser')
const app = new Koa()
const router = require('./router/index.js')
app.use(KoaBodyParser())
app.use(async (ctx, next) => {
  // CORS
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  ctx.set('Access-Control-Allow-Headers', 'X-custume, Content-Type');
  // 允许 是否发送 cookie ...凭证
  ctx.set('Access-Control-Allow-Credentials', true);
  await next();
})

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000, () => {
  console.log('Server is running http://localhost:3000')
})