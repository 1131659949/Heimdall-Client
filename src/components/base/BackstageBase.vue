<template>
  <div>
    <el-container class="backstage-container">
      <el-header class="backstage-header"
        ><div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
            padding: 0px 5px;
          "
        >
          <div style="font-size: 19px; font-weight: bold">后台管理</div>
          <div class="backstage-header-nav">
            <div
              style="cursor: pointer; margin-right: 15px"
              @click="this.$router.push('/')"
            >
              首页
            </div>
            <el-avatar
              :src="
                user == undefined
                  ? require('@/assets/images/logo/default.jpg')
                  : user.user_avatar
              "
            ></el-avatar>
          </div></div
      ></el-header>
      <el-container>
        <el-aside style="width: auto" class="backstage-aside">
          <el-menu
            class="backstage-menu"
            :collapse="isCollapse"
            style="background-color: inherit"
          >
            <el-menu-item index="1">
              <el-icon><House /></el-icon>
              <template #title>网站首页</template>
            </el-menu-item>
            <el-menu-item
              index="2"
              @click="
                () => {
                  this.$router.push('/backstage/ArticleManage');
                }
              "
            >
              <el-icon><document /></el-icon>
              <template #title>文章管理</template>
            </el-menu-item>
            <el-menu-item index="3">
              <el-icon><User /></el-icon>
              <template #title>用户管理</template>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon><Comment /></el-icon>
              <template #title>评论管理</template>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main class="backstage-main"><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import "@/assets/css/backstagebase.css";
import { inject, defineExpose } from "vue";
const user = inject("userInfo");
var isCollapse = false;
defineExpose({
  isCollapse,
});
</script>
