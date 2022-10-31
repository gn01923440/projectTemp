<template>
  <div>
    <h2>計畫簽約/變更/查詢作業-修改</h2>
  </div>

  <div>
    <ul class="nav py-3" id="myTab" role="tablist">
      <!-- tablist -->

      <li class="nav-item mx-1" role="presentation">
        <router-link
          :to="{ name: 'PlanBasc' }"
          class="btn btn-primary"
          role="tab"
        >
          基本資料
        </router-link>
      </li>
      <li class="nav-item mx-1" role="presentation">
        <router-link
          :to="{ name: 'Predict' }"
          class="btn btn-primary"
          role="tab"
        >
          預期成果
        </router-link>
      </li>

      <li class="nav-item mx-1" role="presentation">
        <router-link
          :to="{ name: 'SubPlan' }"
          class="btn btn-primary"
          role="tab"
        >
          分項計畫
        </router-link>
      </li>

      <li class="nav-item mx-1" role="presentation">
        <router-link
          :to="{ name: 'HumanResource' }"
          class="btn btn-primary"
          role="tab"
        >
          人力需求派遣
        </router-link>
      </li>

      <li class="nav-item mx-1" role="presentation">
        <router-link
          :to="{ name: 'AbroadPlan' }"
          class="btn btn-primary"
          role="tab"
        >
          出國計畫
        </router-link>
      </li>

      <li class="nav-item mx-1" role="presentation">
        <router-link
          :to="{ name: 'SubContract' }"
          class="btn btn-primary"
          role="tab"
        >
          分包協辦計畫
        </router-link>
      </li>

      <li class="nav-item mx-1" role="presentation">
        <router-link
          :to="{ name: 'Budget' }"
          class="btn btn-primary"
          role="tab"
        >
          經費預算
        </router-link>
      </li>

      <li class="nav-item mx-1" role="presentation">
        <router-link
          :to="{ name: 'Proposal' }"
          class="btn btn-primary"
          role="tab"
        >
          計畫書
        </router-link>
      </li>

      <li class="nav-item mx-1" role="presentation">
        <router-link :to="{ name: 'Grb' }" class="btn btn-primary" role="tab">
          GRB
        </router-link>
      </li>

      <li class="nav-item mx-1" role="presentation">
        <router-link :to="{ name: 'Audit' }" class="btn btn-primary" role="tab">
          送審
        </router-link>
      </li>
    </ul>
    <!-- tablistEnd -->
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const gotoback = () => {
  console.log("aaa");
  router.go(-1);
};
</script>

<style></style>
