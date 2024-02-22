<template>
  <router-view></router-view>
</template>
<script setup>
import { ref, provide, getCurrentInstance, inject } from "vue";
import requests from "@/request/request";
const user = ref();
const instance = getCurrentInstance();
const globalProperties = instance.appContext.config.globalProperties;
provide("userInfo", user);
if (globalProperties.$cookies.get("token")) {
  requests({
    method: "get",
    Headers: { "Content-Type": "multipart/form-data" },
    url: "/api/user/",
  }).then((res) => {
    if (res.data.code == 10001) {
      user.value = res.data.data;
    } else {
      globalProperties.$router.push("/");
    }
  });
} else {
  globalProperties.$router.push("/");
}
</script>
