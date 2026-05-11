// 42Star.ai — product registry
const PRODUCTS = [
  // ─── Personal plane ─────────────────────────────────────────────
  {
    id: "starclaw", code: "SC-01", plane: "personal", form: "desktop",
    name: "StarClaw", tag: "本地化 Agent 管理平台",
    pitch: "你的私人 Agent 操作系统。在本地编排、调度、唤醒任意智能体。",
    long: "面向个人的本地化 Agent 控制台。统一的 Agent 注册表、生命周期管理、上下文工作目录，所有推理路径都可审计。",
    stat: "12 active agents · local-first",
    coord: { x: 24, y: 32 },
  },
  {
    id: "starwork", code: "SC-02", plane: "personal", form: "mobile",
    name: "StarWork", tag: "StarClaw · 工作场景客户端",
    pitch: "把工作流装进口袋。一天两小时，AI 接管其余六小时。",
    long: "面向工作场景的 StarClaw 手机端。会议、文档、协作、决策辅助，Agent 在每一个工作触点上等候。",
    stat: "4 days × 2 hours",
    coord: { x: 38, y: 22 },
  },
  {
    id: "staryme", code: "SC-03", plane: "personal", form: "mobile",
    name: "Staryme", tag: "StarClaw · 个人生活客户端",
    pitch: "属于你的生活管家。健康、家务、关系、消费，由 Agent 协同打理。",
    long: "面向个人生活的 StarClaw 手机端。Agent 围绕你的日常半径自主运转，让你回归生活本身。",
    stat: "your second brain",
    coord: { x: 18, y: 50 },
  },

  // ─── Enterprise plane ───────────────────────────────────────────
  {
    id: "clawbase", code: "CB-00", plane: "enterprise", form: "platform",
    name: "Clawbase", tag: "中小企业 AI 中台",
    pitch: "自底向上的 AI Infra + Agent Infra。让任意业务可以 AI Native。",
    long: "面向中小企业的全栈 AI 中台。推理调度、向量存储、Agent 运行时、可观测性，开箱即用。",
    stat: "AI Infra + Agent Infra",
    coord: { x: 64, y: 28 },
  },

  // ─── Vertical SaaS Agents ───────────────────────────────────────
  {
    id: "clawfin", code: "CV-F1", plane: "vertical", form: "saas",
    name: "ClawFin", tag: "财务 Agent",
    pitch: "对账、报表、税前规划。让 CFO 一个人就是一个团队。",
    stat: "Vertical · Finance",
    coord: { x: 78, y: 50 },
  },
  {
    id: "clawtax", code: "CV-F2", plane: "vertical", form: "saas",
    name: "ClawTax", tag: "税务 Agent",
    pitch: "申报、合规、跨境。税务 Agent 7×24 跟你一起。",
    stat: "Vertical · Tax",
    coord: { x: 86, y: 38 },
  },
  {
    id: "clawcoco", code: "CV-F3", plane: "vertical", form: "saas",
    name: "ClawCoco", tag: "营销内容 Agent",
    pitch: "选题、生产、分发、复盘。一个内容 Agent 团队。",
    stat: "Vertical · Content",
    coord: { x: 88, y: 60 },
  },
  {
    id: "clawher", code: "CV-F4", plane: "vertical", form: "saas",
    name: "ClawHer", tag: "HR / 人力 Agent",
    pitch: "招聘、面试、绩效、组织诊断。Agent 让组织更轻。",
    stat: "Vertical · People",
    coord: { x: 76, y: 68 },
  },

  // ─── Standards / Infrastructure ─────────────────────────────────
  {
    id: "clawpkg", code: "ST-01", plane: "standard", form: "spec",
    name: "ClawPkg", tag: "Agent 上下文打包规范",
    pitch: "一键搬家。让 Agent 的上下文工作目录变成可移植格式。",
    long: "面向智能体的打包规范，努力成为行业标准。让 Agent 实例在任意 runtime 之间无损迁移。",
    stat: "Open spec · v0.42",
    coord: { x: 50, y: 78 },
  },
  {
    id: "clawuuid", code: "ST-02", plane: "standard", form: "spec",
    name: "ClawUUID", tag: "Agent 护照体系",
    pitch: "官方签发的 Agent 身份。每一次推理、每一次调用都可被信任。",
    stat: "Issued · Verifiable",
    coord: { x: 60, y: 86 },
  },
  {
    id: "clawlego", code: "ST-03", plane: "standard", form: "marketplace",
    name: "ClawLego", tag: "Agent 商店",
    pitch: "ClawTpl 模板 + ClawMod 模块。Agent 时代的应用商店。",
    long: "公共的 Agent 模板与模块市场，让构建 Agent 像拼乐高一样。",
    stat: "1,204 templates · 8,932 mods",
    coord: { x: 42, y: 88 },
  },

  // ─── Hardware ───────────────────────────────────────────────────
  {
    id: "clawclip", code: "HW-01", plane: "hardware", form: "device",
    name: "ClawClip", tag: "磁吸 Agent 卡片",
    pitch: "把 Agent 带在身上。任意设备一吸即唤醒你的 Agent 实例。",
    long: "随身的 Agent 存储介质。磁吸接口 + 加密容器，让你的 Agent 跨设备、跨环境无缝迁移。",
    stat: "32 GB context · NFC-S",
    coord: { x: 30, y: 70 },
  },
];

const PLANES = {
  personal:   { label: "Personal",      hue: "var(--cyan)",   code: "P" },
  enterprise: { label: "Enterprise",    hue: "var(--amber)",  code: "E" },
  vertical:   { label: "Vertical SaaS", hue: "var(--violet)", code: "V" },
  standard:   { label: "Standard / Infra", hue: "var(--cyan)",   code: "S" },
  hardware:   { label: "Hardware",      hue: "var(--amber)",  code: "H" },
};

window.PRODUCTS = PRODUCTS;
window.PLANES = PLANES;
