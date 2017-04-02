<template>
  <div class="rating-wrapper">
    <ul v-show="food.ratings && food.ratings.length">

      <li v-show="needShow(rating.rateType,rating.text)" v-for="rating in food.ratings" class="ratings-item">
        <div class="user">
          <div class="avator">
            <span class="username">{{rating.username}}</span>
            <img class="avator" :src="rating.avatar" width="12" height="12"></img>
          </div>

        </div>
        <span class="time">{{rating.rateTime | formatDate}}</span>
        <p class="text">
          <span
            :class="{'icon-thumb_up':rating.rateType===0,'icon-thumb_down':rating.rateType===1}">{{rating.text}}</span>
        </p>
      </li>
    </ul>
    <div class="no-rating" v-show="!food.ratings || !food.ratings.length">
      <span>没有任何评论</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  // const POISITIVE = 0;
  // const NEGATIVE = 1;
  import {formatDate} from 'common/js/date' ;
  const ALL = 2;
  export default {
    props: {
      food: {
        type: Object,
        default() {
          return {};
        }
      },
      onlyContent: {
        type: Boolean
      },
      selectType: {
        type: Number
      }
    },
    methods: {
      needShow(type, text) {
        if (this.onlyContent && !text) {
          return false;
        }
        ;
        if (this.selectType === ALL) {
          return true;
        } else {
          return type === this.selectType;
        }
      }
    },
    filters: {
      formatDate(time) {
        let date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm');
      }
    },
    components: {}
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "foodratingscontent.styl";
</style>
