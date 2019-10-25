const Koa = require('koa');
const views = require('koa-views');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();
const serve = require('koa-static');

const app = new Koa();

app.use(bodyParser());
app.use(serve(path.join(__dirname, './static/')));
// 加载模板引擎
app.use(views(path.join(__dirname, './view'), {
  extension: 'ejs'
}))
router.get('/', async (ctx) => {
  const query = ctx.query;
  const { xss } = query;
  ctx.set('X-XSS-Protection', 0)
  await ctx.render('xss', {
    xss
  })
})
router.get('/user', async (ctx) => {
  await ctx.render('comment');
})
var cache = {};
router.get('/comment', async (ctx) => {
  console.log(1234567)
  function html_encode (s) {
    var str = ''
    str = s.replace(/</g, '&lt;');
    str = str.replace(/</g, '&gt;');
    return str;
  }
  const { comment } = ctx.query;
  console.log(html_encode(comment));
  cache.v = html_encode(comment);
  ctx.body = {
    code: 200
  }
})
router.get('/getComment', async (ctx) => {
  console.log(cache.v);
  ctx.body = {
    comment: cache.v
  }
})
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8080, () => {
  console.log('server is running 8080');
});
