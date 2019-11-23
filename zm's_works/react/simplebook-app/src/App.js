import React from 'react';
// 1. h5:history api   2. hash change
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import BaseComponent from './lib/BaseComponent'
import Home from './pages/home/index'
import store from './store'
import './App.css';

class App extends BaseComponent {
  render () {
    return (
      <Provider store={store}>
        {/* BrowserRouter 保存了全局的路由信息 */}
        <BrowserRouter>
          <div>
            header
            <Route exact path="/" component={Home} />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
