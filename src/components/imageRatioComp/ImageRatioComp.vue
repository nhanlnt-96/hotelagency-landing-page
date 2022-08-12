<template>
  <div :style="{ width: `${imageWidthResponsive || imageWidth}px` }">
    <div
      :style="{
        paddingBottom: `calc((${imageHeight} / ${imageWidth}) * 100%)`,
      }"
      class="w-full relative"
    >
      <img
        :src="imageSrc"
        :alt="imageAlt"
        :class="`w-full h-full absolute left-0 top-0 ${imageObjectFit}`"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageRatioComp",
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      default: "image-ratio",
    },
    imageWidth: {
      type: Number,
      default: 100,
    },
    imageWidthResponsive: {
      type: Number,
    },
    imageHeight: {
      type: Number,
      default: 100,
    },
    imageObjectFit: {
      type: String,
      default: "object-contain",
    },
  },
};
</script>
