var express = require('express');
const app = express();
// 上传npm包配置
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, 'upload/');
	},
	filename: function(req, file, cb) {
		cb(null, Date.now() + "-" + file.originalname);
	}
})

const upload = multer({
	storage: storage

})

app.get('/', function(req, res) {
	const form = fs.createReadStream(
		path.join(__dirname, 'index.html')
	);
	form.pipe(res);
})

// 路由
app.post('/upload', upload.single('pic'), 
	function(req, res) {
		// 文件上传
		console.log("要处理表单提交了");
		res.send({
			ret_code: 0
	})
})
app.listen(3001);