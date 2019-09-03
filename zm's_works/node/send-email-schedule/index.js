const nodeMailer = require('nodemailer');
const juice = require('juice');
const ejs = require('ejs');
const fs = require('fs');

const transporter = nodeMailer.createTransport({
	service: 'qq',
	port: 465, // 邮箱协议smtp默认端口
	secureConnection: true,
	auth: {
		user: '752710151@qq.com',
		pass: 'heuacqfhvexhbdad'
	}
});
const html = fs.readFileSync('./template/index.ejs', 'utf8');
const css = fs.readFileSync('./template/index.css', 'utf8');
const template = ejs.compile(html);
const afterHtml = template({
	userName: 'HuiHui'
})
// const afterWithInCss = juice(afterHtml); // 只能整合style写在ejs中的文件
const afterWithInCss = juice.inlineContent(afterHtml, css);
transporter.sendMail({
	to: '752710151@qq.com',
	html: afterWithInCss,
	from: '752710151@qq.com',
	subject: '吼吼吼'
}, (err, info) => {
	if (err) {
		console.log('邮件出错：', err);
	}

})