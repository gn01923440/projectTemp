<template>
  <div class="row px-3">
    <div class="col-12 p-5">
      <h2
        class="text-title border-start border-4 border-secondary rounded-start px-3 py-3"
      >
        計畫簽約/變更/查詢作業
      </h2>
    </div>
    <!-- <QueryInputs :queryParams="queryParams"/> -->
    <vee-form
      class="row"
      @Submit="onSubmit"
      autocomplete="off"
      :validation-schema="planDataSchema"
    >
      <div class="col-2 form-floating">
        <vee-field
          type="text"
          name="years"
          class="form-control"
          id="floatingInputGrid"
        />
        <label for="floatingInputGrid">年度(起)</label>
        <ErrorMessage class="text-danger" name="years" />
      </div>
      <div class="col-2 form-floating">
        <vee-field
          type="text"
          name="yeare"
          class="form-control"
          id="floatingInputGrid"
        />
        <label for="floatingInputGrid">年度(迄)</label>
        <ErrorMessage class="text-danger" name="yeare" />
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
        <label for="floatingInputGrid">經費組室</label>
        <ErrorMessage class="text-danger" name="groupCode" />
      </div>
      <div class="col-3 form-floating">
        <vee-field
          type="text"
          name="projkey"
          class="form-control"
          id="floatingInputGrid"
        />
        <label for="floatingInputGrid">契約編號</label>
        <ErrorMessage class="text-danger" name="projkey" />
      </div>
      <div class="col-md">
        <button type="submit" class="btn btn-primary mb-2">
          <span><i class="fas fa-search"></i></span>
          <tips msg="查詢" /></button
        >&nbsp;
        <button
          type="reset"
          class="btn btn-secondary mb-2"
          @click="currentPage = 1"
        >
          <span><i class="fas fa-stamp"></i></span>
          <tips msg="清空" />
        </button>
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
    </vee-form>

    <div class="row">
      <n-data-table :columns="columns" :data="planDataList"></n-data-table>

      <n-pagination
        v-model:page="currentPage"
        :page-count="totalPage"
        simple
        @update:page="pageChange"
      />
    </div>
  </div>
  <!-- 版本 -->
  <n-modal v-model:show="showModalVer">
    <n-card
      title="變更版本"
      :bordered="false"
      size="huge"
      role="dialog"
      style="width: 50%; position: fixed; top: 10%; left: 25%"
      closable
      @close="showModalVer = false"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <div><h6>變更原因：</h6></div>
            <ul class="list-group">
              <li class="list-group-item">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />經費刪減
              </li>
              <li class="list-group-item">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />經費加帳
              </li>
              <li class="list-group-item">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />經費減帳
              </li>
              <li class="list-group-item">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />計畫主持人變更
              </li>
              <li class="list-group-item">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />計畫展延不跨年度者變更
              </li>
              <li class="list-group-item">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />計畫展延跨年度者變更
              </li>
              <li class="list-group-item">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />分包計畫變更
              </li>
              <li class="list-group-item">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />其他
              </li>
            </ul>
          </div>
          <div class="mb-3 col-10 offset-1">
            <label for="exampleFormControlTextarea1" class="form-label"
              >版本說明</label
            >
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div class="modal-footer justify-content-center">
            <button type="button" class="btn btn-warning text-white">
              儲存
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              @click="showModalVer = false"
            >
              取消
            </button>
          </div>
        </div>
      </div>
    </n-card></n-modal
  >
  <!-- 用印 -->
  <n-modal v-model:show="showModalContract">
    <n-card
      title="合約用印"
      :bordered="false"
      size="huge"
      role="dialog"
      style="width: 50%; position: fixed; top: 10%; left: 25%"
      closable
      @close="showModalContract = false"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <div class="input-group mb-3">
              <input
                type="file"
                class="form-control"
                id="inputGroupFile04"
                aria-describedby="inputGroupFileAddon04"
                aria-label="Upload"
              />
            </div>
            <div class="row">
              <a
                href="#"
                class="btn btn-primary col-5 m-auto"
                tabindex="-1"
                role="button"
                aria-disabled="false"
                >XXXX計畫(1/1).pdf</a
              >
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <button type="button" class="btn btn-warning text-white">
              上傳
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              @click="showModalContract = false"
            >
              取消
            </button>
          </div>
        </div>
      </div>
    </n-card></n-modal
  >
</template>

<script setup>
import { h, onMounted, ref, reactive, onBeforeMount, onUpdated } from "vue";
import { storeToRefs } from "pinia";
import { NButton } from "naive-ui";
import tips from "@/components/tips.vue";
import { usePlanDataStore } from "@/stores/planDataStore";

const planDataStore = usePlanDataStore();
const { queryForPlanData, editPlanData, delPlanData, toPlanDataDetail } =
  planDataStore;
const { planDataList, currentPage, totalPage, pages } =
  storeToRefs(planDataStore);

const showModalVer = ref(false);
const showModalContract = ref(false);

/* 檢核規則 */
const planDataSchema = {
  years: "year|min:2",
  yeare: "year|min:2",
};
/* 查詢參數 */
const queryPlanDataParams = reactive({
  years: null,
  years: null,
  projkey: null,
  planName: null,
  groupCode: null,
  currentPage: currentPage.value,
  totalPage: totalPage.value,
  pageRows: pages.value,
});
/* 查詢提交 */
const onSubmit = async (values) => {
  queryPlanDataParams.years = values.years;
  queryPlanDataParams.yeare = values.yeare;
  queryPlanDataParams.projkey = values.projkey;
  queryPlanDataParams.planName = values.planName;
  queryPlanDataParams.groupCode = values.groupCode;
  try {
    await queryForPlanData(queryPlanDataParams);
  } catch (error) {
    console.log(error);
  }
};
/* 換頁 */
const pageChange = async () => {
  planDataParams.currentPage = currentPage.value;
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
    key: "planName",
    title: "計畫名稱",
  },
  {
    key: "yearS",
    title: "執行期間起",
  },
  {
    key: "yearE",
    title: "執行期間迄",
  },
  {
    key: "statusCode",
    title: "狀態",
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
            onClick: () => toPlanDataDetail(row),
          },
          {
            default: () =>
              h("span", [h("i", { class: "fa-solid fa-eye" }), "資訊"]),
          }
        ),
        h(
          NButton,
          {
            style: {
              marginRight: "16px",
            },
            type: "default",
            strong: true,
            size: "large",
            onClick: () => (showModalVer.value = true),
          },
          {
            default: () => h("span", "變更"),
          }
        ),
        h(
          NButton,
          {
            style: {
              marginRight: "16px",
            },
            type: "default",
            strong: true,
            size: "large",
            onClick: () => (showModalContract.value = true),
          },
          {
            default: () => h("span", "用印版"),
          }
        ),
        h(
          NButton,
          {
            style: {
              marginRight: "16px",
            },
            type: "warning",
            strong: true,
            size: "large",
            onClick: () => editPlanData(row),
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
            onClick: () => delPlanData(row),
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
<style></style>
