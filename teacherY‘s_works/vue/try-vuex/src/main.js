import Vue from 'vue'
import App from './App.vue'
import MyVuex from './myvuex/index'
Vue.config.productionTip = false

// 单一树状态
let store = new MyVuex.Store({
  state: {
    count: 0
  },
  getters: {
    getStatePlusOne(state) {
      return state.count + 1
    }
  }
}, Vue)

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
