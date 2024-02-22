<template>
  <div style="position: relative">
    <div class="animate__animated" ref="articleTable">
      <div style="margin-bottom: 25px">
        <el-input
          v-model="search_article_title"
          class="w-50 m-2 backstage-search-article"
          placeholder="搜索文章标题"
        >
          <template #prefix>
            <el-icon class="el-input__icon"><search /></el-icon>
          </template>
        </el-input>
        <el-button
          type="primary"
          style="margin-left: 10px"
          @click="SwitchToAddArticle"
          >添加文章</el-button
        >
      </div>
      <div>
        <el-table :data="articles.article_list" border style="width: 100%">
          <el-table-column prop="id" label="ID" width="60" />
          <el-table-column prop="title" label="文章标题" width="180" />
          <el-table-column prop="cover" label="文章封面" width="100"
            ><template #default="scope">
              <el-image
                style="width: 60px; height: 60px"
                :src="scope.row.cover"
                :preview-teleported="true"
                :preview-src-list="[scope.row.cover]"
                fit="cover" /></template
          ></el-table-column>
          <el-table-column prop="author.username" label="作者" width="100" />
          <el-table-column prop="label" label="标签" width="100" />
          <el-table-column prop="classification" label="分类" width="100" />
          <el-table-column prop="like" label="点赞数" width="80" />
          <el-table-column prop="views" label="访问量" width="80" />
          <el-table-column prop="is_public" label="是否公开" width="85">
            <template #default="scope">
              <el-switch
                v-model="scope.row.is_public"
                :active-value="true"
                :inactive-value="false"
                inline-prompt
                active-text="是"
                inactive-text="否"
            /></template>
          </el-table-column>
          <el-table-column
            prop="is_open_comment"
            label="是否启用评论"
            width="85"
          >
            <template #default="scope">
              <el-switch
                v-model="scope.row.is_open_comment"
                :active-value="true"
                :inactive-value="false"
                inline-prompt
                active-text="是"
                inactive-text="否"
            /></template> </el-table-column
          ><el-table-column prop="need_account" label="是否需要账户" width="85">
            <template #default="scope">
              <el-switch
                v-model="scope.row.need_account"
                :active-value="true"
                inline-prompt
                :inactive-value="false"
                active-text="是"
                inactive-text="否"
            /></template> </el-table-column
          ><el-table-column
            prop="has_membership"
            label="仅限会员可见"
            width="85"
          >
            <template #default="scope">
              <el-switch
                v-model="scope.row.has_membership"
                :active-value="true"
                :inactive-value="false"
                inline-prompt
                active-text="是"
                inactive-text="否"
            /></template>
          </el-table-column>
          <el-table-column prop="comment_count" label="评论数" width="80" />
          <el-table-column prop="create_time" label="创建时间" width="120" />
          <el-table-column prop="update_time" label="修改时间" width="120" />
          <el-table-column fixed="right" label="编辑"
            ><template #default>
              <el-button link type="primary" size="small" @click="handleClick"
                >Detail</el-button
              >
              <el-button link type="primary" size="small">Edit</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="article-pagination">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="articles.count"
            v-model:current-page="articles_filter.count"
            :current-change="
              (page) => {
                articles_filter.count = page;
                GetArticle();
              }
            "
            :prev-click="
              () => {
                articles_filter.count--;
                GetArticle();
              }
            "
            :next-click="
              () => {
                articles_filter.count++;
                GetArticle();
              }
            "
          />
        </div>
      </div>
    </div>
    <div ref="articleFrom" class="animate__animated add-article">
      <div class="add-article-header">
        <div>
          <img :src="require('@/assets/images/icons/read.png')" /><b
            ><span>新增文章</span></b
          >
        </div>

        <div class="back" @click="SwitchToAddArticle">
          <img :src="require('@/assets/images/icons/back.png')" /><span
            >返回</span
          >
        </div>
      </div>
      <div class="add-article-form">
        <el-form
          :model="articleInfo"
          label-width="200px"
          :rules="article_rule"
          ref="articleRef"
          ><el-form-item label="文章标题" prop="title">
            <el-input v-model="articleInfo.title" clearable /> </el-form-item
          ><el-form-item label="文章封面" prop="cover">
            <el-upload
              class="upload-demo"
              style="width: 100%"
              ref="fileList"
              drag
              action="http://127.0.0.1/api/article/"
              :limit="1"
              list-type="picture"
              :auto-upload="false"
              :data="articleInfo"
              accept=".jpg,.png,.jpeg"
              :on-change="
                (file, files) => {
                  console.log(file, files);
                  articleInfo.cover = file.raw;
                }
              "
              :on-exceed="uploadExceed"
            >
              <el-icon class="el-icon--upload"><upload-filled /></el-icon>
              <div class="el-upload__text">
                将文件拖入或者 <em>点击上传</em>
              </div>
              <template #tip>
                <div class="el-upload__tip">
                  仅支持.jpg, .png, .jpeg格式，文件最大不超过5M
                </div>
              </template>
            </el-upload> </el-form-item
          ><el-form-item label="文章内容" prop="content"
            ><MdEditor
              v-model="articleInfo.content"
              :toolbars="toolbars"
              previewTheme="mk-cute"
            >
            </MdEditor></el-form-item
          ><el-form-item label="文章分类" prop="classification">
            <el-select
              v-model="articleInfo.classification"
              filterable
              placeholder="选择类别"
              style="width: 240px"
              ><el-option
                v-for="item in class_options"
                :key="item.value"
                :label="item.label"
                :value="item.value" /></el-select></el-form-item
          ><el-form-item label="文章标签" prop="label">
            <el-select
              v-model="articleInfo.label"
              filterable
              placeholder="选择标签"
              style="width: 240px"
              ><el-option
                v-for="item in label_options"
                :key="item.value"
                :label="item.label"
                :value="item.value" /></el-select></el-form-item
          ><el-form-item label="是否开启评论功能">
            <el-switch
              v-model="articleInfo.is_open_comment"
              inline-prompt
              active-text="是"
              inactive-text="否" /></el-form-item
          ><el-form-item label="是否公开文章">
            <el-switch
              v-model="articleInfo.is_public"
              inline-prompt
              active-text="是"
              inactive-text="否" /></el-form-item
          ><el-form-item label="是否需要账号">
            <el-switch
              v-model="articleInfo.need_account"
              inline-prompt
              active-text="是"
              inactive-text="否" /></el-form-item
          ><el-form-item label="仅允许会员访问">
            <el-switch
              v-model="articleInfo.has_membership"
              inline-prompt
              active-text="是"
              inactive-text="否"
          /></el-form-item>
          <el-form-item
            ><el-button type="primary" @click="submitForm(articleRef)"
              >提交</el-button
            ></el-form-item
          ></el-form
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";

import requests from "@/request/request";
import "@/assets/css/articleManage.css";
import { ElMessage } from "element-plus";
var addArticle = ref(false);
var search_article_title = ref("");
const toolbars = [
  "bold",
  "underline",
  "italic",
  "-",
  "title",
  "strikeThrough",
  "sub",
  "sup",
  "quote",
  "unorderedList",
  "orderedList",
  "task",
  "-",
  "codeRow",
  "code",
  "link",
  "image",
  "table",
  "mermaid",
  "katex",
  "-",
  "revoke",
  "next",
  "save",

  "=",
  "pageFullscreen",
  "fullscreen",
  "preview",
  "htmlPreview",
  "catalog",
  "github",
];
var fileList = ref();
var articleTable = ref(null);
var articleFrom = ref(null);
var articleInfo = ref({
  title: "",
  content: "",
  label: "",
  cover: undefined,
  classification: "",
  is_public: true,
  is_open_comment: true,
  need_account: false,
  has_membership: false,
});
var articleRef = ref();

var article_rule = ref({
  title: [
    { required: true, message: "文章标题不能为空", trigger: "blur" },
    {
      min: 2,
      max: 200,
      message: "标题长度必须介于 2 和 200 之间",
      trigger: "blur",
    },
  ],
  content: [
    { required: true, message: "文章内容不能为空", trigger: "blur" },
    {
      min: 1,
      max: 10000,
      message: "文章内容长度不能超过10000",
      trigger: "blur",
    },
  ],
  label: [
    {
      required: true,
      message: "请为该文章选择一个合适的标签",
      trigger: "change",
    },
  ],
  cover: [{ required: true, message: "请设置文章封面", trigger: "blur" }],
  classification: [
    {
      required: true,
      message: "请为该文章进行分类",
      trigger: "change",
    },
  ],
});
var label_options = ref([]);
var class_options = ref([]);
var articles = ref({
  count: 0,
  article_list: [],
  next: null,
  previous: null,
});
var articles_filter = ref({
  tilte: "",
  page: 1,
});

function uploadExceed(rawFile, uploadFiles) {
  if (articleInfo.value.cover.length >= 1) {
    fileList.value.clearFiles();
    fileList.value.handleStart(rawFile[0]);
    articleInfo.value.cover = rawFile[0];
  }
}

function GetArticle() {
  requests({
    method: "get",
    Headers: { "Content-Type": "multipart/form-data" },
    url: "/api/article/",
    params: articles_filter.value,
  }).then((res) => {
    articles.value.article_list = res.data.results;
    articles.value.count = res.data.count;
    articles.value.next = res.data.next;
    articles.value.previous = res.data.previous;
  });
}

function init() {
  requests({
    method: "get",
    Headers: { "Content-Type": "multipart/form-data" },
    url: "/api/article/class/",
  }).then((res) => {
    if (res.data.code == 10000) {
      class_options.value = res.data.data;
    }
  });
  requests({
    method: "get",
    Headers: { "Content-Type": "multipart/form-data" },
    url: "/api/article/label/",
  }).then((res) => {
    if (res.data.code == 10000) {
      label_options.value = res.data.data;
    }
  });
  GetArticle();
}
init();
function UpdateArticle() {}
async function submitForm(ref) {
  if (!ref) return;
  await ref.validate((valid, fields) => {
    if (valid) {
      var formData = new FormData();
      formData.append("title", articleInfo.value.title);
      formData.append("cover", articleInfo.value.cover);
      formData.append("content", articleInfo.value.content);
      formData.append("classification", articleInfo.value.classification);
      formData.append("has_membership", articleInfo.value.has_membership);
      formData.append("is_open_comment", articleInfo.value.is_open_comment);
      formData.append("is_public", articleInfo.value.is_public);
      formData.append("label", articleInfo.value.label);
      formData.append("need_account", articleInfo.value.need_account);
      requests({
        method: "post",
        Headers: { "Content-Type": "multipart/form-data" },
        url: "/api/article/",
        data: formData,
      }).then((res) => {
        if (res.data.code == 10035) {
          ElMessage.success(res.data.data);
          SwitchToAddArticle();
          GetArticle();
        }
      });
    } else {
      ElMessage.error("请重新检查内容是否填写正确！");
    }
  });
}

function SwitchToAddArticle() {
  if (!addArticle.value) {
    articleTable.value.classList.remove("animate__fadeInUp");
    articleTable.value.classList.add("animate__fadeOutDown");
    articleFrom.value.classList.remove("animate__fadeOutDown");
    articleFrom.value.classList.add("animate__fadeInUp");
    articleFrom.value.style.display = "block";
    setTimeout(() => {
      articleTable.value.style.display = "none";
    }, 1000);
  } else {
    articleTable.value.classList.remove("animate__fadeOutDown");
    articleTable.value.classList.add("animate__fadeInUp");
    articleFrom.value.classList.remove("animate__fadeInUp");
    articleFrom.value.classList.add("animate__fadeOutDown");
    articleTable.value.style.display = "block";
    setTimeout(() => {
      articleFrom.value.style.display = "none";
    }, 1000);
  }
  addArticle.value = !addArticle.value;
}
</script>
