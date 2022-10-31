<template>
  <div class="row px-3">
    <div class="col-12 p-5">
      <h2
        class="text-title border-start border-4 border-secondary rounded-start px-3 py-3"
      >
        綱要經費切割
      </h2>
    </div>

    <div>
      <div class="row g-2 mb-3">
        <div class="col-12">
          <button
            type="button"
            class="btn btn-outline-success me-2"
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
            class="btn btn-outline-danger me-2"
            value=""
            data-bs-toggle="modal"
            data-bs-target="#pdfModal"
          >
            <span
              ><i
                class="fas fa-sign-out-alt"
                style="transform: rotate(270deg)"
              ></i></span
            >匯出Excel
          </button>
          <button type="button" class="btn btn-outline-info me-2" value="">
            <span><i class="fas fa-plus"></i></span>新增切割經費
          </button>
          <button
            type="button"
            class="btn btn-outline-warning me-2"
            value=""
            data-bs-toggle="modal"
            data-bs-target="#coverModal"
          >
            <span><i class="fas fa-spell-check"></i></span>勾選轉入標案
          </button>
        </div>

        <vee-form
          class="row"
          @Submit="onSubmit"
          :validation-schema="gstpSchema"
          autocomplete="false"
        >
          <div class="col-2 form-floating">
            <vee-field
              type="text"
              name="year"
              class="form-control"
              id="floatingInputGrid"
            />
            <label for="floatingInputGrid">年度</label>
            <ErrorMessage class="text-danger" name="year" />
          </div>
          <div class="col-3 form-floating">
            <vee-field
              type="text"
              name="planName"
              class="form-control"
              id="floatingInputGrid"
            />
            <label for="floatingInputGrid">綱要計畫</label>
            <ErrorMessage class="text-danger" name="planName" />
          </div>
          <div class="col-2 form-floating">
            <vee-field
              as="select"
              name="ministryCode"
              class="form-control"
              id="floatingInputGrid"
            >
              <option></option>
              <option value="1">申請版</option>
              <option value="2">核定版</option>
              <option value="3">法定版</option>
            </vee-field>
            <label for="floatingInputGrid">版本</label>
            <ErrorMessage class="text-danger" name="ministryCode" />
          </div>
          <div class="col-3 form-floating">
            <vee-field
              type="text"
              name="planName"
              class="form-control"
              id="floatingInputGrid"
            />
            <label for="floatingInputGrid">計畫名稱</label>
            <ErrorMessage class="text-danger" name="planName" />
          </div>
          <div class="col-2">
            <button type="submit" class="btn btn-primary mb-2">
              <span><i class="fas fa-search"></i></span>
              <tips msg="查詢" /></button
            >&nbsp;
            <button type="reset" class="btn btn-secondary mb-2" value="">
              <span><i class="fas fa-stamp"></i></span>
              <tips msg="清空" />
            </button>
          </div>
        </vee-form>

        <div class="col-2">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingInputGrid"
              placeholder="name@example.com"
              value=""
            />
            <label for="floatingInputGrid"
              ><span class="text-danger">*</span>年度</label
            >
          </div>
        </div>
        <div class="col-4">
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInputGrid"
              placeholder="name@example.com"
              value=""
            />
            <label for="floatingInputGrid">綱要計畫</label>
          </div>
        </div>
        <div class="col-2">
          <div class="form-floating">
            <select
              class="form-select"
              id="floatingSelectGrid"
              aria-label="Floating label select example"
            >
              <option></option>
              <option value="1">One</option>
            </select>
            <label for="floatingSelectGrid">經費組室</label>
          </div>
        </div>
        <div class="col-md">
          <button type="button" class="btn btn-primary mb-2" value="">
            <span><i class="fas fa-search"></i></span>
            <tips msg="查詢" /></button
          >&nbsp;
          <button type="button" class="btn btn-secondary mb-2" value="">
            <span><i class="fas fa-stamp"></i></span>
            <tips msg="清空" />
          </button>
          <!-- <button type="button" class="btn" value=""><span><i class="fas fa-search"></i></span>新增切割經費</button>
          <button type="button" class="btn" value="" data-bs-toggle="modal" data-bs-target="#coverModal"><span><i class="fas fa-stamp"></i></span>勾選轉入標案</button> -->
          <!-- <button type="button" class="btn" value="" data-bs-toggle="modal" data-bs-target="#excelModal"><span><i class="far fa-file-excel"></i></span>匯入Excel</button>
          <button type="button" class="btn" value="" ><span><i class="far fa-file-pdf"></i></span>匯出Excel</button> -->
        </div>
      </div>

      <div class="row">
        <DataTable
          class="display table table-striped table-hover"
          :columns="columns"
          :data="data"
          :options="{ select: true }"
          ref="table"
          width="100%"
        >
        </DataTable>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="excelModal"
    tabindex="-1"
    aria-labelledby="excelModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="excelModalLabel">匯入Excel</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="input-group">
            <input
              type="file"
              class="form-control"
              id="inputGroupFile04"
              aria-describedby="inputGroupFileAddon04"
              aria-label="Upload"
            />
          </div>
        </div>
        <div class="modal-footer justify-content-center">
          <button type="button" class="btn btn-warning text-white">儲存</button>
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="coverModal"
    tabindex="-1"
    aria-labelledby="coverModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="coverModalLabel">勾選轉入標案</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div><h6>請選擇主要綱要計畫：</h6></div>
          <ul class="list-group">
            <li class="list-group-item">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />An item
            </li>
            <li class="list-group-item">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />A second item
            </li>
            <li class="list-group-item">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />A third item
            </li>
            <li class="list-group-item">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />A fourth item
            </li>
            <li class="list-group-item">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />And a fifth one
            </li>
          </ul>
        </div>
        <div class="modal-footer justify-content-center">
          <button type="button" class="btn btn-warning text-white">儲存</button>
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import DataTable from "datatables.net-vue3";
import DataTableBs5 from "datatables.net-bs5";
import Select from "datatables.net-select";
import tips from "@/components/tips.vue";

DataTable.use(Select);
DataTable.use(DataTableBs5);

let counter = 0;
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
    width: "70",
  },
  {
    data: "fd2",
    title: "綱要計畫",
  },
  {
    data: "fd3",
    title: "切割名稱",
  },
  {
    data: "fd4",
    title: "經費組室",
    width: "120",
  },
  {
    data: "fd5",
    title: "行政院核定數(仟元)",
  },
  {
    data: "fd6",
    title: "立法院法定數(仟元)",
  },
  {
    data: "fd7",
    title: "作業",
    render: function (data, type) {
      return '<a href="../PlanCostCuttingDetail"><button type="button" class="btn btn-warning" value=""><span><i class="fa-solid fa-pen"></i></span>修改</button></a>&nbsp;<button type="button" class="btn btn-danger" value=""><span><i class="fas fa-trash-alt"></i></span>刪除</button>';
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
    fd1: "109",
    fd2: "MP10804-0012",
    fd3: "產業循環經濟創新領導計畫(2/4)",
    fd4: "民生化工組",
    fd5: "0",
    fd6: "0",
    // fd7:'核定版'
  });
}
</script>

<style scoped>
@import "bootstrap";
@import "datatables.net-bs5";
</style>
