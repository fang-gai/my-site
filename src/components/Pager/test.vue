<template>
  <Pager :total="300" :current="current" @pageChange="handlePageChange" />
</template>
<script>
import Pager from "./";
export default {
  data() {
    return {
      current: 1,
    };
  },
  components: {
    Pager,
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage;
      console.log("加载当前页数据");
    },
  },
};
</script>
<style lang="less">
@import "~@/styles/global.less";
</style>
