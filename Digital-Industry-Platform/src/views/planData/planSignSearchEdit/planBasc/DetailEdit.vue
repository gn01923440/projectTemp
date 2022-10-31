<template>
  <div class="row px-5 py-3">
    <div class="row">
      <div class="col-12 py-3">
        <span class="form-floating">
          <!-- <div class="row"> -->
            <span class="col">分項類型</span>
            <span class="col ms-5">
              <input type="radio" name="infoSys" checked class="x-3">原訂工作項目
              <input type="radio" name="infoSys">變更後工作項目
            </span>
          <!-- </div> -->
        </span>
      </div>
      <div class="col-12 py-3">
        <span class="form-floating">
          <input
            type="text"
            class="form-control"
            placeholder="分項計畫名稱"
            aria-label="分項計畫名稱"
            value=""
          />
          <label for="floatingSelect">分項計畫名稱</label>
        </span>
      </div>
      <div class="col-12 py-3">
        <label for="exampleFormControlTextarea1" class="form-label">計算方式說明 </label>
        <textarea class="form-control" id="計算方式說明 " rows="5"></textarea>
      </div>
      <div class="col-12 py-3">
        <label for="exampleFormControlTextarea1" class="form-label">變更後計畫驗收標的(規格、功能、效益說明)</label>
        <textarea class="form-control" id="變更後計畫驗收標的 " rows="5"></textarea>
      </div>
     
      <div class="col-3 py-3">
        <span class="form-floating">
          <input
            type="text"
            class="form-control"
            placeholder="排序"
            aria-label="排序"
            value=""
          />
          <label for="floatingSelect">排序</label>
        </span>
      </div>
    </div>
    <div class="row">
      <button class="btn" type="button" @click="gotoback">
        <i class="fa-solid fa-file-signature"></i>存檔
      </button>
      <button class="btn" type="button" @click="gotoback">
        <i class="fa-solid fa-file-signature"></i>返回清單
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
