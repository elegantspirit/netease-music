<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text">netease music</h1>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style rel="stylesheet/stylus" lang="stylus">
  @import '~common/stylus/variable'
  @import '~common/stylus/mixin'

  .m-header
    position: relative
    height: 44px
    font-size: 0
    text-align: center
    color: $color-theme
    .icon
      display: inline-block
      margin-top: 6px
      margin-right: 9px
      width: 30px
      height: 32px
      vertical-align: top
      bg-image('logo')
      background-size: 30px 32px
    .text
      display: inline-block
      vertical-align: top
      line-height: 44px
      font-size: $font-size-large
    .mine
      position: absolute
      top: 0
      right: 0
      .icon-mine
        display: block
        padding: 12px
        font-size: 20px
        color: $color-theme
</style>
