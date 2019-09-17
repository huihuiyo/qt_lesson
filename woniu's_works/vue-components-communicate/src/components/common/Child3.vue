<template>
  <div>
    <div@click="change">{{msg}}</div>
    <div class="display">{{c3msg}}</div>
  </div>
</template>

<script>
import bus from '@/bus/index.js'
export default {
  name: 'child3',
  data () {
    return {
      msg: '点击改变数据',
      c3msg: ''
    }
  },
  methods: {
    change () {
      this.$emit('change', this.msg)
    }
  },
  created() {
    // 两种方法  注意使用完后销毁$on -> 第33行代码
    // bus.$on('toChild3', (e) => {
    //   this.c3msg = e
    // })
    this.$bus.$on('toChild3', (e) => {
      this.c3msg = e
    })
  },
  beforeDestroy() {
    delete this.$bus.$off('toChild3')
  }
}
</script>

<style scoped>

</style>
