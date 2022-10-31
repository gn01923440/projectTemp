<template>
  <div class="row px-5">
    <div>
      <h2
        class="text-title border-start border-4 border-warning rounded-start px-3 py-3"
      >
        綱要經費切割
      </h2>
    </div>

    <div class="row px-5">
      <vee-form
        @Submit="onSubmit"
        :validation-schema="costCuttingSchema"
        autocomplete="off"
      >
        <div class="row col-12 mb-3">
          <h5 class="text-secondary border-bottom border-3 border-secondary">
            經費切割基本資料
          </h5>
        </div>
        <div class="row col-12 mb-3">
          <div class="col-3 offset-1">
            <span class="form-floating">
              <vee-field
                name="year"
                type="text"
                class="form-control"
                placeholder="年度"
                aria-label="年度"
                v-model="cuttingDetail.year"
                v-maska="'###'"
              />
              <label for="floatingSelect">
                <span class="text-danger">*</span>
                年度</label
              >
            </span>
            <ErrorMessage class="text-danger" name="year" />
          </div>
          <div class="col-5 offset-1">
            <span class="form-floating">
              <vee-field
                as="select"
                name="groupCode"
                class="form-select"
                aria-label="Floating label select example"
                v-model="cuttingDetail.groupCode"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </vee-field>
              <label for="floatingSelect"
                ><span class="text-danger">*</span> 組室</label
              >
            </span>
            <ErrorMessage class="text-danger" name="groupCode" />
          </div>
        </div>
        <!-- <div class="row col-6 mb-3"> -->
        <!-- </div> -->
        <div class="row col-12 mb-3">
          <div class="col-10 offset-1">
            <span class="form-floating">
              <vee-field
                name="name"
                type="text"
                class="form-control"
                placeholder="經費切割名稱"
                aria-label="經費切割名稱"
                v-model="cuttingDetail.name"
              />
              <label for="floatingSelect">
                <span class="text-danger">*</span>
                經費切割名稱</label
              >
            </span>
            <ErrorMessage class="text-danger" name="name" />
          </div>
        </div>

        <div class="row col-12 mb-3">
          <div class="col-10 offset-1">
            <n-space vertical>
              <n-select
                v-model:value="planId"
                filterable
                placeholder="綱要計畫"
                :options="options"
            /></n-space>
          </div>
        </div>
        <div class="row col-12 mb-3">
          <div class="col-6 offset-1">
            <span class="form-floating">
              <vee-field
                name="valuationCode"
                as="select"
                class="form-select"
                aria-label="Floating label select example"
                v-model="cuttingDetail.valuationCode"
              >
                <option value="999" selected></option>
                <option v-for="valuation in valuations" :value="valuation.code">
                  {{ valuation.name }}
                </option>
              </vee-field>
              <label for="floatingSelect">採購方式</label>
            </span>
            <ErrorMessage class="text-danger" name="valuationCode" />
          </div>
        </div>
        <div class="row col-12 mb-3">
          <div class="col-10 offset-1">
            <span class="form-floating">
              <label for="exampleFormControlTextarea1" class="form-label"
                >memo</label
              >
              <vee-field
                as="textarea"
                name="memo"
                class="form-control"
                rows="3"
                v-model="cuttingDetail.memo"
              ></vee-field>
            </span>

            <ErrorMessage class="text-danger" name="memo" />
          </div>
        </div>
        <!-- 行政院核定數 -->
        <div class="row col-12 my-3">
          <h5 class="text-secondary border-bottom border-3 border-secondary">
            行政院核定數
          </h5>
        </div>
        <div class="row col-12 mb-3">
          <div class="col-3 offset-1 h6">經費概算數(B+C+D)</div>
          <div class="col-8">{{ approveSum }}</div>
        </div>
        <!-- 委辦費(B) -->
        <div class="row col-12 mb-3">
          <div class="col-11 offset-1 mb-3 h6">委辦費(B)</div>
          <div class="col-6 offset-4 mb-3">
            <span class="form-floating">
              <vee-field
                name="approveAgentCurrent"
                type="text"
                class="form-control"
                placeholder="經常門"
                aria-label="經常門"
                v-model.number="cuttingDetail.approveAgentCurrent"
              />
              <label for="floatingSelect">經常門(仟元)</label>
            </span>
            <ErrorMessage class="text-danger" name="approveAgentCurrent" />
          </div>
          <!-- <div class="col-3 mb-3 align-self-center">
          (仟元)
        </div> -->

          <div class="col-6 offset-4 mb-3">
            <span class="form-floating">
              <vee-field
                name="approveAgentB2current"
                type="text"
                class="form-control"
                placeholder="B2經常門"
                aria-label="B2經常門"
                v-model.number="cuttingDetail.approveAgentB2current"
              />
              <label for="floatingSelect">B2經常門(增匡)(仟元)</label>
            </span>
            <ErrorMessage class="text-danger" name="approveAgentB2current" />
          </div>
          <!-- <div class="col-3 mb-3 align-self-center">
          (仟元)
        </div> -->

          <div class="col-6 offset-4 mb-3">
            <span class="form-floating">
              <vee-field
                name="approveAgentCapital"
                type="text"
                class="form-control"
                placeholder="資本門"
                aria-label="資本門"
                v-model.number="cuttingDetail.approveAgentCapital"
              />
              <label for="floatingSelect">資本門(仟元)</label>
            </span>
            <ErrorMessage class="text-danger" name="approveAgentCapital" />
          </div>
          <!-- <div class="col-3 mb-3 align-self-center">
          (仟元)
        </div> -->

          <div class="col-6 offset-4 mb-3">
            合計
            <span>{{ approveB }}</span>
          </div>
        </div>
        <!-- 獎補助費(C) -->
        <div class="row col-12 mb-3">
          <div class="col-11 offset-1 mb-3 h6">獎補助費(C)</div>
          <div class="col-6 offset-4 mb-3">
            <span class="form-floating">
              <vee-field
                name="approveGrantCurrent"
                type="text"
                class="form-control"
                placeholder="經常門"
                aria-label="經常門"
                v-model.number="cuttingDetail.approveGrantCurrent"
              />
              <label for="floatingSelect">經常門(仟元)</label>
            </span>
            <ErrorMessage class="text-danger" name="approveGrantCurrent" />
          </div>
          <!-- <div class="col-3 mb-3 align-self-center">
          (仟元)
        </div> -->

          <div class="col-6 offset-4 mb-3">
            <span class="form-floating">
              <vee-field
                name="approveGrantCurrentc2current"
                type="text"
                class="form-control"
                placeholder="B2經常門"
                aria-label="B2經常門"
                v-model.number="cuttingDetail.approveGrantCurrentc2current"
              />
              <label for="floatingSelect">C2經常門(增匡)(仟元)</label>
            </span>
            <ErrorMessage
              class="text-danger"
              name="approveGrantCurrentc2current"
            />
          </div>
          <!-- <div class="col-3 mb-3 align-self-center">
          (仟元)
        </div> -->

          <div class="col-6 offset-4 mb-3">
            <span class="form-floating">
              <vee-field
                name="approveGrantCapital"
                type="text"
                class="form-control"
                placeholder="資本門"
                aria-label="資本門"
                v-model.number="cuttingDetail.approveGrantCapital"
              />
              <label for="floatingSelect">資本門(仟元)</label>
            </span>
            <ErrorMessage class="text-danger" name="approveGrantCapital" />
          </div>
          <!-- <div class="col-3 mb-3 align-self-center">
          (仟元)
        </div> -->

          <div class="col-6 offset-4 mb-3">
            合計
            <span>{{ approveC }}</span>
          </div>
        </div>
        <!-- 業務費 -->
        <div class="row col-12 mb-3">
          <div class="col-3 offset-1 mb-3 h6">業務費(D)</div>
          <div class="col-6 mb-3">
            <span class="form-floating">
              <vee-field
                name="approveOperatingExpense"
                type="text"
                class="form-control"
                placeholder="業務費"
                aria-label="業務費"
                v-model.number="cuttingDetail.approveOperatingExpense"
              />
              <label for="floatingSelect">(仟元)</label>
            </span>
            <ErrorMessage class="text-danger" name="approveOperatingExpense" />
          </div>
        </div>
        <!-- 獎補助費明細(E) -->
        <div class="row col-12 mb-3">
          <div class="col-11 offset-1 mb-3 h6">獎補助費明細(E)</div>
          <div class="col-6 offset-4 mb-3">
            <span class="form-floating">
              <vee-field
                name="approveGrantFirm"
                type="text"
                class="form-control"
                placeholder="對企業捐助"
                aria-label="對企業捐助"
                v-model.number="cuttingDetail.approveGrantFirm"
              />
              <label for="floatingSelect">對企業捐助(仟元)</label>
            </span>
            <ErrorMessage class="text-danger" name="approveGrantFirm" />
          </div>
          <!-- <div class="col-3 mb-3 align-self-center">
          (仟元)
        </div> -->
          <div class="col-6 offset-4 mb-3">
            <span class="form-floating">
              <vee-field
                name="approveGrantGroup"
                type="text"
                class="form-control"
                placeholder="對團體捐助"
                aria-label="對團體捐助"
                v-model.number="cuttingDetail.approveGrantGroup"
              />
              <label for="floatingSelect">對團體捐助(仟元)</label>
            </span>
            <ErrorMessage class="text-danger" name="approveGrantGroup" />
          </div>
          <!-- <div class="col-3 mb-3 align-self-center">
          (仟元)
        </div> -->

          <div class="col-6 offset-4 mb-3">
            <span class="form-floating">
              <vee-field
                name="approveGrantStudent"
                type="text"
                class="form-control"
                placeholder="對學生之獎助"
                aria-label="對學生之獎助"
                v-model.number="cuttingDetail.approveGrantStudent"
              />
              <label for="floatingSelect">對學生之獎助(仟元)</label>
            </span>
            <ErrorMessage class="text-danger" name="approveGrantStudent" />
          </div>
          <!-- <div class="col-3 mb-3 align-self-center">
          (仟元)
        </div> -->

          <div class="col-6 offset-4 mb-3">
            <span class="form-floating">
              <vee-field
                name="approveGrantBonus"
                type="text"
                class="form-control"
                placeholder="獎勵金(對團體-企業)"
                aria-label="獎勵金(對團體-企業)"
                v-model.number="cuttingDetail.approveGrantBonus"
              />
              <label for="floatingSelect">獎勵金(對團體-企業)(仟元)</label>
            </span>
            <ErrorMessage class="text-danger" name="approveGrantBonus" />
          </div>
          <!-- <div class="col-3 mb-3 align-self-center">
          (仟元)
        </div> -->
          <div class="col-6 offset-4 mb-3">
            <span class="form-floating">
              <vee-field
                name="approveGrantNongroup"
                type="text"
                class="form-control"
                placeholder="獎勵金(對團體-非企業)"
                aria-label="獎勵金(對團體-非企業)"
                v-model.number="cuttingDetail.approveGrantNongroup"
              />
              <label for="floatingSelect">獎勵金(對團體-非企業)(仟元)</label>
            </span>
            <ErrorMessage class="text-danger" name="approveGrantNongroup" />
          </div>
          <!-- <div class="col-3 mb-3 align-self-center">
          (仟元)
        </div> -->
          <div class="col-6 offset-4 mb-3">
            <span class="form-floating">
              <vee-field
                name="approveGrantIndividual"
                type="text"
                class="form-control"
                placeholder="獎勵金(對個人)"
                aria-label="獎勵金(對個人)"
                v-model.number="cuttingDetail.approveGrantIndividual"
              />
              <label for="floatingSelect">獎勵金(對個人)(仟元)</label>
            </span>
            <ErrorMessage class="text-danger" name="approveGrantIndividual" />
          </div>
          <!-- <div class="col-3 mb-3 align-self-center">
          (仟元)
        </div> -->

          <div class="col-6 offset-4 mb-3">
            合計(C=E)
            <span>{{ approveE }}</span>
          </div>
        </div>
        <section v-if="isEdit">
          <!-- 立法院法定數 -->
          <div class="row col-12 my-3">
            <h5 class="text-secondary border-bottom border-3 border-secondary">
              立法院法定數
            </h5>
          </div>
          <div class="row col-12 mb-3">
            <div class="col-3 offset-1 h6">經費概算數(B+C+D)</div>
            <div class="col-8">{{ legalSum }}</div>
          </div>
          <!-- 委辦費(B) -->
          <div class="row col-12 mb-3">
            <div class="col-11 offset-1 mb-3 h6">委辦費(B)</div>
            <div class="col-6 offset-4 mb-3">
              <span class="form-floating">
                <vee-field
                  name="legalAgentCurrent"
                  type="text"
                  class="form-control"
                  placeholder="經常門"
                  aria-label="經常門"
                  v-model.number="cuttingDetail.legalAgentCurrent"
                />
                <label for="floatingSelect">經常門(仟元)</label>
              </span>
              <ErrorMessage class="text-danger" name="legalAgentCurrent" />
            </div>
            <!-- <div class="col-3 mb-3 align-self-center">
          (仟元)
        </div> -->

            <div class="col-6 offset-4 mb-3">
              <span class="form-floating">
                <vee-field
                  name="legalAgentB2current"
                  type="text"
                  class="form-control"
                  placeholder="B2經常門"
                  aria-label="B2經常門"
                  v-model.number="cuttingDetail.legalAgentB2current"
                />
                <label for="floatingSelect">B2經常門(增匡)(仟元)</label>
              </span>
              <ErrorMessage class="text-danger" name="legalAgentB2current" />
            </div>
            <!-- <div class="col-3 mb-3 align-self-center">
          (仟元)
        </div> -->

            <div class="col-6 offset-4 mb-3">
              <span class="form-floating">
                <vee-field
                  name="legalAgentCapital"
                  type="text"
                  class="form-control"
                  placeholder="資本門"
                  aria-label="資本門"
                  v-model.number="cuttingDetail.legalAgentCapital"
                />
                <label for="floatingSelect">資本門(仟元)</label>
              </span>
              <ErrorMessage class="text-danger" name="legalAgentCapital" />
            </div>
            <!-- <div class="col-3 mb-3 align-self-center">
          (仟元)
        </div> -->

            <div class="col-6 offset-4 mb-3">
              合計
              <span>{{ legalB }}</span>
            </div>
          </div>
          <!-- 獎補助費(C) -->
          <div class="row col-12 mb-3">
            <div class="col-11 offset-1 mb-3 h6">獎補助費(C)</div>
            <div class="col-6 offset-4 mb-3">
              <span class="form-floating">
                <vee-field
                  name="legalGrantCurrent"
                  type="text"
                  class="form-control"
                  placeholder="經常門"
                  aria-label="經常門"
                  v-model.number="cuttingDetail.legalGrantCurrent"
                />
                <label for="floatingSelect">經常門(仟元)</label>
              </span>
              <ErrorMessage class="text-danger" name="legalGrantCurrent" />
            </div>
            <!-- <div class="col-3 mb-3 align-self-center">
          (仟元)
        </div> -->

            <div class="col-6 offset-4 mb-3">
              <span class="form-floating">
                <vee-field
                  name="legalGrantCurrentc2current"
                  type="text"
                  class="form-control"
                  placeholder="C2經常門"
                  aria-label="C2經常門"
                  v-model.number="cuttingDetail.legalGrantCurrentc2current"
                />
                <label for="floatingSelect">C2經常門(增匡)(仟元)</label>
              </span>
              <ErrorMessage
                class="text-danger"
                name="legalGrantCurrentc2current"
              />
            </div>
            <!-- <div class="col-3 mb-3 align-self-center">
          (仟元)
        </div> -->

            <div class="col-6 offset-4 mb-3">
              <span class="form-floating">
                <vee-field
                  name="legalGrantCapital"
                  type="text"
                  class="form-control"
                  placeholder="資本門"
                  aria-label="資本門"
                  v-model.number="cuttingDetail.legalGrantCapital"
                />
                <label for="floatingSelect">資本門(仟元)</label>
              </span>
              <ErrorMessage class="text-danger" name="legalGrantCapital" />
            </div>
            <!-- <div class="col-3 mb-3 align-self-center">
          (仟元)
        </div> -->

            <div class="col-6 offset-4 mb-3">
              合計
              <span>{{ legalC }}</span>
            </div>
          </div>
          <!-- 業務費 -->
          <div class="row col-12 mb-3">
            <div class="col-3 offset-1 mb-3 h6">業務費(D)</div>
            <div class="col-6 mb-3">
              <span class="form-floating">
                <vee-field
                  name="legalOperatingExpense"
                  type="text"
                  class="form-control"
                  placeholder="業務費"
                  aria-label="業務費"
                  v-model.number="cuttingDetail.legalOperatingExpense"
                />
                <label for="floatingSelect">(仟元)</label>
              </span>
              <ErrorMessage class="text-danger" name="legalOperatingExpense" />
            </div>
          </div>
          <!-- 獎補助費明細(E) -->
          <div class="row col-12 mb-3">
            <div class="col-11 offset-1 mb-3 h6">獎補助費明細(E)</div>
            <div class="col-6 offset-4 mb-3">
              <span class="form-floating">
                <vee-field
                  name="legalGrantFirm"
                  type="text"
                  class="form-control"
                  placeholder="對企業捐助"
                  aria-label="對企業捐助"
                  v-model.number="cuttingDetail.legalGrantFirm"
                />
                <label for="floatingSelect">對企業捐助(仟元)</label>
              </span>
              <ErrorMessage class="text-danger" name="legalGrantFirm" />
            </div>
            <!-- <div class="col-3 mb-3 align-self-center">
          (仟元)
        </div> -->
            <div class="col-6 offset-4 mb-3">
              <span class="form-floating">
                <vee-field
                  name="legalGrantGroup"
                  type="text"
                  class="form-control"
                  placeholder="對團體捐助"
                  aria-label="對團體捐助"
                  v-model.number="cuttingDetail.legalGrantGroup"
                />
                <label for="floatingSelect">對團體捐助(仟元)</label>
              </span>
              <ErrorMessage class="text-danger" name="legalGrantGroup" />
            </div>
            <!-- <div class="col-3 mb-3 align-self-center">
          (仟元)
        </div> -->

            <div class="col-6 offset-4 mb-3">
              <span class="form-floating">
                <vee-field
                  name="legalGrantStudent"
                  type="text"
                  class="form-control"
                  placeholder="對學生之獎助"
                  aria-label="對學生之獎助"
                  v-model.number="cuttingDetail.legalGrantStudent"
                />
                <label for="floatingSelect">對學生之獎助(仟元)</label>
              </span>
              <ErrorMessage class="text-danger" name="legalGrantStudent" />
            </div>
            <!-- <div class="col-3 mb-3 align-self-center">
          (仟元)
        </div> -->

            <div class="col-6 offset-4 mb-3">
              <span class="form-floating">
                <vee-field
                  name="legalGrantBonus"
                  type="text"
                  class="form-control"
                  placeholder="獎勵金(對團體-企業)"
                  aria-label="獎勵金(對團體-企業)"
                  v-model.number="cuttingDetail.legalGrantBonus"
                />
                <label for="floatingSelect">獎勵金(對團體-企業)(仟元)</label>
              </span>
              <ErrorMessage class="text-danger" name="legalGrantBonus" />
            </div>
            <!-- <div class="col-3 mb-3 align-self-center">
          (仟元)
        </div> -->
            <div class="col-6 offset-4 mb-3">
              <span class="form-floating">
                <vee-field
                  name="legalGrantNongroup"
                  type="text"
                  class="form-control"
                  placeholder="獎勵金(對團體-非企業)"
                  aria-label="獎勵金(對團體-非企業)"
                  v-model.number="cuttingDetail.legalGrantNongroup"
                />
                <label for="floatingSelect">獎勵金(對團體-非企業)(仟元)</label>
              </span>
              <ErrorMessage class="text-danger" name="legalGrantNongroup" />
            </div>
            <!-- <div class="col-3 mb-3 align-self-center">
          (仟元)
        </div> -->
            <div class="col-6 offset-4 mb-3">
              <span class="form-floating">
                <vee-field
                  name="legalGrantIndividual"
                  type="text"
                  class="form-control"
                  placeholder="獎勵金(對個人)"
                  aria-label="獎勵金(對個人)"
                  v-model.number="cuttingDetail.legalGrantIndividual"
                />
                <label for="floatingSelect">獎勵金(對個人)(仟元)</label>
              </span>
              <ErrorMessage class="text-danger" name="legalGrantIndividual" />
            </div>
            <!-- <div class="col-3 mb-3 align-self-center">
          (仟元)
        </div> -->

            <div class="col-6 offset-4 mb-3">
              合計(C=E)
              <span>{{ legalE }}</span>
            </div>
          </div>
        </section>
        <div class="row justify-content-center">
          <button
            class="btn btn-warning text-white"
            type="submit"
            style="width: 6rem"
          >
            <i class="fa-solid fa-file-signature"></i>儲存</button
          >&nbsp;
          <button
            class="btn backing-out"
            type="button"
            @click="gotoback"
            style="width: 6rem"
          >
            <i class="fas fa-undo-alt"></i>返回
          </button>
        </div>
      </vee-form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onUpdated, onMounted } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";

import { useCuttingStore } from "@/stores/costCuttingStore";
const cuttingStore = useCuttingStore();
const { cuttingDetail, valuationAPI, saveCutting, isEdit } = cuttingStore;
const { valuations } = storeToRefs(cuttingStore);
const router = useRouter();

onMounted(() => {
  valuationAPI();
});
const gotoback = () => {
  console.log("aaa");
  router.go(-1);
};
const costCuttingSchema = {
  year: "required|year|min:2",
  name: "required",
  valuationCode: "menu_excluded:999",
  approveAgentCurrent: "numeric",
  approveAgentB2current: "numeric",
  approveAgentCapital: "numeric",
  approveGrantCurrent: "numeric",
  approveGrantCurrentc2current: "numeric",
  approveGrantCapital: "numeric",
  approveOperatingExpense: "numeric",
  approveGrantFirm: "numeric",
  approveGrantGroup: "numeric",
  approveGrantStudent: "numeric",
  approveGrantBonus: "numeric",
  approveGrantNongroup: "numeric",
  approveGrantIndividual: "numeric",
  legalAgentCurrent: "numeric",
  legalAgentB2current: "numeric",
  legalAgentCapital: "numeric",
  legalGrantCurrent: "numeric",
  legalGrantCurrentc2current: "numeric",
  legalGrantCapital: "numeric",
  legalOperatingExpense: "numeric",
  legalGrantFirm: "numeric",
  legalGrantGroup: "numeric",
  legalGrantStudent: "numeric",
  legalGrantBonus: "numeric",
  legalGrantNongroup: "numeric",
  legalGrantIndividual: "numeric",
};

const onSubmit = async () => {
  try {
    cuttingDetail.approveSum = approveSum.value;
    cuttingDetail.legalSum = legalSum.value;
    cuttingDetail.planId = planId.value;
    await saveCutting(cuttingDetail);
  } catch (error) {
    console.log(error);
  }
};

onUpdated(() => {
  console.log("sdafsad");
});
const approveB = computed(() => {
  return (
    Number(cuttingDetail.approveAgentCurrent) +
    Number(cuttingDetail.approveAgentB2current) +
    Number(cuttingDetail.approveAgentCapital)
  );
});
const approveC = computed(() => {
  return (
    Number(cuttingDetail.approveGrantCurrent) +
    Number(cuttingDetail.approveGrantCurrentc2current) +
    Number(cuttingDetail.approveGrantCapital)
  );
});
const approveE = computed(() => {
  return (
    Number(cuttingDetail.approveGrantFirm) +
    Number(cuttingDetail.approveGrantGroup) +
    Number(cuttingDetail.approveGrantStudent) +
    Number(cuttingDetail.approveGrantBonus) +
    Number(cuttingDetail.approveGrantNongroup) +
    Number(cuttingDetail.approveGrantIndividual)
  );
});
const approveSum = computed(() => {
  return (
    Number(cuttingDetail.approveAgentCurrent) +
    Number(cuttingDetail.approveAgentB2current) +
    Number(cuttingDetail.approveAgentCapital) +
    Number(cuttingDetail.approveGrantCurrent) +
    Number(cuttingDetail.approveGrantCurrentc2current) +
    Number(cuttingDetail.approveGrantCapital) +
    Number(cuttingDetail.approveOperatingExpense) +
    Number(cuttingDetail.approveGrantFirm) +
    Number(cuttingDetail.approveGrantGroup) +
    Number(cuttingDetail.approveGrantStudent) +
    Number(cuttingDetail.approveGrantBonus) +
    Number(cuttingDetail.approveGrantNongroup) +
    Number(cuttingDetail.approveGrantIndividual)
  );
});
const legalB = computed(() => {
  return (
    Number(cuttingDetail.legalAgentCurrent) +
    Number(cuttingDetail.legalAgentB2current) +
    Number(cuttingDetail.legalAgentCapital)
  );
});
const legalC = computed(() => {
  return (
    Number(cuttingDetail.legalGrantCurrent) +
    Number(cuttingDetail.legalGrantCurrentc2current) +
    Number(cuttingDetail.legalGrantCapital)
  );
});
const legalE = computed(() => {
  return (
    Number(cuttingDetail.legalGrantFirm) +
    Number(cuttingDetail.legalGrantGroup) +
    Number(cuttingDetail.legalGrantStudent) +
    Number(cuttingDetail.legalGrantBonus) +
    Number(cuttingDetail.legalGrantNongroup) +
    Number(cuttingDetail.legalGrantIndividual)
  );
});
const legalSum = computed(() => {
  console.log(legalB);
  return (
    Number(cuttingDetail.legalAgentCurrent) +
    Number(cuttingDetail.legalAgentB2current) +
    Number(cuttingDetail.legalAgentCapital) +
    Number(cuttingDetail.legalGrantCurrent) +
    Number(cuttingDetail.legalGrantCurrentc2current) +
    Number(cuttingDetail.legalGrantCapital) +
    Number(cuttingDetail.legalOperatingExpense) +
    Number(cuttingDetail.legalGrantFirm) +
    Number(cuttingDetail.legalGrantGroup) +
    Number(cuttingDetail.legalGrantStudent) +
    Number(cuttingDetail.legalGrantBonus) +
    Number(cuttingDetail.legalGrantNongroup) +
    Number(cuttingDetail.legalGrantIndividual)
  );
});

const planId = ref(null);
const options = ref([
  {
    label: "計畫1",
    value: "124",
  },
  {
    label: "計畫2",
    value: "123",
  },
]);
</script>

<style scoped></style>
