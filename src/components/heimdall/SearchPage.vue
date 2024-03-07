<template>
  <div class="search-format">
    <div class="show-keyword">
      <el-card shadow="always" class="search-kw-card">
        <span class="search-kw-text"
          ><b>{{ kw }}</b></span
        >的搜索结果
      </el-card>
    </div>
    <div v-if="loading" style="position: relative; height: 200px">
      <div class="wrapper">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <span>Loading</span>
      </div>
    </div>
    <div v-else-if="article_list.length">
      <div
        v-for="(article, index) in article_list"
        class="article-card observe"
        ref="articleCard"
        @click="router.push('/article/' + article.id)"
      >
        <SearchBox
          :src="article.cover"
          :date="article.create_time"
          :direction="index % 2 == 1 ? 'right' : 'left'"
          :content="article.content"
          :title="article.title"
          :views="article.views"
          :like="article.like"
          :count="article.comments"
          class=""
        ></SearchBox>
      </div>
      <div v-if="next">
        <LoadingButton @click="next_search_page"></LoadingButton>
      </div>
    </div>
    <div v-else>未搜索到文章</div>
  </div>
</template>
<script setup>
import "@/assets/css/search.css";
import "@/assets/css/commen.css";
import { useRoute } from "vue-router";
import requests from "@/request/request";
import { ref, onUnmounted, nextTick } from "vue";
import SearchBox from "./SearchBox.vue";
import LoadingButton from "../animations/LoadingButton.vue";
import router from "@/router";
import { io } from "@/assets/js/common";
const route = useRoute();
const kw = route.query.kw;
const next = ref(null);
const article_list = ref([]);
var articleCard = ref([]);
var loading = ref(false);

function next_search_page() {
  const url = new URL(next.value);
  requests({
    method: "get",
    Headers: { "Content-Type": "multipart/form-data" },
    params: {
      q: kw,
    },
    url: url.pathname + url.search,
  }).then(async (res) => {
    let data = res.data;
    let count = article_list.length;
    next.value = data.next;
    data.results.forEach((el) => {
      article_list.value.push(el);
    });
    await nextTick();
    Array.from(document.querySelectorAll(".observe"))
      .slice(count)
      .forEach((el) => {
        io.observe(el);
      });
  });
}

onUnmounted(() => {
  io.disconnect();
});

function init() {
  requests({
    method: "get",
    Headers: { "Content-Type": "multipart/form-data" },
    params: {
      q: kw,
    },
    url: "/api/article/",
  }).then(async (res) => {
    let data = res.data;
    next.value = data.next;
    data.results.forEach((el) => {
      article_list.value.push(el);
    });
    await nextTick();
    document.querySelectorAll(".observe").forEach((el) => {
      io.observe(el);
    });
  });
}
init();
</script>
