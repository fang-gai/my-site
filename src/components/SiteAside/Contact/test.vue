<template>
  <div class="contact-test">
    <Contact />
  </div>
</template>
<script>
import Contact from "./";
export default {
  components: {
    Contact,
  },
};
</script>
<style lang="less">
@import "~@/styles/global.less";
.contact-test {
  width: 600px;
  height: 500px;
  border: 2px solid red;
}
</style>
