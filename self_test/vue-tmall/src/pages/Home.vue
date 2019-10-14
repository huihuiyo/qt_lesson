<template>
  <div class="home">
    <TopImage />
    <LoginBar />
  </div>
</template>

<script>
import TopImage from '../components/home_page/top_image.vue';
import LoginBar from '../components/home_page/login_bar.vue'
export default {
  name: 'home',
  components: {
    TopImage,
    LoginBar
  }
}
</script>
