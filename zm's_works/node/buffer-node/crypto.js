const crypto = require('crypto');
// sha256 === md5

let test = 'hello world';
const sign = crypto.createHmac('sha256', 'abc')
.update(test).digest('base64');
console.log(sign);