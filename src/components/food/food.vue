<template>
  <transition name="move">
    <div class="food" v-show="showFlag">
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
        </div>

      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
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
      },
      hide() {
        this.showFlag = false;
      }
    },
    computed: {}
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "food.styl";
</style>
