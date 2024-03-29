import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const __import__ = file => () => import(`@/pages/${file}.vue`)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: __import__('Home'),
      meta: {
        title: '在线做实验，高效学编程 - 实验楼'
      }
    },
    {
      path: '/user/:id',
      name: 'user',
      component: __import__('user/user'),
      meta: {
        title: '实验楼'
      }
    }
  ]
})
