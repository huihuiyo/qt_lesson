const expression = '{{[]}}{}{}';
const experssionFalse = '{}{{}'

// JS  正则
function isBalanced(exp) {
  const reg = /({})|\[\]|(\(\))/g
  let len
  do {
    console.log(exp)
    len = exp.length
    exp = exp.replace(reg, '')
  } while (len != exp.length)
  
  return exp.length === 0
}
console.log(isBalanced(expression))