<template>
  <div>新增分項計畫</div>
  <div class="row">
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="分項計畫 "
          aria-label="分項計畫 "
          value=""
        />
        <label for="floatingSelect">分項計畫 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="權重 "
          aria-label="權重 "
          value=""
        />
        <label for="floatingSelect">權重(不能大於100)</label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="人力數量 "
          aria-label="人力數量 "
          value=""
        />
        <label for="floatingSelect">人力數量(人月)</label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="政府經費 "
          aria-label="政府經費 "
          value=""
        />
        <label for="floatingSelect">政府經費(元)</label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="自籌經費 "
          aria-label="自籌經費 "
          value=""
        />
        <label for="floatingSelect">自籌經費(元)</label>
      </span>
    </div>
    <div class="col-6">
      整項分項計畫分包
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
  <save-btn></save-btn>
  <back-page-btn></back-page-btn>
</template>

<script setup>
import BackPageBtn from "@/components/button/BackPageBtn.vue";
import saveBtn from "@/components/button/SaveBtn.vue";
</script>

<style></style>
