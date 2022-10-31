<template>
  <div class="row">
    <span class="col-12"> 人力需求異動 </span>
    <n-radio
      :checked="checkedValue === '1'"
      value="1"
      name="basic-demo"
      @change="handleChange"
    >
      本期人力無異動,
      人力需求情形同計畫書(含計畫變更或凍結經費後:請說明核復函日期及文號:)
      之人力需求表
    </n-radio>
    <n-radio
      :checked="checkedValue === '2'"
      value="2"
      name="basic-demo"
      @change="handleChange"
    >
      本期人力無異動，人力需求情形同計畫書上之人力需求表
    </n-radio>
    <n-radio
      :checked="checkedValue === '3'"
      value="3"
      name="basic-demo"
      @change="handleChange"
    >
      本期人力無異動，人力需求情形同上期季報之人力需求異動表
    </n-radio>
    <n-radio
      :checked="checkedValue === '4'"
      value="4"
      name="basic-demo"
      @change="handleChange"
    >
      本期人力有異動(請續填下表)
    </n-radio>
    <button class="btn" type="button" @click="gotoback">
      <i class="fa-solid fa-file-signature"></i>匯出PDF
    </button>
  </div>
  <hr />
  <div class="row col-12">
    <div class="row">
      <router-link
        class="col nav-link btn"
        role="tab"
        :to="{ name: 'AddHumanResource' }"
        >新增人力需求異動</router-link
      >
      <button class="btn" type="button" @click="gotoback">
        <i class="fa-solid fa-file-signature"></i>匯入計畫書人力表
      </button>
      <button class="btn" type="button" @click="gotoback">
        <i class="fa-solid fa-file-signature"></i>批次刪除
      </button>
      <button class="btn" type="button" @click="gotoback">
        <i class="fa-solid fa-file-signature"></i>匯入前期
      </button>
    </div>
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
    title: "聘請",
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
    title: "職級(GRB) ",
    width: "",
  },
  {
    data: "",
    title: "参與性質 ",
    width: "",
  },
  {
    data: "",
    title: "規劃執行人月 ",
    width: "",
  },
  {
    data: "",
    title: "異動後人月 ",
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
