<template>
  <ul class="nav nav-tabs" id="myTab" role="tablist">
    <!-- tablist -->

    <li class="nav-item" role="presentation">
      <router-link
        :to="{ name: 'PlanPredict' }"
        class="nav-link btn"
        role="tab"
      >
        預期成果
      </router-link>
    </li>

    <li class="nav-item" role="presentation">
      <router-link
        :to="{ name: 'PlanSchedule' }"
        class="nav-link btn"
        role="tab"
      >
        預定進度
      </router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>

<script setup></script>

<style></style>
