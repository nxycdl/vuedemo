<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="item in goods" class="menu-item ">
          <span class="text border-1px">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>
            {{item.name}}</span>
        </li>
      </ul>

    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li v-for="item in goods" class="food-list">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item">
              <div class="icon">
                <img width="57px" :src="food.icon" alt=""/>
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月销{{food.sellCount}}份</span>
                  <span class="rating">好评度{{food.rating}}%</span>

                </div>
                <div class="price">
                  <span class="new">{{food.price}}</span>
                  <span class="old"v-show="food.oldPrice"> {{food.oldPrice}}</span>
                </div>
              </div>

            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  import BScroll from 'better-scroll';
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
            _this.$nextTick(function() {
              _this._initScroll();
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    methods: {
      _initScroll() {
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {});
        this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {});
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "goods.styl";
</style>
