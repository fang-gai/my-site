<template>
  <div class="layout-test">
    <Layout>
      <template #left>
        <div class="left">左边栏</div>
      </template>
      <template><div class="main">中间主区域</div></template>
      <template #right> <div class="right">右边栏</div> </template>
    </Layout>
  </div>
</template>
<script>
import Layout from "./";
export default {
  components: {
    Layout,
  },
};
</script>
<style scoped lang="less">
.layout-test {
  width: 60%;
  height: 700px;
  border: 2px solid black;
  margin: 0 auto;
}
.left {
  background: lightblue;
  width: 200px;
  height: 100%;
}
.main {
  background: lightpink;
  height: 100%;
}
.right {
  width: 150px;
  background: #008c8c;
  height: 100%;
}
</style>
