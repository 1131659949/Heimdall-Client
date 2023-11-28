<template>
  <div
    ref="bubble"
    :class="['bubble', sender.id == local_user.id ? 'right' : 'left']"
  >
    <el-avatar
      shape="square"
      :size="36"
      :src="sender.user_avatar"
      class="avatar"
    />
    <div class="wrap">
      <div class="sender-name" v-if="sender.username">
        {{ sender.username }}
      </div>
      <div>
        <span class="content-time">{{
          friendlyFormatTime(sender.create_time)
        }}</span>
        <div class="content">{{ message }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import { friendlyFormatTime } from "../../../utils/transfer";

export default {
  name: "ChatBubble",
  props: {
    message: {
      type: String,
      required: true,
    },
    textColor: {
      type: String,
      default: "black",
    },
    backgroundColor: {
      type: String,
      default: "green",
    },
    sender: {
      type: Object,
      required: true,
    },
  },
  methods: {
    friendlyFormatTime,
  },
  setup(props, context) {
    var bubble = ref(null);
    var local_user = JSON.parse(localStorage.getItem("userInfo"));
    onMounted(() => {
      bubble.value.style.background = props.background;
    });
    return {
      bubble,
      local_user,
    };
  },
};
</script>
<style>
.bubble {
  padding: 6px;
  overflow: hidden;
  position: relative;
}
.bubble:after {
  clear: both;
  content: "";
}
.avatar {
  display: flex !important;
  border-radius: 2px;
  overflow: hidden;
  position: absolute;
  top: 10px;
}

.bubble.left .avatar {
  float: left;
  left: 10px;
}

.bubble.right .avatar {
  float: right;
  right: 10px;
}
.bubble .content {
  width: auto;
  padding: 0.7em 0.5em;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid;
  position: relative;
  display: inline-block;
}
.bubble .content:before {
  content: "";
  display: inline-block;
  box-sizing: border-box;
  width: 12px;
  height: 12px;
  border: 1px solid transparent;
  border-radius: 3px;
  position: absolute;
  background-color: inherit;
  border-right-color: inherit;
  border-bottom-color: inherit;
}
.bubble.left {
  text-align: left;
}
.bubble.right {
  text-align: right;
}
.bubble.left .wrap {
  margin-left: 56px;
  margin-right: 56px;
}
.bubble.left .content {
  background: #fafafa;
  border-color: #c6c6c6;
  max-width: 300px;
  word-wrap: break-word;
}
.bubble.left .content:before {
  left: -6px;
  top: 5px;
  transform: rotate(135deg);
}
.bubble.right .wrap {
  margin-right: 56px;
  margin-left: 56px;
}
.bubble.right .content {
  background: #b3e866;
  border-color: #9ab96b;
  text-align: left;
  max-width: 300px;
  word-wrap: break-word;
}
.bubble.right .content:before {
  right: -6px;
  top: 5px;
  transform: rotate(-45deg);
}

.sender-name {
  font-size: 14px;
}

.content-time {
  margin-right: 10px;
  font-size: 12px;
}
</style>
