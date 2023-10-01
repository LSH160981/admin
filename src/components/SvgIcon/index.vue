<template>
  <!-- svg 图标的外层容器，内部与use配合使用 -->
  <svg :style="{ width, height }">
    <!-- xlink: href 指定用哪一个图标 必须是以  # icon-xxx -->
    <!-- fill 是标签属性之一表示填充的颜色 -->
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },
  name: {
    type: String,
    required: true,
    default: '',
  },
  color: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '16px',
  },
  height: {
    type: String,
    default: '16px',
  },
});
</script>

<style scoped lang="scss"></style>
