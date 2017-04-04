<template>
  <div class="ratings" ref="ratings">
    <div class="rating-content">
      <div class="ratings-content">
        <div class="overview">
          <div class="overview-left">
            <div class="score">{{seller.score}}</div>
            <div class="title">综合评分</div>
            <div class="rank">高于周边商家{{seller.rankRate}}%</div>
          </div>
          <div class="overview-right">
            <div class="scroe-wrapper">
              <span class="title">服务态度</span>
              <star :size="36" :score="seller.serviceScore"></star>
              <span class="score">{{seller.serviceScore}}</span>
            </div>
            <div class="scroe-wrapper">
              <span class="title">商品评分</span>
              <star :size="36" :score="seller.foodScore"></star>
              <span class="score">{{seller.foodScore}}</span>
            </div>
            <div class="delivery-wrapper">
              <span class="title">送达时间</span>
              <span class="delivery">{{seller.deliveryTime}}</span>
            </div>
          </div>
        </div>
      </div>
      <split></split>
      <ratingsselect :select-type="selectType"
                     :only-content="onlyContent" :desc="desc"
                     :ratings="this.ratings"></ratingsselect>
      <div class="ratings-wrapper">
        <ul>
          <li v-for="rating in ratings" class="rating-item border-1px">

            <div class="avatar">
              <img :src="rating.avatar" width="28px" height="28px"/>
            </div>

            <div class="ratinginfo">
              <div class="capt">
                <div class="name">{{rating.username}}</div>
                <div class="ratetime">{{rating.rateTime | _formatDate}}</div>
              </div>
              <div class="star-warpper">
                <star :size="36" :score="3.5"></star>
                <span class="deliverytime" v-show="rating.deliveryTime">{{rating.deliveryTime}}分钟</span>
              </div>

              <div class="text">
                <span>{{rating.text}}</span>
              </div>
              <div class="recommend" v-show="rating.recommend && rating.recommend.length">
                <span class="icon-thumb_up"></span>
                <span v-for="item in rating.recommend" class="item">{{item}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import star from 'components/star/star';
  import split from 'components/split/split';
  import ratingsselect from 'components/ratingsselect/ratingsselect';
  import {formatDate} from 'common/js/date';
  const ALL = 2;
  const ERROK = 0;
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        ratings: [],
        selectType: ALL,
        onlyContent: false,
        desc: {
          all: '全部',
          positive: '满意',
          negative: '不满意'
        }
      };
    },
    created() {
      var _this = this;
      _this.$http.get('/api/ratings')
        .then(function (response) {
          if (response.data.errno === ERROK) {
            _this.ratings = response.data.data;
            _this.$nextTick(function () {
              _this._initScroll();
              // _this._calculateHeight();
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    components: {
      star,
      split,
      ratingsselect
    },
    methods: {
      _initScroll() {
        this.ratingScroll = new BScroll(this.$refs.ratings, {
          startX: 0,
          startY: 0,
          click: true
        });

        /* this.ratingScroll.on('scroll', (pos) => {
         this.scrollY = Math.abs(Math.round(pos.y));
         this.scrollX = Math.abs(Math.round(pos.x));
         }); */
      },
      _calculateHeight() {
      }
    },
    filters: {
      _formatDate(time) {
        let date = new Date(time);
        return formatDate(date, 'yyyy-mm-dd hh:mi');
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "ratings.styl";
</style>
