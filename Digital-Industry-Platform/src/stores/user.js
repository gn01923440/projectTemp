import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
import req from "@/api/axios";

function statusMsg(status, msg) {
  return { status: status, msg: msg };
}
export const useUserStore = defineStore("storeUser", () => {
  const statusMsg = (status, msg) => {
    return { status: status, msg: msg };
  };
  const menuList = ref([]);
  const loginCaptchaUuid = ref("");
  const accessToken = ref("");
  const generateCaptcha = async () => {
    let uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
    loginCaptchaUuid.value = uuid;
    console.log(import.meta.env.VITE_BACKEND_HOST);
    let captchaUrl =
      import.meta.env.VITE_BACKEND_HOST + `/verifyCode/verifyPic/${uuid}`;
    return captchaUrl;
  };

  const userLogin = (user) => {
    // const userStore = useUserStore();
    user.captchaId = loginCaptchaUuid;
    const login = axios.create({ baseURL: import.meta.env.VITE_BACKEND_HOST });
    return login
      .post("/user/login", user)
      .then((r) => {
        localStorage.setItem("token", r.data.token);
        accessToken.value = r.data.token;
        return statusMsg(true, "");
      })
      .catch((error) => {
        let status = error.response.status;
        switch (status) {
          case 400:
            return statusMsg(false, "帳號/密碼錯誤");
          case 406:
            return statusMsg(false, "驗證碼過期/錯誤");
          case 500:
            return statusMsg(false, "驗證碼過期/錯誤");
          default:
            return statusMsg(false, "帳號/密碼錯誤");
        }
      });
  };

  const userInfo = () => {
    return req.post("/user/information").then((r) => {
      return r.data;
    });
  };

  const getMenu = async () => {
    const apiMenu = await req.get("/menu");
    console.log(apiMenu);
    menuList.value = apiMenu.data;
    sessionStorage.setItem("menuList", JSON.stringify(apiMenu.data));
    // menuList.value.forEach( menu => {
    //     console.log(menu.detail)
    //     menu.detail.forEach( subMenu => {
    //         for(const subMenu of menu.detail){
    //             console.log(subMenu.menuHref, subMenu.menuName)
    //             let menuPath = subMenu.menuHref.replace('/main/','');
    //             const menuComponent = `..${subMenu.menuHref.replace('main', 'components')}`
    //             console.log(menuPath)
    //             router.addRoute('BackendMain', { path: menuPath, component:() => menuComponent })
    //         }
    //     })
    // })
  };

  const getMenuStore = () => {
    console.log(menuList);
    if (menuList.value.length !== 0) return menuList;
    menuList.value = JSON.parse(sessionStorage.getItem("menuList"));
  };
  return {
    menuList,
    loginCaptchaUuid,
    generateCaptcha,
    userLogin,
    userInfo,
    getMenu,
    getMenuStore,
  };
});
