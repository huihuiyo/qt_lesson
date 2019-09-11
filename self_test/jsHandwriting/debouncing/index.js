function debounce (fn) {
  let timer
  return function () {
    if(timer)
      clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this)
    }, 1000)
  }
}

function realFunc () {
  console.log('keydown!')
}

window.addEventListener('keydown', debounce(realFunc)) 
// window.addEventListener('keydown', realFunc) // 没采用防抖函数