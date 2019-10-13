const state = {
  on_or_up: 'on',
  show_login_dialog: false, // 登录框弹出状态
  sing_on: false, // 登录状态：false 未登录
  user_info: {
    id: 1,
    avatar_url: 'https://avatars2.githubusercontent.com/u/10172415?s=40&v=4',
    username: 'Ally'
  }
};
const actions = {
  change_show_state(context, onOrUp) {
    context.commit('change_show_state', onOrUp)
  }
};
const mutations = {
  change_show_state(state, onOrUp) {
    state.show_login_dialog = !state.show_login_dialog;
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}