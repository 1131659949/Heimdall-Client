<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      height: 100%;
      font-family: 'pingfang';
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
    <router-view />
  </div>
</template>
<script>
export default {
  name: "ChatRoomBase",
  data() {
    return {
      activeIndex: 1,
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

@font-face {
  font-family: "pingfang";
  src: url("../../assets/fonts/pingfang.ttf");
}
</style>
