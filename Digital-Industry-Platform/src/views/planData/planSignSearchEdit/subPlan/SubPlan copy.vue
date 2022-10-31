<template>
  <DataTable
    class="display table table-striped table-hover"
    :columns="columns"
    :data="data"
    :options="options"
    ref="table"
    width="100%"
  />
  <n-config-provider :theme-overrides="themeOverrides">
    <n-data-table
      :columns="columns"
      :data="gstpList"
      :pagination="false"
      :bordered="false"
      size="large"
    />
  </n-config-provider>
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
    title: "分項計畫 ",
    width: "",
  },
  {
    data: "",
    title: "權重",
    width: "",
  },
  {
    data: "",
    title: "人力數量",
    width: "",
  },
  {
    data: "",
    title: "政府經費(元)",
    width: "",
  },
  {
    data: "",
    title: "自籌經費(元)",
    width: "",
  },
  {
    data: "",
    title: "分項計畫分包",
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
