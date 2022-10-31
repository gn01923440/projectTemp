<template>
  <div class="row px-5 py-3">
    <div class="row col-12 mb-3 pt-3">
      <h5 class="text-secondary border-bottom border-3 border-secondary">
        預期工作進度 
      </h5>
    </div>
    <n-data-table :key="(row) => row.key" :columns="columns" :data="data" />
    <br /><br />
    <div class="row col-12 mb-3 pt-3">
      <h5 class="text-secondary border-bottom border-3 border-secondary">
        預期撥款進度
      </h5>
    </div>
    <div class="row col-12 mb-3  justify-content-start">
      <button type="button" class="btn btn-warning  " style="width: 6rem;">修改</button>&nbsp;&nbsp;
      <button type="button" class="btn btn-secondary col-1"  style="width: 6rem;">存檔</button>
    </div>
    <n-data-table :key="(row) => row.key" :columns="columns" :data="data2" />

  </div>
</template>

<script>
import { h, defineComponent, ref, nextTick } from "vue";
import { NInput } from "naive-ui";

const createData = () => [
  {
    key: 0,
    year: "2022",
    target: "工作進度",
    Jan: "",
    Feb: "",
    Mar: "",
    Apr: "",
    May: "3.8",
    Jun: "3.85",
    Jul: "9.78",
    Aug: "10.01",
    Sep: "13.23",
    Oct: "12.36",
    Nov: "12.54",
    Dec: "10.69",
  },
  {
    key: 1,
    year: "2023",
    target: "工作進度",
    Jan: "8.37",
    Feb: "7.91",
    Mar: "7.46",
    Apr: "",
    May: "",
    Jun: "",
    Jul: "",
    Aug: "",
    Sep: "",
    Oct: "",
    Nov: "",
    Dec: "",
  },
  {
    key: "",
    year: "",
    target: "",
    Jan: "",
    Feb: "",
    Mar: "",
    Apr: "",
    May: "",
    Jun: "",
    Jul: "",
    Aug: "",
    Sep: "",
    Oct: "",
    Nov: "",
    Dec: "",
  },
];

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
const data = ref(createData());
export default defineComponent({
  setup() {
    return {
      data2,
      data,
      columns: [
        {
          title: "年度",
          key: "year",
          width: 150,
          colSpan: (rowData, rowIndex) => (rowIndex === 2 ? 14 : 1),
        },
        {
          title: "管制目標",
          key: "target",
          width: 200,
          colSpan: (rowData, rowIndex) => (rowIndex === 2 ? 14 : 1),
        },
        {
          title: "01月",
          key: "Jan",
          render(row, index) {
            return h(NInput, {
              value: row.Jan,
              placeholder: "",
              onUpdateValue(v) {
                data.value[index].Jan = v;
              },
            });
          },
        },
        {
          title: "02月",
          key: "Feb",
          render(row, index) {
            return h(NInput, {
              value: row.Feb,
              placeholder: "",
              onUpdateValue(v) {
                data.value[index].Feb = v;
              },
            });
          },
        },
        {
          title: "03月",
          key: "Mar",
          render(row, index) {
            return h(NInput, {
              value: row.Mar,
              placeholder: "",
              onUpdateValue(v) {
                data.value[index].Mar = v;
              },
            });
          },
        },
        {
          title: "04月",
          key: "Apr",
          render(row, index) {
            return h(NInput, {
              value: row.Apr,
              placeholder: "",
              onUpdateValue(v) {
                data.value[index].Apr = v;
              },
            });
          },
        },
        {
          title: "05月",
          key: "May",
          render(row, index) {
            return h(NInput, {
              value: row.May,
              placeholder: "",
              onUpdateValue(v) {
                data.value[index].May = v;
              },
            });
          },
        },
        {
          title: "06月",
          key: "Jun",
          render(row, index) {
            return h(NInput, {
              value: row.Jun,
              placeholder: "",
              onUpdateValue(v) {
                data.value[index].Jun = v;
              },
            });
          },
        },
        {
          title: "07月",
          key: "Jul",
          render(row, index) {
            return h(NInput, {
              value: row.Jul,
              placeholder: "",
              onUpdateValue(v) {
                data.value[index].Jul = v;
              },
            });
          },
        },
        {
          title: "08月",
          key: "Aug",
          render(row, index) {
            return h(NInput, {
              value: row.Aug,
              placeholder: "",
              onUpdateValue(v) {
                data.value[index].Aug = v;
              },
            });
          },
        },
        {
          title: "09月",
          key: "Sep",
          render(row, index) {
            return h(NInput, {
              value: row.Sep,
              placeholder: "",
              onUpdateValue(v) {
                data.value[index].Sep = v;
              },
            });
          },
        },
        {
          title: "10月",
          key: "Oct",
          render(row, index) {
            return h(NInput, {
              value: row.Oct,
              placeholder: "",
              onUpdateValue(v) {
                data.value[index].Oct = v;
              },
            });
          },
        },
        {
          title: "11月",
          key: "Nov",
          render(row, index) {
            return h(NInput, {
              value: row.Nov,
              placeholder: "",
              onUpdateValue(v) {
                data.value[index].Nov = v;
              },
            });
          },
        },
        {
          title: "12月",
          key: "Dec",
          render(row, index) {
            return h(NInput, {
              value: row.Dec,
              placeholder: "",
              onUpdateValue(v) {
                data.value[index].Dec = v;
              },
            });
          },
        },
      ],
    };
  },
});

data.value.push({
  key: 1,
  year: "2022",
  target: "工作累積進度",
  Jan: "8.37",
  Feb: "7.91",
  Mar: "7.46",
  Apr: "",
  May: "",
  Jun: "",
  Jul: "",
  Aug: "",
  Sep: "",
  Oct: "",
  Nov: "",
  Dec: "",
});
data.value.push({
  key: 1,
  year: "2023",
  target: "工作累積進度",
  Jan: "8.37",
  Feb: "7.91",
  Mar: "7.46",
  Apr: "",
  May: "",
  Jun: "",
  Jul: "",
  Aug: "",
  Sep: "",
  Oct: "",
  Nov: "",
  Dec: "",
});
const data2 = ref([
  {
    key: 0,
    year: "2022",
    target: "撥款進度",
    Jan: "",
    Feb: "",
    Mar: "",
    Apr: "",
    May: "",
    Jun: "5",
    Jul: "9",
    Aug: "1",
    Sep: "13.23",
    Oct: "12.36",
    Nov: "12.54",
    Dec: "10.69",
  },
  {
    key: 1,
    year: "2023",
    target: "撥款進度",
    Jan: "8.37",
    Feb: "7.91",
    Mar: "7.46",
    Apr: "0",
    May: "0",
    Jun: "0",
    Jul: "0",
    Aug: "0",
    Sep: "",
    Oct: "",
    Nov: "",
    Dec: "",
  },
  {
    key: "",
    year: "",
    target: "",
    Jan: "",
    Feb: "",
    Mar: "",
    Apr: "",
    May: "",
    Jun: "",
    Jul: "",
    Aug: "",
    Sep: "",
    Oct: "",
    Nov: "",
    Dec: "",
  },
  {
    key: 0,
    year: "2022",
    target: "撥款累計進度",
    Jan: "",
    Feb: "",
    Mar: "",
    Apr: "",
    May: "",
    Jun: "5",
    Jul: "9",
    Aug: "1",
    Sep: "13.23",
    Oct: "12.36",
    Nov: "12.54",
    Dec: "10.69",
  },
  {
    key: 1,
    year: "2023",
    target: "撥款累計進度",
    Jan: "8.37",
    Feb: "7.91",
    Mar: "7.46",
    Apr: "",
    May: "",
    Jun: "",
    Jul: "",
    Aug: "",
    Sep: "",
    Oct: "",
    Nov: "",
    Dec: "",
  },
]);
</script>

<style></style>
