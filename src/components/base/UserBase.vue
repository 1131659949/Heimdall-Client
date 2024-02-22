<template>
  <div class="common-layout row-layout">
    <el-row justify="end" class="row-layout">
      <el-col
        :span="15"
        :xs="0"
        :sm="0"
        :md="15"
        :xl="15"
        class="candle-animation"
      >
        <span>欢迎来到海姆达尔！！</span>
        <span>在这你可以畅所欲言！可以和你的朋友们聊天或者看电影！</span>
        <CandleAnimation></CandleAnimation>
      </el-col>
      <el-col :span="9" :xs="24" :sm="24" :md="9" :xl="9" class="form-position">
        <div style="display: flex; flex-direction: column; align-items: center">
          <el-image
            style="width: 80px; height: 80px; margin-bottom: 15px"
            :src="require('@/assets/images/logo/logo1.png')"
            :fit="fit"
          />
          <router-view></router-view></div
      ></el-col>
    </el-row>
  </div>
</template>
<script>
import "@/assets/css/commen.css";
import CandleAnimation from "@/components/animations/CandleAnimation";

export default {
  name: "UserBase",
  components: {
    CandleAnimation,
  },
};
</script>
<style>
.form-position {
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  display: flex !important;
  background: white;
  z-index: 1;
  border-radius: 10px 0px 0px 10px;
}

.row-layout {
  height: 100%;
  align-items: center;
  background: #ff5722;
}

.candle-animation {
  height: 100%;
  position: relative;
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: 楷体;
}

.candle-animation > span:nth-child(2) {
  margin-bottom: 300px;
}
</style>
