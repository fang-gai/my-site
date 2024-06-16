<template>
  <div class="test-loading">
    <Loading v-if="isLoading" />
    <button @click="isLoading = !isLoading">切换显示隐藏</button>
  </div>
</template>
<script>
import Loading from "./";
export default {
  data() {
    return {
      isLoading: true,
    };
  },
  components: {
    Loading,
  },
};
</script>
<style lang="less" scoped>
.test-loading {
  position: relative;
}
</style>
