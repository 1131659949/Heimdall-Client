import { createRouter, createWebHistory, createWebHashHistory } from "vue-router"
import LogIn from "@/components/LogIn"
import UserBase from "@/components/base/UserBase"
import ChatRoomBase from "@/components/base/ChatRoomBase"
import HomePageBase from "@/components/base/HomePageBase"
import ChatRoom from "@/components/chatroom/ChatRoom"
import HomeBase from "@/components/base/HomeBase"
import requests from "@/request/request.js";
import BackstageBase from "@/components/base/BackstageBase"
import UserBackstage from "@/components/backstage/UserBackstage"
import UserAuth from "@/components/user/UserAuth"
import ArticleManage from "@/components/backstage/ArticleManage"
import ArticleContent from "@/components/heimdall/ArticleContent"
import HomePage from "@/components/heimdall/HomePage"
import SearchPage from "@/components/heimdall/SearchPage"
import LogManage from "@/components/backstage/LogManage"


const routes = [
  {
    path: "/UserBase",
    component: UserBase,
    children: [
      {
        path: '/login',
        name: 'login',
        component: LogIn,
        meta: { requiresAuth: false }
      }
    ]
  }, {
    path: "/homeBase",
    component: HomeBase,
    children: [
      {
        path: "/homepageBase",
        component: HomePageBase,
        meta: { requiresAuth: false },
        children: [
          {
            path: "/",
            name: "home",
            component: HomePage
          },
          {
            path: "/search",
            name: "search",
            component: SearchPage
          }

        ]
      }, {
        path: "/article/:id/",
        name: "article",
        component: ArticleContent,
        meta: { requiresAuth: false }
      }, {
        path: "/friends",
        name: "friends",
        component: () => import("@/components/heimdall/FriendLinks")
      }
    ]
  },
  {
    path: "/UserAuth",
    component: UserAuth,
    children: [{
      path: "/chat",
      component: ChatRoomBase,
      children: [
        {
          path: "/chatroom",
          name: "chatroom",
          component: ChatRoom,
          meta: { requiresAuth: false }
        }
      ]
    },

    {
      path: "/backstage",
      component: BackstageBase,
      children: [
        {
          path: "",
          name: "backstage",
          component: UserBackstage,
          meta: { requiresAuth: false }
        },
        {
          path: "ArticleManage",
          name: "ArticleManage",
          component: ArticleManage,
          meta: { requiresAuth: false }
        },
        {
          path: "log",
          name: "log",
          component: LogManage,
          meta: { requiresAuth: false }
        }
      ]
    }]
  }
];

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),  // 路由不带#
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { left: 0, top: 0 }
  }
});

function clean_account_info() {
  localStorage.removeItem("token");
}



router.beforeEach(async (to, from, next) => {
  let token = localStorage.getItem("token");
  let userID = localStorage.getItem("uid");
  // let whiteList = ['/login', '/register', '/reset', "/chatroom", "/"]
  if (!to.meta.requiresAuth) {
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
          next("/login");
        }
      }
      else {
        clean_account_info()
        next("/login")
      }
    })
  }
  else {
    next("/login")
  }
})

export default router