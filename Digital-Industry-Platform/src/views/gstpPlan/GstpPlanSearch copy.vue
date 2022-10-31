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
        <div class="col-12 mb-2">
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
        <vee-form
          class="row"
          @Submit="onSubmit"
          :validation-schema="gstpSchema"
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
              name="sysno"
              class="form-control"
              id="floatingInputGrid"
            />
            <label for="floatingInputGrid">系統編號</label>
            <ErrorMessage class="text-danger" name="sysno" />
          </div>
          <div class="col-2 form-floating">
            <vee-field
              as="select"
              name="ver"
              class="form-control"
              id="floatingInputGrid"
            >
              <option></option>
              <option value="1">V1</option>
              <option value="2">V2</option>
              <option value="3">V3</option>
              <option value="4">V4</option>
            </vee-field>
            <label for="floatingInputGrid">版本</label>
            <ErrorMessage class="text-danger" name="ver" />
          </div>
          <div class="col-3 form-floating">
            <vee-field
              type="text"
              name="chname"
              class="form-control"
              id="floatingInputGrid"
            />
            <label for="floatingInputGrid">計畫名稱</label>
            <ErrorMessage class="text-danger" name="chname" />
          </div>
          <div class="col-2">
            <button type="submit" class="btn btn-primary mb-2">
              <span><i class="fas fa-search"></i></span>
              <tips msg="查詢" /></button
            >&nbsp;
            <button type="button" class="btn btn-secondary mb-2" value="">
              <span><i class="fas fa-stamp"></i></span>
              <tips msg="清空" />
            </button>
          </div>
        </vee-form>
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
    <n-data-table
      :columns="columns"
      :data="data"
      :pagination="pagination"
      :bordered="false"
    />
  </div>
</template>

<script setup>
import { reactive, ref, onMounted, toRef, onBeforeMount, onUpdated } from "vue";
import _ from "lodash";
import DataTable from "datatables.net-vue3";
import DataTableBs5 from "datatables.net-bs5";
import Select from "datatables.net-select";
import { storeToRefs } from "pinia";
import FileUpload from "../components/FileUpload.vue";
import { useGstpStore } from "../stores/gstpPlan";
import { language } from "../assets/tableLanguage.js";
import tips from "../components/tips.vue";
import { h, defineComponent } from "vue";
import { NButton, useMessage } from "naive-ui";

const gstpSchema = {
  year: "year|min:2",
  sysno: "sysno",
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

const options = {
  dom: "tip",
  select: true,
  language: language,
  pageLength: 25,
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
    render: function (data, type, row) {
      return `<button @click="redirect(${row.ids})" type="button" class="btn btn-primary" value=""><span><i class="far fa-eye"></i></span>資訊</button>&nbsp;<button type="button" class="btn btn-secondary" value=""><span><i class="fas fa-download"></i></span>下載</button>`;
    },
  },
];
const redirect = (ids) => {
  console.log(ids);
  //<a href="../GstpPlanSearchDetail">
};
// Get a DataTables API reference
onMounted(() => {
  getData();
  dt = table.value.dt();
  console.log(table);
});
const onSubmit = async (values) => {
  try {
    await console.log(values);
  } catch (error) {
    console.log("error");
  }
  // getData();
};
const schema = {
  name: "required|min:3|max:100|alpha_spaces",
  email: "required|min:3|max:100|email",
};

const createColumns = ({ play }) => {
  return [
    {
      title: "No",
      key: "no",
    },
    {
      title: "Title",
      key: "title",
    },
    {
      title: "Length",
      key: "length",
    },
    {
      title: "Action",
      key: "actions",
      render(row) {
        return h(
          NButton,
          {
            strong: true,
            tertiary: true,
            size: "small",
            onClick: () => play(row),
          },
          { default: () => "Play" }
        );
      },
    },
  ];
};

const data = [
  { no: 3, title: "Wonderwall", length: "4:18" },
  { no: 4, title: "Don't Look Back in Anger", length: "4:48" },
  { no: 12, title: "Champagne Supernova", length: "7:27" },
];

export default defineComponent({
  setup() {
    const message = useMessage();
    return {
      data,
      columns: createColumns({
        play(row) {
          message.info(`Play ${row.title}`);
        },
      }),
      pagination: false,
    };
  },
});
</script>

<style scoped>
@import "bootstrap";
@import "datatables.net-bs5";
</style>
