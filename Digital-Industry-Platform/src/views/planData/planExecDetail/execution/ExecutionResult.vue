<template>
  <div>執行成果</div>
  <ul class="nav py-3" id="myTab" role="tablist">
    <!-- tablist -->

    <li class="nav-item mx-1" role="presentation">
      <router-link
        :to="{ name: 'FirmConsult' }"
        class="btn btn-primary"
        role="tab"
      >
        輔導廠商
      </router-link>
    </li>

    <li class="nav-item mx-1" role="presentation">
      <router-link
        :to="{ name: 'DevResult' }"
        class="btn btn-primary"
        role="tab"
      >
        研發成果
      </router-link>
    </li>

    <li class="nav-item mx-1" role="presentation">
      <router-link
        :to="{ name: 'HighLight' }"
        class="btn btn-primary"
        role="tab"
      >
        計畫亮點案例
      </router-link>
    </li>

    <li class="nav-item mx-1" role="presentation">
      <router-link
        :to="{ name: 'PlanEffect' }"
        class="btn btn-primary"
        role="tab"
      >
        計畫整體推動成效
      </router-link>
    </li>

    <li class="nav-item mx-1" role="presentation">
      <router-link
        :to="{ name: 'ExecPplHrs' }"
        class="btn btn-primary"
        role="tab"
      >
        人力工時
      </router-link>
    </li>

    <li class="nav-item mx-1" role="presentation">
      <router-link
        :to="{ name: 'ExecSecuAudit' }"
        class="btn btn-primary"
        role="tab"
      >
        資安檢核表
      </router-link>
    </li>

    <li class="nav-item mx-1" role="presentation">
      <router-link
        :to="{ name: 'SourceCode' }"
        class="btn btn-primary"
        role="tab"
      >
        原始碼及相關文件
      </router-link>
    </li>

    <li class="nav-item mx-1" role="presentation">
      <router-link
        :to="{ name: 'ExecOverall' }"
        class="btn btn-primary"
        role="tab"
      >
        成果總報告
      </router-link>
    </li>
  </ul>
  <!-- tablistEnd -->
  <router-view></router-view>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style></style>
