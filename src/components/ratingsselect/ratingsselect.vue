<template>
  <div class="ratingsselect">
    <div class="rating-type">
      <span class="block positive " :class="{'active':mySelectType===2}" @click="select(2,$event)">{{desc.all}} <span
        class="count">{{ratings.length}}</span></span>
      <span class="block positive " :class="{'active':mySelectType===0}"
            @click="select(0,$event)">{{desc.positive}} <span
        class="count">{{positives.length}}</span></span>
      <span class="block negative " :class="{'active':mySelectType===1}"
            @click="select(1,$event)">{{desc.negative}} <span
        class="count">{{negative.length}}</span></span>
    </div>
    <div class="switch" @click="tiggleContent($event)">
      <span class="icon-check_circle" :class="{'on':myOnlyContent}"></span>
      <span class="text">只看有内容的评价{{selectType}}{{myOnlyContent}}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const POISITIVE = 0;
  const NEGATIVE = 1;
  const ALL = 2;
  export default {
    props: {
      ratings: {
        type: Array,
        default() {
          return [];
        }
      },
      selectType: {
        type: Number,
        default: ALL
      },
      onlyContent: {
        type: Boolean,
        default: false
      },
      desc: {
        type: Object,
        default() {
          return {
            all: '全部',
            positive: '满意',
            negative: '不满意'
          };
        }
      }
    },
    data() {
      return {
        check: false,
        myOnlyContent: this.onlyContent,
        mySelectType: this.selectType
      };
    },
    computed: {
      positives() {
        return this.ratings.filter((rating) => {
          return rating.rateType === POISITIVE;
        });
      },
      negative() {
        return this.ratings.filter((negative) => {
          return negative.rateType === NEGATIVE;
        });
      }
    },
    methods: {
      select(type, event) {
        if (!event._constructed) {
          return;
        }
        this.mySelectType = type;
        this.$emit('ratingtype.select', this.mySelectType);
      },
      tiggleContent(event) {
        if (!event._constructed) {
          return;
        }
        this.myOnlyContent = !this.myOnlyContent;
        this.$emit('ratingtype.tiggleContent', this.myOnlyContent);
      }
    }
  }
  ;
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "ratingsselect.styl";
</style>
