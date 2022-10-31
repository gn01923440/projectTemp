<template>
  <div>出國計畫表</div>
  <n-data-table :columns="columns" :data="data"></n-data-table>
</template>

<script setup>
const columns = [
  { key: "type", title: "出國類型" },
  { key: "countryTo", title: "擬往國家" },
  { key: "planDays", title: "預計天數" },
  { key: "noOfPpl", title: "擬派人數" },
  { key: "transFee", title: "交通費(元)" },
  { key: "allowance", title: "生活費(元)" },
  { key: "busFee", title: "辦公費(元)" },
  {
    key: "sumup",
    title: "合計(元)",
    render(row) {
      return Number(row.transFee) + Number(row.allowance) + Number(row.busFee);
    },
  },
];
const data = [
  {
    type: "開會",
    countryTo: "日本",
    planDays: 3,
    noOfPpl: 1,
    transFee: 10000,
    allowance: 10000,
    busFee: 10000,
  },
  {
    type: "訪問",
    countryTo: "韓國",
    planDays: 5,
    noOfPpl: 1,
    transFee: 5000,
    allowance: 2000,
    busFee: 3000,
  },
];
</script>

<style></style>
