<template>
  <div class="px-2 sm:px-4">
    <header-comp />
    <div class="container mx-auto space-y-5 md:space-y-11">
      <banner-comp />
      <fotographie-comp />
      <image-video-comp />
      <influencer-makreting />
    </div>
  </div>
</template>

<script>
import HeaderComp from "@/components/headerComp/HeaderComp";
import BannerComp from "@/components/bannerComp/BannerComp";
import FotographieComp from "@/components/fotographieComp/FotographieComp";
import ImageVideoComp from "@/components/imageVideoComp/ImageVideoComp";
import InfluencerMakreting from "@/components/influencer-makreting/InfluencerMakreting";

export default {
  name: "App",
  components: {
    InfluencerMakreting,
    ImageVideoComp,
    FotographieComp,
    BannerComp,
    HeaderComp,
  },
};
</script>
