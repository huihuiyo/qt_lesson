## XSS
cross site script 跨站脚本攻击
通过不合法途径 web页面插入可执行的代码
攻击类型：
1. 反射型：
   xss代码存在url中，服务器解析请求，把xss代码一并返回，web网页得到响应，执行外部xss代码。
   该过程像一次反射。

  ## 防护
  1. 编码 html entity 编码， "<" -> "&lt;" ; " " -> "&nbsp;"
  2. 过滤 onError、onClick属性，极大可能造成攻击的
    eg： <script>alert(123)</script> -> <script>XX</script>
  3. 校正 反编码 输出正常内容在页面

2. 存储型：
   唯一的区别 xss代码 有没有永久保留在 服务器、数据库、文件... 中