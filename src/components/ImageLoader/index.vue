<template>
  <div class="image-loader-container">
    <!-- 占位图 -->
    <img
      v-if="!isTransitionOver"
      v-imgThemeChange="{
        isDark: this.$store.state.theme.isDark,
        url: {
          darkImg: src.darkImgMini,
          lightImg: src.lightImgMini,
        },
      }"
      alt=""
      class="placeholder"
    />
    <!-- 高清图 -->
    <img
      v-imgThemeChange="{
        isDark: this.$store.state.theme.isDark,
        url: {
          darkImg: src.darkImg,
          lightImg: src.lightImg,
        },
      }"
      @load="handleLoad"
      :style="{ transition: duration + 'ms', opacity: opacityState }"
      alt=""
    />
  </div>
</template>
<script>
//初始化
//占位图在下面，原图在上面，原图透明，占位图不透明且高斯模糊
//原图加载完毕
//让原图变为不透明，
//等过渡结束（原始图片加载完毕）
//删除占位图图
//抛出load事件
export default {
  data() {
    return {
      isLoad: false,
      isTransitionOver: false,
    };
  },
  props: {
    placeholder: {
      type: String,
      require: true,
    },
    src: {
      type: Object,
      require: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  computed: {
    opacityState() {
      return this.isLoad ? 1 : 0;
    },
  },
  methods: {
    handleLoad() {
      this.isLoad = true;
      setTimeout(() => {
        //注意使用箭头函数，否则this指向为window
        this.isTransitionOver = true;
        this.$emit("load");
      }, this.duration);
    },
  },
};
</script>
<style scoped lang="less">
.image-loader-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }
  .placeholder {
    filter: blur(2vw);
  }
}
</style>
