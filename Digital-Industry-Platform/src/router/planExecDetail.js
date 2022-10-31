// 計畫執行管理
const planExecDetail = {
  path: "/PlanExecDetail",
  name: "PlanExecDetail",
  component: () => import("@/views/planData/planExecDetail/PlanExecDetail.vue"),
  children: [
    // 執行進度
    {
      path: "PlanExecDetailExecution",
      name: "PlanExecDetailExecution",
      component: () =>
        import("@/views/planData/planExecDetail/PlanExecDetailExecution.vue"),
      children: [
        // 工作進度
        {
          path: "ExecSchedule",
          name: "ExecSchedule",
          component: () =>
            import("@/views/planData/planExecDetail/execution/ExecSchedule.vue"),
        },
        // 分包/協辦進度
        {
          path: "SubContractSchedule",
          name: "SubContractSchedule",
          component: () =>
            import(
              "@/views/planData/planExecDetail/execution/SubContractSchedule.vue"
            ),
        },
        // 人力需求異動
        {
          path: "HumanResourceEdit",
          name: "HumanResourceEdit",
          component: () =>
            import(
              "@/views/planData/planExecDetail/execution/HumanResourceEdit.vue"
            ),
        },
        // 派遣人力
        {
          path: "HumanResourceDist",
          name: "HumanResourceDist",
          component: () =>
            import(
              "@/views/planData/planExecDetail/execution/HumanResourceDist.vue"
            ),
        },
        // 新增人力需求異動
        {
          path: "AddHumanResource",
          name: "AddHumanResource",
          component: () =>
            import("@/views/planData/planExecDetail/execution/AddHumanResource.vue"),
        },
        // 人才培訓
        {
          path: "HumanResourceEducation",
          name: "HumanResourceEducation",
          component: () =>
            import(
              "@/views/planData/planExecDetail/execution/HumanResourceEducation.vue"
            ),
        },
      ],
    },
    // 資安檢核表
    {
      path: "PlanExecDetailSecurity",
      name: "PlanExecDetailSecurity",
      component: () => import("@/views/planData/PlanExecDetailSecurity.vue"),
    },
    // 執行成果
    {
      path: "ExecutionResult",
      name: "ExecutionResult",
      component: () =>
        import("@/views/planData/planExecDetail/execution/ExecutionResult.vue"),
      children: [
        // 輔導廠商
        {
          path: "FirmConsult",
          name: "FirmConsult",
          component: () =>
            import(
              "@/views/planData/planExecDetail/execution/ExecutionResult/FirmConsult.vue"
            ),
          children: [
            // 研發補助
            {
              path: "DevSubsidy",
              name: "DevSubsidy",
              component: () =>
                import(
                  "@/views/planData/planExecDetail/execution/ExecutionResult/FirmConsult/DevSubsidy.vue"
                ),
            },
            // 技術補導
            {
              path: "TechConsult",
              name: "TechConsult",
              component: () =>
                import(
                  "@/views/planData/planExecDetail/execution/ExecutionResult/FirmConsult/TechConsult.vue"
                ),
            },
            // 訪視諮詢
            {
              path: "FirmVisit",
              name: "FirmVisit",
              component: () =>
                import(
                  "@/views/planData/planExecDetail/execution/ExecutionResult/FirmConsult/FirmVisit.vue"
                ),
            },
          ],
        },
        // 研發成果
        {
          path: "DevResult",
          name: "DevResult",
          component: () =>
            import(
              "@/views/planData/planExecDetail/execution/ExecutionResult/DevResult.vue"
            ),
        },
        // 計畫亮點案例
        {
          path: "HighLight",
          name: "HighLight",
          component: () =>
            import(
              "@/views/planData/planExecDetail/execution/ExecutionResult/HighLight.vue"
            ),
        },
        // 計畫整體推動成效
        {
          path: "PlanEffect",
          name: "PlanEffect",
          component: () =>
            import(
              "@/views/planData/planExecDetail/execution/ExecutionResult/PlanEffect.vue"
            ),
        },
        // 人力工時
        {
          path: "ExecPplHrs",
          name: "ExecPplHrs",
          component: () =>
            import(
              "@/views/planData/planExecDetail/execution/ExecutionResult/ExecPplHrs.vue"
            ),
        },
        // 資安檢核表
        {
          path: "ExecSecuAudit",
          name: "ExecSecuAudit",
          component: () =>
            import(
              "@/views/planData/planExecDetail/execution/ExecutionResult/ExecSecuAudit.vue"
            ),
        },
        // 原始碼及相關文件
        {
          path: "SourceCode",
          name: "SourceCode",
          component: () =>
            import(
              "@/views/planData/planExecDetail/execution/ExecutionResult/SourceCode.vue"
            ),
        },
        // 成果總報告
        {
          path: "ExecOverall",
          name: "ExecOverall",
          component: () =>
            import(
              "@/views/planData/planExecDetail/execution/ExecutionResult/ExecOverall.vue"
            ),
        },
      ],
    },
    // 延續性計畫評鑑
    {
      path: "ContinuouslyEvaluation",
      name: "ContinuouslyEvaluation",
      component: () =>
        import("@/views/planData/continuouslyEvaluation/ContinuouslyEvaluation.vue"),
      children: [
        // 延續性計畫評鑑
        {
          path: "Evaluation",
          name: "Evaluation",
          component: () =>
            import("@/views/planData/continuouslyEvaluation/Evaluation.vue"),
        },
        // 上傳延續性計畫評鑑自評表
        {
          path: "UploadSelfEvaluation",
          name: "UploadSelfEvaluation",
          component: () =>
            import(
              "@/views/planData/continuouslyEvaluation/UploadSelfEvaluation.vue"
            ),
        },
      ],
    },
    // 計畫版本
    {
      path: "PlanVersion",
      name: "PlanVersion",
      component: () => import("@/views/planData/planVersion/PlanVersion.vue"),
    },
    // 期中報告
    {
      path: "MidtermReport",
      name: "MidtermReport",
      component: () => import("@/views/planData/midtermReport/MidtermReport.vue"),
    },
    // 期末報告
    {
      path: "FinalReport",
      name: "FinalReport",
      component: () => import("@/views/planData/finalReport/FinalReport.vue"),
    },
  ],
};

export { planExecDetail };
