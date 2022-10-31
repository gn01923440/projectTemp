import { createWebHistory, createRouter } from "vue-router";
import Login from "@/views/Login.vue";
import Main from "@/views/Main.vue";
import { gstpPlanSearchDetail } from "./gstpPlanSearchDetail.js";
import { planCostCuttingDetail } from "./planCostCuttingDetail.js";
import { tenderPlanListDetail } from "./tenderPlanListDetail.js";
import { planSignSearchDetail } from "./planSignSearchDetail.js";
import { planSignSearchEdit } from "./planSignSearchEdit.js";
import { planExecDetail } from "./planExecDetail.js";
import {
  planAuditExp,
  planAuditMidterm,
  planAuditProposal,
  planAuditAbroad,
  planAuditRecords,
  planStateRecords,
  planAuditReviewDetail,
  planAuditmanage,
  planManageRecords,
} from "./planAudit.js";

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/main",
    name: "BackendMain",
    component: Main,
    children: [
      {
        path: "GstpPlanSearch",
        name: "GstpPlanSearch",
        component: () => import("@/views/gstpPlan/GstpPlanSearch.vue"),
      },
      //綱要經費切割
      {
        path: "PlanCostCutting",
        name: "PlanCostCutting",
        component: () => import("@/views/plan/PlanCostCutting.vue"),
      },
      //標案計畫清單
      {
        path: "TenderPlanList",
        name: "TenderPlanList",
        component: () => import("@/views/plan/TenderPlanList.vue"),
      },
      //採購與驗收
      {
        path: "ProcumentAcceptance",
        name: "ProcumentAcceptance",
        component: () => import("@/views/plan/ProcumentAcceptance.vue"),
      },
      //計畫/簽約/查詢作業
      {
        path: "PlanSignSearch",
        name: "PlanSignSearch",
        component: () => import("@/views/planData/PlanSignSearch.vue"),
      },
      //計畫執行管理
      {
        path: "PlanExecSearch",
        name: "PlanExecSearch",
        component: () => import("@/views/planData/PlanExecSearch.vue"),
      },
      //待審清單
      {
        path: "PlanAuditSearch",
        name: "PlanAuditSearch",
        component: () => import("@/views/planAudit/PlanAuditSearch.vue"),
      },
      //計畫業務審查狀態
      {
        path: "PlanAuditState",
        name: "PlanAuditState",
        component: () => import("@/views/planAudit/PlanAuditState.vue"),
      },
      //計畫主持人查看送審狀態
      {
        path: "PlanAuditReview",
        name: "PlanAuditReview",
        component: () => import("@/views/planAudit/PlanAuditReview.vue"),
      },
      //計畫審查管理
      {
        path: "PlanAuditManagement",
        name: "PlanAuditManagement",
        component: () => import("@/views/planAudit/PlanAuditManagement.vue"),
      },
      //計畫審查狀態
      {
        path: "PlanAuditing",
        name: "PlanAuditing",
        component: () => import("@/views/planAudit/PlanAuditing.vue"),
      },
      //報表
      {
        path: "Report",
        name: "Report",
        component: () => import("@/views/reportExport/Report.vue"),
      },
      //組織
      {
        path: "Department",
        name: "Department",
        component: () => import("@/views/deptMember/Dept.vue"),
      },
      {
        path: "Authorization",
        name: "Authorization",
        component: () => import("@/views/deptMember/Auth.vue"),
      },
      {
        path: "Member",
        name: "Member",
        component: () => import("@/views/deptMember/Mem.vue"),
      },
      {
        path: "ExpItemSetting",
        name: "ExpItemSetting",
        component: () => import("@/views/businessSetting/ExpItemSetting.vue"),
        children: [
          {
            path: "FirstClass",
            name: "FirstClass",
            component: () =>
              import("@/views/businessSetting/expItemSetting/FirstClass.vue"),
          },
          {
            path: "OtherClass_234",
            name: "OtherClass_234",
            component: () =>
              import("@/views/businessSetting/expItemSetting/OtherClass_234.vue"),
          },
        ],
      },
      {
        path: "SubContractManage",
        name: "SubContractManage",
        component: () => import("@/views/businessSetting/SubContractManage.vue"),
      },
      {
        path: "ConsultingManage",
        name: "ConsultingManage",
        component: () => import("@/views/businessSetting/ConsultingManage.vue"),
      },
      {
        path: "MailTemplate",
        name: "MailTemplate",
        component: () => import("@/views/businessSetting/MailTemplate.vue"),
      },
      {
        path: "WebTemplate",
        name: "WebTempalte",
        component: () => import("@/views/webManagement/WebTemplate.vue"),
      },
      {
        path: "DeptAnnouncement",
        name: "DeptAnnouncement",
        component: () => import("@/views/webManagement/DeptAnnouncement.vue"),
      },
      {
        path: "Files",
        name: "Files",
        component: () => import("@/views/webManagement/Files.vue"),
      },
      {
        path: "Links",
        name: "Links",
        component: () => import("@/views/webManagement/Links.vue"),
      },
      {
        path: "News",
        name: "News",
        component: () => import("@/views/webManagement/News.vue"),
      },
      {
        path: "InfoEdit",
        name: "InfoEdit",
        component: () => import("@/views/personnel/InfoEdit.vue"),
      },
      {
        path: "PwChg",
        name: "PwChg",
        component: () => import("@/views/personnel/PwChg.vue"),
      },
    ],
  },
  {
    path: "/MailTemplateEdit",
    name: "MailTemplateEdit",
    component: () => import("@/views/businessSetting/MailTemplateEdit.vue"),
  },
  {
    path: "/ClassAdd",
    name: "ClassAdd",
    component: () => import("@/views/businessSetting/expItemSetting/ClassAdd.vue"),
    children: [
      {
        path: "Exp",
        name: "Exp",
        component: () =>
          import("@/views/businessSetting/expItemSetting/classAdd/Exp.vue"),
      },
      {
        path: "ExpDetail",
        name: "ExpDetail",
        component: () =>
          import("@/views/businessSetting/expItemSetting/classAdd/ExpDetail.vue"),
      },
    ],
  },
  {
    path: "/DeptTree",
    name: "DeptTree",
    component: () => import("@/views/deptMember/dept/DeptTree.vue"),
  },
  {
    path: "/DeptAdd",
    name: "DeptAdd",
    component: () => import("@/views/deptMember/dept/DeptAdd.vue"),
  },
  {
    path: "/AuthAdd",
    name: "AuthAdd",
    component: () => import("@/views/deptMember/auth/AuthAdd.vue"),
  },
  {
    path: "/MemAdd",
    name: "MemAdd",
    component: () => import("@/views/deptMember/mem/MemAdd.vue"),
  },
  

  {
    path: "/Template",
    component: () => import("@/components/Template.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    component: Login,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.addRoute(gstpPlanSearchDetail); //綱要計畫管理
router.addRoute(planCostCuttingDetail); //綱要經費切割明細
router.addRoute(tenderPlanListDetail); //標案計畫清單明細
router.addRoute(planSignSearchDetail); //採購與驗收明細-資訊
router.addRoute(planSignSearchEdit); //計畫簽約/變更/查詢作業-修改
router.addRoute(planExecDetail); //計畫執行管理
router.addRoute(planAuditExp); //計畫審查作業
router.addRoute(planAuditMidterm); //計畫審查作業
router.addRoute(planAuditProposal); //計畫審查作業
router.addRoute(planAuditAbroad); //計畫審查作業
router.addRoute(planAuditRecords); //計畫審查作業
router.addRoute(planStateRecords); //計畫審查作業
router.addRoute(planAuditReviewDetail); //計畫審查作業
router.addRoute(planAuditmanage); //計畫審查作業
router.addRoute(planManageRecords); //計畫審查作業

export default router;
