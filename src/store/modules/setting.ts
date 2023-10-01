//  layout 组件相关配置仓库
import { defineStore } from 'pinia';

let useLayOutSettingStore = defineStore('SettingStore', {
  state: () => {
    return {
      // 这个 变量 用于控制菜单 是否折叠 false:不折叠 true:折叠
      fold: false,
      // 这个 变量 用于控制tabbar 右侧的刷新状态+
      refresh: false,
    };
  },
});

export default useLayOutSettingStore;
