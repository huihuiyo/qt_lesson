<template>
  <div id="app">
    <v-Header :seller="seller"></v-Header>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/header/Header'

export default {
  name: 'App',
  data () {
    return {
      seller: {}
    }
  },
  components: {
    'v-Header': Header
  },
  created () {
    this.$http.get('https://www.easy-mock.com/mock/5d721c4c9aaed00b9c3bde5e/vue-eleme-seller/vue-eleme-seller').then(res => {
      if (res.data.errno === 0) {
        this.seller = Object.assign({}, this.seller, res.data.data)
      }
    })
  }
}
</script>

<style>
</style>
