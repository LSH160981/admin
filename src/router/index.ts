// 路由配置

import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import { constantRouters } from './routers';

let router = createRouter({
  history: createWebHistory(),
  // history: createWebHashHistory(),
  routes: constantRouters,
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    };
  },
});

export default router;
