<template>
  <div class="switch">
    <!-- <button @click="open">开关</button> -->
    <child></child>
  </div>
</template>

<script>
import child from './child'
export default {
  methods: {
    // open() {
    //   this.$emit('test', '666')
    // }
  },
  mounted() {
    this.$on('test', text => console.log(text))
  },
  data () {
    return {
      switch: false
    }
  },
  components: {
    child
  }
}
</script>

<style scoped>

</style>
