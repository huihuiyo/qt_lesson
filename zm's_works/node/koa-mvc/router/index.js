const KoaRouter = require('koa-router');
const router = new KoaRouter();
const registerController = require('../controller/register.js');
const loginController = require('../controller/login.js')

router.prefix('/api/v1')
router.post('/any', async(ctx) => {
  ctx.body = '123'
})
router.post('/login', loginController);
router.get('/register', registerController);

module.exports = router;