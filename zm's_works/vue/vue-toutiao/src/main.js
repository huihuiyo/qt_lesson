import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/main.less'
import './styles/index.css'
import './rem.js'
import HeaderBar from '@/components/HeaderBar'
import FooterBar from '@/components/FooterBar'
import store from './store'

Vue.config.productionTip = false
Vue.use((foo) => {
  // foo === Vue
  foo.component('header-bar', HeaderBar);
  foo.component('footer-bar', FooterBar);
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
