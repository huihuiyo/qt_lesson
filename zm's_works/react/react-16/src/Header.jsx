import React, { Component } from 'react';
import BaseCom from './BaseComponent'

class Header extends BaseCom {
  state = {  }
  render() {
    window.c ++;
    return (
      <div>
        { this.props.value }
      </div>
    );
  }
}
 
export default Header;