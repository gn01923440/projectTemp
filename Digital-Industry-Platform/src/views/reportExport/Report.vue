<template>
  <div class="row">
    <div class="col-2">
      <div class="form-floating">
        <select
          class="form-select"
          id="floatingSelectGrid"
          aria-label="Floating label select example"
        >
          <option></option>
          <option value="1">One</option>
        </select>
        <label for="floatingSelectGrid">年度</label>
      </div>
    </div>
  </div>
  <div class="col-2">
    <div class="form-floating">
      <input
        type="text"
        class="form-control"
        id="floatingInputGrid"
        placeholder="name@example.com"
        value=""
      />
      <label for="floatingInputGrid"
        ><span class="text-danger">*</span>契約編號</label
      >
    </div>
  </div>
  <div class="col-2">
    <div class="form-floating">
      <input
        type="text"
        class="form-control"
        id="floatingInputGrid"
        placeholder="name@example.com"
        value=""
      />
      <label for="floatingInputGrid"
        ><span class="text-danger">*</span>計畫名稱</label
      >
    </div>
  </div>
  <div class="row">
    <button
      type="button"
      class="btn btn-outline-danger me-2"
      value=""
      data-bs-toggle="modal"
      data-bs-target="#pdfModal"
    >
      <span
        ><i
          class="fas fa-sign-out-alt"
          style="transform: rotate(270deg)"
        ></i></span
      >匯出
    </button>
    <button class="btn" type="button" @click="gotoback">
      <i class="fa-solid fa-file-signature"></i>清空 
    </button>
  </div>
</template>

<script setup></script>

<style></style>
