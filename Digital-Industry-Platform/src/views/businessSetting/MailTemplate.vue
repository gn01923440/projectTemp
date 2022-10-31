<template>
  <div class="col-6">
    <span class="form-floating">
      <input
        type="text"
        class="form-control"
        placeholder="類型 "
        aria-label="類型 "
        value=""
      />
      <label for="floatingSelect">主旨</label>
    </span>
  </div>
  <div class="row">
    <button class="btn" type="button" @click="gotoback">
      <i class="fa-solid fa-file-signature"></i>查詢
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
    data: "mailType",
    title: "信件類型",
    width: "",
  },
  {
    data: "mailSubject",
    title: "主旨",
    width: "",
  },
  {
    data: "work",
    title: "作業",
    render(data, type, row) {
      return '<a href="../MailTemplateEdit"><button type="button" class="btn btn-warning" value=""><span><i class="fa-solid fa-pen"></i></span>編輯</button></a>&nbsp;';
    },
  },
];
data.value.push({
  mailType: "AAA",
  mailSubject: "BBB",
});
</script>

<style></style>
