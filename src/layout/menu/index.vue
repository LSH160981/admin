<template>
  <template v-for="item in menuList" :key="item.path">
    <!--  只有一级路由 -->
    <template v-if="!item.children">
      <!-- 判断是否要展示该路由 -->
      <el-menu-item v-if="!item.meta.hidden" :index="item.path" @click="GoRouter">
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>

    <!-- 有子路由 但是 只有一个 -->
    <template v-if="item.children && item.children.length == 1">
      <!-- 判断是否要展示该路由 -->
      <el-menu-item v-if="!item.children[0].meta.hidden" :index="item.children[0].path" @click="GoRouter">
        <el-icon>
          <component :is="item.children[0].meta.icon"></component>
        </el-icon>
        <template #title>
          <!-- 展示子路由的title -->
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
    </template>

    <!--  有子路由 且 至少2个 -->
    <template v-if="item.children && item.children.length > 1">
      <!-- 判断是否要展示该路由 -->
      <el-sub-menu v-if="!item.meta.hidden" :index="item.path">
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <!-- 路由递归【要使用vue2 的组件命名】 -->
        <Menu :menuList="item.children"></Menu>
      </el-sub-menu>
    </template>
  </template>
</template>

<script setup lang="ts">
// 引入路由
import { useRouter } from 'vue-router';

//子组件接收父组件传递过来的值
defineProps(['menuList']);

const $router = useRouter();

// 菜单点击的回调 在Menu-Item Events点击事件自动注入  Menu-Item Events
const GoRouter = (vc: any) => {
  // console.log(vc.index);
  $router.push(vc.index);
};
</script>
<script lang="ts">
export default {
  // 组件命名
  name: 'Menu',
};
</script>
