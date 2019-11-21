import React from 'react';
import { connect } from 'react-redux'
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div>

      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    shopCart: state.shopCart
  }
}
export default connect(mapStateToProps)(App);
