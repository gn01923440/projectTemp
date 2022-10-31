<template>
  <div class="col-2">
    <div class="form-floating">
      <select
        class="form-select"
        id="floatingSelectGrid"
        aria-label="Floating label select example"
      >
        <option></option>
        <option value="1">第一期(至4月截止)</option>
      </select>
      <label for="floatingSelectGrid">期別</label>
    </div>
  </div>
  <button class="col-3 btn">審查日誌</button>
  <hr />
  <div>狀態:</div>
  <div>資安檢核表管理</div>
  <div class="row col-6 py-1">
    <span class="px-2"
      ><p class="p-2 content-tit bg-warning bg-warning">名稱</p></span
    ><span class="">數位經濟發展推動服務網</span>
  </div>
  <div class="row col-6 py-1">
    <span class="px-2"
      ><p class="p-2 content-tit bg-warning bg-warning">網址</p></span
    ><span class="">https://deipo.org.tw/</span>
    <div>狀態</div>
    <radio>上線</radio>
    <radio>未上線</radio>
    <div class="row col-6 py-1">
      <span class="px-2"
        ><p class="p-2 content-tit bg-warning bg-warning">檔案</p></span
      ><span class="">數位經濟發展推動服務網</span>
    </div>
    <button class="col-3 btn">下載</button>
    <input type="file" />
    <button class="col-3 btn">上傳存檔</button>
  </div>
</template>

<script setup></script>

<style></style>
