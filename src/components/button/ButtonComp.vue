<template>
  <button
    :class="`py-[9px] px-[17px] shadow-ha-button-shadow rounded-md w-[125px] lg:w-[250px] font-medium text-base ${
      isPrimary
        ? 'text-white bg-ha-primary'
        : 'bg-white border border-ha-dark-light text-ha-dark-light'
    }
      ${className}
    }`"
    @click="buttonAction"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "ButtonComp",
  props: {
    label: {
      type: String,
      required: true,
    },
    isPrimary: {
      type: Boolean,
      default: true,
    },
    className: String,
    buttonAction: Function,
  },
};
</script>

<style scoped></style>
