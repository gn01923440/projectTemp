<template>
  <div class="row">
    <back-page-btn
      ><template v-slot:description> 返回分項計畫 </template></back-page-btn
    >
    <div class="modal-footer justify-content-center col">
      <button type="button" class="btn btn-warning text-white">
        匯出總甘特圖PDF
      </button>
    </div>
    <div class="modal-footer justify-content-center col">
      <button type="button" class="btn btn-warning text-white">
        每月工作進度%修改
      </button>
    </div>
  </div>
  <hr />
  <h1>分項計畫-工作項目</h1>
  <div class="justify-content-center col">
    <button type="button" class="btn" @click="addPlanItem">新增</button>
    <button type="button" class="btn">修改</button>
    <button type="button" class="btn">存檔</button>
    <button type="button" class="btn">刪除</button>
    <button type="button" class="btn">匯出PDF</button>
  </div>

  <n-config-provider class="mb-3">
    <n-data-table
      :columns="columns"
      :data="data"
      :pagination="false"
      :bordered="false"
      size="large"
    />
  </n-config-provider>
  <n-config-provider class="mt-3" id="secondTable">
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
      title="查核點概述"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
      style="width: 80%; height: 80%"
      closable
      @close="handleClose"
    >
      <div>
        <div>
          <button type="button" class="btn" @click="addCheckPoint">新增</button>
          <button type="button" class="btn">修改</button>
          <button type="button" class="btn">存檔</button>
          <button type="button" class="btn">刪除</button>
        </div>
        <n-config-provider>
          <n-data-table
            :columns="columns2"
            :data="data2"
            :pagination="false"
            :bordered="false"
            size="large"
          />
        </n-config-provider>
      </div>
    </n-card>
  </n-modal>
</template>

<script setup>
import BackPageBtn from "../../../components/button/BackPageBtn.vue";

import { ref, h } from "vue";
import { NButton, NConfigProvider, NInput } from "naive-ui";
import router from "@/router";
const data = ref([
  {
    id: "22",
    b: "權重",
    c: "人力數量",
    d: "123",
    e: "123",
    g: "123",
  },
]);
const data2 = ref([
  {
    b: "1",
    c: "日期",
    d: "查核點概述",
  },
]);
const currentPage = ref(1);
const pages = ref(1);
const createColumns = ({ pointCheck }) => {
  return [
    {
      title: "",
      key: "id",
      fixed: "left",
      width: 50,
      className: "big-size",
      render: (_, index) => {
        return `${index + 1 + (currentPage.value - 1) * pages.value}`;
      },
    },
    {
      title: "查核",
      key: "a",
      fixed: "left",
      width: 100,
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
              onClick: () => pointCheck(row),
            },
            {
              default: () => "查核",
            }
          ),
        ];
      },
    },
    {
      title: "排序",
      key: "b",
      fixed: "left",
      width: 100,
      render(row, index) {
        return h(NInput, {
          value: row.b,
          placeholder: "",
          onUpdateValue(v) {
            data.value[index].b = v;
          },
        });
      },
    },
    {
      title: "工作項目",
      key: "c",
      fixed: "left",
      width: 300,
      render(row, index) {
        return h(NInput, {
          value: row.c,
          placeholder: "",
          onUpdateValue(v) {
            data.value[index].c = v;
          },
        });
      },
    },
    {
      title: "政府經費(元)",
      key: "d",
      fixed: "left",
      width: 200,
      render(row, index) {
        return h(NInput, {
          value: row.d,
          placeholder: "",
          onUpdateValue(v) {
            data.value[index].d = v;
          },
        });
      },
    },
    {
      title: "自籌經費(元)",
      key: "e",
      fixed: "left",
      width: 200,
      render(row, index) {
        return h(NInput, {
          value: row.e,
          placeholder: "",
          onUpdateValue(v) {
            data.value[index].e = v;
          },
        });
      },
    },
    {
      title(column) {
        return "2021";
      },
      key: "year",
      className: "text-center",
      children: [
        {
          title: "01月",
          key: "Jan",
          width: 100,
          render(row, index) {
            return h(NInput, {
              value: row.Jan,
              placeholder: "",
              onUpdateValue(v) {
                data.value[index].Jan = v;
              },
            });
          },
        },
        {
          title: "02月",
          key: "Feb",
          width: 100,
          render(row, index) {
            return h(NInput, {
              value: row.Feb,
              placeholder: "",
              onUpdateValue(v) {
                data.value[index].Feb = v;
              },
            });
          },
        },
        {
          title: "03月",
          key: "Mar",
          width: 100,
          render(row, index) {
            return h(NInput, {
              value: row.Mar,
              placeholder: "",
              onUpdateValue(v) {
                data.value[index].Mar = v;
              },
            });
          },
        },
        {
          title: "04月",
          key: "Apr",
          width: 100,
          render(row, index) {
            return h(NInput, {
              value: row.Apr,
              placeholder: "",
              onUpdateValue(v) {
                data.value[index].Apr = v;
              },
            });
          },
        },
        {
          title: "05月",
          key: "May",
          width: 100,
          render(row, index) {
            return h(NInput, {
              value: row.May,
              placeholder: "",
              onUpdateValue(v) {
                data.value[index].May = v;
              },
            });
          },
        },
        {
          title: "06月",
          key: "Jun",
          width: 100,
          render(row, index) {
            return h(NInput, {
              value: row.Jun,
              placeholder: "",
              onUpdateValue(v) {
                data.value[index].Jun = v;
              },
            });
          },
        },
        {
          title: "07月",
          key: "Jul",
          width: 100,
          render(row, index) {
            return h(NInput, {
              value: row.Jul,
              placeholder: "",
              onUpdateValue(v) {
                data.value[index].Jul = v;
              },
            });
          },
        },
        {
          title: "08月",
          key: "Aug",
          width: 100,
          render(row, index) {
            return h(NInput, {
              value: row.Aug,
              placeholder: "",
              onUpdateValue(v) {
                data.value[index].Aug = v;
              },
            });
          },
        },
        {
          title: "09月",
          key: "Sep",
          width: 100,
          render(row, index) {
            return h(NInput, {
              value: row.Sep,
              placeholder: "",
              onUpdateValue(v) {
                data.value[index].Sep = v;
              },
            });
          },
        },
        {
          title: "10月",
          key: "Oct",
          width: 100,
          render(row, index) {
            return h(NInput, {
              value: row.Oct,
              placeholder: "",
              onUpdateValue(v) {
                data.value[index].Oct = v;
              },
            });
          },
        },
        {
          title: "11月",
          key: "Nov",
          width: 100,
          render(row, index) {
            return h(NInput, {
              value: row.Nov,
              placeholder: "",
              onUpdateValue(v) {
                data.value[index].Nov = v;
              },
            });
          },
        },
        {
          title: "12月",
          key: "Dec",
          width: 100,
          render(row, index) {
            return h(NInput, {
              value: row.Dec,
              placeholder: "",
              onUpdateValue(v) {
                data.value[index].Dec = v;
              },
            });
          },
        },
      ],
    },

    {
      title: "權重",
      key: "g",
      fixed: "right",
      width: 100,
    },
  ];
};
const columns = createColumns({
  pointCheck(row) {
    showModal.value = true;
  },
});

const addPlanItem = () => {
  data.value.push({});
};

const showModal = ref(false);

const onPositiveClick = () => {
  showModal.value = false;
};
const onNegativeClick = () => {
  showModal.value = false;
};

const createColumns2 = ({ pointCheck }) => {
  return [
    {
      title: "排序",
      key: "id",
      fixed: "left",
      width: 50,
      className: "big-size",
    },
    {
      title: "日期",
      key: "a",
      fixed: "left",
      width: 100,
      render(row, index) {
        return h(NInput, {
          value: row.a,
          placeholder: "",
          onUpdateValue(v) {
            data.value[index].a = v;
          },
        });
      },
    },
    {
      title: "查核點概述",
      key: "b",
      fixed: "left",
      width: 100,
      render(row, index) {
        return h(NInput, {
          value: row.b,
          placeholder: "",
          onUpdateValue(v) {
            data.value[index].b = v;
          },
        });
      },
    },
  ];
};
const columns2 = createColumns2({
  pointCheck(row) {
    showModal.value = true;
  },
});
const addCheckPoint = () => {
  data2.value.push({});
};
const handleClose = () => {
  showModal.value = false;
};
</script>

<style>
#secondTable table thead {
  visibility: hidden;
}
</style>
