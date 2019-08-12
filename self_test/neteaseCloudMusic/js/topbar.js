const ulParent = document.querySelector('.topbar-main-nav');
ulParent.addEventListener('click', function (event) {
	// console.log(event.target.tagName);
	for (let i = 0; i < ulParent.children.length; i++) {
		if (ulParent.children[i].classList.contains('show')) {
			ulParent.children[i].classList.remove('show');
		}
	}
	event.target.tagName=='EM'||'EM' ? event.target.parentNode.classList.add('show'):event.target.classList.add('show');
})