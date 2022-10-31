// 計畫簽約/變更/查詢作業----資訊
const planSignSearchDetail = {
  path: "/PlanSignSearchDetail",
  name: "PlanSignSearchDetail",
  component: () => import("@/views/planData/PlanSignSearchDetail.vue"),
  children: [
    // 基本資料
    {
      path: "PlanBascDetail",
      name: "PlanBascDetail",
      component: import("@/views/planData/planSignSearchDetail/PlanBascDetail.vue"),
    },
    // 分項計畫表
    {
      path: "SubPlanDetail",
      name: "SubPlanDetail",
      component: import("@/views/planData/planSignSearchDetail/SubPlanDetail.vue"),
    },
    // 人力需求表
    {
      path: "HumanResourceDetail",
      name: "HumanResourceDetail",
      component: import(
        "@/views/planData/planSignSearchDetail/HumanResourceDetail.vue"
      ),
    },
    // 出國計畫表
    {
      path: "AbroadPlanDetail",
      name: "AbroadPlanDetail",
      component: import(
        "@/views/planData/planSignSearchDetail/AbroadPlanDetail.vue"
      ),
    },
    // 分包計畫及分包單位明細
    {
      path: "SubContractDetail",
      name: "SubContractDetail",
      component: import(
        "@/views/planData/planSignSearchDetail/SubContractDetail.vue"
      ),
    },
    // 經費預算總表
    {
      path: "BudgetDetail",
      name: "BudgetDetail",
      component: import("@/views/planData/planSignSearchDetail/BudgetDetail.vue"),
    },
    // GRB
    {
      path: "GrbDetail",
      name: "GrbDetail",
      component: import("@/views/planData/planSignSearchDetail/GrbDetail.vue"),
    },
    // 計畫書
    {
      path: "ProposalDetail",
      name: "ProposalDetail",
      component: import("@/views/planData/planSignSearchDetail/ProposalDetail.vue"),
    },
  ],
};

export { planSignSearchDetail };
