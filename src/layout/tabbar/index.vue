<template>
  <div class="tabbar">
    <!-- tabbar_left -->
    <Breadcrumb />
    <!-- tabbar_right -->
    <Setting />
  </div>
</template>

<script setup lang="ts">
// 把顶部的导航栏拆分成左边的【Breadcrumb】 与 右边的【Setting】的两个组件
import Breadcrumb from './breadcrumb/index.vue';
import Setting from './settting/index.vue';
</script>

<style scoped lang="scss">
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  user-select: none;
  /* 从上到下的渐变，从红色到蓝色 */
  background: linear-gradient(
    to left,
    rgba(226, 221, 221, 0.685),
    rgba(159, 159, 168, 0.699),
    rgba(216, 195, 194, 0.616)
  );
}
</style>
