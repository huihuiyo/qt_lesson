import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { 
  HeaderWrapper,
  Nav,
  NavItem,
  Addition,
  Logo, Button,
  SearchWrapper,
  NavSearch
} from './style';
import * as actionCreators from './store/actionCreate';
class Header extends Component {
  state = {}
  render() {
    const { focus } = this.props;
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>

          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
            timeout={200}
            in={focus}
            classNames="slide"
            >
              <NavSearch
              onFocus={() => {
                this.props.handFocus(true)
              }}
              onBlur={() => {
                this.props.handFocus(false)
              }}
              />
            </CSSTransition>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to='/write'>
            <Button className='writting'>
              <i className="iconfont">&#xe615;</i>
              写文章
						</Button>
          </Link>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    focus: state.getIn(['header', 'focus'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handFocus(opt) {
      dispatch(actionCreators.searchFocus(opt))
    }
  }
}
export default  connect(mapStateToProps,
   mapDispatchToProps)(Header);