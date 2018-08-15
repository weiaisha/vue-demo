<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
     <div class="tab-item">
       <router-link :to="{ name: 'goods', params: { goodsId: 111 }}">商品</router-link></div>
     <div class="tab-item">
       <router-link :to="{ name: 'ratings', params: { ratingsId: 111 }}">评论</router-link></div>
     <div class="tab-item">
       <router-link :to="{ name: 'seller', params: { sellerId: 111 }}">商家</router-link></div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import header from './components/header/header'
export default {
  components: {
    'v-header': header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  .tab
    display :flex
    width :100%
    height :40px
    line-height :40px
    .tab-item
      flex :1
      text-align :center
</style>
