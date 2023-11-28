<template>
  <div>
    <el-form
      :model="formLabelAlign"
      style="max-width: 460px"
      label-width="65px"
      :rules="rules"
      class="login-form"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="formLabelAlign.username" placeholder="请输入用户名">
          <template #prefix>
            <el-icon class="el-input__icon"><User /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="密  码" prop="password">
        <el-input v-model="formLabelAlign.password" placeholder="请输入密码">
          <template #prefix>
            <el-icon class="el-input__icon"><Lock /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item class="last-item">
        <el-checkbox v-model="savePassword" label="记住密码" />
        <el-link type="danger" @click="this.$router.push('/user/reset')"
          >忘记密码</el-link
        >
      </el-form-item>
    </el-form>
    <div>
      <el-button type="danger" @click="submit">登录</el-button>
      <el-button type="danger" @click="register" style="margin-left: 35px"
        >注册</el-button
      >
    </div>
    <div style="display: flex; align-items: center; margin: 5px 0px 0px 65px">
      <span class="third-parth-text"> 社交账号登录 </span>
      <div>
        <svg
          t="1698766755095"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1825"
          width="25"
          height="25"
        >
          <path
            d="M512 73.28A438.72 438.72 0 1 0 950.72 512 438.72 438.72 0 0 0 512 73.28zM759.84 646.4c-9.6 8.16-20.8-6.08-29.76-20.32s-14.88-26.72-16-21.76a158.4 158.4 0 0 1-37.44 70.72c-1.28 1.6 28.8 12.48 37.44 35.68s24 57.6-80 68.8a145.76 145.76 0 0 1-80-16c-16.96-8.32-27.52-16-29.6-16a73.6 73.6 0 0 1-13.28 0 108 108 0 0 1-14.4 0c-1.76 0-22.24 32-113.12 32-70.4 0-88.64-44.32-74.4-68.8s37.76-32 34.4-35.36a192 192 0 0 1-34.4-57.6 98.56 98.56 0 0 1-4.16-13.44c-1.28-4.64-6.56 8.64-13.92 21.76s-14.4 22.72-22.88 22.72a11.52 11.52 0 0 1-6.56-2.4c-20.96-16-19.2-55.2-5.44-93.12s48-75.04 48-83.2c1.28-30.24-3.04-35.2 0-43.2 6.56-17.76 14.72-10.88 14.72-20.16 0-116.32 86.4-210.56 192.96-210.56s192.96 94.24 192.96 210.56c0 4.48 11.68 0 17.12 20.16a196.96 196.96 0 0 1 0 43.2c0 11.04 29.44 24.48 44.8 83.2S768 640 759.84 646.4z"
            fill="#68A5E1"
            p-id="1826"
          ></path>
        </svg>
        <svg
          t="1698766812548"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1979"
          width="25"
          height="25"
        >
          <path
            d="M564.64 529.6m-17.6 0a17.6 17.6 0 1 0 35.2 0 17.6 17.6 0 1 0-35.2 0Z"
            fill="#8DC81B"
            p-id="1980"
          ></path>
          <path
            d="M328.48 570.88c2.08 1.28 12 5.92 11.36 12.48a86.56 86.56 0 0 1-5.76 24 170.24 170.24 0 0 1 20.32-19.84 16 16 0 0 1 13.12 0 194.72 194.72 0 0 0 65.6 11.2 189.28 189.28 0 0 0 27.2-1.92 119.36 119.36 0 0 1-0.96-15.2c0-69.44 60.32-127.04 139.36-137.92-8.96-70.08-80-124.64-165.6-124.64-92.16 0-166.72 62.56-166.72 139.84a137.76 137.76 0 0 0 62.08 112z m174.72-199.2a26.4 26.4 0 1 1-26.24 26.24 26.24 26.24 0 0 1 26.24-26.24z m-140.32 0a26.4 26.4 0 0 1 0 52.64 26.4 26.4 0 1 1 0-52.64zM669.92 547.04a17.6 17.6 0 1 0-17.6-17.44 17.44 17.44 0 0 0 17.6 17.44z"
            fill="#8DC81B"
            p-id="1981"
          ></path>
          <path
            d="M512 950.72A438.72 438.72 0 1 0 73.28 512 438.72 438.72 0 0 0 512 950.72z m-78.88-666.88c104.96 0 192 69.44 200.8 158.08 88.48 3.52 158.88 64 158.88 139.68a134.24 134.24 0 0 1-68.96 113.12c-7.84 4.8 17.12 45.12 8.16 48-2.72 1.12-13.92-6.88-25.12-15.04s-22.08-16-24.8-15.04a199.84 199.84 0 0 1-56 8c-71.84 0-133.12-38.08-156.48-91.52a232.8 232.8 0 0 1-107.36-8.16c-5.44-1.76-17.92 7.68-30.56 16.96A77.28 77.28 0 0 1 302.72 656h-2.08c-5.92-3.2 18.08-53.28 12.64-56.8a167.68 167.68 0 0 1-82.08-140.32c0-96.96 90.4-175.04 201.92-175.04z"
            fill="#8DC81B"
            p-id="1982"
          ></path>
        </svg>
        <svg
          t="1698766950157"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2135"
          width="25"
          height="25"
        >
          <path
            d="M512 73.28A438.72 438.72 0 1 0 950.72 512 438.72 438.72 0 0 0 512 73.28zM301.44 266.4a52.64 52.64 0 1 1-52.64 52.64 52.64 52.64 0 0 1 52.64-52.64z m-23.68 464l-89.12-64s124.96-102.56 117.92-136.64-93.12-76.64-93.12-76.64l40-56.48s102.56 67.04 109.6 120.16-85.28 213.44-85.28 213.44z m529.44-100.16s-8.32 67.2-65.92 90.72-146.24 5.92-146.24 5.92l4.8-36.64s52.96 11.84 85.92 1.28a67.2 67.2 0 0 0 42.56-36.64V392a75.04 75.04 0 0 0-35.36-45.92c-30.72-18.72-46.08-16-79.04-11.68a393.44 393.44 0 0 0-83.68 28.16l-28.16 55.36h190.88v37.76H576v47.2h121.6v32.96l-119.04 4.64v89.6l56.64-24.8-4.64-38.88 45.92-9.44 34.08 89.6L654.08 672l-7.2-32s-106.88 45.12-149.76 48-84.96-6.72-105.44-35.68-16-87.2-16-87.2l76.16 1.92a82.08 82.08 0 0 0 9.12 54.08c15.04 20.96 48.96 16 48.96 16v-99.04l-117.76-3.52v-32H512l-1.28-47.2-36.96-7.36s-30.56 48-50.72 46.56S400 466.24 400 466.24l64.8-80-35.2-3.68-53.12 62.56-40-35.36a294.56 294.56 0 0 0 51.84-64 281.28 281.28 0 0 0 30.56-75.36l64.8 25.92-18.88 36.48s4.8 4.8 21.28 2.4 124.96-56.48 199.04-43.52 121.44 71.84 121.44 117.76z"
            fill="#FC8848"
            p-id="2136"
          ></path>
        </svg>
      </div>
    </div>
    <Vcode
      :show="isShow"
      @success="success"
      @close="close"
      @fail="fail"
    ></Vcode>
  </div>
</template>
<script>
import Vcode from "vue3-puzzle-vcode";
import { ElMessage } from "element-plus";

export default {
  name: "LogIn",
  mounted() {},
  data() {
    return {
      formLabelAlign: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur",
          },
          { min: 8, max: 16, message: "错误用户名长度！", trigger: "blur" },
        ],
        password: [
          {
            required: true,
            message: "密码不能为空！",
            trigger: "blur",
          },
        ],
      },
      isShow: false,
    };
  },
  components: {
    Vcode,
  },
  methods: {
    submit() {
      this.isShow = true;
    },
    // 用户通过了验证
    success(msg) {
      this.isShow = false;
      try {
        this.$axios({
          method: "post",
          Headers: { "Content-Type": "multipart/form-data" },
          url: "/api/token",
          data: {
            username: this.formLabelAlign.username,
            password: this.formLabelAlign.password,
          },
        }).then((res) => {
          let token = res.data.token;
          this.$cookies.set("token", token, "1d");
          this.$router.push("/chatroom");
        });
      } catch (error) {
        console.log(error.data);
      } finally {
        this.cleanFromData();
      }
    },
    // 用户点击遮罩层，应该关闭模态框
    close() {
      this.isShow = false;
      this.cleanFromData();
    },
    register() {
      this.$router.push("/user/register");
    },
    cleanFromData() {
      this.formLabelAlign = {
        username: "",
        password: "",
      };
    },
  },
};
</script>
<style>
#canvas {
  float: right;
  margin-right: 1%;
  display: block;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 80px;
}

.third-parth-text {
  font-size: 14px;
  margin-right: 5px;
}

.last-item > .el-form-item__content {
  justify-content: space-between !important;
}

.input-val {
  width: 50%;
  background: #ffffff;
  height: 2.8rem;
  border-radius: 5px;
  border: none;
  padding: 0 0 0 12px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}

.verification-code > .el-form-item__content {
  flex-wrap: nowrap;
}

.login-form > .el-form-item:last-child {
  margin-bottom: 15px;
}
</style>
