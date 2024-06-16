<template>
  <Layout>
    <div ref="mainContainer" class="main-container" v-loading="isLoading">
      <BlogDetail :blog="data" v-if="data" />
      <BlogComment v-if="!isLoading" />
    </div>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogTOC :toc="data.toc" v-if="data" />
      </div>
    </template>
  </Layout>
</template>
<script>
import fetchData from "@/mixins/fetchData";
import { getBlog } from "@/api/blog";
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail";
import BlogTOC from "./components/BlogTOC";
import BlogComment from "./components/BlogComment";
import mainScroll from "@/mixins/mainScroll";
import { titleController } from "@/utils";

export default {
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComment,
  },
  mixins: [fetchData(null), mainScroll("mainContainer")],
  methods: {
    async fetchData() {
      const resp = await getBlog(this.$route.params.id);
      // resp = null;
      if (!resp) {
        // 文章不存在
        this.$router.push("/404");
        titleController.setRouteTitle("页面不存在（404）");
        return;
      }
      if (resp.title) {
        titleController.setRouteTitle(resp.title);
      }
      return resp;
    },
  },

  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
};
</script>
<style lang="less" scoped>
.main-container {
  height: 100%;
  overflow-y: scroll;
  scroll-behavior: smooth;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
}
.right-container {
  width: 300px;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  position: relative;
  box-sizing: border-box;
  padding: 20px;
}
</style>
