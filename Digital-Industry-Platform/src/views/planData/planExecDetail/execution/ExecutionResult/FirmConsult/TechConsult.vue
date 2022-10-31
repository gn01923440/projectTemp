<template>
  <div>技術輔導</div>

  <div class="row col-12">
    <div class="col-4">
      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="floatingInputGrid"
          placeholder="name@example.com"
          value=""
        />
        <label for="floatingInputGrid">廠商名稱</label>
      </div>
    </div>
    <div class="col-8">
      <div class="form-floating">
        <button type="button" class="btn" value="">
          <span><i class="fas fa-search"></i></span>查詢
        </button>
        <button type="button" class="btn" value="">新增廠商</button>
        <button type="button" class="btn" value="">批次匯入</button>
        <button type="button" class="btn" value="">批次刪除</button>
      </div>
    </div>
    <n-data-table :columns="columns" :data="data" />
  </div>
</template>
<script setup>
import { ref } from "vue";
const data = ref([]);
const columns = [
  {
    key: "",
    title: "作業 ",
    width: "",
  },
  {
    key: "",
    title: "推薦 ",
    width: "",
  },
  {
    key: "",
    title: "廠商名稱 ",
    width: "",
  },
  {
    key: "",
    title: "統一編號 ",
    width: "",
  },
  {
    key: "",
    title: "負責人 ",
    width: "",
  },
  {
    key: "",
    title: "連絡人 ",
    width: "",
  },
  {
    key: "",
    title: "連絡人電話 ",
    width: "",
  },
  {
    key: "",
    title: "連絡人信箱 ",
    width: "",
  },
  {
    key: "",
    title: "排序 ",
    width: "",
  },
];
</script>
