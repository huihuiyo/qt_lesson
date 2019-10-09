import Vue from 'vue';
import App from './App.vue';
import ComColorButton from 'lyyy-color-button-test';

Vue.use(ComColorButton)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
