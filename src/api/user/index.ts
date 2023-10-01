// 有关用户信息的接口管理

import request from '@/utils/request';
// 引入类型定义
import { loginForm, loginResponseData, userInfoReponseData } from './type';

// 同一接口管理
enum API {
  LOGIN_URL = '/user/login',
  USERINGO_URL = '/user/info',
}

// 登录
export const reqLogin = (data: loginForm) => request.post<any, loginResponseData>(API.LOGIN_URL, data);

// 获取用户信息
export const reqUserInfo = () => request.get<any, userInfoReponseData>(API.USERINGO_URL);
