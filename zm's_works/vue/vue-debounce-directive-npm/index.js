// <div v-debounce='open'>立即购买</div>
function debounce(fn, wait) {
  var timeout = null;
  return function () {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(fn, wait);
  }
}
let option = {
  inserted: (el, binding) => {
    console.log(el, binding);
  },
  bind: function(el, binding) {
    // onClick 两次onClick后面的会被覆盖
    // addEventListener
    el.addEventListener('click', debounce(binding.value, 2000))
  },
  unbind: function() {
  }
};
let plugin = {};
plugin.install = function(argVue) {
  argVue.directive('debounce', option)
}
// Vue.directive('debounce', option)

if (typeof exports === 'object') {
  model.exports = plugin
} else if (window) {
  window.Vue.use((argVue) => {
    argVue.use(plugin)
  })
}