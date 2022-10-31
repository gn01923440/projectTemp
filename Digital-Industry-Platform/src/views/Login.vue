<template>
  <div
    class="card deeper-blue-border card-login"
    style="border: 2px solid; height: 356px"
  >
    <div class="card-body">
      <h5 class="card-title text-center deeper-blue py-3">用戶登入</h5>
      <form @submit.prevent="login">
        <div class="form-floating row mb-3 mx-2">
          <input
            type="text"
            class="form-control"
            id="userNo"
            required
            v-model.trim="user.userNo"
            placeholder="28859051"
          />
          <label for="userNo">帳號</label>
        </div>
        <div class="form-floating row mb-3 mx-2">
          <input
            type="password"
            class="form-control"
            id="userPw"
            required
            v-model.trim="user.userPw"
          />
          <label for="userPw">密碼</label>
        </div>
        <div class="row mb-3 mx-2">
          <div class="col-5 px-0">
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                id="captcha"
                required
                v-model="user.captcha"
              />
              <label for="captcha">驗證碼</label>
            </div>
          </div>
          <!-- 驗證碼圖案 -->
          <div class="col-7">
            <img :src="captchaUrl" style="width: 120px" @click="getCaptcha" />

            <!-- <span><i class="fas fa-undo"></i></span> -->
            <!-- <label for="captcha" class="col-sm-2 col-form-label">驗證碼</label> -->
          </div>
        </div>
        <div class="row justify-content-center">
          <button type="submit" class="btn deeper-blue-btn col-5">登入</button>
          &nbsp;&nbsp;
          <button type="button" class="btn btn-body border-0 col-5 forgetpw">
            忘記密碼
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
const router = useRouter();

const { generateCaptcha, userLogin, userInfo, getMenu } = useUserStore();

const captchaUrl = ref({});
const getCaptcha = () => {
  user.captcha = "";
  generateCaptcha().then((res) => {
    captchaUrl.value = res;
  });
};
const user = reactive({
  userNo: "999999",
  userPw: "11111",
  captchaId: "",
  captcha: "",
});

const login = () => {
  userLogin(user)
    .then((res) => {
      if (!res.status) {
        alert(res.msg);
        throw new Exception();
      }
      user.userNo = "";
      user.userPw = "";
      getMenu();
      userInfo();
    })
    .then(() => {
      router.push("/main");
    })
    .catch((err) => {
      console.log(err);
      console.log("loggin failure");
    });
};

onMounted(() => {
  getCaptcha();
});
</script>

<style scoped>
.card-login {
  width: 20rem;
  border-radius: 5px;
}
@media all and (min-width: 320px) and (max-width: 991.98px) {
  .card-login {
    border-radius: 0px 5px 5px 5px;
  }
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
/* 忘記密碼 */
.forgetpw:hover {
  color: #0d6efd;
}
</style>
