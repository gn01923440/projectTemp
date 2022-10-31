<template>
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
    title: "序號 ",
    width: "",
  },
  {
    data: "",
    title: "原版本 ",
    width: "",
  },
  {
    data: "",
    title: "變更原因 ",
    width: "",
  },
  {
    data: "",
    title: "日期 ",
    width: "",
  },
  {
    data: "",
    title: "說明 ",
    width: "",
  },
  {
    data: "",
    title: "作業",
    width: "",
  },
];
</script>

<style></style>
