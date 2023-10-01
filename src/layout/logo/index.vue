<template>
  <div class="logo" v-if="setting.is_logo_show">
    <img :src="setting.logo" />
    <p v-show="!LayOutSettingStore.fold">{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
// 引入 logo|标题配置
import setting from '@/setting';
// 引入layout配置相关的仓库
import useLayOutSettingStore from '@/store/modules/setting';

// 实例化 layout 仓库
let LayOutSettingStore = useLayOutSettingStore();
</script>

<style scoped lang="scss">
.logo {
  width: 100%;
  height: $base-menu-logo-height;
  color: white;
  display: flex;
  align-items: center;
  padding: 10px;
  img {
    width: 40px;
    height: 40px;
  }
  p {
    font-size: $base-logo-title-fontSize;
    margin-left: 10px;
  }
}
</style>
