<template>
  <div class="theme-change-container">
    <div class="themeButton" @click="handleClick">
      <Icon :type="theme" />
    </div>
    <span class="text">切换主题色</span>
  </div>
</template>
<script>
import Icon from "@/components/Icon";
export default {
  data() {
    return {
      themeObj: null,
    };
  },
  components: {
    Icon,
  },
  methods: {
    handleClick() {
      localStorage.setItem("isChange", true);
      this.$store.commit("theme/changeTheme");
    },
  },
  computed: {
    theme() {
      if (this.$store.state.theme.isDark) {
        return "dark";
      } else {
        return "light";
      }
    },
  },
  mounted() {
    this.themeObj = window.matchMedia("(prefers-color-scheme: dark)");
    this.themeObj.onchange = () => {
      if (
        this.themeObj.matches === this.$store.state.theme.isDark ||
        localStorage.getItem("isChange")
      ) {
        return;
      }
      this.$store.commit("theme/changeTheme");
    };
  },
};
</script>
<style scoped lang="less">
.theme-change-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.themeButton {
  margin-right: 10px;
  border: 1.5px solid rgba(60, 60, 60, 0.35);
  background: #dcdcdc;
  width: 44px;
  height: 18px;
  line-height: 18px;
  padding: 2px;
  font-size: 17px;
  border-radius: 10px;
  transition: 0.5s;
  cursor: pointer;
}
.text {
  font-size: 14px;
  color: var(--fontLigth);
  font-style: italic;
}
:root.dark .themeButton:hover,
.themeButton:hover {
  border-color: var(--fontDark);
}
.icon-container {
  border-radius: 50%;
  color: black;
  background: white;
  font-weight: bold;
  margin-left: 0;
  transition: 0.5s;
}
:root.dark .themeButton {
  border-color: rgba(84, 84, 84, 0.65);
  background: #2f2f2f;
}
:root.dark .icon-container {
  color: #d4d4d4;
  background: black;
  margin-left: 27px;
}
</style>
