// const a = 1
// console.log(a)

import program from 'commander'; // 安装 命令行的处理
import install from './install';

program.command('install')
  .description('install template')
  .alias('i')
  .action(() => {
    install();
  })

console.log('process')
program.parse(process.argv)