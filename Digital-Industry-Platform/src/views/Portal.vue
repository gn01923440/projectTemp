<template>
  <div class="banners p-2 px-5">
    <div class="moda-logo">
      <img src="../assets/modalogo.png" alt="" />
    </div>
  </div>

  <div class="row mx-5 justify-content-between">
    <div class="col-12 col-lg-9">
      <ul class="nav nav-pills mb-3" id="myTab" role="tablist">
        <li class="nav-item col-12 col-sm-3" role="presentation">
          <button
            class="nav-link qa-tit col-12 active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true"
          >
            最新消息
          </button>
        </li>
        <li class="nav-item col-12 col-sm-3" role="presentation">
          <button
            class="nav-link qa-tit col-12"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile-tab-pane"
            type="button"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected="false"
          >
            系統使用手冊
          </button>
        </li>
        <li class="nav-item col-12 col-sm-3" role="presentation">
          <button
            class="nav-link qa-tit col-12"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact-tab-pane"
            type="button"
            role="tab"
            aria-controls="contact-tab-pane"
            aria-selected="false"
          >
            科技計畫作業手冊
          </button>
        </li>
        <li class="nav-item col-12 col-sm-3" role="presentation">
          <button
            class="nav-link qa-tit col-12"
            id="disabled-tab"
            data-bs-toggle="tab"
            data-bs-target="#disabled-tab-pane"
            type="button"
            role="tab"
            aria-controls="disabled-tab-pane"
            aria-selected="false"
          >
            其他
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabindex="0"
        >
          <div class="accordion" id="accordionExample">
            <div
              class="accordion-item border-0"
              v-for="news in newslist.newObj"
              :key="news.no"
            >
              <h2 class="accordion-header" :id="'heading' + news.no">
                <a
                  class="accordion-button accordion-tit bg-white text-decoration-none collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="'#' + news.collapseno"
                  aria-expanded="false"
                  :aria-controls="news.collapseno"
                >
                  <span class="col-10">{{ news.title }}</span>
                  <span class="qa-date col-2 d-none d-lg-block">{{
                    news.date
                  }}</span>
                </a>
              </h2>
              <div
                :id="news.collapseno"
                class="accordion-collapse collapse"
                :aria-labelledby="'heading' + news.no"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <span class="text-break">{{ news.memo }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabindex="0"
        >
          ...
        </div>
        <div
          class="tab-pane fade"
          id="contact-tab-pane"
          role="tabpanel"
          aria-labelledby="contact-tab"
          tabindex="0"
        >
          ...
        </div>
        <div
          class="tab-pane fade"
          id="disabled-tab-pane"
          role="tabpanel"
          aria-labelledby="disabled-tab"
          tabindex="0"
        >
          ...
        </div>
      </div>
    </div>

    <div class="col-12 col-lg-3 login py-3 py-lg-0">
      <button type="btn" class="btn login-btn shadow">會員登入</button>
      <login />
    </div>
  </div>
  <div class="row link-tit my-5 col-12">
    <h4 class="text-center deeper-blue">相關連結</h4>
  </div>

  <div class="row col-12 col-lg-10 px-1 px-lg-5 mb-5 link-btn-content">
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <a class="btn link-button" role="button" aria-disabled="true">
        <p>工業技術人才培訓全球諮詢網</p></a
      >
    </div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <a class="btn link-button" role="button" aria-disabled="true"
        ><p>政府研究資訓系統(GRB)</p></a
      >
    </div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <a class="btn link-button" role="button" aria-disabled="true"
        ><p>性別主流化專區</p></a
      >
    </div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <a class="btn link-button" role="button" aria-disabled="true"
        ><p>政府科技計畫資訊網</p></a
      >
    </div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <a class="btn link-button" role="button" aria-disabled="true"
        ><p>企業輔導網</p></a
      >
    </div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <a class="btn link-button" role="button" aria-disabled="true"
        ><p>行政院政府企劃管理資訊網</p></a
      >
    </div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <a class="btn link-button" role="button" aria-disabled="true"
        ><p>活動報報</p></a
      >
    </div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <a class="btn link-button" role="button" aria-disabled="true"
        ><p>專案計畫作業影音專區</p></a
      >
    </div>
  </div>

  <div class="footer qa-tit" align="center">
    經濟部工業局 科技計畫管理暨服務平台計畫 委辦
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import login from "../components/login.vue";

const newslist = reactive({
  newObj: [
    {
      no: 1,
      collapseno: "collapseno1",
      title: "112年度專案計畫作業手冊暨個人資料保護管理說明會-簡章(局外)",
      memo: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      date: "2022.08.18",
    },
    {
      no: 2,
      collapseno: "collapseno2",
      title: "112年度專案計畫作業手冊暨個人資料保護管理說明會-簡章(局內)",
      memo: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      date: "2022.08.18",
    },
    {
      no: 3,
      collapseno: "collapseno3",
      title: "因公奉派出國案件，自即日起恢復辦理。",
      memo: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      date: "2022.08.15",
    },
    {
      no: 4,
      collapseno: "collapseno4",
      title: "因公奉派出國案件，自即日起恢復辦理。",
      memo: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      date: "2022.08.15",
    },
    {
      no: 5,
      collapseno: "collapseno5",
      title: "因公奉派出國案件，自即日起恢復辦理。",
      memo: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      date: "2022.08.15",
    },
  ],
});
</script>

<style scoped>
.banners {
  background-image: url(../assets/banner.png);
  width: 100%;
  height: 147px;
  margin-bottom: 45px;
  background-color: #11304f;
}
.accordion-tit {
  border-bottom: 2px solid #133f58;
}
.accordion-item:last-of-type .accordion-button.collapsed {
  border-radius: 0px;
}
.qa-tit {
  font-size: 18px;
  font-weight: bold;
  color: #133f58;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #0d6efd;
  background: white;
}

.deeper-blue {
  color: #133f58;
}
.deeper-blue-border {
  border: 1px solid #133f58;
}
.deeper-blue-btn {
  background-color: #133f58;
  color: #ffffff;
}
.deeper-blue-btn:hover {
  background-color: #0d6efd;
  border: 1px solid #0d6efd;
  color: #ffffff;
}
.login {
  display: inline-flex;
  /* align-items: flex-end; */
  flex-direction: row-reverse;
}

.login-btn {
  background-color: #133f58;
  color: #e4c8a4;
  width: 70px;
  height: 70px;
  border-radius: 50% 0px 0px 50%;
  display: none;
  /* margin-top: 20px; */
  /* transform: translateX(-70px); */
}
/* @media all and (min-width: 320px) and (max-width: 991.98px){
  .login{
    position:fixed;
    transform: translateY(-50%);
    top: 45vh;
    transition: transform 1s ease-in-out;
    flex-direction:row;
  }
  .login-btn{
    display: block;
  }
  .open{
    transform: translate(-2rem, -50%);
  }
  .login-enter-form{
    transform: translateX(85%);
  }
  .login-leave-to{
    transform: translateX(50%);
  }

} */
/* 忘記密碼 */
.forgetpw:hover {
  color: #0d6efd;
}
/* 相關連結 Button*/
.link-btn-content {
  margin: 0 auto;
}
.link-button {
  width: 200px;
  height: 80px;
  font-size: 18px;
  margin-bottom: 45px;
  background-color: #ffffff;
  border: 2px solid #133f58;
  color: #133f58;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
}
@media all and (min-width: 320px) and (max-width: 991.98px) {
  .link-button {
    width: 100%;
    margin-bottom: 20px;
  }
}
.link-button p {
  margin-bottom: 0px;
}
.link-button:hover {
  color: #ffffff;
  border: 2px solid #133f58;
  background-color: #133f58;
  transition: 0.7s ease-out;
}
.footer {
  width: 100%;
  height: 141px;
  font-size: 18px;
}
</style>
