<template>
  <i class="icon-container iconfont" :class="iconClass"></i>
</template>
<script>
const iconClassMap = {
  light: "icon-taiyang",
  dark: "icon-yueliang",
  home: "icon-home",
  success: "icon-success_fill",
  error: "icon-error-fill",
  close: "icon-close",
  warn: "icon-warnfill",
  info: "icon-info",
  blog: "icon-blog",
  code: "icon-code",
  about: "icon-about",
  weixin: "icon-weixin",
  mail: "icon-email",
  github: "icon-github-fill",
  qq: "icon-QQ-circle-fill",
  arrowUp: "icon-xiangshang",
  arrowDown: "icon-xiangxia",
  empty: "icon-empty",
  chat: "icon-chat1196057easyiconnet1",
};
export const typesArr = Object.keys(iconClassMap);
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    iconClass() {
      return iconClassMap[this.type];
    },
  },
};
</script>
<style scoped lang="less">
@import "http://at.alicdn.com/t/c/font_3984735_p4d38j7jh0d.css";
.icon-container {
  font-size: inherit;
}
</style>
