<template>
  <div class="row">
    <div class="col-6">
      <div class="form-floating">
        <select
          class="form-select"
          id="floatingSelectGrid"
          aria-label="Floating label select example"
          @change="handleChange($event)"
          v-model="selectValue"
        >
          <option></option>
          <option value="1">第一期(至4月截止)</option>
          <option value="2">第二期(至8月截止)</option>
        </select>
        <label for="floatingSelectGrid">期別</label>
      </div>
    </div>

    <button class="col-2 btn" @click="addPeriod">期別</button>
    <button class="col-2 btn">送審</button>
  </div>

  <div class="row">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <router-link
          class="nav-link btn"
          role="tab"
          :to="{ name: 'ExecSchedule' }"
          >工作進度</router-link
        >
      </li>
      <li v-if="custom_add_period" class="nav-item" role="presentation">
        <router-link
          class="nav-link btn"
          role="tab"
          :to="{ name: 'SubContractSchedule' }"
          >分包/協辦進度</router-link
        >
      </li>
      <li v-if="custom_add_period" class="nav-item" role="presentation">
        <router-link
          class="nav-link btn"
          role="tab"
          :to="{ name: 'HumanResourceEdit' }"
          >人力需求異動</router-link
        >
      </li>
      <li v-if="custom_add_period" class="nav-item" role="presentation">
        <router-link
          class="nav-link btn"
          role="tab"
          :to="{ name: 'HumanResourceDist' }"
          >派遣人力</router-link
        >
      </li>
      <li v-if="custom_add_period" class="nav-item" role="presentation">
        <router-link
          class="nav-link btn"
          role="tab"
          :to="{ name: 'HumanResourceEducation' }"
          >人才培訓</router-link
        >
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from "vue";
const custom_add_period = ref(false);
const selectValue = ref("");

const addPeriod = () => {
  custom_add_period.value = false;
  selectValue.value = "";
};
const handleChange = ($event) => {
  custom_add_period.value = ["1", "2"].includes($event.target.value)
    ? true
    : false;
};
</script>

<style></style>
