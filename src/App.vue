<template>
  <div class="app-container" v-loading="loading">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template>
        <RouterView />
      </template>
    </Layout>
    <ToTop />
  </div>
</template>
<script>
import { mapState } from "vuex";
import Layout from "./components/Layout";
import SiteAside from "./components/SiteAside";
import ToTop from "./components/ToTop";
export default {
  name: "App", // 如果组件没有在注册的时候指定名字，则使用该名字
  computed: mapState("banner", ["loading"]),
  components: {
    Layout,
    SiteAside,
    ToTop,
  },
};
</script>
<style scoped lang="less">
.app-container {
  position: fixed;
  width: 100%;
  height: 100%;
}
.aside {
  width: 250px;
  height: 100%;
}
</style>
