const planAuditExp = {
  path: "/PlanAuditExp",
  name: "PlanAuditExp",
  component: () => import("@/views/planAudit/auditList/PlanAuditExp.vue"),
};
const planAuditMidterm = {
  path: "/PlanAuditMidterm",
  name: "PlanAuditMidterm",
  component: () => import("@/views/planAudit/auditList/PlanAuditMidterm.vue"),
};
const planAuditProposal = {
  path: "/PlanAuditProposal",
  name: "PlanAuditProposal",
  component: () => import("@/views/planAudit/auditList/PlanAuditProposal.vue"),
};
const planAuditAbroad = {
  path: "/PlanAuditAbroad",
  name: "PlanAuditAbroad",
  component: () => import("@/views/planAudit/auditList/PlanAuditAbroad.vue"),
};
const planAuditRecords = {
  path: "/PlanAuditRecords",
  name: "PlanAuditRecords",
  component: () => import("@/views/planAudit/auditList/PlanAuditRecords.vue"),
};
const planStateRecords = {
  path: "/PlanStateRecords",
  name: "PlanStateRecords",
  component: () => import("@/views/planAudit/auditState/PlanStateRecords.vue"),
};
const planAuditReviewDetail = {
  path: "/PlanAuditReviewDetail",
  name: "PlanAuditReviewDetail",
  component: () => import("@/views/planAudit/auditReview/PlanAuditReviewDetail.vue"),
};
const planAuditmanage = {
  path: "/PlanAuditmanage",
  name: "PlanAuditmanage",
  component: () => import("@/views/planAudit/auditManagement/PlanAuditmanage.vue"),
};
const planManageRecords = {
  path: "/PlanManageRecords",
  name: "PlanManageRecords",
  component: () => import("@/views/planAudit/auditManagement/PlanManageRecords.vue"),
};

export {
  planAuditExp,
  planAuditMidterm,
  planAuditProposal,
  planAuditAbroad,
  planAuditRecords,
  planStateRecords,
  planAuditReviewDetail,
  planAuditmanage,
  planManageRecords,
};
