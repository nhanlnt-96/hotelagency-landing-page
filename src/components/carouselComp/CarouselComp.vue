<template>
  <div class="slider-container">
    <div class="slider-wrapper">
      <div
        class="transition-all slider-items"
        v-bind:style="{ transform: `translateX(-${sliderItemsMove})` }"
        ref="sliderItemsRef"
      >
        <div
          class="w-full sm:w-6/12 lg:w-4/12 px-0 sm:px-1 item-container"
          v-for="(slide, index) in contentData"
          :key="index"
        >
          <div class="relative w-full item-wrapper">
            <img
              :src="slide"
              :alt="`carousel-image-${index + 1}`"
              class="absolute left-0 top-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center items-center mt-5 md:mt-11 slider-pagination">
    <div class="space-x-2">
      <button
        v-for="item in totalSliderPagination"
        v-bind:key="item"
        :class="`w-4 h-4 rounded-full bg-ha-gray-lighter ${
          item === clickedButton ? 'bg-ha-secondary' : ''
        }`"
        @click="onClickNextSlideBtnClick(item)"
      ></button>
    </div>
  </div>
</template>

<script>
import "./CarousleComp.scss";

export default {
  name: "CarouselComp",
  props: {
    contentData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentScreenWidth: 0,
      totalSliderPagination: this.onCountSliderPagination(),
      sliderItemsMove: "0px",
      clickedButton: 1,
    };
  },
  beforeCreate() {
    this.currentScreenWidth = window.innerWidth;
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.onWindowResize();
        this.totalSliderPagination = this.onCountSliderPagination();
      });
    });
  },
  beforeUnmount() {
    window.addEventListener("resize", () => {
      this.onWindowResize();
      this.totalSliderPagination = this.onCountSliderPagination();
    });
  },
  methods: {
    onWindowResize() {
      this.currentScreenWidth = window.innerWidth;
    },
    onCountSliderPagination() {
      let itemPerSlide = 0;
      if (this.currentScreenWidth >= 1024) {
        itemPerSlide = 3;
      } else if (
        this.currentScreenWidth >= 640 &&
        this.currentScreenWidth < 1024
      ) {
        itemPerSlide = 2;
      } else {
        itemPerSlide = 1;
      }

      return Math.ceil(this.contentData.length / itemPerSlide);
    },
    onClickNextSlideBtnClick(slideNumber) {
      const sliderItemsWidth = this.$refs.sliderItemsRef.offsetWidth;
      this.sliderItemsMove = `${sliderItemsWidth * (slideNumber - 1)}px`;
      this.clickedButton = slideNumber;
    },
  },
};
</script>
