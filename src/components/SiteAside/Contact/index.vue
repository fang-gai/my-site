<template>
  <nav class="contact-container">
    <a
      v-for="(item, index) in data.info"
      :key="index"
      :href="item.link"
      :target="item.target"
    >
      <Icon :type="item.platform" />
      <p>{{ item.ID }}</p>
      <div class="QRcode" v-if="item.QRcode">
        <img :src="item.QRcode" alt="" />
        <div class="triangle"></div>
      </div>
    </a>
  </nav>
</template>
<style scoped lang="less">
@padLeft: 20px;
.contact-container {
  a {
    color: var(--fontLigth);
    display: flex;
    position: relative;
    margin: 24px 0;
    padding-left: @padLeft;
    cursor: default;
    i {
      font-size: 24px;
      padding-right: 10px;
      cursor: pointer;
    }
    p {
      margin: 0;
      font-size: 13px;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    .QRcode {
      position: absolute;
      width: 100px;
      height: 100px;
      padding: 10px;
      background: #fff;
      border: 1px solid;
      bottom: 48px;
      left: 14px;
      border-radius: 5px;
      transition: 250ms;
      transform-origin: center 139px;
      transform: scale(0);
      img {
        width: 100%;
        height: 100%;
      }
      .triangle {
        position: absolute;
        width: 10px;
        height: 10px;
        border: 1px solid var(--fontDark);
        transform: rotate(45deg) translateX(-50%);
        left: 50%;
        bottom: -11px;
        border-top-color: transparent;
        border-left-color: transparent;
        background: #fff;
      }
    }
    p:hover,
    i:hover + p {
      color: var(--fontDark);
      + .QRcode {
        transform: scale(1);
        filter: var(--QRcode);
      }
    }
  }
}
a:first-of-type p:hover,
a:first-of-type i:hover + p {
  text-decoration: var(--fontLigth) 2px underline;
}
a:first-of-type i:before {
  color: var(--github);
  background: var(--githubBck);
  border-radius: 50%;
  border: 1px solid;
}
a:nth-of-type(2) p:hover,
a:nth-of-type(2) i:hover + p {
  text-decoration: var(--fontLigth) 2px underline;
}
a:nth-of-type(2) i:before {
  border-radius: 50%;
  background: #fff;
  color: var(--mail);
  font-size: 27px;
}
a:nth-of-type(2) {
  padding-left: 18px;
}
a:nth-of-type(3) p:hover,
a:nth-of-type(3) i:hover + p {
  text-decoration: var(--fontLigth) 2px underline;
}
a:nth-of-type(3) i:before {
  border-radius: 50%;
  background: #fff;
  font-size: 28px;
  color: var(--qq);
  border: 1px solid;
}
a:nth-of-type(3) {
  padding-left: 18px;
  .QRcode {
    border-color: var(--qq);
    .triangle {
      border-color: transparent var(--qq) var(--qq) transparent;
    }
  }
}
a:last-of-type p:hover,
a:last-of-type i:hover + p {
  text-decoration: var(--fontLigth) 2px underline;
}
a:last-of-type i:before {
  color: var(--weixin);
}
a:last-of-type {
  .QRcode {
    border-color: var(--weixin);
    .triangle {
      border-color: transparent var(--weixin) var(--weixin) transparent;
    }
  }
}
</style>

<script>
import { mapState } from "vuex";

import Icon from "@/components/Icon/";
export default {
  computed: mapState("setting", ["data"]),
  components: {
    Icon,
  },
};
</script>
