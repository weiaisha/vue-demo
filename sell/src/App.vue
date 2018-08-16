<template>
  <div id="app">
    <v-header :seller='seller'></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link :to="{ name: 'goods', params: { goodsId: 111 }}">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{ name: 'ratings', params: { ratingsId: 111 }}">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{ name: 'seller', params: { sellerId: 111 }}">商家</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import header from './components/header/header'

const ERR_OK = 0

export default {
  data () {
    return {
      seller: {}
    }
  },
  created () {
    this.$http.get('/api/seller').then(response => {
      var Response = response.body
      if (Response.code === ERR_OK) {
        this.seller = Response.data
        console.log(this.seller)
      }
    })
  },
  components: {
    'v-header': header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import './common/stylus/mixin';

#app {
  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;

    .tab-item {
      flex: 1;
      text-align: center;
      // border-bottom :1px rgba(7,17,27,0.1)solid
      border-1px(rgba(7, 17, 27, 0.1));

      & > a {
        display: block;
        font-size: 14px;
        color: rgb(77, 85, 93);

        &.active {
          color: rgb(240, 20, 20);
        }
      }
    }
  }
}
</style>
