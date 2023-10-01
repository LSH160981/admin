// 小仓库   useUserStore

// 引入小仓库的构造函数
import { defineStore } from 'pinia';
// 引入API请求
import { reqLogin } from '@/api/user';
// ts类型
import type { loginForm, loginResponseData } from '@/api/user/type';
import type { UserState } from './types/type';
// 引入工具：对token的操作
import { SET_TOKEN, GET_TOKEN } from '@/utils/token';

// 引入路由(常量路由)
import { constantRouters } from '@/router/routers';

// 实例化User小仓库
const useUserStore = defineStore('UserStore', {
  state: (): UserState => {
    return {
      token: GET_TOKEN(), // 获取用户唯一标识 token
      menuRoutes: constantRouters, // 仓库存储生成菜单需要的数组（路由
    };
  },
  getters: {},
  actions: {
    // 登录请求 获取token
    async userLogin(data: loginForm) {
      let result: loginResponseData = await reqLogin(data);
      if (result.code == 200) {
        this.token = result.data.token as string;
        // 持久化token
        SET_TOKEN(this.token);
        // 返回成功登录的标识
        return 'ok';
      } else {
        // 返回失败标识
        return Promise.reject(new Error(result.data.message));
      }
    },
  },
});

export default useUserStore;
