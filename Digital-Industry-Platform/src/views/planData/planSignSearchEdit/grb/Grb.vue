<template>
  <ul class="nav nav-tabs" id="myTab" role="tablist">
    <!-- tablist -->

    <li class="nav-item" role="presentation">
      <router-link :to="{ name: 'GrbPlan' }" class="nav-link btn" role="tab">
        基本資料
      </router-link>
    </li>

    <li class="nav-item" role="presentation">
      <router-link :to="{ name: 'GrbAmount' }" class="nav-link btn" role="tab">
        經費預算
      </router-link>
    </li>

    <li class="nav-item" role="presentation">
      <router-link
        :to="{ name: 'GrbKeywords' }"
        class="nav-link btn"
        role="tab"
      >
        領域及關鍵詞
      </router-link>
    </li>

    <li class="nav-item" role="presentation">
      <router-link
        :to="{ name: 'GrbHumanResource' }"
        class="nav-link btn"
        role="tab"
      >
        人力需求
      </router-link>
    </li>

    <li class="nav-item" role="presentation">
      <router-link :to="{ name: 'GrbSummary' }" class="nav-link btn" role="tab">
        中英文摘要
      </router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>

<script setup></script>

<style></style>
