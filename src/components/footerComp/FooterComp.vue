<template>
  <footer class="bg-ha-secondary">
    <div
      class="container mx-auto py-6 md:py-12 md:px-8 flex flex-col justify-center items-center space-y-4 md:space-y-8"
    >
      <div
        class="w-full flex justify-center items-center flex-wrap gap-5 md:gap-10"
      >
        <a
          v-for="(menu, index) in footerMenu"
          :key="index"
          :href="menu.path"
          class="font-normal text-white text-base"
          >{{ menu.label }}</a
        >
      </div>
      <div class="w-full flex justify-center items-center gap-3 md:gap-6">
        <a
          v-for="(item, index) in socialLink"
          :key="index"
          :href="item.url"
          class="w-6 h-6 rounded-full overflow-hidden"
        >
          <img
            :src="item.icon"
            alt="social-icon"
            class="w-full h-full object-contain"
          />
        </a>
      </div>
      <p class="text-white font-normal text-base text-center">
        &copy; 2020 TEST, Inc. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script>
import { footerMenu, socialLink } from "@/configs";

export default {
  name: "FooterComp",
  data() {
    return {
      footerMenu,
      socialLink,
    };
  },
};
</script>
