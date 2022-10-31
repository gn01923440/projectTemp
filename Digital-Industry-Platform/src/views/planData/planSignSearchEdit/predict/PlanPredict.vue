<template>
  <div class="row px-5">

    <div class="row">
      <div class="row col-12 mb-3 pt-3">
        <h5 class="text-secondary border-bottom border-3 border-secondary">
          預期成果-簽約輔導廠商 
        </h5>
      </div>
      <div class="row col-12 mb-3">
        <n-space item-style="display: flex;" align="center">
          <n-checkbox v-model:checked="value"> 本計畫無此項目 </n-checkbox>
        </n-space>
      </div>
      <div class="row col-12 mb-3">
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="輔導廠商家數 "
              aria-label="輔導廠商家數 "
              value=""
            />
            <label for="floatingSelect">輔導廠商家數</label>
          </span>
        </div>
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="輔導廠商件數 "
              aria-label="輔導廠商件數 "
              value=""
            />
            <label for="floatingSelect">輔導廠商件數</label>
          </span>
        </div>
      </div>
      <div class="row col-12 mb-3">
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="預估當年度降低生產成本 "
              aria-label="預估當年度降低生產成本 "
              value=""
            />
            <label for="floatingSelect">預估當年度降低生產成本 </label>
          </span>
        </div>
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="預估當年度增加產值 "
              aria-label="預估當年度增加產值 "
              value=""
            />
            <label for="floatingSelect">預估當年度增加產值</label>
          </span>
        </div>
      </div>
      <div class="row col-12 mb-3">

        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="本項政府經費 "
              aria-label="本項政府經費 "
              value=""
            />
            <label for="floatingSelect">本項政府經費 (元)</label>
          </span>
        </div>
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="自籌款 "
              aria-label="自籌款 "
              value=""
            />
            <label for="floatingSelect">自籌款 (元)</label>
          </span>
        </div>
      </div>
      <div class="row col-12 mb-3 pt-3">
        <h5 class="text-secondary border-bottom border-3 border-secondary">
          預期成果-人才培訓 
        </h5>
      </div>
      <div class="row col-12 mb-3">
        <div class="col-12">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox v-model:checked="value"> 本計畫無此項目 </n-checkbox>
          </n-space>
        </div>
      </div>

      <div class="row col-12 mb-3">
        <div>1.培訓課程 </div>
      </div>
      <div class="row col-12 mb-3">
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="培訓課程_在職班班次 "
              aria-label="培訓課程_在職班班次 "
              value=""
            />
            <label for="floatingSelect">培訓課程_在職班班次</label>
          </span>
        </div>
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="培訓課程_在職班人次 "
              aria-label="培訓課程_在職班人次 "
              value=""
            />
            <label for="floatingSelect">培訓課程_在職班人次</label>
          </span>
        </div>
      </div>
      <div class="row col-12 mb-3">
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="培訓課程_在職班人時 "
              aria-label="培訓課程_在職班人時 "
              value=""
            />
            <label for="floatingSelect">培訓課程_在職班人時</label>
          </span>
        </div>
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="培訓課程_課程(教材)更新率% "
              aria-label="培訓課程_課程(教材)更新率% "
              value=""
            />
            <label for="floatingSelect">培訓課程_課程(教材)更新率%</label>
          </span>
        </div>
      </div>
      <div class="row col-12 mb-3">
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="培訓課程_養成班班次 "
              aria-label="培訓課程_養成班班次 "
              value=""
            />
            <label for="floatingSelect">培訓課程_養成班班次</label>
          </span>
        </div>
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="培訓課程_養成班人次 "
              aria-label="培訓課程_養成班人次 "
              value=""
            />
            <label for="floatingSelect">培訓課程_養成班人次</label>
          </span>
        </div>
      </div>
      <div class="row col-12 mb-3">
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="培訓課程_養成班人時 "
              aria-label="培訓課程_養成班人時 "
              value=""
            />
            <label for="floatingSelect">培訓課程_養成班人時</label>
          </span>
        </div>
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="培訓課程_課程(教材)更新率% "
              aria-label="培訓課程_課程(教材)更新率% "
              value=""
            />
            <label for="floatingSelect">培訓課程_課程(教材)更新率%</label>
          </span>
        </div>

      </div>
      <div class="row col-12 mb-3">
        <div>2.職能基準 </div>
      </div>
      <div class="row col-12 mb-3">
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="新增及更新職能基準總項目數 "
              aria-label="新增及更新職能基準總項目數 "
              value=""
            />
            <label for="floatingSelect">新增及更新職能基準總項目數</label>
          </span>
        </div>

      </div>
      <div class="row col-12 mb-3">
        <div>3.能力鑑定</div>
      </div>
      <div class="row col-12 mb-3">
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="規劃能力鑑定制度項目數 "
              aria-label="規劃能力鑑定制度項目數 "
              value=""
            />
            <label for="floatingSelect">規劃能力鑑定制度項目數</label>
          </span>
        </div>
      </div>
      <div class="row col-12 mb-3">
        <div>4.產學合作培育人才 </div>
      </div>
      <div class="row col-12 mb-3">
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="領域數 "
              aria-label="領域數 "
              value=""
            />
            <label for="floatingSelect">領域數)</label>
          </span>
        </div>
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="總案件數 "
              aria-label="總案件數 "
              value=""
            />
            <label for="floatingSelect">總案件數</label>
          </span>
        </div>
      </div>
      <div class="row col-12 mb-3">
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="培育大專以上人數 "
              aria-label="培育大專以上人數 "
              value=""
            />
            <label for="floatingSelect">培育大專以上人數</label>
          </span>
        </div>
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="培育高職人數 "
              aria-label="培育高職人數 "
              value=""
            />
            <label for="floatingSelect">培育高職人數</label>
          </span>
        </div>
      </div>
      <div class="row col-12 mb-3">
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="種子師資培育人數 "
              aria-label="種子師資培育人數 "
              value=""
            />
            <label for="floatingSelect">種子師資培育人數 (  )</label>
          </span>
        </div>
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="預計投入業師人數 "
              aria-label="預計投入業師人數 "
              value=""
            />
            <label for="floatingSelect">預計投入業師人數 (  )</label>
          </span>
        </div>
      </div>
      <div class="row col-12 mb-3">
        <div>5.重點產業專業人才需求調查 </div>
      </div>
      <div class="row col-12 mb-3">
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="重點產業專業人才需求調查 "
              aria-label="重點產業專業人才需求調查 "
              value=""
            />
            <label for="floatingSelect">重點產業專業人才需求調查</label>
          </span>
        </div>
      </div>
      <div class="row col-12 mb-3">
        <div class="col-12 ">
          <span class="">
           人才培訓(含培訓課程、重點產業專業人才需求調查、職能基準與能力鑑定、產學合作培育人才等)經費合計 
          </span>
        </div>

      </div>
      <div class="row col-12 mb-3">
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="本項政府委辦款 "
              aria-label="本項政府委辦款 "
              value=""
            />
            <label for="floatingSelect"><span class="text-danger">*</span> 本項政府委辦款 (元)</label>
          </span>
        </div>
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="自籌款 "
              aria-label="自籌款 "
              value=""
            />
            <label for="floatingSelect"><span class="text-danger">*</span>自籌款(元)</label>
          </span>
        </div>
      </div>
      <div class="row col-12 mb-3">
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="本項政府補助款 "
              aria-label="本項政府補助款 "
              value=""
            />
            <label for="floatingSelect"><span class="text-danger">*</span>本項政府補助款 (元)</label>
          </span>
        </div>
      </div>
      <div class="row col-12 mb-3 pt-3">
        <h5 class="text-secondary border-bottom border-3 border-secondary">
          預期成果-促成投資(推動小組必填) 
        </h5>
      </div>
      <div class="row col-12 mb-3">
        <div class="col-12">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox v-model:checked="value"> 本計畫無此項目 </n-checkbox>
          </n-space>
        </div>
      </div>
      <div class="row col-12 mb-3">
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="案件數 "
              aria-label="案件數 "
              value=""
            />
            <label for="floatingSelect">案件數</label>
          </span>
        </div>
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="金額 "
              aria-label="金額 "
              value=""
            />
            <label for="floatingSelect">金額 (元)</label>
          </span>
        </div>
      </div>
      <div class="row col-12 mb-3 pt-3">
        <h5 class="text-secondary border-bottom border-3 border-secondary">
          預期成果-諮詢/診斷/轉介輔導廠商 
        </h5>
      </div>
      <div class="row col-12 mb-3">
        <div class="col-12">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox v-model:checked="value"> 本計畫無此項目 </n-checkbox>
          </n-space>
        </div>
      </div>
      <div class="row col-12 mb-3">
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="輔導廠商家數 "
              aria-label="輔導廠商家數 "
              value=""
            />
            <label for="floatingSelect">輔導廠商家數</label>
          </span>
        </div>
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="輔導廠商件數 "
              aria-label="輔導廠商件數 "
              value=""
            />
            <label for="floatingSelect">輔導廠商件數</label>
          </span>
        </div>
      </div>
      <div class="row col-12 mb-3 pt-3">
        <h5 class="text-secondary border-bottom border-3 border-secondary">
          預期成果-預估當年度就業人數 
        </h5>
      </div>
      <div class="row col-12 mb-3">
        <div class="col-12">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox v-model:checked="value"> 本計畫無此項目 </n-checkbox>
          </n-space>
        </div>
      </div>
      <div class="row col-12 mb-3">
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="新增就業人數 "
              aria-label="新增就業人數 "
              value=""
            />
            <label for="floatingSelect">新增就業人數</label>
          </span>
        </div>
      </div>
      <div class="row col-12 mb-3 pt-3">
        <h5 class="text-secondary border-bottom border-3 border-secondary">
          預期成果-研究報告 
        </h5>
      </div>
      <div class="row col-12 mb-3">
        <div class="col-12">
          <n-space item-style="display: flex;" align="center">
            <n-checkbox v-model:checked="value"> 本計畫無此項目 </n-checkbox>
          </n-space>
        </div>
      </div>
      <div class="row col-12 mb-3">
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="研究報告份數 "
              aria-label="研究報告份數 "
              value=""
            />
            <label for="floatingSelect">研究報告份數</label>
          </span>
        </div>
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="決策依據項數 "
              aria-label="決策依據項數 "
              value=""
            />
            <label for="floatingSelect">決策依據項數 </label>
          </span>
        </div>
      </div>
      <div class="row col-12 mb-3">

        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="技術活動場次 "
              aria-label="技術活動場次 "
              value=""
            />
            <label for="floatingSelect">技術活動場次 </label>
          </span>
        </div>
        <div class="col-6">
          <span class="form-floating">
            <input
              type="text"
              class="form-control"
              placeholder="其他 "
              aria-label="其他 "
              value=""
            />
            <label for="floatingSelect">其他 </label>
          </span>
        </div>
      </div>
      <div class="row justify-content-center ">
        <save-btn></save-btn>&nbsp;&nbsp;
        <back-page-btn></back-page-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import BackPageBtn from "@/components/button/BackPageBtn.vue";
import saveBtn from "@/components/button/SaveBtn.vue";
</script>

<style></style>
