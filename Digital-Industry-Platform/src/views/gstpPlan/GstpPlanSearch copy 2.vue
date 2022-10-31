<template>
  <div class="row px-3">
    <div class="col-12 p-5">
      <h2
        class="text-title border-start border-4 border-secondary rounded-start px-3 py-3"
      >
        綱要計畫查詢
      </h2>
    </div>

    <div>
      <div class="row g-2 mb-3">
        <div class="col-12">
          <FileUpload
            uploadType=".xlsx"
            target="excel"
            btn_class="btn-outline-success"
            @save-file="saveFile('excel', $event)"
          >
            <template v-slot:uploadBtn>
              <span><i class="far fa-file-excel" style=""></i></span>匯入Excel
            </template>
            <template v-slot:uploadTitle> 匯入Excel </template>
          </FileUpload>
          <FileUpload
            uploadType=".pdf"
            target="pdf"
            btn_class="btn-outline-danger"
            detailLabel="計畫名稱"
            :detailList="detailList"
            :optList="optList"
            optLabel="年度"
            @save-file="saveFile('pdf', $event)"
          >
            <template v-slot:uploadBtn>
              <span><i class="far fa-file-powerpoint" style=""></i></span
              >匯入PDF
            </template>
            <template v-slot:uploadTitle> 匯入PDF </template>
          </FileUpload>
        </div>
        <Form class="row" @Submit="onSubmit" :validation-schema="gstpSchema">
          <div class="col-2">
            <div class="form-floating">
              <Field
                name="year"
                type="text"
                class="form-control"
                id="floatingInputGrid"
                placeholder="name@example.com"
                v-model="gstpPlanSearchParams.year"
              />
              <label for="floatingInputGrid">年度</label>
            </div>
          </div>
          <div class="col-3">
            <div class="form-floating">
              <Field
                name="sysno"
                type="text"
                class="form-control"
                id="floatingInputGrid"
                placeholder="name@example.com"
                v-model="gstpPlanSearchParams.sysno"
              />
              <label for="floatingInputGrid">系統編號</label>
            </div>
          </div>
          <div class="col-2">
            <div class="form-floating">
              <select
                name="ver"
                class="form-select"
                id="floatingSelectGrid"
                aria-label="Floating label select example"
                v-model="gstpPlanSearchParams.ver"
              >
                <option></option>
                <option value="1">V1</option>
                <option value="2">V2</option>
                <option value="3">V3</option>
                <option value="4">V4</option>
              </select>
              <label for="floatingSelectGrid">版本</label>
            </div>
          </div>
          <div class="col-3">
            <div class="form-floating">
              <Field
                name="chname"
                type="text"
                class="form-control"
                id="floatingInputGrid"
                placeholder="name@example.com"
                v-model="gstpPlanSearchParams.planName"
              />
              <label for="floatingInputGrid">計畫名稱</label>
            </div>
          </div>
          <div class="col-2">
            <button
              type="button"
              class="btn btn-primary mb-2"
              value=""
              @click="query"
            >
              <span><i class="fas fa-search"></i></span>
              <tips msg="查詢" /></button
            >&nbsp;
            <button type="button" class="btn btn-secondary mb-2" value="">
              <span><i class="fas fa-stamp"></i></span>
              <tips msg="清空" />
            </button>
          </div>
        </Form>
      </div>

      <div class="row col-12">
        <DataTable
          class="display table table-striped table-hover"
          :columns="columns"
          :data="data"
          :options="options"
          ref="table"
          width="100%"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted, toRef, onBeforeMount, onUpdated } from "vue";
import _ from "lodash";
import { Form, Field } from "vee-validate";
import DataTable from "datatables.net-vue3";
import DataTableBs5 from "datatables.net-bs5";
import Select from "datatables.net-select";
import { storeToRefs } from "pinia";
import FileUpload from "../components/FileUpload.vue";
import { useGstpStore } from "../stores/gstpPlan";

const params = reactive({
  currPage: 1,
  ttlCount: 10,
});
const gstpSchema = {
  year: "required|min:5",
  sysno: "required",
  ver: "required",
  chname: "required",
};

const gstpStore = useGstpStore();
const { detailList, optList, getData, uploadExcel, uploadPdf } = gstpStore;
const { data } = storeToRefs(gstpStore);

const saveFile = (type, uploadObj) => {
  if (_.isEqual(type, "excel")) uploadExcel(uploadObj);
  if (_.isEqual(type, "pdf")) uploadPdf(uploadObj);
};

const gstpPlanSearchParams = reactive({
  year: "",
  sysno: "",
  ver: "",
  planName: "",
  page: 1,
});

DataTable.use(Select);
DataTable.use(DataTableBs5);

let dt;
const table = ref();
// const language = {
//   sInfo: "顯示第 _START_ 至 _END_ 項結果，共 _TOTAL_ 項",
// };
const options = {
  dom: "it",
  select: true,
  language: {
    info: "中文 page _PAGE_ of _PAGES_",
  },
};
const columns = [
  {
    data: "ids",
    title: "",
    // class:'col-1'
    width: 50,
  },
  {
    data: "year",
    title: "年度",
    // class:'col-1',
    width: 100,
  },
  {
    data: "sysno",
    title: "系統編號",
    // class:'col-2',
    width: 170,
  },
  {
    data: "chname",
    title: "計畫中文名稱",
    // class:'col-3',
    width: 500,
  },
  {
    data: "ver",
    title: "版本",
    // class:'col-1',
    width: 100,
  },
  {
    data: "work",
    title: "作業",
    // class:'col-2',
    width: 200,
    // toPage: "../GstpPlanSearchDetail",
    // action:
    //   '<button type="button" class="btn btn-primary" value=""><span><i class="far fa-eye"></i></span>資訊</button></a>&nbsp;<button type="button" class="btn btn-secondary" value=""><span><i class="fas fa-download"></i></span>下載</button>',
    render: function (data, type) {
      return '<a href="../GstpPlanSearchDetail"><button type="button" class="btn btn-primary" value=""><span><i class="far fa-eye"></i></span>資訊</button></a>&nbsp;<button type="button" class="btn btn-secondary" value=""><span><i class="fas fa-download"></i></span>下載</button>';
    },
  },
];

// Get a DataTables API reference
onMounted(() => {
  getData();
  dt = table.value.dt();
});
const query = () => {
  console.log("sadfasdf");
  // getData();
};
const onSubmit = (values) => {
  console.log(values);
};
</script>

<style scoped>
@import "bootstrap";
@import "datatables.net-bs5";
</style>
