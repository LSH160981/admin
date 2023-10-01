/**
 * 对axios 的二次封装
 */

import axios from 'axios';
import { ElMessage } from 'element-plus';

// 创建实例
let request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
});

// 请求拦截器，重点就是 config.headers
request.interceptors.request.use((config) => {
  return config;
});

// 相应拦截器，两个回调函数
request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    let message = '';
    let status = error.response.status;
    switch (status) {
      case 401:
        message = 'TOKEN过期';
        break;
      case 403:
        message = '无权访问';
        break;
      case 404:
        message = '请求地址错误';
        break;
      case 500:
        message = '服务器出现问题';
        break;
      default:
        message = '网路出现错误';
        break;
    }
    ElMessage({
      type: 'error',
      message,
    });
    return Promise.reject(error);
  },
);

export default request;
