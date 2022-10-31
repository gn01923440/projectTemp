<template>
  <div class="row px-5 py-3">

    <div class="row">
      <h2
        class="text-title border-start border-4 border-warning rounded-start px-3 py-3"
      >
      標案計畫清單明細
      </h2>
    </div>
    <div class="row">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <router-link
            class="nav-link btn"
            role="tab"
            :to="{ name: 'TenderPlan' }"
            >標案計畫</router-link
          >
        </li>
        <li class="nav-item" role="presentation">
          <router-link
            class="nav-link btn"
            role="tab"
            :to="{ name: 'ContractNo' }"
            >契約編號</router-link
          >
        </li>
        <li class="nav-item" role="presentation">
          <router-link class="nav-link btn" role="tab" :to="{ name: 'Auditor' }"
            >審查人員</router-link
          >
        </li>
        <li class="nav-item" role="presentation">
          <router-link
            class="nav-link btn"
            role="tab"
            :to="{ name: 'BidInformation' }"
            >決標資訊</router-link
          >
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>

  <!-- <div class="row">
    <button class="btn" type="button" @click="gotoback"><i class="fa-solid fa-file-signature"></i>儲存</button>
    <button class="btn" type="button" @click="gotoback"><i class="fa-solid fa-file-signature"></i>重新填寫</button>
    <button class="btn" type="button" @click="gotoback"><i class="fas fa-undo-alt"></i>返回</button>
  </div> -->
</template>

<script setup></script>

<style scoped></style>
