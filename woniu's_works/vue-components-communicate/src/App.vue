<template>
  <div id="app">
    <router-view/>
    <!-- <Child1
      :msg='[msg,msg2]'
      :fn='appFun'
      v-bind='text'
      :count='count'
      :add='addCount'
      @add='addCount'
    >
    </Child1>
    <p>---------------</p>
    <Child2></Child2>
    <p>---------------</p>
    <Child3 @change='change'></Child3>
    <span>{{message}}</span> -->
  </div>
</template>

<script>
import Child1 from '@/components/common/child1'
import Child2 from '@/components/common/child2'
import Child3 from '@/components/common/child3'
export default {
  name: 'App',
  data() {
    return {
      msg: '给child1的礼物',
      msg2: '再次给child1的礼物',
      text: {
        a: 1,
        b: 2
      },
      count: 1,
      message: '父组件默认的数据'
    }
  },
  components: {
    Child1: Child1,
    Child2: Child2,
    Child3: Child3
  },
  methods: {
    appFun () {
      console.log('我是App.vue里面的方法')
    },
    addCount () {
      this.count++
    },
    change (arg) {
      this.message = arg
    }
  }
}
</script>

<style>
</style>
