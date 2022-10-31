<template>
  <div class="row">
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="補助計畫名稱 "
          aria-label="補助計畫名稱 "
          value=""
        />
        <label for="floatingSelect">補助計畫名稱 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <label for="floatingSelect">統一編號 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <label for="floatingSelect">廠商名稱 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <label for="floatingSelect">補助計畫期程(X/N) </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <label for="floatingSelect">簽約補助期間(起) (迄) </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <label for="floatingSelect">{帶入當年}年度是否為結案年 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <label for="floatingSelect">簽約金額(元) </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="簽約金額-政府補助金額(A) "
          aria-label="簽約金額-政府補助金額(A) "
          value=""
        />
        <label for="floatingSelect">簽約金額-政府補助金額(A) ((元) )</label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="簽約金額廠商自籌款(B) "
          aria-label="簽約金額廠商自籌款(B) "
          value=""
        />
        <label for="floatingSelect">簽約金額廠商自籌款(B) ((元) )</label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <label for="floatingSelect">合計(C=A+B) ((元) )</label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <label for="floatingSelect">110年度補助金額（元） </label>
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
        <label for="floatingSelect">經費來源 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="其他說明 "
          aria-label="其他說明 "
          value=""
        />
        <label for="floatingSelect">其他說明 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="政府補助款撥款金額 "
          aria-label="政府補助款撥款金額 "
          value=""
        />
        <label for="floatingSelect">政府補助款撥款金額 ((元) )</label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="政府補助款決算金額 "
          aria-label="政府補助款決算金額 "
          value=""
        />
        <label for="floatingSelect">政府補助款決算金額 ((元) )</label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <label for="floatingSelect">資本額 ((元) )</label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <label for="floatingSelect">企業主 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="姓名 "
          aria-label="姓名 "
          value=""
        />
        <label for="floatingSelect">姓名 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <div class="col-6">
          <n-space>
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
        <label for="floatingSelect">性別 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <label for="floatingSelect">廠商地址 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <label for="floatingSelect">縣市別 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <label for="floatingSelect">廠商地址 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <label for="floatingSelect">廠商連絡人 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="廠商連絡人 "
          aria-label="廠商連絡人 "
          value=""
        />
        <label for="floatingSelect">廠商連絡人 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="連絡人E-Mail "
          aria-label="連絡人E-Mail "
          value=""
        />
        <label for="floatingSelect">連絡人E-Mail </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="連絡人電話 "
          aria-label="連絡人電話 "
          value=""
        />
        <label for="floatingSelect">連絡人電話 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <label for="floatingSelect">廠商員工人數 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <label for="floatingSelect">主管 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="員工人數(男) "
          aria-label="員工人數(男) "
          value=""
        />
        <label for="floatingSelect">員工人數(男) </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="員工人數(女) "
          aria-label="員工人數(女) "
          value=""
        />
        <label for="floatingSelect">員工人數(女) </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <label for="floatingSelect">員工人數(合計) </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <label for="floatingSelect">非主管 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="員工人數(男) "
          aria-label="員工人數(男) "
          value=""
        />
        <label for="floatingSelect">員工人數(男) </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="員工人數(女) "
          aria-label="員工人數(女) "
          value=""
        />
        <label for="floatingSelect">員工人數(女) </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <label for="floatingSelect">員工人數(合計) </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <label for="floatingSelect">合計 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <label for="floatingSelect">員工人數(男) </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <label for="floatingSelect">員工人數(女) </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <label for="floatingSelect">員工人數(合計) </label>
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
        <label for="floatingSelect">產業別 </label>
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
        <label for="floatingSelect">功能別 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <div class="col-6">
          <textarea></textarea>
        </div>
        <label for="floatingSelect">補助內容 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <label for="floatingSelect">執行計畫之廠商投入人數 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="人數(男) "
          aria-label="人數(男) "
          value=""
        />
        <label for="floatingSelect">人數(男) </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="人數(女) "
          aria-label="人數(女) "
          value=""
        />
        <label for="floatingSelect">人數(女) </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <label for="floatingSelect">合計 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <label for="floatingSelect">B單位填寫欄位 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <label for="floatingSelect">配合推動政策項目 </label>
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
        <label for="floatingSelect">「產業升級轉型推動策略」政策 </label>
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
        <label for="floatingSelect">5+2產業創新推動 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <div class="col-6">
          <n-space>
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
        <label for="floatingSelect">是否為食品/藥物業者 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <label for="floatingSelect">受推薦廠商填寫欄位 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <label for="floatingSelect"
          >受推薦廠商填寫欄位  打勾顯示以下欄位 </label
        >
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="當年度營業額 "
          aria-label="當年度營業額 "
          value=""
        />
        <label for="floatingSelect">當年度營業額 ((元) )</label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="主要產品/服務 "
          aria-label="主要產品/服務 "
          value=""
        />
        <label for="floatingSelect">主要產品/服務 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="面臨問題 "
          aria-label="面臨問題 "
          value=""
        />
        <label for="floatingSelect">面臨問題 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <div class="col-6">
          <textarea></textarea>
        </div>
        <label for="floatingSelect">輔導成效一 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <div class="col-6">
          <textarea></textarea>
        </div>
        <label for="floatingSelect">輔導成效二 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="排序 "
          aria-label="排序 "
          value=""
        />
        <label for="floatingSelect">排序 </label>
      </span>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
