<template>
  <div class="col-6">
    <span class="form-floating">
      <input
        type="text"
        class="form-control"
        placeholder="類型 "
        aria-label="類型 "
        value=""
      />
      <label for="floatingSelect">信件類型</label>
    </span>
  </div>
  <div class="col-6">
    <span class="form-floating">
      <input
        type="text"
        class="form-control"
        placeholder="類型 "
        aria-label="類型 "
        value=""
      />
      <label for="floatingSelect">主旨</label>
    </span>
  </div>
  信件內容
  <div>
    <ckeditor
      :editor="editor"
      v-model="editorData"
      :config="editorConfig"
    ></ckeditor>
  </div>
  <div class="row">
    <button class="btn" type="button" @click="gotoback">
      <i class="fa-solid fa-file-signature"></i>存檔 
    </button>
    <button class="btn" type="button" @click="gotoback">
      <i class="fa-solid fa-file-signature"></i>返回 
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const editor = ClassicEditor;
const editorData = ref("<p>test content</p>");
const editorConfig = ref(null);
</script>

<style scoped>
:deep(.ck .ck-content) {
  height: 200px;
}
</style>
