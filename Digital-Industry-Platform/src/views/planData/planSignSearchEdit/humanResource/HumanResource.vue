<template>
  <ul class="nav nav-tabs" id="myTab" role="tablist">
    <!-- tablist -->

    <li class="nav-item" role="presentation">
      <router-link
        :to="{ name: 'HrManagement' }"
        class="nav-link btn"
        role="tab"
      >
        人力需求
      </router-link>
    </li>

    <li class="nav-item" role="presentation">
      <router-link :to="{ name: 'HrAssign' }" class="nav-link btn" role="tab">
        派遣人力
      </router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>

<script setup></script>

<style></style>
