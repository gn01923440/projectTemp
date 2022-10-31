<template>
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
  <div class="row">
    <button class="btn" type="button" @click="gotoback">
      <i class="fa-solid fa-file-signature"></i>查詢 
    </button>
    <button class="btn" type="button" @click="gotoback">
      <i class="fa-solid fa-file-signature"></i>清空 
    </button>
    <a href="../DeptAdd">
      <button class="btn" type="button" @click="gotoback">
        <i class="fa-solid fa-file-signature"></i>新增組織單位
      </button>
    </a>
    <a href="../DeptTree"
      ><button class="btn" type="button" @click="gotoback">
        <i class="fa-solid fa-file-signature"></i>樹狀
      </button></a
    >
  </div>
  <div class="row col-12">
    <DataTable
      class="display table table-striped table-hover"
      :columns="columns"
      :data="data"
      :options="options"
      ref="table"
      width="100%"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import DataTable from "datatables.net-vue3";
import DataTableBs5 from "datatables.net-bs5";
import Select from "datatables.net-select";
import { language } from "@/assets/tableLanguage.js";
DataTable.use(Select);
DataTable.use(Select);
DataTable.use(Select);
DataTable.use(DataTableBs5);
let dt;

const data = ref([]);

const table = ref();

const options = {
  dom: "tip",

  select: true,

  language: language,

  pageLength: 25,
};
const columns = [
  {
    data: "",
    title: "名稱",
    width: "",
  },
  {
    data: "",
    title: "描述",
    width: "",
  },
  {
    data: "",
    title: "建檔者",
    width: "",
  },
  {
    data: "",
    title: "作業 ",
    width: "",
  },
];
</script>

<style></style>
