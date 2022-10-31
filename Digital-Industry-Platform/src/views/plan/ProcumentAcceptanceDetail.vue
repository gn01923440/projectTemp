<template>
  <form>
    <div>
      <h2>計畫簽約/變更/查詢作業-修改</h2>
    </div>
    <div class="row">
      <div class="col-6">
        <span class="form-floating"
          ><input
            readonly
            type="text"
            class="form-control"
            placeholder="年度"
            aria-label="年度"
            value="108"
          />
          <label for="floatingSelect">年度</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating"
          ><input
            readonly
            type="text"
            class="form-control"
            placeholder="契約編號"
            aria-label="契約編號"
            value="108"
          />
          <label for="floatingSelect">契約編號</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating"
          ><input
            readonly
            type="text"
            class="form-control"
            placeholder="標案名稱"
            aria-label="標案名稱"
            value="108"
          />
          <label for="floatingSelect">標案名稱</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating"
          ><input
            type="text"
            class="form-control"
            placeholder="採購金額"
            aria-label="採購金額"
            value="108"
          />
          <label for="floatingSelect">採購金額</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating"
          ><input
            type="text"
            class="form-control"
            placeholder="預算金額"
            aria-label="預算金額"
            value="108"
          />
          <label for="floatingSelect">預算金額</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating"
          ><select
            class="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option></option>

            <option value="1">One</option>

            <option value="2">Two</option>

            <option value="3">Three</option>
          </select>
          <label for="floatingSelect">採購方式</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating"
          ><select
            class="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option></option>

            <option value="1">One</option>

            <option value="2">Two</option>

            <option value="3">Three</option>
          </select>
          <label for="floatingSelect">採購類別</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating"
          ><input
            type="text"
            class="form-control"
            placeholder="申購日期"
            aria-label="申購日期"
            value="108"
          />
          <label for="floatingSelect">申購日期</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating"
          ><input
            type="text"
            class="form-control"
            placeholder="成立評選委員會日期"
            aria-label="成立評選委員會日期"
            value="108"
          />
          <label for="floatingSelect">成立評選委員會日期</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating"
          ><input
            type="text"
            class="form-control"
            placeholder="第一次評選會開會日期"
            aria-label="第一次評選會開會日期"
            value="108"
          />
          <label for="floatingSelect">第一次評選會開會日期</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating"
          ><input
            type="text"
            class="form-control"
            placeholder="招標簽日期"
            aria-label="招標簽日期"
            value="108"
          />
          <label for="floatingSelect">招標簽日期</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating"
          ><input
            type="text"
            class="form-control"
            placeholder="公開閱覽日期"
            aria-label="公開閱覽日期"
            value="108"
          />
          <label for="floatingSelect">公開閱覽日期</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating"
          ><input
            type="text"
            class="form-control"
            placeholder="公告(邀標)日期"
            aria-label="公告(邀標)日期"
            value="108"
          />
          <label for="floatingSelect">公告(邀標)日期</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating"
          ><input type="text" />

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
          <label for="floatingSelect">投標廠商名單</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating"
          ><input
            type="text"
            class="form-control"
            placeholder="開標日期"
            aria-label="開標日期"
            value="108"
          />
          <label for="floatingSelect">開標日期</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating"
          ><input
            type="text"
            class="form-control"
            placeholder="第二次評選會開會日期"
            aria-label="第二次評選會開會日期"
            value="108"
          />
          <label for="floatingSelect">第二次評選會開會日期</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating"
          ><input
            type="text"
            class="form-control"
            placeholder="核定底價"
            aria-label="核定底價"
            value="108"
          />
          <label for="floatingSelect">核定底價</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating"
          ><input type="text" />

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
          <label for="floatingSelect">主得標廠商</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating"
          ><input type="text" />

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
          <label for="floatingSelect">副得標廠商</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating"
          ><input
            type="text"
            class="form-control"
            placeholder="決標日期"
            aria-label="決標日期"
            value="108"
          />
          <label for="floatingSelect">決標日期</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating"
          ><input
            type="text"
            class="form-control"
            placeholder="決標金額"
            aria-label="決標金額"
            value="108"
          />
          <label for="floatingSelect">決標金額</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating"
          ><input
            type="text"
            class="form-control"
            placeholder="簽約日期"
            aria-label="簽約日期"
            value="108"
          />
          <label for="floatingSelect">簽約日期</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating"
          ><input
            type="text"
            class="form-control"
            placeholder="押標金日期"
            aria-label="押標金日期"
            value="108"
          />
          <label for="floatingSelect">押標金日期</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating"
          ><input
            type="text"
            class="form-control"
            placeholder="押標金"
            aria-label="押標金"
            value="108"
          />
          <label for="floatingSelect">押標金</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating"
          ><input
            type="text"
            class="form-control"
            placeholder="履約保證金日期"
            aria-label="履約保證金日期"
            value="108"
          />
          <label for="floatingSelect">履約保證金日期</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating"
          ><input
            type="text"
            class="form-control"
            placeholder="履約保證金"
            aria-label="履約保證金"
            value="108"
          />
          <label for="floatingSelect">履約保證金</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating"
          ><input
            type="text"
            class="form-control"
            placeholder="保固金日期"
            aria-label="保固金日期"
            value="108"
          />
          <label for="floatingSelect">保固金日期</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating"
          ><input
            type="text"
            class="form-control"
            placeholder="保固金"
            aria-label="保固金"
            value="108"
          />
          <label for="floatingSelect">保固金</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating"
          ><input type="text" />

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
          <label for="floatingSelect">計畫主持人</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating"
          ><input
            required
            type="text"
            class="form-control"
            placeholder="帳號"
            aria-label="帳號"
            value="108"
          />
          <label for="floatingSelect">帳號</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating"
          ><input
            type="text"
            class="form-control"
            placeholder="備註"
            aria-label="備註"
            value="108"
          />
          <label for="floatingSelect">備註</label>
        </span>
      </div>
      <div class="col-6">
        <span class="form-floating"
          ><select
            class="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option></option>

            <option value="1">One</option>

            <option value="2">Two</option>

            <option value="3">Three</option>
          </select>
          <label for="floatingSelect">狀態</label>
        </span>
      </div>
    </div>
    <div class="row">
      <button class="btn" type="button" @click="gotoback">
        <i class="fa-solid fa-file-signature"></i>儲存
      </button>
      <button class="btn" type="button" @click="gotoback">
        <i class="fa-solid fa-file-signature"></i>重新填寫
      </button>
      <button class="btn" type="button" @click="gotoback">
        <i class="fas fa-undo-alt"></i>返回
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { NDatePicker } from "naive-ui";
import { useRouter } from "vue-router";
const router = useRouter();
const timestamp = ref(1183135260000);
const value = ref("");
const gotoback = () => {
  console.log("aaa");
  router.go(-1);
};
</script>

<style></style>
