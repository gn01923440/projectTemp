<template>
  <div>人力需求表</div>
  <div>*規劃執行工時小計須與分項計畫人力數量一致</div>

  <n-data-table :columns="columns" :data="data"></n-data-table>

  <br />

  <h4>執行人力工時統計表</h4>
  <n-data-table
    :columns="columns2"
    :data="data2"
    :summary="summary"
  ></n-data-table>
</template>

<script setup>
import { h } from "vue";

const columns = [
  {
    key: "name",
    title: "姓名",
  },
  {
    key: "degreeYm",
    title: "最高學歷畢業年月",
  },
  {
    key: "workExp",
    title: "經歷及工作年資",
  },
  {
    key: "jobLvl",
    title: "職級",
  },
  {
    key: "job",
    title: "在本計畫所擔任之職務",
  },
  {
    key: "planHrs",
    title: "規劃執行工程(人月)",
  },
];
const data = [
  {
    name: "陳小明",
    degreeYm: "博士 82/09",
    workExp: "22 10.0",
    jobLvl: "研究員",
    job: "研究員",
    planHrs: 12.0,
  },
];
const columns2 = [
  { key: "jobLvl", title: "職級" },
  { key: "planHrs", title: "規劃執行工時(人月)" },
];
const data2 = [
  {
    jobLvl: "計畫主持人",
    planHrs: 12,
  },
  {
    jobLvl: "協同主持人",
    planHrs: 0,
  },
];

const createSummary = (pageData) => {
  return {
    jobLvl: {
      value: "小計",
      colSpan: 1,
    },
    planHrs: {
      value: h(
        "span",
        pageData.reduce((prevValue, row) => prevValue + row.planHrs, 0)
      ),
      colSpan: 1,
    },
  };
};

const summary = createSummary;
</script>

<style></style>
