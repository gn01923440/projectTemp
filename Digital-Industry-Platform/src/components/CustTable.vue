<template>
  <div>當前頁面: {{ params.currPage }}</div>
  <div>總筆數: {{ params.ttlCount }}</div>
  <div class="row">
    <table>
      <tr>
        <th v-for="(col, index) in columns" :data="col.data">
          {{ col.title }}
        </th>
      </tr>
      <tr v-for="(field, index) in data" :key="field">
        <td v-for="(col, index) in columns" :key="col">
          <template v-if="col.data === 'work'"
            ><div
              v-html="col.action"
              @click.prevent="readRow(field, col.toPage)"
            ></div
          ></template>
          <template v-else>
            {{ field[col.data] }}
          </template>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import router from "../router";
const props = defineProps({
  columns: Array,
  data: Array,
  params: Object,
});

const readRow = (field, toPage) => {
  console.log(field);
  console.log(toPage);
  router.push(toPage);
};
</script>

<style></style>
