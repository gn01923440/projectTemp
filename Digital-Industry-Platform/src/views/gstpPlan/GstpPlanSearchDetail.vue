<template>
  <div class="row px-5">
    <div>
      <h2
        class="text-title border-start border-4 border-warning rounded-start px-3 py-3"
      >
        綱要計畫資訊
      </h2>
    </div>

    <div class="row px-5">
      <div class="row col-6 py-1">
        <span class="px-2"
          ><p class="p-2 content-tit bg-warning bg-warning">
            計畫完整中文名稱
          </p></span
        ><span class=""> {{ gstpDetail.planName }}</span>
      </div>
      <div class="row col-6 py-1">
        <span class="px-2"
          ><p class="p-2 content-tit bg-warning">計畫名稱副標題</p></span
        ><span class=" ">{{ gstpDetail.plansubName }}</span>
      </div>
      <div class="row col-6 py-1">
        <span class="px-2"
          ><p class="p-2 content-tit bg-warning">系統編號</p></span
        ><span class="">{{ gstpDetail.sysno }}</span>
      </div>
      <div class="row col-6 py-1">
        <span class="px-2"
          ><p class="p-2 content-tit bg-warning">審議編號</p></span
        ><span>{{ gstpDetail.reviewNum }}</span>
      </div>

      <div class="row col-6 py-1">
        <span class="px-2"><p class="p-2 content-tit bg-warning">年度</p></span
        ><span>{{ gstpDetail.year }}</span>
      </div>
      <div class="row col-6 py-1">
        <span class="px-2"><p class="p-2 content-tit bg-warning">部會</p></span
        ><span>{{ gstpDetail.ministryCode }}</span>
      </div>

      <div class="row col-6 py-1">
        <span class="px-2"><p class="p-2 content-tit bg-warning">群組</p></span
        ><span>{{ gstpDetail.mainplancateCode }}</span>
      </div>
      <div class="row col-6 py-1">
        <span class="px-2"
          ><p class="p-2 content-tit bg-warning">群組比重%</p></span
        ><span>{{ gstpDetail.mainplancateProportion }}</span>
      </div>

      <div class="row col-6 py-1">
        <span class="px-2"
          ><p class="p-2 content-tit bg-warning">計畫類別</p></span
        ><span>{{ gstpDetail.mainplanCode }}</span>
      </div>
      <div class="row col-6 py-1">
        <span class="px-2"
          ><p class="p-2 content-tit bg-warning">預定執行機關</p></span
        ><span>{{ gstpDetail.preRunImplement }}</span>
      </div>

      <div class="row col-6 py-1">
        <span class="px-2"
          ><p class="p-2 content-tit bg-warning">執行期間(起)</p></span
        ><span>{{ gstpDetail.execStartDate }}</span>
      </div>
      <div class="row col-6 py-1">
        <span class="px-2"
          ><p class="p-2 content-tit bg-warning">執行期間(迄)</p></span
        ><span>{{ gstpDetail.execEndDate }}</span>
      </div>

      <div class="row col-6 py-1">
        <span class="px-2"
          ><p class="p-2 content-tit bg-warning">全程期間(起)</p></span
        ><span>{{ gstpDetail.allStartDate }}</span>
      </div>
      <div class="row col-6 py-1">
        <span class="px-2"
          ><p class="p-2 content-tit bg-warning">全程期間(迄)</p></span
        ><span>{{ gstpDetail.allEndDate }}</span>
      </div>

      <div class="row col-6 py-1">
        <span class="px-2"
          ><p class="p-2 content-tit bg-warning">中文關鍵詞</p></span
        ><span>{{ gstpDetail.chtKeyword }}</span>
      </div>
      <div class="row col-6 py-1">
        <span class="px-2"
          ><p class="p-2 content-tit bg-warning">英文關鍵詞</p></span
        ><span>{{ gstpDetail.engKeyword }}</span>
      </div>

      <div class="row col-12 py-1">
        <span class="px-2"
          ><p class="p-2 content-tit bg-warning">
            本計畫在施政項目之定位及功能
          </p></span
        ><span>{{ gstpDetail.govProjectDesc }}</span>
      </div>
      <div class="row col-12 py-1">
        <span class="px-2"
          ><p class="p-2 content-tit bg-warning">
            中程施政計畫關鍵策略目標
          </p></span
        ><span>{{ gstpDetail.midGovProjectDesc }}</span>
      </div>

      <div class="row col-12 py-1">
        <span class="px-2"
          ><p class="p-2 content-tit bg-warning">計畫摘要</p></span
        ><span>{{ gstpDetail.projectDesc }}</span>
      </div>
      <div class="row col-12 py-1">
        <span class="px-2"
          ><p class="p-2 content-tit bg-warning">預期效益(110~)</p></span
        >
        <span>{{ gstpDetail.expectBenfit }}</span>
      </div>

      <div class="row col-12 py-1">
        <span class="px-2"
          ><p class="p-2 content-tit bg-warning">近三年主要績效(108~)</p></span
        >
        <span>{{ gstpDetail.performanceBythree }}</span>
      </div>
      <div class="row col-6 py-1">
        <span class="px-2"
          ><p class="p-2 content-tit bg-warning">前瞻基礎建設</p></span
        ><span>{{ gstpDetail.frontInfrast }}</span>
      </div>

      <div class="row col-6 py-1">
        <span class="px-2"
          ><p class="p-2 content-tit bg-warning">全程資源投入-第1年</p></span
        ><span>{{ gstpDetail.allresourceStep1 }}</span>
      </div>
      <div class="row col-6 py-1">
        <span class="px-2"
          ><p class="p-2 content-tit bg-warning">全程資源投入-第2年</p></span
        ><span>{{ gstpDetail.allresourceStep2 }}</span>
      </div>

      <div class="row col-6 py-1">
        <span class="px-2"
          ><p class="p-2 content-tit bg-warning">全程資源投入-第3年</p></span
        ><span>{{ gstpDetail.allresourceStep3 }}</span>
      </div>
      <div class="row col-6 py-1">
        <span class="px-2"
          ><p class="p-2 content-tit bg-warning">全程資源投入-第4年</p></span
        ><span>{{ gstpDetail.allresourceStep4 }}</span>
      </div>

      <div class="row col-6 py-1">
        <span class="px-2"
          ><p class="p-2 content-tit bg-warning">新制額度類別</p></span
        ><span>{{ gstpDetail.newQuotaCate }}</span>
      </div>
      <div class="row col-6 py-1">
        <span class="px-2"
          ><p class="p-2 content-tit bg-warning">
            戰略核心/重點政策/主軸/前瞻項目
          </p></span
        ><span></span>
      </div>

      <div class="row col-6 py-1">
        <span class="px-2"
          ><p class="p-2 content-tit bg-warning">重點政策項目</p></span
        ><span>{{ gstpDetail.keyProjDesc }}</span>
      </div>
      <div class="row col-6 py-1">
        <span class="px-2"
          ><p class="p-2 content-tit bg-warning">主軸項目</p></span
        ><span>{{ gstpDetail.masterProjDesc }}</span>
      </div>

      <div class="row col-6 py-1">
        <span class="px-2"
          ><p class="p-2 content-tit bg-warning">戰略核心項目</p></span
        ><span>{{ gstpDetail.warProjDesc }}</span>
      </div>
      <div class="row col-12 py-1">
        <span class="px-2"
          ><p class="p-2 content-tit bg-warning">前瞻項目</p></span
        ><span>{{ gstpDetail.frontProjDesc }}</span>
      </div>
    </div>

    <div class="row justify-content-center">
      <back-page-btn />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

import { useGstpStore } from "@/stores/gstpPlan";
import BackPageBtn from "@/components/button/BackPageBtn.vue";
const gstpStore = useGstpStore();
const { gstpDetail } = storeToRefs(gstpStore);
onMounted(() => {
  console.log(gstpDetail);
});
</script>

<style scoped>
.content-tit {
  display: inline-block;
  border-radius: 5px 50px 50px 5px;
  color: #206c7c;
  font-size: 18px;
  width: 18rem;
  border-bottom: 3px solid #206c7c;
}
</style>
