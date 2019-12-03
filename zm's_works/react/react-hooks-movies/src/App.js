import React, { useMemo, useState, useCallback, useEffect } from 'react';
import './App.css';

let set1 = new Set()
let set2 = new Set()

// 包装地狱 wrapper hell
// class App extends React.Component {}
// react-XXX(reactRouter(connect(App)))
// use
function App() {
  // state = { count: 0 }
  let [count, setCount] = useState(0)
  const [time, setTime] = useState(0)

  // 依据count来更改缓存数据
  const calculate = useMemo(() =>count + ',' + time, [count])
  // 依据count来更改缓存回调方法
  const fn1 = useCallback(() => count + ',' + time, [count])
  const fn2 = useCallback(() => count + ',' + time, [time])
  set1.add(fn1)
  set2.add(fn2)
  
  // 模拟生命周期
  useEffect(() => {
    console.log(123)
    return () => {
      // unMount 卸载
      // 每次组件重新渲染 都会 执行卸载流程
      console.log('卸载')
    }
  })
  return (
    <div>
      <div>time: {time}</div>
      <div>count: {count}</div>
      <div>calculate: {calculate}</div>
      <div>{set1.size} vs {set2.size}</div>
      <button onClick={() => {
        setCount(++count)
      }}>count ++</button>
      <button onClick={() => {
        setTime(Date.now())
      }}>time change</button>
    </div>
  )
}

export default App;
