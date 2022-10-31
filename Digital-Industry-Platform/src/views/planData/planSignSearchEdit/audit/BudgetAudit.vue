<template>
  <div>總預算經費</div>
  <n-data-table
    :columns="columns"
    :data="data"
    :row-key="rowKey"
    default-expand-all
  />
  <br />
  <div>國研院-總預算經費</div>
  <n-data-table
    :columns="columns2"
    :data="data2"
    :row-key="rowKey"
    default-expand-all
  />
</template>

<script setup>
import { render } from "vue";

const data = [
  {
    subject: "經常支出",
    govFund: "",
    children: [
      {
        subject: "人事費",
        govFund: 90,
        selfFund: 0,
      },
      {
        subject: "管理費",
        govFund: 100,
        selfFund: 5,
      },
      {
        subject: "業務費",
        govFund: 112,
        delfFund: 7,
      },
    ],
  },
  {
    subject: "資本支出",
    govFund: "11",
  },
];
const columns2 = [
  { title: "科目", key: "subject" },
  { title: "政府經費", key: "govFund" },
  { title: "自籌款", key: "selfFund" },
  { title: "合計", key: "sumup" },
  { title: "計價方式", key: "formula" },
];
const data2 = [
  {
    subject: "經常支出",
    govFund: "",
  },
  {
    subject: "資本支出",
    govFund: "11",
  },
];
const columns = [
  { title: "科目", key: "subject" },
  { title: "政府經費", key: "govFund" },
  { title: "自籌款", key: "selfFund" },
  { title: "合計", key: "sumup" },
  { title: "計價方式", key: "formula" },
];
const rowKey = (row) => row.index;
</script>

<style></style>
