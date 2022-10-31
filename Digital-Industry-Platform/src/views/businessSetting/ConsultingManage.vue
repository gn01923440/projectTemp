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
        <label for="floatingSelect">廠商名稱 </label>
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
      <n-scrollbar style="max-height: 200px">
        <div class="row">
          <div class="col-6">
            <span class="form-floating">
              <input
                type="text"
                class="form-control"
                placeholder="廠商名稱 "
                aria-label="廠商名稱 "
                value=""
              />
              <label for="floatingSelect">廠商名稱 </label>
            </span>
          </div>
          <div class="col-6">
            <span class="form-floating">
              <input
                type="text"
                class="form-control"
                placeholder="廠商簡稱 "
                aria-label="廠商簡稱 "
                value=""
              />
              <label for="floatingSelect">廠商簡稱 </label>
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
            <n-radio-group v-model:value="value" name="radiogroup">
              <n-space>
                <n-radio
                  v-for="song in songs"
                  :key="song.value"
                  :value="song.value"
                  :label="song.label"
                />
              </n-space>
            </n-radio-group>
          </div>
          <div class="col-6">
            <span class="form-floating">
              <input
                type="text"
                class="form-control"
                placeholder="廠商地址 "
                aria-label="廠商地址 "
                value=""
              />
              <label for="floatingSelect">廠商地址 </label>
            </span>
          </div>
          <div class="col-6">
            <span class="form-floating">
              <input
                type="text"
                class="form-control"
                placeholder="廠商連絡人 "
                aria-label="廠商連絡人 "
                value=""
              />
              <label for="floatingSelect">廠商連絡人 </label>
            </span>
          </div>
          <div class="col-6">
            <span class="form-floating">
              <input
                type="text"
                class="form-control"
                placeholder="連絡人E-Mail "
                aria-label="連絡人E-Mail "
                value=""
              />
              <label for="floatingSelect">連絡人E-Mail </label>
            </span>
          </div>
          <div class="col-6">
            <span class="form-floating">
              <input
                type="text"
                class="form-control"
                placeholder="連絡人電話 "
                aria-label="連絡人電話 "
                value=""
              />
              <label for="floatingSelect">連絡人電話 </label>
            </span>
          </div>
          <div class="col-6">
            <span class="form-floating">
              <input
                type="text"
                class="form-control"
                placeholder="連絡人傳真 "
                aria-label="連絡人傳真 "
                value=""
              />
              <label for="floatingSelect">連絡人傳真 </label>
            </span>
          </div>
          <div class="col-6">
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
              <label for="floatingSelect">地區別 </label>
            </span>
          </div>
          <div class="col-6">
            <span class="form-floating">
              <input
                type="text"
                class="form-control"
                placeholder="資本額 "
                aria-label="資本額 "
                value=""
              />
              <label for="floatingSelect">資本額 </label>
            </span>
          </div>
          <div class="col-6">
            <span class="form-floating">
              <input
                type="text"
                class="form-control"
                placeholder="員工人數(男) "
                aria-label="員工人數(男) "
                value=""
              />
              <label for="floatingSelect">員工人數(男) </label>
            </span>
          </div>
          <div class="col-6">
            <span class="form-floating">
              <input
                type="text"
                class="form-control"
                placeholder="員工人數(女) "
                aria-label="員工人數(女) "
                value=""
              />
              <label for="floatingSelect">員工人數(女) </label>
            </span>
          </div>
          <div class="col-6">
            <n-tree-select
              :options="selectOptions"
              default-value="01農、牧業"
              @update:value="handleUpdateValue"
            />
          </div>
        </div>
      </n-scrollbar>
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
</template>

<script setup>
import { ref } from "vue";
import DataTable from "datatables.net-vue3";
import DataTableBs5 from "datatables.net-bs5";
import Select from "datatables.net-select";
import { language } from "@/assets/tableLanguage.js";
DataTable.use(Select);
DataTable.use(Select);
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
    title: "廠商名稱",
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
    title: "連絡人",
    width: "",
  },
  {
    data: "",
    title: "連絡人電話",
    width: "",
  },
  {
    data: "",
    title: "連絡人信箱",
    width: "",
  },
  {
    data: "",
    title: "作業",
    width: "",
  },
];
const showModal = ref(false);
const handleUpdateValue = (value, option) => {
  console.log(value, option);
};
const selectOptions = ref([
  {
    label: "A 農、林、漁、牧業",
    key: "A",
    children: [
      {
        label: "01農、牧業",
        key: "01農、牧業",
      },
      {
        label: "02林業",
        key: "02林業",
        disabled: true,
      },
      {
        label: "03漁業",
        key: "03漁業",
      },
    ],
  },
  {
    label: "B礦業及土石採取業",
    key: "B",
    children: [
      {
        label: "05石油及天然氣礦業",
        key: "05",
      },
      {
        label: "06砂、石及黏土採取業",
        key: "06",
      },
      {
        label: "07其化礦業及土石採取業",
        key: "07",
      },
    ],
  },
]);
const value = ref(null);
const songs = ref(
  [
    {
      value: "female",
      label: "女",
    },
    {
      value: "male",
      label: "男",
    },
  ].map((s) => {
    s.value = s.value.toLowerCase();
    return s;
  })
);
</script>

<style></style>
