<template>
  <div></div>
</template>
<script setup>
import "@/assets/css/search.css";
import { useRoute } from "vue-router";
import { ref } from "vue";
const route = useRoute();
const kw = route.params.kw;
</script>
