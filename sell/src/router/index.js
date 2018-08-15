import Vue from 'vue'
import Router from 'vue-router'
import goods from '../components/goods/goods.vue'
import ratings from '../components/ratings/ratings.vue'
import seller from '../components/seller/seller.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goods/:goodsId',
      name: 'goods',
      component: goods
    },
    {
      path: '/ratings/:ratingsId',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/seller/:sellerId',
      name: 'seller',
      component: seller
    }
  ]
})
