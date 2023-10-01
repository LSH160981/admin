// 获取时间状态
// 根据用户的时间返回 "早上" | "上午" | "下午" | "晚上"

export const getTime = () => {
  let currentTime = new Date();
  let currentHour = currentTime.getHours();
  if (currentHour >= 5 && currentHour < 9) {
    return '早上';
  } else if (currentHour >= 9 && currentHour < 12) {
    return '上午';
  } else if (currentHour >= 12 && currentHour < 18) {
    return '下午';
  } else {
    return '晚上';
  }
};
