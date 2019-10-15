var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index'); // 引入 index.js 路由配置文件
var usersRouter = require('./routes/users'); // 引入 users.js 路由配置文件
var editRouter = require('./routes/edit');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); // 指定视图文件夹为 views
app.set('view engine', 'ejs'); // 指定视图引擎 ejs

// 使用刚加载的资源
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // 指定公共资源文件夹为 pubic

app.use('/', indexRouter); // 当路径为根路径'/',即http://localhost:3000时，匹配index.js
app.use('/users', usersRouter); // 同上理

// 匹配404，即路径未匹配时
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// 匹配500，即路径匹配错误
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
