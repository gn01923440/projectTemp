<template>
  <div>分項計畫表</div>
  <div class="text-primary">*政府經費與自籌經費須於基本資料簽約金額一致</div>
  <div class="text-primary">*權重小計須等於100</div>
  <div class="text-primary">*人力數量須於人力需求規劃執行工時小計一</div>

  <table>
    <tr>
      <th>計價方式</th>
      <th>服務成本加公費法</th>
    </tr>
    <tr>
      <td>工業局經費-委辦費</td>
      <td>100000元</td>
    </tr>
    <tr>
      <td>工業局經費-補助費</td>
      <td>0元</td>
    </tr>
    <tr>
      <td>工業局-自籌款</td>
      <td>100000元</td>
    </tr>
  </table>

  <n-data-table
    :columns="columns"
    :data="data"
    :summary="summary"
  ></n-data-table>
</template>

<script setup>
import { h } from "vue";

const columns = [
  {
    key: "subPlan",
    title: "分項計畫",
  },
  {
    key: "weight",
    title: "權重",
  },
  {
    key: "persons",
    title: "人力數量",
  },
  {
    key: "govFund",
    title: "政府經費(元)",
  },
  {
    key: "selfFund",
    title: "自籌經費(元)",
  },
  {
    key: "subContract",
    title: "分項計畫分包",
    value: "-",
  },
];
const data = [
  {
    subPlan: "分項計畫",
    weight: 80.0,
    persons: 27.0,
    govFund: 100000,
    selfFund: 100000,
    subContract: "否",
  },
  {
    subPlan: "精進出版功能",
    weight: 20.0,
    persons: 10.0,
    govFund: 0,
    selfFund: 0,
    subContract: "否",
  },
];

const createSummary = (pageData) => {
  return {
    subPlan: {
      value: "小計",
      colSpan: 1,
    },
    weight: {
      value: h(
        "span",
        pageData.reduce((prevValue, row) => prevValue + row.weight, 0)
      ),
      colSpan: 1,
    },
    persons: {
      value: h(
        "span",
        pageData.reduce((prevValue, row) => prevValue + row.persons, 0)
      ),
      colSpan: 1,
    },
    govFund: {
      value: h(
        "span",
        pageData.reduce((prevValue, row) => prevValue + row.govFund, 0)
      ),
      colSpan: 1,
    },
    selfFund: {
      value: h(
        "span",
        pageData.reduce((prevValue, row) => prevValue + row.selfFund, 0)
      ),
      colSpan: 1,
    },
    subContract: {
      value: "-",
      colSpan: 1,
    },
  };
};

const summary = createSummary;
</script>

<style></style>
