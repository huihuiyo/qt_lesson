<template>
  <div id="app">
    <MySubChlid />
  </div>
</template>

<script>
import MySubChlid from './components/parent'
export default {
  name: 'App',
  components: {
    MySubChlid
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
