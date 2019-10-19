<template>
  <div id="chatapp">
    <!-- 容器组件 -->
    <thread-section></thread-section>
    <message-section></message-section>
  </div>
</template>

<script>
import ThreadSection from './components/ThreadSection';
import MessageSection from './components/MessageSection';

export default {
  name: 'ChatApp',
  components: {
    'thread-section': ThreadSection,
    'message-section': MessageSection
  },
  mounted() {
    this.$store.dispatch('getAllMessages');
  }
}
</script>

<style src='./css/chat.css'>

</style>
