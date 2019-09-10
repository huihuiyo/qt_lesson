function justice(num) {
  var len = num.toString().length
  return num.toString().split('').reduce((pre, next, index) => {
    if (index === 1) {
      pre = Math.pow(pre, len)
    }
    return pre + Math.pow(next, len)
  }) === num
}

console.log(justice(153))