<template>
  <div>
    <p class="login_info" v-if="!login_state">
      <em>喵，欢迎来天猫</em>
      <a
        class="login_p"
        @click="openLoginDialog"
        target="_top"
      >请登录</a>
      <a class="register_p" href="//register.tmall.com/" target="_top">免费注册</a>
    </p>
    <p class="login_info" v-else>
      <span class="welcome_span">
        <span>Hi，</span>
        <a
          class="user-nick"
          target="_top"
          href="//vip.tmall.com?t=1571049991870"
          :title="user_info.username"
        >{{user_info.username}}</a>
        <a class="vip_center" title="会员中心" href="//vip.tmall.com?t=1571064819021" target="_top"></a>
        <a class="point_a">
          积分
          <em class="point_value">{{user_info.integral}}</em>
        </a>
      </span>
      <span class="welcome_span">
        <a
          class="logout_a"
          target="_top"
          @click="logout"
        >退出</a>
      </span>
    </p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      login_state: state => state.loginState.sign_on,
    }),
    ...mapGetters('loginState', {
      user_info: 'loginUser'
    })
  },
  methods: {
    ...mapActions('loginState', {
      change_show_state: 'change_show_state',
      change_signOn_state: 'change_signOn_state'
    }),
    openLoginDialog() {
      if (!this.login_state && !this.dialog_state) {
        this.change_show_state()
      }
    },
    logout() {
      if (this.login_state) {
        this.change_signOn_state()
      }
    }
  }
};
</script>

<style scoped>
.login_bar a, .login_bar a:link, .login_bar a:visited, .bar_container {
  color: #999;
}
.login_bar a:active, .login_bar a:hover, .point_a:hover .point_value {
  color: #FF0036;
  text-decoration: underline !important;
  cursor: pointer;
}
.login_info {
  position: relative;
  display: inline-block;
  height: 26px;
  line-height: 26px;
}
.login_info em {
  color: #999;
  font-style: normal;
}
.login_p, .register_p, .point_a, .logout_a {
  padding: 0 10px;
}
.login_p {
  padding-left: 20px;
}
.welcome_span {
  color: #999;
  height: 26px;
  float: left;
  display: block;
}
.welcome_span span, .point_a {
  line-height: 26px;
  vertical-align: top;
  display: inline-block;
}
.user-nick {
  margin-left: -3px;
  max-width: 110px;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  -moz-text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;
  height: 26px;
  line-height: 26px;
  white-space: nowrap;
}
.vip_center {
  width: 18px;
  height: 12px;
  top: 7px;
  margin-left: 3px;
  display: inline-block;
  position: relative;
  vertical-align: top;
  background-position: 0 0;
  background: url(//img.alicdn.com/tfs/TB1Z_HcQFXXXXc7apXXXXXXXXXX-26-71.png) no-repeat;
  background-size: 17px auto;
}
.point_a {
  outline: 0;
  position: relative;
}
.point_value {
  padding-left: 2px;
  color: #666;
  font-weight: 700;
  font-family: Tahoma;
  line-height: 25px;
}
</style>
