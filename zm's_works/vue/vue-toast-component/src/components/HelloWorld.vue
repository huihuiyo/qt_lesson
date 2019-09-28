<template>
  <div>
    <button @click="diaplay">购买</button>
    <!-- <Toast msg='测试弹窗1' :visiable='visiable' /> -->
  </div>
</template>

<script>
import showMessage from './toast/index.js'
// import Toast from './toast/index'
export default {
  name: 'HelloWorld',
  data () {
    return {
      visiable: false
    }
  },
  methods: {
    diaplay () {
    //   this.visiable = true
    //   let timer
    //   if (timer)
    //     clearTimeout(timer)
    //   timer = setTimeout(() => {
    //     this.visiable = false
    //   }, 3000)
      showMessage('测试弹窗2')
    }
  },
  components: {
    // Toast: Toast
  }
}
</script>

<style scoped>

</style>
