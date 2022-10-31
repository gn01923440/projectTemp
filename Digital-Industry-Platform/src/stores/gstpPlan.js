import { defineStore } from "pinia";
import { ref, reactive } from "vue";

import req from "@/api/axios";
import router from "@/router";

export const useGstpStore = defineStore("storeGstpPlan", () => {
  const detailList = ref([
    { id: 1, value: "申請版" },
    { id: 2, value: "核定版" },
    { id: 3, value: "法定版" },
  ]);
  const optList = ref([
    { id: 1, value: 108 },
    { id: 2, value: 109 },
    { id: 3, value: 110 },
    { id: 4, value: 111 },
    { id: 5, value: 112 },
  ]);
  const gstpList = ref([]); // 綱要計畫清單
  const gstpDetail = ref({}); // 綱要計畫
  const currentPage = ref(1); // 當前頁
  const totalPage = ref(1); // 總頁
  const pages = ref(25); // 頁面筆數
  /* 檔案上傳xlsx */
  const uploadExcel = async (fileObj) => {
    let formData = new FormData();
    formData.append("file", fileObj.fileUploaded.value);
    try {
      const upload = await req.post("/mainplan/xlsx", formData);
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
  /* 檔案上傳pdf */
  const uploadPdf = async (fileObj) => {
    let formData = new FormData();
    formData.append("file", fileObj.fileUploaded.value);
    let fileGstpParams = {
      year: fileObj.optSelected.value,
      planName: fileObj.dtSelected.value,
    };
    formData.append(
      "json",
      new Blob([JSON.stringify(fileGstpParams)], {
        type: "application/json",
      })
    );
    try {
      const upload = await req.post("/mainplan/pdf", formData);
    } catch (error) {
      console.log(error);
      let status = error.response.status;
      if (status === 500) {
        alert("請確認上傳檔案格式");
        return;
      }
      alert("上傳失敗，請稍侯再試");
    }
  };
  /* 計畫查詢 */
  const queryForGstp = async (queryGstpParams) => {
    console.log(queryGstpParams);
    try {
      const res = await req.post("/mainplan/search", queryGstpParams);
      gstpList.value = res.data.lists;
      currentPage.value = res.data.currentPage;
      totalPage.value = res.data.totalPage;
    } catch (error) {
      alert("查詢失敗");
      console.log(error);
    }
  };
  /* 調轉頁面 */
  const toGstpDetail = async (row) => {
    try {
      const res = await req.get("/mainplan/one", { params: { id: row.id } });
      gstpDetail.value = res.data;
    } catch (error) {
      console.log(error);
    }
    router.push({ name: "GstpPlanSearchDetail" });
  };
  // const getData = async () => {
  //   const showLength = 25;
  //   const res = await axios.get("/gstp.json");
  //   const ttlData = res.data.data;
  //   let ttlPage = Math.ceil(ttlData.length / showLength);
  //   // data.value = ttlData.splice(0, 25);
  //   data.value = res.data.data;
  //   console.log(data);
  // };

  // // Initial data
  // function add(numno) {
  //   // console.log(numno);
  //   /*
  //     data.value.push({
  //       name: 'add pokemon',
  //       url: 'add url'
  //     })*/

  //   data.value.push({
  //     ids: numno,
  //     year: "109",
  //     systemno: "MP10804-0012",
  //     chname: "產業循環經濟創新領導計畫(2/4)",
  //     ver: "核定版",
  //     work: "",
  //   });
  // }
  return {
    detailList,
    optList,
    // getData,
    gstpList,
    uploadExcel,
    uploadPdf,
    queryForGstp,
    currentPage,
    totalPage,
    toGstpDetail,
    gstpDetail,
    pages,
  };
});
