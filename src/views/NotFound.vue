<template>
  <div class="not-found-container">
    <img :src="url" alt="" />
  </div>
</template>
<script>
import img from "@/assets/images/404.gif";
export default {
  data() {
    return {
      url: img,
    };
  },
};
</script>
<style scoped lang="less">
.not-found-container {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
