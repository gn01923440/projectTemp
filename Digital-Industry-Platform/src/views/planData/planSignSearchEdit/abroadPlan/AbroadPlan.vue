<template>
  <router-link class="btn btn-outline-info me-2" :to="{ name: 'AddAbroadPlan' }"
    >新增出國計畫</router-link
  >
  <button class="btn btn-outline-info">匯出PDF</button>

  <div>出國計畫管理</div>
  <div class="row col-12">
    <n-config-provider>
      <n-data-table
        :columns="columns"
        :data="data"
        :summary="summary"
        :pagination="false"
        :bordered="false"
        size="small"
      />
    </n-config-provider>
  </div>
</template>

<script setup>
import { ref, h } from "vue";

const createData = () => [
  {
    id: 2,
    dest: "馬來西亞",
    city: "吉隆坡",
    purpose: "考察",
    days: 5,
    persons: 4,
    transFee: 40000,
    allowance: 40000,
    busFee: 1111111,
  },
  {
    id: 1,
    dest: "印度",
    city: "新德里",
    purpose: "玩",
    days: 10,
    persons: 12,
    transFee: 50000,
    allowance: 120000,
    busFee: 1313111,
  },
];

const currentPage = ref(1);
const pages = ref(1);
const data = createData();
const createColumns = () => {
  return [
    {
      key: "no",
      title: "",
      fixed: "left",
      width: 50,
      render: (_, index) => {
        return `${index + 1 + (currentPage.value - 1) * pages.value}`;
      },
    },
    {
      key: "id",
      title: "排序",
      width: "",
    },
    {
      key: "dest",
      title: "擬前往地區",
      width: "",
    },
    {
      key: "city",
      title: "城市",
      width: "",
    },
    {
      key: "purpose",
      title: "出國重點",
      width: "",
    },
    {
      key: "days",
      title: "預計天數",
      width: "",
    },
    {
      key: "persons",
      title: "擬派人數",
      width: "",
    },
    {
      key: "transFee",
      title: "交通費(元)",
      width: "",
    },
    {
      key: "allowance",
      title: "生活費(元)",
      width: "",
    },
    {
      key: "busFee",
      title: "辦公費(元)",
      width: "",
    },
  ];
};
const columns = createColumns();

const createSummary = (pageData) => {
  return {
    no: {
      value: "小計",
      colSpan: 5,
    },
    days: {
      value: h(
        "span",
        { style: { color: "red" } },
        pageData.reduce((prevValue, row) => prevValue + row.days, 0)
      ),
      colSpan: 1,
    },
    persons: {
      value: h(
        "span",
        { style: { color: "red" } },
        pageData.reduce((prevValue, row) => prevValue + row.persons, 0)
      ),
      colSpan: 1,
    },
    transFee: {
      value: h(
        "span",
        { style: { color: "red" } },
        pageData.reduce((prevValue, row) => prevValue + row.transFee, 0)
      ),
      colSpan: 1,
    },
    allowance: {
      value: h(
        "span",
        { style: { color: "red" } },
        pageData.reduce((prevValue, row) => prevValue + row.allowance, 0)
      ),
      colSpan: 1,
    },
    busFee: {
      value: h(
        "span",
        { style: { color: "red" } },
        pageData.reduce((prevValue, row) => prevValue + row.busFee, 0)
      ),
      colSpan: 1,
    },
  };
};

const summary = createSummary;
</script>
<style></style>
