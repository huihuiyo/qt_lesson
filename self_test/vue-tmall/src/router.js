import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const __import__ = file => () => import(`./pages/${file}.vue`)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: __import__('Home')
    }
  ]
})
