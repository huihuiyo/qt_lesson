import React from 'react';
import './App.css';
import Toast from './Toast';

class App extends React.Component {
  state = {
    flag: false
  }
  render() {
    return (
      <div>
        <button onClick={() => {
          Toast.addNotice('info', 'content 111', 2000)
        }}>open</button>
      </div>
    )
  }
}

export default App;
