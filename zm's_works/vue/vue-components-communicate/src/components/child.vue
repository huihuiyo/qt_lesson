<template>
  <div>
    <MySubChild />
  </div>
</template>

<script>
import MySubChild from './subChild'
export default {
  data () {
    return {

    }
  },
  components: {
    MySubChild
  },
  provide: {

  }
}
</script>

<style scoped>

</style>
