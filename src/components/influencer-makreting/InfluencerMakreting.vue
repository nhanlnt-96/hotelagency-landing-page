<template>
  <div
    class="bg-ha-secondary lg:py-6 xl:min-h-[540px] xl:py-0 w-full flex justify-center items-center flex-col lg:flex-row"
  >
    <div
      class="w-full lg:w-6/12 flex justify-center lg:justify-end items-center"
    >
      <image-ratio
        :image-src="LeftSideImage"
        image-alt="left-side-image"
        :image-height="540"
        :image-width="700"
      />
    </div>
    <div
      class="w-full lg:pl-10 xl:pl-[104px] lg:w-6/12 flex justify-center items-center lg:items-start flex-col p-6 lg:p-0"
    >
      <p
        class="uppercase text-base md:text-lg font-normal text-white text-center lg:text-left"
      >
        3. Influencermakreting
      </p>
      <h6
        class="text-white font-bold text-3xl text-center lg:text-left text-2xl md:text-[40px] md:leading-[48px] mt-3 md:mt-6"
      >
        Influencer,
        <span class="text-ha-dark underline">für mehr Vertrauen</span>
      </h6>
      <p
        class="font-normal text-base md:text-lg text-white mt-[25px] mb-[33px] text-center lg:text-left"
      >
        Wenige gelaber und viel Fazination! überzeugen Sie sich von den
        Zimmerbildern, die als teil des Hotelmarketings für das Unique Hotel in
        Dortmund geschossen haben!.
      </p>
      <button-comp
        label="Let's talk"
        class-name="bg-white button-custom__color"
      />
    </div>
  </div>
  <div class="container mx-auto mt-5 md:mt-11">
    <carousel-comp :content-data="carouselImageData" />
  </div>
</template>

<script>
import ImageRatio from "@/components/imageRatio/ImageRatio";
import ButtonComp from "@/components/buttonComp/ButtonComp";
import LeftSideImage from "@/assets/images/influencer-makreting/left-side-image.png";
import { carouselImageData } from "@/configs";
import CarouselComp from "@/components/carouselComp/CarouselComp";

export default {
  name: "InfluencerMakreting",
  components: { ImageRatio, ButtonComp, CarouselComp },
  data() {
    return {
      LeftSideImage,
      carouselImageData,
    };
  },
};
</script>

<style scoped>
.button-custom__color {
  color: #46bfaa;
}
</style>
