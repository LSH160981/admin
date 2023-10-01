// pnpm yarn 安装的包都有差别 导致出现一些版本的不同而报错
// 团队必须同一 包的安装是哪一个
// 安装文件的时候必须使用npm 安装 不然退出不让安装
if (!/npm/.test(process.env.npm_execpath || '')) {
  console.warn(
    `\u001b[33mThis repository must using pnpm as the package manager ` + ` for scripts to work properly.\u001b[39m\n`,
  );
  process.exit(1);
}
