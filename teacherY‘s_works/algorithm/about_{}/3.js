const expression = '{{[]}}{}{}'
const experssionFalse = '{}{{}'

const isBalanced = (str) => {
  // [{()}]
  // es6 新的数据结构 hashmap 映射
  const map = new Map([
    ['{', '}'],
    ['[', ']'],
    ['(', ')']
  ])
  // console.log(map.get('{'))
  // for (let [key, val] of map) {
  //   console.log(key, val)
  // }
  let stack = []
  for (var i = 0; i < str.length; i++) {
    let node = str[i];
    // 入栈
    // 出栈
    if (map.has(node)) {
      stack.push(node)
    } else if ([...(map.values())].includes(node)) {
      // 右边的，values之中的一个，跟栈顶的元素匹配
      // key value 反找key
      let key = stack[stack.length - 1]
      if(map.get(key) !== node) {
        return false
      }
      stack.splice(stack.length - 1, 1)
    }
  }
  // map.set
  return stack.length === 0
}

console.log(isBalanced(expression))