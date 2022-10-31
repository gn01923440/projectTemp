<template>
  <div class="col-2 form-floating">
    <vee-field
      as="select"
      name="ver"
      class="form-control"
      id="floatingInputGrid"
    >
      <option value="1">V1</option>
      <option value="2">V2</option>
      <option value="3">V3</option>
      <option value="4">V4</option>
    </vee-field>
    <label for="floatingInputGrid">計價方式</label>
    <ErrorMessage class="text-danger" name="ver" />
  </div>
  <div class="row">
    <button class="btn" type="button" @click="gotoback">
      <i class="fa-solid fa-file-signature"></i>新增
    </button>
    <button class="btn" type="button" @click="gotoback">
      <i class="fa-solid fa-file-signature"></i>修改
    </button>
    <button class="btn" type="button" @click="gotoback">
      <i class="fa-solid fa-file-signature"></i>存檔
    </button>
  </div>
  <div class="row">
    <n-data-table :key="(row) => row.key" :columns="columns" :data="data" />
  </div>
</template>

<script setup>
import { h, ref, defineComponent, nextTick } from "vue";
import { NInput } from "naive-ui";
const columns = [
  { type: "selection" },
  {
    key: "example",
    title: "層級",
    render(row, index) {
      return h(ShowOrEdit, {
        value: row.example,
        onUpdateValue(v) {
          data.value[index].example = v;
        },
      });
    },
  },
  {
    key: "name",
    title: "一級科目",
    render(row, index) {
      return h(ShowOrEdit, {
        value: row.name,
        onUpdateValue(v) {
          data.value[index].name = v;
        },
      });
    },
  },
  {
    key: "",
    title: "年度",
  },
  {
    key: "",
    title: "備註",
  },
  {
    key: "order",
    title: "排序",
    render(row, index) {
      return h(ShowOrEdit, {
        value: row.order,
        onUpdateValue(v) {
          data.value[index].order = v;
        },
      });
    },
  },
];
const data = ref([
  {
    key: "p1",
    example: "人事費",
    isLeaf: false,
    name: "其他直接費用",
    order: "1",
  },
  {
    key: "p2",
    example: "旅運費",
    isLeaf: false,
    name: "其他直接費用",
    order: "1",
  },
  {
    key: "p2",
    example: "專任研究人員費用",
    isLeaf: false,
    name: "直接薪資",
    order: "2",
  },
]);
</script>

<script>
const ShowOrEdit = defineComponent({
  props: {
    value: [String, Number],
    onUpdateValue: [Function, Array],
  },
  setup(props) {
    const isEdit = ref(false);
    const inputRef = ref(null);
    const inputValue = ref(props.value);
    function handleOnClick() {
      isEdit.value = true;
      nextTick(() => {
        inputRef.value.focus();
      });
    }
    function handleChange() {
      props.onUpdateValue(inputValue.value);
      isEdit.value = false;
    }
    return () =>
      h(
        "div",
        {
          onClick: handleOnClick,
        },
        isEdit.value
          ? h(NInput, {
              ref: inputRef,
              value: inputValue.value,
              onUpdateValue: (v) => {
                inputValue.value = v;
              },
              onChange: handleChange,
              onBlur: handleChange,
            })
          : props.value
      );
  },
});
</script>

<style></style>
