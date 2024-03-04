<template>
  <div style="margin-bottom: 15px">
    <el-input
      v-model="filter.search"
      style="width: 200px; margin-right: 15px"
      placeholder="搜索IP、告警模块"
      clearable
    />
    <el-select
      v-model="filter.level"
      placeholder="选择日志级别"
      style="width: 200px; margin-right: 15px"
    >
      <el-option :value="20" label="信息" />
      <el-option :value="30" label="警告" />
      <el-option :value="40" label="错误" />
      <el-option :value="50" label="严重错误" />
    </el-select>
    <el-date-picker
      v-model="filter.date"
      type="daterange"
      range-separator="至"
      start-placeholder=""
      end-placeholder=""
      :size="size"
      style="margin-right: 15px"
    />
    <el-button
      type="primary"
      @click="
        () => {
          page = 1;
          getLog('/api/log', filter, true);
        }
      "
      >搜索</el-button
    >
  </div>
  <div>
    <el-table
      :data="logData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column
        type="index"
        label="索引"
        :index="
          (index) => {
            return index + 1;
          }
        "
        width="100"
        fixed
      />
      <el-table-column prop="create_datetime" label="发生时间" width="180" />
      <el-table-column prop="level" label="告警等级" width="150" />
      <el-table-column prop="msg" label="告警信息" width="300" />
      <el-table-column prop="module" label="告警模块" width="200" />
      <el-table-column prop="ip" label="IP" width="200" />
      <el-table-column prop="user" label="用户" width="200" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button
            size="small"
            type="primary"
            @click="ShowDetail($event, scope.$index, scope.row)"
            >详情</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
  <el-descriptions
    title="信息详情"
    :column="1"
    class="log-descriptions animate__animated custom-scrollbar"
    id="log"
    @click="stopPropagation($event)"
  >
    <template #extra>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        style="width: 20px; cursor: pointer"
        @click="click_mounted"
      >
        <path
          fill="currentColor"
          d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
        ></path>
      </svg>
    </template>
    <el-descriptions-item label="告警等级：">{{
      detail_info.info.level
    }}</el-descriptions-item>
    <el-descriptions-item label="告警信息：">{{
      detail_info.info.msg
    }}</el-descriptions-item>
    <el-descriptions-item label="错误追踪：">{{
      detail_info.info.trace
    }}</el-descriptions-item>
    <el-descriptions-item label="IP：">{{
      detail_info.info.ip
    }}</el-descriptions-item>
  </el-descriptions>
  <div style="margin-top: 15px">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="count"
      :current-page="page"
      @current-change="
        (value) => {
          changePage(previous || next, value);
        }
      "
    />
  </div>
</template>
<script setup>
import requests from "@/request/request";
import { onMounted, onUnmounted, ref } from "vue";
import "@/assets/css/commen.css";
import "@/assets/css/log.css";
import { switchClass, stopPropagation } from "@/assets/js/common.js";
let next = ref(null);
let logData = ref([]);
let detail_info = ref({
  info: {},
  index: 0,
});
let count = ref(0);
let previous = ref(null);
let filter = ref({
  level: "",
  date: "",
  search: "",
});
let page = ref(1);

let last_filter = ref("");

const tableRowClassName = (row, rowIndex) => {
  let class_name = "";

  switch (row.row.level) {
    case "警告":
      class_name = "warning-row";
      break;
    case "错误":
      class_name = "danger-row";
      break;
    default:
  }
  return class_name;
};

function changePage(url, to_page = 1) {
  if (!url) {
    return;
  }
  let u = new URL(url);
  if (!last_filter.value) {
    return;
  }
  let _filter = JSON.parse(last_filter.value);
  page.value = to_page;
  getLog(u.pathname, _filter);
}

const click_mounted = () => {
  switchClass("log", "animate__fadeOutRight", "animate__fadeInRight");
};

onMounted(() => {
  document.addEventListener("click", click_mounted);
});

onUnmounted(() => {
  document.removeEventListener("click", click_mounted);
});

function ShowDetail(e, index, row) {
  e.stopPropagation();
  switchClass("log", "animate__fadeInRight", "animate__fadeOutRight");
  if (detail_info.value.index && detail_info.value.index == index) {
    return;
  }
  detail_info.value.index = index;
  detail_info.value.info = row;
}

function getLog(url = "/api/log", params = {}) {
  requests({
    method: "get",
    Headers: { "Content-Type": "multipart/form-data" },
    params: {
      params: JSON.stringify(params),
      page: page.value,
    },
    url: url,
  }).then(async (res) => {
    let data = res.data;
    next.value = data.next;
    count.value = data.count;
    previous.value = data.previous;
    logData.value = data.results;
    last_filter.value = JSON.stringify(params);
  });
}

getLog();
</script>
