<template>
  <div class="row px-5 py-3">
    <div class="row">
      <div class="row col-12 mb-3">
        <input-col
          :clazz="'col-6'"
          :fieldName="'year'"
          :label="'年度'"
          v-model="tenderDetail.year"
          :isRequired="true"
        />
        <input-col
          :clazz="'col-6'"
          :fieldName="'projkey'"
          :label="'契約編號'"
          v-model="tenderDetail.projkey"
          :isRequired="true"
        />
      </div>
      <div class="row col-12 mb-3">
        <input-col
          :clazz="'col-6'"
          :fieldName="'tenderChName'"
          :label="'標案名稱'"
          v-model="tenderDetail.tenderChName"
          :isRequired="true"
        />
        <input-col
          :clazz="'col-6'"
          :fieldName="'tenderEnName'"
          :label="'標案英文名稱'"
          v-model="tenderDetail.tenderEnName"
        />
      </div>
      <div class="row col-12 mb-3">
        <div class="col-6">
          <div class="form-floating">
            <input type="text" class="form-control" id="aaa" value="" />
            <datalist id="aa">
              <option>馬來貘</option>
              <option>山貘</option>
              <option>中美貘</option>
              <option>南美貘</option>
              <option>卡波馬尼貘</option>
            </datalist>
            <label for="aaa">承辦人</label>
          </div>
        </div>
        <input-col
          :clazz="'col-6'"
          :fieldName="'tel'"
          :label="'承辦人電話'"
          v-model="tenderDetail.tel"
        />
      </div>
      <div class="row col-12 mb-3">
        <input-col
          :clazz="'col-6'"
          :fieldName="'plancostcuttingId'"
          :label="'選擇切割經費'"
          v-model="tenderDetail.plancostcuttingId"
        />
        <input-col
          :clazz="'col-6'"
          :fieldName="'planId'"
          :label="'主要綱要計畫名稱'"
          v-model="tenderDetail.planId"
          :isRequired="true"
        />
      </div>
      <div class="row col-12 mb-3">
        <input-col
          :clazz="'col-6'"
          :fieldName="'plansubId'"
          :label="'子綱要計畫名稱'"
          v-model="tenderDetail.plansubId"
          :isRequired="true"
        />
        <div class="col-4">
          <div class="form-floating">
            <vee-field
              class="form-control"
              id="floatingInputGrid"
              name="year"
              v-model="tenderDetail.year"
            />
            <label for="floatingInputGrid">前期標案計畫</label>
          </div>
          <ErrorMessage class="text-danger" name="year" />
        </div>
        <div class="col-2 my-1">
          <button type="button" class="btn btn-primary mb-2" value="">
            <span><i class="fas fa-search"></i></span></button
          >&nbsp;
          <button type="button" class="btn btn-secondary mb-2" value="">
            <span><i class="fas fa-stamp"></i></span>
          </button>
        </div>
      </div>
      <div class="row col-12 mb-3">
        <Valuation v-model="tenderDetail.valuationCode" />
      </div>
    </div>
    <div class="row justify-content-center">
      <button
        class="btn btn-warning text-white"
        type="button"
        @click="save"
        style="width: 6rem"
      >
        <i class="fa-solid fa-file-signature"></i>儲存</button
      >&nbsp;
      <button
        class="btn btn-success"
        type="button"
        @click="gotoback"
        style="width: 8rem"
      >
        <i class="fa-solid fa-pen-to-square"></i>重新填寫</button
      >&nbsp;
      <button
        class="btn backing-out"
        type="button"
        @click="gotoback"
        style="width: 6rem"
      >
        <i class="fas fa-undo-alt"></i>返回
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { h, reactive, ref, onMounted } from "vue";
import _ from "lodash";
import { storeToRefs } from "pinia";

import { useTenderStore } from "@/stores/tenderList";
import Valuation from "@/components/Valuation.vue";
import InputCol from "@/components/InputCol.vue";

const tenderStore = useTenderStore();
const { queryForTender, createTender, editTender } = tenderStore;
const { tenderDetail } = storeToRefs(tenderStore);
const router = useRouter();
const save = () => {
  console.log(tenderDetail);
};
const gotoback = () => {
  router.push({ name: "TenderPlanList" });
};
</script>

<style></style>
