<template>
  <ul class="nav nav-tabs" id="myTab" role="tablist">
    <!-- tablist -->

    <li class="nav-item" role="presentation">
      <router-link :to="{ name: 'Evaluation' }" class="nav-link btn" role="tab">
        延續性計畫評鑑
      </router-link>
    </li>

    <li class="nav-item" role="presentation">
      <router-link
        :to="{ name: 'UploadSelfEvaluation' }"
        class="nav-link btn"
        role="tab"
      >
        上傳延續性計畫評鑑自評表
      </router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>

<script setup></script>

<style></style>
