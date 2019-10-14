<template>
  <div class="component-B">
    组件B--{{name}}--{{app.user}}
    <button @click="check">call HH</button>
  </div>
</template>

<script>
export default {
  methods: {
    check() {
      this.app.userInfo()
    }
  },
  data () {
    return {

    }
  },
  inject: ['name', 'app']
}
</script>

<style scoped>

</style>
