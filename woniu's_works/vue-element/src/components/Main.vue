<template>
  <div class="main-content">
    <!-- 头部header -->
    <Header></Header>
    <Slide></Slide>
    <div class="content">
      <transition name="move" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.content {
  padding-left: 200px;
}
</style>

<script>
import Header from '@/common/Header'
import Slide from '@/common/Slide'
export default {
  name: 'mainContent',
  data () {
    return {
    }
  },
  components: {
    Header: Header,
    Slide: Slide
  }
}
</script>
