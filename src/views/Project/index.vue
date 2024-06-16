<template>
  <div class="project-container" ref="projectContainer" v-loading="loading">
    <ul>
      <li v-for="item in data" :key="item.id">
        <a
          class="imgHref"
          :href="
            item.url
              ? item.url
              : `javascript:alert('保密限制，该项目无法通过外网访问');`
          "
          :target="item.url ? '_block' : '_self'"
        >
          <img v-lazy="item.thumb" alt="" />
        </a>
        <div class="describe">
          <a
            class="title"
            :href="
              item.url
                ? item.url
                : `javascript:alert('该项目无法通过外网访问');`
            "
            :target="item.url ? '_block' : '_self'"
          >
            <h2>{{ item.name }}</h2>
          </a>
          <p>
            <a
              :href="item.url"
              target="_block"
              v-if="item.github"
              class="github"
              >github</a
            >
          </p>
          <p v-for="(i, index) in item.descroption" :key="index">
            {{ i }}
          </p>
        </div>
      </li>
    </ul>
    <footer v-if="data.length !== 0 && !loading">我也是有底线的~</footer>
    <Empty v-if="data.length === 0 && !loading" />
  </div>
</template>
<script>
import { mapState } from "vuex";
import mainScroll from "@/mixins/mainScroll.js";
import Empty from "@/components/Empty";
export default {
  components: {
    Empty,
  },
  mixins: [mainScroll("projectContainer")],
  computed: mapState("project", ["data", "loading"]),
  created() {
    this.$store.dispatch("project/fetchProject");
  },
};
</script>
<style scoped lang="less">
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.project-container {
  background: var(--pure);
  position: relative;
  width: 100%;
  height: 100%;
  color: var(--fontLigth);
  overflow-y: auto;
  scroll-behavior: smooth;
  li {
    border-radius: 5px;
    display: flex;
    margin: 20px 35px;
    padding: 20px;
    transition: 0.5s;
    background: var(--bck);
    a {
      display: inline-block;
      color: var(--fontDark);
    }
    a:hover {
      color: var(--link);
    }
    .imgHref {
      margin-right: 30px;
      img {
        max-width: 200px;
        min-height: 166px;
        border-radius: 5px;
        display: block;
      }
    }
    .describe {
      flex: 1 1 auto;
      .title {
        h2 {
          margin: 0;
          cursor: pointer;
        }
      }
      .github {
        font-weight: bold;
      }
      p {
        margin: 0;
        margin-top: 15px;
      }
    }
  }
  li:hover {
    box-shadow: -1px 1px 5px var(--prj);
    transform: scale(1.01) translate(3px, -3px);
  }
}
footer {
  text-align: center;
  padding: 20px;
}
</style>
