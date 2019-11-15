import React, { Component } from 'react'
import { Pagination, Spin } from 'antd';

import axios from './axios'

const perSize = 40;
const tabMap = {
  'ask': '问答',
  'job': '招聘',
  'share': '分享',
  'good': '精华',
  'all': '全部'
}
class Home extends Component {
  state = {
    list: [],
    current: 1,
    tab: 'all',
    limit: perSize,
    isLoading: false
  };
  componentDidMount() {
    this.handleRequestList();
  }
  handleRequestList = () => {
    this.setState({
      isLoading: true
    })
    const {tab, limit, current } = this.state
    axios.get(`/topics?tab=${tab}&limit=${limit}&page=${current}`)
    .then((res) => {
      console.log(res.data)
      this.setState({
        list: res.data.data,
        isLoading: false
      })
    })
  }
  handleChangeTab = (key) => {
    // onClick
    return (e) => {
      this.setState({
        tab: key
      })
    }
  }
  onChange = page => {
    console.log(page);
    this.setState({
      current: page,
    });
  };
  render() {
    const { list, tab, isLoading } = this.state
    return (
      <div>
        Home
        <ul>
          {
            Object.keys(tabMap).map(
              (key, i) => {
                return (
                  <li
                    key={`tab${i}`}
                    style={{
                      color: tab === key ? 'red' : '',
                      cursor: 'pointer'
                    }}
                    onClick={this.handleChangeTab(key)}
                  >{tabMap[key]}</li>
                )
              }
            )
          }
        </ul>
        <Spin spinning={isLoading}>
          {
            list && list.map((dis, i) => {
              return (
                <li key={`dis${i}`}>
                  <img src={dis.author.avatar_url} alt=""/>
                  <span>{dis.author.loginname}</span>
                  <h2>{dis.title}</h2>
                </li>
              )
            })
          }
        </Spin>
        <Pagination
          current={this.state.current}
          onChange={this.onChange}
          total={50}
        />
      </div>
    )
  }
}

export default Home