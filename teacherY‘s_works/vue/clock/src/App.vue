<template>
  <div id="app">
    <Second :second='second'/>
    <Minute />
    <Hour />
    <Apm />
    <Week />
    <Day />
    <Month />
  </div>
</template>

<script>
// @ src/ alias 短连接
import Second from './components/Second'
import Minute from './components/Minute'
import Hour from './components/Hour'
import Apm from './components/Apm'
import Week from './components/Week'
import Day from './components/Day'
import Month from './components/Month'

export default {
  name: 'App',
  data() {
    return {
      second: ''
    }
  },
  components: {
    Second: Second,
    Minute: Minute,
    Hour: Hour,
    Apm: Apm,
    Week: Week,
    Day: Day,
    Month: Month
  },
  methods: {
    start () {
    setInterval(() => {
      let date = new Date();
      this.second = date.getSeconds();
    }, 1000);
  },
  },
  created() {
    this.start();
  },
}
</script>

<style>
</style>
