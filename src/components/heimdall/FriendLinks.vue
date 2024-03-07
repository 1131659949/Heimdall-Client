<template>
  <div class="loading animate__animated" ref="loading">
    <JumpLoading :src="require('@/assets/images/me.jpg')" alt=""></JumpLoading>
  </div>
  <div class="friend-container">
    <div
      style="display: flex; position: relative"
      class="blur-format self-card"
    >
      <el-avatar
        :src="require('@/assets/images/me.jpg')"
        :size="200"
        alt="站长"
      ></el-avatar>
      <div style="margin-left: 25px; flex: 1">
        <div class="self-name">Hi, Heimdall</div>

        <div class="self-description">你不干，有的是帕鲁干！</div>
        <div style="display: flex" class="github-line">
          <div class="github-info">{{ subscribers.length }} Subscribers</div>
          <div class="github-info">{{ starers.length }} Stars</div>
        </div>
        <div class="">正在努力成为一枚合格的帕鲁ing...</div>
      </div>
      <div style="display: flex">
        <div style="margin-right: 15px">
          <button class="rss-button">
            <svg
              t="1709732305714"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="5098"
              width="24"
              height="24"
            >
              <path
                d="M170.666667 810.666667m-128 0a128 128 0 1 0 256 0 128 128 0 1 0-256 0Z"
                fill="#FF6600"
                p-id="5099"
              ></path>
              <path
                d="M938.666667 938.666667h-170.666667c0-399.957333-325.376-725.333333-725.333333-725.333334V42.666667c494.037333 0 896 401.92 896 896z"
                fill="#FF6600"
                p-id="5100"
              ></path>
              <path
                d="M640 938.666667h-170.666667c0-235.264-191.424-426.666667-426.666666-426.666667v-170.666667c329.386667 0 597.333333 267.946667 597.333333 597.333334z"
                fill="#FF6600"
                p-id="5101"
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <button class="favorite-button">
            <div class="icon">
              <div class="star"></div>
            </div>
            <span>Go Star</span>
          </button>
        </div>
      </div>
    </div>
    <div class="blur-format friend-link">
      <div>
        <div class="subtitle-format">
          <svg x="0px" y="0px" viewBox="0 0 30 30">
            <path
              fill="#bae0bd"
              d="M11.31,10.031c-0.458-1.306,0.289-2.804,0.296-2.819l0.13-0.256l-0.221-0.181 c-0.019-0.015-1.849-1.551-1.02-3.403c0.923-2.062,4.019-2.311,6.326-1.279c3.546,1.587,5.258,4.74,5.678,5.556 c-1.3,0.836-5.524,5.499-9.659,3.913C12.039,11.254,11.542,10.696,11.31,10.031z"
            ></path>
            <path
              fill="#5e9c76"
              d="M14.625,12.391c-0.646,0-1.304-0.109-1.963-0.362c-0.894-0.343-1.524-0.977-1.823-1.832l0,0 c-0.457-1.304,0.104-2.727,0.275-3.11C10.717,6.718,9.17,5.111,10.04,3.168c0.498-1.112,1.57-1.854,3.021-2.09 c1.266-0.206,2.714-0.003,3.966,0.559c3.33,1.49,5.137,4.263,5.918,5.783l0.207,0.403l-0.381,0.246 c-0.211,0.136-0.547,0.416-0.936,0.742C20.254,10.134,17.558,12.391,14.625,12.391z M14.067,1.999 c-0.289,0-0.573,0.022-0.847,0.066c-0.641,0.104-1.788,0.438-2.267,1.511c-0.666,1.488,0.821,2.763,0.885,2.816l0.527,0.432 l-0.313,0.614c-0.004,0.01-0.652,1.336-0.27,2.428l0,0c0.203,0.577,0.619,0.99,1.238,1.229c3.107,1.19,6.402-1.568,8.173-3.05 c0.25-0.209,0.469-0.393,0.66-0.543c-0.723-1.285-2.379-3.675-5.235-4.953C15.813,2.188,14.918,1.999,14.067,1.999z"
            ></path>
            <path
              fill="#5e9c76"
              d="M8.128,10.094L7.343,9.475c2.551-3.239,5.226-4.157,9.862-3.393l-0.163,0.986	C12.775,6.362,10.442,7.156,8.128,10.094z"
            ></path>
            <path
              fill="#bae0bd"
              d="M21.648,17.714c1.367,0.219,2.328,1.59,2.338,1.604l0.163,0.236l0.264-0.108 c0.023-0.009,2.244-0.887,3.478,0.725c1.373,1.793,0.301,4.9-1.744,6.385c-3.022,2.194-6.883,1.97-7.8,1.95 c-0.116-1.541-1.691-7.004,1.021-10.029C19.942,17.838,20.953,17.602,21.648,17.714z"
            ></path>
            <path
              fill="#5e9c76"
              d="M19.214,29.021c-0.293,0-0.539-0.007-0.726-0.012l-0.605-0.014l-0.034-0.453 c-0.019-0.255-0.081-0.622-0.155-1.07c-0.385-2.323-1.102-6.647,1.303-9.329c0.701-0.782,1.906-1.057,2.731-0.923 c1.368,0.22,2.345,1.384,2.604,1.723c0.501-0.171,2.65-0.782,3.957,0.924c0.604,0.788,0.834,1.813,0.667,2.966 c-0.231,1.588-1.194,3.169-2.514,4.127C23.89,28.813,20.833,29.021,19.214,29.021z M18.793,28.017 c1.348,0.029,4.517-0.019,7.061-1.865c1.093-0.794,1.922-2.152,2.112-3.462c0.089-0.613,0.08-1.495-0.471-2.215 c-0.993-1.295-2.875-0.572-2.894-0.564l-0.635,0.258l-0.391-0.566c-0.007-0.011-0.862-1.21-2.005-1.394l0-0.001 c-0.552-0.087-1.387,0.113-1.827,0.604c-2.084,2.324-1.418,6.34-1.061,8.497C18.724,27.572,18.763,27.811,18.793,28.017z"
            ></path>
            <path
              fill="#5e9c76"
              d="M22.267,24.83l-0.699-0.715c2.668-2.607,3.236-5.565,1.737-9.042l0.918-0.396	C25.882,18.524,25.224,21.94,22.267,24.83z"
            ></path>
            <g>
              <path
                fill="#bae0bd"
                d="M11.347,22.957c-0.812,1.121-2.468,1.362-2.485,1.365l-0.285,0.039l-0.023,0.285 c-0.002,0.024-0.219,2.403-2.214,2.779c-2.22,0.418-4.191-1.983-4.659-4.467c-0.719-3.817,0.894-7.022,1.324-7.832 c1.428,0.591,7.668,1.401,8.724,5.702C11.935,21.66,11.761,22.386,11.347,22.957z"
              ></path>
              <path
                fill="#5e9c76"
                d="M5.833,27.972c-0.999,0-1.988-0.465-2.838-1.346c-0.893-0.924-1.55-2.228-1.804-3.576 c-0.675-3.582,0.571-6.65,1.375-8.159l0.213-0.401l0.419,0.174c0.231,0.096,0.654,0.211,1.144,0.345 c2.426,0.664,6.941,1.898,7.874,5.7c0.229,0.93,0.068,1.809-0.464,2.543c-0.809,1.117-2.279,1.466-2.71,1.547 c-0.12,0.992-0.791,2.774-2.608,3.117C6.234,27.953,6.034,27.972,5.833,27.972z M3.255,15.74c-0.643,1.327-1.661,4.052-1.082,7.124 c0.219,1.162,0.781,2.28,1.542,3.067c0.451,0.467,1.379,1.217,2.534,1.001c1.602-0.302,1.801-2.249,1.809-2.331l0.054-0.682 l0.684-0.094c0.014-0.002,1.468-0.224,2.148-1.162v-0.001c0.359-0.494,0.461-1.072,0.303-1.717 c-0.793-3.23-4.939-4.364-7.167-4.974C3.764,15.887,3.488,15.812,3.255,15.74z"
              ></path>
            </g>
            <path
              fill="#5e9c76"
              d="M12.991,25.999C8.675,25.8,6.67,24.431,4.74,20.367l0.903-0.43c1.961,4.13,3.866,4.899,7.394,5.063	L12.991,25.999z"
            ></path></svg
          ><span>本站信息</span>
        </div>
        <div class="subcontent content-card">
          <div>
            <p>网站名称: HEIMDALL</p>
            <p>网址: http://127.0.0.1:8080/</p>
            <p>描述: 一个热爱代码。但是代码并不爱他的帕鲁~</p>
            <p>网站名称: HEIMDALL</p>
          </div>
        </div>
        <div class="subtitle-format">
          <svg
            t="1709688933091"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            p-id="21449"
          >
            <path
              d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
              fill="#6A4CFF"
              p-id="21450"
            ></path>
            <path
              d="M594.5728 323.0464c65.472 0 118.8736 48.3328 118.8736 108.4288a102.7456 102.7456 0 0 1-15.616 53.632 117.7216 117.7216 0 0 1-67.7376 49.92 73.0368 73.0368 0 0 1-20.352 3.2256 31.7568 31.7568 0 0 1-22.3488-8.96 30.2592 30.2592 0 0 1-9.1904-21.8112c0-15.3088 11.0464-27.7632 25.8304-30.336l5.76-0.4992 10.0096-3.2896c10.752-4.5568 19.2-11.5968 24.4224-20.4032a39.04 39.04 0 0 0 6.1056-21.5296c0-25.3184-24.704-46.7712-55.3216-46.7712a63.872 63.872 0 0 0-30.5536 7.7696c-15.9104 8.9088-25.1776 23.4752-25.1776 39.0528v167.5904c0 37.952-21.4784 72.7296-56.8064 92.16a126.208 126.208 0 0 1-61.632 15.8208c-65.408 0-118.8224-48.3328-118.8224-108.416 0-18.5728 5.3504-36.864 15.5776-53.632 14.9504-23.9104 38.9504-41.5744 67.9168-49.9712a74.9312 74.9312 0 0 1 20.1856-3.1872c17.5872 0 31.552 13.632 31.552 30.784 0 15.296-11.0336 27.7504-26.1504 30.3616l-5.8368 0.4864-9.472 3.4304c-10.8544 4.7232-19.4048 11.8016-24.512 20.224a39.1936 39.1936 0 0 0-6.144 21.504c0 25.4208 24.768 46.8096 55.7056 46.8096a64 64 0 0 0 30.5536-7.7312c15.936-8.9472 25.1776-23.5008 25.1776-39.0912V431.488c0-38.016 21.504-72.768 56.512-92.032a119.7056 119.7056 0 0 1 61.5168-16.384h-0.0256z"
              fill="#FFFFFF"
              p-id="21451"
            ></path></svg
          ><span>申请方式</span>
        </div>
        <div class="subcontent content-card">
          <div>
            <p>填写下方表格</p>
            <p>站名：(最好不要太长，控制在八个中文字符宽度内)</p>
            <p>站点链接：(你的网站链接，请附带http / https)</p>
            <p>
              头像：(你的头像链接，请确保它为正方形或圆形，也可以填写QQ号，会使用你的QQ头像)
            </p>
            <p>站点描述：(简单描述一下你的站点、或者你喜欢的句子)</p>
            <p>邮箱地址(可选)：(通过申请后，会给你的邮箱及时发送通知)</p>
          </div>
        </div>
      </div>
      <div class="subtitle-format">
        <svg
          t="1709688796358"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          p-id="5958"
        >
          <path
            d="M512 51.2c254.5152 0 460.8 206.2848 460.8 460.8s-206.3872 460.8-460.8 460.8S51.2 766.4128 51.2 512 257.4848 51.2 512 51.2z"
            fill="#FF9135"
            p-id="5959"
          ></path>
          <path
            d="M512 742.4m-51.2 0a51.2 51.2 0 1 0 102.4 0 51.2 51.2 0 1 0-102.4 0Z"
            fill="#FFFFFF"
            p-id="5960"
          ></path>
          <path
            d="M512 230.4a50.8928 50.8928 0 0 1 50.7904 54.272l-21.7856 328.192a29.056 29.056 0 0 1-57.984 0l-21.8112-328.192A50.8928 50.8928 0 0 1 512 230.4z"
            fill="#FFFFFF"
            p-id="5961"
          ></path></svg
        ><span>友链说明</span>
      </div>
      <div class="subcontent content-card">
        <div>
          <p>申请友链需要您的站点满足以下条件：</p>
          <p>1.站点可直接访问。</p>
          <p>2.申请站点内不允许存在大量广告信息。</p>
          <p>3.站点能长期维护~</p>
          <p>4.申请之前，请务必添加本站友链。</p>
        </div>
      </div>
      <div class="friend-link-form">
        <div class="avatar-show">
          <el-avatar :size="70" :src="avatar_url">
            <img
              src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
            />
          </el-avatar>
        </div>
        <div class="input-group">
          <el-form :model="new_friend" label-width="auto" class="friend-form">
            <el-form-item label="头像" class="row-2">
              <el-input
                v-model="new_friend.avatar"
                placeholder="头像*"
                @blur="inputBlur"
                :prefix-icon="User" /></el-form-item
            ><el-form-item label="网址" class="row-2">
              <el-input
                v-model="new_friend.site"
                placeholder="网址*"
                :prefix-icon="Link" /></el-form-item
            ><el-form-item label="名称" class="row-3"
              ><el-input
                v-model="new_friend.blog"
                placeholder="名称*"
                :prefix-icon="List" /></el-form-item
            ><el-form-item label="描述" class="row-3"
              ><el-input
                v-model="new_friend.desc"
                placeholder="描述*"
                :prefix-icon="ChatDotSquare" /></el-form-item
            ><el-form-item label="邮箱" class="row-3"
              ><el-input
                v-model="new_friend.email"
                placeholder="邮箱*"
                :prefix-icon="Message"
            /></el-form-item>
            <el-form-item class="submit-item"
              ><div class="wrap1">
                <el-button class="submit-button" @click="submit"
                  >提交</el-button
                >
              </div></el-form-item
            ></el-form
          >
        </div>
      </div>
      <hr />
      <div>
        <div v-for="tag in tags" :key="tag">
          <div
            style="
              font-size: large;
              margin-bottom: 40px;
              display: flex;
              align-items: center;
            "
          >
            <img
              :src="require('@/assets/images/icons/风车.png')"
              style="height: 24px"
              class="windmill"
            />{{ tag.tag }}
          </div>
          <div style="">
            <div
              v-for="link in tag.links"
              :key="link"
              class="friend-link-card observe"
              style="animation-fill-mode: forwards"
            >
              <a :href="link.site" target="_blank"
                ><div>
                  <el-avatar :src="link.avatar" :size="88" :alt="link.blog" />
                </div>
                <div>
                  <span
                    class="sitename"
                    style="text-decoration-color: #8677ff"
                    >{{ link.blog }}</span
                  >
                </div>
                <div class="siteDesc">
                  {{ link.desc }}
                </div></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref, nextTick } from "vue";
import { gsap } from "gsap";
import requests from "@/request/request";
import JumpLoading from "../loading/JumpLoading.vue";
import { GetProjectInformation } from "@/assets/js/common";
import { io } from "@/assets/js/common";
import {
  Search,
  HomeFilled,
  List,
  Link,
  User,
  Message,
  ChatDotSquare,
} from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
let subscribers = ref([]);
let starers = ref([]);
let tags = ref([]);
let loading = ref();
let friendAvatar = ref("");
let avatar_url = ref("");
let new_friend = ref({
  avatar: "",
  email: "",
  desc: "",
  site: "",
  blog: "",
});

const inputBlur = () => {
  try {
    var url = new URL(new_friend.value.avatar);
    avatar_url.value = new_friend.value.avatar;
  } catch {
    if (Number(friendAvatar.value, 10) == NaN) {
      return;
    }
    let qq_url = "http://q.qlogo.cn/headimg_dl?spec=640&img_type=jpg&dst_uin=";
    avatar_url.value = qq_url + new_friend.value.avatar;
  }
};

const submit = () => {
  let data = Object.assign({}, new_friend.value);
  try {
    let require_fields = ["avatar", "blog", "desc", "site"];
    for (let i = 1; i < require_fields.length; i++) {
      if (!new_friend.value[require_fields[i]]) throw "请填写完整表格！";
    }
    data.avatar = avatar_url.value;
    requests({
      method: "post",
      Headers: { "Content-Type": "multipart/form-data" },
      data: data,
      url: "/api/friend/link/",
    }).then((res) => {
      console.log(res.data);
      if (res.data.code == 10000) {
        ElMessage.success(res.data.data);
      } else {
        ElMessage.error(res.data.data);
      }
    });
  } catch (err) {
    ElMessage.error(err);
  } finally {
    new_friend.value = {
      avatar: "",
      email: "",
      desc: "",
      site: "",
      blog: "",
    };
  }
};

onMounted(() => {
  document.getElementById("main").style.backgroundImage =
    "url('https://pic55.photophoto.cn/20200424/0005018344978667_b.jpg')";
  document.querySelectorAll(".favorite-button").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      window.open("https://github.com/1131659949/Heimdall-Client", "_blank");
      if (button.classList.contains("animated")) {
        return;
      }
      button.classList.add("animated");

      gsap.to(button, {
        keyframes: [
          {
            "--star-y": "-36px",
            duration: 0.3,
            ease: "power2.out",
          },
          {
            "--star-y": "48px",
            "--star-scale": 0.4,
            duration: 0.325,
            onStart() {
              button.classList.add("star-round");
            },
          },
          {
            "--star-y": "-64px",
            "--star-scale": 1,
            duration: 0.45,
            ease: "power2.out",
            onStart() {
              button.classList.toggle("active");
              setTimeout(() => button.classList.remove("star-round"), 100);
            },
          },
          {
            "--star-y": "0px",
            duration: 0.45,
            ease: "power2.in",
          },
          {
            "--button-y": "3px",
            duration: 0.11,
          },
          {
            "--button-y": "0px",
            "--star-face-scale": 0.65,
            duration: 0.125,
          },
          {
            "--star-face-scale": 1,
            duration: 0.15,
          },
        ],
        clearProps: true,
        onComplete() {
          button.classList.remove("animated");
        },
      });

      gsap.to(button, {
        keyframes: [
          {
            "--star-hole-scale": 0.8,
            duration: 0.5,
            ease: "elastic.out(1, .75)",
          },
          {
            "--star-hole-scale": 0,
            duration: 0.2,
            delay: 0.2,
          },
        ],
      });

      gsap.to(button, {
        "--star-rotate": "360deg",
        duration: 1.55,
        clearProps: true,
      });
    });
  });
});

onUnmounted(() => {
  io.disconnect();
});

function init() {
  requests({
    method: "get",
    Headers: { "Content-Type": "multipart/form-data" },
    url: "/api/friend/link/tags/",
  }).then(async (res) => {
    tags.value = res.data;
    loading.value.classList.add("animate__fadeOut"); // 关闭加载动画
    setTimeout(() => {
      loading.value.style.display = "none";
    }, 1000);
    await nextTick();
    Array.from(document.querySelectorAll(".observe")).forEach((el) => {
      io.observe(el);
    });
  });
  // GetProjectInformation(
  //   subscribers.value,
  //   "https://api.github.com/repos/1131659949/Heimdall-Client/subscribers"
  // );
  // GetProjectInformation(
  //   starers.value,
  //   "https://api.github.com/repos/1131659949/Heimdall-Client/stargazers"
  // );
}
init();
</script>
<style>
.submit-item {
  display: block !important;
  .el-form-item__content {
    justify-content: center;
  }
}
.wrap {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.submit-button {
  width: 140px;
  height: 45px;
  font-family: "Roboto", sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}

.submit-button:hover {
  background-color: #2ee59d;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-7px);
}
.friend-form {
  .el-form-item__label-wrap {
    align-items: center;
  }
  .el-form-item {
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    padding: 10px 15px;
  }

  .row-2 {
    width: 50%;
  }
  .row-3 {
    width: 33.3333%;
  }
}
.input-group {
  .el-input__wrapper {
    border-radius: 0.5rem;
    height: 40px;
  }
}

.friend-link-form {
  display: flex;
  .avatar-show {
    margin: auto 15px auto 0px;
  }
}

.friend-link-card {
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
  margin: 5px 10px;
  width: 25%;
  display: inline-block;
  border: 1.5px solid #ffffff;
  box-sizing: border-box;
  padding: 12px;
  transition: all 0.5s;
  a {
    color: #5c5c5c;
    div {
      margin: 5px 0px;
    }
  }
}

.friend-link-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 4px -2px rgb(126, 126, 126);
}

.windmill {
  animation: rotation 3s linear infinite;
  margin-right: 5px;
}
@keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
.sitename {
  text-underline-offset: 10px;
  text-decoration: underline wavy;
  font-size: 22px;
}

.sitename,
.siteDesc {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  white-space: nowrap;
}

.rss-button {
  border-radius: 50%;
  border: 1px solid transparent;
  background-color: transparent;
  padding: 8px 10px;
  cursor: pointer;
}

.rss-button:hover {
  background-color: rgb(236 236 236 / 0.5);
}

.content-card {
  div {
    line-height: normal;
    background-color: rgb(246 246 246/ 0.5);
    backdrop-filter: blur(4px);
    box-sizing: border-box;
    display: block;
    border: 1px solid #eee;
    border-left: 3px solid deepskyblue;
    border-radius: 7px;
    padding-left: 15px;
    box-sizing: border-box;
    transition: all 0.3s;
  }
}

.friend-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  padding: 120px 30px 30px 15px;
  max-width: 1024px;
  box-sizing: border-box;
  margin: auto;
}

.blur-format {
  --tw-backdrop-blur: blur(4px);
  background-color: rgb(255 255 255 / 0.5);
  backdrop-filter: blur(4px);
  border-radius: 15px;
  margin-bottom: 50px;
}

.friend-link,
.self-card {
  width: 90%;
  box-sizing: border-box;
  padding: 32px;
}

@media screen and (max-width: 992px) {
  .friend-link,
  .self-card {
    width: 100% !important;
  }

  .self-card {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }

  .friend-link-card {
    width: 45%;
  }

  .friend-container {
    padding-left: 0px;
    padding-right: 0px;
    margin: 0px;
    width: 100%;
  }
}

.subcontent {
  margin: 25px 0px;
}

.github-line {
  display: flex;
  .github-info {
    border-radius: 15px;
    margin-right: 15px;
    padding: 1px 8px;
  }

  .github-info:hover {
    background-color: #ece6e3;
  }

  .github-info:last-child {
    margin-right: 0px;
  }
}

.favorite-button {
  --background-default: #313440;
  --text-color-default: #fafbff;
  --star-color-default: #62677c;
  --star-face-color-default: #1f2128;
  --star-color-active: #f6c206;
  --star-face-color-active: #845901;
  --star-hole: #16181e;
  --star-hole-inner: #20232c;
  --button-y: 0px;
  --star-y: 0px;
  --star-scale: 1;
  --star-rotate: 0deg;
  --star-hole-scale: 0;
  --star-face-scale: 1;
  --text-x: 0px;
  --text-o: 1;
  -webkit-tap-highlight-color: transparent;
  appearance: none;
  outline: none;
  border: none;
  background: none;
  min-width: 15px;
  padding: 12px 24px 12px 16px;
  margin: 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  color: var(--text-color-default);
  transform: translateY(var(--button-y)) translateZ(0);
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border-radius: 9px;
    transition: transform 0.2s;
    transform: scale(var(--background-scale-x, 1), var(--background-scale-y, 1))
      translateZ(0);
    background: var(--background-default);
  }
  &:active {
    --background-scale-x: 0.98;
    --background-scale-y: 0.96;
  }
  span {
    display: block;
    opacity: var(--text-o);
    transform: translateX(var(--text-x));
  }
  .icon {
    width: 36px;
    height: 119px;
    display: flex;
    pointer-events: none;
    position: relative;
    clip-path: ellipse(150% 50% at 50% 50%);
    margin: -100px 2px 0 -8px;
    &:before {
      content: "";
      margin-top: auto;
      display: block;
      width: 36px;
      height: 12px;
      background: var(--star-hole);
      box-shadow: inset 0 3px 0 0 var(--star-hole-inner);
      border-radius: 100px / 30px;
      transform: scale(var(--star-hole-scale));
      transform-origin: 50% 100%;
    }
    .star {
      width: 20px;
      height: 19px;
      position: absolute;
      left: 8px;
      bottom: 0;
      transform: translateY(var(--star-y)) rotate(var(--star-rotate))
        scale(var(--star-scale));
      border-radius: var(--star-radius, 0px);
      background: var(--star-color, var(--star-color-default));
      clip-path: var(
        --star-clip,
        polygon(
          10px 0,
          13px 6px,
          20px 7px,
          15px 12px,
          16px 19px,
          10px 15px,
          4px 19px,
          5px 12px,
          0 7px,
          7px 6px
        )
      );
      transition: clip-path 0.2s, border-radius 0.2s, background 0.2s;
      &:before,
      &:after {
        content: "";
        position: absolute;
        background: var(--star-face-color, var(--star-face-color-default));
        transition: background 0.2s, box-shadow 0.2s;
      }
      &:before {
        width: 2px;
        height: 2px;
        border-radius: 50%;
        left: 7px;
        top: 8px;
        box-shadow: 4px 0 0 0
          var(--star-face-color, var(--star-face-color-default));
        transform: scaleY(var(--star-face-scale));
      }
      &:after {
        width: 4px;
        height: 2px;
        border-radius: var(--star-face-radius, 2px 2px 0 0);
        left: 8px;
        top: 11px;
        transition: border-radius 0.2s;
      }
    }
  }
  &.star-round {
    --star-clip: polygon(
      10px 0,
      20px 0,
      20px 7px,
      20px 12px,
      20px 19px,
      10px 19px,
      0 19px,
      0 12px,
      0 7px,
      0 0
    );
    --star-radius: 50%;
  }
  &.active {
    --star-color: var(--star-color-active);
    --star-face-color: var(--star-face-color-active);
    --star-face-radius: 0 0 2px 2px;
  }
}
.self-description {
  color: #97dffd;
  text-shadow: 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
    0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
    0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
    0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
    0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
    0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
    0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
    0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
    0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
    0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff;
}

.self-name {
  color: #ff9800;
  font-family: Candyshop;
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
    1px 1px 0 #fff, -1.414px 0 0 #fff, 1.414px 0 0 #fff, 0 -1.414px 0 #fff,
    0 1.414px 0 #fff;
  font-size: 35px;
}

.subtitle-format {
  display: flex;
  svg {
    margin-right: 5px;
    align-items: center;
    max-height: 32px;
  }

  span {
    font-size: 18px;
    font-weight: bold;
  }
}
</style>
