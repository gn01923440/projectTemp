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
          <a class="btn btn-outline-danger me-2" :href="downloadUrl"
            ><span
              ><i
                class="fas fa-sign-out-alt"
                style="transform: rotate(270deg)"
              ></i></span
            >匯出Excel</a
          >
          <button class="btn btn-outline-info me-2" @click="newCutting">
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
          :validation-schema="cuttingSchema"
          autocomplete="off"
        >
          <div class="col-2 form-floating">
            <vee-field
              type="text"
              name="year"
              class="form-control"
              id="floatingInputGrid"
              v-model="downLoadParams.year"
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
              v-model="downLoadParams.planName"
            />
            <label for="floatingInputGrid">綱要計畫</label>
            <ErrorMessage class="text-danger" name="sysno" />
          </div>
          <div class="col-2 form-floating">
            <vee-field
              as="select"
              name="ver"
              class="form-control"
              id="floatingInputGrid"
              v-model="downLoadParams.groupCode"
            >
              <option></option>
              <option value="1">申請版</option>
              <option value="2">核定版</option>
              <option value="3">法定版</option>
            </vee-field>
            <label for="floatingInputGrid">經費組室</label>
            <ErrorMessage class="text-danger" name="ver" />
          </div>
          <div class="col-2">
            <button type="submit" class="btn btn-primary mb-2">
              <span><i class="fas fa-search"></i></span>
              <tips msg="查詢" /></button
            >&nbsp;
            <button
              type="reset"
              class="btn btn-secondary mb-2"
              @click="clearCuttingParams"
            >
              <span><i class="fas fa-stamp"></i></span>
              <tips msg="清空" />
            </button>
          </div>
        </vee-form>

        <n-data-table
          :data="cuttingList"
          :columns="columns"
          :row-key="rowKey"
        ></n-data-table>

        <n-pagination
          v-model:page="currentPage"
          :page-count="totalPage"
          simple
          @update:page="pageChange"
        />
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
            <li class="list-group-item" v-for="cutting in cuttingList"></li>
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
import { h, ref, reactive } from "vue";
import _ from "lodash";
import { storeToRefs } from "pinia";
import { NButton } from "naive-ui";

import FileUpload from "@/components/FileUpload.vue";
import { useCuttingStore } from "@/stores/costCuttingStore";
import tips from "@/components/tips.vue";

const cuttingStore = useCuttingStore();
const {
  queryForCutting,
  editCutting,
  newCutting,
  delCutting,
  uploadExcel,
  createDownloadUrl,
} = cuttingStore;
const { cuttingList, currentPage, totalPage, pages, downloadUrl } =
  storeToRefs(cuttingStore);
const cuttingSchema = {
  year: "year|min:2",
};
/* 匯入Excel */
const saveFile = (type, uploadObj) => {
  if (_.isEqual(type, "excel")) uploadExcel(uploadObj);
};
/* 匯出Excel */
const downLoadParams = reactive({
  year: null,
  planName: null,
  groupCode: null,
});
/* 查詢參數 */
const queryCuttingParams = reactive({
  year: null,
  planName: null,
  ministryCode: null,
  currentPage: currentPage.value,
  totalPage: totalPage.value,
  pageRows: pages.value,
});
/* 重置查詢參數 */
const clearCuttingParams = () => {
  downLoadParams.year = null;
  downLoadParams.planName = null;
  downLoadParams.groupCode = null;
  currentPage.value = 1;
};
/* 查詢提交 */
const onSubmit = async (values) => {
  queryCuttingParams.year = values.year;
  queryCuttingParams.planName = values.planName;
  queryCuttingParams.ministryCode = values.ministryCode;
  try {
    await queryForCutting(queryCuttingParams);
    await createDownloadUrl(downLoadParams);
  } catch (error) {
    console.log(error);
  }
};
/* 換頁 */
const pageChange = async () => {
  queryCuttingParams.currentPage = currentPage.value;
  try {
    await queryForGstp(queryCuttingParams);
  } catch (error) {
    console.log(error);
  }
};
/* tableCheckbox */
const rowKey = (row) => row.id;
/* tableColumns */
const columns = [
  {
    key: "id",
    title: "",
    render: (_, index) => {
      return `${index + 1 + (currentPage.value - 1) * pages.value}`;
    },
  },
  { type: "selection" },
  {
    key: "year",
    title: "年度",
    width: "70",
  },
  {
    key: "planName",
    title: "綱要計畫",
  },
  {
    key: "name",
    title: "切割名稱",
  },
  {
    key: "ministryName",
    title: "經費組室",
    width: "120",
  },
  {
    key: "approveSum",
    title: "行政院核定數(仟元)",
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
            type: "warning",
            strong: true,
            size: "large",
            onClick: () => editCutting(row),
          },
          {
            default: () =>
              h("span", [h("i", { class: "fa-solid fa-pen" }), "修改"]),
          }
        ),
        h(
          NButton,
          {
            style: {
              marginRight: "16px",
            },
            type: "danger",
            strong: true,
            size: "large",
            onClick: () => delCutting(row),
          },
          {
            default: () =>
              h("span", [h("i", { class: "fas fa-trash-alt" }), "刪除"]),
          }
        ),
      ];
    },
  },
];
</script>

<style scoped>
@import "bootstrap";
@import "datatables.net-bs5";
</style>
