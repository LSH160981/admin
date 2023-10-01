// 把token存储在 localStorage
// 对token的增删改查

export const SET_TOKEN = (token: string) => {
  localStorage.setItem('TOKEN', token);
};

export const GET_TOKEN = () => {
  return localStorage.getItem('TOKEN');
};
