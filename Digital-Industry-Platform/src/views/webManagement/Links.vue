<template>
  <div class="page-table">
    <div class="d-flex flex-column">
      <div>
        <n-button
          color="#bb2d3b"
          data-bs-toggle="modal"
          data-bs-target="#editModal"
          @click="resetEidt"
        >
          &emsp; 新增相關連結 &emsp;
        </n-button>
      </div>
      <n-data-table
        :single-line="false"
        :columns="columns"
        :data="data"
        :pagination="{ pageSize: 5 }"
      />
    </div>
  </div>
  <!-- Modal -->
  <vee-form
    class="form-group"
    style="text-align: left"
    @Submit="onSubmit"
    :validation-schema="validSchema"
  >
    <div class="d-flex justify-content-between p-5">
      <div
        class="modal fade"
        id="editModal"
        tabindex="-1"
        aria-labelledby="editModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editModalLabelLabel">修改相關連結</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="d-flex flex-column">
                <div style="margin-left: 2rem !important">
                  <div class="d-flex flex-column mb-4">
                    <div class="d-flex flex-row">
                      <label
                        for="linkTitle"
                        class="
                          d-flex
                          align-items-center
                          justify-content-end
                          form-lab
                          offset-1
                          me-2
                        "
                        >連結標題 :
                      </label>
                      <vee-field
                        type="text"
                        name="linkTitle"
                        class="form-control edit-field"
                        id="linkTitle"
                        v-model="submitParams.linkTitle"
                      />
                    </div>
                    <div class="d-flex flex-row">
                      <span class="form-lab offset-1 me-2"> </span>
                      <ErrorMessage
                        class="text-danger d-flex align-items-center ms-2"
                        name="linkTitle"
                      />
                    </div>
                  </div>
                  <div class="d-flex flex-column mb-4">
                    <div class="d-flex flex-row">
                      <label
                        for="linkUrl"
                        class="
                          d-flex
                          align-items-center
                          justify-content-end
                          form-lab
                          offset-1
                          me-2
                        "
                        >連結網址 :
                      </label>
                      <vee-field
                        type="text"
                        name="linkUrl"
                        class="form-control edit-field"
                        id="linkUrl"
                        v-model="submitParams.linkUrl"
                      />
                    </div>
                    <div class="d-flex flex-row">
                      <span class="form-lab offset-1 me-2"> </span>
                      <ErrorMessage
                        class="text-danger d-flex align-items-center ms-2"
                        name="linkUrl"
                      />
                    </div>
                  </div>
                  <div
                    class="d-flex flex-column mb-4"
                    v-if="!submitParams.alwaysValid"
                  >
                    <div class="d-flex flex-row">
                      <label
                        for="openDate"
                        class="
                          d-flex
                          align-items-center
                          justify-content-end
                          form-lab
                          offset-1
                          me-2
                        "
                        >開放日期 :
                      </label>
                      <vee-field
                        type="text"
                        name="openDate"
                        class="form-control edit-field"
                        id="openDate"
                        v-slot="{ field }"
                        v-model="submitParams.openDate"
                      >
                        <n-date-picker
                          :disabled="submitParams.alwaysValid"
                          v-bind="field"
                          v-model:value="submitParams.openDate"
                          placement="right-start"
                          type="date"
                      /></vee-field>
                    </div>
                    <div class="d-flex flex-row">
                      <span class="form-lab offset-1 me-2"> </span>
                      <ErrorMessage
                        class="text-danger d-flex align-items-center"
                        name="openDate"
                      />
                    </div>
                  </div>

                  <div
                    class="d-flex flex-column mb-4"
                    v-if="!submitParams.alwaysValid"
                  >
                    <div class="d-flex flex-row">
                      <label
                        for="closeDate"
                        class="
                          d-flex
                          align-items-center
                          justify-content-end
                          form-lab
                          offset-1
                          me-2
                        "
                        >關閉日期 :
                      </label>
                      <vee-field
                        name="closeDate"
                        class="form-control edit-field"
                        id="closeDate"
                        v-slot="{ field }"
                        v-model="submitParams.closeDate"
                      >
                        <n-date-picker
                          v-bind="field"
                          v-model:value="submitParams.closeDate"
                          placement="right-start"
                          type="date"
                        />
                      </vee-field>
                    </div>
                    <div class="d-flex flex-row">
                      <span class="form-lab offset-1 me-2"> </span>

                      <ErrorMessage
                        class="text-danger d-flex align-items-center ms-2"
                        name="closeDate"
                      />
                    </div>
                  </div>
                  <div class="d-flex flex-column mb-4">
                    <div class="d-flex flex-row">
                      <label
                        for="sort"
                        class="
                          d-flex
                          align-items-center
                          justify-content-end
                          form-lab
                          offset-1
                          me-2
                        "
                        >排序 :
                      </label>

                      <vee-field
                        type="text"
                        name="sort"
                        class="form-control edit-field"
                        id="sort"
                        v-model="submitParams.sort"
                      />
                    </div>
                    <div class="d-flex flex-row">
                      <span class="form-lab offset-1 me-2"> </span>
                      <ErrorMessage
                        class="text-danger d-flex align-items-center ms-2"
                        name="sort"
                      />
                    </div>
                  </div>
                  <div class="d-flex flex-row mb-4">
                    <label
                      for="alwaysValid"
                      class="
                        d-flex
                        align-items-center
                        justify-content-end
                        form-lab
                        offset-1
                        me-2
                      "
                      >永久有效 :
                    </label>
                    <n-checkbox
                      :checked="submitParams.alwaysValid"
                      size="medium"
                      @update:checked="validCheck"
                    />
                  </div>

                  <div class="d-flex flex-row mb-4">
                    <label
                      for="alwaysValid"
                      class="
                        d-flex
                        justify-content-end
                        form-lab
                        offset-1
                        me-2
                        mt-1
                      "
                      >ICON :
                    </label>
                    <n-upload
                      :max="2"
                      list-type="image"
                      :file-list="fileList"
                      @before-upload="imgBeforeUpload"
                    >
                      <n-button>選擇檔案</n-button>
                      <span> 180px * 56px</span>
                    </n-upload>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div class="modal-footer">
              <n-button type="success" attr-type="submit">
                &emsp; 儲存 &emsp;
              </n-button>
              <n-button type="error" data-bs-dismiss="modal" aria-label="Close">
                &emsp; 返回 &emsp;
              </n-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </vee-form>
</template>

<script setup>
import { reactive, onMounted, ref, h, computed } from "vue";
import { NButton, useMessage } from "naive-ui";
import { getImgData } from "@/common/function";
const message = useMessage();
const messageConfig = {
  closable: true,
  duration: 3000,
};
//欄位檢核規則
const validSchema = computed(() => {
  if (submitParams.value.alwaysValid) {
    return {
      linkTitle: "required",
      linkUrl: "required",
      sort: "required",
    };
  } else {
    return {
      linkTitle: "required",
      linkUrl: "required",
      openDate: "required",
      closeDate: "required",
      sort: "required",
    };
  }
});

//送出表單屬性
const submitParams = ref({
  id: "",
  linkTitle: "",
  linkUrl: "",
  openDate: Date.now(),
  closeDate: Date.now(),
  sort: "",
  alwaysValid: false,
  icon: "",
});
//table 資料
let data = ref();
//圖片url
let imgPreviewUrl = ref("");

let fileList = ref([
  {
    id: "",
    name: "",
    status: "",
    url: "",
  },
]);
//table config
const columns = reactive([
  {
    title: "相關連結資料",
    key: "tableTitle",
    className: "table-title",
    children: [
      {
        title: "icon",
        key: "icon",
        width: "10%",
        render: (rowData, rowIndex) => {
          return h("img", {
            src: rowData.icon,
            style: { width: "50px", height: "50px" },
          });
        },
      },
      {
        title: "連結標題",
        key: "linkTitle",
        minWidth: "12rem",
        render: (rowData, rowIndex) => {
          return h(
            "a",
            {
              style: { width: "50px", height: "50px" },
              href: rowData.linkUrl,
              target: "_blank",
            },
            { default: () => rowData.linkTitle }
          );
        },
      },
      {
        title: "開放日期",
        key: "openDate",
        width: "10%",
        minWidth: "6rem",
      },
      {
        title: "關閉日期",
        key: "closeDate",
        width: "10%",
        minWidth: "6rem",
      },
      {
        title: "排序",
        key: "sort",
        width: "7%",
        minWidth: "6rem",
        sorter: "default",
      },
      {
        title: "作業",
        key: "work",
        width: "10%",
        minWidth: "6rem",
        render(row) {
          return h("div", "", [
            h(
              NButton,
              {
                type: "success",
                strong: true,
                secondary: true,
                size: "small",
                class: "me-2 mb-1",
                "data-bs-toggle": "modal",
                "data-bs-target": "#editModal",
                onClick: () => editROW(row),
              },
              { default: () => "編輯" }
            ),
            h(
              NButton,
              {
                type: "error",
                strong: true,
                secondary: true,
                size: "small",
                onClick: () => deleteROW(row),
              },
              { default: () => "刪除" }
            ),
          ]);
        },
      },
    ],
  },
]);
//永久有效判斷
const validCheck = (checked) => {
  submitParams.value.alwaysValid = checked;
  if (checked) {
    submitParams.value.openDate = null;
    submitParams.value.closeDate = null;
  }
};
//編輯按鈕
const editROW = (row) => {
  submitParams.value.id = row.id;
  submitParams.value.linkTitle = row.linkTitle;
  submitParams.value.linkUrl = row.linkUrl;
  submitParams.value.openDate = Date.parse(row.openDate);
  submitParams.value.closeDate = Date.parse(row.closeDate);
  submitParams.value.sort = row.sort;
  submitParams.value.icon = row.icon;
};
//刪除按鈕
const deleteROW = (row) => {
  alert(`delete id  ${row.id}`);
};
//重製編輯表單
const resetEidt = () => {
  submitParams.value.id = "";
  submitParams.value.linkTitle = "";
  submitParams.value.linkUrl = "";
  submitParams.value.openDate = Date.now();
  submitParams.value.closeDate = Date.now();
  submitParams.value.sort = "";
  submitParams.value.icon = "";
  fileList = ref([
    {
      id: "",
      name: "",
      status: "",
      url: "",
    },
  ]);
};
const image = ref(null);
//上傳檔案
const imgBeforeUpload = async (data) => {
  const imgData = await getImgData(data.file.file);
  const imgType = data.file.file?.type;
  if (imgType !== "image/png" && imgType !== "image/jpeg") {
    message.error("僅能上傳png或jpeg格式", messageConfig);
    return false;
  } else if (imgData.width > 1800 || imgData.height > 560) {
    message.error(
      `此次匯入圖片 寬:"${imgData.width}" 高:"${imgData.height}" 圖檔大小限制 寬:180 高:56`,
      messageConfig
    );
    return false;
  } else {
    submitParams.value.icon = imgData.base64;
    fileList.value = [
      {
        id: data.file.file.name,
        name: data.file.file.name,
        status: "finished",
        url: imgData.base64,
      },
    ];
  }
  return true;
};

//初始化
onMounted(() => {
  data.value = [
    {
      icon: "data:image/png;base64,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",
      linkTitle: "img-1",
      linkUrl: "https://news.google.com/",
      openDate: "2022-01-01",
      closeDate: "2022-02-02",
      sort: "3",
      id: "3",
    },
    {
      icon: "data:image/png;base64,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",
      linkTitle: "img-2",
      linkUrl: "https://news.google.com/",
      openDate: "2022-01-01",
      closeDate: "2022-02-02",
      sort: "1",
      id: "1",
    },
    {
      icon: "data:image/jpeg;base64,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",
      linkTitle: "img-3",
      linkUrl: "https://news.google.com/",
      openDate: "2022-01-01",
      closeDate: "2022-02-02",
      sort: "2",
      id: "2",
    },
    {
      icon: "data:image/jpeg;base64,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",
      linkTitle: "img-4",
      linkUrl: "https://news.google.com/",
      openDate: "2022-01-01",
      closeDate: "2022-02-02",
      sort: "4",
      id: "4",
    },
    {
      icon: "data:image/jpeg;base64,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",
      linkTitle: "img-5",
      linkUrl: "https://news.google.com/",
      openDate: "2022-01-01",
      closeDate: "2022-02-02",
      sort: "8",
      id: "55",
    },
  ];
});
//送出表單
const onSubmit = (values) => {
  console.log(submitParams);
};
</script>

<style scoped >
:deep(.table-title) {
  background-color: rgb(223, 166, 166);
  padding: 0.5rem;
}
.page-table {
  padding: 1rem;
  margin-top: 1rem;
}
.modal-dialog {
  max-width: 60%;
  min-width: 600px;
}
.edit-field {
  width: 16rem;
}
.form-lab {
  min-width: 6rem;
}

:deep(.n-upload-file-list
    .n-upload-file.n-upload-file--image-type
    .n-upload-file-info
    .n-upload-file-info__thumbnail) {
  height: 8rem;
  width: 8rem;
}
</style>
