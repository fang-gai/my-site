import loadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";
// 得到el中loading效果的img元素
function getLoadingImage(el) {
  return el.querySelector("img[data-role=loading]");
}
//创建img元素
function createLoadingImg() {
  const img = document.createElement("img");
  img.dataset.role = "loading";
  img.src = loadingUrl;
  img.className = styles.loading;
  return img;
}
//导出指令的配置对象
export default function (el, binding) {
  //binding.value的值决定创建或删除img元素
  const currentImg = getLoadingImage(el);
  if (binding.value) {
    if (!currentImg) {
      const img = createLoadingImg();
      el.appendChild(img);
    }
  } else {
    if (currentImg) {
      currentImg.remove();
    }
  }
}
