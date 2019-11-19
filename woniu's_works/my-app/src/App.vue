<template>
  <div id="id">
    <img src="./assets/avatar.jpeg" alt="" srcset="">
    <router-link to="/login">登录</router-link>
    <router-link to="/">首页</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  height: 500px;
  background-color: red;
  color: #000;
}
</style>