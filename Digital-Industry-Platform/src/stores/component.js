import { defineStore } from "pinia";
import { ref, reactive, computed } from "vue";

import req from "@/api/axios";

export const useComponentStore = defineStore("storeComponent", () => {
  const valuations = ref([]); // 採購下拉選單
  const valuationAPI = async () => {
    try {
      const res = await req.post("/vaCode");
      valuations.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };
  return {
    valuations,
    valuationAPI,
  };
});
