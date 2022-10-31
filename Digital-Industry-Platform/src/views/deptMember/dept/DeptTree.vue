<template>
  <div class="row">
    <button class="btn" type="button" @click="gotoback">
      <i class="fa-solid fa-file-signature"></i>新增
    </button>
    <button class="btn" type="button" @click="gotoback">
      <i class="fa-solid fa-file-signature"></i>修改 
    </button>
    <button class="btn" type="button" @click="gotoback">
      <i class="fa-solid fa-file-signature"></i>返回
    </button>
  </div>
  <div class="row">
    <n-data-table
      class="col-6"
      :columns="columns"
      :data="data"
      :cascade="false"
      allow-checking-not-loaded
      @load="onLoad"
    />
    <div class="col-6 row">
      <div class="col-12">
        <span class="form-floating">
          <radio>有</radio>
          <radio>否</radio>
          <label for="floatingSelect">組室</label>
        </span>
      </div>
      <div class="col-12">
        <span class="form-floating">
          <input
            type="text"
            class="form-control"
            placeholder="名稱 "
            aria-label="名稱 "
            value=""
          />
          <label for="floatingSelect">名稱 </label>
        </span>
      </div>
      <div class="col-12">
        <span class="form-floating">
          <input
            type="text"
            class="form-control"
            placeholder="簡稱 "
            aria-label="簡稱 "
            value=""
          />
          <label for="floatingSelect">簡稱 </label>
        </span>
      </div>
      <div class="col-12">
        <span class="form-floating">
          <input
            type="text"
            class="form-control"
            placeholder="描述 "
            aria-label="描述 "
            value=""
          />
          <label for="floatingSelect">描述 </label>
        </span>
      </div>
      <div class="col-12">
        <span class="form-floating">
          <input
            type="text"
            class="form-control"
            placeholder="備註 "
            aria-label="備註 "
            value=""
          />
          <label for="floatingSelect">備註 </label>
        </span>
      </div>
      <button class="btn" type="button" @click="gotoback">
        <i class="fa-solid fa-file-signature"></i>存檔 
      </button>
    </div>
  </div>
  >
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const columns = [{ type: "selection" }, { key: "example", title: "層級" }];
    const dataRef = ref([
      { key: "p1", example: "數位產業署", isLeaf: false },
      { key: "p2", example: "經濟部工業局", isLeaf: false },
    ]);
    return {
      columns,
      data: dataRef,
      onLoad(row) {
        return new Promise((resolve) => {
          setTimeout(() => {
            row.children = [
              { key: row.key + "-1", example: "數位服務組" },
              { key: row.key + "-1", example: "新聞跨域組" },
              { key: row.key + "-1", example: "平台經濟組" },
              { key: row.key + "-1", example: "通訊傳播組" },
              { key: row.key + "-1", example: "政策規劃組" },
            ];
            resolve();
          }, 1e3);
        });
      },
    };
  },
});
</script>
