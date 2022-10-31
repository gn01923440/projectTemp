<template>
  <div>
    <div class="row">
      <div class="col-6">
        <span class="form-floating">
          <radio>有</radio>
          <radio>否</radio>
          <label for="floatingSelect">組室</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <input
            type="text"
            class="form-control"
            placeholder="名稱 "
            aria-label="名稱 "
            value=""
          />
          <label for="floatingSelect">名稱 </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <input
            type="text"
            class="form-control"
            placeholder="簡稱 "
            aria-label="簡稱 "
            value=""
          />
          <label for="floatingSelect">簡稱 </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <input
            type="text"
            class="form-control"
            placeholder="描述 "
            aria-label="描述 "
            value=""
          />
          <label for="floatingSelect">描述 </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <input
            type="text"
            class="form-control"
            placeholder="備註 "
            aria-label="備註 "
            value=""
          />
          <label for="floatingSelect">備註 </label>
        </span>
      </div>
    </div>
    <div class="row">
      <button class="btn" type="button" @click="gotoback">
        <i class="fa-solid fa-file-signature"></i>存檔 
      </button>
      <button class="btn" type="button" @click="gotoback">
        <i class="fa-solid fa-file-signature"></i>返回 
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
