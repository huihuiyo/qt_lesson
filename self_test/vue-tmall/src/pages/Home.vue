<template>
  <div class="home">
    <TopImage />
    <LoginBar />
    <TmallHeader />
    <TmallContent />
  </div>
</template>

<script>
import TopImage from '../components/home_page/top_image.vue';
import LoginBar from '../components/home_page/login_bar.vue';
import TmallHeader from '../components/home_page/header.vue';
import TmallContent from '../components/home_page/content.vue';
export default {
  name: 'home',
  components: {
    TopImage,
    LoginBar,
    TmallHeader,
    TmallContent
  }
}
</script>

