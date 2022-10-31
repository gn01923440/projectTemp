<template>
  <div>
    <h1>採購與驗收</h1>
    <QueryInputs :queryParams="queryParams" />

    <div class="row">
      <DataTable
        class="display"
        :columns="columns"
        :data="data"
        :options="{ select: true }"
        ref="table"
        width="100%"
      >
      </DataTable>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive } from "vue";
import DataTable from "datatables.net-vue3";
import DataTableBs5 from "datatables.net-bs5";
import Select from "datatables.net-select";
import QueryInputs from "@/components/QueryInputs.vue";

DataTable.use(Select);
DataTable.use(DataTableBs5);

const queryParams = reactive({
  year: {
    show: true,
    name: "year",
  },
  unit: {
    show: true,
    name: "unit",
  },
  planNo: {
    show: true,
    name: "planNo",
  },
  fileName: {
    show: true,
    name: "fileName",
  },
});
const sendForm = () => {};

let dt;
const data = ref([]);
const table = ref();

//getPokemon().then((res) => {
// data.value = res;
//})

const columns = [
  {
    data: "ids",
    title: "",
    render: function (data, type) {
      return '<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">';
    },
  },
  {
    data: "fd1",
    title: "年度",
  },
  {
    data: "fd2",
    title: "契約編號",
  },
  {
    data: "fd3",
    title: "檔案名稱",
  },
  {
    data: "fd4",
    title: "預算金額(元)",
  },
  {
    data: "fd5",
    title: "採購方式",
  },
  {
    data: "fd6",
    title: "作業",
    render: function (data, type) {
      return `<a href="../ProcumentAcceptanceDetail">
                <button type="button" class="btn" value="">
                    執行階段
                </button>
            </a>
            <button type="button" class="btn" value="">
                <span><i class="fa-solid fa-pen"></i></span>
            </button>
            <button type="button" class="btn" value="">
                <span><i class="fa-solid fa-trash"></i></span>刪除
            </button>`;
    },
  },
];

// Initial data
for (let i = 0; i < 5; i++) {
  add(i);
}

// Get a DataTables API reference
onMounted(function () {
  dt = table.value.dt();
});

function add(numno) {
  console.log(numno);
  /*
    data.value.push({
        name: 'add pokemon',
        url: 'add url'
    })*/

  data.value.push({
    ids: numno + 1,
    fd1: "108",
    fd2: "108001302",
    fd3: "領航製藥產業躍升計畫",
    fd4: "42867000",
    fd5: "重新招標(第9款)",
  });
}
</script>

<style></style>
