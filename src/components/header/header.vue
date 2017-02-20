<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64" alt=""/>
      </div>
      <div class="content">
        <div class="title">
        <span class="brand">

        </span>
        <span class="name">
          {{seller.name}}
        </span>
        </div>
        <div class="description">
          {{seller.description}} / {{seller.deliveryTime}}分钟送达
        </div>
        <div class="support" v-if="seller.supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count" @click="showDetail"><span class="count">{{seller.supports.length}}个</span>
        <i class="icon-circle-right"></i>
      </div>
    </div>

    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-circle-right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%"/>

    </div>
    <div v-show="detailShow" class="detail" >
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <h1 class="name">{{seller.name}}</h1>
          <div class="star-wrapper">
            <star :size="48" :score="seller.score"></star>
          </div>
          <lines :title=seller.name></lines>
          <ul v-if="seller.supports" class="supports">
            <li v-for="(support,index) in seller.supports" class="support-item">
              <span class="icon" :class="classMap[seller.supports[index].type]" ></span>
              <span class="text" >{{seller.supports[index].description}}</span>
            </li>
          </ul>
          <lines title="其他信息"></lines>
        </div>
      </div>
      <div class="detail-close" @click="hiddenDetail">
        <i class="icon-cross"></i>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import star from 'components/star/star';
  import lines from 'components/line/lines';
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        detailShow: false
      };
    },
    methods: {
      showDetail() {
        this.detailShow = true;
      },
      hiddenDetail() {
        this.detailShow = false;
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    },
    components: {
      star: star,
      lines: lines
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "header.styl"
</style>
