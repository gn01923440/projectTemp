const tenderPlanListDetail = {
  path: "/TenderPlanListDetail",
  name: "TenderPlanListDetail",
  component: () => import("@/views/plan/TenderPlanListDetail.vue"),
  children: [
    {
      path: "TenderPlan",
      name: "TenderPlan",
      component: () => import("@/views/plan/tenderPlanListDetail/TenderPlan.vue"),
    },
    {
      path: "ContractNo",
      name: "ContractNo",
      component: () => import("@/views/plan/tenderPlanListDetail/ContractNo.vue"),
    },
    {
      path: "Auditor",
      name: "Auditor",
      component: () => import("@/views/plan/tenderPlanListDetail/Auditor.vue"),
    },
    {
      path: "BidInformation",
      name: "BidInformation",
      component: () =>
        import("@/views/plan/tenderPlanListDetail/BidInformation.vue"),
    },
  ],
};

export { tenderPlanListDetail };
