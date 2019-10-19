const md5 = require('md5');
const { query } = require('../util/index.js');
// 注册
const insertData = function (val) {
  console.log('val', val);
  // 数据库 mysql sequlize
  let sql = 'insert into user_info(name, password) value (?, ?)';
  // 哈希
  // 不可逆 同样的输入会有同样的输出
  // 输出位数固定
  return query(sql, [val.name, md5(val.password)])
}
const queryByName = async (name) => {
  let sql = 'select * from user_info where name= ?'
  return query(sql, [ name ])
}
module.exports = {
  insertData,
  queryByName
}