import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/goods/Goods'
import Rating from '@/components/ratings/Ratings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/ratings',
      name: 'Rating',
      component: Rating
    }
  ]
})
