<template>
  <ul class="right-list-container">
    <li v-for="(item, i) in list" :key="i" :class="{ active: item.isSelect }">
      <span @click="handleClick(item)">
        {{ item.name }}
      </span>
      <span v-if="item.aside" @click="handleClick(item)" class="aside">
        {{ item.aside }}
      </span>
      <RightList :list="item.children" @select="handleClick" />
    </li>
  </ul>
</template>
<script>
export default {
  name: "RightList",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(item) {
      if (!item.isSelect) {
        this.$emit("select", item);
      }
    },
  },
};
</script>
<style lang="less">
@import "~@/styles/global.less";
.right-list-container {
  font-size: 14px;
  list-style-type: none;
  padding: 0;
  color: var(--fontLigth);
  li {
    min-height: 35px;
    line-height: 35px;
    font-weight: initial;
    span {
      cursor: pointer;
    }
  }
  .right-list-container {
    margin-left: 1em;
  }
  .active {
    color: var(--fontActive);
    font-weight: bold;
    font-size: 1.1em;
  }
  .aside {
    padding-left: 15px;
  }
}
</style>
