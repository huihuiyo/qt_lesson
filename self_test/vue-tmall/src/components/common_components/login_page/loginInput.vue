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
</style>
