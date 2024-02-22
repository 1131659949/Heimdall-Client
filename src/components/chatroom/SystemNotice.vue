<template>
  <div style="display: flex; flex-direction: column; margin-left: 5px">
    <div style="display: flex">
      <div class="system-avatar">
        <el-avatar :src="systemAvatar"></el-avatar>
      </div>
      <div class="message">{{ msg }}</div>
    </div>
    <div v-if="!unread" style="margin-left: 45px">
      <div v-if="props.verb == 'add_friend'">
        <el-button type="primary">同意</el-button>
        <el-button type="danger">拒绝</el-button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps } from "vue";
import systemAvatar from "@/assets/images/icons/system.png";
const props = defineProps({
  actor: { type: Object, required: true },
  level: { type: String, required: true, default: "info" },
  verb: { type: String, required: true },
});

var msg = ref(null);
const actor_name = props.actor.username;

switch (props.verb) {
  case "add_friend":
    msg = `${actor_name}希望加您为好友！您是否同意请求？`;
    break;
  default:
    msg = `${actor_name}发送未知信息给您！`;
}
</script>
<style>
.message {
  float: left;
  margin: 10px 0px 10px 5px;
  background-color: skyblue;
  border-bottom-color: skyblue;
  /*为了给after伪元素自动继承*/
  color: #fff;
  font-size: 12px;
  line-height: 18px;
  padding: 5px 12px 5px 12px;
  box-sizing: border-box;
  border-radius: 6px;
  position: relative;
  word-break: break-all;
}

/** 通过对小正方形旋转45度解决 **/
.message::before {
  content: "";
  position: absolute;
  top: 50%;
  left: -5px;
  width: 10px;
  height: 10px;
  margin-top: -10px;
  background: inherit;
  /*自动继承父元素的背景*/
  transform: rotate(45deg);
}
</style>
