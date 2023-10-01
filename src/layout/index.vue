<template>
  <div class="layout_container">
    <!-- 左侧导航 -->
    <div class="layout_slider" :class="{ fold: LayOutSettingStore.fold ? true : false }">
      <Logo></Logo>
      <!-- 展示菜单 -->
      <!-- 滚动组件 -->
      <el-scrollbar class="scrollbar">
        <el-menu
          :default-active="$route.path"
          background-color="#313436"
          text-color="white"
          active-text-color="yellowgreen"
          :collapse="LayOutSettingStore.fold ? true : false"
        >
          <!-- 菜单组件 把仓库中的路由列表传过去 -->
          <Menu :menuList="useStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div class="layout_tabber" :class="{ fold: LayOutSettingStore.fold ? true : false }">
      <Tabbar></Tabbar>
    </div>
    <!-- 内容 -->
    <div class="layout_main" :class="{ fold: LayOutSettingStore.fold ? true : false }">
      <!-- 这里显示的是通过Main封装过的  二级路由 出口 -->
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
// 引入路由信息
import { useRoute } from 'vue-router';
// 引入左侧导航栏的子组件[logo]
import Logo from './logo/index.vue';
// 引入左侧导航栏的子组件[Menu]
import Menu from './menu/index.vue';
// 引入顶部导航栏
import Tabbar from './tabbar/index.vue';
// 引入右侧的主要内容
import Main from './main/index.vue';
// 引入layout配置相关的仓库
import useLayOutSettingStore from '@/store/modules/setting';

// 实例化 layout 仓库
let LayOutSettingStore = useLayOutSettingStore();

// 实例化
const $route = useRoute();

// 引入仓库中的路由
import useUserStore from '@/store/modules/user.ts';
let useStore = useUserStore();
</script>

<style scoped lang="scss">
.layout_container {
  overflow: hidden;
  width: 100%;
  height: 100vh;
  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;
    user-select: none;
    color: white;
    transition: all 0.3s;
    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
      .el-menu {
        border-right: none;
      }
    }
    &.fold {
      width: $base-menu-min-width;
    }
  }
  .layout_tabber {
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    position: fixed;
    top: 0;
    left: $base-menu-width;
    transition: all 0.3s;
    &.fold {
      width: calc(100% - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
  .layout_main {
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    background-color: rgb(194, 84, 204);
    position: absolute;
    top: $base-tabbar-height;
    left: $base-menu-width;
    padding: 20px;
    overflow: auto;
    transition: all 0.3s;
    &.fold {
      width: calc(100% - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>
