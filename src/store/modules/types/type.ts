// 小仓库的数据类型定义  useUserStore

// vue-router 维护的type
import type { RouteRecordRaw } from 'vue-router';

export interface UserState {
  token: string | null;
  menuRoutes: RouteRecordRaw[];
}
