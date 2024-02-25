<template>
  <div class="search-format">
    <div class="show-keyword">
      <el-card shadow="always" class="search-card">
        <span class="search-kw-text"
          ><b>{{ kw }}</b></span
        >的搜索结果
      </el-card>
    </div>
    <div>
      <div v-for="index in 5" class="article-card">
        <SearchBox
          src="http://img.netbian.com/file/2024/0105/003447GK5nZ.jpg"
          date="2024年08月18日 15:23:12"
          :direction="index % 2 == 1 ? 'right' : 'left'"
        ></SearchBox>
      </div>
    </div>
  </div>
</template>
<script setup>
import "@/assets/css/search.css";
import "@/assets/css/commen.css";
import { useRoute } from "vue-router";
import SearchBox from "./SearchBox.vue";
import { ref } from "vue";
const route = useRoute();
const kw = route.query.kw;
</script>
