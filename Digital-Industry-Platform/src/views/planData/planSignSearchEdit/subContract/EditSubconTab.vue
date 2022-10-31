<template>
  <router-link class="btn btn-outline-info me-2" :to="{ name: 'EditSubcon' }"
    >分包/協辦計畫</router-link
  >
  <router-link class="btn btn-outline-info me-2" :to="{ name: 'LaborFee' }"
    >委託勞務費</router-link
  >
  <router-view></router-view>
</template>

<script setup></script>

<style></style>
