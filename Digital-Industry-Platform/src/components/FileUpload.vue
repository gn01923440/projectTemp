<template>
  <button
    type="button"
    class="btn me-2"
    value=""
    data-bs-toggle="modal"
    :data-bs-target="target"
    :class="btn_class"
  >
    <slot name="uploadBtn"></slot>
  </button>

  <div
    ref="modalRef"
    class="modal fade"
    :id="targetId"
    tabindex="10"
    aria-labelledby="testModalLabel"
    aria-hidden="true"
  >
    <form @submit.prevent="handleSave">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="testModalLabel">
              <slot name="uploadTitle"></slot>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <Select
            class="mt-2"
            v-if="hasOpt"
            :optLabel="optLabel"
            :optList="optList"
            v-model:optSelected="optSelected"
          ></Select>
          <Select
            class="mt-2"
            v-if="hasList"
            :optList="detailList"
            :optLabel="detailLabel"
            v-model:optSelected="dtSelected"
          ></Select>
          <!-- <SelectInput
            v-if="hasList"
            :detailList="detailList"
            :detailLabel="detailLabel"
            v-model:dtSelected="dtSelected"
          ></SelectInput> -->
          <div class="modal-body">
            <div class="input-group">
              <input
                type="file"
                class="form-control"
                id="inputGroupFile04"
                aria-describedby="inputGroupFileAddon04"
                aria-label="Upload"
                :accept="uploadType"
                @change="uploadFile($event)"
                ref="file"
              />
            </div>
          </div>
          <div class="modal-footer justify-content-center">
            <button type="submit" class="btn btn-warning text-white">
              儲存
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              取消
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import _ from "lodash";
import SelectInput from "./SelectInput.vue";
import Select from "./Select.vue";

const props = defineProps({
  btn_class: String,
  uploadType: String,
  target: String,
  detailList: Array,
  detailLabel: String,
  optLabel: String,
  optList: Array,
});
const emit = defineEmits(["saveFile"]);
// modal toggle parameters
const target = ref(`#${props.target}Modal`);
const targetId = ref(`${props.target}Modal`);
// upload restrictions
const uploadType = props.uploadType;
// detailList and label show
const detailList = props.detailList;
const detailLabel = props.detailLabel;
const hasList = detailLabel != null;
// optList and label show
const optLabel = props.optLabel;
const optList = props.optList;
const hasOpt = optLabel != null;

// submit obj
const optSelected = ref("");
const dtSelected = ref("");
const fileUploaded = ref(null);

const uploadFile = (e) => {
  fileUploaded.value = e.target.files[0];
};

const handleSave = () => {
  if (fileUploaded.value === null) {
    alert("請選擇檔案");
    return;
  }
  if (
    !_.isEqual(uploadType, ".xlsx") &&
    (_.isEmpty(optSelected.value) || _.isEmpty(dtSelected.value))
  ) {
    alert("請輸入完整條件");
    return;
  }
  emit("saveFile", { optSelected, dtSelected, fileUploaded });
};
</script>
