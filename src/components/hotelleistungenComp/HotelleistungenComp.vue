<template>
  <div class="flex flex-col justify-center items-center">
    <div class="w-full lg:w-7/12 space-y-5 md:space-y-11">
      <div>
        <h6
          class="text-black font-bold text-3xl text-center text-2xl md:text-[40px] md:leading-[48px] mt-3 md:mt-6"
        >
          Weitere
          <span class="text-ha-secondary underline">Hotelleistungen</span> im
          Überblick
        </h6>
      </div>
    </div>
    <div
      class="w-full grid grid-cols-[22px_1fr_22px] md:grid-cols-[44px_1fr_44px] justify-center items-center mt-5 md:mt-11 gap-[9px] md:gap-[18px]"
    >
      <div>
        <button
          :disabled="swiperMove === 0"
          class="w-full h-full border-none outline-none bg-transparent text-ha-secondary disabled:text-ha-gray-lighter"
          @click="onMoveSwiperBtnClick('prev')"
        >
          <img
            v-if="swiperMove === 0"
            :src="LeftGrayArrow"
            alt="left-gray-arrow"
            class="w-full h-ful object-contain"
          />
          <img
            v-else
            :src="LeftColorArrow"
            alt="left-color-arrow"
            class="w-full h-ful object-contain"
          />
        </button>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div
            ref="itemContainerWidth"
            class="transition-all swiper-items"
            v-bind:style="{ transform: `translateX(${swiperMove}px)` }"
          >
            <div
              v-for="(item, index) in hotelleistungenData"
              :key="index"
              class="w-full sm:w-6/12 xl:w-4/12 sm:px-[9px] lg:px-[18px] item-container"
            >
              <div class="w-full relative item-wrapper">
                <div
                  class="absolute left-0 top-0 w-full h-full px-5 py-6 lg:px-10 lg:py-12 border-[3px] border-ha-secondary flex flex-col justify-center items-center"
                >
                  <div class="w-[40px] md:w-[50px] lg:w-[107px]">
                    <div class="w-full pb-[100%] relative">
                      <img
                        :src="item.icon"
                        alt="icon"
                        class="w-full h-full absolute left-0 top-0 object-contain"
                      />
                    </div>
                  </div>
                  <div class="w-full text-ha-secondary mt-3.5 sm:mt-[25px]">
                    <h6 class="font-bold text-xl lg:text-2xl">
                      {{ item.title }}
                    </h6>
                    <p
                      class="mt-3.5 text-justify font-normal text-base lg:text-lg"
                    >
                      {{ item.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          :disabled="
            Math.abs(this.swiperMove) ===
            this.currentWidthPerItem * (this.totalPage - 1)
          "
          @click="onMoveSwiperBtnClick('next')"
          class="w-full h-full border-none outline-none bg-transparent text-ha-secondary disabled:text-ha-gray-lighter"
        >
          <img
            v-if="
              Math.abs(this.swiperMove) ===
              this.currentWidthPerItem * (this.totalPage - 1)
            "
            :src="RightGrayArrow"
            alt="right-gray-arrow"
            class="w-full h-ful object-contain"
          />
          <img
            v-else
            :src="RightColorArrow"
            alt="right-color-arrow"
            class="w-full h-ful object-contain"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import "./HotelleistungenComp.scss";
import { hotelleistungenData } from "@/configs";
import LeftColorArrow from "@/assets/icons/left-color-arrow.png";
import RightColorArrow from "@/assets/icons/right-color-arrow.png";
import LeftGrayArrow from "@/assets/icons/left-gray-arrow.png";
import RightGrayArrow from "@/assets/icons/right-gray-arrow.png";

export default {
  name: "HotelleistungenComp",
  data() {
    return {
      LeftColorArrow,
      RightColorArrow,
      LeftGrayArrow,
      RightGrayArrow,
      hotelleistungenData,
      swiperMove: 0,
      currentScreenWidth: 0,
      itemPerSlide: this.onCountItemPerSlide(),
      currentWidthPerItem: 0,
      totalPage: 0,
    };
  },
  beforeCreate() {
    this.currentScreenWidth = window.innerWidth;
  },
  mounted() {
    this.currentWidthPerItem = this.$refs.itemContainerWidth.offsetWidth;
    this.totalPage = Math.ceil(
      this.hotelleistungenData.length / this.itemPerSlide
    );
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        this.onWindowResize();
      });
    });
  },
  beforeUnmount() {
    window.addEventListener("resize", () => {
      this.onWindowResize();
    });
  },
  methods: {
    onWindowResize() {
      this.currentScreenWidth = window.innerWidth;
      this.currentWidthPerItem = this.$refs.itemContainerWidth.offsetWidth;
      this.itemPerSlide = this.onCountItemPerSlide();
      this.totalPage = Math.ceil(
        this.hotelleistungenData.length / this.itemPerSlide
      );
    },
    onCountItemPerSlide() {
      if (this.currentScreenWidth >= 1024) {
        return 3;
      } else if (
        this.currentScreenWidth >= 640 &&
        this.currentScreenWidth < 1024
      ) {
        return 2;
      } else {
        return 1;
      }
    },
    onMoveSwiperBtnClick(moveAction) {
      if (moveAction === "next") {
        this.swiperMove -= this.currentWidthPerItem;
      } else {
        this.swiperMove += this.currentWidthPerItem;
      }
    },
  },
};
</script>