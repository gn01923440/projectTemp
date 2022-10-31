// 計畫簽約/變更/查詢作業----修改
const planSignSearchEdit = {
  path: "/PlanSignSearchEdit",
  name: "PlanSignSearchEdit",
  component: () => import("@/views/planData/PlanSignSearchEdit.vue"),
  children: [
    // 基本資料
    {
      path: "PlanBasc",
      name: "PlanBasc",
      component: () =>
        import("@/views/planData/planSignSearchEdit/planBasc/PlanBasc.vue"),
      children: [
        // 計畫資料
        {
          path: "Plan",
          name: "Plan",
          component: () =>
            import("@/views/planData/planSignSearchEdit/planBasc/Plan.vue"),
        },
        // 簽約金額
        {
          path: "Amount",
          name: "Amount",
          component: () =>
            import("@/views/planData/planSignSearchEdit/planBasc/Amount.vue"),
        },
        // 領域與關鍵詞
        {
          path: "Keywords",
          name: "Keywords",
          component: () =>
            import("@/views/planData/planSignSearchEdit/planBasc/Keywords.vue"),
        },
        // 中英文摘要
        {
          path: "Summary",
          name: "Summary",
          component: () =>
            import("@/views/planData/planSignSearchEdit/planBasc/Summary.vue"),
        },
        // 計畫變更明細表_修改
        {
          path: "DetailEdit",
          name: "DetailEdit",
          component: () =>
            import("@/views/planData/planSignSearchEdit/planBasc/DetailEdit.vue"),
        },
      ],
    },
    // 預期成果
    {
      path: "Predict",
      name: "Predict",
      component: () =>
        import("@/views/planData/planSignSearchEdit/predict/Predict.vue"),
      children: [
        // 預期成果
        {
          path: "PlanPredict",
          name: "PlanPredict",
          component: () =>
            import("@/views/planData/planSignSearchEdit/predict/PlanPredict.vue"),
        },
        // 預定進度
        {
          path: "PlanSchedule",
          name: "PlanSchedule",
          component: () =>
            import("@/views/planData/planSignSearchEdit/predict/PlanSchedule.vue"),
        },
      ],
    },
    // 分項計畫
    {
      path: "SubPlan",
      name: "SubPlan",
      component: () =>
        import("@/views/planData/planSignSearchEdit/subPlan/SubPlan.vue"),
      children: [],
    },
    // 新增分項計畫
    {
      path: "AddSubPlan",
      name: "AddSubPlan",
      component: () =>
        import("@/views/planData/planSignSearchEdit/subPlan/AddSubPlan.vue"),
    },
    // 工作項目
    {
      path: "SubPlanItem",
      name: "SubPlanItem",
      component: () =>
        import("@/views/planData/planSignSearchEdit/subPlan/SubPlanItem.vue"),
    },
    // 人力需求派遣
    {
      path: "HumanResource",
      name: "HumanResource",
      component: () =>
        import(
          "@/views/planData/planSignSearchEdit/humanResource/HumanResource.vue"
        ),
      children: [
        // 人力需求
        {
          path: "HrManagement",
          name: "HrManagement",
          component: () =>
            import(
              "@/views/planData/planSignSearchEdit/humanResource/HrManagement.vue"
            ),
        },
        // 新增人力
        {
          path: "HrAdd",
          name: "HrAdd",
          component: () =>
            import("@/views/planData/planSignSearchEdit/humanResource/HrAdd.vue"),
        },
        // 派遣人力
        {
          path: "HrAssign",
          name: "HrAssign",
          component: () =>
            import("@/views/planData/planSignSearchEdit/humanResource/HrAssign.vue"),
        },
        // 新增派遣
        {
          path: "HrAssignAdd",
          name: "HrAssignAdd",
          component: () =>
            import(
              "@/views/planData/planSignSearchEdit/humanResource/HrAssignAdd.vue"
            ),
        },
      ],
    },
    // 出國計畫
    {
      path: "AbroadPlan",
      name: "AbroadPlan",
      component: () =>
        import("@/views/planData/planSignSearchEdit/abroadPlan/AbroadPlan.vue"),
    },
    // 新增出國計畫
    {
      path: "AddAbroadPlan",
      name: "AddAbroadPlan",
      component: () =>
        import("@/views/planData/planSignSearchEdit/abroadPlan/AddAbroadPlan.vue"),
    },
    // 分包協辦計畫
    {
      path: "SubContract",
      name: "SubContract",
      component: () =>
        import("@/views/planData/planSignSearchEdit/subContract/SubContract.vue"),
    },
    // 新增分包/協辦計畫
    {
      path: "AddSubcon",
      name: "AddSubcon",
      component: () =>
        import("@/views/planData/planSignSearchEdit/subContract/AddSubcon.vue"),
    },
    // 分包協辦計畫----修改
    {
      path: "EditSubconTab",
      name: "EditSubconTab",
      component: () =>
        import("@/views/planData/planSignSearchEdit/subContract/EditSubconTab.vue"),
      children: [
        // 分包/協辦計畫
        {
          path: "EditSubcon",
          name: "EditSubcon",
          component: () =>
            import("@/views/planData/planSignSearchEdit/subContract/EditSubcon.vue"),
        },
        // 委託勞務費
        {
          path: "LaborFee",
          name: "LaborFee",
          component: () =>
            import("@/views/planData/planSignSearchEdit/subContract/LaborFee.vue"),
        },
      ],
    },
    // 經費預算
    {
      path: "Budget",
      name: "Budget",
      component: () =>
        import("@/views/planData/planSignSearchEdit/budget/Budget.vue"),
    },
    // 新增三四科
    {
      path: "AddSubject",
      name: "AddSubject",
      component: () =>
        import("@/views/planData/planSignSearchEdit/budget/AddSubject.vue"),
    },
    // 新增三四科----修改
    {
      path: "EditSubject",
      name: "EditSubject",
      component: () =>
        import("@/views/planData/planSignSearchEdit/budget/EditSubject.vue"),
    },
    // 計畫書
    {
      path: "Proposal",
      name: "Proposal",
      component: () =>
        import("@/views/planData/planSignSearchEdit/proposal/Proposal.vue"),
    },
    // GRB
    {
      path: "Grb",
      name: "Grb",
      component: () => import("@/views/planData/planSignSearchEdit/grb/Grb.vue"),
      children: [
        // 基本資料
        {
          path: "GrbPlan",
          name: "GrbPlan",
          component: () =>
            import("@/views/planData/planSignSearchEdit/grb/GrbPlan.vue"),
        },
        // 經費預算
        {
          path: "GrbAmount",
          name: "GrbAmount",
          component: () =>
            import("@/views/planData/planSignSearchEdit/grb/GrbAmount.vue"),
        },
        // 領域及關鍵詞
        {
          path: "GrbKeywords",
          name: "GrbKeywords",
          component: () =>
            import("@/views/planData/planSignSearchEdit/grb/GrbKeywords.vue"),
        },
        // 人力需求
        {
          path: "GrbHumanResource",
          name: "GrbHumanResource",
          component: () =>
            import("@/views/planData/planSignSearchEdit/grb/GrbHumanResource.vue"),
        },
        // 中英文摘要
        {
          path: "GrbSummary",
          name: "GrbSummary",
          component: () =>
            import("@/views/planData/planSignSearchEdit/grb/GrbSummary.vue"),
        },
      ],
    },
    // 送審
    {
      path: "Audit",
      name: "Audit",
      component: () => import("@/views/planData/planSignSearchEdit/audit/Audit.vue"),
      children: [
        // 基本資料
        {
          path: "PlanBascAudit",
          name: "PlanBascAudit",
          component: () =>
            import("@/views/planData/planSignSearchEdit/audit/PlanBascAudit.vue"),
        },
        // 分項計畫表
        {
          path: "SubPlanAudit",
          name: "SubPlanAudit",
          component: () =>
            import("@/views/planData/planSignSearchEdit/audit/SubPlanAudit.vue"),
        },
        // 人力需求表
        {
          path: "HRAudit",
          name: "HRAudit",
          component: () =>
            import("@/views/planData/planSignSearchEdit/audit/HRAudit.vue"),
        },
        // 出國計畫表
        {
          path: "AbroadPlanAudit",
          name: "AbroadPlanAudit",
          component: () =>
            import("@/views/planData/planSignSearchEdit/audit/AbroadPlanAudit.vue"),
        },
        // 分包計畫及分包單位明細
        {
          path: "SubContractAudit",
          name: "SubContractAudit",
          component: () =>
            import("@/views/planData/planSignSearchEdit/audit/SubContractAudit.vue"),
        },
        // 經費預算總表
        {
          path: "BudgetAudit",
          name: "BudgetAudit",
          component: () =>
            import("@/views/planData/planSignSearchEdit/audit/BudgetAudit.vue"),
        },
      ],
    },
  ],
};

export { planSignSearchEdit };
