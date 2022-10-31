<template>
  <div>研發補助</div>
  <div class="row col-12 mb-3">
    <n-space item-style="display: flex;" align="center">
      <n-checkbox v-model:checked="value"> 本計畫無此項目 </n-checkbox>
    </n-space>
  </div>

  <h6>廠商清單</h6>

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

  <n-data-table :columns="columns" :data="data"></n-data-table>

  <n-modal v-model:show="showModal">
    <n-card
      title="審查紀錄"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
      style="width: 80%; position: fixed; top: 10%; left: 10%"
    >
      <n-scrollbar style="max-height: 20rem">
        <add-firm />
      </n-scrollbar>
    </n-card>
  </n-modal>
</template>

<script setup>
import { ref } from "vue";

import AddFirm from "./AddFirm.vue";
const showModal = ref(true);
const columns = [
  { type: "selection" },
  { key: "actions", title: "作業" },
  { key: "name", title: "廠商名稱" },
  { key: "unifNo", title: "統一編號" },
  { key: "chief", title: "負責人" },
  { key: "contact", title: "連絡人" },
  { key: "contactTel", title: "連絡人電話" },
  { key: "contactEmail", title: "連絡人信箱" },
];
const data = [{ name: "資拓宏宇" }];
</script>

<style></style>
