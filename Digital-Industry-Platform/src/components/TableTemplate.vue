<template>
  <button @click="add">Add new row</button><br />
  <button @click="update">Update selected rows</button><br />
  <button @click="remove">Delete selected rows</button>
  <div class="col-6">
    <n-radio-group v-model:value="value" name="radiogroup">
      <n-space>
        <n-radio
          v-for="song in songs"
          :key="song.value"
          :value="song.value"
          :label="song.label"
        />
      </n-space>
    </n-radio-group>
  </div>
  <div class="col-12">
    <n-space item-style="display: flex;" align="center">
      <n-checkbox v-model:checked="value"> 本計畫無此項目 </n-checkbox>
    </n-space>
  </div>
  <DataTable
    class="display"
    :columns="columns"
    :data="data"
    :options="{ select: true }"
    ref="table"
  >
  </DataTable>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import DataTable from "datatables.net-vue3";
import DataTableBs5 from "datatables.net-bs5";
import { getPokemon } from "/src/assets/pokemon.js";
import Select from "datatables.net-select";

DataTable.use(Select);
DataTable.use(DataTableBs5);

let counter = 0;
let dt;
const data = ref([]);
const table = ref();

getPokemon().then((res) => {
  data.value = res;
});

const columns = [
  {
    data: "name",
    title: "First",
  },
  {
    data: "url",
    title: "Second",
  },
  // {
  //   data: 'c',
  //   title: 'Third',
  // },
];
// { options : function() {
// 			const customBtn =
// 				`<div>
// 				<a class='mx-2px btn radius-1 border-2 btn-xs btn-brc-tp btn-light-secondary btn-h-lighter-success btn-a-lighter-success'>
// 					act
// 				</a>
// 			</div>`;
// 			return customBtn
// 		},
// 		title : "操作區",
// 		name : "Actions",
// 		orderable : false },

// Initial data
for (let i = 0; i < 5; i++) {
  add();
}

// Get a DataTables API reference
onMounted(function () {
  dt = table.value.dt();
});

// Add new rows - note how the data object in Vue is changed and the DataTable will reflect
// those changes, rather than using the DataTables API to manipulate the rows.
function add() {
  console.log("add");
  data.value.push({
    name: "add pokemon",
    url: "add url",
  });
}

// For each selected row just add an indicator to show that it's data has been updated
function update() {
  console.log("update");
  dt.rows({ selected: true }).every(function () {
    let row = this.data();
    row.name += "update";
    row.url += "update";
  });
}

// For each selected row find the data object in `data` array and remove it
function remove() {
  console.log("remove");
  dt.rows({ selected: true }).every(function () {
    let idx = data.value.indexOf(this.data());
    data.value.splice(idx, 1);
  });
}
const songs = ref(
  [
    {
      value: "female",
      label: "女",
    },
    {
      value: "male",
      label: "男",
    },
  ].map((s) => {
    s.value = s.value.toLowerCase();
    return s;
  })
);
</script>

<style>
@import "bootstrap";
@import "datatables.net-bs5";
</style>
