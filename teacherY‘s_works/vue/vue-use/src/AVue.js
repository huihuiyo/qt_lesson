import Vue from 'vue'

function AVue({methods}) {
  for (const key in methods) {
    if (methods.hasOwnProperty(key)) {
      this[key] = methods[key]
    }
  }
}

AVue.prototype.$alert = () => {
  document.write('我是一个赝品。')
}

Object.defineProperty(Vue.prototype, '$alert', {
  writable: true,
  value () {
    document.write('我是行货。')
  }
})
export default AVue