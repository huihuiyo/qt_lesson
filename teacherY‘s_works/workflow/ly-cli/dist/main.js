'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _install = require('./install');

var _install2 = _interopRequireDefault(_install);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const a = 1
// console.log(a)

_commander2.default.command('install').description('install template').alias('i').action(function () {
  (0, _install2.default)();
}); // 安装 命令行的处理


console.log('process');
_commander2.default.parse(process.argv);