<template>
  <div style="height: 100%; display: inline-flex; position: relative">
    <video
      :srcObject="stream"
      ref="videoScreen"
      id="videoScreen"
      style="width: 100%; position: relative"
      autoplay
    ></video>
    <div style="position: absolute; bottom: 0px">
      <el-button @click="PictureInPicture">画中画</el-button>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, defineProps } from "vue";
const props = defineProps({
  uuid: { type: String, required: true },
  vedio: { type: Boolean, default: true },
  audio: { type: Boolean, default: true },
});
const stream = ref(null);
const constraints = {
  audio: true,
  video: {
    width: { min: 1024 },
    height: { min: 576 },
  },
};

const stop = () => {
  stream.value.getTracks().forEach((track) => {
    console.log("stopping", track);
    track.stop();
  });
  stream.value = null;
};

function PictureInPicture() {
  let video = document.getElementById("videoScreen");
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  } else {
    if (document.pictureInPictureEnabled) {
      video.requestPictureInPicture();
    }
  }
}

const play = async () => {
  const frontCamStream = await navigator.mediaDevices.getUserMedia(constraints);
  console.log("streaming", frontCamStream);
  stream.value = frontCamStream;
};

onMounted(() => play());
onBeforeUnmount(() => stop());
</script>
