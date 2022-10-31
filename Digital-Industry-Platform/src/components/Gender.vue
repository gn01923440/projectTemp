<template>
  <n-radio-group v-model:value="value" name="radiogroup">
    <n-space>
      <n-radio
        v-for="gender in genders"
        :key="gender.value"
        :value="gender.value"
        :label="gender.label"
      />
    </n-space>
  </n-radio-group>
</template>

<script setup>
import { ref } from "vue";

const value = ref(null);
const genders = ref(
  [
    {
      value: "female",
      label: "女",
    },
    {
      value: "male",
      label: "男",
    },
  ].map((g) => {
    g.value = g.value.toLowerCase();
    return g;
  })
);
</script>

<style></style>
