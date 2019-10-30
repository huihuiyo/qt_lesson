import React from 'react';
import logo from './logo.svg';
import './App.css';

// function 组件
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// 命令式 react会自动展开数组
var arr1 = [1, 2, 3];
var arr2 = [];
for (let i of arr1) {
  arr2.push(2 * i);
}
// 声明式
var arr3 = arr1.map(i => i * 2);

var Text = <><p>这是一段文字</p><p>这是二段文字</p></>

//  class 类组件
class Button extends React.Component {
  // jsx == 一段 html
  // <></> -> <React.Fragment></React.Fragment>
  render() {
    return (
      <>
        <button>
          {
            true ? (<span> 已登录 </span>) : (<span> 未登录 </span>)
          }
        </button>
        <div>
          { arr3 }
          {
            arr3.map(num => {
              return (
                <li>{num}</li>
              )
            })
          }
          { Text }
          <Child />
        </div>
      </>
    )
  }
}
class Child extends React.Component {
  render() {
    return (
      <p>我是Child-Class</p>
    )
  }
}
export default Button;
