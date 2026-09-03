const routes = {
  home: "wms-lite.html",
  mdm: "wms-lite.html",
  inbound: "inbound.html",
  outbound: "inbound.html",
  inventory: "inventory.html",
  "cycle-count": "inventory.html",
  task: "task/index.html",
  "wcs-home": "wms-lite.html",
  wcs: "wcs/index.html"
};

const translations = {
  zh: {
    home: "首页", manual: "统一功能说明书", mdm: "主数据", organization: "组织", customer: "客户", item: "商品", industry: "行业", hazard: "危险品", carrier: "承运商", address: "地址",
    inbound: "入库", receipt: "收货单", rma: "退货入库", outbound: "出库", outboundOrder: "出库订单", commitment: "库存承诺", orderPlans: "订单计划", dispatch: "订单调度", orderFilters: "订单过滤器", dispatchSettings: "调度设置", smallParcel: "小包工作站", loadManagement: "装载管理", shipmentTickets: "发运单",
    inventory: "库存", inventoryList: "库存总览", inventoryLock: "库存锁定", inventoryActivity: "库存活动", adjustment: "库存调整", minMax: "最小/最大设置", holiday: "节假日管理", cycleCount: "盘点", countTickets: "盘点单", countTasks: "盘点任务", countResults: "盘点结果",
    task: "任务", receiveTask: "收货任务", putAwayTask: "上架任务", pickTask: "拣货任务", packTask: "打包任务", replenishmentTask: "补货任务", loadTask: "装车任务", movementTask: "移库任务", scenarioTasks: "特定场景任务", putBackTask: "退库任务", technical: "技术页面", wcsManual: "控制系统", dashboard: "仪表盘", configuration: "配置", actionType: "动作类型配置", workflowDefinitions: "工作流定义", systemWorkflows: "系统工作流", jobFilters: "作业过滤器", jobDispatch: "作业调度设置", messageConfig: "消息配置", runtime: "运行", jobManagement: "作业管理", workflowInstances: "工作流实例", nodeExecutions: "节点执行", station: "工作站", enterStation: "进入工作站", workstation: "工作站", acceptTasks: "接收任务", operations: "运维", messageLogs: "消息发送日志", deviceApp: "设备应用", communicationLogs: "通信日志", deviceDebug: "设备/RCS 调试", callbackRecords: "回调记录",
    openMenu: "打开菜单", closeMenu: "关闭菜单", expand: "展开", collapse: "收起", loading: "正在加载内容"
  },
  ja: {
    home: "ホーム", manual: "統合機能マニュアル", mdm: "マスターデータ", organization: "組織", customer: "顧客", item: "商品", industry: "業種", hazard: "危険物", carrier: "配送業者", address: "住所",
    inbound: "入庫", receipt: "入荷伝票", rma: "返品入庫", outbound: "出庫", outboundOrder: "出庫注文", commitment: "在庫引当", orderPlans: "注文計画", dispatch: "注文ディスパッチ", orderFilters: "注文フィルター", dispatchSettings: "ディスパッチ設定", smallParcel: "小口出荷ステーション", loadManagement: "積込管理", shipmentTickets: "出荷伝票",
    inventory: "在庫", inventoryList: "在庫一覧", inventoryLock: "在庫ロック", inventoryActivity: "在庫活動", adjustment: "在庫調整", minMax: "最小／最大設定", holiday: "休日管理", cycleCount: "棚卸", countTickets: "棚卸伝票", countTasks: "棚卸タスク", countResults: "棚卸結果",
    task: "タスク", receiveTask: "入荷タスク", putAwayTask: "棚入れタスク", pickTask: "ピッキングタスク", packTask: "梱包タスク", replenishmentTask: "補充タスク", loadTask: "積込タスク", movementTask: "移動タスク", scenarioTasks: "特定シナリオタスク", putBackTask: "戻し入れタスク", technical: "技術情報", wcsManual: "制御システム", dashboard: "ダッシュボード", configuration: "設定", actionType: "アクションタイプ設定", workflowDefinitions: "ワークフロー定義", systemWorkflows: "システムワークフロー", jobFilters: "ジョブフィルター", jobDispatch: "ジョブディスパッチ設定", messageConfig: "メッセージ設定", runtime: "実行管理", jobManagement: "ジョブ管理", workflowInstances: "ワークフローインスタンス", nodeExecutions: "ノード実行", station: "ステーション", enterStation: "ステーション入場", workstation: "ワークステーション", acceptTasks: "タスク受付", operations: "運用", messageLogs: "メッセージ送信ログ", deviceApp: "デバイスアプリ", communicationLogs: "通信ログ", deviceDebug: "デバイス/RCS デバッグ", callbackRecords: "コールバック記録",
    openMenu: "メニューを開く", closeMenu: "メニューを閉じる", expand: "展開", collapse: "折りたたむ", loading: "コンテンツを読み込み中"
  },
  en: {
    home: "Home", manual: "Unified Function Manual", mdm: "Master Data", organization: "Organization", customer: "Customer", item: "Item", industry: "Industry", hazard: "Hazard", carrier: "Carrier", address: "Address",
    inbound: "Inbound", receipt: "Receipt", rma: "RMA Management", outbound: "Outbound", outboundOrder: "Outbound Order", commitment: "Inventory Commitment", orderPlans: "Order Plans", dispatch: "Order Dispatch", orderFilters: "Order Filters", dispatchSettings: "Dispatch Settings", smallParcel: "Small Parcel Station", loadManagement: "Load Management", shipmentTickets: "Shipment Tickets",
    inventory: "Inventory", inventoryList: "Inventory Overview", inventoryLock: "Inventory Lock", inventoryActivity: "Inventory Activity", adjustment: "Adjustment", minMax: "Min/Max Setting", holiday: "Holiday Management", cycleCount: "Cycle Count", countTickets: "Count Tickets", countTasks: "Count Tasks", countResults: "Count Results",
    task: "Task", receiveTask: "Receive Task", putAwayTask: "Put Away Task", pickTask: "Pick Task", packTask: "Pack Task", replenishmentTask: "Replenishment Task", loadTask: "Load Task", movementTask: "Movement Task", scenarioTasks: "Scenario-Specific Tasks", putBackTask: "Put Back Task", technical: "Technical", wcsManual: "Control System", dashboard: "Dashboard", configuration: "Configuration", actionType: "Action Type Config", workflowDefinitions: "Workflow Definitions", systemWorkflows: "System Workflows", jobFilters: "Job Filters", jobDispatch: "Job Dispatch Settings", messageConfig: "Message Config", runtime: "Runtime", jobManagement: "Job Management", workflowInstances: "Workflow Instances", nodeExecutions: "Node Executions", station: "Station", enterStation: "Enter Station", workstation: "Workstation", acceptTasks: "Accept Tasks", operations: "Operations", messageLogs: "Message Send Logs", deviceApp: "Device App", communicationLogs: "Communication Logs", deviceDebug: "Device/RCS Debug", callbackRecords: "Callback Records",
    openMenu: "Open menu", closeMenu: "Close menu", expand: "Expand", collapse: "Collapse", loading: "Loading content"
  }
};

const contentHost = document.querySelector("#manual-host");
const sidebar = document.querySelector("#portal-sidebar");
const scrim = document.querySelector("#portal-scrim");
const menuButton = document.querySelector("#portal-menu");
const currentTitle = document.querySelector("#current-title");
const portalContent = document.querySelector(".portal-content");
const routeLinks = [...document.querySelectorAll(".portal-route")];
const modules = [...document.querySelectorAll(".nav-module")];
const systemTabs = [...document.querySelectorAll("[data-system-tab]")];
const systemMenus = [...document.querySelectorAll("[data-system-menu]")];
let activeRoute = null;
let language = "zh";
let navigationSequence = 0;
let loadedPage = null;
let loadedSection = null;
let contentRoot = null;
let contentTranslator = null;
let contentAbortController = null;
const languageEnginePromises = new Map();
const sourceDocumentCache = new Map();

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

function setActiveSystem(system) {
  const activeSystem = system === "wcs" ? "wcs" : "wes";
  systemTabs.forEach((tab) => {
    const selected = tab.dataset.systemTab === activeSystem;
    tab.classList.toggle("selected", selected);
    tab.setAttribute("aria-selected", String(selected));
  });
  systemMenus.forEach((menu) => {
    const selected = menu.dataset.systemMenu === activeSystem;
    menu.hidden = !selected;
    menu.toggleAttribute("inert", !selected);
  });
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
  if (syncContent) applyLoadedLanguage();
}

function updateCurrentTitle() {
  if (!activeRoute) return;
  const titleKey = activeRoute.dataset.titleI18n;
  if (titleKey && translations[language][titleKey]) {
    currentTitle.textContent = translations[language][titleKey];
    return;
  }
  const label = activeRoute.querySelector("b") || activeRoute;
  currentTitle.textContent = label.textContent.trim().replace(/^[-–—]\s*/, "");
}

function setContentLoading(loading) {
  portalContent.classList.toggle("loading", loading);
  contentHost.setAttribute("aria-busy", String(loading));
}

function scrollContentTo(section) {
  const target = contentRoot?.getElementById(section);
  if (!target) return false;
  const hostTop = contentHost.getBoundingClientRect().top;
  const targetTop = target.getBoundingClientRect().top;
  contentHost.scrollTop = Math.max(0, contentHost.scrollTop + targetTop - hostTop);
  return true;
}

function stabilizeContentSection(section, sequence = navigationSequence) {
  scrollContentTo(section);
  [80, 200, 500, 1000, 2000].forEach((delay) => {
    setTimeout(() => {
      if (sequence === navigationSequence) scrollContentTo(section);
    }, delay);
  });
}

function ensureLanguageEngine(page) {
  const engine = page === "task" ? "task" : page === "wcs" ? "wcs" : "wms";
  if (!languageEnginePromises.has(engine)) {
    const source = engine === "task"
      ? "./task/i18n.js?v=20260903-native-content-v10"
      : engine === "wcs"
        ? "./wcs/translations.js?v=20260903-native-content-v10"
        : "./i18n.js?v=20260903-native-content-v11";
    languageEnginePromises.set(engine, import(source));
  }
  return languageEnginePromises.get(engine);
}

const wcsTranslator = {
  prepare(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (!node.nodeValue.trim() || node.parentElement?.closest("script,style,noscript")) continue;
      node.__portalI18nSource = node.nodeValue;
    }
    root.querySelectorAll("[aria-label], [alt], [title], [placeholder], [content]").forEach((element) => {
      element.__portalI18nAttributes = {};
      ["aria-label", "alt", "title", "placeholder", "content"].forEach((attribute) => {
        if (element.hasAttribute(attribute)) element.__portalI18nAttributes[attribute] = element.getAttribute(attribute);
      });
    });
  },
  apply(lang, root) {
    const dictionary = window.ORBIFLOW_TRANSLATIONS?.[lang] || {};
    const translate = (value) => {
      if (lang === "zh") return value;
      const content = value.trim();
      if (!content || !dictionary[content]) return value;
      return `${value.match(/^\s*/)?.[0] || ""}${dictionary[content]}${value.match(/\s*$/)?.[0] || ""}`;
    };
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (node.__portalI18nSource !== undefined) node.nodeValue = translate(node.__portalI18nSource);
    }
    root.querySelectorAll("*").forEach((element) => {
      Object.entries(element.__portalI18nAttributes || {}).forEach(([attribute, source]) => {
        element.setAttribute(attribute, translate(source));
      });
    });
  }
};

function moduleTranslator(page) {
  if (page === "task") return window.WmsTaskI18n;
  if (page === "wcs") return wcsTranslator;
  const pageName = (routes[page] || routes.home).split("/").pop();
  return {
    prepare: (root) => window.WmsManualI18n.prepare(root),
    apply: (lang, root) => window.WmsManualI18n.apply(lang, root, pageName)
  };
}

function applyLoadedLanguage() {
  if (!contentRoot || !contentTranslator) return;
  contentTranslator.apply(language, contentRoot);
  if (activeRoute?.dataset.section) stabilizeContentSection(activeRoute.dataset.section);
}

function rewriteContentUrls(root, sourceUrl) {
  const attributes = ["src", "href", "data-lightbox", "data-image"];
  root.querySelectorAll("*").forEach((element) => {
    attributes.forEach((attribute) => {
      const value = element.getAttribute(attribute);
      if (!value || value.startsWith("#") || value.startsWith("data:") || value.startsWith("javascript:")) return;
      element.setAttribute(attribute, new URL(value, sourceUrl).href);
    });
  });
}

function bindContentInteractions(root) {
  if (root.__portalInteractionsBound) return;
  root.__portalInteractionsBound = true;
  root.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-lightbox], .shot-open");
    if (trigger) {
      const dialog = root.getElementById("image-dialog");
      const dialogImage = root.getElementById("dialog-image");
      if (dialog && dialogImage) {
        dialogImage.src = trigger.dataset.lightbox || trigger.dataset.image || trigger.querySelector("img")?.src || "";
        dialogImage.alt = trigger.querySelector("img")?.alt || dialogImage.alt;
        dialog.showModal();
      }
      return;
    }

    const close = event.target.closest("#dialog-close");
    if (close) {
      root.getElementById("image-dialog")?.close();
      return;
    }

    const tab = event.target.closest("[data-settings-tab], [data-item-info-tab], [data-item-config-tab], [data-inventory-tab]");
    if (tab) {
      const attribute = ["data-settings-tab", "data-item-info-tab", "data-item-config-tab", "data-inventory-tab"].find((name) => tab.hasAttribute(name));
      root.querySelectorAll(`[${attribute}]`).forEach((item) => {
        const selected = item === tab;
        item.classList.toggle("active", selected);
        item.setAttribute("aria-selected", String(selected));
        const panel = root.getElementById(item.getAttribute(attribute));
        if (panel) panel.hidden = !selected;
      });
      return;
    }

    const wcsTab = event.target.closest("[data-tab]");
    if (wcsTab) {
      const tabs = wcsTab.closest("[data-tabs]");
      if (tabs) {
        tabs.querySelectorAll("[data-tab]").forEach((item) => {
          const selected = item === wcsTab;
          item.classList.toggle("is-active", selected);
          item.setAttribute("aria-selected", String(selected));
        });
        tabs.querySelectorAll("[role=tabpanel]").forEach((panel) => {
          const selected = panel.id === wcsTab.dataset.tab;
          panel.classList.toggle("is-active", selected);
          panel.hidden = !selected;
        });
      }
      return;
    }

    const link = event.target.closest("a[href]");
    if (!link) return;
    const targetUrl = new URL(link.href, location.href);
    if (targetUrl.origin !== location.origin || !targetUrl.hash) return;
    const matchingRoute = routeLinks.find((route) => {
      const routePath = new URL(routes[route.dataset.page], location.href).pathname;
      return routePath === targetUrl.pathname && route.dataset.section === targetUrl.hash.slice(1);
    });
    if (matchingRoute) {
      event.preventDefault();
      selectRoute(matchingRoute);
    } else if (targetUrl.pathname === new URL(routes[loadedPage] || routes.home, location.href).pathname) {
      event.preventDefault();
      stabilizeContentSection(targetUrl.hash.slice(1));
    }
  });

  const dialog = root.getElementById("image-dialog");
  dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}

function renderContentError() {
  const messages = {
    zh: "内容暂时无法载入，请通过本地服务器或线上地址打开说明书。",
    ja: "コンテンツを読み込めません。ローカルサーバーまたは公開 URL からマニュアルを開いてください。",
    en: "The content could not be loaded. Open the manual from a local server or the published URL."
  };
  const root = contentHost.shadowRoot || contentHost.attachShadow({ mode: "open" });
  root.innerHTML = `<style>:host{display:grid;min-height:100%;place-items:center;background:#f6f3ec;color:#405266;font:14px/1.6 "Microsoft YaHei UI","Yu Gothic UI",sans-serif}.error{max-width:520px;padding:28px;text-align:center}</style><p class="error">${messages[language]}</p>`;
  contentRoot = root;
  contentTranslator = null;
}

async function loadContent(page, section, sequence) {
  contentAbortController?.abort();
  contentAbortController = new AbortController();
  setContentLoading(true);
  try {
    await ensureLanguageEngine(page);
    const sourceUrl = new URL(routes[page] || routes.home, location.href);
    const cacheKey = sourceUrl.pathname;
    let sourceDocument = sourceDocumentCache.get(cacheKey);
    if (!sourceDocument) {
      const response = await fetch(sourceUrl, { signal: contentAbortController.signal });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      sourceDocument = new DOMParser().parseFromString(await response.text(), "text/html");
      sourceDocumentCache.set(cacheKey, sourceDocument);
    }
    const sourceSection = sourceDocument.getElementById(section) || sourceDocument.querySelector("main");
    if (!sourceSection) throw new Error("Manual content is missing");
    const sourceMain = sourceDocument.createElement("main");
    sourceMain.append(sourceSection.cloneNode(true));
    const sourceDialog = sourceDocument.querySelector("#image-dialog");
    const startReading = sourceMain.querySelector("[data-portal-start]");
    if (startReading && page === "wcs-home") startReading.setAttribute("href", "wcs/index.html#dashboard");
    rewriteContentUrls(sourceMain, sourceUrl);
    if (sourceDialog) rewriteContentUrls(sourceDialog, sourceUrl);
    if (sequence !== navigationSequence) return;

    const root = contentHost.shadowRoot || contentHost.attachShadow({ mode: "open" });
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = new URL(page === "task" ? "task/styles.css" : page === "wcs" ? "wcs/styles.css" : "styles.css", location.href).href;
    const embedStyle = document.createElement("style");
    const pageLayoutOverrides = page === "wcs" ? `
      main > .manual-page {
        width: 100%;
        padding: 86px clamp(48px, 6vw, 104px) 96px !important;
        border-top: 0 !important;
      }
      @media (max-width: 1080px) {
        main > .manual-page { padding-left: 45px !important; padding-right: 45px !important; }
      }
      @media (max-width: 820px) {
        main > .manual-page { padding: 62px 22px 70px !important; }
      }
    ` : "";
    embedStyle.textContent = `
      :host {
        display: block; min-height: 100%; overflow-x: hidden; background: #fbfaf7;
        color: #132238; font-family: "Microsoft YaHei UI", "Yu Gothic UI", "Segoe UI", sans-serif; line-height: 1.65;
        --paper: #fbfaf7; --paper-2: #f3f0e9; --paper-deep: #eee9df; --ink: #132238;
        --navy: #0e2a47; --muted: #637083; --blue: #246bfd; --cyan: #00a6a6;
        --teal: #0f9d9a; --amber: #e99a33; --line: #d3d8df; --white: #fff;
        --pale-blue: #eaf1ff; --pale-cyan: #e6f6f4; --pale-amber: #fff2de;
        --shadow: 0 22px 70px rgba(14, 42, 71, .12); --sidebar: 0px;
      }
      main { width: 100% !important; max-width: none !important; margin-left: 0 !important; padding-top: 0 !important; }
      .sidebar, .mobile-header, .language-switcher, .language-switch, .language-switch-floating, .reading-line, #sidebar-scrim { display: none !important; }
      :is(.hero, .mdm-overview, .inbound-overview, .outbound-overview, .inventory-overview, .cycle-count-overview) {
        background: #fbfaf7 !important;
        color: var(--ink) !important;
      }
      :is(.hero, .mdm-overview, .inbound-overview, .outbound-overview, .inventory-overview, .cycle-count-overview)::after {
        color: rgba(14, 42, 71, .045) !important;
      }
      .hero > :is(h1, h2),
      .mdm-heading h2,
      .inbound-heading h2,
      .outbound-overview > h2,
      .inventory-overview > h2,
      .cycle-count-overview > h2 { color: var(--navy) !important; }
      .hero > .hero-lead,
      .mdm-heading > p,
      .inbound-heading > p,
      .outbound-overview > p,
      .inventory-overview > p,
      .cycle-count-overview > p { color: var(--muted) !important; }
      :is(.mdm-overview, .inbound-overview, .outbound-overview, .inventory-overview, .cycle-count-overview) .overview-label,
      :is(.mdm-heading, .inbound-heading) .eyebrow { color: var(--blue) !important; }
      ${pageLayoutOverrides}
      @media (max-width: 820px) { main { width: 100% !important; margin-left: 0 !important; } }
    `;
    root.replaceChildren(stylesheet, embedStyle, document.importNode(sourceMain, true));
    if (sourceDialog) root.append(document.importNode(sourceDialog, true));
    contentRoot = root;
    contentTranslator = moduleTranslator(page);
    contentTranslator.prepare(root);
    contentTranslator.apply(language, root);
    loadedPage = page;
    loadedSection = section;
    bindContentInteractions(root);
    setContentLoading(false);
    stabilizeContentSection(section, sequence);
  } catch (error) {
    if (error.name === "AbortError" || sequence !== navigationSequence) return;
    renderContentError();
    setContentLoading(false);
    console.error("Manual content load failed", error);
  }
}

function selectRoute(link, pushHistory = true) {
  if (!link) return;
  activeRoute = link;
  const page = link.dataset.page || "home";
  const section = link.dataset.section || "start";
  setActiveSystem(page === "wcs" || page === "wcs-home" ? "wcs" : "wes");
  routeLinks.forEach((item) => item.classList.toggle("active", item === link));
  const parentModule = link.closest(".nav-module");
  if (parentModule) setModuleExpanded(parentModule, true);
  const sequence = ++navigationSequence;
  if (loadedPage === page && loadedSection === section && contentRoot) {
    applyLoadedLanguage();
    stabilizeContentSection(section, sequence);
    setContentLoading(false);
  } else {
    loadContent(page, section, sequence);
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
    const exactMatches = routeLinks.filter((link) => (!requestedPage || link.dataset.page === requestedPage) && link.dataset.section === requestedSection);
    const exact = exactMatches.find((link) => link.closest(".module-items")) || exactMatches.find((link) => !link.matches(".system-tab")) || exactMatches[0];
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
window.addEventListener("popstate", () => selectRoute(routeFromLocation(), false));

applyPortalLanguage(language, false);
selectRoute(routeFromLocation(), false);
