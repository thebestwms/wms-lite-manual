const LANGUAGE_STORAGE_KEY = "wms-lite-manual-language";

const LANGUAGE_META = {
  zh: { htmlLang: "zh-CN", title: "Orbiflow WMS-Lite 功能说明书" },
  ja: { htmlLang: "ja", title: "Orbiflow WMS-Lite 機能説明書" },
  en: { htmlLang: "en", title: "Orbiflow WMS-Lite Functional Manual" }
};

const PAGE_LABELS = {
  "index.html": { zh: "首页 + MDM", ja: "ホーム + MDM", en: "Home + MDM" },
  "inbound.html": { zh: "Inbound + Outbound", ja: "入庫 + 出庫", en: "Inbound + Outbound" },
  "inventory.html": { zh: "Inventory + Cycle Count", ja: "在庫 + 棚卸", en: "Inventory + Cycle Count" }
};

// Homepage + MDM core copy; extend this page-scoped dictionary in reviewed batches.
const MDM_TRANSLATIONS = {
  ja: {
    "从业务场景出发，": "業務シナリオから始め、",
    "看懂系统如何落地仓储要求": "倉庫要件がシステムにどう反映されるかを理解する",
    "理解模块": "モジュールを理解する", "对应场景": "シナリオに対応する", "查看页面": "画面を確認する", "落地作业": "現場作業に落とし込む",
    "业务主体": "業務主体", "建立客户与组织身份": "顧客と組織の識別情報を登録する", "商品与包装": "商品と包装", "让商品可识别、可换算": "商品を識別・換算可能にする",
    "分类与扩展": "分類と拡張", "按行业扩展商品资料": "業種別に商品情報を拡張する", "物流资料": "物流情報", "为运输准备承运商与地址": "輸送用の運送会社と住所を準備する",
    "统一登记业务参与方，供不同仓储场景重复使用": "業務参加者を一元登録し、さまざまな倉庫シナリオで再利用する"
  },
  en: {
    "从业务场景出发，": "Start from business scenarios and", "看懂系统如何落地仓储要求": "understand how warehouse requirements are implemented",
    "理解模块": "Understand the module", "对应场景": "Map the scenario", "查看页面": "Review the screen", "落地作业": "Put it into operation",
    "业务主体": "Business parties", "建立客户与组织身份": "Establish customer and organization identities", "商品与包装": "Products and packaging", "让商品可识别、可换算": "Make products identifiable and convertible",
    "分类与扩展": "Classification and extensions", "按行业扩展商品资料": "Extend product data by industry", "物流资料": "Logistics data", "为运输准备承运商与地址": "Prepare carriers and addresses for transportation",
    "统一登记业务参与方，供不同仓储场景重复使用": "Register business participants once and reuse them across warehouse scenarios"
  }
};

const TRANSLATIONS = {
  ja: {
    "阅读指南": "読書ガイド", "功能说明书 · 样章": "機能説明書 · サンプル",
    "Master Data": "マスターデータ", "Inbound": "入庫", "Outbound": "出庫",
    "Inventory": "在庫", "Cycle Count": "棚卸", "Organization": "組織",
    "Customer": "顧客", "Item": "商品", "Industry": "業種", "Hazard": "危険品",
    "Carrier": "運送会社", "Address": "住所", "Receipt": "入荷", "RMA Management": "RMA 管理",
    "Outbound Order": "出庫注文", "Inventory Commitment": "在庫引当", "Order Plans": "出庫計画",
    "Order Dispatch": "注文ディスパッチ", "Order Filters": "注文フィルター",
    "Order Dispatch Settings": "ディスパッチ設定", "Small Parcel Station": "小口ステーション",
    "Load Management": "積込管理", "Shipment Tickets": "出荷チケット",
    "Inventory Lock": "在庫ロック", "Inventory Activity": "在庫アクティビティ",
    "Count Tickets": "棚卸チケット", "Count Tasks": "棚卸タスク", "Count Results": "棚卸結果",
    "开始阅读": "読み始める", "返回顶部 ↑": "トップへ戻る ↑", "点击放大": "クリックして拡大",
    "核心场景": "主要シナリオ", "使用场景": "利用シーン", "页面用途": "ページの用途",
    "业务流程": "業務フロー", "配置结果": "設定結果", "当前系统页面整理": "現在のシステム画面に基づく整理",
    "仓储业务，从准确的基础资料开始": "正確なマスターデータから始まる倉庫業務",
    "让计划到仓的货物，经过收货与上架进入库存": "入荷と棚入れを経て計画貨物を在庫にする",
    "Outbound 统筹出库订单、仓内履约与发运交接": "出庫注文、倉内履行、出荷引き渡しを統括する",
    "掌握仓内存量、可用范围与每一次库存变化": "在庫数量、利用可能範囲、すべての在庫変動を把握する",
    "盘点": "棚卸", "库存": "在庫", "入库": "入庫", "出库": "出庫", "上架": "棚入れ",
    "收货": "入荷", "订单": "注文", "任务": "タスク", "商品": "商品", "库位": "ロケーション",
    "容器": "コンテナ", "客户": "顧客", "供应商": "サプライヤー", "承运商": "運送会社",
    "列表": "一覧", "详情": "詳細", "创建": "作成", "编辑": "編集", "保存": "保存",
    "查询": "検索", "状态": "ステータス", "数量": "数量", "完成": "完了", "取消": "キャンセル"
  },
  en: {
    "阅读指南": "Reading Guide", "功能说明书 · 样章": "Functional Manual · Sample",
    "Master Data": "Master Data", "Inbound": "Inbound", "Outbound": "Outbound",
    "Inventory": "Inventory", "Cycle Count": "Cycle Count", "Organization": "Organization",
    "Customer": "Customer", "Item": "Item", "Industry": "Industry", "Hazard": "Hazard",
    "Carrier": "Carrier", "Address": "Address", "Receipt": "Receipt", "RMA Management": "RMA Management",
    "Outbound Order": "Outbound Order", "Inventory Commitment": "Inventory Commitment", "Order Plans": "Order Plans",
    "Order Dispatch": "Order Dispatch", "Order Filters": "Order Filters", "Order Dispatch Settings": "Order Dispatch Settings",
    "Small Parcel Station": "Small Parcel Station", "Load Management": "Load Management", "Shipment Tickets": "Shipment Tickets",
    "Inventory Lock": "Inventory Lock", "Inventory Activity": "Inventory Activity", "Count Tickets": "Count Tickets",
    "Count Tasks": "Count Tasks", "Count Results": "Count Results", "开始阅读": "Start Reading",
    "返回顶部 ↑": "Back to top ↑", "点击放大": "Click to enlarge", "核心场景": "Core Scenario",
    "使用场景": "Use Case", "页面用途": "Page Purpose", "业务流程": "Business Flow",
    "配置结果": "Configuration Result", "当前系统页面整理": "Based on the current system pages",
    "仓储业务，从准确的基础资料开始": "Warehouse operations start with accurate master data",
    "让计划到仓的货物，经过收货与上架进入库存": "Move planned arrivals into inventory through receiving and put-away",
    "Outbound 统筹出库订单、仓内履约与发运交接": "Coordinate outbound orders, fulfillment, and shipment handoff",
    "掌握仓内存量、可用范围与每一次库存变化": "Track on-hand inventory, availability, and every inventory change",
    "盘点": "Cycle Count", "库存": "Inventory", "入库": "Inbound", "出库": "Outbound", "上架": "Put-away",
    "收货": "Receiving", "订单": "Order", "任务": "Task", "商品": "Item", "库位": "Location",
    "容器": "Container", "客户": "Customer", "供应商": "Supplier", "承运商": "Carrier", "列表": "List",
    "详情": "Details", "创建": "Create", "编辑": "Edit", "保存": "Save", "查询": "Search",
    "状态": "Status", "数量": "Quantity", "完成": "Complete", "取消": "Cancel"
  }
};

function textNodes(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim() || node.parentElement?.closest("script,style,.language-switcher")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}

function translateText(source, lang) {
  if (lang === "zh") return source;
  const dictionary = { ...(TRANSLATIONS[lang] || {}), ...(MDM_TRANSLATIONS[lang] || {}) };
  if (dictionary[source]) return dictionary[source];
  return Object.entries(dictionary)
    .filter(([from]) => from.length > 1)
    .sort((a, b) => b[0].length - a[0].length)
    .reduce((value, [from, to]) => value.split(from).join(to), source);
}

function applyLanguage(lang) {
  const selected = LANGUAGE_META[lang] ? lang : "zh";
  textNodes(document.body).forEach((node) => {
    const source = node.__i18nSource || node.nodeValue.trim();
    const leading = node.nodeValue.match(/^\s*/)?.[0] || "";
    const trailing = node.nodeValue.match(/\s*$/)?.[0] || "";
    node.nodeValue = `${leading}${translateText(source, selected)}${trailing}`;
  });
  document.documentElement.lang = LANGUAGE_META[selected].htmlLang;
  const pageName = location.pathname.split("/").pop() || "index.html";
  const pageLabel = PAGE_LABELS[pageName]?.[selected];
  document.title = pageLabel ? `${LANGUAGE_META[selected].title} · ${pageLabel}` : LANGUAGE_META[selected].title;
  document.querySelectorAll("[aria-label], [alt], [title]").forEach((element) => {
    ["aria-label", "alt", "title"].forEach((attribute) => {
      const dataKey = `i18n${attribute.split("-").map((part) => part[0].toUpperCase() + part.slice(1)).join("")}`;
      const source = element.dataset[dataKey];
      if (source) element.setAttribute(attribute, translateText(source, selected));
    });
  });
  document.querySelectorAll("[data-lang-option]").forEach((button) => button.classList.toggle("active", button.dataset.langOption === selected));
  try { localStorage.setItem(LANGUAGE_STORAGE_KEY, selected); } catch { /* optional persistence */ }
}

document.querySelectorAll("[aria-label], [alt], [title]").forEach((element) => {
  ["aria-label", "alt", "title"].forEach((attribute) => {
    if (element.hasAttribute(attribute)) {
      const dataKey = `i18n${attribute.split("-").map((part) => part[0].toUpperCase() + part.slice(1)).join("")}`;
      element.dataset[dataKey] = element.getAttribute(attribute);
    }
  });
});
textNodes(document.body).forEach((node) => { node.__i18nSource = node.nodeValue.trim(); });
document.querySelectorAll("[data-lang-option]").forEach((button) => button.addEventListener("click", () => applyLanguage(button.dataset.langOption)));
let saved = "zh";
try { saved = localStorage.getItem(LANGUAGE_STORAGE_KEY) || "zh"; } catch { /* ignore */ }
applyLanguage(saved);
