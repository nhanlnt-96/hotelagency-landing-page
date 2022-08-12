<template>
  <div class="px-2 sm:px-4 xl:px-0">
    <header-comp />
    <div class="container mx-auto space-y-5 md:space-y-11">
      <banner-comp />
      <fotographie-comp />
      <image-video-comp />
      <influencer-makreting-comp />
      <verbesserungen-comp />
      <hotelleistungen-comp />
    </div>
    <user-quotes-comp />
  </div>
</template>

<script>
import HeaderComp from "@/components/headerComp/HeaderComp";
import BannerComp from "@/components/bannerComp/BannerComp";
import FotographieComp from "@/components/fotographieComp/FotographieComp";
import ImageVideoComp from "@/components/imageVideoComp/ImageVideoComp";
import InfluencerMakretingComp from "@/components/influencerMakretingComp/InfluencerMakretingComp";
import VerbesserungenComp from "@/components/verbesserungenComp/VerbesserungenComp";
import HotelleistungenComp from "@/components/hotelleistungenComp/HotelleistungenComp";
import UserQuotesComp from "@/components/userQuotesComp/UserQuotesComp";

export default {
  name: "App",
  components: {
    UserQuotesComp,
    HotelleistungenComp,
    VerbesserungenComp,
    InfluencerMakretingComp,
    ImageVideoComp,
    FotographieComp,
    BannerComp,
    HeaderComp,
  },
};
</script>
