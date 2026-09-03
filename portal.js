const routes = {
  home: "wms-lite.html",
  mdm: "wms-lite.html",
  inbound: "inbound.html",
  outbound: "inbound.html",
  inventory: "inventory.html",
  "cycle-count": "inventory.html",
  task: "task/index.html",
  wcs: "wcs/index.html"
};

const translations = {
  zh: {
    home: "首页", manual: "统一功能说明书", mdm: "主数据", organization: "组织", customer: "客户", item: "商品", industry: "行业", hazard: "危险品", carrier: "承运商", address: "地址",
    inbound: "入库", receipt: "收货单", rma: "退货入库", outbound: "出库", outboundOrder: "出库订单", commitment: "库存承诺", orderPlans: "订单计划", dispatch: "订单调度", orderFilters: "订单过滤器", dispatchSettings: "调度设置", smallParcel: "小包工作站", loadManagement: "装载管理", shipmentTickets: "发运单",
    inventory: "库存", inventoryList: "库存总览", inventoryLock: "库存锁定", inventoryActivity: "库存活动", adjustment: "库存调整", minMax: "最小/最大设置", holiday: "节假日管理", cycleCount: "盘点", countTickets: "盘点单", countTasks: "盘点任务", countResults: "盘点结果",
    scenarioTasks: "特定场景 Task", technical: "技术向", wcsManual: "控制系统", dashboard: "仪表盘", configuration: "配置", actionType: "动作类型配置", workflowDefinitions: "工作流定义", systemWorkflows: "系统工作流", jobFilters: "作业过滤器", jobDispatch: "作业调度设置", messageConfig: "消息配置", runtime: "运行", jobManagement: "作业管理", workflowInstances: "工作流实例", nodeExecutions: "节点执行", station: "工作站", enterStation: "进入工作站", workstation: "工作站", acceptTasks: "接收任务", operations: "运维", messageLogs: "消息发送日志", deviceApp: "设备应用", communicationLogs: "通信日志", deviceDebug: "设备/RCS 调试", callbackRecords: "回调记录",
    openMenu: "打开菜单", closeMenu: "关闭菜单", expand: "展开", collapse: "收起", loading: "正在加载内容"
  },
  ja: {
    home: "ホーム", manual: "統合機能マニュアル", mdm: "マスターデータ", organization: "組織", customer: "顧客", item: "商品", industry: "業種", hazard: "危険物", carrier: "配送業者", address: "住所",
    inbound: "入庫", receipt: "入荷伝票", rma: "返品入庫", outbound: "出庫", outboundOrder: "出庫注文", commitment: "在庫引当", orderPlans: "注文計画", dispatch: "注文ディスパッチ", orderFilters: "注文フィルター", dispatchSettings: "ディスパッチ設定", smallParcel: "小口出荷ステーション", loadManagement: "積込管理", shipmentTickets: "出荷伝票",
    inventory: "在庫", inventoryList: "在庫一覧", inventoryLock: "在庫ロック", inventoryActivity: "在庫活動", adjustment: "在庫調整", minMax: "最小／最大設定", holiday: "休日管理", cycleCount: "棚卸", countTickets: "棚卸伝票", countTasks: "棚卸タスク", countResults: "棚卸結果",
    scenarioTasks: "特定シナリオ Task", technical: "技術向け", wcsManual: "制御システム", dashboard: "ダッシュボード", configuration: "設定", actionType: "アクションタイプ設定", workflowDefinitions: "ワークフロー定義", systemWorkflows: "システムワークフロー", jobFilters: "ジョブフィルター", jobDispatch: "ジョブディスパッチ設定", messageConfig: "メッセージ設定", runtime: "実行管理", jobManagement: "ジョブ管理", workflowInstances: "ワークフローインスタンス", nodeExecutions: "ノード実行", station: "ステーション", enterStation: "ステーション入場", workstation: "ワークステーション", acceptTasks: "タスク受付", operations: "運用", messageLogs: "メッセージ送信ログ", deviceApp: "デバイスアプリ", communicationLogs: "通信ログ", deviceDebug: "デバイス/RCS デバッグ", callbackRecords: "コールバック記録",
    openMenu: "メニューを開く", closeMenu: "メニューを閉じる", expand: "展開", collapse: "折りたたむ", loading: "コンテンツを読み込み中"
  },
  en: {
    home: "Home", manual: "Unified Function Manual", mdm: "Master Data", organization: "Organization", customer: "Customer", item: "Item", industry: "Industry", hazard: "Hazard", carrier: "Carrier", address: "Address",
    inbound: "Inbound", receipt: "Receipt", rma: "RMA Management", outbound: "Outbound", outboundOrder: "Outbound Order", commitment: "Inventory Commitment", orderPlans: "Order Plans", dispatch: "Order Dispatch", orderFilters: "Order Filters", dispatchSettings: "Dispatch Settings", smallParcel: "Small Parcel Station", loadManagement: "Load Management", shipmentTickets: "Shipment Tickets",
    inventory: "Inventory", inventoryList: "Inventory Overview", inventoryLock: "Inventory Lock", inventoryActivity: "Inventory Activity", adjustment: "Adjustment", minMax: "Min/Max Setting", holiday: "Holiday Management", cycleCount: "Cycle Count", countTickets: "Count Tickets", countTasks: "Count Tasks", countResults: "Count Results",
    scenarioTasks: "Scenario-Specific Tasks", technical: "Technical", wcsManual: "Control System", dashboard: "Dashboard", configuration: "Configuration", actionType: "Action Type Config", workflowDefinitions: "Workflow Definitions", systemWorkflows: "System Workflows", jobFilters: "Job Filters", jobDispatch: "Job Dispatch Settings", messageConfig: "Message Config", runtime: "Runtime", jobManagement: "Job Management", workflowInstances: "Workflow Instances", nodeExecutions: "Node Executions", station: "Station", enterStation: "Enter Station", workstation: "Workstation", acceptTasks: "Accept Tasks", operations: "Operations", messageLogs: "Message Send Logs", deviceApp: "Device App", communicationLogs: "Communication Logs", deviceDebug: "Device/RCS Debug", callbackRecords: "Callback Records",
    openMenu: "Open menu", closeMenu: "Close menu", expand: "Expand", collapse: "Collapse", loading: "Loading content"
  }
};

const frame = document.querySelector("#manual-frame");
const sidebar = document.querySelector("#portal-sidebar");
const scrim = document.querySelector("#portal-scrim");
const menuButton = document.querySelector("#portal-menu");
const currentTitle = document.querySelector("#current-title");
const portalContent = document.querySelector(".portal-content");
const routeLinks = [...document.querySelectorAll(".portal-route")];
const modules = [...document.querySelectorAll(".nav-module")];
let activeRoute = null;
let language = "zh";
let navigationSequence = 0;

try {
  const saved = localStorage.getItem("orbiflow-unified-manual-language");
  if (["zh", "ja", "en"].includes(saved)) language = saved;
} catch {
  // The manual remains usable when browser storage is unavailable.
}

function setMenu(open) {
  sidebar.classList.toggle("open", open);
  scrim.classList.toggle("show", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", translations[language][open ? "closeMenu" : "openMenu"]);
}

function moduleName(module) {
  return module.querySelector(".module-link b")?.textContent.trim() || module.dataset.module;
}

function setModuleExpanded(module, expanded) {
  module.classList.toggle("collapsed", !expanded);
  const toggle = module.querySelector(".module-toggle");
  const items = module.querySelector(".module-items");
  toggle.setAttribute("aria-expanded", String(expanded));
  toggle.setAttribute("aria-label", `${translations[language][expanded ? "collapse" : "expand"]} ${moduleName(module)}`);
  items.setAttribute("aria-hidden", String(!expanded));
  items.toggleAttribute("inert", !expanded);
}

function applyPortalLanguage(nextLanguage, syncContent = true) {
  language = ["zh", "ja", "en"].includes(nextLanguage) ? nextLanguage : "zh";
  document.documentElement.lang = language === "zh" ? "zh-CN" : language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translations[language][element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll("[data-portal-lang]").forEach((button) => button.classList.toggle("active", button.dataset.portalLang === language));
  modules.forEach((module) => setModuleExpanded(module, !module.classList.contains("collapsed")));
  setMenu(sidebar.classList.contains("open"));
  updateCurrentTitle();
  try { localStorage.setItem("orbiflow-unified-manual-language", language); } catch { /* optional persistence */ }
  if (syncContent) syncFrameLanguage();
}

function frameUrl(page, section) {
  const base = routes[page] || routes.home;
  return `${base}?lang=${language}${section ? `#${section}` : ""}`;
}

function updateCurrentTitle() {
  if (!activeRoute) return;
  const label = activeRoute.querySelector("b") || activeRoute;
  currentTitle.textContent = label.textContent.trim().replace(/^[-–—]\s*/, "");
}

function setFrameLoading(loading) {
  portalContent.classList.toggle("loading", loading);
  frame.setAttribute("aria-busy", String(loading));
}

function scrollFrameTo(section) {
  let doc;
  try { doc = frame.contentDocument; } catch { return false; }
  const target = doc?.getElementById(section);
  if (!target) return false;
  const scroller = doc.scrollingElement || doc.documentElement;
  const top = target.getBoundingClientRect().top + scroller.scrollTop;
  scroller.scrollTop = Math.max(0, top);
  return true;
}

function stabilizeFrameSection(section, sequence = navigationSequence) {
  scrollFrameTo(section);
  [80, 200, 500, 1000, 2000].forEach((delay) => {
    setTimeout(() => {
      if (sequence === navigationSequence) scrollFrameTo(section);
    }, delay);
  });
}

function prepareFrame(section = activeRoute?.dataset.section) {
  let doc;
  try { doc = frame.contentDocument; } catch { return; }
  if (!doc?.head) return;
  let style = doc.querySelector("#portal-embed-style");
  if (!style) {
    style = doc.createElement("style");
    style.id = "portal-embed-style";
    style.textContent = `
      .sidebar, .mobile-header, .language-switcher, .language-switch,
      .language-switch-floating, .reading-line, #sidebar-scrim { display: none !important; }
      html, body { width: 100% !important; min-height: 100% !important; }
      body { overflow-x: hidden !important; }
      main { width: 100% !important; max-width: none !important; margin-left: 0 !important; padding-top: 0 !important; }
      @media (max-width: 820px) { main { margin-left: 0 !important; } }
    `;
    doc.head.appendChild(style);
  }
  if (!doc.documentElement.dataset.portalLinked) {
    doc.documentElement.dataset.portalLinked = "true";
    doc.addEventListener("click", (event) => {
      const link = event.target.closest("a[href]");
      if (!link) return;
      const target = new URL(link.href, frame.src);
      if (target.origin !== location.origin || !target.hash) return;
      const matchingRoute = routeLinks.find((route) => {
        const routePath = new URL(routes[route.dataset.page], location.href).pathname;
        return routePath === target.pathname && route.dataset.section === target.hash.slice(1);
      });
      if (!matchingRoute) return;
      event.preventDefault();
      selectRoute(matchingRoute);
    });
  }
  syncFrameLanguage();
  if (section) stabilizeFrameSection(section);
  frame.classList.add("ready");
  const sequence = navigationSequence;
  setTimeout(() => {
    if (sequence === navigationSequence) setFrameLoading(false);
  }, 1100);
}

function waitForFrameDocument(sequence, section) {
  const startedAt = Date.now();
  const check = () => {
    if (sequence !== navigationSequence) return;
    let doc;
    try { doc = frame.contentDocument; } catch { return; }
    if (doc?.readyState !== "loading" && doc.getElementById(section)) {
      prepareFrame(section);
      return;
    }
    if (Date.now() - startedAt < 15000) setTimeout(check, 50);
  };
  check();
}

function syncFrameLanguage() {
  let doc;
  try { doc = frame.contentDocument; } catch { return; }
  if (!doc) return;
  const button = doc.querySelector(`[data-lang-option="${language}"]`) || doc.querySelector(`[data-language="${language}"]`);
  if (button && !button.classList.contains("active") && button.getAttribute("aria-pressed") !== "true") button.click();
}

function selectRoute(link, pushHistory = true) {
  if (!link) return;
  activeRoute = link;
  const page = link.dataset.page || "home";
  const section = link.dataset.section || "start";
  routeLinks.forEach((item) => item.classList.toggle("active", item === link));
  const parentModule = link.closest(".nav-module");
  if (parentModule) setModuleExpanded(parentModule, true);
  const expectedPath = new URL(routes[page] || routes.home, location.href).pathname;
  let loadedPath = "";
  let frameDocument;
  try {
    loadedPath = frame.contentWindow.location.pathname;
    frameDocument = frame.contentDocument;
  } catch {
    // The next iframe load will finish synchronization.
  }
  const sequence = ++navigationSequence;
  if (loadedPath === expectedPath && frameDocument?.readyState !== "loading") {
    try { frame.contentWindow.history.replaceState(null, "", `#${section}`); } catch { /* same-origin fallback below */ }
    syncFrameLanguage();
    stabilizeFrameSection(section, sequence);
    frame.classList.add("ready");
    setFrameLoading(false);
  } else {
    frame.classList.remove("ready");
    setFrameLoading(true);
    if (loadedPath !== expectedPath) frame.src = frameUrl(page, section);
    waitForFrameDocument(sequence, section);
  }
  updateCurrentTitle();
  if (pushHistory) history.pushState({ page, section }, "", `?page=${encodeURIComponent(page)}&section=${encodeURIComponent(section)}`);
  requestAnimationFrame(() => link.scrollIntoView({ block: "nearest" }));
  if (window.innerWidth <= 820) setMenu(false);
}

function routeFromLocation() {
  const params = new URLSearchParams(location.search);
  const requestedPage = params.get("page");
  const requestedSection = params.get("section") || location.hash.slice(1);
  if (requestedSection) {
    const exact = routeLinks.find((link) => (!requestedPage || link.dataset.page === requestedPage) && link.dataset.section === requestedSection);
    if (exact) return exact;
  }
  if (requestedPage) return routeLinks.find((link) => link.dataset.page === requestedPage);
  return routeLinks.find((link) => link.dataset.page === "home");
}

routeLinks.forEach((link) => link.addEventListener("click", (event) => {
  event.preventDefault();
  selectRoute(link);
}));
modules.forEach((module) => {
  module.classList.add("collapsed");
  setModuleExpanded(module, false);
  module.querySelector(".module-toggle").addEventListener("click", () => setModuleExpanded(module, module.classList.contains("collapsed")));
});
document.querySelectorAll("[data-portal-lang]").forEach((button) => button.addEventListener("click", () => applyPortalLanguage(button.dataset.portalLang)));
menuButton.addEventListener("click", () => setMenu(!sidebar.classList.contains("open")));
scrim.addEventListener("click", () => setMenu(false));
frame.addEventListener("load", () => prepareFrame(activeRoute?.dataset.section));
window.addEventListener("popstate", () => selectRoute(routeFromLocation(), false));

applyPortalLanguage(language, false);
selectRoute(routeFromLocation(), false);
