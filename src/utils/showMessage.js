import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/Icon";
import styles from "./showMessage.module.less";

/**
 * 弹出消息
 * @param {String} content 消息内容
 * @param {String} type 消息类型 info error success warn
 * @param {Number} duration 多久后消失
 * @param {HTMLElement} container 容器，消息会显示到该容器的正中；如果不传，则显示到页面正中
 * @param {Function} callback 弹窗结束后的回调函数
 */
export default function (options = {}) {
  const content = options.content || "提示";
  const type = options.type || "info";
  const duration = options.duration || 2000;
  const container = options.container || document.body;
  //创建容器
  const div = document.createElement("div");
  div.className = styles.pop + " " + styles[type];
  //填充内容
  const i = getComponentRootDom(Icon, { type });
  i.classList.add(styles.icon);
  const span = document.createElement("span");
  span.className = styles.message;
  span.innerText = content;
  div.appendChild(i);
  div.appendChild(span);
  if (options.container) {
    if (getComputedStyle(container).position === "static") {
      container.style.position = "relative";
    }
  }
  container.appendChild(div);
  div.offsetHeight; //进行一次强制渲染
  div.style.transform = "translate(-50%,-50%)";
  div.style.opacity = 1;
  setTimeout(() => {
    div.style.transform = "translate(-50%,-70%)";
    div.style.opacity = 0;
    div.addEventListener(
      "transitionend",
      function () {
        this.remove();
        options.callback && options.callback();
      },
      { once: true }
    );
  }, duration);
}
