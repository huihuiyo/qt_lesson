import React, { useState } from 'react';
import './App.css';
import Drag from './Drag1'
import withDragAble from './withDragAble'
import useDrag from './useDragAble'

// hooks
// react15 function 组件没有 state this 没有 生命周期
// 只负责 单纯接收 props 渲染

// react16
// hooks 作用：组件直接逻辑复用，相比hoc解决哪些问题
// 让 逻辑 扁平化了
// Promise -> async

function Header() {
  return (
    <h2>
      h2
    </h2>
  )
}
function Footer() {
  // state hooks
  const [ count, setCount ] = useState(0);
  const { style, handleDown } = useDrag();
  return (
    <div style={style} onMouseDown={handleDown} className="drag">
      foot: { count }
      <button onClick={() => {
        let count1 = count + 1
        setCount(count1)
      }}> + </button>
    </div>
  )
}
const DragH2 = withDragAble(Header)
function App() {
  return (
    <div className="App">
      <Drag />
      <DragH2 />
      <Footer />
    </div>
  );
}

export default App;
