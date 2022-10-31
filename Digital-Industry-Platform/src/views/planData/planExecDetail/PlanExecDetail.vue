<template>
  <div class="row">
    <div class="col">契約編號</div>
    <div class="col">計畫中文名稱</div>
    <router-link
      class="col nav-link btn"
      role="tab"
      :to="{ name: 'PlanSignSearchDetail' }"
      >資訊</router-link
    >
  </div>

  <div class="row">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <router-link
          class="nav-link btn"
          role="tab"
          :to="{ name: 'PlanExecDetailExecution' }"
          >執行進度</router-link
        >
      </li>
      <li class="nav-item" role="presentation">
        <router-link
          class="nav-link btn"
          role="tab"
          :to="{ name: 'PlanExecDetailSecurity' }"
          >資安檢核表</router-link
        >
      </li>
      <li class="nav-item" role="presentation">
        <router-link
          class="nav-link btn"
          role="tab"
          :to="{ name: 'ExecutionResult' }"
          >執行成果</router-link
        >
      </li>
      <li class="nav-item" role="presentation">
        <router-link
          class="nav-link btn"
          role="tab"
          :to="{ name: 'ContinuouslyEvaluation' }"
          >延續性計畫評鑑</router-link
        >
      </li>
      <li class="nav-item" role="presentation">
        <router-link
          class="nav-link btn"
          role="tab"
          :to="{ name: 'PlanVersion' }"
          >計畫版本</router-link
        >
      </li>
      <li class="nav-item" role="presentation">
        <router-link
          class="nav-link btn"
          role="tab"
          :to="{ name: 'MidtermReport' }"
          >期中報告</router-link
        >
      </li>
      <li class="nav-item" role="presentation">
        <router-link
          class="nav-link btn"
          role="tab"
          :to="{ name: 'FinalReport' }"
          >期末報告</router-link
        >
      </li>
    </ul>
    <router-view></router-view>
  </div>

  <n-modal v-model:show="showModal">
    <Audit />
  </n-modal>
</template>

<script setup>
import { ref } from "vue";
import DataTable from "datatables.net-vue3";
import DataTableBs5 from "datatables.net-bs5";
import Select from "datatables.net-select";
import { language } from "@/assets/tableLanguage.js";

import Audit from "../planSignSearchEdit/audit/Audit.vue";
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
