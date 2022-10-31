<template>
  <div class="form-floating">
    <select
      class="form-select"
      id="floatingSelectGrid"
      aria-label="Floating label select example"
    >
      <option v-for="opt in optList" :key="opt.value" :value="opt.value">
        {{ opt.value }}
      </option>
    </select>
    <label for="floatingSelectGrid">option</label>
  </div>
</template>

<script setup>
const props = defineProps({
  optList: Array,
});
const optList = props.optList;
console.log(optList);
</script>
