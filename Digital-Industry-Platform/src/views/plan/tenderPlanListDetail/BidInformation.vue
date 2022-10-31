<template>
  <div class="row px-5 py-3">
    <div class="row col-12 mb-3 pt-3">
      <div class="col-6">
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            list="options1"
            id="主得標廠商"
            placeholder="name@example.com"
            value=""
          />
          <datalist id="options1">
            <option>馬來貘</option>
            <option>山貘</option>
            <option>中美貘</option>
            <option>南美貘</option>
            <option>卡波馬尼貘</option>
          </datalist>
          <label for="主得標廠商">主得標廠商</label>
        </div>
      </div>
      <div class="col-6">
        <div class="form-floating">
          <input
            type="text"
            id="副得標廠商"
            list="options0"
            class="form-control"
            placeholder="name@example.com"
          />
          <datalist id="options0">
            <option>馬來貘</option>
            <option>山貘</option>
            <option>中美貘</option>
            <option>南美貘</option>
            <option>卡波馬尼貘</option>
          </datalist>
          <label for="副得標廠商">副得標廠商</label>
        </div>
      </div>
    </div>
    <div class="row col-12 mb-3">
      <div class="col-6">
        <div class="form-floating">
          <input
            type="date"
            class="form-control"
            id="floatingInputGrid"
            placeholder="name@example.com"
            value=""
          />
          <label for="floatingInputGrid">決標日期</label>
        </div>
      </div>
      <div class="col-6">
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="floatingInputGrid"
            placeholder="name@example.com"
            value=""
          />
          <label for="floatingInputGrid">決標金額(元)</label>
        </div>
      </div>
    </div>
    <div class="row col-12 mb-3">
      <div class="col-6">
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="floatingInputGrid"
            placeholder="name@example.com"
            value=""
          />
          <label for="floatingInputGrid"
            ><span class="text-danger">*</span>帳號</label
          >
        </div>
      </div>
    </div>
  </div>
  <div class="row justify-content-center">
      <button class="btn  btn-warning text-white" type="button" @click="gotoback" style="width:6rem;">
        <i class="fa-solid fa-file-signature"></i>儲存
      </button>&nbsp;
      <button class="btn  btn-info text-white" type="button" @click="gotoback" style="width:8rem;">
        <i class="fas fa-paperclip"></i>帶入計畫
      </button>&nbsp;
      <button class="btn btn-success" type="button" @click="gotoback" style="width:8rem;">
        <i class="fa-solid fa-pen-to-square"></i>重新填寫
      </button>&nbsp;
      <button class="btn  backing-out" type="button" @click="gotoback" style="width:6rem;">
        <i class="fas fa-undo-alt"></i>返回
      </button>
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
