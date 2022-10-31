<template>
  <div>新增派遣</div>

  <div class="row">
    <div class="col-6">
      <span class="form-floating">
        <div class="col-6">
          <n-space
            >聘請
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
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <div class="col-6">
          <n-space
            >國籍
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
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="身分證 "
          aria-label="身分證 "
          value=""
        />
        <label for="floatingSelect">身分證 ((待聘免填) )</label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="中文姓名 "
          aria-label="中文姓名 "
          value=""
        />
        <label for="floatingSelect">中文姓名 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="英文姓名 "
          aria-label="英文姓名 "
          value=""
        />
        <label for="floatingSelect">英文姓名 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <div class="col-6">
          <n-space>
            性別
            <n-radio
              :checked="checkedValue === 'Definitely Maybe'"
              value="Definitely Maybe"
              name="basic-demo"
              @change="handleChange"
            >
              男
            </n-radio>
            <n-radio
              :checked="checkedValue === 'Be Here Now'"
              value="Be Here Now"
              name="basic-demo"
              @change="handleChange"
            >
              女
            </n-radio>
          </n-space>
        </div>
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
        <label for="floatingSelect">專長領域 </label>
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
        <label for="floatingSelect">學歷 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="派遣單位/公司名稱 "
          aria-label="派遣單位/公司名稱 "
          value=""
        />
        <label for="floatingSelect">派遣單位/公司名稱 </label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <div class="col-6">
          <textarea></textarea>
        </div>
        <label for="floatingSelect">工作經歷 ((待聘免填) )</label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="工作年資 "
          aria-label="工作年資 "
          value=""
        />
        <label for="floatingSelect">工作年資 ((年) )</label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="預定投入人月 "
          aria-label="預定投入人月 "
          value=""
        />
        <label for="floatingSelect">預定投入人月 ((人月) )</label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <div class="col-6">
          <textarea></textarea>
        </div>
        <label for="floatingSelect">在本計畫擔任之工作項目 </label>
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
  <save-btn></save-btn>
  <back-page-btn></back-page-btn>
</template>

<script setup>
import BackPageBtn from "@/components/button/BackPageBtn.vue";
import saveBtn from "@/components/button/SaveBtn.vue";
</script>

<style></style>
