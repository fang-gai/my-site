<template>
  <img
    class="avatar-container"
    :src="url"
    :style="{ width: size + 'px', height: size + 'px' }"
  />
</template>
<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 150,
    },
  },
};
</script>
<style scoped lang="less">
.avatar-container {
  object-fit: cover;
  border-radius: 50%;
  display: block; //解决白边问题
  background: var(--avatarBck);
}
</style>
