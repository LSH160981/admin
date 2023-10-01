<template>
  <div class="tabbar_right">
    <!-- 刷新按钮 -->
    <el-button icon="Refresh" circle @click="updateRefsh" />
    <!-- 全屏按钮 -->
    <el-button icon="FullScreen" circle @click="fullScreen" />
    <!-- 设置按钮 -->
    <el-button icon="Setting" circle />
    <img src="" style="margin: 0px 10px; width: 24px; height: 24px" />
    <el-dropdown>
      <span class="el-dropdown-link">
        admin
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
// 引入 layout 组件 相关小仓库
import useLayOutSettingStore from '@/store/modules/setting';
let LayOutSettingStore = useLayOutSettingStore();
// 退出登录
const logout = () => {
  // 后续相关的操作   1.通知仓库 清除token等有关用户数据 2.重定向login
  console.log('退出登录');
};
// 刷新 ---> 通过更改小仓库中的变量，通知main组件 刷新(销毁及创建)
const updateRefsh = () => {
  LayOutSettingStore.refresh = !LayOutSettingStore.refresh;
};

// 全屏按钮 主流内核的浏览器已兼容
const fullScreen = () => {
  const element = document.documentElement as HTMLElement;

  // 检查是否已经在全屏模式下
  if (
    document.fullscreenElement || // 标准全屏模式
    (document as any).mozFullScreenElement || // Firefox
    (document as any).webkitFullscreenElement || // Chrome, Safari, Edge
    (document as any).msFullscreenElement // IE
  ) {
    // 如果已经处于全屏模式，退出全屏

    // 标准退出全屏
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    // Firefox
    else if ((document as any).mozCancelFullScreen) {
      (document as any).mozCancelFullScreen();
    }
    // Chrome, Safari, Edge
    else if ((document as any).webkitExitFullscreen) {
      (document as any).webkitExitFullscreen();
    }
    // IE
    else if ((document as any).msExitFullscreen) {
      (document as any).msExitFullscreen();
    }
  } else {
    // 不处于全屏 要进入全屏模式

    // 标准进入全屏
    if (element.requestFullscreen) {
      element.requestFullscreen();
    }
    // Firefox
    else if ((element as any).mozRequestFullScreen) {
      (element as any).mozRequestFullScreen();
    }
    // Chrome, Safari, Edge
    else if ((element as any).webkitRequestFullscreen) {
      (element as any).webkitRequestFullscreen();
    }
    // IE
    else if ((element as any).msRequestFullscreen) {
      (element as any).msRequestFullscreen();
    }
  }
};
</script>

<style scoped lang="scss">
.tabbar_right {
  display: flex;
  align-items: center;
}
</style>
