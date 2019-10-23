const state = {
  sign_on: false,
  show_login_dialog: false,
  user_info: {
    id: 1
  }
}
const getters = {
  loginUser: (state, getters, rootState) => {
    const id = state.user_info.id;
    const user = rootState.userInfo.all.find(user => user.id === id);
    return user;
  }
}
const actions = {
  change_show_state({commit}) {
    commit('set_show_state')
  },
  change_signOn_state({commit}) {
    commit('set_signOn_state')
  }
}
const mutations = {
  set_show_state(state) {
    state.show_login_dialog = !state.show_login_dialog;
  },
  set_signOn_state(state) {
    state.sign_on = !state.sign_on;
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}