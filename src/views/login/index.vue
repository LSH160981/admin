<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form" :model="loginForm" :rules="rules" ref="ruleFormRef">
          <h1>Hello</h1>
          <h2>后台管理系统</h2>
          <el-form-item prop="username">
            <!-- prefix-icon:输入框头部图标 -->
            <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input :prefix-icon="Lock" type="password" v-model="loginForm.password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="login_btn" @click="login()" :loading="loding">登陆</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
// ele的图标组件
import { User, Lock } from '@element-plus/icons-vue';

// 引入Ele提示
import { ElNotification } from 'element-plus';

// 引入时间
import { getTime } from '@/utils/time';

// 引入user仓库
import useUserStore from '@/store/modules/user';
let userLogin = useUserStore(); // 实例化仓库

// 引入路由
import { useRouter } from 'vue-router';
let $router = useRouter(); // 实例化路由

import { reactive, ref } from 'vue';

// 是否开启 加载效果 false:关闭 ture:打开
let loding = ref(false);
// 收集用户账号密码
let loginForm = reactive({
  username: 'admin',
  password: '111111',
});

// 自定义的校验规则
const validatorUserName = (rule: any, value: any, callback: any) => {
  rule = rule; // 为了解决ts的定义却不使用才写的这句   作用：无，不写ts就报红 ---实际情况可以用 【_】代替
  // 这三个是ele插件自动在 自定义校验规则中插入的
  // rule: 校验规则对象 用得少
  // value: 需要校验的内用(表单的文本)
  // callback: 放行函数 直接使用为放行，抛出错误 callback(new Error("对应的提示信息"))
  if (/^\w{5,10}$/.test(value)) {
    callback();
  } else {
    callback(new Error('账号必须长度必须在5-10之间'));
  }
};

const validatorPassword = (_: any, value: any, callback: any) => {
  if (/^\w{6,15}$/.test(value)) {
    callback();
  } else {
    callback(new Error('密码必须长度必须在6-15之间'));
  }
};

// 校验规则
const rules = {
  /**
   * 检验字段属性
   * required 为true 必须输入
   * min 最短
   * max 最长
   * message 提示的错误信息
   * trigger 触发验证时机 blur:失去焦点时  change:文本发生改变时
   */
  // username: [
  //   {
  //     required: true,
  //     min: 5,
  //     max: 10,
  //     message: '账号长度必须在5-10之间',
  //     trigger: 'blur',
  //   },
  // ],
  // 自定义规则
  username: [{ validator: validatorUserName, trigger: 'change' }],

  // password: [
  //   {
  //     required: true,
  //     min: 6,
  //     max: 15,
  //     message: '密码长度必须在6-15之间',
  //     trigger: 'change',
  //   },
  // ],
  password: [{ validator: validatorPassword, trigger: 'change' }],
};

// 获取表单实例
const ruleFormRef = ref();

// 登录按钮 回调
let login = async () => {
  // 确保所有的校验规则通过才能发请求
  // validate 对整个表单的内容进行验证。接收一个回调函数，或返回 Promise。
  await ruleFormRef.value.validate();

  // 开始加载效果
  loding.value = true;
  try {
    // 等待返回的标识  如果这次登录成功，继续跑try的语句，失败就跑catch语句
    await userLogin.userLogin(loginForm);
    // 提示成功信息
    ElNotification({
      type: 'success',
      message: '欢迎回来',
      title: `Hi,${getTime()}好`,
    });
    // 关闭加载效果
    loding.value = false;
    // 编程式导航-->去往主页
    $router.push('/');
  } catch (error) {
    // 提示失败信息
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    });
    // 关闭加载效果
    loding.value = false;
  }
};
</script>

<style scoped lang="scss">
.login_container {
  // 不允许选择
  user-select: none;
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  .login_form {
    width: 70%;
    position: relative;
    top: 30vh;
    padding: 40px;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    border-radius: 15px;
  }
  @media screen and (max-width: 768px) {
    /* 在屏幕宽度小于等于 768 像素时应用这些样式 */
    .login_form {
      margin: 0 auto;
    }
  }
  h1 {
    color: white;
    font-size: 40px;
  }
  h2 {
    color: white;
    font-size: 20px;
    margin: 20px 0;
  }
  .login_btn {
    width: 100%;
  }
}
</style>
