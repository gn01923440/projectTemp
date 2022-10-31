<template>
  <div class="row">
    <div class="col-6">
      層級
      <n-radio-group v-model:value="value" name="radiogroup">
        <n-space>
          <n-radio
            v-for="song in songs"
            :key="song.value"
            :value="song.value"
            :label="song.label"
          />
        </n-space>
      </n-radio-group>
    </div>
    <div class="col-2 form-floating">
      <vee-field
        as="select"
        name="ver"
        class="form-control"
        id="floatingInputGrid"
      >
        <option value="1">V1</option>
        <option value="2">V2</option>
        <option value="3">V3</option>
        <option value="4">V4</option>
      </vee-field>
      <label for="floatingInputGrid">計價方式</label>
      <ErrorMessage class="text-danger" name="ver" />
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="類型 "
          aria-label="類型 "
          value=""
        />
        <label for="floatingSelect">類型 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="年度 "
          aria-label="年度 "
          value=""
        />
        <label for="floatingSelect">年度 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="名稱 "
          aria-label="名稱 "
          value=""
        />
        <label for="floatingSelect">名稱 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <label for="floatingSelect">備註 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="排序 "
          aria-label="排序 "
          value=""
        />
        <label for="floatingSelect">排序 </label>
      </span>
    </div>
  </div>
  <div class="row">
    <button class="btn" type="button" @click="gotoback">
      <i class="fa-solid fa-file-signature"></i>存檔 
    </button>
    <button class="btn" type="button" @click="gotoback">
      <i class="fa-solid fa-file-signature"></i>返回 
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const value = ref(null);
const songs = ref(
  [
    {
      value: "一科",
      label: "一科",
    },
    {
      value: "二科",
      label: "二科",
    },
    {
      value: "三科",
      label: "三科",
    },
    {
      value: "四科",
      label: "四科",
    },
  ].map((s) => {
    s.value = s.value.toLowerCase();
    return s;
  })
);
</script>

<style></style>
