<template>
  <router-link class="btn btn-outline-info me-2" :to="{ name: 'AddSubcon' }"
    >新增分包/協辦計畫</router-link
  >
  <button class="btn btn-outline-info">匯出PDF</button>

  <div>說明1:政府經費系指委辦或補助費用，不含代管補助款。</div>
  <div>說明2:分包/協辦項目名稱請填寫分包/協辦項目名稱。</div>
  <div>分包計畫管理</div>
  <div class="row col-12">
    <n-config-provider>
      <n-data-table
        :columns="columns"
        :data="data"
        :pagination="false"
        :bordered="false"
        size="small"
      />
    </n-config-provider>
  </div>
</template>

<script setup>
import { ref, h } from "vue";
import { NButton, NConfigProvider } from "naive-ui";
import router from "@/router";
const createData = () => [
  {
    id: 2,
    subconName: "魚魚",
    subconUnit: "金槍魚",
    govFund: 0,
    selfFund: 0,
    sumTax: 0,
    sumNoTax: 0,
    accomplishTime: new Date().toDateString(),
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
      key: "subconName",
      title: "分包/協辦項目名稱",
      width: "",
    },
    {
      key: "subconUnit",
      title: "分包/協力單位",
      width: "",
    },
    {
      key: "govFund",
      title: "政府經費",
      width: "",
    },
    {
      key: "selfFund",
      title: "自籌款",
      width: "",
    },
    {
      key: "sumTax",
      title: "合計(含稅)",
      width: "",
    },
    {
      key: "sumNoTax",
      title: "合計(未稅)",
      width: "",
    },
    {
      key: "accomplishTime",
      title: "完成時間",
      width: "",
    },
    {
      title: "作業",
      key: "actions",
      render(row) {
        return [
          h(
            NButton,
            {
              style: {
                marginRight: "16px",
              },
              type: "info",
              strong: true,
              size: "large",
              onClick: () => edit(row),
            },
            { default: () => "修改" }
          ),
        ];
      },
    },
  ];
};
const columns = createColumns();

const edit = (row) => {
  router.push({ name: "EditSubconTab" });
};
</script>

<style></style>
