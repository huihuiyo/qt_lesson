- express 开发框架，
  先安装，app = express();
  app.get('/', function(req, res) {
	  文件流操作
  }); // 定义一个get请求，path / 
  app.listen(3001);
- 完成表单
  action="/upload" method="POST"
- 上传文件
  express 开发框架
  multer 文件上传专用的包 npm node 开发中，开源的呢些工具/包
  npm install multer
  - 存储地址 /upload
  - 文件名 Date.now() 时间戳
