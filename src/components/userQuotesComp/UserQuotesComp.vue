<template>
  <div class="bg-[#F9FAFB] mt-5 md:mt-11">
    <div
      class="container mx-auto py-12 md:py-[96px] flex justify-center items-center"
    >
      <div class="w-full lg:w-7/12 flex flex-col justify-center items-center">
        <image-ratio-comp
          :image-src="CompanyLogo1"
          :image-width="180"
          :image-height="32"
          image-alt="company-logo-1"
        />
        <p
          class="font-medium text-xl md:text-2xl text-black text-center mt-5 md:mt-10 mb-4 md:mb-8"
        >
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in
          laborum sed rerum et corporis."
        </p>
        <div class="flex justify-center items-center">
          <div class="w-10 h-10 rounded-full overflow-hidden mr-4">
            <img
              :src="UserAvatar"
              alt="user-avatar"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="text-base font-medium flex justify-center items-center">
            <p class="text-black">Judith Black</p>
            <p class="text-[#4F46E5] mx-1">/</p>
            <p class="text-ha-gray-lightest">CEO, Workcation</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageRatioComp from "@/components/imageRatioComp/ImageRatioComp";
import CompanyLogo1 from "@/assets/images/user-quotes/company-logo-1.png";
import UserAvatar from "@/assets/images/user-quotes/user-avatar.png";

export default {
  name: "UserQuotesComp",
  components: { ImageRatioComp },
  data() {
    return {
      CompanyLogo1,
      UserAvatar,
    };
  },
};
</script>
