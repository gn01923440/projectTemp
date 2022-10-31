<template>
  <div>
    1. 修改完分項經費預算表，請記得點選「分項彙總」，將分項表金額加總到總預算表
  </div>
  <div>2. 直接薪資請使用「設定人力薪資計價」功能</div>

  <div class="row">
    <div class="col-3">
      <span class="form-floating">
        <select
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
        >
          <option></option>

          <option value="1">經費預算</option>

          <option value="2">Two</option>

          <option value="3">Three</option>
        </select>
        <label for="floatingSelect">經費來源: </label>
      </span>
    </div>
    <div class="col-3">
      <span class="form-floating">
        <select
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
        >
          <option></option>

          <option value="1">發展我國產業工程人才跨域實務能力</option>

          <option value="2">Two</option>

          <option value="3">Three</option>
        </select>
        <label for="floatingSelect">分項計畫: </label>
      </span>
    </div>
    <button
      type="button"
      class="btn btn-outline-success me-2 col-1"
      value=""
      data-bs-toggle="modal"
      data-bs-target="#excelModal"
    >
      <span
        ><i
          class="fas fa-sign-in-alt"
          style="transform: rotate(90deg)"
        ></i></span
      >匯入Excel
    </button>
    <button
      type="button"
      class="btn btn-outline-danger me-2 col-1"
      value=""
      data-bs-toggle="modal"
      data-bs-target="#pdfModal"
    >
      <span
        ><i
          class="fas fa-sign-out-alt"
          style="transform: rotate(270deg)"
        ></i></span
      >匯出PDF
    </button>
    <button class="btn btn-outline-danger col-1">管理費明細</button>
  </div>
  <br />
  <h2>經費預算管理</h2>
  <div class="row col-12">
    <router-link
      type="button"
      class="btn btn-warning"
      style="width: 6rem"
      :to="{ name: 'AddSubject' }"
    >
      新增三四科
    </router-link>
    <button
      @click="showModal = true"
      type="button"
      class="btn btn-warning"
      style="width: 6rem"
    >
      設定人力薪資計價
    </button>
    <button type="button" class="btn btn-secondary col-1" style="width: 6rem">
      分項彙總
    </button>
    <button
      type="button"
      class="btn btn-warning"
      style="width: 6rem"
      @click="isExpand = [1, 2]"
    >
      展開
    </button>
    <button
      type="button"
      class="btn btn-warning"
      style="width: 6rem"
      @click="isExpand = []"
    >
      關閉
    </button>
  </div>
  <n-data-table
    :columns="columns"
    :data="data"
    :row-key="rowKey"
    :row-props="rowProps"
    :expanded-row-keys="isExpand"
  />

  <n-modal v-model:show="showModal">
    <n-card
      title="設定人力薪資計價"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
      style="width: 50%; position: fixed; top: 10%; left: 25%"
    >
      <div class="row">
        <button class="btn" type="button">
          <i class="fa-solid fa-file-signature"></i>存檔 
        </button>
        <button class="btn" type="button">
          <i class="fa-solid fa-file-signature"></i>修改
        </button>
      </div>
      <template #header-extra> </template>
      <n-data-table :columns="columns2" :data="data2" />
      <template #footer> </template>
    </n-card>
  </n-modal>
</template>

<script setup>
import { ref, h } from "vue";
import { NButton, NInput } from "naive-ui";
import router from "@/router";
const isExpand = ref([1]);
const rowProps = (row) => {
  return {
    style: "cursor: pointer;",
  };
};
const columns = [
  {
    type: "selection",
    multiple: false,
  },
  {
    key: "subject",
    title: "科目",
    render(row) {
      return h(
        "span",
        {
          onclick: () => {
            if (isExpand.value.includes(row.id)) {
              isExpand.value = isExpand.value.filter((item) => item !== row.id);
            } else {
              isExpand.value.push(row.id);
            }
          },
        },
        { default: () => row.subject }
      );
    },
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
    key: "sumup",
    title: "合計",
    render(row) {
      return Number(row.govFund) + Number(row.selfFund);
    },
  },
  {
    key: "formula",
    title: "計價方式",
    width: "",
  },
  {
    key: "actions",
    title: "作業",

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

const data = ref([
  {
    id: 1,
    subject: "其他直接費用",
    govFund: 26892330,
    selfFund: 0,
    all: "all",
    children: [
      {
        id: 11,
        subject: "人事費",
        govFund: 1230,
        selfFund: 0,
        all: "all",
        children: [
          {
            id: 111,
            subject: "委託費",
            govFund: 268910,
            selfFund: 0,
            all: "all",
            formula: "(XXX * YYY =  ZZZ)",
          },
          {
            id: 112,
            subject: "使用費",
            govFund: 268212910,
            selfFund: 0,
            all: "all",
            formula: "(XXX * YYY =  ZZZ)",
          },
        ],
      },
      {
        id: 12,
        subject: "測試費",
        govFund: 268910,
        selfFund: 0,
        all: "all",
        formula: "(XXX * YYY =  ZZZ)",
      },
    ],
  },
  {
    id: 2,
    subject: "其他直接費用",
    govFund: 26892330,
    selfFund: 0,
    all: "all",
    children: [
      {
        id: 21,
        subject: "人事費",
        govFund: 1230,
        selfFund: 0,
        all: "all",
        children: [
          {
            id: 211,
            subject: "委託費",
            govFund: 268910,
            selfFund: 0,
            all: "all",
            formula: "(XXX * YYY =  ZZZ)",
          },
          {
            id: 212,
            subject: "使用費",
            govFund: 268212910,
            selfFund: 0,
            all: "all",
            formula: "(XXX * YYY =  ZZZ)",
          },
        ],
      },
      {
        id: 22,
        subject: "測試費",
        govFund: 268910,
        selfFund: 0,
        all: "all",
        formula: "(XXX * YYY =  ZZZ)",
      },
    ],
  },
]);

const rowKey = (row) => row.id;
const edit = (row) => {
  router.push({ name: "EditSubject" });
};

const showModal = ref(false);
const createData = () => [
  {
    key: 0,
    name: "計畫主持人",
    pplPerMonth: 12,
    payPerYear: 120000,
  },
  {
    key: 1,
    name: "共同主持人",
    pplPerMonth: 0,
    payPerYear: 0,
  },
  {
    key: 2,
    name: "研究員",
    pplPerMonth: 0,
    payPerYear: 0,
  },
];

const data2 = ref(createData());
const createColumns = () => [
  {
    title: "職稱",
    key: "name",
    render(row, index) {
      return h(NInput, {
        value: row.name,
        onUpdateValue(v) {
          data2.value[index].name = v;
        },
      });
    },
  },
  {
    title: "人月",
    key: "pplPerMonth",
    render(row, index) {
      return h(NInput, {
        value: row.pplPerMonth,
        onUpdateValue(v) {
          data2.value[index].pplPerMonth = v;
        },
      });
    },
  },
  {
    title: "元/人年",
    key: "payPerYear",
    render(row, index) {
      return h(NInput, {
        value: row.payPerYear,
        onUpdateValue(v) {
          data2.value[index].payPerYear = v;
        },
      });
    },
  },
];
const columns2 = createColumns();
</script>

<style></style>
