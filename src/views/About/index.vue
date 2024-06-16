<template>
  <div class="about-container" ref="container" v-loading="!isLoaded">
    <iframe
      :src="themeSrc"
      frameborder="0"
      @load="isLoaded = true"
      :style="{ opacity: isLoaded ? 1 : 0 }"
    ></iframe>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isLoaded: false,
    };
  },
  computed: {
    ...mapState("about", {
      src: "data",
    }),
    themeSrc() {
      void this.$store.state.theme.isDark;
      if (localStorage.getItem("isChange")) {
        return this.src + "#" + localStorage.getItem("beforeCloseTheme");
      } else {
        return this.src + (this.$store.state.theme.isDark ? "#dark" : "#light");
      }
    },
  },
  created() {
    this.$store.dispatch("about/fetchAbout");
  },
};
</script>
<style scoped lang="less">
.about-container {
  position: relative;
  height: 100%;
  width: 100%;
  iframe {
    height: 100%;
    width: 100%;
  }
}
</style>
