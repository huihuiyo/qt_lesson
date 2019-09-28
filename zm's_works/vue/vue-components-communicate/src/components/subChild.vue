<template>
  <div>
    <h2 :style="{color: theme}">
      hello world!
    </h2>
  </div>
</template>

<script>
export default {
  inject: ['theme']
}
</script>

<style scoped>

</style>
