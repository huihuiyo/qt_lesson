# 浏览器渲染的过程
1. 解析html, 生成DOM树, 生成cssom树
2. 将Dom树和cssom树结合, 生产渲染树(render tree)
3. 回流, 根据生成的渲染树进行回流, 得到节点的几何信息(位置大小)
4. 重绘(重塑), 根据渲染树和节点的结合信息得到节点的绝对像素
5. 将像素发给GPU, 展示在页面上

# 浏览器何时执行 回流和重绘
1. 添加或删除 可见 dom元素
2. 元素位置和大小发生变化的时候
3. 浏览器窗口大小发生改变
4. 页面初次渲染

# 回流一定会触发重绘 重绘不一定会触发回流

# 强制队列刷新
offsetTop、offsetLeft、offsetWidth、offsetHeight
scrollTop、scrollLeft、scrollWidth、scrollHeight
clientTop、clientLeft、clientWidth、clientHeight
getComputedStyle()
getBoundingClientRect

# 如何减少回流重塑的次数
1. 使元素脱离文档流
2. 对其进行多次修改
3. 将元素带回文档流当中

# 让dom脱离文档流的三种方式
1. 隐藏元素
2. 使用文档片段（document fragment）在当前的dom之外构建一个子树，再把它拷贝进文档
3. 将原始元素拷贝到一个脱离文档的节点中，修改节点后，再替换原始元素