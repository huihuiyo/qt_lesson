import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from "./style";
import * as actionCreators from "./store/actionCreate";

class Login extends Component {
  userName = ''
  password = ''
  state = {  }
  render() { 
    return (
      <LoginWrapper>
        <LoginBox>
          <Input placeholder="账号" ref={this.userName} />
          <Input placeholder="密码" type="password" ref={this.password} />
          <Button onClick={() => {
            // 非受控组件取值
            // console.log(this.userName.current.value)
            this.props.login(true)
          }}>登录</Button>
        </LoginBox>
      </LoginWrapper>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    login(opt) {
      dispatch(actionCreators.changeLoginStatus(opt))
    }
  }
}
export default connect(null, mapDispatchToProps)(Login);