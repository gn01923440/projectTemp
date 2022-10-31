import { defineStore } from "pinia";
import { ref, reactive } from "vue";

import req from "@/api/axios";
import router from "@/router";

export const useTenderStore = defineStore("storeTenderList", () => {
  const tenderList = ref([]); // 標案清單
  const currentPage = ref(1); // 當前頁
  const totalPage = ref(1); // 總頁
  const pages = ref(25); // 頁面筆數
  const tenderDetail = ref({});
  /* 標案查詢 */
  const queryForTender = async (tenderListParams) => {
    console.log(tenderListParams);
    try {
      const res = await req.post("/tenderData/search", tenderListParams);
      tenderList.value = res.data.lists;
      currentPage.value = res.data.currentPage;
      totalPage.value = res.data.totalPage;
    } catch (error) {
      alert("查詢失敗");
      console.log(error);
    }
  };
  /* 新增標案 */
  const createTender = async () => {};
  /* 修改頁面 */
  const editTender = async (row) => {
    try {
      const res = await req.get("/tenderData/one", {
        params: { id: row.id },
      });
      tenderDetail.value = res.data;
      router.push({ name: "TenderPlanListDetail" });
    } catch (error) {
      console.log(error);
    }
  };
  return {
    tenderList,
    currentPage,
    totalPage,
    pages,
    queryForTender,
    createTender,
    editTender,
    tenderDetail,
  };
});
