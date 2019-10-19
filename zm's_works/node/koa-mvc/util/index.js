const mysql = require('mysql');
const pool = mysql.createPool({
  user: 'root',
  password: '123456',
  host: '127.0.0.1',
  post: 3306,
  database: 'chat'
})

let query = function (sql, val) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connect) => {
      if(err) {
        console.log(err);
        reject(err)
      };
      connect.query(sql, val, (err, rows) => {
        if(err) reject(err);
        else resolve(rows);
        connect.release();
      })
    })
  })
}

module.exports = {
  query
}