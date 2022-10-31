<template>
  <div class="row">
    <div class="col-2">
      <div class="form-floating">
        <select
          class="form-select"
          id="floatingSelectGrid"
          aria-label="Floating label select example"
        >
          <option></option>
          <option value="1">One</option>
        </select>
        <label for="floatingSelectGrid">組室</label>
      </div>
    </div>
  </div>
  <div class="col-2">
    <div class="form-floating">
      <input
        type="text"
        class="form-control"
        id="floatingInputGrid"
        placeholder="name@example.com"
        value=""
      />
      <label for="floatingInputGrid"
        ><span class="text-danger">*</span>契約編號/計畫名稱</label
      >
    </div>
  </div>
  <div class="row">
    <button class="btn" type="button" @click="gotoback">
      <i class="fa-solid fa-file-signature"></i>查詢 
    </button>
    <button class="btn" type="button" @click="gotoback">
      <i class="fa-solid fa-file-signature"></i>清空 
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
    title: "計畫名稱 ",
    width: "",
  },
  {
    data: "",
    title: "審查種類 ",
    width: "",
  },
  {
    data: "",
    title: "狀態 ",
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
