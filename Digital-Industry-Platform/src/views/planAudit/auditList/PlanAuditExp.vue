<template>
  <div>
    <div class="row">
      <div class="col-6">
        <span class="form-floating">
          <label for="floatingSelect">計畫執行年度 </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <label for="floatingSelect">契約編號 </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <label for="floatingSelect">計畫中文名稱 </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <radio>有</radio>
          <radio>否</radio>
          <label for="floatingSelect">審查 </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <label for="floatingSelect">下個審查人員 </label>
        </span>
      </div>
    </div>
    <div class="row">
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
      <div class="row col-12">
        <DataTable
          class="display table table-striped table-hover"
          :columns="columns2"
          :data="data2"
          :options="options2"
          ref="table2"
          width="100%"
        />
      </div>
    </div>
    <div class="row">
      <button class="btn" type="button" @click="gotoback">
        <i class="fa-solid fa-file-signature"></i>確定
      </button>
      <button class="btn" type="button" @click="gotoback">
        <i class="fa-solid fa-file-signature"></i>返回
      </button>
      <button class="btn" type="button" @click="gotoback">
        <i class="fa-solid fa-file-signature"></i>紀錄
      </button>
    </div>
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
    title: "類型 ",
    width: "",
  },
  {
    data: "",
    title: "名稱 ",
    width: "",
  },
  {
    data: "",
    title: "作業 ",
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
