<template>
  <div>
    <div class="row">
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
        <span class="form-floating">
          <input
            type="text"
            class="form-control"
            placeholder="帳號 "
            aria-label="帳號 "
            value=""
          />
          <label for="floatingSelect">帳號 </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <input
            type="text"
            class="form-control"
            placeholder="密碼 "
            aria-label="密碼 "
            value=""
          />
          <label for="floatingSelect">密碼 </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <input
            type="text"
            class="form-control"
            placeholder="GRB帳號 "
            aria-label="GRB帳號 "
            value=""
          />
          <label for="floatingSelect">GRB帳號 </label>
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
          <label for="floatingSelect">功能角色 </label>
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
          <label for="floatingSelect">審查角色 </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <radio>有</radio>
          <radio>否</radio>
          <label for="floatingSelect">姓別 </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <input
            type="text"
            class="form-control"
            placeholder="Email "
            aria-label="Email "
            value=""
          />
          <label for="floatingSelect">Email </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <input
            type="text"
            class="form-control"
            placeholder="職稱 "
            aria-label="職稱 "
            value=""
          />
          <label for="floatingSelect">職稱 </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <input
            type="text"
            class="form-control"
            placeholder="電話 "
            aria-label="電話 "
            value=""
          />
          <label for="floatingSelect">電話 </label>
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
          <label for="floatingSelect">組織單位 </label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating">
          <radio>有</radio>
          <radio>否</radio>
          <label for="floatingSelect">單位主管 </label>
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
          <label for="floatingSelect">狀態 </label>
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
