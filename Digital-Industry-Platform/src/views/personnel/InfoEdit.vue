<template>
  <div class="row">
    <div class="row col-6 py-1">
      <span class="px-2"
        ><p class="p-2 content-tit bg-warning bg-warning">帳號</p></span
      ><span class="">aabbcc1234</span>
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
        <label for="floatingSelect">姓名 (  )</label>
      </span>
    </div>
    <div class="col-6">
      <Gender />
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="email "
          aria-label="email "
          value=""
        />
        <label for="floatingSelect">email (  )</label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="GRB 帳號 "
          aria-label="GRB 帳號 "
          value=""
        />
        <label for="floatingSelect">GRB 帳號 (  )</label>
      </span>
    </div>
  </div>
  <div class="row">
    <button class="btn" type="button" @click="gotoback">
      <i class="fa-solid fa-file-signature"></i>送出
    </button>
    <button class="btn" type="button" @click="gotoback">
      <i class="fa-solid fa-file-signature"></i>重新填寫
    </button>
  </div>
</template>

<script setup>
import Gender from "@/components/Gender.vue";
</script>

<style></style>
