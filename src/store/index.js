import { Store, install } from "vuex";
import Vue from "vue";
import banner from "./banner";
import setting from "./setting";
import about from "./about";
import project from "./project";
import theme from "./theme";
if (!window.VueRouter) {
  install(Vue);
}
export default new Store({
  modules: {
    banner,
    setting,
    about,
    project,
    theme,
  },
  strict: true,
});
