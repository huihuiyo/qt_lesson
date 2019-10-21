<template>
  <div>
    <p class="login_info" v-if="!login_state">
      <em>喵，欢迎来天猫</em>
      <a
        class="login_p"
        href="//login.tmall.com/?redirectURL=https%3A%2F%2Fnvxie.tmall.com%2F%3Fspm%3D875.7931836%2FB.category2016012.1.321a4265MTtDcg%26acm%3Dlb-zebra-148799-667863.1003.4.708026%26scm%3D1003.4.lb-zebra-148799-667863.OTHER_14561689118972_708026"
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
          href="//login.taobao.com/member/logout.jhtml?spm=a223b.7790858.a2226mz.7.261b4187KxgJXI&amp;redirectURL=%2F%2Flogin.tmall.com%2F%3FredirectURL%3Dhttps%253A%252F%252Fnvxie.tmall.com%252F%253Fspm%253D875.7931836%252FB.category2016012.1.321a4265MTtDcg%2526acm%253Dlb-zebra-148799-667863.1003.4.708026%2526scm%253D1003.4.lb-zebra-148799-667863.OTHER_14561689118972_708026"
        >退出</a>
      </span>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      login_state: state => state.loginState.sign_on,
      user_info: state => state.loginState.user_info
    })
  }
};
</script>

<style scoped>
.login_bar a:link, .login_bar a:visited, .bar_container {
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
