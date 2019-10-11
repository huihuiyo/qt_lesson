let mixin = {
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    openFn() {
      this.dialogVisible = true
    },
    closeFn() {
      this.dialogVisible = false
    }
  }
}

export default mixin;