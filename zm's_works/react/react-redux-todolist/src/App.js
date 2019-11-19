import React from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component {
  state = {
    inputText: ''
  }
  handleChange = (e) => {
    this.setState({
      inputText: e.target.value
    })
  }
  render () {
    // console.log(this.props);
    const { todolist } = this.props
    return (
      <div>
        {
          todolist.map((item, i) => {
            return (
              <li key={i}>
                { item.content }
              </li>
            )
          })
        }
        <div>
          <input value={this.state.inputText} onChange={this.handleChange} />
          <button onClick={() => {
            console.log(this.state.inputText)
            this.props.addTodo(this.state.inputText)
          }}>
            提交
          </button>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo(content) {
      dispatch({
        type: 'ADD_TODO',
        content
      })
    }
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    todolist: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
