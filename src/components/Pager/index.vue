<template>
  <div class="pager-container" v-if="pageNum > 1">
    <a @click="handleClick(1)" :class="{ disabled: current === 1 }"
      >|&lt;&lt;</a
    >
    <a @click="handleClick(current - 1)" :class="{ disabled: current === 1 }"
      >&lt;</a
    >
    <a
      v-for="(item, index) in pageArr"
      :key="index"
      :class="{ active: item === current }"
      @click="handleClick(item)"
    >
      {{ item }}
    </a>
    <a
      @click="handleClick(current + 1)"
      :class="{ disabled: current === pageNum }"
      >&gt;</a
    >
    <a @click="handleClick(pageNum)" :class="{ disabled: current === pageNum }"
      >&gt;&gt;|</a
    >
  </div>
</template>
<script>
export default {
  props: {
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    limit: {
      type: Number,
      default: 10,
    },
    visibleNum: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    //分页量
    pageNum() {
      return Math.ceil(this.total / this.limit);
    },
    //最小显示页码
    pageMin() {
      let min = this.current - Math.ceil(this.visibleNum / 2);
      if (min < 1) {
        return 1;
      }
      const max = this.pageNum - (this.visibleNum - 1);
      if (min > max) {
        return max;
      }
      return min;
    },
    //最大显示页码
    pageMax() {
      return this.pageMin + this.visibleNum - 1;
    },
    //生成页码的数组
    pageArr() {
      const result = [];
      for (let i = this.pageMin; i <= this.pageMax; i++) {
        result.push(i);
      }
      return result;
    },
  },
  methods: {
    handleClick(newPage) {
      if (newPage < 1 || newPage > this.pageNum || newPage === this.current) {
        return;
      }
      this.$emit("pageChange", newPage);
    },
  },
};
</script>
<style scoped lang="less">
@import "~@/styles/var.less";
.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0; //注意外边距合并
  a {
    color: @link;
    margin: 0 6px;
    cursor: pointer;
    &.active {
      color: var(--fontDark);
      cursor: initial;
    }
    &.disabled {
      color: var(--fontLigth);
      cursor: not-allowed;
    }
  }
}
</style>
