<template>
  <div class="row col-10 mb-2 ms-2">
    <div class="form-floating px-0">
      <input
        type="text"
        class="form-control"
        list="objList"
        name="myBrowser"
        id="floatingInput"
        placeholder="name@example.com"
        v-model="obj"
      />
      <label for="floatingInput" class="px-4">
        <slot name="title"></slot
      ></label>
      <datalist id="objList">
        <option
          v-for="obj in objList"
          :key="obj.value"
          :value="obj.value"
        ></option>
      </datalist>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  objList: Array,
});
const objList = props.objList;
</script>
