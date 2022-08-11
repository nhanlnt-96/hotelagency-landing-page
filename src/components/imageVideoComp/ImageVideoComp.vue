<template>
  <div class="flex justify-center items-center flex-col">
    <div class="w-full lg:w-7/12">
      <p
        class="uppercase text-base md:text-lg font-normal text-ha-gray-lightest text-center"
      >
        2. Imagevideo
      </p>
      <h6
        class="text-black font-bold text-3xl text-center text-2xl md:text-[40px] md:leading-[48px] mt-3 md:mt-6"
      >
        Einzigartige
        <span class="text-ha-secondary underline">Imagevideos</span> die
        Überzeugen
      </h6>
      <p
        class="font-normal text-base md:text-lg text-ha-gray-lightest mt-[25px] mb-[33px] text-center"
      >
        Wenige gelaber und viel Fazination! Schauen Sie isch das Video an, das
        wir für das Unique Hotel gedcreht haben. Mit dabei waren auch
        Influencer, die für mehr Leben gesorgt haben.
      </p>
    </div>
    <div class="w-full flex justify-center items-center mt-5 lg:mt-10">
      <div class="w-[300px] sm:w-[420px] lg:w-[840px]">
        <div class="w-full relative video-player__container">
          <div class="absolute w-full h-full left-0 top-0 z-10">
            <img
              :src="IphoneBorder"
              alt="iphone-border"
              class="w-full h-full object-contain"
            />
          </div>
          <div
            class="absolute w-full h-full top-0 left-0 flex justify-center items-center z-10"
          >
            <button
              @click="onPlayVideoBtnClick"
              v-if="!isPlayedVideo"
              class="border-none w-[75px] h-[75px] lg:w-[150px] lg:h-[150px] outline-none bg-transparent"
            >
              <img :src="PlayButton" alt="play-button" />
            </button>
          </div>
          <div
            :class="`absolute w-full h-full left-0 top-0 p-[0.5px] sm:p-0.5 lg:p-1 rounded-[25px] sm:rounded-[38px] 
            lg:rounded-[74px] overflow-hidden ${isPlayedVideo ? 'z-50' : ''}`"
          >
            <img
              v-if="!isPlayedVideo"
              :src="PlayerBackground"
              alt="player-background"
              class="w-full h-full object-cover"
            />
            <video
              v-else
              autoplay
              controls
              muted
              @pause="onPauseVideoBtnClick"
              class="w-full h-full object-cover z-50"
            >
              <source
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center items-center mt-6">
      <button-comp label="Let's talk" />
    </div>
  </div>
  <div class="mb-[1000px]"></div>
</template>

<script>
import IphoneBorder from "@/assets/images/image-videos/iphone-border.png";
import PlayButton from "@/assets/images/image-videos/play-button.png";
import PlayerBackground from "@/assets/images/image-videos/video-play-bg.png";
import ButtonComp from "@/components/buttonComp/ButtonComp";

export default {
  name: "ImageVideoComp",
  components: { ButtonComp },
  data() {
    return {
      IphoneBorder,
      PlayButton,
      PlayerBackground,
      isPlayedVideo: false,
    };
  },
  methods: {
    onPlayVideoBtnClick() {
      this.isPlayedVideo = true;
    },
    onPauseVideoBtnClick() {
      this.isPlayedVideo = false;
    },
  },
};
</script>

<style scoped lang="scss">
.video-player {
  &__container {
    padding-bottom: calc(410 / 840 * 100%);
  }
}
</style>
