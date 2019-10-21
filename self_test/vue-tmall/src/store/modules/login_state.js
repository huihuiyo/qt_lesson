const state = {
  sign_on: false,
  show_login_dialog: true,
  user_info: {
  }
}
const getters = {
  userState: (state) => {
    return state.sign_on;
  },
  loginUser: (state, getters, rootState) => {
    const id = state.user_info.id;
    const user = rootState.userInfo.all.find(user => user.id === id);
    return user;
  }
}
const actions = {
  change_show_state({commit}) {
    commit('change_show_state')
  }
}
const mutations = {
  change_show_state(state) {
    state.show_login_dialog = false;
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}