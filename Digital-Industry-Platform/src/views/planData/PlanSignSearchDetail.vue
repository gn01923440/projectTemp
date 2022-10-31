<template>
  <h2>計畫簽約/變更/查詢作業-資訊</h2>

  <div>
    <ul class="nav py-3" id="myTab" role="tablist">
      <!-- tablist -->

      <li class="nav-item mx-1" role="presentation">
        <router-link
          :to="{ name: 'PlanBascDetail' }"
          class="btn btn-primary"
          role="tab"
        >
          基本資料
        </router-link>
      </li>

      <li class="nav-item mx-1" role="presentation">
        <router-link
          :to="{ name: 'SubPlanDetail' }"
          class="btn btn-primary"
          role="tab"
        >
          分項計畫表
        </router-link>
      </li>

      <li class="nav-item mx-1" role="presentation">
        <router-link
          :to="{ name: 'HumanResourceDetail' }"
          class="btn btn-primary"
          role="tab"
        >
          人力需求表
        </router-link>
      </li>

      <li class="nav-item mx-1" role="presentation">
        <router-link
          :to="{ name: 'AbroadPlanDetail' }"
          class="btn btn-primary"
          role="tab"
        >
          出國計畫表
        </router-link>
      </li>

      <li class="nav-item mx-1" role="presentation">
        <router-link
          :to="{ name: 'SubContractDetail' }"
          class="btn btn-primary"
          role="tab"
        >
          分包計畫及分包單位明細
        </router-link>
      </li>

      <li class="nav-item mx-1" role="presentation">
        <router-link
          :to="{ name: 'BudgetDetail' }"
          class="btn btn-primary"
          role="tab"
        >
          經費預算總表
        </router-link>
      </li>

      <li class="nav-item mx-1" role="presentation">
        <router-link
          :to="{ name: 'GrbDetail' }"
          class="btn btn-primary"
          role="tab"
        >
          GRB
        </router-link>
      </li>

      <li class="nav-item mx-1" role="presentation">
        <router-link
          :to="{ name: 'ProposalDetail' }"
          class="btn btn-primary"
          role="tab"
        >
          計畫書
        </router-link>
      </li>
    </ul>
    <!-- tablistEnd -->
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style></style>
