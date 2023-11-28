<template>
  <div><video></video></div>
</template>
<script>
export default {
  name: "ChatVedio",
  props: {
    uuid: { type: String, required: true },
    vedio: { type: Boolean, default: true },
    audio: { type: Boolean, default: true },
  },
  setup(props, context) {
    const component = {
      audio: props.audio,
      vedio: props.video,
    };
    navigator.mediaDevices
      .getUserMedia(component)
      .then((stream) => {
        console.log(stream);
      })
      .catch((err) => {
        alert(err);
      });
    function init() {}
    MediaDevices;
    return {};
  },
};
</script>
