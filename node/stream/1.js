const fs = require('fs'); // fs->文件模块 require->模块引入机制

// IO：创建一个可读流->构建管道 processs.stdout
fs.createReadStream('./sample.txt').pipe(process.stdout); // 输出设备的一种 交互