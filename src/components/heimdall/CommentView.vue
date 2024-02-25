<template>
  <div class="comment-view-layout">
    <div class="comment-user-avatar">
      <el-avatar
        :alt="user.username"
        :size="35"
        shape="square"
        :src="user.user_avatar"
      />
    </div>
    <div class="comment-detail">
      <div class="comment--user-info">
        <span
          style="color: rgb(255, 121, 25); font-size: 15px"
          class="comment-same-format"
          ><b>{{ user.username }}</b></span
        >
        <span style="color: rgb(191, 191, 191)" class="comment-same-format">{{
          date
        }}</span>
        <span style="color: rgb(191, 191, 191)" class="comment-same-format"
          >From：{{ address }}</span
        >
        <el-button
          color="#ffb41c"
          class="reply-layout comment-submit"
          @click="
            () => {
              dialogVisible = true;
            }
          "
          ><span v-if="subcomment && subcomment.length > 0">{{
            subcomment.length
          }}</span
          >回复</el-button
        >
      </div>
      <div class="comment--content">
        <div>
          <span style="color: #06aaf4; margin-right: 5px" v-if="reply"
            >@{{ reply.username }}：</span
          >{{ content }}
        </div>
      </div>
      <div
        v-if="subcomment"
        v-for="comment in subcomment"
        class="subcomment-layout"
      >
        <CommentView
          :user="comment.creator"
          :date="comment.create_time"
          :content="comment.content"
          :address="comment.city"
          :reply="comment.reply"
          :uid="comment.id"
          :belong="comment_id"
        ></CommentView>
      </div>
    </div>
  </div>
  <el-dialog
    v-model="dialogVisible"
    width="500"
    title="留言"
    class="comment-reply-dialog"
  >
    <el-input v-model="reply_content" type="textarea" :rows="6"></el-input>

    <template #footer>
      <div class="dialog-footer">
        <el-button
          color="#ffb41c"
          type="primary"
          @click="ReplyComment"
          class="comment-submit"
        >
          提交
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: "CommentView", //给组件命名
};
</script>
<script setup>
import { defineProps, ref } from "vue";
import requests from "@/request/request";
import { ElMessage } from "element-plus";
import { useRoute } from "vue-router";
const route = useRoute();
var props = defineProps({
  date: { type: String, required: true },
  address: { type: String, default: "未知地点" },
  content: { type: String, required: true },
  user: { type: Array, required: true },
  comment_id: { type: Number, required: true },
  subcomment: { type: Array, required: false },
  reply: { type: Array, required: false },
  belong: { type: Number, required: true },
});
const article_id = route.params.id;
var dialogVisible = ref(false);
var reply_content = ref("");

function ReplyComment() {
  if (reply_content.value.length == 0) {
    ElMessage.error("请填写评论信息");
    return;
  }
  var data = {
    reply_to: props.comment_id,
    article: article_id,
    content: reply_content.value,
  };
  if (props.belong != null) {
    data.belong_comment = props.belong;
  }

  requests({
    method: "post",
    Headers: { "Content-Type": "multipart/form-data" },
    url: "/api/article/comment/" + article_id + "/",
    data: data,
  }).then((res) => {
    if (res.data.code == 10000) {
      ElMessage.success(res.data.data);
    } else {
      ElMessage.error(res.data.data);
    }
  });
}
</script>
<style>
.comment-view-layout {
  display: flex;
  width: auto;

  .comment-user-avatar {
    margin-right: 6px;
  }
}
.reply-layout {
  float: right;
  padding: 4px 5px !important;
  height: auto !important;
  span {
    color: white;
    font-size: 10px;
  }
}
.comment-detail {
  flex: 1;
  .comment--user-info {
    .comment-same-format:nth-child(n) {
      margin-right: 5px;
    }

    font-size: 12px;
  }
  .subcomment-layout:nth-child(n) {
    margin: 30px 0px;
  }
  .subcomment-layout:last-child {
    margin: 30px 0px 0px 0px;
  }
}

.comment-reply-dialog {
  header {
    text-align: center;
  }
  button {
    float: right;
  }
}

.comment--content {
  background-color: #f7f9fe;
  border-radius: 5px;
  div {
    padding: 10px 15px;
  }
}
</style>
