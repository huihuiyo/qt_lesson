import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import UserManage from '@/content/UserManage'
import UserLists from '@/content/UserLists'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/main/user-manage',
          name: 'UserManage',
          component: UserManage
        },
        {
          path: '/main/user-lists',
          name: 'UserLists',
          component: UserLists
        }
      ]
    }
  ]
})
