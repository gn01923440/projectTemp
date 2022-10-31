import { defineStore } from "pinia";
import { ref, reactive, computed } from "vue";

import req from "@/api/axios";
import router from "@/router";

export const useCuttingStore = defineStore("storeCutting", () => {
  const cuttingList = ref([]); // 切割清單
  const currentPage = ref(1); // 當前頁
  const totalPage = ref(1); // 總頁
  const pages = ref(25); // 頁面筆數
  const downloadUrl = ref(""); // 檔案匯出url
  const valuations = ref([]); // 採購下拉選單

  /* 檔案上傳xlsx */
  const uploadExcel = async (fileObj) => {
    let formData = new FormData();
    formData.append("file", fileObj.fileUploaded.value);
    try {
      const upload = await req.post("/plancostcuttingData/upload", formData, {
        params: { userNo: "testUser" },
      });
      alert("上傳成功");
    } catch (error) {
      console.log(error);
      let status = error.response.status;
      if (status === 500) {
        alert("請確認上傳檔案格式");
        return;
      }
      alert("上傳失敗，請稍後再試");
    }
  };
  /* 檔案匯出xlsx */
  const createDownloadUrl = async (downLoadParams) => {
    const res = await req.post(
      "/plancostcuttingData/exportXls",
      downLoadParams
    );
    const fileDownloadName = res.data;
    downloadUrl.value =
      import.meta.env.VITE_BACKEND_HOST +
      `/file/download/excel?fileName=${fileDownloadName}`;
  };
  /* 切割查詢 */
  const queryForCutting = async (queryCuttingParams) => {
    console.log(queryCuttingParams);
    try {
      const res = await req.post(
        "/plancostcuttingData/search",
        queryCuttingParams
      );
      cuttingList.value = res.data.lists;
      currentPage.value = res.data.currentPage;
      totalPage.value = res.data.totalPage;
    } catch (error) {
      alert("查詢失敗");
      console.log(error);
    }
  };
  /* 切割參數初始化 */
  const initCuttingDetail = () => ({
    id: null,
    year: null,
    groupCode: null,
    groupCodeName: null,
    name: null,
    planId: null,
    planName: null,
    tenderId: null,
    tenderChname: null,
    valuationCode: null,
    valuationCodeName: null,
    memo: null,
    approveAgentCurrent: null,
    approveAgentB2current: null,
    approveAgentCapital: null,
    approveGrantCurrent: null,
    approveGrantCurrentc2current: null,
    approveGrantCapital: null,
    approveOperatingExpense: null,
    approveGrantFirm: null,
    approveGrantGroup: null,
    approveGrantStudent: null,
    approveGrantBonus: null,
    approveGrantNongroup: null,
    approveGrantIndividual: null,
    legalAgentCurrent: null,
    legalAgentB2current: null,
    legalAgentCapital: null,
    legalGrantCurrent: null,
    legalGrantCurrentc2current: null,
    legalGrantCapital: null,
    legalOperatingExpense: null,
    legalGrantFirm: null,
    legalGrantGroup: null,
    legalGrantStudent: null,
    legalGrantBonus: null,
    legalGrantNongroup: null,
    legalGrantIndividual: null,
  });
  /* 切割初始參數 */
  const cuttingDetail = ref({
    id: null,
    year: null,
    groupCode: null,
    groupCodeName: null,
    name: null,
    planId: null,
    planName: null,
    tenderId: null,
    tenderChname: null,
    valuationCode: null,
    valuationCodeName: null,
    memo: null,
    approveAgentCurrent: null,
    approveAgentB2current: null,
    approveAgentCapital: null,
    approveGrantCurrent: null,
    approveGrantCurrentc2current: null,
    approveGrantCapital: null,
    approveOperatingExpense: null,
    approveGrantFirm: null,
    approveGrantGroup: null,
    approveGrantStudent: null,
    approveGrantBonus: null,
    approveGrantNongroup: null,
    approveGrantIndividual: null,
    legalAgentCurrent: null,
    legalAgentB2current: null,
    legalAgentCapital: null,
    legalGrantCurrent: null,
    legalGrantCurrentc2current: null,
    legalGrantCapital: null,
    legalOperatingExpense: null,
    legalGrantFirm: null,
    legalGrantGroup: null,
    legalGrantStudent: null,
    legalGrantBonus: null,
    legalGrantNongroup: null,
    legalGrantIndividual: null,
  });
  /* 儲存 */
  const saveCutting = async (cuttingDetail) => {
    console.log(cuttingDetail);
    console.log(isEdit);
    try {
      if (isEdit.value) {
        const res = await req.post(
          "/plancostcuttingData/update",
          cuttingDetail
        );
      } else {
        const res = await req.post(
          "/plancostcuttingData/create",
          cuttingDetail
        );
      }
      await alert("儲存成功", router.push({ name: "PlanCostCutting" }));
      await queryForCutting({ currentPage: 1, totalPage: 1, pages: 25 });
    } catch (error) {
      console.log(error);
    }
  };
  /* 刪除 */
  const delCutting = async (row) => {
    try {
      const res = await req.post("/plancostcuttingData/delete", null, {
        params: { id: row.id },
      });
      await alert("刪除成功");
      await queryForCutting({ currentPage: 1, totalPage: 1, pages: 25 });
    } catch (error) {
      console.log(error);
    }
  };
  const isEdit = ref(false);
  /* 新增頁面 */
  const newCutting = () => {
    isEdit.value = false;
    cuttingDetail.value = initCuttingDetail();
    router.push({ name: "PlanCostCuttingDetail" });
  };
  /* 修改頁面 */
  const editCutting = async (row) => {
    isEdit.value = true;
    try {
      const res = await req.get("/plancostcuttingData/one", {
        params: { id: row.id },
      });
      cuttingDetail.value = res.data;
    } catch (error) {
      console.log(error);
    }
    router.push({ name: "PlanCostCuttingDetail" });
  };
  /* 採購下拉選單API */
  const valuationAPI = async () => {
    try {
      const res = await req.post("/vaCode");
      valuations.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };
  return {
    cuttingList,
    currentPage,
    totalPage,
    pages,
    queryForCutting,
    isEdit,
    newCutting,
    editCutting,
    saveCutting,
    delCutting,
    cuttingDetail,
    valuationAPI,
    valuations,
    uploadExcel,
    createDownloadUrl,
    downloadUrl,
  };
});
