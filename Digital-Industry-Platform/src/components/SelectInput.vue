<template>
  <div class="row col-10 mb-2 ms-2">
    <div class="form-floating px-0">
      <input
        type="text"
        class="form-control"
        list="detailList"
        name="myBrowser"
        id="floatingInput"
        placeholder="name@example.com"
        :value="dtSelected"
        @change="$emit('update:dtSelected', $event.target.value)"
      />
      <label for="floatingInput" class="px-4">
        <slot name="title">{{ detailLable }}</slot></label
      >
      <datalist id="detailList">
        <option
          v-for="dt in detailList"
          :key="dt.value"
          :value="dt.value"
        ></option>
      </datalist>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const dt = ref("");
const detailList = ref([]);
const detailLable = ref("");
const props = defineProps({
  detailList: Array,
  detailLable: String,
  dtSelected: String,
});
detailList.value = props.detailList;
detailLable.value = props.detailLable;
</script>
