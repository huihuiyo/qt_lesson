<template>
  <div id="app">
    <v-Header>
      <i class="icon" slot="left-icon">&#xe692;</i>
      <span slot="content">我的音乐</span>
      <router-link slot="right-icon" to="/user">
        <i class="icon">&#xe63c;</i>
      </router-link>
    </v-Header>
    <v-SideBar></v-SideBar>
    <!-- tab -->
    <v-Tab></v-Tab>
    <router-view/>
    <v-play></v-play>
  </div>
</template>

<script>
import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import Tab from '@/components/Tab'
import Play from '@/components/Play'
export default {
  name: 'App',
  components: {
    'v-Header': Header,
    'v-SideBar': SideBar,
    'v-Tab': Tab,
    'v-play': Play
  }
}
</script>

<style lang="stylus">
@import "./assets/css/function"
@font-face
  font-family "icon"
  src url("//at.alicdn.com/t/font_kmywdojzhchj8aor.eot")
  src url("//at.alicdn.com/t/font_kmywdojzhchj8aor.eot?#iefix") format("embedded-opentype"),
    url("//at.alicdn.com/t/font_kmywdojzhchj8aor.woff") format("woff"),
    url("//at.alicdn.com/t/font_kmywdojzhchj8aor.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_kmywdojzhchj8aor.svg#iconfont") format("svg")

.icon
  font-family "icon" !important
  font-size 18px
  font-style normal
  color #ffffff
html,body
  line-height 1
  font-family PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif
  user-select none
  -webkit-tap-highlight-color transparent
  background rgba(8, 5, 58, 0.9)
  color #fff
</style>
