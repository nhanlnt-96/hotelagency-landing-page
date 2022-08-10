<template>
  <div class="px-2 sm:px-4">
    <header-comp />
    <banner-comp />
    <fotographie-comp />
  </div>
</template>

<script>
import HeaderComp from "@/components/headerComp/HeaderComp";
import BannerComp from "@/components/bannerComp/BannerComp";
import FotographieComp from "@/components/fotographieComp/FotographieComp";

export default {
  name: "App",
  components: {
    FotographieComp,
    BannerComp,
    HeaderComp,
  },
};
</script>
