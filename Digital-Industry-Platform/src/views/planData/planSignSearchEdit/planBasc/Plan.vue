<template>
  <div class="row px-5 py-3">
    <vee-form @Submit="onSubmit" autocomplete="off" validation-schema="">
      <div class="row">
        <!-- 有無資訊處理作業 -->
        <div class="col-6 py-3">
          <span class="form-floating">
            <div class="row">
              <span class="col"
                >有資訊處理相關作業
                <button
                  class="btn btn-primary rounded-circle p-0"
                  style="
                    width: 20px;
                    height: 20px;
                    font-size: 14px;
                    font-weight: bold;
                  "
                >
                  ?
                  <!-- <span class="tips">aaaa</span> -->
                  <tips
                    msg="如有資訊系統作業規劃、資訊系統人力開發維護費用、資訊軟硬體或其他資訊處理費用，請勾選「有」。"
                  />
                </button>
              </span>
              <span class="col">
                <vee-field type="radio" name="flag" checked />有
                <vee-field type="radio" name="flag" />無
              </span>
              <span class="col">
                <button
                  type="button"
                  class="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#infoSysModal"
                >
                  填寫資訊系統
                </button>
              </span>
            </div>
          </span>
        </div>
        <!-- 計畫執行年度(民國年) -->
        <div class="col-2 py-3">
          <span class="form-floating">
            <vee-field
              type="text"
              name="year"
              class="form-control"
              id="floatingInputGrid"
            />
            <label for="floatingSelect">計畫執行年度(民國年)</label>
          </span>
        </div>
        <div class="col py-3">
          <button
            class="btn btn-primary rounded-circle p-0"
            style="
              width: 20px;
              height: 20px;
              font-size: 14px;
              font-weight: bold;
            "
          >
            ?
            <!-- <span class="tips">aaaa</span> -->
            <tips msg="指計畫之起始年度，需與本期期間(起)之年度相同。" />
          </button>
        </div>
        <!-- 標案-契約編號 -->
        <div class="col-3 py-3">
          <span class="form-floating">
            <vee-field
              as="select"
              name="projkey"
              class="form-control"
              id="floatingInputGrid"
            >
              <option></option>
              <option
                v-for="menu in planNameMenu"
                :value="menu.projkey"
                :key="menu.projkey"
              >
                {{ menu.tenderChname }}
              </option>
            </vee-field>
            <label for="floatingSelect">標案-契約編號</label>
          </span>
        </div>
        <!-- 計畫中文名稱(GRB) -->
        <div class="col-6 py-3">
          <span class="form-floating">
            <input
              readonly
              type="text"
              class="form-control"
              placeholder="計畫中文名稱"
              aria-label="計畫中文名稱"
              value="123"
            />
            <label for="floatingSelect">計畫中文名稱(GRB)</label>
          </span>
        </div>
        <!-- 計畫英文名稱(GRB) -->
        <div class="col-6 py-3">
          <span class="form-floating">
            <input
              readonly
              type="text"
              class="form-control"
              placeholder="計畫英文名稱"
              aria-label="計畫英文名稱"
              value="123"
            />
            <label for="floatingSelect">計畫英文名稱(GRB)</label>
          </span>
        </div>
        <!-- 委託/執行單位(GRB) -->
        <div class="col-6 py-3">
          <span class="form-floating">
            <input
              required
              type="text"
              class="form-control"
              placeholder="委託/執行單位"
              aria-label="委託/執行單位"
              value=""
            />
            <label for="floatingSelect">委託/執行單位(GRB)</label>
          </span>
        </div>
        <div class="col-6 py-3">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="共同得標廠商"
              aria-label="共同得標廠商"
              value=""
            />
            <label for="floatingSelect">共同得標廠商</label>
          </span>
        </div>
        <div class="col-6 py-3">
          <span class="form-floating">
            <input
              required
              type="text"
              class="form-control"
              placeholder="執行單位簽約人"
              aria-label="執行單位簽約人"
              value=""
            />
            <label for="floatingSelect">執行單位簽約人(GRB)</label>
          </span>
        </div>
        <div class="col-6 py-3">
          <span class="form-floating">
            <select
              class="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option></option>

              <option value="1">One</option>

              <option value="2">Two</option>

              <option value="3">Three</option>
            </select>
            <label for="floatingSelect">經費及承攬類型</label>
          </span>
        </div>
        <div class="col-6 py-3">
          <span class="form-floating">
            <select
              class="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option></option>

              <option value="1">One</option>

              <option value="2">Two</option>

              <option value="3">Three</option>
            </select>
            <label for="floatingSelect">計價方式</label>
          </span>
        </div>
        <div class="col-6 py-3">
          <span class="form-floating">
            <select
              class="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option></option>

              <option value="1">One</option>

              <option value="2">Two</option>

              <option value="3">Three</option>
            </select>
            <label for="floatingSelect">計畫類型</label>
          </span>
        </div>
        <div class="col-6 py-3">
          <span class="form-floating">
            <select
              class="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option></option>

              <option value="1">One</option>

              <option value="2">Two</option>

              <option value="3">Three</option>
            </select>
            <label for="floatingSelect">計畫依據(GRB)</label>
          </span>
        </div>
        <div class="col-6 py-3">
          <span class="form-floating">
            <select
              class="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option></option>

              <option value="1">One</option>

              <option value="2">Two</option>

              <option value="3">Three</option>
            </select>
            <label for="floatingSelect">研究性質(GRB)</label>
          </span>
        </div>
        <div class="col-6 py-3">
          <span class="form-floating">
            <select
              class="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option></option>

              <option value="1">One</option>

              <option value="2">Two</option>

              <option value="3">Three</option>
            </select>
            <label for="floatingSelect">研究目的(GRB)</label>
          </span>
        </div>
        <div class="col-6 py-3">
          <span class="form-floating">
            <select
              class="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option></option>

              <option value="1">One</option>

              <option value="2">Two</option>

              <option value="3">Three</option>
            </select>
            <label for="floatingSelect">計畫屬性(GRB)</label>
          </span>
        </div>

        <div class="col-5 mb-3">
          <!-- <div class="form-floating"> -->
          <label for="floatingInputGrid">本年度期間_起</label>
          <datepicker-lite
            class="datepicker"
            :value-attr="sdate"
            @value-changed="schangeEvent"
            :yearMinus="1911"
            :to="edateLimit"
            :locale="locale"
          />
        </div>
        <!-- </div> -->
        <div class="col-5 mb-3">
          <div class="form-floating">
            <datepicker-lite
              class="form-control"
              :value-attr="edate"
              :yearMinus="1911"
              :locale="locale"
              :from="sdateLimit"
              @value-changed="echangeEvent"
            />
            <label for="floatingInputGrid">本年度期間_訖</label>
          </div>
        </div>
        <div class="col py-3">
          <button
            class="btn btn-primary rounded-circle p-0"
            style="
              width: 20px;
              height: 20px;
              font-size: 14px;
              font-weight: bold;
            "
          >
            ?
            <!-- <span class="tips">aaaa</span> -->
            <tips
              msg="指當年度之研究期程，若為單一非延續性計畫，則全程期間=本期期間，全程經費=本期經費"
            />
          </button>
        </div>
        <div class="col-5 mb-3">
          <div class="form-floating">
            <input
              type="date"
              class="form-control"
              id="floatingInputGrid"
              placeholder="name@example.com"
              value=""
            />
            <label for="floatingInputGrid">全程期間_起</label>
          </div>
        </div>
        <div class="col-5 mb-3">
          <div class="form-floating">
            <input
              type="date"
              class="form-control"
              id="floatingInputGrid"
              placeholder="name@example.com"
              value=""
            />
            <label for="floatingInputGrid">全程期間_訖</label>
          </div>
        </div>
        <div class="col py-3">
          <button
            class="btn btn-primary rounded-circle p-0"
            style="
              width: 20px;
              height: 20px;
              font-size: 14px;
              font-weight: bold;
            "
          >
            ?
            <!-- <span class="tips">aaaa</span> -->
            <tips
              msg="若為多年期計畫(如10301-10612三年期)，請將概估期程填入全程期間，若為單一(年度)計畫則全程期間=本期期間"
            />
          </button>
        </div>
        <div class="row col-12 mb-3">
          <h5 class="text-secondary border-bottom border-3 border-secondary">
            計畫主持人
          </h5>
        </div>
        <div class="col-6 py-3">
          <span class="form-floating">
            <input
              required
              type="text"
              class="form-control"
              placeholder="計畫主持人_姓名"
              aria-label="計畫主持人_姓名"
              value=""
            />
            <label for="floatingSelect">計畫主持人_姓名</label>
          </span>
        </div>
        <div class="col-6 py-3">
          <span class="form-floating">
            <input
              required
              type="text"
              class="form-control"
              placeholder="計畫主持人_職稱"
              aria-label="計畫主持人_職稱"
              value=""
            />
            <label for="floatingSelect">計畫主持人_職稱</label>
          </span>
        </div>
        <div class="col-6 py-3">
          <span class="form-floating">
            <input
              required
              type="text"
              class="form-control"
              placeholder="計畫主持人_電話"
              aria-label="計畫主持人_電話"
              value=""
            />
            <label for="floatingSelect">計畫主持人_電話</label>
          </span>
        </div>
        <div class="col-6 py-3">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="計畫主持人_傳真"
              aria-label="計畫主持人_傳真"
              value=""
            />
            <label for="floatingSelect">計畫主持人_傳真</label>
          </span>
        </div>
        <div class="col-6 py-3">
          <span class="form-floating">
            <input
              required
              type="text"
              class="form-control"
              placeholder="計畫主持人_參與人月"
              aria-label="計畫主持人_參與人月"
              value=""
            />
            <label for="floatingSelect">計畫主持人_參與人月</label>
          </span>
        </div>
        <div class="col-6 py-3">
          <span class="form-floating">
            <input
              required
              type="text"
              class="form-control"
              placeholder="計畫主持人_ GRB用戶帳號"
              aria-label="計畫主持人_ GRB用戶帳號"
              value=""
            />
            <label for="floatingSelect">計畫主持人_ GRB用戶帳號</label>
          </span>
        </div>
        <div class="col-6 py-3">
          <span class="form-floating">
            <input
              required
              type="text"
              class="form-control"
              placeholder="計畫主持人_電子郵件"
              aria-label="計畫主持人_電子郵件"
              value=""
            />
            <label for="floatingSelect">計畫主持人_電子郵件</label>
          </span>
        </div>
        <div class="row col-12 mb-3">
          <h5 class="text-secondary border-bottom border-3 border-secondary">
            計畫聯絡人
          </h5>
        </div>
        <div class="col-6 py-3">
          <span class="form-floating">
            <input
              required
              type="text"
              class="form-control"
              placeholder="計畫連絡人_ 姓名"
              aria-label="計畫連絡人_ 姓名"
              value=""
            />
            <label for="floatingSelect">計畫連絡人_ 姓名</label>
          </span>
        </div>
        <div class="col-6 py-3">
          <span class="form-floating">
            <input
              required
              type="text"
              class="form-control"
              placeholder="計畫連絡人_ 職稱"
              aria-label="計畫連絡人_ 職稱"
              value=""
            />
            <label for="floatingSelect">計畫連絡人_ 職稱</label>
          </span>
        </div>
        <div class="col-6 py-3">
          <span class="form-floating">
            <input
              required
              type="text"
              class="form-control"
              placeholder="計畫連絡人_ 電話"
              aria-label="計畫連絡人_ 電話"
              value=""
            />
            <label for="floatingSelect">計畫連絡人_ 電話</label>
          </span>
        </div>
        <div class="col-6 py-3">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="計畫連絡人_ 傳真"
              aria-label="計畫連絡人_ 傳真"
              value=""
            />
            <label for="floatingSelect">計畫連絡人_ 傳真</label>
          </span>
        </div>
        <div class="col-6 py-3">
          <span class="form-floating">
            <input
              required
              type="text"
              class="form-control"
              placeholder="計畫連絡人_ 服務機關"
              aria-label="計畫連絡人_ 服務機關"
              value=""
            />
            <label for="floatingSelect">計畫連絡人_ 服務機關</label>
          </span>
        </div>
        <div class="col-6 py-3">
          <span class="form-floating">
            <input
              required
              type="text"
              class="form-control"
              placeholder="計畫連絡人_ 電子郵件"
              aria-label="計畫連絡人_ 電子郵件"
              value=""
            />
            <label for="floatingSelect">計畫連絡人_ 電子郵件</label>
          </span>
        </div>
        <div class="col-6 py-3">
          <span class="form-floating">
            <input
              required
              type="text"
              class="form-control"
              placeholder="計畫連絡人_ 地址"
              aria-label="計畫連絡人_ 地址"
              value=""
            />
            <label for="floatingSelect">計畫連絡人_ 地址</label>
          </span>
        </div>
        <div class="col-6 py-3">
          <span class="form-floating">
            <!-- <input type="text" /> -->

            <select
              class="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option>計畫主持人</option>

              <option value="1">One</option>

              <option value="2">Two</option>

              <option value="3">Three</option>
            </select>
            <!-- <label for="floatingSelect"></label> -->
          </span>
        </div>
        <div class="row col-12 mb-3">
          <h5 class="text-secondary border-bottom border-3 border-secondary">
            系統通知信聯絡人
            <span>
              <button type="button" class="btn btn-primary" value="">
                <span><i class="fas fa-plus"></i></span>
                <tips msg="新增" />
              </button>
            </span>
          </h5>
        </div>
        <div class="col py-3">
          <button type="button" class="btn btn-danger" value="">
            <span><i class="fas fa-trash-alt"></i></span>
          </button>
        </div>
        <div class="col-3 py-3">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="系統通知信連絡人_姓名"
              aria-label="系統通知信連絡人_姓名"
              value=""
            />
            <label for="floatingSelect">系統通知信連絡人_姓名</label>
          </span>
        </div>
        <div class="col-3 py-3">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="系統通知信連絡人_電話"
              aria-label="系統通知信連絡人_電話"
              value=""
            />
            <label for="floatingSelect">系統通知信連絡人_電話</label>
          </span>
        </div>
        <div class="col-5 py-3">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="系統通知信連絡人_電子郵件"
              aria-label="系統通知信連絡人_電子郵件"
              value=""
            />
            <label for="floatingSelect">系統通知信連絡人_電子郵件</label>
          </span>
        </div>
        <div class="col-6 py-3">
          <span class="form-floating">
            <select
              class="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option></option>

              <option value="1">One</option>

              <option value="2">Two</option>

              <option value="3">Three</option>
            </select>
            <label for="floatingSelect">狀態</label>
          </span>
        </div>
      </div>
    </vee-form>
    <div class="row">
      <button class="btn" type="button" @click="gotoback">
        <i class="fa-solid fa-file-signature"></i>存檔
      </button>
      <button class="btn" type="button" @click="gotoback">
        <i class="fa-solid fa-file-signature"></i>匯出pdf
      </button>
      <button class="btn" type="button" @click="gotoback">
        <i class="fa-solid fa-file-signature"></i>返回清單
      </button>
    </div>
  </div>
  <!--  -->
  <div
    class="modal fade"
    id="infoSysModal"
    tabindex="-1"
    aria-labelledby="infoSysModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="infoSysModalLabel">系統資訊</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <button
              type="button"
              class="btn btn-primary"
              value=""
              style="width: 40px"
            >
              <span><i class="fas fa-plus"></i></span>
              <tips msg="新增" /></button
            >&nbsp;
            <button
              type="button"
              class="btn btn-warning"
              value=""
              style="width: 40px"
            >
              <span><i class="fa-solid fa-pen"></i></span>
              <tips msg="修改" />
            </button>
          </div>
          <div class="row">
            <div class="col-4 py-3">
              <span class="form-floating">
                <input
                  required
                  type="text"
                  class="form-control"
                  placeholder="系統名稱"
                  aria-label="系統名稱"
                  value=""
                />
                <label for="floatingSelect">系統名稱</label>
              </span>
            </div>
            <div class="col-8 py-3">
              <span class="form-floating">
                <input
                  required
                  type="text"
                  class="form-control"
                  placeholder="網址"
                  aria-label="網址"
                  value=""
                />
                <label for="floatingSelect">網址</label>
              </span>
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
import { ref } from "vue";
import { storeToRefs } from "pinia";
import tips from "../../../components/tips.vue";
import DatepickerLite from "vue3-datepicker-lite";

import { usePlanDataStore } from "@/stores/planDataStore";

const planDataStore = usePlanDataStore();
const { queryForPlanNameList } = planDataStore;
const { planDataDetail, planNameMenu } = storeToRefs(planDataStore);
queryForPlanNameList();
const sdate = ref("2022/10/25");
const sdateLimit = ref("");
const edate = ref("2022/10/20");
const edateLimit = ref("2022/10/20");
const schangeEvent = (value) => {
  console.log(value);
  sdateLimit.value =
    Number(value.substring(0, value.indexOf("/"))) +
    1911 +
    value.substring(value.indexOf("/"));
  sdate.value = value;
  // sdate.value = formatDate(value);
  console.log(sdate);
};
const echangeEvent = (value) => {
  console.log(value);
  edateLimit.value =
    Number(value.substring(0, value.indexOf("/"))) +
    1911 +
    value.substring(value.indexOf("/"));
  edate.value = value;
  // edate.value = formatDate(value);
  console.log(edate);
};
// const formatDate = (date) => {
//   if (date == null) return;
//   return (
//     Number(date.substring(0, date.indexOf("/"))) +
//     1911 +
//     date.substring(date.indexOf("/"))
//   );
// };
const locale = {
  format: "YYYY/MM/DD",
  weekday: ["日", "一", "二", "三", "四", "五", "六"],
  months: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  startsWeeks: 0,
  todayBtn: "今日",
  clearBtn: "清除",
  closeBtn: "關閉",
};
</script>
<style>
span.tips {
  width: 200px;
}
.datepicker input {
  border: 2px solid red;
  width: 500px;
  height: 50px;
}
</style>
