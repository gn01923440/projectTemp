<template>
  <div class="row">
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="姓名 "
          aria-label="姓名 "
          value=""
        />
        <label for="floatingSelect">姓名 (  )</label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="帳號 "
          aria-label="帳號 "
          value=""
        />
        <label for="floatingSelect">帳號 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <select
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
        >
          <option></option>

          <option value="1">One</option>

          <option value="2">Two</option>

          <option value="3">Three</option>
        </select>
        <label for="floatingSelect">組織單位 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <select
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
        >
          <option></option>

          <option value="1">One</option>

          <option value="2">Two</option>

          <option value="3">Three</option>
        </select>
        <label for="floatingSelect">角色 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <select
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
        >
          <option></option>

          <option value="1">One</option>

          <option value="2">Two</option>

          <option value="3">Three</option>
        </select>
        <label for="floatingSelect">是否主管 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <select
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
        >
          <option></option>

          <option value="1">One</option>

          <option value="2">Two</option>

          <option value="3">Three</option>
        </select>
        <label for="floatingSelect">狀態 </label>
      </span>
    </div>
  </div>
  <div class="row">
    <button class="btn" type="button" @click="gotoback">
      <i class="fa-solid fa-file-signature"></i>查詢 
    </button>
    <button class="btn" type="button" @click="gotoback">
      <i class="fa-solid fa-file-signature"></i>清空 
    </button>
    <button class="btn" type="button" @click="gotoback">
      <i class="fa-solid fa-file-signature"></i>閒置帳號檢查 
    </button>
    <a href="../MemAdd">
      <button class="btn" type="button" @click="gotoback">
        <i class="fa-solid fa-file-signature"></i>新增用戶 
      </button>
    </a>
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
    title: "姓名",
    width: "",
  },
  {
    data: "",
    title: "帳號",
    width: "",
  },
  {
    data: "",
    title: "密碼",
    width: "",
  },
  {
    data: "",
    title: "性別",
    width: "",
  },
  {
    data: "",
    title: "信箱",
    width: "",
  },
  {
    data: "",
    title: "服務單位",
    width: "",
  },
  {
    data: "",
    title: "角色",
    width: "",
  },
  {
    data: "",
    title: "主管",
    width: "",
  },
  {
    data: "",
    title: "狀態",
    width: "",
  },
  {
    data: "",
    title: "登入時間",
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
