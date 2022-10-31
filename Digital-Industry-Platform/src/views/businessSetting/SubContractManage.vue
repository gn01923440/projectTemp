<template>
  <div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="類型 "
          aria-label="類型 "
          value=""
        />
        <label for="floatingSelect">單位名稱 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="年度 "
          aria-label="年度 "
          value=""
        />
        <label for="floatingSelect">統一編號</label>
      </span>
    </div>
  </div>
  <div class="row">
    <button class="btn" type="button" @click="gotoback">
      <i class="fa-solid fa-file-signature"></i>查詢
    </button>
    <button class="btn" type="button" @click="gotoback">
      <i class="fa-solid fa-file-signature"></i>清空
    </button>
    <n-button @click="showModal = true"> 新增 </n-button>
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
  <n-modal v-model:show="showModal">
    <n-card
      title="新增委辦單位資料"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
      style="width: 50%; position: fixed; top: 10%; left: 25%"
    >
      <template #header-extra> header-extra </template>
      <div class="row">
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="單位名稱 "
              aria-label="單位名稱 "
              value=""
            />
            <label for="floatingSelect">單位名稱 </label>
          </span>
        </div>
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="單位簡稱 "
              aria-label="單位簡稱 "
              value=""
            />
            <label for="floatingSelect">單位簡稱 </label>
          </span>
        </div>
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="單位代號 "
              aria-label="單位代號 "
              value=""
            />
            <label for="floatingSelect">單位代號 </label>
          </span>
        </div>
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="統一編號 "
              aria-label="統一編號 "
              value=""
            />
            <label for="floatingSelect">統一編號 </label>
          </span>
        </div>
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="負責人 "
              aria-label="負責人 "
              value=""
            />
            <label for="floatingSelect">負責人 </label>
          </span>
        </div>
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="E-Mail "
              aria-label="E-Mail "
              value=""
            />
            <label for="floatingSelect">E-Mail </label>
          </span>
        </div>
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="地址 "
              aria-label="地址 "
              value=""
            />
            <label for="floatingSelect">地址 </label>
          </span>
        </div>
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="單位電話 "
              aria-label="單位電話 "
              value=""
            />
            <label for="floatingSelect">單位電話 </label>
          </span>
        </div>
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="傳真 "
              aria-label="傳真 "
              value=""
            />
            <label for="floatingSelect">傳真 </label>
          </span>
        </div>
        <div class="col-6">
          <span class="form-floating">
            <textarea name="" id="" cols="20" rows="3"></textarea>
            <label for="floatingSelect">備註 </label>
          </span>
        </div>
      </div>
      <template #footer>
        <div class="row">
          <button class="btn" type="button" @click="gotoback">
            <i class="fa-solid fa-file-signature"></i>存檔 
          </button>
          <button class="btn" type="button" @click="gotoback">
            <i class="fa-solid fa-file-signature"></i>返回 
          </button>
        </div>
      </template>
    </n-card>
  </n-modal>
</template>

<script setup>
import { ref } from "vue";
import DataTable from "datatables.net-vue3";
import DataTableBs5 from "datatables.net-bs5";
import Select from "datatables.net-select";
import { language } from "@/assets/tableLanguage.js";
DataTable.use(Select);
DataTable.use(DataTableBs5);
let dt;

const data = ref([]);

const table = ref();

const options = {
  dom: "tip",

  select: true,

  language: language,

  pageLength: 25,
};
const columns = [
  {
    data: "",
    title: "單位代碼",
    width: "",
  },
  {
    data: "",
    title: "單位名稱",
    width: "",
  },
  {
    data: "",
    title: "統一編號",
    width: "",
  },
  {
    data: "",
    title: "負責人",
    width: "",
  },
  {
    data: "",
    title: "單位電話",
    width: "",
  },
  {
    data: "",
    title: "信箱",
    width: "",
  },
  {
    data: "",
    title: "作業",
    width: "",
  },
];

const showModal = ref(false);
</script>

<style></style>
