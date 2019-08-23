const Event = require('events');
const ev = new Event();

// 订阅者
function price1() {
	console.log('大米涨价了');
}
ev.on('price', price1);
ev.on('price', function(thing) {
	console.log(`${thing}涨价了`);
})
// 发布者
ev.emit('price', 'oil');
ev.removeListener('price', price1);
ev.emit('price', 'oil');

// once 只被接收一次
ev.once('eat', () => {
	console.log('eat1')
})
ev.once('eat', () => {
	console.log('eat2')
})
ev.emit('eat'); // eat1 and eat2
ev.emit('eat'); // 不接收