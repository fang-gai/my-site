<template>
  <ul>
    <li v-for="(item, index) in typesArr" :key="index">
      <Icon :type="item" />
      <p>{{ item }}</p>
    </li>
  </ul>
</template>
<script>
import { typesArr } from "./";
import Icon from "./";
export default {
  data() {
    return {
      typesArr: typesArr,
    };
  },
  components: {
    Icon,
  },
};
</script>
<style lang="less">
@import "~@/styles/global.less";
ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 60%;
  margin: 100px auto;
  li {
    text-align: center;
    font-size: 2em;
    padding: 0 40px;
    p {
      margin: 0px;
      padding-top: 5px;
      padding-bottom: 35px;
      font-size: 16px;
    }
  }
}
</style>
