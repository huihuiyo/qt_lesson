import Vue from 'vue'
import vuex from 'vuex'

import com from './modules/com'
import music from './modules/music'

Vue.use(vuex)

export default new vuex.Store({
  modules: {
    com,
    music
  }
})