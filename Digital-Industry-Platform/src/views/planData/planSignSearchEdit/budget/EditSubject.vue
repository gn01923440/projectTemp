<template>
  <h5>修改</h5>
  <div class="row">
    <div class="row col-6 py-1">
      <span class="px-2"
        ><p class="p-2 content-tit bg-warning bg-warning">一級科目</p></span
      ><span class="">一級科目</span>
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
        <label for="floatingSelect">二級科目</label>
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
        <label for="floatingSelect">三級科目</label>
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
        <label for="floatingSelect">編列項目</label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="作業名稱"
          aria-label="作業名稱"
          value=""
        />
        <label for="floatingSelect">作業名稱</label>
      </span>
    </div>
    <div class="col-12">
      <label for="floatingSelect">計算方式</label>
    </div>
    <div class="col-1">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="備註"
          aria-label="備註"
          value=""
        />
        <label for="floatingSelect">數值</label>
      </span>
    </div>
    <div class="col-1">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="備註"
          aria-label="備註"
          value=""
        />
        <label for="floatingSelect">單位</label>
      </span>
    </div>
    X
    <div class="col-1">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="備註"
          aria-label="備註"
          value=""
        />
        <label for="floatingSelect">數值</label>
      </span>
    </div>
    <div class="col-1">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="備註"
          aria-label="備註"
          value=""
        />
        <label for="floatingSelect">單位</label>
      </span>
    </div>
    X
    <div class="col-1">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="備註"
          aria-label="備註"
          value=""
        />
        <label for="floatingSelect">數值</label>
      </span>
    </div>

    <div class="col-1">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="備註"
          aria-label="備註"
          value=""
        />
        <label for="floatingSelect">單位</label>
      </span>
    </div>
    =
    <div class="col-2">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="備註"
          aria-label="備註"
          value=""
        />
        <label for="floatingSelect"></label>
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
  <save-btn @click="save"
    ><template v-slot:btnName>存檔重新彙整經費</template></save-btn
  >
  <back-page-btn></back-page-btn>
</template>

<script setup>
import BackPageBtn from "@/components/button/BackPageBtn.vue";
import saveBtn from "@/components/button/SaveBtn.vue";

const save = () => {
  console.log("save");
};
</script>

<style></style>
