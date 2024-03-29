import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1,
  date: '2019.9.20',
  money: 0
}
const mutations = {
  add (state, n = 1) {
    state.count += n
  },
  reduce (state) {
    state.count--
  },
  makeMoney (state) {
    state.money += 1
  }
}

const actions = {
  makeMoneyAction({commit}) {
    setTimeout( ()=> {
      commit('makeMoney')
    }, 2000)
    console.log('complete action')
  }
}

const getters = {
  count: function(state) {
    return state.count += 100
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})