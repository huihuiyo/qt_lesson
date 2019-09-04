<template>
  <div class="main-content">
    <!-- 头部header -->
    <Header></Header>
  </div>
</template>

<style scoped>

</style>

<script>
import Header from '@/common/Header'
export default {
  name: 'mainContent',
  data () {
    return {
    }
  },
  components: {
    Header: Header
  }
}
</script>
