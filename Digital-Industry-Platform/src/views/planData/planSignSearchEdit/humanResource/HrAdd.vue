<template>
  <div class="row">
    <div class="col-6">
      <span class="form-floating">
        <div class="col-6">
          聘請
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
        <label for="floatingSelect">身分證 </label>
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
        <label for="floatingSelect">中文姓名 ((GRB) )</label>
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
        <label for="floatingSelect">英文姓名 ((GRB) )</label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <div class="col-6">
          性別
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
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <div class="col-6">
          國籍 ((外國人士，請填寫護照號碼或居留證號碼) )
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
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <div class="col-6">
          專兼任
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
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="出生年 "
          aria-label="出生年 "
          value=""
        />
        <label for="floatingSelect">出生年 (民國年(GRB) )</label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <input
          type="text"
          class="form-control"
          placeholder="畢業年/月 "
          aria-label="畢業年/月 "
          value=""
        />
        <label for="floatingSelect">畢業年/月 (民國年/月 )</label>
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
        <label for="floatingSelect">專長領域 ((GRB) )</label>
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
        <label for="floatingSelect">職級 ((GRB) )</label>
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
        <label for="floatingSelect">職級 ((數位發展部) )</label>
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
        <label for="floatingSelect">參與性質 ((GRB) )</label>
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
        <label for="floatingSelect">學歷 ((GRB) )</label>
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
        <label for="floatingSelect">服務機關 ((GRB) )</label>
      </span>
    </div>
    <div class="col-6">
      <span class="form-floating">
        <div class="col-6">
          <textarea></textarea>
        </div>
        <label for="floatingSelect">工作經歷 </label>
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
          placeholder="規劃執行工時 "
          aria-label="規劃執行工時 "
          value=""
        />
        <label for="floatingSelect">規劃執行工時 ((人月) (GRB) )</label>
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
        <div class="col-6">
          <n-space
            >是否為駐點人員
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
          <textarea></textarea>
        </div>
        <label for="floatingSelect">備註</label>
      </span>
    </div>
    <div class="col-6">
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
  <save-btn></save-btn>
  <back-page-btn></back-page-btn>
</template>

<script setup>
import BackPageBtn from "@/components/button/BackPageBtn.vue";
import saveBtn from "@/components/button/SaveBtn.vue";
</script>

<style></style>
