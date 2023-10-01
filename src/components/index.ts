// ***********************  这里是自定义插件 ************************ //
// *************** 作用:把全局组件,自动注册为全局组件 **************** //

// 因为文件有ts报错，所以引入Vue的类型
import { App, ComponentOptions } from 'vue';
// 导入所有element-plus图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

// 引入需要注册成为全局组件的组件
import SvgIcon from './SvgIcon/index.vue';
import Pagination from './Pagination/index.vue';

// 全局对象
const allGlobalCompont: { [name: string]: ComponentOptions } = {
  SvgIcon,
  Pagination,
};

export default {
  // 当使用插件时,会给install方法自动注入app,这个app就是入口函数的大哥大由createApp返回的!
  install(app: App) {
    // 这里就是遍历把每一个组件进行注册为全局组件
    Object.keys(allGlobalCompont).forEach((key) => {
      app.component(key, allGlobalCompont[key]);
    });
    // 所有element-plus图标 进行全局注册
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  },
};
