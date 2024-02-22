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
        <el-tag
          type="danger"
          round
          size="small"
          effect="dark"
          v-if="tag != undefined"
          style="margin: 0px 5px"
          >{{ tag }}</el-tag
        >
        <span>{{ sender.username }}</span>
      </div>
      <div>
        <div>
          <span
            class="content-time"
            v-if="sender.id == local_user.id"
            style="margin-right: 10px"
            >{{ friendlyFormatTime(sender.create_time) }}</span
          >
          <div class="content">
            <span v-if="type == 1">{{ entitiestoUtf16(message) }}</span
            ><el-image
              :src="message"
              fit="cover"
              v-else-if="type == 2"
              style="background: white"
              :preview-src-list="[message]"
            />
            <div
              v-else-if="type == 3"
              @click="downloadFile(message)"
              style="cursor: pointer"
            >
              <div
                :style="{
                  display: 'flex',
                  'flex-direction':
                    sender.id == local_user.id ? 'row' : 'row-reverse',
                }"
              >
                <el-image
                  :src="image_logo"
                  fit="cover"
                  style="width: 64px; height: 64px"
                />
                <div
                  style="
                    font-size: 12px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                  "
                >
                  <span>{{
                    message.substring(message.lastIndexOf("/") + 1)
                  }}</span>
                  <span
                    :style="{
                      'text-align':
                        sender.id == local_user.id ? 'right' : 'left',
                      'font-size': '15px',
                    }"
                  >
                    {{ size }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <span
            class="content-time"
            v-if="sender.id != local_user.id"
            style="margin-left: 10px"
            >{{ friendlyFormatTime(sender.create_time) }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import { friendlyFormatTime, entitiestoUtf16 } from "../../../utils/transfer";

export default {
  name: "ChatBubble",
  props: {
    message: {
      type: String,
      required: true,
    },
    type: {
      type: Number,
      default: 1,
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
    tag: {
      type: String,
      required: false,
      default: "",
    },
    size: {
      type: String,
      required: false,
      default: "未知大小",
    },
  },
  methods: {
    friendlyFormatTime,
    entitiestoUtf16,
  },
  setup(props, context) {
    var bubble = ref(null);
    var local_user = JSON.parse(localStorage.getItem("userInfo"));
    var nameplate = {
      lord: "群主",
    };
    const file_ext = {
      pdf: require("@/assets/images/icons/pdf.png"),
      xls: require("@/assets/images/icons/xls.png"),
      xlsx: require("@/assets/images/icons/xls.png"),
    };
    var tag = props.tag != "" ? nameplate[props.tag] : undefined;
    if (props.type == 3) {
      var image_logo =
        file_ext[props.message.substring(props.message.lastIndexOf(".") + 1)];
    }

    function downloadFile(url) {
      window.open(url);
    }
    onMounted(() => {
      bubble.value.style.background = props.background;
    });
    return {
      bubble,
      local_user,
      downloadFile,
      tag,
      image_logo,
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
  background: #ffffff;
  border-color: #c6c6c6;
  max-width: 350px;
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
  top: 3px;
  transform: rotate(-45deg);
}

.sender-name {
  font-size: 14px;
  margin-bottom: 3px;
}

.content-time {
  font-size: 12px;
}
</style>
