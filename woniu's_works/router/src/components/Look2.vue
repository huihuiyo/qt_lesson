<template>
  <div class="lookpage2">
    <h1>{{ msg }}</h1>
    {{$route.params.id}}
  </div>
</template>

<script>
export default {
  name: 'LookPage2',
  data () {
    return {
      msg: 'Welcome to Your LookPage2.vue'
    }
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
