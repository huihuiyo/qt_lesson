import React, { Component } from 'react'
import { Pagination, Spin } from 'antd';
import { Link } from 'react-router-dom'
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
      this.setState({
        list: res.data,
        isLoading: false
      })
    })
  }
  handleChangeTab = (key) => {
    // onClick
    // 高阶组件 复用 共同逻辑
    return (e) => {
      // setState 是异步的
      // 事务
      // react setState借鉴了这个概念
      // Promise.all()
      this.setState({
        tab: key
      }, () => {
        this.handleRequestList()
      })
    }
  }
  onChange = page => {
    console.log(page);
    this.setState({
      current: page,
    }, () => {
      this.handleRequestList()
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
            list.data && list.data.map((dis, i) => {
              return (
                <Link to={`/topic/${dis.id}`} key={`dis${i}`}>
                  <li key={`dis${i}`}>
                    <img src={dis.author.avatar_url} alt=""/>
                    <span>{dis.author.loginname}</span>
                    <h2>{dis.title}</h2>
                  </li>
                </Link>
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