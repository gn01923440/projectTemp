<template>
  <h1>審查流程圖</h1>
  <div class="row col-12">
    <h1>目前審查紀錄</h1>
    <DataTable
      class="display table table-striped table-hover"
      :columns="columns"
      :data="data"
      :options="options"
      ref="table"
      width="100%"
    />
    <h1>歷史審查紀錄</h1>
    <DataTable
      class="display table table-striped table-hover"
      :columns="columns2"
      :data="data2"
      :options="options2"
      ref="table2"
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
    title: "同意 ",
    width: "",
  },
  {
    data: "",
    title: "承辦人 ",
    width: "",
  },
  {
    data: "",
    title: "審查日期 ",
    width: "",
  },
  {
    data: "",
    title: "說明 ",
    width: "",
  },
];
let dt2;

const data2 = ref([]);

const table2 = ref();

const options2 = {
  dom: "tip",

  select: true,

  language: language,

  pageLength: 25,
};
const columns2 = [
  {
    data: "",
    title: "同意 ",
    width: "",
  },
  {
    data: "",
    title: "承辦人 ",
    width: "",
  },
  {
    data: "",
    title: "審查日期 ",
    width: "",
  },
  {
    data: "",
    title: "說明 ",
    width: "",
  },
];
</script>

<style></style>
