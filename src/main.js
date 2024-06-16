import "./mock"; //请求拦截
import Vue from "vue";
import App from "@/App.vue";
import "./styles/global.less";
import router from "./router";
import "./eventBus.js";
import store from "@/store";
store.dispatch("setting/fetchSetting");
import { showMessage } from "@/utils";
Vue.prototype.$showMessage = showMessage;

//注册全局指令
import vLoading from "./directives/loading";
import vImgThemeChange from "./directives/imgThemeChange";
Vue.directive("loading", vLoading);
Vue.directive("imgThemeChange", vImgThemeChange);
import vLazy from "./directives/lazy";
Vue.directive("lazy", vLazy);
new Vue({
  store,
  router,
  render: (h) => h(App),
  /*
  相当于是：

  conmponents:{
    App,
  },
  template:`<App/>`

  但由于vue-cli打包时，会直接把组件中的模板转换为render函数(模板编译)，
  运行时就不再需要编译模板，打包结果也就不再包含vue的编译代码，所以这种写法是无法运行的
  */
}).$mount("#app");
