<template>
  <div class="hello">
    <my-dialog />
    <my-loading />
  </div>
</template>

<script>
import MyDialog from './MyDialog.vue';
import MyLoading from './MyLoading.vue';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    'my-dialog': MyDialog,
    'my-loading': MyLoading
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
