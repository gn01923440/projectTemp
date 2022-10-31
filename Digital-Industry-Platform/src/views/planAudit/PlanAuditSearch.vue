<template>
  <div class="row col-12">
    <DataTable
      class="display table table-striped table-hover"
      :columns="columns"
      :data="data"
      :options="options"
      ref="table"
      width="100%"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import DataTable from "datatables.net-vue3";
import DataTableBs5 from "datatables.net-bs5";
import Select from "datatables.net-select";
import { language } from "@/assets/tableLanguage.js";
DataTable.use(Select);
DataTable.use(Select);
DataTable.use(Select);
DataTable.use(DataTableBs5);
let dt;

const data = ref([]);

const table = ref();

const options = {
  dom: "tip",

  select: true,

  language: language,

  pageLength: 25,
};
const columns = [
  {
    data: "planName",
    title: "計畫名稱",
    width: "",
  },
  {
    data: "auditType",
    title: "審查種類",
    width: "",
  },
  {
    data: "auditDept",
    title: "審查組室",
    width: "",
  },
  {
    data: "auditTime",
    title: "送審時間",
    width: "",
  },
  {
    data: "work",
    title: "作業",
    render: function (data, type, row) {
      return row.auditType === 1
        ? `<a href="../PlanAuditExp" type="button" class="btn">
                <span>審查</span>
            </a>
            <a href="../PlanAuditRecords" type="button" class="btn">
              <span>紀錄</span>
            </a>`
        : row.auditType === 2
        ? `<a href="../PlanAuditMidterm" type="button" class="btn">
                <span>審查</span>
            </a>`
        : row.auditType === 3
        ? `<a href="../PlanAuditProposal" type="button" class="btn">
                <span>審查</span>
            </a>`
        : `<a href="../PlanAuditAbroad" type="button" class="btn">
                <span>審查</span>
            </a>`;
    },
  },
];
data.value.push({
  planName: "經費",
  auditType: 1,
  auditDept: "123",
  auditTime: new Date(),
});
data.value.push({
  planName: "期中報告",
  auditType: 2,
  auditDept: "123",
  auditTime: new Date(),
});
data.value.push({
  planName: "計畫書",
  auditType: 3,
  auditDept: "123",
  auditTime: new Date(),
});
data.value.push({
  planName: "出國",
  auditType: 4,
  auditDept: "123",
  auditTime: new Date(),
});
</script>

<style></style>
