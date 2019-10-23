<template>
  <div class="content">
    <div class="login-box">
      <div class="hd">
        <div class="login-switch">
          <i class="iconfont icon-diannao tmall_icon_font" v-if="normalLoginWay"></i>
          <i class="iconfont icon-erweima tmall_icon_font" v-else></i>
        </div>
        <div class="login-tip">
          <div class="poptip">
            <div class="poptip-arrow">
              <em></em>
              <span></span>
            </div>
            <div class="poptip-content">
              <i class="iconfont icon-dunpai"></i>扫码登录更安全
            </div>
        </div>
        </div>
      </div>
      <div class="bd">
        <div class="static-form">
          <div class="login-title">
            密码登录
          </div>
          <form action="">
            <div class="field username-field">
              <label for="login_username">
                <i class="iconfont icon-user"></i>
              </label>
              <span class="ph-label">会员名/邮箱/手机号</span>
              <input type="text" name="login_username" id="login_username" class="login-text" value="" maxlength="32" tabindex="1" aria-label="会员名/邮箱/手机号">
            </div>
            <div class="field pwd-field">
              <label class="password-label" for="login_password">
                <i class="iconfont icon-suo" title="登录密码"></i>
              </label> 
              <span>
                <input type="password" name="login_password" id="login_password" class="login-text" maxlength="40" tabindex="2" autocomplete="off" aria-label="登录密码">
              </span> 
            </div>
            <div class="submit">
              <button type="submit" tabindex="3" data-ing="正在登录...">登 录</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      normalLoginWay: false
    }
  }
}
</script>

<style scoped>
.tmall_icon_font {
  color: #FF0036;
  font-size: 16px;
  font-style: normal;
}
.content {
  height: auto!important;
}
.login-box {
  color: #6c6c6c;
  background: #fff;
  position: relative;
}
.content .login-box {
  margin: auto;
  width: 350px;
  padding: 0;
}
.login-switch {
  width: 52px;
  height: 52px;
  line-height: 52px;
  position: absolute;
  right: 5px;
  top: 12px;
}
.login-switch i {
  display: block;
  font-size: 52px;
  cursor: pointer;
}
.login-tip {
  top: 10px;
  position: absolute;
  right: 58px;
}
.poptip {
  border: 1px solid #f3d995;
  height: 16px;
  line-height: 16px;
  padding: 5px 20px 5px 15px;
  background: #fefcee;
  position: relative;
}
.poptip-arrow {
  top: 8px;
  right: 0;
}
.poptip-arrow {
  position: absolute;
  z-index: 10;
}
.poptip-arrow em, .poptip-arrow span {
  position: absolute;
  width: 0;
  height: 0;
  border-color: rgba(255,255,255,0);
  border-style: solid;
  overflow: hidden;
}
.poptip-arrow em {
  top: 0;
  left: 1px;
  border-left-color: #f3d995;
  border-width: 6px 0 6px 6px;
}
.poptip-arrow span {
  border-left-color: #fefcee;
  border-width: 6px 0 6px 6px;
}
.poptip .poptip-content {
  color: #df9c1f;
  font-size: 12px;
  font-weight: 400;
}
.poptip .poptip-content .iconfont {
  color: #df9c1f;
  font-size: 14px;
  margin-right: 8px;
}
.login-box .bd {
    padding: 25px 26px 20px;
}
.quick-form, .static-form {
  display: block;
}
.static-form {
  position: relative;
}
.login-box .bd .login-title {
  margin-top: 15px;
  padding-bottom: 0;
}
.login-title {
  height: 18px;
  line-height: 18px;
  font-size: 16px;
  color: #3c3c3c;
  margin-top: 9px;
  padding-bottom: 8px;
  font-weight: 700;
}
.static-form .field {
  margin-top: 20px;
  position: relative;
}
.login-box .bd .field {
  margin-top: 25px;
}
.static-form .field label {
  display: block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  background: #ddd;
  text-align: center;
  position: absolute;
  left: 1px;
  top: 1px;
  outline: 0;
}
.login-box .field label {
  color: #606060;
}
.static-form .field label .iconfont {
  font-size: 22px;
}
.static-form .field .ph-label {
  position: absolute;
  line-height: 42px;
  height: 42px;
  color: #999;
  opacity: 1;
  transition: all .2s ease-out;
  -webkit-transition: all .2s ease-in;
  -moz-transition: all .2s ease-out;
  left: 50px;
  top: 0;
  font-size: 14px;
}
.static-form .login-text {
  width: 240px;
  font-size: 14px;
  line-height: 18px;
  height: 18px;
  padding: 11px 8px 11px 50px;
  border: 1px solid #ddd;
}
.login-box .login-text {
  border-color: #cbcbcb;
  color: #9b9b9b;
}
.static-form .pwd-field label {
  background-position: 50% -30px;
}
.static-form .submit {
  margin-top: 20px;
}
.login-box .submit button {
  width: 300px;
  height: 42px;
  border: 0;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
  line-height: 42px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  background: #f40;
  border-radius: 3px;
  cursor: pointer;
  zoom: 1;
}
.login-box .submit button {
  width: 300px;
  height: 42px;
  line-height: 42px;
  background-color: #ff0036;
}
</style>
