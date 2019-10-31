var strArr = ['nH']
while(strArr.length) {
  var arr = strArr[strArr.length - 1].split(' ')
  var ret = ''
  for (let index = arr.length - 1; index >= 0; index--) {
    if (index === 0) {
      ret += arr[index]
      break
    }
    ret += (arr[index] + ' ')
  }
  console.log(ret)
  strArr.pop()
}