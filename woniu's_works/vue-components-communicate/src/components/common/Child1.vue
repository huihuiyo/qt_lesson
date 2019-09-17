<template>
  <div id="child1">
    {{msg}}
    <button @click="fn">按钮</button>
    <p>----------------</p>
    {{a}}
    {{b}}
    <p>--------运用emit--------</p>
    <button @click="add1">+</button>
    {{count}}
    <p>--------传func--------</p>
    <button @click="add">+</button>
    {{count}}
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: ['msg', 'fn', 'a', 'b', 'count', 'add'],
  methods: {
    add1 () {
      this.$emit('add')
    }
  }
}
</script>

<style scoped>

</style>
