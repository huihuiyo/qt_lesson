import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/register',
    component: () => import('../components/Register.vue')
  },
  {
    path: '/me',
    component: () => import('../components/Me.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
