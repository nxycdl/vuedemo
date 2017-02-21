<template>
  <div id="comp_lines" class="title">
    <div class="line">
    </div>
    <div class="text">{{title}}</div>
    <div class="line"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
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
