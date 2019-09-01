const Event = require('events');
const https = require('https');

const ev = new Event();
ev.on('event1', () => {
	console.log('a');
})
ev.on('event2', () =>{
	console.log('b');
})
ev.emit('event2');
https.get('https://juejin.im/post/59a8ccf8f265da2498241625', 
	function (res) {
		res.on('data', (c) => {
			console.log('c', c);
		})
	}
)
// stream
