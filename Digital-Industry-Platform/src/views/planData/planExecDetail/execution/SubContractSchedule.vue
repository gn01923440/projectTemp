<template>
  <button class="col-2 btn">匯出PDF</button>
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
    title: "計畫所有分包/協辦項目名稱  ",
    width: "",
  },
  {
    data: "",
    title: "預定分包/協力單位",
    width: "",
  },
  {
    data: "",
    title: "實際分包/協辦項目名稱 ",
    width: "",
  },
  {
    data: "",
    title: "實際分包/協力單位",
    width: "",
  },
  {
    data: "",
    title: "經費來自於(分項計畫) ",
    width: "",
  },
  {
    data: "",
    title: "分包/協辦情形 ",
    width: "",
  },
  {
    data: "",
    title: "計價方式 ",
    width: "",
  },
  {
    data: "",
    title: "計畫書編列金額  ",
    width: "",
  },
  {
    data: "",
    title: "分包/協辦計畫簽約金額",
    width: "",
  },
  {
    data: "",
    title: "政府經費(元) ",
    width: "",
  },
  {
    data: "",
    title: "分包/協辦計畫簽約金額",
    width: "",
  },
  {
    data: "",
    title: "自籌款(元) ",
    width: "",
  },
  {
    data: "",
    title: "分包/協辦計畫簽約金額",
    width: "",
  },
  {
    data: "",
    title: "合計(含稅) ",
    width: "",
  },
  {
    data: "",
    title: "分包/協辦計畫簽約金額",
    width: "",
  },
  {
    data: "",
    title: "合計(未稅) ",
    width: "",
  },
];
</script>

<style></style>
