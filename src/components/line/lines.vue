<template>
  <div class="title">
    <div class="line">
    </div>
    <div class="text"></div>
    <div class="line"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      text: {
        type: String
      }
    },
    data() {
      return {

      };
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "lines.style";
</style>
