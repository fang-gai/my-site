<template>
  <div class="blog-detail-container">
    <h1>{{ blog.title }}</h1>
    <aside class="aside">
      <span>日期：{{ formatDate(blog.createDate) }}</span>
      <span>浏览：{{ blog.scanNumber }}</span>
      <a href="#data-form-container">评论：{{ blog.commentNumber }}</a>
      <RouterLink
        :to="{
          name: 'CategoryBlog',
          params: {
            categoryId: blog.category.id,
          },
        }"
        >{{ blog.category.name }}</RouterLink
      >
    </aside>
    <div v-html="blog.htmlContent" class="markdown-body"></div>
  </div>
</template>
<script>
import { formatDate } from "@/utils";
import "highlight.js/styles/github.css";
export default {
  props: {
    blog: {
      type: Object,
      requert: true,
    },
  },
  methods: {
    formatDate,
  },
};
</script>
<style lang="less" scoped>
@import "~@/styles/markdown.css";

.aside {
  font-size: 12px;
  color: var(--fontLigth);
  * {
    margin-right: 15px;
  }
}
.markdown-body {
  margin: 1em 0;
}
</style>
