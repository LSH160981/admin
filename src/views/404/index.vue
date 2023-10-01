<template>
  <div class="error_container">
    <div class="error_content">
      <h1 class="error_code">404</h1>
      <h2 class="error_msg">This page could not be found.</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
// 引入路由信息
import { useRoute } from 'vue-router';
// 实例化
const $route = useRoute();
// 直接输入/404也不会输出
// 如果直接刷新本页面 那么 [redirectedFrom] 为undefined
// 只有从错误路径 被路由重定向进来的才会输出
if ($route.redirectedFrom) {
  console.log($route.redirectedFrom.fullPath);
}
</script>

<style scoped lang="scss">
.error_container {
  user-select: none;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .error_content {
    width: 300px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    .error_code {
      margin-right: 20px;
      padding-right: 23px;
      font-size: 24px;
      font-weight: 500;
      vertical-align: top;
      line-height: 49px;
      border-right: 1px solid rgba(0, 0, 0, 0.3);
    }
    .error_msg {
      font-size: 14px;
      font-weight: 400;
      line-height: 49px;
      margin: 0;
    }
  }
}
</style>
