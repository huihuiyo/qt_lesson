<template>
  <div>
    <div class="component-A">组件A--{{app.user}}</div>
    <comb></comb>
  </div>
</template>

<script>
import comb from './b.vue'
export default {
  provide: {
    name: 'hh',
  },
  inject: ['app'],
  data () {
    return {

    }
  },
  components: {
    comb
  }
}
</script>

<style scoped>

</style>
