<template>
  <div class="empty-container">
    <Icon type="empty" />
    <p>{{ text }}</p>
  </div>
</template>
<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
};
</script>
<style scoped lang="less">
@import "~@/styles/mixin.less";
.empty-container {
  .self-center();
  text-align: center;
  color: var(--fontLigth);
  .icon-container {
    font-size: 3.5em;
  }
  p {
    font-size: 14px;
    font-weight: bold;
  }
}
</style>
