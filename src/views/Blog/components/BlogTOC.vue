<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="tocWithSelect" @select="handleSelect" />
  </div>
</template>
<script>
import RightList from "./RightList";
import { debounce } from "@/utils";
export default {
  components: {
    RightList,
  },
  props: {
    toc: {
      type: Array,
    },
  },
  data() {
    return {
      activeAnchor: "",
    };
  },
  created() {
    this.setSelectDdbounce = debounce(this.setSelect, 50);
    this.$bus.$on("mainScroll", this.setSelectDdbounce);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.setSelectDdbounce);
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
    //设置activeAnchor为正确的值
    setSelect(scrollDom) {
      if (!scrollDom) return;
      const range = 100;
      for (const dom of this.doms) {
        if (!dom) {
          continue;
        }
        const top = dom.getBoundingClientRect().top;
        if (top >= 0 && top <= range) {
          // 在规定的范围内
          this.activeAnchor = dom.id;
          return;
        } else if (top > range) {
          //在规定范围下方
          return;
        } else {
          //在规定范围上方
          this.activeAnchor = dom.id;
        }
      }
    },
  },

  computed: {
    //根据toc属性以及activeAnchor得到带有isSelect属性的toc数组
    tocWithSelect() {
      const getTOC = (toc = []) => {
        return toc.map((t) => {
          return {
            ...t,
            isSelect: t.anchor === this.activeAnchor,
            children: getTOC(t.children),
          };
        });
      };
      return getTOC(this.toc);
    },
    //根据toc得到他们对应的元素数组
    doms() {
      const doms = [];
      const addToDoms = (toc) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if (t.children && t.children.length) {
            addToDoms(t.children);
          }
        }
      };
      addToDoms(this.toc);
      return doms;
    },
  },
};
</script>
<style lang="less" scoped>
h2 {
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 1em;
  margin: 0;
}
</style>
