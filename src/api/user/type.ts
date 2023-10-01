//  user/index.ts  的类型定义文件

// 登录接口的数据类型定义
export interface loginForm {
  username: string;
  password: string;
}
// 登录接口数据返回的类型
export interface loginResponseData {
  code: number;
  data: tokenData;
}
// token 的数据类型
interface tokenData {
  token?: string;
  message?: string;
}

// 用户登录  信息返回的数据类型
export interface userInfoReponseData {
  code: number;
  data: User;
}
interface User {
  checkUser: userinfo;
}
interface userinfo {
  userId: number;
  avatar: string;
  username: string;
  password: string;
  desc: string;
  roles: string[];
  buttons: string[];
  routes: string[];
  token: string;
}
