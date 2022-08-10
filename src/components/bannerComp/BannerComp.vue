<template>
  <div
    class="container mx-auto w-full py-8 lg:py-16 flex flex-col lg:flex-row justify-center items-center space-x-4"
  >
    <div class="flex-1">
      <div class="w-full xl:w-9/12">
        <h1
          class="text-ha-secondary text-center lg:text-left font-bold text-4xl md:text-[55px] md:leading-[65px]"
        >
          Mehr Direktbuchungen & Digitale Austrahlung
          <br />
          <span class="text-black font-extrabold">für Ihr Hotel</span>
        </h1>
        <p
          class="text-black font-normal text-base md:text-lg text-center lg:text-left mt-6 md:mt-9 lg:mt-[53px]"
        >
          Finden Sie die passende Kombination aus Kreativität, Technologien &
          Marketing, um Ihre Hotel zu Optimieren:
          <span class="italic font-medium"
            >Schnelle Ladezeiten, Professionelle Bilder & Erstklassige User
            Experience</span
          >
        </p>
        <div
          class="w-full space-y-3.5 md:space-y-0 md:space-x-3.5 flex items-center justify-center lg:justify-start flex-col md:flex-row mt-6 lg:mt-12"
        >
          <button-comp label="Let's talk" />
          <button-comp :is-primary="false" label="Lösungen entdecken" />
        </div>
        <div
          class="w-full flex flex-col justify-center items-center mt-9 lg:mt-[77px]"
        >
          <div class="flex mb-2.5 -space-x-4">
            <img
              v-for="user in bannerUserAvatar"
              v-bind:key="user"
              class="w-[46px] h-[46px] rounded-full"
              :src="user"
              alt="banner-user-avatar"
            />
          </div>
          <p class="font-normal text-base text-black">
            Zahlreiche Kunden, die wir geholfen haben
          </p>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center mt-9 lg:mt-0">
      <image-ratio
        :image-src="rightSideImage"
        image-alt="banner-right-side-image"
        :image-width="350"
        :image-width-responsive="currentScreenWidth < 1024 ? 250 : 0"
        :image-height="715"
      />
    </div>
  </div>
</template>

<script>
import ImageRatio from "@/components/imageRatio/ImageRatio";
import RightSideImage from "@/assets/images/banner/right-phone-image.png";
import ButtonComp from "@/components/buttonComp/ButtonComp";
import { bannerUserAvatar } from "@/configs";

export default {
  name: "BannerComp",
  components: { ButtonComp, ImageRatio },
  data() {
    return {
      rightSideImage: RightSideImage,
      bannerUserAvatar,
      currentScreenWidth: window.innerWidth,
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onWindowResize);
    });
  },
  beforeUnmount() {
    window.addEventListener("resize", this.onWindowResize);
  },
  methods: {
    onWindowResize() {
      this.currentScreenWidth = innerWidth;
    },
  },
};
</script>

<style scoped></style>
