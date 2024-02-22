<template>
  <div
    class="back-to-top cd-top faa-float animated cd-is-visible"
    style="top: -999px; right: 20px"
  ></div>
  <div :class="background_theme[current_theme]" style="min-height: 100vh">
    <header id="header">
      <nav class="common-header">
        <div class="contain">
          <el-image
            :src="require('@/assets/images/logo/logo4.png')"
            style="height: 44px"
          ></el-image>
          <div class="header-nav" v-if="at_top">
            <ul id="nav">
              <li class="slide1"></li>
              <li class="slide2"></li>
              <li v-for="nav in nav_list" :key="nav" class="nav-item">
                <a :href="nav.url" name="items"
                  ><div
                    v-bind:style="{
                      backgroundImage: 'url(' + nav.icon + ')',
                      width: '20px',
                      height: '20px',
                      display: 'block',
                      'background-repeat': 'no-repeat',
                      'background-size': 'cover',
                    }"
                  ></div>
                  <span>{{ nav.title }}</span></a
                >
              </li>
            </ul>
          </div>
          <div class="user-nav">
            <div v-if="user == undefined" style="cursor: pointer">登录</div>
            <div v-else style="display: flex">
              <el-popover
                placement="bottom"
                :width="50"
                trigger="hover"
                style="padding: 0px"
              >
                <div class="user-center">
                  <div>
                    <svg
                      t="1708093395673"
                      class="icon"
                      viewBox="0 0 1029 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="7296"
                      width="20"
                      height="20"
                    >
                      <path
                        d="M1001.423238 494.592q21.504 20.48 22.528 45.056t-16.384 40.96q-19.456 17.408-45.056 16.384t-40.96-14.336q-5.12-4.096-31.232-28.672t-62.464-58.88-77.824-73.728-78.336-74.24-63.488-60.416-33.792-31.744q-32.768-29.696-64.512-28.672t-62.464 28.672q-10.24 9.216-38.4 35.328t-65.024 60.928-77.824 72.704-75.776 70.656-59.904 55.808-30.208 27.136q-15.36 12.288-40.96 13.312t-44.032-15.36q-20.48-18.432-19.456-44.544t17.408-41.472q6.144-6.144 37.888-35.84t75.776-70.656 94.72-88.064 94.208-88.064 74.752-70.144 36.352-34.304q38.912-37.888 83.968-38.4t76.8 30.208q6.144 5.12 25.6 24.064t47.616 46.08 62.976 60.928 70.656 68.096 70.144 68.096 62.976 60.928 48.128 46.592zM447.439238 346.112q25.6-23.552 61.44-25.088t64.512 25.088q3.072 3.072 18.432 17.408l38.912 35.84q22.528 21.504 50.688 48.128t57.856 53.248q68.608 63.488 153.6 142.336l0 194.56q0 22.528-16.896 39.936t-45.568 18.432l-193.536 0 0-158.72q0-33.792-31.744-33.792l-195.584 0q-17.408 0-24.064 10.24t-6.656 23.552q0 6.144-0.512 31.232t-0.512 53.76l0 73.728-187.392 0q-29.696 0-47.104-13.312t-17.408-37.888l0-203.776q83.968-76.8 152.576-139.264 28.672-26.624 57.344-52.736t52.224-47.616 39.424-36.352 19.968-18.944z"
                        p-id="7297"
                      ></path>
                    </svg>
                    <span>个人中心</span>
                  </div>
                  <div @click="logOut">
                    <svg
                      t="1708092505157"
                      class="icon"
                      viewBox="0 0 1042 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="7002"
                      width="20"
                      height="20"
                    >
                      <path
                        d="M581.632 697.344l126.976 0 0 194.56q0 33.792-10.24 58.88t-27.136 40.96-39.424 23.552-48.128 7.68l-452.608 0q-24.576 0-48.128-9.728t-41.472-27.136-29.184-40.96-11.264-52.224l0-706.56q0-24.576 11.776-47.104t30.208-39.936 40.96-28.16 45.056-10.752l449.536 0q26.624 0 50.176 11.776t41.472 29.696 28.16 40.448 10.24 44.032l0 188.416-126.976 0 1.024-195.584-452.608 0-1.024 713.728 452.608 0 0-195.584zM1021.952 505.856q37.888 30.72 2.048 60.416-20.48 15.36-44.544 37.888t-50.176 46.592-51.712 47.616-47.104 40.96q-23.552 18.432-40.448 18.432t-16.896-24.576q2.048-14.336 0.512-35.84t-1.536-36.864q0-17.408-12.288-21.504t-29.696-4.096l-40.96 0-62.464 0q-34.816 0-73.216-0.512t-73.216-0.512l-62.464 0-41.984 0q-8.192 0-17.92-1.536t-17.408-6.656-12.288-14.336-4.608-23.552q0-19.456-0.512-46.08t0.512-47.104q0-27.648 13.312-37.888t43.008-9.216l33.792 0 59.392 0q32.768 0 70.144 0.512t71.168 0.512l61.44 0 38.912 0q25.6 1.024 43.52-4.096t17.92-22.528q0-14.336 1.024-32.256t1.024-32.256q0-23.552 12.8-29.696t32.256 9.216q19.456 16.384 45.568 38.4t52.736 45.056 52.736 45.568 47.616 39.936z"
                        p-id="7003"
                      ></path></svg
                    ><span>退出</span>
                  </div>
                </div>
                <template #reference>
                  <el-avatar
                    :src="user.user_avatar"
                    class="avatar-user"
                  ></el-avatar>
                </template>
              </el-popover>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <router-view></router-view>
    <footer>
      <div
        class="footer-item"
        style="display: flex; align-items: center; justify-content: center"
      >
        <b>©2023-2024 by Heimdall</b>
      </div>
      <div style="display: flex; align-items: center; justify-content: center">
        <b>Author - 小火龙</b
        ><img
          :src="require('@/assets/images/icons/小火龙.png')"
          style="width: 25px"
        />
      </div>
      <div class="fouter-item">
        本站已经稳定运行了{{ Math.floor(second / 60 / 60 / 60) }}天{{
          Math.floor((second % (60 * 60 * 60)) / (60 * 60))
        }}时{{ Math.floor(((second % (60 * 60 * 60)) % (60 * 60)) / 60) }}分{{
          Math.floor(((second % (60 * 60 * 60)) % (60 * 60)) % 60)
        }}秒啦！
      </div>
      <div class="badge-list">
        <img
          alt="Static Badge"
          src="https://img.shields.io/badge/Python-3.10-blue?logo=python"
        /><img
          alt="Static Badge"
          src="https://img.shields.io/badge/Source-Github-red?logo=github"
        /><img
          alt="Static Badge"
          src="https://img.shields.io/badge/Analytics-51la-green?logo=simpleanalytics"
        />
      </div>
    </footer>
  </div>
</template>
<script setup>
import "@/assets/css/homebase.css";
import "@/assets/css/cat.css";
import "@/assets/js/cat.js";
import { defineExpose, ref, onMounted, getCurrentInstance } from "vue";
import requests from "@/request/request";
import { ElMessage } from "element-plus";

var second = ref(0);
var user = ref();
onMounted(() => {
  setInterval(() => {
    second.value += 1;
  }, 1000);
});
var instance = getCurrentInstance();
const globalProperties = instance.appContext.config.globalProperties;
// globalProperties.$cookies.remove("token");
globalProperties.$cookies.set(
  "token",
  "699072c7d66a8c8b1c73366d8fc605bcd8b1db64"
);

if (globalProperties.$cookies.get("token")) {
  requests({
    method: "get",
    Headers: { "Content-Type": "multipart/form-data" },
    url: "/api/user/",
  }).then((res) => {
    if (res.data.code == 10001) {
      user.value = res.data.data;
    }
  });
}

function logOut() {
  try {
    globalProperties.$cookies.remove("token");
    user.value = undefined;
    ElMessage.success("退出成功！");
  } catch (e) {
    ElMessage.error("退出失败！原因:" + e);
  }
}

window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop == 0) {
    // console.log(document.getElementsByName("items"));
    document.getElementById("header").style.background = "none";
  } else {
    document.getElementById("header").style.background =
      "linear-gradient(rgba(0,0,0,1),rgba(0,0,0,0)";
  }
});
const nav_list = [
  {
    title: "首页",
    url: "#",
    icon: require("../../assets/images/icons/主页.png"),
  },
  {
    title: "网站",
    url: "#",
    icon: require("../../assets/images/icons/图.png"),
  },
];
var nav_setting = {
  top: {
    color: "#000",
    opacity: 0,
  },
  fixed: {
    color: "#fff",
    background: "#000",
  },
};

var background_theme = {
  normal: "theme_1",
};
var current_theme = "normal";
var at_top = true;
defineExpose({
  nav_list,
  nav_setting,
  background_theme,
  current_theme,
  at_top,
  user,
  second,
});
</script>
