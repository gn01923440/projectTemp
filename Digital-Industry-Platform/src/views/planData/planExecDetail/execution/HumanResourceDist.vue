<template>
  <div class="row">
    <n-radio
      :checked="checkedValue === '1'"
      value="1"
      name="basic-demo"
      @change="handleChange"
    >
      本計畫無
    </n-radio>
    <n-radio
      :checked="checkedValue === '2'"
      value="2"
      name="basic-demo"
      @change="handleChange"
    >
      本期無
    </n-radio>
    <n-radio
      :checked="checkedValue === '3'"
      value="3"
      name="basic-demo"
      @change="handleChange"
    >
      本期派遣人才如下表
    </n-radio>
    <button class="btn" type="button" @click="gotoback">
      <i class="fa-solid fa-file-signature"></i>存檔
    </button>
    <button class="btn" type="button" @click="gotoback">
      <i class="fa-solid fa-file-signature"></i>匯出PDF
    </button>
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
    title: "勾選框",
    width: "",
  },
  {
    data: "",
    title: "身分證字號 ",
    width: "",
  },
  {
    data: "",
    title: "姓名 ",
    width: "",
  },
  {
    data: "",
    title: "工作年資",
    width: "",
  },
  {
    data: "",
    title: "派遣單位/公司名稱",
    width: "",
  },
  {
    data: "",
    title: "實際執行人月",
    width: "",
  },
  {
    data: "",
    title: "作業",
    width: "",
  },
];

const checkedValue = ref(null);
const handleChange = (e) => {
  checkedValue.value = e.target.value;
};
</script>

<style></style>
