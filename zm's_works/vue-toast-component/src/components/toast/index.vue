<template>
  <div class="toast" v-show="visiable">
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    msg: {
      type: String,
      required: true
    },
    visiable: {
      type: Boolean
    }
  }
}
</script>

<style scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  background: rgba(0, 0, 0, 0.35);
  padding: 10px;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  color: #fff;
}
.toast-msg {
  text-align: center;
}
</style>
