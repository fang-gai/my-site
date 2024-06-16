<template>
  <div class="empty-test">
    <Empty />
  </div>
</template>
<script>
import Empty from "./";
export default {
  components: {
    Empty,
  },
};
</script>
<style lang="less">
@import "~@/styles/global.less";
.empty-test {
  position: relative;
  width: 300px;
  height: 200px;
  border: 2px solid red;
}
</style>
