<template>
  <div>
    <button @click="handleDispatch">派发事件</button>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    handleDispatch() {
      this.$dispatch('test', 'Hello, Vue.js');
    }
  }
}
</script>

<style scoped>

</style>
