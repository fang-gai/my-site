<template>
  <div class="home-container">
    <ul
      class="carousel-container"
      :style="{ marginTop }"
      ref="container"
      @wheel="handleWheel"
      @transitionend="handleEnd"
    >
      <li v-for="(item, i) in data" :key="item.id">
        <!--  
          资源数据
          页面当前显示的第几页轮播图
          该组件是第几张轮播图
          轮播图图是否轮播技术
        -->
        <CarouselItem
          :carousel="item"
          :currentIndex="index"
          :selfIndex="i"
          :isTransitionEnd="!switching"
        />
      </li>
    </ul>
    <div
      class="icon icon-up"
      v-show="index >= 1"
      @click="switchCarousel(index - 1)"
    >
      <Icon type="arrowUp" />
    </div>
    <div
      class="icon icon-down"
      v-show="index < data.length - 1"
      @click="switchCarousel(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li
        v-for="(item, i) in data"
        :key="item.id"
        :class="{ active: index === i }"
        @click="switchCarousel(i)"
      ></li>
    </ul>
  </div>
</template>
<style lang="less" scoped>
.home-container {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden; //解决轮播时设置ul的margin-top产生的外边距合并

  .carousel-container {
    height: 100%;
    transition: 500ms;
    li {
      height: 100%;
    }
  }
  ul {
    margin: 0;
    list-style-type: none;
    padding: 0;
  }
  .icon {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 30px;
    color: var(--fontLigth);
    cursor: pointer;
  }
  @gap: 25px;
  .icon-up {
    top: @gap;
    animation: jump-up 2s infinite;
  }
  .icon-down {
    bottom: @gap;
    animation: jump-down 2s infinite;
  }
  @jump: 10px;
  @keyframes jump-up {
    0% {
      transform: translate(-50%, @jump);
    }
    50% {
      transform: translate(-50%, -@jump);
    }
    100% {
      transform: translate(-50%, @jump);
    }
  }
  @keyframes jump-down {
    to {
      transform: translate(-50%, -@jump);
    }
    50% {
      transform: translate(-50%, @jump);
    }
    from {
      transform: translate(-50%, -@jump);
    }
  }
  .indicator {
    position: absolute;
    right: 13px;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(128, 128, 128, 0.3);
    padding: 3px 5px;
    border-radius: 10px;
    li {
      width: 7px;
      height: 7px;
      background: gray;
      border-radius: 50%;
      margin: 10px 0;
      cursor: pointer;
      &.active {
        background: rgba(255, 255, 255, 0.8);
      }
    }
    @media (prefers-color-scheme: light) {
      li {
        background: rgba(255, 255, 255, 0.8);
        &.active {
          background: gray;
        }
      }
    }
  }
}
</style>
<script>
import { mapState } from "vuex";
import CarouselItem from "./CarouselItem";
import Icon from "@/components/Icon";
export default {
  components: {
    CarouselItem,
    Icon,
  },
  data() {
    return {
      index: 0, //当前显示的是第几张轮播图
      containerHeight: 0, //轮播容器的高度
      switching: false, //是否正在翻页
    };
  },
  created() {
    this.$store.dispatch("banner/fetchBanner");
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.setContainerHeight);
  },
  computed: {
    ...mapState("banner", ["data"]),
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
  },
  methods: {
    switchCarousel(i) {
      if (this.switching) return;
      this.switching = true;
      this.index = i;
    },
    handleWheel(e) {
      if (this.switching) return;
      if (e.deltaY < -5 && this.index > 0) {
        this.switching = true;
        this.index--;
      } else if (e.deltaY > 5 && this.index < this.data.length - 1) {
        this.switching = true;
        this.index++;
      }
    },
    handleEnd() {
      this.switching = false;
    },
    setContainerHeight() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
  },
  destroyed() {
    window.removeEventListener("resize", this.setContainerHeight);
  },
};
</script>
