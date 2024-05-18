<template>
  <div class="p-[120px]">
    <!-- Mini Icon Button -->
    <div class="p-5">
      <MiniIconButton
        color="rgba(25, 43, 68, 1)"
        class="hover:bg-black-color-alpha-6"
      />
      <MiniIconButton
        color="rgba(25, 43, 68, 1)"
        class="ml-5 border shadow-sm hover:bg-white"
      />
    </div>

    <!-- Radio Button -->
    <CustomRadioButton :categories="radiocategories" />

    <!-- CheckBox -->

    <CustomCheckBoxGroup :categories="checkBoxCategories" />

    <!-- Button Group -->
    <div class="flex flex-col w-[150px] border rounded-xl mt-5 p-5">
      <!-- set bg-color and showIcon as true or false -->
      <CustomButtonField class="bg-base-color" :showIcon="false" />
      <CustomButtonField
        class="bg-white-color text-black-color hover:bg-black-color-alpha-10"
        :showIcon="false"
      />
      <CustomButtonField
        class="bg-white-color text-red-color hover:bg-black-color-alpha-10"
        :showIcon="false"
      />
      <CustomButtonField
        class="bg-base-color text-white-color"
        :showIcon="true"
        color="white"
      />

      <CustomButtonField
        class="bg-white-color text-black-color hover:bg-black-color-alpha-10"
        :showIcon="true"
      />

      <CustomButtonField
        class="bg-white-color text-red-color hover:bg-black-color-alpha-10"
        :showIcon="true"
        color="red"
      />

      <CustomButtonField
        class="bg-base-color text-black-color-60"
        :showIcon="true"
        color="#F0F0F0C7"
        :isDisabled="true"
      />

      <CustomButtonField
        class="bg-white-color text-black-color-60"
        :showIcon="true"
        color="#99A1AC"
        :isDisabled="true"
      />
    </div>

    <!-- DropDown -->
    <DropDownField />
  </div>
</template>

<script setup>
import { ref } from "vue";
import MiniIconButton from "@/components/common/MiniIconButton.vue";
import CustomButtonField from "@/components/common/CustomButtonField.vue";
import DropDownField from "@/components/common/DropDownField.vue";
import CustomRadioButton from "../../common/CustomRadioButtonGroup.vue";
import CustomCheckBoxGroup from "../../common/CustomCheckBoxGroup.vue";

const radiocategories = ref([
  { name: "Radio", key: "R1" },
  { name: "Radio1", key: "R2" },
]);

const checkBoxCategories = ref([
  { name: "Accounting", key: "CheckBox1" },
  { name: "Marketing", key: "CheckBox2" },
  { name: "Production", key: "CheckBox3" },
  { name: "Research", key: "CheckBox4" },
]);
</script>
