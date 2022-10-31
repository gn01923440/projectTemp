<template>
  <div class="text-danger">*紅字部分表示資料有錯誤</div>
  <div class="text-danger">
    <span class="text-danger">審查人員尚未安排完成!請先通知系統管理者</span
    ><span
      ><button class="btn btn-danger" @click="showModal = true">
        審查日誌
      </button></span
    >
  </div>

  <ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <router-link
        :to="{ name: 'PlanBascAudit' }"
        class="nav-link btn"
        role="tab"
        >基本資料</router-link
      >
    </li>
    <li class="nav-item" role="presentation">
      <router-link
        :to="{ name: 'SubPlanAudit' }"
        class="nav-link btn"
        role="tab"
        >分項計畫表</router-link
      >
    </li>
    <li class="nav-item" role="presentation">
      <router-link :to="{ name: 'HRAudit' }" class="nav-link btn" role="tab"
        >人力需求表</router-link
      >
    </li>
    <li class="nav-item" role="presentation">
      <router-link
        :to="{ name: 'AbroadPlanAudit' }"
        class="nav-link btn"
        role="tab"
        >出國計畫表</router-link
      >
    </li>
    <li class="nav-item" role="presentation">
      <router-link
        :to="{ name: 'SubContractAudit' }"
        class="nav-link btn"
        role="tab"
        >分包計畫及分包單位明細</router-link
      >
    </li>
    <li class="nav-item" role="presentation">
      <router-link :to="{ name: 'BudgetAudit' }" class="nav-link btn" role="tab"
        >經費預算總表</router-link
      >
    </li>
  </ul>
  <router-view></router-view>
  <n-modal v-model:show="showModal">
    <n-card
      title="審查紀錄"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
      style="width: 50%; position: fixed; top: 10%; left: 25%"
    >
      <template #header-extra> </template>
      <n-data-table :columns="columns" :data="data" />
      <template #footer> </template>
    </n-card>
  </n-modal>
</template>

<script setup>
import { ref } from "vue";

const showModal = ref(false);
const columns = [
  {
    key: "auditor",
    title: "承辦人",
  },
  { key: "auditDate", title: "審查日期" },
  { key: "auditDescription", title: "說明" },
  { key: "auditAttach", title: "審查附件" },
];
const data = [
  {
    auditor: "主持人",
    auditDate: new Date().toDateString(),
    auditDescription: "送審",
  },
];
</script>

<style></style>
