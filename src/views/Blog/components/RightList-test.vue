<template>
  <RightList :list="list" @select="handleSelect" />
</template>
<script>
import RightList from "./RightList.vue";
export default {
  components: {
    RightList,
  },
  data() {
    return {
      list: [
        { name: "a", isSelect: false },
        { name: "b", isSelect: false },
        {
          name: "c",
          isSelect: true,
          children: [
            { name: "c-1", isSelect: false },
            {
              name: "c-2",
              isSelect: true,
              children: [
                { name: "c-2-1", isSelect: false },
                { name: "c-2-2", isSelect: false },
              ],
            },
            { name: "c-3", isSelect: false },
          ],
        },
        { name: "d", isSelect: false },
        { name: "e", isSelect: false },
      ],
    };
  },
  methods: {
    handleSelect(e) {
      console.log(e);
    },
  },
};
</script>
<style scoped lang="less"></style>
