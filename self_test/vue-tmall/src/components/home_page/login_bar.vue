<template>
  <div class="login_bar">
    <div class="bar_container">
      <p class="back_home">
        <i class="iconfont icon-shouye tmall_icon_font back_home_icon"></i>
        <a href="//www.tmall.com/">天猫首页</a>
      </p>
      <LeftContent />
      <RightContent />
    </div>
  </div>
</template>

<script>
import LeftContent from "./login_bar/left_part.vue";
import RightContent from "./login_bar/right_part.vue";
export default {
  data() {
    return {};
  },
  components: {
    LeftContent,
    RightContent
  }
};
</script>

<style scoped>
.login_bar {
  width: auto;
  height: 26px;
  position: relative !important;
  background: #f2f2f2;
  z-index: 99999;
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  border-bottom: 1px solid #e5e5e5;
  min-width: 990px;
}
.bar_container {
  margin: auto;
  position: relative;
  width: 1190px;
  height: 26px;
}
.bar_container a:hover {
  color: #FF0036;
  text-decoration: underline !important;
  cursor: pointer;
}
.back_home {
  height: 26px;
  line-height: 24px;
  margin-right: 20px;
  float: left;
}
.back_home a {
  color: #999;
}
.tmall_icon_font {
  color: #FF0036;
}
.tmall_icon_font {
  font-size: 16px;
  font-style: normal;
}
.back_home_icon {
  margin-right: 4px;
  position: relative;
  top: 1px;
}
</style>
