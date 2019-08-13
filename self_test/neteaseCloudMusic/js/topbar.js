// 冒泡点击事件
const ulElement = document.querySelector('.topbar-main-nav');
ulElement.addEventListener('click', function (event) {
	for (let i = 0; i < ulElement.children.length; i++) {
		const aElement = ulElement.children[i].children[0].children[0];
		if (aElement.classList.contains('show')) {
			aElement.classList.remove('show');
		}
	}
	// 三元运算符 判断当前被点击的元素 用于导向li 并给其加上 .show
	event.target.tagName == 'EM' || event.target.tagName == 'SUB' ? event.target.parentNode.classList.add('show') : event.target.classList.add('show');
}, true)