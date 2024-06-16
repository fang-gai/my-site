<template>
  <div class="siteAside-test">
    <SiteAside />
  </div>
</template>
<style lang="less">
@import "~@/styles/global.less";
.siteAside-test {
  width: 500px;
  height: 600px;
  border: 2px solid red;
}
</style>
<script>
import SiteAside from "@/components/SiteAside";
export default {
  data() {
    return {
      icp: "豫ICP备XXXXXX号",
    };
  },
  components: {
    SiteAside,
  },
};
</script>
