<template>
  <div class="loader">
    <i
      v-for="(item, index) in 72"
      :style="{
        '--rz': index * 5 + 'deg',
        '--delay': (4 / 72) * index - 4 + 's',
        '--tx': Math.random(1000) * 150 + 'px',
        '--ty': Math.random(1000) * 50 + 'px',
        '--hue': index * 5,
      }"
    ></i>
  </div>
</template>
<script>
export default {
  name: "DissolveLoading",
};
</script>
<style>
.loader {
  width: 300px;
  height: 300px;
  background-color: #000;
  position: relative;
  /* 执行旋转动画：动画名 时长 线性的 无限次播放 */
  animation: spin 16s linear infinite;
  /* 模糊滤镜+对比度滤镜实现溶球效果 */
  filter: blur(2px) contrast(2);
}
.loader i {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: hsl(var(--hue), 75%, 75%);
  position: absolute;
  left: 150px;
  top: 150px;
  transform: rotateZ(var(--rz)) translateY(80px);
  /* 执行溶球移动消失动画：动画名 时长 加速后减速 无限次播放 */
  animation: move 4s ease-in-out infinite;
  /* 动画延迟时间 */
  animation-delay: var(--delay);
}

/* 定义动画 */
/* 圆环旋转动画 */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
/* 溶球移动消失动画 */
@keyframes move {
  0% {
    transform: rotateZ(var(--rz)) translateY(64px) translate(0, 0) scale(0);
  }
  2% {
    transform: rotateZ(var(--rz)) translateY(64px) translate(0, 0) scale(1.25);
  }
  20% {
    transform: rotateZ(var(--rz)) translateY(64px) translate(0, 0) scale(1.25);
  }
  90%,
  100% {
    transform: rotateZ(var(--rz)) translateY(64px)
      translate(var(--tx), var(--ty)) scale(0);
  }
}
</style>
