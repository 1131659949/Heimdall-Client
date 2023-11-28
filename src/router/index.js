import { createRouter, createWebHistory } from "vue-router"
import LogIn from "@/components/LogIn"
import UserBase from "@/components/base/UserBase"
import ChatRoomBase from "@/components/base/ChatRoomBase"
import ChatRoom from "@/components/chatroom/ChatRoom"
import requests from "@/request/request.js";

const routes = [
  {
    path: "/user",
    component: UserBase,
    children: [
      {
        path: 'login',
        name: 'login',
        component: LogIn
      }
    ]
  },
  {
    path: "/",
    component: ChatRoomBase,
    children: [
      {
        path: "chatroom",
        name: "chatroom",
        component: ChatRoom
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(), // 路由不带#
  routes,
});

function clean_account_info() {
  localStorage.removeItem("token");
}



router.beforeEach(async (to, from, next) => {
  let token = localStorage.getItem("token");
  let userID = localStorage.getItem("uid");
  let whiteList = ['/user/login', '/user/register', '/user/reset', "/chatroom"]
  if (whiteList.indexOf(to.path) != -1) {
    next()
  }
  else if (token) {
    await requests({
      method: "post",
      Headers: { "Content-Type": "application/json", "Autherization": token },
      url: "api/token",
    }).then(function (response) {
      let res = response.data["res"]
      if (res) {
        const uid = response.data["uid"]
        if (uid == userID) {
          console.log("token验证成功")
          next()
        }
        else {
          clean_account_info()
          next("/user/login");
        }
      }
      else {
        clean_account_info()
        next("/user/login")
      }
    })
  }
  else {
    next("/user/login")
  }
})

export default router