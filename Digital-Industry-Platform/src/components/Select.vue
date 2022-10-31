<template>
  <div class="row col-4 mb-2 ms-2">
    <select
      class="form-select"
      id="floatingSelectGrid"
      aria-label="Floating label select example"
      :value="optSelected"
      @change="$emit('update:optSelected', $event.target.value)"
    >
      <option disabled selected>{{ optLabel }}</option>
      <option v-for="opt in optList" :key="opt.value" :value="opt.value">
        {{ opt.value }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  optList: Array,
  optLabel: String,
  optSelected: String,
});
const optList = props.optList;
const optLabel = props.optLabel;
</script>
