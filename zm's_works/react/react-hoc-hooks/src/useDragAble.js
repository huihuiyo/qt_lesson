import {useState} from 'react';

// hooks
// 自定义 hooks
export default function useDragAble() {
  let startx = 0, starty = 0;
  let [ left, setLeft ] = useState(startx);
  let [ top, setTop ] = useState(starty);

  const handleMove = function(e) {
    let left = e.clientX
    let top = e.clientY
    setLeft(left) // left.value
    setTop(top) // top.value
  }
  const handleUp = function() {
    document.removeEventListener('mousemove', handleMove)
  }
  const handleDown = function() {
    document.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseup', handleUp)
  }
  return {
    style: {
      left,
      top
    },
    handleDown
  }
}