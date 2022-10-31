<template>
  <div class="col-2 form-floating">
    <vee-field
      as="select"
      name="ver"
      class="form-control"
      id="floatingInputGrid"
    >
      <option></option>
      <option value="1">V1</option>
      <option value="2">V2</option>
      <option value="3">V3</option>
      <option value="4">V4</option>
    </vee-field>
    <label for="floatingInputGrid">計價方式</label>
    <ErrorMessage class="text-danger" name="ver" />
  </div>
  <router-link :to="{ name: 'ClassAdd' }">
    <button class="btn" type="button" @click="gotoback">
      <i class="fa-solid fa-file-signature"></i>新增一級科目 
    </button>
  </router-link>
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
    title: "層級 ",
    width: "",
  },
  {
    data: "",
    title: "計價方式 ",
    width: "",
  },
  {
    data: "",
    title: "類型 ",
    width: "",
  },
  {
    data: "",
    title: "年度 ",
    width: "",
  },
  {
    data: "",
    title: "名稱 ",
    width: "",
  },
  {
    data: "",
    title: "備註 ",
    width: "",
  },
  {
    data: "",
    title: "排序 ",
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
