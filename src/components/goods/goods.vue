<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="item in goods" class="menu-item ">
          <span class="text border-1px">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>
            {{item.name}}</span>
        </li>
      </ul>

    </div>
    <div class="foods-wrapper"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  const ERROK = 0;
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        goods: []
      };
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
      var _this = this;
      _this.$http.get('/api/goods')
        .then(function (response) {
          if (response.data.errno === ERROK) {
            _this.goods = response.data.data;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "goods.styl";
</style>
