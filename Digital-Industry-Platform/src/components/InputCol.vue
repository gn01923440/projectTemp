<template>
  <div :class="clazz">
    <div class="form-floating">
      <vee-field
        class="form-control"
        id="floatingInputGrid"
        :name="fieldName"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <label for="floatingInputGrid"
        ><span class="text-danger" v-if="isRequired">*</span>{{ label }}</label
      >
      <ErrorMessage class="text-danger" :name="fieldName" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  fieldName: String,
  modelValue: String,
  isRequired: Boolean,
  clazz: String,
});
</script>

<style></style>
