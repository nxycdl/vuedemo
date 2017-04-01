<template>
  <div class="rating-wrapper">
    <ul v-show="food.ratings && food.ratings.length">

      <li v-for="rating in food.ratings" class="ratings-item">
        <div class="avator">
          <img :src="rating.avatar" alt="" width="30px">
        </div>
        <div class="content">
          <div class="info">
            <span class="name">{{rating.username}}</span>
            <span class="time">{{rating.rateTime}}</span>
          </div>
          <div class="start">
            <span>*****</span>
          </div>
          <div class="contentinfo">
            <span>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx111111111111111dddd111111111111111111111xxxxxxxx</span>
          </div>
          <div class="foot">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
        </div>
      </li>
    </ul>
    <div class="no-rating" v-show="!food.ratings || !food.ratings.length">
      <span>没有任何评论</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      food: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    components: {
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "ratingscontent.styl";
</style>
