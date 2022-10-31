<template>
  <div>●參與人月加總計畫不得坮過12人月</div>
  <div>●人力工時統計表小計必須等於分項計畫人力小計</div>
  <h5>人力需求管理</h5>
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
      <router-link class="btn btn-outline-info me-2" :to="{ name: 'HrAdd' }"
        >新增人力</router-link
      >
      <button
        type="button"
        class="btn btn-outline-info me-2"
        @click="showModal = true"
      >
        人力工時統計表
      </button>
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

  <n-modal v-model:show="showModal">
    <n-card
      title="執行人力工時統計表(與預算表各職級人月總數一致)"
      :bordered="false"
      size="huge"
      role="dialog"
      style="width: 50%"
      aria-modal="true"
      closable
      @close="handleClose"
    >
      <div>
        <n-config-provider>
          <n-data-table
            :columns="columns2"
            :data="data2"
            :pagination="false"
            :bordered="false"
            size="small"
          />
        </n-config-provider>
      </div>
    </n-card>
  </n-modal>
</template>

<script setup>
import { ref, h } from "vue";
import { NButton, NConfigProvider } from "naive-ui";
import router from "@/router";
const data = ref([
  {
    id: "123",
    identity: "A123456789",
    name: "人力數量",
    ym: "111/05",
    bu: "太保署",
    pm: "44",
    pm: 1,
    type: "計畫主持人",
    serviceyear: 9,
    isHired: "已聘",
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
      key: "identity",
      title: "身分證",
      width: "",
    },
    {
      key: "name",
      title: "姓名",
      width: "",
    },
    {
      key: "ym",
      title: "畢業年/月",
      width: "",
    },
    {
      key: "bu",
      title: "服務機關",
      width: "",
    },
    {
      key: "pm",
      title: "參與人月",
      width: "",
    },
    {
      key: "type",
      title: "參與性質",
      width: "",
    },
    {
      key: "serviceyear",
      title: "年資",
      width: "",
    },
    {
      key: "isHired",
      title: "聘請",
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
    router.push({ name: "HrAdd" });
  },
});

const showModal = ref(false);
const data2 = ref([{ title: "計畫主持人", planHr: "1" }]);
const columns2 = ref([
  {
    title: "",
    fixed: "left",
    width: 50,
    render: (_, index) => {
      return `${index + 1 + (currentPage.value - 1) * pages.value}`;
    },
  },
  {
    key: "title",
    title: "職稱",
    width: "",
  },
  {
    key: "planHr",
    title: "規劃執行工時(人月)",
    width: "",
  },
]);
const handleClose = () => {
  showModal.value = false;
};
</script>

<style></style>
