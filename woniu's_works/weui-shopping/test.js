var weuiTab = document.querySelector('.weui-tab')
var weuiTabbar = document.querySelector('.weui-tabbar')

weuiTabbar.childNodes[1].addEventListener('click', () => {
    if(!weuiTab.childNodes[1].classList.contains('show')) {
        weuiTab.childNodes[1].classList.add('show');
        weuiTab.childNodes[3].classList.remove('show');
        weuiTab.childNodes[5].classList.remove('show');
    }
    
})
weuiTabbar.childNodes[3].addEventListener('click', () => {
    if(!weuiTab.childNodes[3].classList.contains('show')) {
        weuiTab.childNodes[3].classList.add('show');
        weuiTab.childNodes[1].classList.remove('show');
        weuiTab.childNodes[5].classList.remove('show');
    }
})
weuiTabbar.childNodes[5].addEventListener('click', () => {
    if(!weuiTab.childNodes[5].classList.contains('show')) {
        weuiTab.childNodes[5].classList.add('show');
        weuiTab.childNodes[1].classList.remove('show');
        weuiTab.childNodes[3].classList.remove('show');
    }
})