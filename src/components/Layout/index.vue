<template>
  <div class="layout-container">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="main">
      <slot></slot>
      <!-- name='default' -->
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="less">
.layout-container {
  //宽高撑满包含块
  //弹性盒，里面的弹性项目宽度自适应内容，高度撑满
  display: flex;
  width: 100%;
  height: 100%;
  .left,
  .right {
    //左右两栏宽度完全由其内容决定,溢出隐藏
    flex: 0 0 auto;
    overflow: hidden;
  }
  .main {
    //中间主区域自适应剩余空间，溢出隐藏
    flex: 1 1 auto;
    min-width: 50%;
    overflow: hidden;
  }
}
// .dark .layout-container {
//   background: rgb(18, 18, 18);
// }
</style>
