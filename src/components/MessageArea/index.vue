<template>
  <div class="message-area-container">
    <DataForm v-on="$listeners" />
    <h3>
      {{ title }}
      <span>{{ subTitle }}</span>
    </h3>
    <DataList :list="list" />
    <div v-if="!isOver" class="loading" v-loading="isListLoading"></div>
    <footer v-if="isOver">我也是有底线的~</footer>
  </div>
</template>

<script>
import DataForm from "./DataForm";
import DataList from "./DataList";

export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default: () => [],
    },
    isListLoading: {
      type: Boolean,
      default: false,
    },
    isOver: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    DataForm,
    DataList,
  },
};
</script>

<style scoped lang="less">
.loading {
  position: relative;
  height: 100px;
}
footer {
  margin-top: 30px;
  text-align: center;
  color: var(--fontDark);
}
</style>
