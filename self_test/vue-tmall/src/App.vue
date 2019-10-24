<template>
  <div id="app">
    <Login />
    <transition name="tab_router_view">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Login from "@/components/common_components/login_page/login.vue";
export default {
  components: {
    Login
  }
};
</script>

<style>
@import url(//at.alicdn.com/t/font_1456710_biln6hb4uv.css);
html {
  scroll-behavior: smooth;
}
button,
h1,
h2,
h3,
h4,
h5,
h6,
input,
select,
textarea {
  font-size: 100%;
}
input {
  writing-mode: horizontal-tb !important;
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  color: initial;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  -webkit-appearance: textfield;
  background-color: white;
  -webkit-rtl-ordering: logical;
  cursor: text;
  margin: 0em;
  font: 400 13.3333px Arial;
  padding: 1px 0px;
  border-width: 2px;
  border-style: inset;
  border-color: initial;
  border-image: initial;
}
button {
  appearance: button;
  -webkit-appearance: button;
  writing-mode: horizontal-tb !important;
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  color: buttontext;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: center;
  align-items: flex-start;
  cursor: default;
  background-color: buttonface;
  box-sizing: border-box;
  margin: 0em;
  font: 400 13.3333px Arial;
  padding: 1px 6px;
  border-width: 2px;
  border-style: outset;
  border-color: buttonface;
  border-image: initial;
}
fieldset,
img {
  border: 0;
}
body {
  border: 0;
  height: 100%;
  background: #f9f9f9;
  line-height: 1.4285;
  font: 12px/1.5 tahoma, arial, "\5b8b\4f53";
}
* {
  margin: 0;
  padding: 0;
}
s {
  text-decoration: line-through;
}
img {
  height: 100%;
  /*width: inherit;*/
  border: 0;
  vertical-align: middle;
}
ul,
li {
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
.tab_router_view-enter-active,
.tab_router_view-leave_active {
  /*opacity: 0;*/
  transition: all 0.5s;
}
.tab_router_view-enter,
.tab_router_view-leave-to {
  opacity: 0;
}
.tab_router_view-enter-to,
.tab_router_view-leave {
  opacity: 1;
}
</style>
