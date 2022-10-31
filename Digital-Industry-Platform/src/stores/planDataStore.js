import { defineStore } from "pinia";
import { ref, reactive } from "vue";

import req from "@/api/axios";
import router from "@/router";

export const usePlanDataStore = defineStore("storePlanData", () => {
  const planDataList = ref([]); // 計畫資料清單
  const currentPage = ref(1); // 當前頁
  const totalPage = ref(1); // 總頁
  const pages = ref(25); // 頁面筆數
  const planNameMenu = ref([]); // 標案計畫選單

  /* 選單計畫查詢 */
  const queryForPlanNameList = async () => {
    planNameMenu.value = [];
    const res = await req.post("tenderData/search", { currentPage: 1 });
    const planList = res.data.lists;
    for (let plan of planList) {
      let menu = {};
      menu["projkey"] = plan.projkey;
      menu["tenderChname"] = plan.projkey + "-" + plan.tenderChname;
      planNameMenu.value.push(menu);
      // planNameMenu.push({plan.projkey: plan.projkey+'-'+plan.tenderChname})
      console.log(planNameMenu);
    }
  };
  /* 計畫資料參數初始化 */
  const initPlanDataDetail = () => ({
    contactAddress: null,
    contactFax: null,
    contactMail: null,
    contactName: null,
    contactOrg: null,
    contactTel: null,
    contactTitle: null,
    creationDate: null,
    creationUser: null,
    excuOrgan: null,
    flag: null,
    groupCode: null,
    hostFax: null,
    hostGrbUserId: null,
    hostMon: null,
    hostName: null,
    hostTel: null,
    hostTitle: null,
    id: null,
    joinCompany: null,
    modifyDate: null,
    modifyReason: null,
    modifyUser: null,
    oecdResearchCode: null,
    periodE: null,
    periodS: null,
    planClassCode: null,
    planTypeCode: null,
    pnatTypeCode: null,
    priceCode: null,
    projkey: null,
    reatTypeCode: null,
    signName: null,
    statusCode: null,
    subcontractorTypeCode: null,
    sysMail01: null,
    sysMail02: null,
    sysMail03: null,
    sysName01: null,
    sysName02: null,
    sysName03: null,
    sysTel01: null,
    sysTel02: null,
    sysTel03: null,
    verMemo: null,
    year: null,
    yearE: null,
    yearS: null,
  });
  /* 計畫資料初始參數 */
  const planDataDetail = ref({
    contactAddress: null,
    contactFax: null,
    contactMail: null,
    contactName: null,
    contactOrg: null,
    contactTel: null,
    contactTitle: null,
    creationDate: null,
    creationUser: null,
    excuOrgan: null,
    flag: null,
    groupCode: null,
    hostFax: null,
    hostGrbUserId: null,
    hostMon: null,
    hostName: null,
    hostTel: null,
    hostTitle: null,
    id: null,
    joinCompany: null,
    modifyDate: null,
    modifyReason: null,
    modifyUser: null,
    oecdResearchCode: null,
    periodE: null,
    periodS: null,
    planClassCode: null,
    planTypeCode: null,
    pnatTypeCode: null,
    priceCode: null,
    projkey: null,
    reatTypeCode: null,
    signName: null,
    statusCode: null,
    subcontractorTypeCode: null,
    sysMail01: null,
    sysMail02: null,
    sysMail03: null,
    sysName01: null,
    sysName02: null,
    sysName03: null,
    sysTel01: null,
    sysTel02: null,
    sysTel03: null,
    verMemo: null,
    year: null,
    yearE: null,
    yearS: null,
  });
  /* 計畫查詢 */
  const queryForPlanData = async (planDataParams) => {
    console.log(planDataParams);
    try {
      const res = await req.post("dmpInfo1/search", planDataParams);
      planDataList.value = res.data.lists;
      currentPage.value = res.data.currentPage;
      totalPage.value = res.data.totalPage;
    } catch (error) {
      alert("查詢失敗");
      console.log(error);
    }
  };
  /* 調轉頁面 */
  const toPlanDataDetail = async (row) => {
    try {
      const res = await req.get("/dmpInfo1/one", { params: { id: row.id } });
      planDataDetail.value = res.data;
      console.log(res);
      console.log(planDataDetail);
    } catch (error) {
      console.log(error);
    }
    router.push({ name: "PlanSignSearchDetail" });
  };

  const editPlanData = async (row) => {
    try {
      const res = await req.get("/dmpInfo1/one", { params: { id: row.id } });
      planDataDetail.value = res.data;
      console.log(res);
      console.log(planDataDetail);
    } catch (error) {
      console.log(error);
    }
    router.push({ name: "PlanSignSearchEdit" });
  };
  const delPlanData = (row) => {};
  return {
    queryForPlanNameList,
    planNameMenu,
    planDataList,
    queryForPlanData,
    currentPage,
    totalPage,
    toPlanDataDetail,
    planDataDetail,
    pages,
    editPlanData,
    delPlanData,
  };
});
