<template>
  <div>
    <h2>標案計畫清單明細</h2>
  </div>
  <div class="row">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="home-tab"
          data-bs-toggle="tab"
          data-bs-target="#home"
          type="button"
          role="tab"
          aria-controls="home"
          aria-selected="true"
        >
          標案計畫
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#profile"
          type="button"
          role="tab"
          aria-controls="profile"
          aria-selected="false"
        >
          契約編號
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="contact-tab"
          data-bs-toggle="tab"
          data-bs-target="#contact"
          type="button"
          role="tab"
          aria-controls="contact"
          aria-selected="false"
        >
          審查人員
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="contact-tab"
          data-bs-toggle="tab"
          data-bs-target="#tab4"
          type="button"
          role="tab"
          aria-controls="tab4"
          aria-selected="false"
        >
          決標資訊
        </button>
      </li>
    </ul>
    <!--標案計畫 -->
    <div class="tab-content" id="myTabContent">
      <div
        class="tab-pane fade show active"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <div class="row">
          <div class="col-6">
            <div class="form-floating">
              <input
                type="email"
                class="form-control"
                id="floatingInputGrid"
                placeholder="name@example.com"
                value=""
              />
              <label for="floatingInputGrid"
                ><span class="text-danger">*</span>年度</label
              >
            </div>
          </div>
          <div class="col-6">
            <div class="form-floating">
              <input
                type="email"
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

          <div class="col-6">
            <div class="form-floating">
              <input
                type="email"
                class="form-control"
                id="floatingInputGrid"
                placeholder="name@example.com"
                value=""
              />
              <label for="floatingInputGrid"
                ><span class="text-danger">*</span>標案名稱</label
              >
            </div>
          </div>
          <div class="col-6">
            <div class="form-floating">
              <input
                type="email"
                class="form-control"
                id="floatingInputGrid"
                placeholder="name@example.com"
                value=""
              />
              <label for="floatingInputGrid">標案英文名稱</label>
            </div>
          </div>

          <div class="col-6">
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                id="aaa"
                placeholder="name@example.com"
                value=""
              />
              <datalist id="aa">
                <option>馬來貘</option>
                <option>山貘</option>
                <option>中美貘</option>
                <option>南美貘</option>
                <option>卡波馬尼貘</option>
              </datalist>
              <label for="aaa">承辦人</label>
            </div>
          </div>
          <div class="col-6">
            <div class="form-floating">
              <input
                type="email"
                class="form-control"
                id="floatingInputGrid"
                placeholder="name@example.com"
                value=""
              />
              <label for="floatingInputGrid">承辦人電話</label>
            </div>
          </div>

          <div class="col-6">
            <div class="form-floating">
              <input
                type="email"
                class="form-control"
                id="floatingInputGrid"
                placeholder="name@example.com"
                value=""
              />
              <label for="floatingInputGrid">選擇切割經費</label>
            </div>
          </div>
          <div class="col-6">
            <div class="form-floating">
              <input
                type="email"
                class="form-control"
                id="floatingInputGrid"
                placeholder="name@example.com"
                value=""
              />
              <label for="floatingInputGrid"
                ><span class="text-danger">*</span>主要綱要計畫名稱</label
              >
            </div>
          </div>

          <div class="col-6">
            <div class="form-floating">
              <input
                type="email"
                class="form-control"
                id="floatingInputGrid"
                placeholder="name@example.com"
                value=""
              />
              <label for="floatingInputGrid"
                ><span class="text-danger">*</span>子綱要計畫名稱</label
              >
            </div>
          </div>
          <div class="col-4">
            <div class="form-floating">
              <input
                type="email"
                class="form-control"
                id="floatingInputGrid"
                placeholder="name@example.com"
                value=""
              />
              <label for="floatingInputGrid">前期標案計畫</label>
            </div>
          </div>
          <div class="col-1">
            <div class="form-floating">
              <button type="button" class="btn" value="">
                <span><i class="fas fa-search"></i></span>查詢
              </button>
            </div>
          </div>
          <div class="col-1">
            <div class="form-floating">
              <button type="button" class="btn" value="">
                <span><i class="fas fa-stamp"></i></span>清空
              </button>
            </div>
          </div>

          <div class="col-6">
            <div class="form-floating">
              <input
                type="email"
                class="form-control"
                id="floatingInputGrid"
                placeholder="name@example.com"
                value=""
              />
              <label for="floatingInputGrid">採購方式</label>
            </div>
          </div>
          <!-- <div class="col-6">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
              <label class="form-check-label" for="flexSwitchCheckDefault">歸檔</label>
            </div>
          </div> -->
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
        </div>
      </div>

      <!--契約編號 -->
      <div
        class="tab-pane fade"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <div class="row">
          <div class="col-6">
            <div class="form-floating">
              <select
                class="form-select"
                id="floatingSelectGrid"
                aria-label="Floating label select example"
              >
                <option></option>
                <option value="1">One</option>
              </select>
              <label for="floatingSelectGrid"
                ><span class="text-danger">*</span>預算來源別代號</label
              >
            </div>
          </div>
          <div class="col-6">
            <div class="form-floating">
              <select
                class="form-select"
                id="floatingSelectGrid"
                aria-label="Floating label select example"
              >
                <option></option>
                <option value="1">One</option>
              </select>
              <label for="floatingSelectGrid"
                ><span class="text-danger">*</span>分支計畫代號</label
              >
            </div>
          </div>

          <div class="col-6">
            <div class="form-floating">
              <select
                class="form-select"
                id="floatingSelectGrid"
                aria-label="Floating label select example"
              >
                <option></option>
                <option value="1">One</option>
              </select>
              <label for="floatingSelectGrid"
                ><span class="text-danger">*</span>用途別科目代號</label
              >
            </div>
          </div>
          <div class="col-6">
            <div class="form-floating">
              <select
                class="form-select"
                id="floatingSelectGrid"
                aria-label="Floating label select example"
              >
                <option></option>
                <option value="1">One</option>
              </select>
              <label for="floatingSelectGrid"
                ><span class="text-danger">*</span>組室</label
              >
            </div>
          </div>

          <div class="col-6">
            <div class="form-floating">
              <input
                type="email"
                class="form-control"
                id="floatingInputGrid"
                placeholder="name@example.com"
                value=""
              />
              <label for="floatingInputGrid">流水號</label>
            </div>
          </div>
          <div class="col-6">
            <div class="form-floating">
              <input
                type="email"
                class="form-control"
                id="floatingInputGrid"
                placeholder="name@example.com"
                value=""
              />
              <label for="floatingInputGrid">契約編號</label>
            </div>
          </div>
          <div class="row">
            <button class="btn" type="button" @click="gotoback">
              <i class="fa-solid fa-file-signature"></i>取號
            </button>
            <button class="btn" type="button" @click="gotoback">
              <i class="fa-solid fa-file-signature"></i>重新填寫
            </button>
            <button class="btn" type="button" @click="gotoback">
              <i class="fas fa-undo-alt"></i>返回
            </button>
          </div>
        </div>
      </div>
      <!-- 審查人員 -->
      <div
        class="tab-pane fade"
        id="contact"
        role="tabpanel"
        aria-labelledby="contact-tab"
      >
        <table class="table">
          <tr>
            <td>承辦人階段</td>
          </tr>

          <tr>
            <td>
              <select class="form-select" aria-label="Default select example">
                <option selected>計畫管理服務人員</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>
              <select class="form-select" aria-label="Default select example">
                <option selected>業務組承辦人</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>
              <select class="form-select" aria-label="Default select example">
                <option selected>業務組科長</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>
              <select class="form-select" aria-label="Default select example">
                <option selected>資訊室承辦人</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>
              <select class="form-select" aria-label="Default select example">
                <option selected>資訊室技正或主任</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>
              <select class="form-select" aria-label="Default select example">
                <option selected>主計室承辦人</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>
              <select class="form-select" aria-label="Default select example">
                <option selected>副組長</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <select class="form-select" aria-label="Default select example">
                <option selected>組長</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
          </tr>
        </table>
      </div>
      <div
        class="tab-pane fade"
        id="tab4"
        role="tabpanel"
        aria-labelledby="tab4-tab"
      >
        <div class="col-6 my-3">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              list="options1"
              id="主得標廠商"
              placeholder="name@example.com"
              value=""
            />
            <datalist id="options1">
              <option>馬來貘</option>
              <option>山貘</option>
              <option>中美貘</option>
              <option>南美貘</option>
              <option>卡波馬尼貘</option>
            </datalist>
            <label for="主得標廠商">主得標廠商</label>
          </div>
        </div>
        <div class="col-6 mb-3">
          <div class="form-floating">
            <input
              type="text"
              id="副得標廠商"
              list="options0"
              class="form-control"
              placeholder="name@example.com"
            />
            <datalist id="options0">
              <option>馬來貘</option>
              <option>山貘</option>
              <option>中美貘</option>
              <option>南美貘</option>
              <option>卡波馬尼貘</option>
            </datalist>
            <label for="副得標廠商">副得標廠商</label>
          </div>
        </div>
        <div class="col-6 mb-3">
          <div class="form-floating">
            <input
              type="date"
              class="form-control"
              id="floatingInputGrid"
              placeholder="name@example.com"
              value=""
            />
            <label for="floatingInputGrid">決標日期</label>
          </div>
        </div>
        <div class="col-6 mb-3">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingInputGrid"
              placeholder="name@example.com"
              value=""
            />
            <label for="floatingInputGrid">決標金額(元)</label>
          </div>
        </div>
        <div class="col-6 mb-3">
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingInputGrid"
              placeholder="name@example.com"
              value=""
            />
            <label for="floatingInputGrid"
              ><span class="text-danger">*</span>帳號</label
            >
          </div>
        </div>
        <div class="row">
          <button class="btn" type="button" @click="gotoback">
            <i class="fa-solid fa-file-signature"></i>存擋
          </button>
          <button class="btn" type="button" @click="gotoback">
            <i class="fa-solid fa-file-signature"></i>帶入計畫
          </button>
          <button class="btn" type="button" @click="gotoback">
            <i class="fa-solid fa-file-signature"></i>重新填寫
          </button>
          <button class="btn" type="button" @click="gotoback">
            <i class="fas fa-undo-alt"></i>返回
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="row">
    <button class="btn" type="button" @click="gotoback"><i class="fa-solid fa-file-signature"></i>儲存</button>
    <button class="btn" type="button" @click="gotoback"><i class="fa-solid fa-file-signature"></i>重新填寫</button>
    <button class="btn" type="button" @click="gotoback"><i class="fas fa-undo-alt"></i>返回</button>
  </div> -->
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const gotoback = () => {
  console.log("aaa");
  router.go(-1);
};
</script>

<style scoped></style>
