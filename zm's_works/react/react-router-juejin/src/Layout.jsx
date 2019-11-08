import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
let isLogin = false

class PrivateRouter extends Component {
  render() {
    const props = this.props
    return (
      <div>
        {
          isLogin ? <Route {...props} /> : null
        }
      </div>
    )
  }
}
function Guanzhu() {
  return (
    <dir>关注</dir>
  )
}
function Fe() {
  return (
    <dir>前端</dir>
  )
}
function Rd() {
  return (
    <dir>后端</dir>
  )
}
function PriCom() {
  return (
    <dir>PriCom</dir>
  )
}
function Home() {
  return (
    <div>Home
      <div>
        <Link to='/home'>首页</Link>
        <Link to='/home/guanzhu'>关注</Link>
        <Link to='/home/fe'>前端</Link>
        <Link to='/home/rd'>后端</Link>
        <Link to='/home/privateRouter'>私密链接</Link>
      </div>
      <div className="main">
        <Route path='/home/guanzhu' component={Guanzhu}></Route>
        <Route path='/home/fe' component={Fe}></Route>
        <Route path='/home/rd' component={Rd}></Route>
        <PrivateRouter path='/home/privateRouter' component={PriCom}></PrivateRouter>
      </div>
    </div>
  )
}
function Me() {
  return (
    <div>Me</div>
  )
}
class Layout extends Component {
  render() {
    return (
      <div>
        <div className="main">
          <Route path='/home' component={Home}></Route>
          { isLogin && <Route path='/me' component={Me}></Route>}
          
        </div>
        <div className="footer">
          <Link to='/home'>home</Link>
          { isLogin && <Link to='/me'>me</Link>}
        </div>
      </div>
    )
  }
}

export default Layout