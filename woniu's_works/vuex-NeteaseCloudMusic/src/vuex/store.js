import Vue from 'vue'
import vuex from 'vuex'

import com from './modules/com'

Vue.use(vuex)

export default new vuex.Store({
  modules: {
    com
  }
})