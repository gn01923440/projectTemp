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
    <button class="btn" type="button" @click="gotoback">
      <i class="fa-solid fa-file-signature"></i>發送稽催信 
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
    data: "planName",
    title: "計畫名稱 ",
    width: "",
  },
  {
    data: "auditType",
    title: "審查種類 ",
    width: "",
  },
  {
    data: "auditDept",
    title: "審查組室   ",
    width: "",
  },
  {
    data: "memNo",
    title: "用戶帳號 ",
    width: "",
  },
  {
    data: "receiveDate",
    title: "用戶收件日期 ",
    width: "",
  },
  {
    data: "work",
    title: "作業 ",
    render: function (data, type) {
      return `
                <button type="button" class="btn btn-warning" value="" onclick="alert('退件')">
                    <span><i class="fa-solid fa-pen"></i></span>退件
                </button>&nbsp;
            <a href="../planAuditmanage"><button type="button" class="btn btn-primary" value="">承辦</button></a>
           <a href="../planManageRecords"><button type="button" class="btn btn-info" value="">紀錄</button></a>`;
    },
  },
];
data.value.push({
  planName: "A計畫",
  auditType: "AAA",
  auditDept: "TS4",
  memNo: "qwerty",
  receiveDate: new Date().toLocaleString(),
});
</script>

<style></style>
