const router = require('koa-router')();
const userService = require('../controllers/mySqlConfig.js');
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/all', async (ctx, next) => {
  await userService.getAllUsers().then((res) => {
    console.log('打印结果：', JSON.stringify(res));
    ctx.body = res;
  })
})

// 注册
router.post('/userRegister', async (ctx, next) => {
  var _username = ctx.request.body.username;
  var _userpwd = ctx.request.body.userpwd;
  var _nickname = ctx.request.body.nickname;
  if (!_username || !_userpwd || !_nickname) {
    ctx.body = {
      code: '800001',
      mess: '用户名、昵称及密码不能为空'
    }
    return;
  }
  let user = {
    username: _username,
    userpwd: _userpwd,
    nickname: _nickname
  }
  await userService.findUser(user.username).then(async (res) => {
    if (res.length) {
      try {
        throw Error('用户名已存在');
      } catch (error) {
        console.log(error)
      }
      ctx.body = {
        code: '800003',
        data: 'err',
        mess: '用户名已存在'
      }
    } else {
      await userService.insertUser([user.username, user.userpwd, user.nickname]).then(res => {
        let r = '';
        if (res.affectedRows != 0) {
          r = 'ok'
          ctx.body = {
            code: '800000',
            data: r,
            mess: '注册成功'
          }
        } else {
          r = 'error'
          ctx.body = {
            code: '800004',
            data: r,
            mess: '注册失败'
          }
        }
      })
    }

  })
})

// 登录
router.post('/userLogin', async (ctx, next) => {
  var _username = ctx.request.body.username;
  var _userpwd = ctx.request.body.userpwd;
  await userService.userLogin(_username, _userpwd)
    .then(res => {
      let r = '';
      if (res.length) {
        r = 'ok';
        let result = {
          id: res[0].id,
          nickname: res[0].nickname,
          username: res[0].username
        }
        ctx.body = {
          code: '800000',
          data: result,
          mess: '登录成功'
        }
      } else {
        r = 'error';
        ctx.body = {
          code: '800004',
          data: r,
          mess: '账号或密码错误'
        }
      }
    }).catch((err) => {
      ctx.body = {
        code: '800002',
        data: err
      }
    })
})

router.post('/findNoteListByType', async (ctx, next) => {
  var note_type = ctx.request.body.note_type
  await userService.findNoteListByType(note_type)
   .then(async (res) => {
    let r = ''
    if (res.length) {
      r = '查找成功'
      ctx.body = {
        code: '800000',
        data: res,
        mess: r
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '800004',
        data: r,
        mess: '查找失败'
      }
    }
   })
   .catch(err => {
     ctx.body = {
       code: '800002',
       data: err
     }
   })
})

router.post('/findNoteDetailById', async (ctx, next) => {
  var id = ctx.request.body.id
  await userService.findNoteDetailById(id)
    .then(async (res) => {
      let r = ''
      if(res.length) {
        r = 'ok'
        ctx.body = {
          code: '800000',
          data: res[0],
          mess: r
        }
      } else {
        r = 'error'
        ctx.body = {
          code: '800004',
          data: r,
          mess: '查找失败'
        }
      }
    })
    .catch(err => {
      ctx.body = {
        code: '800002',
        data: err
      }
    })
})

router.post('/insertNote', async (ctx, next) => {
  var value = [...ctx.request.body.data]
  await userService.insertNote(value)
    .then(res => {
      let r = ''
      if (res.affectedRows != 0) {
        r = 'ok'
        ctx.body = {
          code: '800000',
          data: r,
          mess: '注册成功'
        }
      } else {
        r = 'error'
        ctx.body = {
          code: '800004',
          data: r,
          mess: '注册失败'
        }
      }
    })
})
module.exports = router
