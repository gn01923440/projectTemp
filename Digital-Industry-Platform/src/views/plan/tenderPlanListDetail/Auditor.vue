<template>
  <div class="row px-5 py-3">
    <div class="row col-12 mb-3 pt-3">
      <h5 class="text-secondary border-bottom border-3 border-secondary">
        承辦人階段 
      </h5>
    </div>
    <div class="row col-5 mb-3">
      <select class="form-select" aria-label="Default select example">
        <option selected>計畫管理服務人員</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="row col-5 mb-3 offset-1">
      <select class="form-select" aria-label="Default select example">
        <option selected>業務組承辦人</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="row col-5 mb-3">
      <select class="form-select" aria-label="Default select example">
        <option selected>業務組科長</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="row col-5 mb-3 offset-1">
      <select class="form-select" aria-label="Default select example">
        <option selected>資訊室承辦人</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="row col-5 mb-3">
      <select class="form-select" aria-label="Default select example">
        <option selected>資訊室技正或主任</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="row col-5 mb-3 offset-1">
      <select class="form-select" aria-label="Default select example">
        <option selected>主計室承辦人</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="row col-5 mb-3">
      <select class="form-select" aria-label="Default select example">
        <option selected>副組長</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="row col-5 mb-3 offset-1">
      <select class="form-select" aria-label="Default select example">
        <option selected>組長</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const gotoback = () => {
  router.push({ name: "TenderPlanList" });
};
</script>

<style></style>
