<template>
  <Button :class="computedClass" :disabled="isDisabled">
    <div class="flex items-center justify-center">
      <svg
        v-if="showIcon"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 5V3C5 1.89543 4.10457 1 3 1C1.89543 1 1 1.89543 1 3C1 4.10457 1.89543 5 3 5H5ZM5 5V9M5 5H9M5 9V11C5 12.1046 4.10457 13 3 13C1.89543 13 1 12.1046 1 11C1 9.89543 1.89543 9 3 9H5ZM5 9H9M9 9H11C12.1046 9 13 9.89543 13 11C13 12.1046 12.1046 13 11 13C9.89543 13 9 12.1046 9 11V9ZM9 9V5M9 5V3C9 1.89543 9.89543 1 11 1C12.1046 1 13 1.89543 13 3C13 4.10457 12.1046 5 11 5H9Z"
          :stroke="color"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span class="ml-1">Button </span>
    </div>
  </Button>
</template>

<script setup>
import Button from "primevue/button";
</script>
<script>
export default {
  props: {
    showIcon: {
      type: Boolean,
      require: true,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "rgba(25, 43, 68, 1)",
    },
    class: {
      type: String,
      default: "rgba(25, 43, 68, 1)",
    },
  },
  computed: {
    computedClass() {
      return `${
        this.class
      } mt-5 pt-1 pr-2 pb-1 pl-2 text-white-color rounded-lg ${
        this.isDisabled ? "" : "hover:bg-base-color"
      }`;
    },
  },
};
</script>

<style>
button {
  font-size: 14px;
}
</style>
