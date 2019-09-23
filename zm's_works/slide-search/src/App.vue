<template>
  <div id="app">
    <SlideSearch :showSearchPage='showSearchPage'></SlideSearch>
    <ul class="main">
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
    </ul>
  </div>
</template>

<script>
import SlideSearch from './components/SlideSearch/index'

export default {
  name: 'App',
  data() {
    return {
      showSearchPage: false
    }
  },
  components: {
    SlideSearch
  },
  // 已经转换为真实的dom
  mounted() {
    // ref
    const ul = document.querySelector('.main')
    ul.addEventListener('scroll', () => {
      if (ul.scrollTop === 0) {
        this.showSearchPage = false
      }
      if (ul.scrollTop >= 10) {
        this.showSearchPage = true
      }
    })
  }
}
</script>

<style>
ul {
  height: calc(100vh - 94px);
  overflow: scroll;
}
li {
  margin-top: 20px;
}
#app {

}
</style>
