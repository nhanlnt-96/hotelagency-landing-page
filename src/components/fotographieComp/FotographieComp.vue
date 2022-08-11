<template>
  <div
    class="bg-ha-gray-light lg:py-6 xl:min-h-[540px] xl:py-0 w-full flex justify-center items-center flex-col lg:flex-row"
  >
    <div
      class="w-full lg:pl-10 xl:pl-[104px] lg:w-6/12 flex justify-center items-center lg:items-start flex-col p-6 lg:p-0"
    >
      <p
        class="uppercase text-base md:text-lg font-normal text-ha-gray-lightest text-center lg:text-left"
      >
        1. Fotographie
      </p>
      <h6
        class="text-ha-secondary font-bold text-3xl text-center lg:text-left text-2xl md:text-[40px] md:leading-[48px] mt-3 md:mt-6"
      >
        Hotelbilder, <span class="text-ha-dark underline">die verkaufen</span>
      </h6>
      <p
        class="font-normal text-base md:text-lg text-ha-gray-lightest mt-[25px] mb-[33px] text-center lg:text-left"
      >
        Wenige gelaber und viel Fazination! überzeugen Sie sich von den
        Zimmerbildern, die als teil des Hotelmarketings für das Unique Hotel in
        Dortmund geschossen haben!.
      </p>
      <button-comp label="Let's talk" />
    </div>
    <div
      class="w-full lg:w-6/12 flex justify-center lg:justify-end items-center"
    >
      <image-ratio
        :image-src="RightSideImage"
        image-alt="right-side-image"
        :image-height="540"
        :image-width="700"
      />
    </div>
  </div>
  <div class="container mx-auto mt-5 md:mt-11">
    <carousel-comp :content-data="carouselContentData" />
  </div>
</template>

<script>
import RightSideImage from "@/assets/images/fotographie/right-image.png";
import ButtonComp from "@/components/buttonComp/ButtonComp";
import ImageRatio from "@/components/imageRatio/ImageRatio";
import CarouselComp from "@/components/carouselComp/CarouselComp";
import Image1 from "@/assets/images/fotographie/image-1.png";
import Image2 from "@/assets/images/fotographie/image-2.png";
import Image3 from "@/assets/images/fotographie/image-3.png";

export default {
  name: "FotographieComp",
  components: { CarouselComp, ImageRatio, ButtonComp },
  data() {
    return {
      RightSideImage,
      carouselContentData: [
        Image1,
        Image2,
        Image3,
        Image1,
        Image2,
        Image3,
        Image1,
        Image2,
        Image3,
      ],
    };
  },
};
</script>

<style scoped></style>
