<template>
  <div v-if="data" class="siteAside-container">
    <Avatar :url="data.avatar" />
    <h1>{{ data.siteTitle }}</h1>
    <ThemeChange />
    <Menu />
    <Contact />
    <p>{{ data.icp }}</p>
  </div>
</template>
<style scoped lang="less">
.siteAside-container {
  height: 100%;
  background: var(--bck);
  overflow-x: hidden;
  overflow-y: auto;
  .avatar-container {
    margin: 0 auto;
    margin-top: 20px;
    position: relative;
    // top: 0;
    // left: 50%;
    // transform: translateX(-50%);
  }
  .menu-container {
    margin-top: 10px;
    margin-bottom: 15px;
  }
  .theme-change-container {
    padding-top: 18px;
    padding-bottom: 10px;
  }
  p {
    text-align: center;
    color: var(--fontLigth);
    font-size: 0.6em;
    margin-top: 30px;
    margin-bottom: 20px;
    text-align: center;
  }
  h1 {
    font-size: 0.9em;
    text-align: center;
    letter-spacing: 0.5em;
  }
}
</style>
<script>
import { mapState } from "vuex";
import Avatar from "@/components/Avatar";
import Contact from "./Contact";
import Menu from "./Menu";
import ThemeChange from "../ThemeChange";

export default {
  computed: mapState("setting", ["data"]),
  components: {
    Contact,
    Menu,
    Avatar,
    ThemeChange,
  },
};
</script>
