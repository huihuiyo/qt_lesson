import Vue from 'vue';
import Vuex from 'vuex';
import loginState from './modules/login_state.js';
import userInfo from './modules/user_info.js';
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    loginState,
    userInfo
  }
})