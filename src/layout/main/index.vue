<template>
  <!-- 二级路由出口的位置 -->
  <!-- 这个插槽自动注入 要显示的组件 -->
  <router-view v-slot="{ Component }">
    <!-- 使得组件显示|销毁 有简单的动画 -->
    <transition name="fade">
      <!-- 全局组件 Component 显示对应的组件 -->
      <component :is="Component" v-if="flag" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { watch, ref, nextTick } from 'vue';
// 引入 layout 组件 相关小仓库
import useLayOutSettingStore from '@/store/modules/setting';
let LayOutSettingStore = useLayOutSettingStore();

// 控制组件【component】是否销毁 v-if才是销毁组件 v-show只是隐藏
let flag = ref(true);

watch(
  () => LayOutSettingStore.refresh,
  () => {
    // tabbar 点击了刷新按钮-仓库数据变化-这个组件监测到了-销毁【component】
    flag.value = false;
    // nextTick:监听响应式数据发生变化 可以获取更新后的DOM
    nextTick(() => {
      // 销毁完毕-就去创建--从而达到刷新效果
      flag.value = true;
    });
  },
);
</script>

<style scoped lang="scss">
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}
.fade-enter-active {
  transition: all 0.3s;
}
.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>
