<script>
export default {
  render(h) {
    let obj = h(
      'div',
      { },
      'render函数'
    )
    console.log(obj)
    return obj
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.el-row {
  width: 100%;
}
</style>
