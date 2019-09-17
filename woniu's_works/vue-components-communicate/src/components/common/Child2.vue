<template>
  <div class="child2">
    <p @click="emit">{{msg}}</p>
    <p @click="emitOther">{{msg1}}</p>
    <p @click="send">send</p>
  </div>
</template>

<script>
import bus from '@/bus/index.js'
export default {
  name: 'demo',
  data () {
    return {
      msg: '女主人派发的事件',
      msg1: '女主人又派发的事件',
      toChild3: 'child2给child3的msg'
    }
  },
  methods: {
    emit () {
      this.$emit('wash_clothes', ['baby\'s', 'man\'s'])
    },
    emitOther () {
      this.$emit('wash_floor', 'good')
    },
    send () {
      // 两种方法
      // bus.$emit('toChild3', this.toChild3)
      this.$bus.$emit('toChild3', this.toChild3)
    }
  },
  created() {
    this.$on(['wash_clothes', 'wash_floor'], (arg) => {
      console.log(arg)
    })
    // this.$on('wash_clothes', (arg) => {
    //   console.log(`男主洗了${arg}衣服`)
    // }),
    // this.$on('wash_floor', (arg) => {
    //   console.log(`男主拖地去了`)
    // })
  }
}
</script>

<style scoped>

</style>
