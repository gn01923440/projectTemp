<template>
  <div>
    <div class="row">
      <div class="col-6">
        <span class="form-floating">
          <label for="floatingSelect">狀態</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <input type="date" />
          <label for="floatingSelect">填表日期</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <label for="floatingSelect">資料期間</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <div class="col-6">
            <textarea></textarea>
          </div>
          <label for="floatingSelect">備註</label>
        </span>
      </div>
    </div>
    <button class="col-2 btn">存檔</button>
    <button class="col-2 btn">上傳工作執行情況</button>
    <button class="col-2 btn">匯出PDF</button>
  </div>
  <hr />
  <div class="col-12">工作進度管理</div>
  <div class="row col-12">
    <button class="col-2 btn">匯入前期</button>
    <button class="col-2 btn">新增工作</button>
    <button class="col-2 btn">修改工作</button>
    <button class="col-2 btn">存檔</button>
    <button class="col-2 btn">刪除工作</button>
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
    title: "分項計畫及工作項目 ",
    width: "",
  },
  {
    data: "",
    title: "當期",
    width: "",
  },
  {
    data: "",
    title: "工作進度%預定 ",
    width: "",
  },
  {
    data: "",
    title: "當期",
    width: "",
  },
  {
    data: "",
    title: "工作進度%實際 ",
    width: "",
  },
  {
    data: "",
    title: "上期累計",
    width: "",
  },
  {
    data: "",
    title: "工作進度%預定",
    width: "",
  },
  {
    data: "",
    title: "上期累計",
    width: "",
  },
  {
    data: "",
    title: "工作進度%實際 ",
    width: "",
  },
  {
    data: "",
    title: "本年累計",
    width: "",
  },
  {
    data: "",
    title: "工作進度%預定 ",
    width: "",
  },
  {
    data: "",
    title: "本年累計",
    width: "",
  },
  {
    data: "",
    title: "工作進度%實際",
    width: "",
  },
  {
    data: "",
    title: "本年累計",
    width: "",
  },
  {
    data: "",
    title: "工作進度%差異 ",
    width: "",
  },
  {
    data: "",
    title: "執行摘要說明 ",
    width: "",
  },
  {
    data: "",
    title: "排序 ",
    width: "",
  },
];
</script>

<style></style>
