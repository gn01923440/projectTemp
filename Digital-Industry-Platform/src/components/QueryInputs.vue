<template>
  <form class="form-inline" @submit.prevent="formEmit">
    <div class="row g-2">
      <div class="col-md" v-if="year?.show">
        <div class="form-floating">
          <slot name="query-btn"></slot>
          <input
            type="text"
            class="form-control"
            id="floatingInputGrid"
            placeholder="name@example.com"
            value=""
            name="year"
          />
          <label for="floatingInputGrid">年度</label>
        </div>
      </div>
      <div class="col-md" v-if="syear?.show">
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="floatingInputGrid"
            placeholder="name@example.com"
            value=""
            name="year"
          />
          <label for="floatingInputGrid">年度起</label>
        </div>
      </div>
      <div class="col-md" v-if="eyear?.show">
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="floatingInputGrid"
            placeholder="name@example.com"
            value=""
            name="year"
          />
          <label for="floatingInputGrid">年度迄</label>
        </div>
      </div>
      <div class="col-md" v-if="unit?.show">
        <div class="form-floating">
          <select
            class="form-select"
            id="floatingSelectGrid"
            aria-label="Floating label select example"
            name="select"
            multiple
          >
            <option></option>
            <option value="1">One</option>
          </select>
          <label for="floatingSelectGrid">組室</label>
        </div>
      </div>
      <div class="col-md" v-if="planNo?.show">
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="floatingInputGrid"
            placeholder="name@example.com"
            value=""
          />
          <label for="floatingInputGrid">契約編號</label>
        </div>
      </div>
      <div class="col-md" v-if="fileName?.show">
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="floatingInputGrid"
            placeholder="name@example.com"
            value=""
          />
          <label for="floatingInputGrid">檔案名稱</label>
        </div>
      </div>
      <div class="col-md" v-if="planName?.show">
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="floatingInputGrid"
            placeholder="name@example.com"
            value=""
          />
          <label for="floatingInputGrid">計畫名稱</label>
        </div>
      </div>
      <div class="col-md">
        <button v-if="true" type="submit" class="btn" value="">
          <span><i class="fas fa-search"></i></span>查詢
        </button>
        <button v-if="true" type="button" class="btn" value="">
          <span><i class="fas fa-stamp"></i></span>清空
        </button>
        <button v-if="false" type="button" class="btn" value="">
          <span><i class="fas fa-search"></i></span>新增切割經費
        </button>
        <button
          v-if="false"
          type="button"
          class="btn"
          value=""
          data-bs-toggle="modal"
          data-bs-target="#coverModal"
        >
          <span><i class="fas fa-stamp"></i></span>勾選轉入標案
        </button>
        <button
          v-if="false"
          type="button"
          class="btn"
          value=""
          data-bs-toggle="modal"
          data-bs-target="#excelModal"
        >
          <span><i class="far fa-file-excel"></i></span>匯入Excel
        </button>
        <button v-if="false" type="button" class="btn" value="">
          <span><i class="far fa-file-pdf"></i></span>匯出Excel
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { toRef } from "vue";

// const props = defineProps({
//   queryParams: {
//     year: Object,
//     syear: Object,
//     eyear: Object,
//     unit: Object,
//     planName: Object,
//     planNo: Object,
//     fileName: Object,
//   },
// });
// console.log(props);
// const year = props.queryParams?.year;
// const syear = props.queryParams?.syear;
// const eyear = props.queryParams?.eyear;
// const unit = props.queryParams?.unit;
// const planName = props.queryParams?.planName;
// const planNo = props.queryParams?.planNo;
// const fileName = props.queryParams?.fileName;

const formEmit = (e) => {
  console.log(e.target);
};
</script>

<style></style>
