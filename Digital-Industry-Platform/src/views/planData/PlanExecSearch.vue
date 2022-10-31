<template>
  <div class="row px-3">
    <div class="col-12 p-5">
      <h2
        class="text-title border-start border-4 border-secondary rounded-start px-3 py-3"
      >
        計畫執行管理
      </h2>
    </div>
    <!-- <QueryInputs :queryParams="queryParams" /> -->
    <div class="col-2">
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingInputGrid"
          placeholder="name@example.com"
          value=""
        />
        <label for="floatingInputGrid"
          ><span class="text-danger">*</span>年度</label
        >
      </div>
    </div>

    <div class="col-2">
      <div class="form-floating">
        <select
          class="form-select"
          id="floatingSelectGrid"
          aria-label="Floating label select example"
        >
          <option></option>
          <option value="1">One</option>
        </select>
        <label for="floatingSelectGrid">組室</label>
      </div>
    </div>
    <div class="col-3">
      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="floatingInputGrid"
          placeholder="name@example.com"
          value=""
        />
        <label for="floatingInputGrid">契約編號</label>
      </div>
    </div>
    <div class="col-3">
      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="floatingInputGrid"
          placeholder="name@example.com"
          value=""
        />
        <label for="floatingInputGrid">計畫名稱</label>
      </div>
    </div>
    <div class="col-md">
      <button type="button" class="btn btn-primary mb-2" value="">
        <span><i class="fas fa-search"></i></span>
        <tips msg="查詢" /></button
      >&nbsp;
      <button type="button" class="btn btn-secondary mb-2" value="">
        <span><i class="fas fa-stamp"></i></span>
        <tips msg="清空" />
      </button>
    </div>

    <div class="row">
      <n-data-table :columns="columns" :data="data"></n-data-table>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive, h } from "vue";
import { NButton } from "naive-ui";
import router from "@/router";

const data = ref([]);
const columns = [
  {
    key: "ids",
    title: "",
  },
  {
    key: "fd1",
    title: "年度",
  },
  {
    key: "fd2",
    title: "契約編號",
  },
  {
    key: "fd3",
    title: "計畫名稱",
  },
  {
    key: "fd4",
    title: "執行期間起",
  },
  {
    key: "fd5",
    title: "執行期間迄",
  },
  {
    title: "作業",
    key: "actions",
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
            onClick: () => redirect(row),
          },
          {
            default: () =>
              h("span", [h("i", { class: "fa-solid fa-eye" }), "執行管理"]),
          }
        ),
      ];
    },
  },
];

const redirect = (row) => {
  router.push({ name: "PlanExecDetail" });
};
// Initial data
for (let i = 0; i < 5; i++) {
  add(i);
}

function add(numno) {
  console.log(numno);
  /*
    data.value.push({
        name: 'add pokemon',
        url: 'add url'
    })*/

  data.value.push({
    ids: numno + 1,
    fd1: "111",
    fd2: "11100101101",
    fd3: "衛星系統研析與系統供應鏈發展前導計畫",
    fd4: "2022-09-01",
    fd5: "2023-03-31",
  });
}
</script>

<style></style>
