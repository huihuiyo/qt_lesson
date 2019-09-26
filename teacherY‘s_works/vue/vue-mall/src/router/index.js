import Vue from 'vue'
import Router from 'vue-router'
// import search from '../pages/search/search'
// import shopcart from '../pages/shopcart/shopcart'
// import order from '../pages/order/order'
// import user from '../pages/user/user'
// import register from '../pages/register/register'
// import login from '../pages/login/login'
// import shipping from '../pages/shipping/shipping'
// import payment from '../pages/payment/payment'
// import productDetail from '../pages/product/productDetail'
// import profile from '../pages/profile/profile'
// import forgetPassword from '../pages/forgetPassword/forgetPassword'
// import updateInfo from '../pages/updateInfo/updateInfo'

//路由的懒加载
const home = r => require.ensure([], () => r(require('@/pages/home/home')), 'home');
const category = r => require.ensure([], () => r(require('@/pages/category/category')), 'category')
Vue.use(Router)



export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      meta: {
        index: 1
      },
      component: home
    },
    // {
    //   path: '/search',
    //   component: search
    // },
    {
      path: '/category',
      meta: {
        index: 2
      },
      component: category
    },
    // {
    //   path: '/shopcart',
    //   component: shopcart
    // },
    // {
    //   path: '/order',
    //   component: order
    // },
    // {
    //   path: '/user',
    //   component: user
    // },
    // {
    //   path: '/register',
    //   component: register
    // },
    // {
    //   path: '/login',
    //   component: login
    // },
    // {
    //   path: '/shipping',
    //   component: shipping
    // },
    // {
    //   path: '/payment',
    //   component: payment
    // },
    // {
    //   path: '/product/:id',
    //   component: productDetail
    // },
    // {
    //   path: '/profile',
    //   component: profile
    // },
    // {
    //   path: '/forget-password',
    //   component: forgetPassword
    // },
    // {
    //   path: '/update-info',
    //   component: updateInfo
    // }
  ]
})
