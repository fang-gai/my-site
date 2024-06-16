<template>
  <div
    class="carousel-item-container"
    ref="container"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    @transitionend.stop
  >
    <div class="image-container" ref="image" :style="imagePosition">
      <ImageLoader :src="src" :duration="600" @load="handleLoad" />
    </div>
    <div class="title" ref="title">{{ carousel.title }}</div>
    <div class="desc" ref="desc">{{ carousel.description }}</div>
  </div>
</template>
<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  // 资源数据，页面当前显示的第几页轮播图，该组件是第几张轮播图，轮播是否轮播结束
  props: ["carousel", "currentIndex", "selfIndex", "isTransitionEnd"],
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      ifFirst: true, //组件是否为第一次加载
      containerSize: null, //外层容器尺寸
      innerSize: null, //里层图片尺寸
      // 鼠标相对于容器的坐标
      mouseX: 0,
      mouseY: 0,
    };
  },
  components: {
    ImageLoader,
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
    this.$refs.title.style.width = 0;
    this.$refs.desc.style.width = 0;
    this.$refs.title.style.opacity = 1;
    this.$refs.desc.style.opacity = 1;
    this.setSize();
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    window.addEventListener("resize", this.setSize);
  },
  methods: {
    handleLoad() {
      this.$refs.title.style.width = this.titleWidth + "px";
      this.$refs.desc.style.width = this.descWidth + "px";
    },
    setSize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      };
      this.innerSize = {
        width: this.$refs.image.clientWidth,
        height: this.$refs.image.clientHeight,
      };
    },
    handleMouseMove(e) {
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
    handleMouseLeave() {
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    },
  },
  computed: {
    src() {
      if (this.currentIndex === this.selfIndex && this.isTransitionEnd) {
        this.ifFirst = false;
        return {
          lightImg: this.carousel.lightImg,
          darkImg: this.carousel.darkImg,
          lightImgMini: this.carousel.lightImgMini,
          darkImgMini: this.carousel.darkImgMini,
        };
      }
      if (!this.ifFirst) {
        return {
          lightImg: this.carousel.lightImg,
          darkImg: this.carousel.darkImg,
          lightImgMini: this.carousel.lightImgMini,
          darkImgMini: this.carousel.darkImgMini,
        };
      }
      return {
        lightImgMini: this.carousel.lightImgMini,
        darkImgMini: this.carousel.darkImgMini,
      };
    },
    center() {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2,
      };
    },
    imagePosition() {
      if (!this.innerSize || !this.containerSize) {
        return;
      }
      const extraWidth = this.innerSize.width - this.containerSize.width; //多出的宽度
      const extraHeight = this.innerSize.height - this.containerSize.height; //多出的高度
      const left = (-extraWidth / this.containerSize.width) * this.mouseX;
      const top = (-extraHeight / this.containerSize.height) * this.mouseY;
      return {
        transform: `translate(${left}px,${top}px)`,
      };
    },
  },
  destroyed() {
    window.removeEventListener("resize", this.setSize);
  },
};
</script>
<style lang="less" scoped>
.carousel-item-container {
  height: 100%;
  position: relative;
  overflow: hidden;
  .image-container {
    width: 110%;
    height: 110%;
    transition: 300ms;
  }
  .title,
  .desc {
    position: absolute;
    left: 30px;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.9), -1px 0 0 rgba(0, 0, 0, 0.9),
      0 1px 0 rgba(0, 0, 0, 0.9), 0 -1px 0 rgba(0, 0, 0, 0.9); //字体描边，白色背景下看清文字
    opacity: 0;
    white-space: nowrap;
    overflow: hidden;
    transition: 1s;
  }
  .title {
    top: calc(50% - 40px);
    font-size: 2em;
    color: #fff;
  }
  .desc {
    top: calc(50% + 20px);
    font-size: 1.2em;
    color: lighten(gray, 31%);
    transition-delay: 1s;
    letter-spacing: 5px;
  }
}
</style>
