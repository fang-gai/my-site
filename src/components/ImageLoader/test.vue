<template>
  <div class="image-loader-test">
    <ImageLoader
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      @load="handleLoaded"
    />
  </div>
</template>
<script>
import ImageLoader from "./";
export default {
  components: {
    ImageLoader,
  },
  methods: {
    handleLoaded() {
      console.log("动画已结束，原始图片加载完毕，并且占位图已删除");
    },
  },
};
</script>
<style lang="less">
@import "~@/styles/global.less";
.image-loader-test {
  height: 600px;
  width: 600px;
}
</style>
