// 纯函数
const defaultList = [
  {
    complete: false,
    content: 'eat'
  }
]
// 生成 默认值
// immutable 不可变数据
// 可变是万恶之源
function todolist (state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          content: action.content,
          complete: false
        }
      ]
    default:
      return defaultList
  }
  
}

export default todolist;