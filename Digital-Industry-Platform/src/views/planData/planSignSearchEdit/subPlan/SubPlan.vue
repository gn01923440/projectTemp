<template>
  <div>●分項計畫權重小計必須等於100</div>
  <div>●人力數量小計必須等於人力工時統計表小計</div>
  <div class="row">
    <div class="modal-footer justify-content-center col">
      <router-link
        :to="{ name: 'AddSubPlan' }"
        type="submit"
        class="btn btn-warning text-white"
      >
        新增分項計畫
      </router-link>
    </div>
    <div class="modal-footer justify-content-center col">
      <button type="submit" class="btn btn-warning text-white">
        工作項目甘特圖
      </button>
    </div>
    <div class="modal-footer justify-content-center col">
      <button type="submit" class="btn btn-warning text-white">
        匯出總甘特圖PDF
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
    a: "分項計畫",
    b: "權重",
    c: "人力數量",
    d: "123",
    e: "123",
    f: "123",
  },
]);
const currentPage = ref(1);
const pages = ref(1);
const createColumns = ({ edit, item, del }) => {
  return [
    {
      title: "",
      key: "id",
      className: "big-size",
      render: (_, index) => {
        return `${index + 1 + (currentPage.value - 1) * pages.value}`;
      },
    },
    {
      title: "分項計畫",
      key: "a",
    },
    {
      title: "權重",
      key: "b",
    },
    {
      title: "人力數量",
      key: "c",
    },
    {
      title: "政府經費(元)",
      key: "d",
    },
    {
      title: "自籌經費(元)",
      key: "e",
    },
    {
      title: "分項計畫分包",
      key: "f",
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
          h(
            NButton,
            {
              strong: true,
              // tertiary: true,
              size: "large",
              color: "red",
              onclick: () => item(row),
            },
            { default: () => "工作項目" }
          ),
          h(
            NButton,
            {
              strong: true,
              // tertiary: true,
              size: "large",
              color: "red",
              onclick: () => del(row),
            },
            { default: () => "刪除" }
          ),
        ];
      },
    },
  ];
};
const columns = createColumns({
  edit(row) {
    router.push({ name: "AddSubPlan" });
  },
  item(row) {
    router.push({ name: "SubPlanItem" });
  },
  del(row) {
    console.log("del");
  },
});
</script>

<style></style>
