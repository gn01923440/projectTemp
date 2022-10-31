<template>
  <div class="d-flex flex-column">
    <div class="d-flex flex-row">
      <div class="d-flex align-items-center justify-content-end page-title">
        首頁 Banner :
      </div>
      <div class="d-flex flex-column" style="flex-grow: 1">
        <input type="file" class="p-2" @change="fileSelected" />
        <span class="p-2">圖檔大小限制 寬:1060px 高:128px。</span>
      </div>
    </div>
    <div class="d-flex flex-row mb-3">
      <div class="d-flex align-items-center justify-content-end page-title">
        圖檔 :
      </div>
      <div class="d-flex">
        <img v-if="image" :src="image" width="1060" height="128" />
      </div>
    </div>
    <div class="postion-submit">
      <button v-if="image" class="btn btn-submit" type="button" @click="upload">
        送出
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const image = ref(null);

const fileSelected = (e) => {
  const file = e.target.files.item(0);
    console.log(file)
  const reader = new FileReader();
  reader.addEventListener("load", imageLoaded);
  reader.readAsDataURL(file);
};

const imageLoaded = (e) => {
  let file = e.target.result;
  let imageCheck = new Image();

  imageCheck.addEventListener("load", function () {
    let width = imageCheck.width;
    let height = imageCheck.height;
    if (width <= 1060 && height <= 128) {
      image.value = file;
    } else {
      return alert(
        `此次匯入圖片 寬:"${width}" 高:"${height}" 圖檔大小限制 寬:1060px 高:128px。`
      );
    }
  });
  imageCheck.src = file;
};

const upload = () => {
  // 用base64字串的方式上傳
  axios.post("/upload", { image: this.image });
  // 用FormData這種非字串的方式上傳
  //const form = new formData();
  //form.append(this.file, this.file.name)
};
</script>

<style scoped>
.btn-submit {
  --bs-btn-color: #fff;
  --bs-btn-bg: #dc3545;
  --bs-btn-border-color: #dc3545;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #bb2d3b;
  --bs-btn-hover-border-color: #b02a37;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #b02a37;
  --bs-btn-active-border-color: #a52834;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #dc3545;
  --bs-btn-disabled-border-color: #dc3545;
  width: 70px;
}
.postion-submit {
  padding-left: clamp(100px, 50%, 600px);
}
.page-title {
  min-width: 8rem;
  width: 8rem;
  margin: 0.5rem;
}
</style>
