##
SEO: 浏览器会爬取html内容， 未来SEO我们放文字，为了美观 放图片，
场景：网站的logo
## css 选择器 优先级
importent 最高
style (+1000)
id	(+100)
class	(+10)
元素/ 伪元素(*) (+1)
#box span.active -> 111
#box span -> 101
	同等 优先级 按照css定义的顺序后出现覆盖先出现的
	```css
	.red {color: red}
	.blue {color: blue}                  <- 后定义的
	<span class='blue red'>123</span>    <- 123为蓝色

## animation-fill-mode
forwords
none
backwards: 动画开始前，将元素的样式设为动画第一帧的样式
both forwords + backwards