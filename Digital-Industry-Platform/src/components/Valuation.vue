<template>
  <div class="col-6">
    <span class="form-floating">
      <vee-field
        name="valuationCode"
        as="select"
        class="form-control"
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
      >
        <option value="999" selected>請選擇</option>
        <option
          v-for="valuation in valuations"
          :key="valuation.code"
          :value="valuation.code"
        >
          {{ valuation.name }}
        </option>
      </vee-field>
      <label for="floatingSelect">採購方式</label>
      <ErrorMessage class="text-danger" name="valuationCode" />
    </span>
  </div>
</template>

<script setup>
import { useComponentStore } from "@/stores/component.js";
import { storeToRefs } from "pinia";

const { valuationAPI } = useComponentStore();
const { valuations } = storeToRefs(useComponentStore());
valuationAPI();
defineProps({
  modelValue: String,
});
</script>
