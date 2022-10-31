<template>
  <h2>修改分包/協辦計畫</h2>
  <div class="row">
    <div class="col-6">
      <span class="form-floating">
        <div class="col-6">
          <n-space
            >政府經費含稅帶入
            <n-radio
              :checked="checkedValue === 'Definitely Maybe'"
              value="Definitely Maybe"
              name="basic-demo"
              @change="handleChange"
            >
              有
            </n-radio>
            <n-radio
              :checked="checkedValue === 'Be Here Now'"
              value="Be Here Now"
              name="basic-demo"
              @change="handleChange"
            >
              否
            </n-radio>
          </n-space>
        </div>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <div class="col-6">
          <n-space
            >自籌款含稅帶入
            <n-radio
              :checked="checkedValue === 'Definitely Maybe'"
              value="Definitely Maybe"
              name="basic-demo"
              @change="handleChange"
            >
              有
            </n-radio>
            <n-radio
              :checked="checkedValue === 'Be Here Now'"
              value="Be Here Now"
              name="basic-demo"
              @change="handleChange"
            >
              否
            </n-radio>
          </n-space>
        </div>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <div class="col-6">
          <n-space
            >本分包項目是否為媒體廣告類
            <n-radio
              :checked="checkedValue === 'Definitely Maybe'"
              value="Definitely Maybe"
              name="basic-demo"
              @change="handleChange"
            >
              有
            </n-radio>
            <n-radio
              :checked="checkedValue === 'Be Here Now'"
              value="Be Here Now"
              name="basic-demo"
              @change="handleChange"
            >
              否
            </n-radio>
          </n-space>
        </div>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <select
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
        >
          <option></option>

          <option value="1">One</option>

          <option value="2">Two</option>

          <option value="3">Three</option>
        </select>
        <label for="floatingSelect">經費來源(分項計畫)</label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          required
          type="text"
          class="form-control"
          placeholder="預計分包項目名稱"
          aria-label="預計分包項目名稱"
          value=""
        />
        <label for="floatingSelect">預計分包項目名稱</label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          required
          type="text"
          class="form-control"
          placeholder="預計分包單位"
          aria-label="預計分包單位"
          value=""
        />
        <label for="floatingSelect">預計分包單位</label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          required
          type="text"
          class="form-control"
          placeholder="預計結案時間"
          aria-label="預計結案時間"
          value=""
        />
        <label for="floatingSelect">預計結案時間((民國年/月：yyy/mm))</label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <select
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
        >
          <option></option>

          <option value="1">One</option>

          <option value="2">Two</option>

          <option value="3">Three</option>
        </select>
        <label for="floatingSelect">計價方式</label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="備註"
          aria-label="備註"
          value=""
        />
        <label for="floatingSelect">備註</label>
      </span>
    </div>
  </div>
  <save-btn></save-btn>
  <button class="btn btn-light">轉匯入至經費預算</button>
  <back-page-btn></back-page-btn>
</template>

<script setup>
import BackPageBtn from "@/components/button/BackPageBtn.vue";
import saveBtn from "@/components/button/SaveBtn.vue";
</script>

<style></style>
