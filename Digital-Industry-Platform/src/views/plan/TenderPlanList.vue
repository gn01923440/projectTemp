<template>
  <div class="row px-3">
    <div class="col-12 p-5">
      <h2
        class="text-title border-start border-4 border-secondary rounded-start px-3 py-3"
      >
        標案計畫清單
      </h2>
    </div>

    <div>
      <div class="row g-2">
        <div class="col-12">
          <button
            type="button"
            class="btn btn-outline-danger me-2"
            value=""
            data-bs-toggle="modal"
            data-bs-target="#excelModal"
          >
            <span
              ><i
                class="fas fa-sign-out-alt"
                style="transform: rotate(270deg)"
              ></i></span
            >匯出Excel
          </button>
          <button
            type="button"
            class="btn btn-outline-info me-2"
            value=""
            data-bs-toggle="modal"
            data-bs-target="#pdfModal"
          >
            <span><i class="fas fa-plus"></i></span>新增標案計畫
          </button>
        </div>
        <vee-form
          class="row"
          @Submit="onSubmit"
          :validation-schema="tenderSchema"
          autocomplete="off"
        >
          <div class="col-2 form-floating">
            <vee-field
              name="year"
              class="form-control"
              id="floatingInputGrid"
            />
            <label for="floatingInputGrid">年度</label>
            <ErrorMessage class="text-danger" name="year" />
          </div>
          <div class="col-2 form-floating">
            <vee-field
              as="select"
              name="groupCode"
              class="form-control"
              id="floatingInputGrid"
            >
              <option></option>
              <option value="1">申請版</option>
              <option value="2">核定版</option>
              <option value="3">法定版</option>
            </vee-field>
            <label for="floatingInputGrid">組室</label>
            <ErrorMessage class="text-danger" name="groupCode" />
          </div>
          <div class="col-2 form-floating">
            <vee-field
              name="projkey"
              class="form-control"
              id="floatingInputGrid"
            />
            <label for="floatingInputGrid">契約編號</label>
            <ErrorMessage class="text-danger" name="projkey" />
          </div>
          <div class="col-2 form-floating">
            <vee-field
              as="select"
              name="budgetSourceCode"
              class="form-control"
              id="floatingInputGrid"
            >
              <option></option>
              <option value="1">申請版</option>
              <option value="2">核定版</option>
              <option value="3">法定版</option>
            </vee-field>
            <label for="floatingInputGrid">預算來源</label>
            <ErrorMessage class="text-danger" name="budgetSourceCode" />
          </div>
          <div class="col-2 form-floating">
            <vee-field
              name="tenderChName"
              class="form-control"
              id="floatingInputGrid"
            />
            <label for="floatingInputGrid">標案名稱</label>
            <ErrorMessage class="text-danger" name="tenderChName" />
          </div>
          <div class="col-2">
            <button type="submit" class="btn btn-primary mb-2">
              <span><i class="fas fa-search"></i></span>
              <tips msg="查詢" /></button
            >&nbsp;
            <button
              @click="cleartenderListParams"
              type="reset"
              class="btn btn-secondary mb-2"
            >
              <span><i class="fas fa-stamp"></i></span>
              <tips msg="清空" />
            </button>
          </div>
        </vee-form>
      </div>

      <div class="row">
        <n-data-table :columns="columns" :data="tenderList"> </n-data-table>

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
    id="pdfModal"
    tabindex="-1"
    aria-labelledby="pdfModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="pdfModalLabel">新增標案計畫</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-6 my-1">
              <div class="form-floating">
                <input
                  type="email"
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
            <div class="col-10 my-1">
              <div class="form-floating px-0">
                <input
                  type="text"
                  class="form-control"
                  list="browsers"
                  name="myBrowser"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput" class=""
                  ><span class="text-danger">*</span>標案計畫名稱</label
                >
                <datalist id="browsers">
                  <option value="王大明"></option>
                  <option value="王中明"></option>
                  <option value="王小明"></option>
                </datalist>
              </div>
            </div>

            <div class="col-10 my-1">
              <div class="form-floating">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInputGrid"
                  placeholder="name@example.com"
                  value=""
                />
                <label for="floatingInputGrid">標案英文名稱</label>
              </div>
            </div>
            <div class="col-10 my-1">
              <div class="form-floating px-0">
                <input
                  type="text"
                  class="form-control"
                  list="browsers"
                  name="myBrowser"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">承辦人</label>
                <datalist id="browsers">
                  <option value="王大明"></option>
                  <option value="王中明"></option>
                  <option value="王小明"></option>
                </datalist>
              </div>
            </div>
            <div class="col-6 my-1">
              <div class="form-floating">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInputGrid"
                  placeholder="name@example.com"
                  value=""
                />
                <label for="floatingInputGrid">承辦人電話</label>
              </div>
            </div>
            <div class="col-10 my-1">
              <div class="form-floating px-0">
                <input
                  type="text"
                  class="form-control"
                  list="browsers"
                  name="myBrowser"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">選擇切割經費</label>
                <datalist id="browsers">
                  <option value="王大明"></option>
                  <option value="王中明"></option>
                  <option value="王小明"></option>
                </datalist>
              </div>
            </div>

            <div class="col-8 my-1">
              <div class="form-floating px-0">
                <input
                  type="text"
                  class="form-control"
                  list="browsers1"
                  name="myBrowser"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">綱要計畫名稱</label>
                <datalist id="browsers1">
                  <option value="你的綱要計畫"></option>
                  <option value="我的綱要計畫"></option>
                  <option value="他的綱要計畫"></option>
                </datalist>
              </div>
            </div>
            <div class="col-8 my-1">
              <div class="form-floating">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInputGrid"
                  placeholder="name@example.com"
                  value=""
                />
                <label for="floatingInputGrid">前期標案計畫</label>
              </div>
            </div>
            <div class="col-4 my-1">
              <button type="button" class="btn btn-primary mb-2" value="">
                <span><i class="fas fa-search"></i></span></button
              >&nbsp;
              <button type="button" class="btn btn-secondary mb-2" value="">
                <span><i class="fas fa-stamp"></i></span>
              </button>
            </div>

            <div class="col-6 my-1">
              <div class="col-md">
                <select
                  class="form-select py-3"
                  id="floatingSelectGrid"
                  aria-label="Floating label select example"
                >
                  <option selected>採購方式</option>
                  <option value="1">One</option>
                </select>
              </div>
            </div>
            <div class="col-6 my-1">
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  style="width: 50px; height: 25px"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
                <label
                  class="form-check-label mx-2"
                  for="flexSwitchCheckDefault"
                  >歸檔</label
                >
              </div>
            </div>
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
</template>

<script setup>
import { h, reactive, ref, onMounted } from "vue";
import _ from "lodash";
import { storeToRefs } from "pinia";
import { NButton } from "naive-ui";

import { useTenderStore } from "@/stores/tenderList";
import tips from "@/components/tips.vue";

const tenderStore = useTenderStore();
const { queryForTender, createTender, editTender } = tenderStore;
const { tenderList, currentPage, totalPage, pages } = storeToRefs(tenderStore);

const tenderSchema = {
  year: "year|min:2",
};
/* 查詢參數 */
const tenderListParams = reactive({
  year: null,
  projkey: null,
  groupCode: null,
  budgetSourceCode: null,
  currentPage: currentPage.value,
  totalPage: totalPage.value,
  pageRows: pages.value,
});
/* 重置查詢參數 */
const cleartenderListParams = () => {
  currentPage.value = 1;
};
/* 查詢提交 */
const onSubmit = async (values) => {
  tenderListParams.year = values.year;
  tenderListParams.planName = values.planName;
  tenderListParams.ministryCode = values.ministryCode;
  try {
    await queryForTender(tenderListParams);
  } catch (error) {
    console.log(error);
  }
};
/* 換頁 */
const pageChange = async () => {
  tenderListParams.currentPage = currentPage.value;
  try {
  } catch (error) {
    console.log(error);
  }
};
const columns = [
  {
    key: "id",
    title: "",
    render: (_, index) => {
      return `${index + 1 + (currentPage.value - 1) * pages.value}`;
    },
  },
  {
    key: "year",
    title: "年度",
  },
  {
    key: "projkey",
    title: "契約編號",
  },
  {
    key: "tenderChname",
    title: "標案名稱",
  },
  {
    key: "valuationCode",
    title: "採購方式",
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
            onClick: () => editTender(row),
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
            onClick: () => delTender(row),
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
