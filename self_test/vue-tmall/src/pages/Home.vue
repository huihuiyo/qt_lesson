<template>
  <div class="home">
    <TopImage />
    <LoginBar />
    <TmallHeader />
  </div>
</template>

<script>
import TopImage from '../components/home_page/top_image.vue';
import LoginBar from '../components/home_page/login_bar.vue';
import TmallHeader from '../components/home_page/header.vue';
export default {
  name: 'home',
  components: {
    TopImage,
    LoginBar,
    TmallHeader
  }
}
</script>
