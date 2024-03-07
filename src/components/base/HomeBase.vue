<template>
  <div
    style="
      min-height: 100vh;
      background-repeat: no-repeat;
      background-size: cover;
    "
    id="main"
  >
    <header id="header">
      <nav
        id="nav-header"
        class="common-header header-type-1 animate__animated"
      >
        <div class="contain">
          <span style="font-size: 20px"><b>HEIMDALL</b></span>
          <div class="header-nav" v-if="at_top">
            <ul id="nav">
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
                    alt="用户头像"
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
        ><el-image
          :src="require('@/assets/images/icons/小火龙.png')"
          style="width: 25px"
          lazy
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="101"
          height="20"
          role="img"
          aria-label="Python: 3.10"
        >
          <title>Python: 3.10</title>
          <linearGradient id="s" x2="0" y2="100%">
            <stop offset="0" stop-color="#bbb" stop-opacity=".1" />
            <stop offset="1" stop-opacity=".1" />
          </linearGradient>
          <clipPath id="r">
            <rect width="101" height="20" rx="3" fill="#fff" />
          </clipPath>
          <g clip-path="url(#r)">
            <rect width="66" height="20" fill="#555" />
            <rect x="66" width="35" height="20" fill="#007ec6" />
            <rect width="101" height="20" fill="url(#s)" />
          </g>
          <g
            fill="#fff"
            text-anchor="middle"
            font-family="Verdana,Geneva,DejaVu Sans,sans-serif"
            text-rendering="geometricPrecision"
            font-size="110"
          >
            <image
              x="5"
              y="3"
              width="14"
              height="14"
              xlink:href="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMzc3NkFCIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+UHl0aG9uPC90aXRsZT48cGF0aCBkPSJNMTQuMjUuMThsLjkuMi43My4yNi41OS4zLjQ1LjMyLjM0LjM0LjI1LjM0LjE2LjMzLjEuMy4wNC4yNi4wMi4yLS4wMS4xM1Y4LjVsLS4wNS42My0uMTMuNTUtLjIxLjQ2LS4yNi4zOC0uMy4zMS0uMzMuMjUtLjM1LjE5LS4zNS4xNC0uMzMuMS0uMy4wNy0uMjYuMDQtLjIxLjAySDguNzdsLS42OS4wNS0uNTkuMTQtLjUuMjItLjQxLjI3LS4zMy4zMi0uMjcuMzUtLjIuMzYtLjE1LjM3LS4xLjM1LS4wNy4zMi0uMDQuMjctLjAyLjIxdjMuMDZIMy4xN2wtLjIxLS4wMy0uMjgtLjA3LS4zMi0uMTItLjM1LS4xOC0uMzYtLjI2LS4zNi0uMzYtLjM1LS40Ni0uMzItLjU5LS4yOC0uNzMtLjIxLS44OC0uMTQtMS4wNS0uMDUtMS4yMy4wNi0xLjIyLjE2LTEuMDQuMjQtLjg3LjMyLS43MS4zNi0uNTcuNC0uNDQuNDItLjMzLjQyLS4yNC40LS4xNi4zNi0uMS4zMi0uMDUuMjQtLjAxaC4xNmwuMDYuMDFoOC4xNnYtLjgzSDYuMThsLS4wMS0yLjc1LS4wMi0uMzcuMDUtLjM0LjExLS4zMS4xNy0uMjguMjUtLjI2LjMxLS4yMy4zOC0uMi40NC0uMTguNTEtLjE1LjU4LS4xMi42NC0uMS43MS0uMDYuNzctLjA0Ljg0LS4wMiAxLjI3LjA1em0tNi4zIDEuOThsLS4yMy4zMy0uMDguNDEuMDguNDEuMjMuMzQuMzMuMjIuNDEuMDkuNDEtLjA5LjMzLS4yMi4yMy0uMzQuMDgtLjQxLS4wOC0uNDEtLjIzLS4zMy0uMzMtLjIyLS40MS0uMDktLjQxLjA5em0xMy4wOSAzLjk1bC4yOC4wNi4zMi4xMi4zNS4xOC4zNi4yNy4zNi4zNS4zNS40Ny4zMi41OS4yOC43My4yMS44OC4xNCAxLjA0LjA1IDEuMjMtLjA2IDEuMjMtLjE2IDEuMDQtLjI0Ljg2LS4zMi43MS0uMzYuNTctLjQuNDUtLjQyLjMzLS40Mi4yNC0uNC4xNi0uMzYuMDktLjMyLjA1LS4yNC4wMi0uMTYtLjAxaC04LjIydi44Mmg1Ljg0bC4wMSAyLjc2LjAyLjM2LS4wNS4zNC0uMTEuMzEtLjE3LjI5LS4yNS4yNS0uMzEuMjQtLjM4LjItLjQ0LjE3LS41MS4xNS0uNTguMTMtLjY0LjA5LS43MS4wNy0uNzcuMDQtLjg0LjAxLTEuMjctLjA0LTEuMDctLjE0LS45LS4yLS43My0uMjUtLjU5LS4zLS40NS0uMzMtLjM0LS4zNC0uMjUtLjM0LS4xNi0uMzMtLjEtLjMtLjA0LS4yNS0uMDItLjIuMDEtLjEzdi01LjM0bC4wNS0uNjQuMTMtLjU0LjIxLS40Ni4yNi0uMzguMy0uMzIuMzMtLjI0LjM1LS4yLjM1LS4xNC4zMy0uMS4zLS4wNi4yNi0uMDQuMjEtLjAyLjEzLS4wMWg1Ljg0bC42OS0uMDUuNTktLjE0LjUtLjIxLjQxLS4yOC4zMy0uMzIuMjctLjM1LjItLjM2LjE1LS4zNi4xLS4zNS4wNy0uMzIuMDQtLjI4LjAyLS4yMVY2LjA3aDIuMDlsLjE0LjAxem0tNi40NyAxNC4yNWwtLjIzLjMzLS4wOC40MS4wOC40MS4yMy4zMy4zMy4yMy40MS4wOC40MS0uMDguMzMtLjIzLjIzLS4zMy4wOC0uNDEtLjA4LS40MS0uMjMtLjMzLS4zMy0uMjMtLjQxLS4wOC0uNDEuMDh6Ii8+PC9zdmc+"
            />
            <text
              aria-hidden="true"
              x="425"
              y="150"
              fill="#010101"
              fill-opacity=".3"
              transform="scale(.1)"
              textLength="390"
            >
              Python
            </text>
            <text
              x="425"
              y="140"
              transform="scale(.1)"
              fill="#fff"
              textLength="390"
            >
              Python
            </text>
            <text
              aria-hidden="true"
              x="825"
              y="150"
              fill="#010101"
              fill-opacity=".3"
              transform="scale(.1)"
              textLength="250"
            >
              3.10
            </text>
            <text
              x="825"
              y="140"
              transform="scale(.1)"
              fill="#fff"
              textLength="250"
            >
              3.10
            </text>
          </g></svg
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="113"
          height="20"
          role="img"
          aria-label="Source: Github"
        >
          <title>Source: Github</title>
          <linearGradient id="s" x2="0" y2="100%">
            <stop offset="0" stop-color="#bbb" stop-opacity=".1" />
            <stop offset="1" stop-opacity=".1" />
          </linearGradient>
          <clipPath id="r">
            <rect width="113" height="20" rx="3" fill="#fff" />
          </clipPath>
          <g clip-path="url(#r)">
            <rect width="66" height="20" fill="#555" />
            <rect x="66" width="47" height="20" fill="#e05d44" />
            <rect width="113" height="20" fill="url(#s)" />
          </g>
          <g
            fill="#fff"
            text-anchor="middle"
            font-family="Verdana,Geneva,DejaVu Sans,sans-serif"
            text-rendering="geometricPrecision"
            font-size="110"
          >
            <image
              x="5"
              y="3"
              width="14"
              height="14"
              xlink:href="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZXNtb2tlIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+R2l0SHViPC90aXRsZT48cGF0aCBkPSJNMTIgLjI5N2MtNi42MyAwLTEyIDUuMzczLTEyIDEyIDAgNS4zMDMgMy40MzggOS44IDguMjA1IDExLjM4NS42LjExMy44Mi0uMjU4LjgyLS41NzcgMC0uMjg1LS4wMS0xLjA0LS4wMTUtMi4wNC0zLjMzOC43MjQtNC4wNDItMS42MS00LjA0Mi0xLjYxQzQuNDIyIDE4LjA3IDMuNjMzIDE3LjcgMy42MzMgMTcuN2MtMS4wODctLjc0NC4wODQtLjcyOS4wODQtLjcyOSAxLjIwNS4wODQgMS44MzggMS4yMzYgMS44MzggMS4yMzYgMS4wNyAxLjgzNSAyLjgwOSAxLjMwNSAzLjQ5NS45OTguMTA4LS43NzYuNDE3LTEuMzA1Ljc2LTEuNjA1LTIuNjY1LS4zLTUuNDY2LTEuMzMyLTUuNDY2LTUuOTMgMC0xLjMxLjQ2NS0yLjM4IDEuMjM1LTMuMjItLjEzNS0uMzAzLS41NC0xLjUyMy4xMDUtMy4xNzYgMCAwIDEuMDA1LS4zMjIgMy4zIDEuMjMuOTYtLjI2NyAxLjk4LS4zOTkgMy0uNDA1IDEuMDIuMDA2IDIuMDQuMTM4IDMgLjQwNSAyLjI4LTEuNTUyIDMuMjg1LTEuMjMgMy4yODUtMS4yMy42NDUgMS42NTMuMjQgMi44NzMuMTIgMy4xNzYuNzY1Ljg0IDEuMjMgMS45MSAxLjIzIDMuMjIgMCA0LjYxLTIuODA1IDUuNjI1LTUuNDc1IDUuOTIuNDIuMzYuODEgMS4wOTYuODEgMi4yMiAwIDEuNjA2LS4wMTUgMi44OTYtLjAxNSAzLjI4NiAwIC4zMTUuMjEuNjkuODI1LjU3QzIwLjU2NSAyMi4wOTIgMjQgMTcuNTkyIDI0IDEyLjI5N2MwLTYuNjI3LTUuMzczLTEyLTEyLTEyIi8+PC9zdmc+"
            />
            <text
              aria-hidden="true"
              x="425"
              y="150"
              fill="#010101"
              fill-opacity=".3"
              transform="scale(.1)"
              textLength="390"
            >
              Source
            </text>
            <text
              x="425"
              y="140"
              transform="scale(.1)"
              fill="#fff"
              textLength="390"
            >
              Source
            </text>
            <text
              aria-hidden="true"
              x="885"
              y="150"
              fill="#010101"
              fill-opacity=".3"
              transform="scale(.1)"
              textLength="370"
            >
              Github
            </text>
            <text
              x="885"
              y="140"
              transform="scale(.1)"
              fill="#fff"
              textLength="370"
            >
              Github
            </text>
          </g></svg
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="109"
          height="20"
          role="img"
          aria-label="Analytics: 51la"
        >
          <title>Analytics: 51la</title>
          <linearGradient id="s" x2="0" y2="100%">
            <stop offset="0" stop-color="#bbb" stop-opacity=".1" />
            <stop offset="1" stop-opacity=".1" />
          </linearGradient>
          <clipPath id="r">
            <rect width="109" height="20" rx="3" fill="#fff" />
          </clipPath>
          <g clip-path="url(#r)">
            <rect width="76" height="20" fill="#555" />
            <rect x="76" width="33" height="20" fill="#97ca00" />
            <rect width="109" height="20" fill="url(#s)" />
          </g>
          <g
            fill="#fff"
            text-anchor="middle"
            font-family="Verdana,Geneva,DejaVu Sans,sans-serif"
            text-rendering="geometricPrecision"
            font-size="110"
          >
            <image
              x="5"
              y="3"
              width="14"
              height="14"
              xlink:href="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkY0RjY0IiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+U2ltcGxlIEFuYWx5dGljczwvdGl0bGU+PHBhdGggZD0iTTEuMDE5IDEzLjAxOWgzLjg0OVYyNGgtMy44NXptOC45NDMtNi42OGgzLjg1VjI0aC0zLjg1ek0xOS4xMzIgMGgzLjg1djI0aC0zLjg1eiIvPjwvc3ZnPg=="
            />
            <text
              aria-hidden="true"
              x="475"
              y="150"
              fill="#010101"
              fill-opacity=".3"
              transform="scale(.1)"
              textLength="490"
            >
              Analytics
            </text>
            <text
              x="475"
              y="140"
              transform="scale(.1)"
              fill="#fff"
              textLength="490"
            >
              Analytics
            </text>
            <text
              aria-hidden="true"
              x="915"
              y="150"
              fill="#010101"
              fill-opacity=".3"
              transform="scale(.1)"
              textLength="230"
            >
              51la
            </text>
            <text
              x="915"
              y="140"
              transform="scale(.1)"
              fill="#fff"
              textLength="230"
            >
              51la
            </text>
          </g>
        </svg>
      </div>
    </footer>
  </div>
</template>
<script setup>
import "@/assets/css/homebase.css";
import "@/assets/css/cat.css";
import "@/assets/js/cat.js";
import { ref, onMounted, getCurrentInstance, inject } from "vue";
import requests from "@/request/request";
import { ElMessage } from "element-plus";

var background = inject("background", "none");
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

window.addEventListener("mousewheel", (e) => {
  if (e.deltaY > 0) {
    document.getElementById("nav-header").classList.remove("animate__fadeIn");
    document.getElementById("nav-header").classList.add("animate__fadeOut");
  } else {
    document.getElementById("nav-header").classList.remove("animate__fadeOut");
    document.getElementById("nav-header").classList.add("animate__fadeIn");
  }
});

window.addEventListener("scroll", function () {
  const nav = document.getElementById("nav-header").classList;
  if (document.documentElement.scrollTop == 0) {
    nav.replace("header-type-2", "header-type-1");
  } else {
    nav.replace("header-type-1", "header-type-2");
  }
});
const nav_list = [
  {
    title: "首页",
    url: "/",
    icon: require("../../assets/images/icons/主页.png"),
  },
  {
    title: "友链",
    url: "/friends",
    icon: require("../../assets/images/icons/图.png"),
  },
];

var at_top = true;
</script>
