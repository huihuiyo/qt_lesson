import Vue from 'vue'
import App from './App.vue'
import store from './store/index' // 单一状态数

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
