import React, { Component } from 'react'
import WithLogin from './WithLogin'

class OrderList extends Component {
  render() {
    return (
      <ul>
        <li>Ipad</li>
        <li>MAC</li>
      </ul>
    )
  }
}

export default WithLogin(OrderList)