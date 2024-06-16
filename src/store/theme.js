const themeObj = window.matchMedia("(prefers-color-scheme: dark)");
let isDark = themeObj.matches;
if (!localStorage.getItem("isChange")) {
  if (isDark) {
    document.documentElement.className = "dark";
  } else {
    document.documentElement.className = "light";
  }
} else {
  document.documentElement.className = localStorage.getItem("beforeCloseTheme");
  isDark = localStorage.getItem("beforeCloseTheme") !== "light";
}
export default {
  namespaced: true,
  state: {
    isDark,
  },
  mutations: {
    changeTheme(state) {
      state.isDark = !state.isDark;
      if (state.isDark === true) {
        document.documentElement.className = "dark";
        localStorage.setItem("beforeCloseTheme", "dark");
      } else {
        document.documentElement.className = "light";
        localStorage.setItem("beforeCloseTheme", "light");
      }
    },
  },
};
//检查location
