const code = `
<template>
<div>
  <input v-model="message" />
  {{message}}
</div>
</template>

<script>
export default {
data () {
  return {
    message: ''
  }
}
}
</script>

<style scoped>

</style>
`

export default code