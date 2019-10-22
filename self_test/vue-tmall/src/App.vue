<template>
  <div id="app">
    <Login />
    <transition name="tab_router_view">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Login from '@/components/common_components/login_page/login.vue'
export default {
  components: {
    Login
  }
}
</script>

<style>
@import url(//at.alicdn.com/t/font_1456710_86rwawl5rlh.css);
html {
  scroll-behavior: smooth;
}
button, h1, h2, h3, h4, h5, h6, input, select, textarea {
  font-size: 100%;
}
body {
  border: 0;
  height: 100%;
  background: #f9f9f9;
  line-height: 1.4285;
  font: 12px/1.5 tahoma,arial,"\5b8b\4f53";
}
* {
    margin: 0;
    padding: 0;
}
img {
    height: 100%;
    /*width: inherit;*/
    border: 0;
    vertical-align: middle;
}
ul, li {
    list-style-type: none;
    padding: 0;
    margin: 0;
}
a {
    text-decoration: none !important;
}
#app {
    height: calc(100vh - 263px);
}
.tab_router_view-enter-active, .tab_router_view-leave_active {
    /*opacity: 0;*/
    transition: all .5s;
}
.tab_router_view-enter, .tab_router_view-leave-to {
    opacity: 0;
}
.tab_router_view-enter-to, .tab_router_view-leave {
    opacity: 1;
}
</style>
