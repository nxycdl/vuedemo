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
          <div class="title" v-show="food.info">商户信息</div>
          <p class="text" v-show="food.info">{{food.info}}</p>
        </div>

      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import cartcontrol from 'components/cartcontrol/cartcontrol';
  import split from 'components/split/split';
  import Vue from 'vue';
  export default {
    props: {
      food: {
        type: Object
      }
    },
    data() {
      return {
        showFlag: false
      };
    },
    methods: {
      show() {
        console.log(this.food);
        this.showFlag = true;
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
      split
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "food.styl";
</style>
