const expression = '{{}}{}{}';
const experssionFalse = '{}{{}'

function isBalanced(exp) {
  // 数组用于实现栈或队列是最便宜的,
  let info = exp.split(''),
      stack = [] // push pop
  console.log(info)

  for (let i = 0; i < info.length; i++) {
    const el = info[i];
    if (el == '{') {
      stack.push(el)
    } else if (el == '}') {
      if (stack.length === 0) {
        return false
      }
      stack.pop()
    }
  }
  return stack.length === 0
}

console.log(isBalanced(experssionFalse))