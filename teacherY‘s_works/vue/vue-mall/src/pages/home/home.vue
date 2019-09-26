<template>
  <div>
    <header class="home-header wrap" :class="{'active' : headerActive}">
      <router-link tag="i" to="./category" class="iconfont icon-caidan"></router-link>
      <div class="header-search">
        <span class="app-name">M</span>
        <i class="iconfont icon-search"></i>
        <router-link tag="span" class="search-title" to="./search">家电返场同价11.11</router-link>
      </div>
      <router-link tag="span" to="./login" v-if="!isLogin">登录</router-link>
      <router-link tag="span" to="./user" v-else>
        <i class="iconfont icon-iconyonghu"></i>
      </router-link>
    </header>
    <nav-bar></nav-bar>
    <slider />
  </div>
</template>

<script>
import navBar from '../../components/navBar'
import slider from '../../components/slider'

export default {
  data() {
    return {
      headList: [],
      categoryList: [],
      isLogin: false,
      headerActive: false
    };
  },
  components: {
    navBar,
    slider
  },
  beforeCreate() {
    if (!this.isLogin) {
      this.$router.redirect('/login')
    }
  },
  created() {
    
  },
  mounted() {
    window.addEventListener('scroll', () => {})
  }
};
</script>

<style scoped>
</style>
