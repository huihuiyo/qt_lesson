// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false

//修改Vue原型链方法，添加$bus方法
var bus = new Vue()
var eventBus = {
  install(Vue, options) {
    Vue.prototype.$bus = bus
  }
}
Vue.use(eventBus)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
