<template>
  <div v-show="show" @click="handleClick" class="to-top-container">Top</div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroued() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  methods: {
    handleScroll(dom) {
      if (!dom) {
        this.show = false;
        return;
      }
      this.show = dom.scrollTop >= 500;
    },
    handleClick() {
      this.$bus.$emit("setMainScroll", 0);
    },
  },
};
</script>
<style lang="less" scoped>
.to-top-container {
  background: var(--selected);
  color: var(--fontDark);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  z-index: 99;
  right: 50px;
  bottom: 50px;
  cursor: pointer;
  text-align: center;
  line-height: 50px;
}
</style>
