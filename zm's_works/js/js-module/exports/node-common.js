// typeOf exports?
console.log(exports === module.exports); // true
var counter = 3;

var obj = {
  name: 'David'
}
function changeVal() {
  counter++;
  obj.name = 'HH'
}
// typeOf exports === 'object'
// 以下同一个道理
module.exports = {
  counter,
  obj,
  changeVal
};
// module.exports.counter = counter;
// exports.counter = counter;
// exports = modules.exports = {
//   counter
// }