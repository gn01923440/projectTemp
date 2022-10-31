<template>
  <div class="row">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <router-link
          class="col nav-link btn"
          role="tab"
          :to="{ name: 'FirstClass' }"
          >一級科目</router-link
        >
      </li>
      <li class="nav-item" role="presentation">
        <router-link
          class="col nav-link btn"
          role="tab"
          :to="{ name: 'OtherClass_234' }"
          >二、三、四級科目</router-link
        >
      </li>
    </ul>
  </div>
  <router-view></router-view>
</template>

<script setup></script>

<style></style>
