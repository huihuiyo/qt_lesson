import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LookPage from '@/components/Look'
import LookPage1 from '@/components/Look1'
import LookPage2 from '@/components/Look2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/look',
      name: 'LookPage',
      component: LookPage,
      children: [
        {
          path: '/look/lookpage1',
          name: 'LookPage1',
          component: LookPage1
        },
        {
          path: '/look/lookpage2',
          name: 'LookPage2',
          component: LookPage2
        }
      ]
    },
    {
      path: '/go-back',
      redirect: '/'
    }
  ]
})
