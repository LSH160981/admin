import { createApp } from 'vue';
import App from '@/App.vue';
const app = createApp(App);

// 引入基础样式
import '@/styles/index.scss';

// 引入element-plus插件与样式
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'; // 中文语言包
app.use(ElementPlus, {
  locale: zhCn,
});

// 引入svg相关插件插件
import 'virtual:svg-icons-register';

// 引入自定义插件：注册全局插件
import globalComponent from '@/components';
// 安装自定义插件
app.use(globalComponent);

// 引入路由
import router from '@/router';
app.use(router);

// 引入pinia
import pinia from '@/store/index';
app.use(pinia);

app.mount('#app');
// console.log(import.meta.env)
