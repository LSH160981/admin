import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// svg 的插件引入
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
// 引入mock
import { viteMockServe } from 'vite-plugin-mock';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      // svg 的插件配置
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        localEnabled: command === 'serve', // 保证在开发阶段可以使用mock接口
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve('./src'), // 相对路径别名配置，使用 @ 代替 src
      },
    },
    // scss 的全局变量存放路径
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          // 指定文件路径与文件命
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
  };
});
