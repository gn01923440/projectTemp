<template>
  <div class="row col-12">
    <h4>計畫書第一部份捌及第二部份至第七部份: (僅接受未加密PDF檔案)</h4>
    <div class="col-2">檔案上傳</div>
    <div class="col-3">
      <input type="file" class="form-control" @change="fileSelected" />
    </div>
    <button type="button" class="col-1 btn">送出</button>
  </div>
  <br />
  <div class="row col-12">
    <h4>第二部分之資iuzx系統處理作二規範: (僅接受未加密PDF檔案)</h4>
    <div class="col-2">檔案上傳</div>
    <div class="col-3">
      <input type="file" class="form-control" @change="fileSelected" />
    </div>
    <button type="button" class="col-1 btn">送出</button>
  </div>
  <br />
  <h3>計畫書</h3>
  <n-config-provider>
    檔案下載
    <n-data-table
      :columns="columns"
      :data="data"
      :pagination="false"
      :bordered="false"
      size="large"
    />
  </n-config-provider>
</template>

<script setup>
import { ref, h } from "vue";

import { NButton, NConfigProvider } from "naive-ui";

const data = ref([
  {
    type: "計畫書第二部分",
    name: "圖片.pdf",
  },
  {
    type: "完整版計畫書",
    name: "完整版計畫書",
  },
  {
    name: "GRB計畫摘要",
  },
  {
    type: "變更明細表",
    name: "計畫變更明細表",
  },
]);

const columns = [
  {
    key: "type",
    title: "類型",
  },
  {
    key: "name",
    title: "名稱",
  },
  {
    key: "actions",
    title: "作業",
    render(row) {
      return [
        h(
          NButton,
          {
            style: {
              marginRight: "16px",
            },
            type: "info",
            strong: true,
            size: "large",
            onClick: () => download(row),
          },
          { default: () => "下載" }
        ),
        h(
          NButton,
          {
            strong: true,
            // tertiary: true,
            size: "large",
            color: "red",
            onclick: () => merge(row),
          },
          { default: () => "重新合併" }
        ),
        h(
          NButton,
          {
            strong: true,
            // tertiary: true,
            size: "large",
            color: "red",
            onclick: () => del(row),
          },
          { default: () => "刪除" }
        ),
      ];
    },
  },
];
</script>

<style></style>
