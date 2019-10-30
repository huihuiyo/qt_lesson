import React, { Component } from 'react';

class Input extends Component {
  // 静态属性
  state = {
    value: ''
  }
  // 箭头函数 this
  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      value
    })
  }
  // 单向数据流
  // input 受控组件 完全受 state.value 的控制
  handleSubmit = () => {
    const { value } = this.state;
    const { onReceive } = this.props;
    onReceive(value)
    console.log(value)
  }
  render() {
    const { value } = this.state;
    return (
      <>
        <input type='text' value={value} onChange={this.handleChange}></input>
        <button onClick={this.handleSubmit}>submit</button>
      </>
    )
  }
}
class CommentList extends Component {
  
  render() {
    const { clist } = this.props;
    return (
      <>
        {
          clist.map((item, index) => {
            return (
              <li key={index}>
                content：{ item.content }
              </li>
            )
          })
        }
      </>
    )
  }
}
class Comment extends Component {
  state = {
    clist: [
      { content: '666' },
      { content: '777' }
    ] // 评论列表
  }
  handleReceiveComm = (value) => {
    console.log('父组件value：', value);
    // 不可变数据 建议全新的数据再上传
    // this.state.clist.push({ content: value })
    let clist = this.state.clist.slice(0)
    clist.push({ content: value })
    this.setState({
      clist
    })
  }
  render() {
    const { clist } = this.state
    return (
      <>
        <Input onReceive={this.handleReceiveComm} />
        <CommentList clist={clist}/>
      </>
    )
  }
}

export default Comment;