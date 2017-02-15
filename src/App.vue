<template>
    <div>
        <v-header v-bind:seller="seller"></v-header>
        <div class="tab border-1px">
            <div class="tab-item">
                <router-link to="/goods">商品</router-link >
            </div>
            <div class="tab-item">
                <router-link to="/ratings">评论</router-link >
            </div>
            <div class="tab-item">
                <router-link to="/seller">商家</router-link >
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    import header from './components/header/header.vue';

    const ERROK = 0;
    export default {
      data() {
        return {
          seller: {}
        };
      },
      created() {
        var _this = this;
        _this.$http.get('/api/seller')
        .then(function (response) {
          if (response.data.errno === ERROK) {
            _this.seller = response.data.data;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      components: {
        'v-header': header
      }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"

  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    // border-bottom: 1px solid rgba(7,12,27,0.1)
    border-1px(rgba(7,12,27,0.1))
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: 14px
        color: rgb(77, 85, 99)
        &.active
          color: rgb(240,20,20)

</style>
