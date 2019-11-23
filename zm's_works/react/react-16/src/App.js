import React from 'react';
import './App.css';
import immutable from 'immutable'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import ColorRedWrapper from './RedColor'

// 可变
let a = [0, 1, 2]
a.push(3)
// 不可变
let immutableArr = immutable.fromJS(
  [2, 3, 4]
)
immutableArr.push(5)
console.log(immutableArr.toJS()) // [2, 3, 4]

let b = immutableArr.push(5)
console.log(b.toJS()) // [2, 3, 4, 5]

let obj = {
  a: 1,
  b: {
    c: 2
  },
  d: {
    e: 3
  }
}
let imObj = immutable.fromJS(obj)
console.log(imObj.getIn(['b', 'c'], 'default'))
let imObj1 = imObj.setIn(['d', 'e'], 'ee')
console.log(imObj1.getIn(['d', 'e'], 'default'))
let obj1 = {
  ...obj,
  b: 2
}

class App extends React.Component {
  state = {
    store: imObj
  }
  handleSet = () => {
    let store = this.state.store.setIn(['d', 'e'], '456')
    this.setState({ store })
  }
  render() {
    const store = this.state.store
    return (
      <div>
        {/* ccs in js */}
        <ColorRedWrapper>
          <p>123</p>
          <div>456</div>
        </ColorRedWrapper>

        <button onClick={this.handleSet}>set d</button>
        <Header value={store.get('a')} />
        <Main value={store.get('b')} />
        <Footer value={store.get('d')} />
      </div>
    );
  }
}

export default App;
