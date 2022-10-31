<template>
  <ul class="nav nav-tabs" id="myTab" role="tablist">
    <!-- tablist -->

    <li class="nav-item" role="presentation">
      <router-link :to="{ name: 'Plan' }" class="nav-link btn" role="tab">
        計畫資料
      </router-link>
    </li>

    <li class="nav-item" role="presentation">
      <router-link :to="{ name: 'Amount' }" class="nav-link btn" role="tab">
        簽約金額
      </router-link>
    </li>

    <li class="nav-item" role="presentation">
      <router-link :to="{ name: 'Keywords' }" class="nav-link btn" role="tab">
        領域及關鍵詞
      </router-link>
    </li>

    <li class="nav-item" role="presentation">
      <router-link :to="{ name: 'Summary' }" class="nav-link btn" role="tab">
        中英文摘要
      </router-link>
    </li>

    <li class="nav-item" role="presentation">
      <router-link :to="{ name: 'DetailEdit' }" class="nav-link btn" role="tab">
        計畫變更明細表_修改
      </router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>

<script setup></script>

<style></style>
