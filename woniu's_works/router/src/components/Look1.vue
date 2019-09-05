<template>
  <div class="lookpage1">
    <h1>{{ msg }}</h1>
    <div class="go-two" @click="goTwo">
      去look2页面
    </div>
  </div>
</template>

<script>
export default {
  name: 'LookPage1',
  data () {
    return {
      msg: 'Welcome to Your LookPage1.vue'
    }
  },
  methods: {
    goTwo () {
      this.$router.push({name: 'LookPage2', params: {id: 666}})
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log(to, from)
    next()
  },
  beforeRouteLeave (to, from, next) {
    next()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
