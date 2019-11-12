import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

let key = 0
class Toast extends Component {
  state = {
    toastList: []
  }
  addNotice(icon, content, duration) {
    key++
    const item = { key, icon, content, duration }
    let toastList = this.state.toastList.slice(0)
    toastList.push(item)
    this.setState({
      toastList
    })
    setTimeout(() => {
      let _toastList = this.state.toastList.slice(0)
      let index = _toastList.findIndex(item => item.key === key)
      _toastList.splice(index, 1)
      this.setState({
        toastList: _toastList
      })
    }, duration)
  }
  render() {
    const { toastList } = this.state;
    return (
      <TransitionGroup>
        {
          toastList.map((toast) => {
            return (
              // <Notice {...toast}>
              // </Notice>
              <CSSTransition
              key={toast.key}
              classNames='notice'
              timeout={300}>
                <li key={toast.key}>{toast.icon} : {toast.content}</li>
              </CSSTransition>
            )
          })
        }
      </TransitionGroup>
    )
  }
}

let instance = null
export default {
  addNotice: function(icon, content, duration) {
    // ref
    if (instance) {
      return instance.addNotice(
        icon,
        content,
        duration
      )
    }
    let div = document.createElement('div')
    document.body.appendChild(div)
    let objRef = React.createRef()
    // 获取组件的实例
    ReactDom.render(<Toast ref={objRef} />, div)
    instance = objRef.current
    return objRef.current.addNotice(icon, content, duration)
  }
};