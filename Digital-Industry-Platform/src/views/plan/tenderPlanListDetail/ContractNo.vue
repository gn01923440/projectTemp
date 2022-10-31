<template>
  <div class="row px-5 py-3">
    <div class="row">
      <div class="row col-12 mb-3">
        <div class="col-6">
          <div class="form-floating">
            <select
              class="form-select"
              id="floatingSelectGrid"
              aria-label="Floating label select example"
            >
              <option></option>
              <option value="1">One</option>
            </select>
            <label for="floatingSelectGrid"
              ><span class="text-danger">*</span>預算來源別代號</label
            >
          </div>
        </div>
        <div class="col-6">
          <div class="form-floating">
            <select
              class="form-select"
              id="floatingSelectGrid"
              aria-label="Floating label select example"
            >
              <option></option>
              <option value="1">One</option>
            </select>
            <label for="floatingSelectGrid"
              ><span class="text-danger">*</span>分支計畫代號</label
            >
          </div>
        </div>
        
      </div>
      <div class="row col-12 mb-3">

        <div class="col-6">
          <div class="form-floating">
            <select
              class="form-select"
              id="floatingSelectGrid"
              aria-label="Floating label select example"
            >
              <option></option>
              <option value="1">One</option>
            </select>
            <label for="floatingSelectGrid"
              ><span class="text-danger">*</span>用途別科目代號</label
            >
          </div>
        </div>
        <div class="col-6">
          <div class="form-floating">
            <select
              class="form-select"
              id="floatingSelectGrid"
              aria-label="Floating label select example"
            >
              <option></option>
              <option value="1">One</option>
            </select>
            <label for="floatingSelectGrid"
              ><span class="text-danger">*</span>組室</label
            >
          </div>
        </div>
      </div>
      <div class="row col-12 mb-3">
        <div class="col-6">
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInputGrid"
              placeholder="name@example.com"
              value=""
            />
            <label for="floatingInputGrid">流水號</label>
          </div>
        </div>
        <div class="col-6">
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInputGrid"
              placeholder="name@example.com"
              value=""
            />
            <label for="floatingInputGrid">契約編號</label>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <button class="btn  btn-warning text-white" type="button" @click="gotoback" style="width:6rem;">
        <i class="far fa-vote-yea"></i>取號
      </button>&nbsp;
      <button class="btn btn-success" type="button" @click="gotoback" style="width:8rem;">
        <i class="fa-solid fa-pen-to-square"></i>重新填寫
      </button>&nbsp;
      <button class="btn  backing-out" type="button" @click="gotoback" style="width:6rem;">
        <i class="fas fa-undo-alt"></i>返回
      </button>
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
