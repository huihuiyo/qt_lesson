- juice
  安装：npm i juice -S
  作用：将css整合到html页面中元素属性当中
  使用：juice(html) // 将html页面中style内容整合到html页面中元素属性当中
		juice.inlineContent(html, css) // 将css文件中内容整合到html页面中元素属性当中
- ejs
  安装：npm i ejs -S
  作用：动态整合html页面 模板 + 数据
  使用：
	1. .ejs 文件中 body内 使用 <%= 变量名 %>
	2. .js 文件中 通过const template = ejs.compile(html);拿到文件
	3. 通过 template({ userName: 'HuiHui' }) 赋值变量投入数据