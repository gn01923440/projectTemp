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
            uploadType=".7z, .zip, .rar"
            target="zipfile"
            btn_class="btn-outline-danger"
            detailLabel="版本"
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
              <option value="1">申請版</option>
              <option value="2">核定版</option>
              <option value="3">法定版</option>
            </vee-field>
            <label for="floatingInputGrid">版本</label>
            <ErrorMessage class="text-danger" name="ver" />
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
      </div>

      <!-- <div class="row col-12">
        <DataTable
          class="display table table-striped table-hover"
          :columns="columns"
          :data="data"
          :options="options"
          ref="table"
          width="100%"
        />
      </div> -->
    </div>
    <n-config-provider :theme-overrides="themeOverrides">
      <n-data-table
        :columns="columns"
        :data="gstpList"
        :pagination="false"
        :bordered="false"
        size="large"
      />
    </n-config-provider>
    <n-pagination
      v-model:page="currentPage"
      :page-count="totalPage"
      simple
      @update:page="pageChange"
    />
  </div>
</template>

<script setup>
import { h, reactive, ref } from "vue";
import _ from "lodash";
import { storeToRefs } from "pinia";
import { NButton, NConfigProvider, NIcon } from "naive-ui";

import FileUpload from "@/components/FileUpload.vue";
import { useGstpStore } from "@/stores/gstpPlan";
import tips from "@/components/tips.vue";

const gstpSchema = {
  year: "year|min:2",
  sysno: "sysno",
};

const gstpStore = useGstpStore();
const {
  detailList,
  optList,
  getData,
  uploadExcel,
  uploadPdf,
  queryForGstp,
  toGstpDetail,
} = gstpStore;
const { gstpList, currentPage, totalPage, pages } = storeToRefs(gstpStore);
const saveFile = (type, uploadObj) => {
  console.log(type);
  if (_.isEqual(type, "excel")) uploadExcel(uploadObj);
  if (_.isEqual(type, "zipfile")) uploadPdf(uploadObj);
};
const queryGstpParams = reactive({
  year: "",
  sysno: "",
  ver: "",
  planName: "",
  currentPage: currentPage.value,
  totalPage: totalPage.value,
  pageRows: pages.value,
});
const onSubmit = async (values) => {
  queryGstpParams.year = values.year;
  queryGstpParams.sysno = values.sysno;
  queryGstpParams.ver = values.ver;
  queryGstpParams.planName = values.planName;
  try {
    await queryForGstp(queryGstpParams);
  } catch (error) {
    console.log(error);
  }
};
const pageChange = async () => {
  queryGstpParams.currentPage = currentPage.value;
  try {
    await queryForGstp(queryGstpParams);
  } catch (error) {
    console.log(error);
  }
};
const createColumns = ({ redirect }) => {
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
      title: "年度",
      key: "year",
    },
    {
      title: "系統編號",
      key: "sysno",
    },
    {
      title: "計畫中文名稱",
      key: "planName",
    },
    {
      title: "版本",
      key: "ver",
      render: (row) => {
        return row.ver === "1"
          ? "申請版"
          : row.ver === "2"
          ? "核定版"
          : row.ver === "3"
          ? "法定版"
          : "";
      },
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
              onClick: () => redirect(row),
            },
            {
              default: () =>
                h("span", [h("i", { class: "fa-solid fa-eye" }), "資訊"]),
            }
          ),
          h(
            NButton,
            {
              strong: true,
              // tertiary: true,
              size: "large",
              color: "red",
              onclick: () => download(row),
            },
            { default: () => "下載" }
          ),
        ];
      },
    },
  ];
};

const columns = createColumns({
  redirect(row) {
    toGstpDetail(row);
    //<a href="../GstpPlanSearchDetail">
  },
  // play(row) {
  //   message.info(`Play ${row.title}`);
  // },
});

/**
 * Use this for type hints under js file
 * @type import('naive-ui').GlobalThemeOverrides
 */
const themeOverrides = {
  common: {
    primaryColor: "#FF0000",
    textColor: "#FF2412",
  },
  Select: {
    peers: {
      InternalSelection: {
        textColor: "#FF0000",
      },
    },
  },
  paginationMargin: "100px 0 0 0",
  peers: {
    Empty: {
      textColor: "#ccc",
    },
    Pagination: {
      itemTextColor: "#ccc",
    },
  },
};
</script>

<style scoped>
@import "bootstrap";
@import "datatables.net-bs5";
:deep(.big-size) {
  font-size: 24px;
}
</style>
