import Vue from "vue";
/**
 * 获取组件渲染的根DOM
 * @param {Object} comp 组件对象
 * @param {Object} props 组件属性，对象形式
 */
export default function (comp, props) {
  return new Vue({
    render: (h) => h(comp, { props }),
  }).$mount().$el;
}
