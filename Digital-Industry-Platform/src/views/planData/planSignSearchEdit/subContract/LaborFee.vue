<template>
  <h2>委託勞務費</h2>
  <div class="row col-12">
    <button type="button" class="btn btn-warning" style="width: 6rem">
      匯入會計科目
    </button>
    <button type="button" class="btn btn-warning" style="width: 6rem">
      修改
    </button>
    <button type="button" class="btn btn-secondary col-1" style="width: 6rem">
      存檔
    </button>
    <button type="button" class="btn btn-warning" style="width: 6rem">
      返回
    </button>
  </div>
  <n-data-table :columns="columns" :data="data" />
</template>

<script setup>
import { h, ref } from "vue";
import { NInput } from "naive-ui";
import _ from "lodash";

const createData = () => [
  {
    key: 0,
    serviceName: "直接薪資",
    budgetGovFund: 555,
    budgetSelfFund: 333,
    sumup: 0,
  },
  {
    key: 1,
    serviceName: "管理費",
    budgetGovFund: 0,
    budgetSelfFund: 0,
    sumup: 0,
  },
  {
    key: 2,
    serviceName: "其他直接費用",
    budgetGovFund: 0,
    budgetSelfFund: 0,
    sumup: 0,
  },
  {
    key: 3,
    serviceName: "公費",
    budgetGovFund: 0,
    budgetSelfFund: 0,
    sumup: 0,
  },
  {
    key: 4,
    serviceName: "營業稅",
    budgetGovFund: 0,
    budgetSelfFund: 0,
    sumup: 0,
  },
];
const currentPage = ref(1);
const pages = ref(1);
const data = ref(createData());
const createColumns = () => [
  {
    key: "id",
    title: "",
    fixed: "left",
    width: 50,
    render: (_, index) => {
      return `${index + 1 + (currentPage.value - 1) * pages.value}`;
    },
  },
  {
    title: "服務費用/項目",
    key: "serviceName",
  },
  {
    title: "預算數-政府經費(元)",
    key: "budgetGovFund",
    render(row, index) {
      return h(NInput, {
        value: row.budgetGovFund,
        onUpdateValue(v) {
          data.value[index].budgetGovFund = Number(v);
        },
      });
    },
  },
  {
    title: "預算數-廠商自籌費(元)",
    key: "budgetSelfFund",
    render(row, index) {
      return h(NInput, {
        value: row.budgetSelfFund,
        onUpdateValue(v) {
          data.value[index].budgetSelfFund = Number(v);
        },
      });
    },
  },
  {
    title: "合計",
    key: "sumup",
    render(row, index) {
      console.log(row);
      return row.budgetGovFund + row.budgetSelfFund;
    },
  },
];
const columns = createColumns();
</script>

<style></style>
