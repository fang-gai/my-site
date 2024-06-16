<template>
  <div class="menu-test">
    <Menu />
  </div>
</template>
<script>
import Menu from "./";
export default {
  components: {
    Menu,
  },
};
</script>
<style lang="less">
@import "~@/styles/global.less";
.menu-test {
  width: 600px;
  height: 500px;
  border: 2px solid red;
}
</style>
