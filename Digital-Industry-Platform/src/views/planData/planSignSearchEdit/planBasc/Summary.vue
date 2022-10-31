<template>
  <div class="row px-5 py-3">
    <div class="row">
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"><span class="text-danger">*</span>中文摘要</label>
        <textarea class="form-control" id="中文摘要" rows="10"></textarea>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"><span class="text-danger">*</span>英文摘要</label>
        <textarea class="form-control" id="英文摘要" rows="10"></textarea>
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
