<template>
  <div id="login">
    name:<input type="text" v-model="name">
    <br>
    password:<input type="password" v-model="password">
    <br>
    <button @click="login">登录</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    login() {
      // restful风格的 api
      axios.post('/api/v1/login', {
        name: this.name,
        password: this.password
      }).then(res => {
        // if(res...)
        console.log(res);
      })
    }
  },
}
</script>

<style scoped>
#login {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
