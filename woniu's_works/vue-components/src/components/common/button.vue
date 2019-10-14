<template>
  <button :class="'i-button-size' + size" :disabled='disabled' @click="handleClick">按钮</button>
</template>

<script>
// 判断参数是否是其中之一
function oneOf(value, validList) {
  return validList.includes(value)
}
export default {
  data() {
    return {
      msg: '按钮组件的数据'
    }
  },
  props: {
    size: {
      validator (value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick() {
      // this.$emit('on-click', this.msg, event);
      console.log(123)
    }
  }
}
</script>

<style scoped>
button {
  outline: none;
  border-radius: 5px;
}
.i-button-sizelarge {
  padding: 10px;
}
.i-button-sizelarge {
  padding: 8px;
}
.i-button-sizelarge {
  padding: 6px;
}
</style>
