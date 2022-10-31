<template>
  <div>出國計畫表</div>
  <n-data-table :columns="columns" :data="data"></n-data-table>
</template>

<script setup>
const columns = [
  { key: "item", title: "分包事項" },
  { key: "govFund", title: "政府經費(元)" },
  { key: "selfFund", title: "自籌款(元)" },
  { key: "sumupTax", title: "合計(含稅)" },
  { key: "sumupNoTax", title: "合計(未稅)" },
  { key: "deadline", title: "應配合完成時間" },
  { key: "subUnit", title: "預定分包單位" },
];
const data = [
  {
    item: "項目1",
    govFund: 0,
    selfFund: 0,
    sumupTax: 0,
    sumupNoTax: 0,
    deadline: new Date().toDateString(),
    subUnit: "一之軒",
  },
];
</script>

<style></style>
