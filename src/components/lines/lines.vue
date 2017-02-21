<template>
  <div class="title">
    <div class="line">
    </div>
    <div class="text" @click="sendMsg">{{text}}{{seller.description}}</div>
    <div class="line"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      text: {
        type: String
      },
      seller: {
        type: Object
      }
    },
    methods: {
      sendMsg() {
        console.log('xxxx');
        this.$emit('id-selected', 1);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import 'lines.styl';
</style>
