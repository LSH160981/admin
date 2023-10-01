<template>
  <!-- 顶部左侧 -->
  <div class="tabbar_left">
    <el-icon style="margin-right: 10px" @click="changIcon">
      <component :is="LayOutSettingStore.fold ? 'Fold' : 'Expand'"></component>
    </el-icon>
    <!-- 左侧面包屑 -->
    <el-breadcrumb separator-icon="ArrowRight">
      <!-- 
      在Vue3中 v-if 优先级大于 v-for
      有子路由，但是 只有一个 所以 就只显示子路由的标题
      所以这里使用v-show 判断,是否 显示layout的标题
      -->
      <!-- to:合格属性与 vue-router 的 to 属性 相同 -->
      <el-breadcrumb-item v-for="item in $route.matched" :key="item.path" v-show="item.meta.title" :to="item.path">
        <el-icon class="tabbar_left_icon">
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
// 引入路由获取 路由信息
import { useRoute } from 'vue-router';
let $route = useRoute();
// 引入 layout 组件 相关小仓库
import useLayOutSettingStore from '@/store/modules/setting';
let LayOutSettingStore = useLayOutSettingStore();

// 改变 useLayOutSettingStore 的 fold 的改变，从而改变图标
const changIcon = () => {
  LayOutSettingStore.fold = !LayOutSettingStore.fold;
};
</script>

<style scoped lang="scss">
.tabbar_left {
  display: flex;
}
.tabbar_left_icon {
  vertical-align: middle;
  margin-right: 5px;
}
</style>
