import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import Maska from "maska";
import naive from "naive-ui";
import router from "./router";
import "./style.css";

import VeeValidatePlugin from "./includes/validation";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/brands.css";
import "@fortawesome/fontawesome-free/css/solid.css";
import CKEditor from "@ckeditor/ckeditor5-vue";
import "bootstrap/dist/js/bootstrap.js";

import { useUserStore } from "./stores/user";

const pinia = createPinia();
const app = createApp(App);
app.use(Maska);
app.use(VeeValidatePlugin);
app.use(naive);
app.use(CKEditor);
app.use(router).use(pinia).mount("#app");

