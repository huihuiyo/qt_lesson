import React from 'react';
import logo from './logo.svg';
import './App.css';

class DynamicFidle extends React.Component {
  
}
class App extends React.Component {
  render() {
    return (
      <div>
        <label for='date'>
          日期
        </label>
        <input type='date' id='date'></input>

        <label for='text'>
          外快
        </label>
        <input type='text'></input>

        <label for='text'>
          姓名
        </label>
        <input type='text'></input>
      </div>
    )
  }
}

export default App;
