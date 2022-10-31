<template>
  <h5>派遣人力管理</h5>
  <div class="row col-12">
    <div class="col-2">
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingInputGrid"
          placeholder="name@example.com"
          value=""
        />
        <label for="floatingInputGrid">姓名</label>
      </div>
    </div>
    <div class="col-10">
      <button type="button" class="btn btn-outline-info me-2" value="">
        查詢
      </button>
      <router-link
        class="btn btn-outline-info me-2"
        :to="{ name: 'HrAssignAdd' }"
        >新增派遣</router-link
      >
      <button type="button" class="btn btn-outline-info me-2" value="">
        批次匯入
      </button>
      <button type="button" class="btn btn-outline-info me-2" value="">
        批次刪除
      </button>
      <button type="button" class="btn btn-outline-info me-2" value="">
        匯出PDF
      </button>
    </div>
  </div>
  <n-config-provider>
    <n-data-table
      :columns="columns"
      :data="data"
      :pagination="false"
      :bordered="false"
      size="large"
    />
  </n-config-provider>
</template>

<script setup>
import { ref, h } from "vue";
import { NButton, NConfigProvider } from "naive-ui";
import router from "@/router";
const data = ref([
  {
    id: "123",
    pm: 1,
    serviceyear: 9,
    company: "怡高人力資源股份有限公司",
    jobDescription: "協助計畫執行、資料彙整及計畫活動",
    prdictHr: "4.5",
  },
]);
const currentPage = ref(1);
const pages = ref(1);
const createColumns = ({ edit }) => {
  return [
    { type: "selection" },
    {
      title: "排序",
      key: "id",
      className: "big-size",
      render: (_, index) => {
        return `${index + 1 + (currentPage.value - 1) * pages.value}`;
      },
    },
    {
      key: "name",
      title: "姓名",
      width: "",
    },
    {
      key: "serviceyear",
      title: "年資",
      width: "",
    },
    {
      key: "company",
      title: "公司名稱",
      width: "",
    },
    {
      key: "jobDescription",
      title: "公司名稱",
      width: "",
    },
    {
      key: "prdictHr",
      title: "預計投入人月",
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
const columns = createColumns({
  edit(row) {
    router.push({ name: "HrAssignAdd" });
  },
});
</script>

<style></style>
