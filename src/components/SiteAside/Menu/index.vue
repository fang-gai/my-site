<template>
  <nav class="menu-container">
    <RouterLink
      v-for="(item, index) in menuArr"
      :key="index"
      :to="{ name: item.link }"
      :exact="item.exact"
      active-class="selected"
      exact-active-class=""
    >
      <Icon :type="item.type" />
      <p>{{ item.explain }}</p>
    </RouterLink>
  </nav>
</template>
<style scoped lang="less">
.menu-container {
  a {
    color: var(--fontLigth);
    display: flex;
    height: 60px;
    line-height: 60px;
    padding-left: 50px;
    transition: 0.2s;
    &:hover {
      color: var(--fontDark);
      font-weight: bold;
    }
    &.selected {
      background: var(--selected);
      color: var(--fontActive);
      font-weight: bold;
    }
    i {
      font-size: 26px;
      padding-right: 10px;
    }
    p {
      margin: 0;
      font-size: 15px;
    }
  }
}
</style>

<script>
import Icon from "@/components/Icon/";
export default {
  data() {
    return {
      menuArr: [
        {
          type: "home",
          explain: "首页",
          link: "Home",
          exact: true,
        },
        {
          type: "blog",
          explain: "文章",
          link: "Blog",
          exact: false,
        },
        {
          type: "about",
          explain: "关于我",
          link: "About",
          exact: true,
        },
        {
          type: "code",
          explain: "项目&效果",
          link: "Project",
          exact: true,
        },
        {
          type: "chat",
          explain: "留言",
          link: "Message",
          exact: true,
        },
      ],
    };
  },
  components: {
    Icon,
  },
};
</script>
