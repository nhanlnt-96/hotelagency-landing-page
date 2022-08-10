<template>
  <nav class="bg-white border-gray-200 py-2.5 rounded">
    <div
      class="container relative flex flex-wrap justify-between items-center mx-auto pb-3.5 lg:pb-[30px] after:content-[''] after:w-full after:h-[1px] after:bg-ha-secondary after:absolute after:left-0 after:bottom-0"
    >
      <a href="/" class="flex items-center md:mr-[17px] lg:mr-[34px]">
        <img
          src="../../assets/images/logo.png"
          class="w-10 h-10 object-contain"
          alt="Hotelagency"
        />
      </a>
      <div class="flex md:order-2">
        <button-comp
          label="Let's talk"
          :button-action="onLetTalkBtnClick"
          class-name="mr-2.5"
        />
        <button
          @click="onOpenMenuBtnClick"
          class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        :class="`${headerMenuMobileClass} z-50 left-0 top-[62px] justify-start items-center w-full md:flex md:flex-1 md:order-1 md:left-[unset] md:top-[unset] md:z-[unset]`"
      >
        <ul
          class="flex flex-col p-4 mt-4 mx-2 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-5 lg:space-x-10 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white"
        >
          <li v-for="item in headerMenu" v-bind:key="item">
            <a
              :href="item.path"
              class="block py-2 pr-4 pl-3 text-base font-medium hover:text-ha-primary rounded transition-all md:bg-transparent md:text-ha-gray-lightest md:p-0"
              aria-current="page"
              >{{ item.label }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import ButtonComp from "@/components/buttonComp/ButtonComp";
import { headerMenu } from "@/configs";

export default {
  name: "HeaderComp",
  components: { ButtonComp },
  data() {
    return {
      headerMenu,
      headerMenuMobileClass: "hidden",
    };
  },
  methods: {
    onLetTalkBtnClick: () => {
      console.log("hello world");
    },
    onOpenMenuBtnClick() {
      this.headerMenuMobileClass =
        this.headerMenuMobileClass === "hidden" ? "fixed" : "hidden";
    },
  },
};
</script>

<style scoped></style>
