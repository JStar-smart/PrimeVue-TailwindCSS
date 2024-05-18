<template>
  <div class="mt-5 flex flex-col gap-3">
    <div
      v-for="category of categories"
      :key="category.key"
      class="flex items-center"
    >
      <Checkbox
        class="flex items-center"
        v-model="selectedCategories"
        :inputId="category.key"
        name="dynamic"
        :value="category.name"
      />
      <label :for="category.key" class="ml-2">{{ category.name }}</label>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import Checkbox from "primevue/checkbox";

const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
});

const selectedCategories = ref(["Accounting"]);
</script>
