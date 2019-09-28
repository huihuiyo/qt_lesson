<template>
  <div>
    <MyChild />
  </div>
</template>

<script>
import MyChild from './child'
export default {
  data () {
    return {

    }
  },
  components: {
    MyChild
  },
  provide () {
    return {
      theme: 'red'
    }
  }
}
</script>

<style scoped>

</style>
