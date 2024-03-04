<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      height: 100%;
      font-family: 'pingfang';
      line-height: 1.4;
    "
  >
    <el-menu
      :default-active="activeIndex"
      class="chat-room-menu"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <img
        style="width: 120px; padding: 10px"
        :src="require('@/assets/images/logo/logo4.png')"
        alt="Element logo"
      />

      <div class="flex-grow" />
      <div class="menu-item">
        <el-badge :value="3" class="item"><span>消息</span></el-badge>
      </div>
      <div class="menu-item">
        <span>设置</span>
      </div>
      <div class="user-avatar">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </div>
    </el-menu>
    <router-view :me="me" />
  </div>
</template>
<script>
import requests from "@/request/request";
export default {
  name: "ChatRoomBase",
  mounted() {
    requests({
      method: "get",
      Headers: { "Content-Type": "multipart/form-data" },
      url: "/api/user/",
    }).then((res) => {
      this.me = res.data.data;
    });
  },
  data() {
    return {
      activeIndex: 1,
      me: {},
    };
  },
};
</script>
<style>
.flex-grow {
  flex-grow: 1;
}

.chat-room-menu > div {
  display: flex;
  align-items: center;
}

.user-avatar {
  margin: 15px;
}

.menu-item {
  margin: 0px 20px;
  cursor: pointer;
}
</style>
