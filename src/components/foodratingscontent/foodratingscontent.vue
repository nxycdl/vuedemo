<template>
  <div class="rating-wrapper">
    <ul v-show="food.ratings && food.ratings.length">

      <li v-for="rating in food.ratings" class="ratings-item">
        <div class="user">
          <div class="avator">
            <span class="username">{{rating.username}}</span>
            <img class="avator":src="rating.avatar" width="12" height="12"></img>
          </div>

        </div>
        <span class="time">{{rating.rateTime}}</span>
        <p class="text">
          <span :class="{'icon-thumb_up':rating.rateType===0,'icon-thumb_up':rating.rateType===0}">{{rating.text}}</span>
        </p>
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
    components: {}
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "foodratingscontent.styl";
</style>
