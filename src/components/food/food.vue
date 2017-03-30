<template>
  <transition name="move">
    <div class="food" v-show="showFlag" ref="food">
      <div class="food-content">
        <div class="image-header">
          <img :src="food.image" alt="">
          <div class="back" @click="hide">
            <i class="icon-arrow_lift"></i>
          </div>
        </div>
        <div class="content">
          <div class="title">{{food.name}}</div>
          <div class="detail">
            <span class="sell-count">月售{{food.sellCount}}</span>
            <span class="rating">好评率{{food.rating}}</span>
          </div>
          <div class="price">
            <span class="new">¥{{food.price}}</span><span class="old" v-show="food.oldPrice"> ¥{{food.oldPrice}}</span>

          </div>
          <div class="cartcontrolwrapper">
            <cartcontrol :food="food"></cartcontrol>
          </div>
          <transition name="food">
            <div class="buy" v-show="!food.count || food.count ===0" @click.stop.prevent="addFrist($event)">
              加入购物车

            </div>
          </transition>
        </div>
        <split></split>
        <div class="info">
          <div class="title" v-show="food.info">商品信息</div>
          <p class="text" v-show="food.info">{{food.info}}</p>
        </div>
        <split></split>
        <div class="rating">
          <h1 class="title">商品评价</h1>
          <ratingsselect :select-type="selectType" :only-content="onlyContent" :desc="desc"
                         :ratings="food.ratings"></ratingsselect>
          <h1>1</h1>
          <h1>2</h1>
          <h1>3</h1>
          <h1>4</h1>
          <h1>5</h1>
          <h1>6</h1>
          <h1>7</h1>
          <h1>8</h1>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';
  import ratingsselect from 'components/ratingsselect/ratingsselect';
  import BScroll from 'better-scroll';
  import cartcontrol from 'components/cartcontrol/cartcontrol';
  import split from 'components/split/split';

  // const POISITIVE = 0;
  // const NEGATIVE = 1;
  const ALL = 2;

  export default {
    props: {
      food: {
        type: Object
      }
    },
    data() {
      return {
        showFlag: false,
        selectType: ALL,
        onlyContent: false,
        desc: {
          all: '全部',
          positive: '推荐',
          negative: '吐槽'
        }
      };
    },
    methods: {
      show() {
        this.showFlag = true;
        this.selectType = ALL;
        this.onlyContent = false;
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.food, {
              click: true
            });
          } else {
            this.scroll.refresh();
          }
        });
      },
      hide() {
        this.showFlag = false;
      },
      addFrist(event) {
        if (!event._constructed) {
          return;
        }
        // this.$dispatch('cart.add', event.target);
        Vue.set(this.food, 'count', 1);
      }
    },
    computed: {},
    components: {
      cartcontrol,
      split,
      ratingsselect
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "food.styl";
</style>
