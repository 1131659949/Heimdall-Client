<template>
  <el-card>
    <div
      :class="{
        'flex-layout': true,
        'direction-right': direction == 'right',
        'direction-left': direction == 'left',
      }"
    >
      <el-image
        alt="文章封面"
        src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
        style="width: 50%; min-height: 200px"
        lazy
      ></el-image>
      <div
        :class="{
          'card-description': true,
          'description-right': direction == 'right',
          'description-left': direction == 'left',
        }"
      >
        <div class="article-date">
          发表于<span>{{ date }}</span>
        </div>
      </div>
    </div>
  </el-card>
</template>
<script setup>
import { defineProps } from "vue";
var props = defineProps({
  date: { type: String, required: true },
  src: { type: String, required: true },
  direction: { type: String, default: "left" },
});
console.log(props.direction);
</script>
