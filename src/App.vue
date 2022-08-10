<template>
  <div class="px-2 sm:px-4">
    <header-comp />
    <banner-comp />
  </div>
</template>

<script>
import HeaderComp from "@/components/headerComp/HeaderComp";
import BannerComp from "@/components/bannerComp/BannerComp";

export default {
  name: "App",
  components: {
    BannerComp,
    HeaderComp,
  },
};
</script>
