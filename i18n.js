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
    "统一登记业务参与方，供不同仓储场景重复使用": "業務参加者を一元登録し、さまざまな倉庫シナリオで再利用する",
    "Organization 是系统中的统一组织主档。客户、货权方、品牌、供应商、零售商以及企业内部组织，都先以 Organization 记录主体身份，再通过 Tags 指定其可以承担的业务角色。": "Organization はシステム共通の組織マスタです。顧客、所有者、ブランド、サプライヤー、小売業者、社内組織はまず Organization として登録し、Tags で担当できる業務上の役割を指定します。",
    "客户与货权方接入": "顧客と所有者の登録",
    "建立组织主档": "組織マスタを登録する",
    "指定业务角色": "業務上の役割を指定する",
    "维护角色关系": "役割の関係を管理する",
    "进入业务单据": "業務伝票で利用する",
    "集中查看并维护已登记的组织主档": "登録済みの組織マスタを一覧で確認・管理する",
    "一个 Organization 可以同时承担多个业务角色": "1 つの Organization に複数の業務上の役割を設定できる",
    "Tags 是 Organization 资料的一部分，用于说明该组织在系统中可以作为哪类业务主体被选择。": "Tags は Organization の情報の一部であり、システム上でどの種類の業務主体として選択できるかを示します。",
    "Info 记录组织主档，Contacts 补充联系人信息": "Info で組織マスタを管理し、Contacts で連絡先を補足する",
    "把客户约定转化为可执行的仓储配置": "顧客との取り決めを実行可能な倉庫設定に変換する",
    "Customer 面向货主或委托客户。在统一 Organization 身份基础上，集中维护客户资料、入出库与上架策略、设备和数据连接，以及业务伙伴关系。": "Customer は荷主または委託顧客を対象とします。共通の Organization 識別情報を基盤に、顧客情報、入出庫・棚入れ戦略、設備・データ接続、業務パートナー関係を一元管理します。",
    "新客户仓库上线": "新しい顧客向け倉庫を稼働させる",
    "建立客户身份": "顧客の識別情報を登録する",
    "补充客户资料": "顧客情報を補足する",
    "配置仓储策略": "倉庫運用戦略を設定する",
    "关联业务伙伴": "業務パートナーを関連付ける",
    "统一维护仓库识别、追踪和处理商品所需的主档": "倉庫で商品を識別・追跡・処理するためのマスタを一元管理する",
    "新商品接入仓库": "新商品を倉庫に登録する",
    "确认商品身份": "商品の識別情報を確認する",
    "设置追踪要求": "追跡要件を設定する",
    "描述包装层级": "包装階層を定義する",
    "进入仓储业务": "倉庫業務で利用する",
    "按行业扩展商品资料": "業種別に商品情報を拡張する",
    "定义行业专属资料，并为特定作业提供商品分类依据": "業種固有の情報を定義し、特定作業の商品分類基準を提供する",
    "维护危险品定义，供商品主档识别和复用": "商品マスタで識別・再利用できる危険品定義を管理する",
    "从身份识别到运输范围，完成承运商建档": "識別情報から輸送範囲まで運送会社マスタを登録する",
    "按客户集中维护业务地址，供订单与装载快速调用": "顧客の業務住所を一元管理し、注文と積込からすばやく利用する",
    "按客户配置收货、上架、分配、拣货及设备协同方式": "顧客ごとに入荷、棚入れ、引当、ピッキング、設備連携を設定する",
    "入库与上架": "入荷と棚入れ", "出库与拣货": "出庫とピッキング", "自动化与数据连接": "自動化とデータ接続",
    "流程要求": "フロー要件", "时效要求": "時間要件", "完成标准": "完了基準", "数量差异": "数量差異", "容器规则": "コンテナルール", "库位推荐": "ロケーション推奨",
    "不需要系统记录完整的月台作业步骤": "システムでバース作業の全ステップを記録しない",
    "货物确认后立即上架，还是整单收完后统一上架": "確認後すぐ棚入れするか、入荷完了後にまとめて棚入れするか",
    "收货单何时才算完成": "入荷伝票を完了とするタイミング",
    "供应商实到数量允许超过预计数量": "実入荷数量が予定数量を超えることを許可する",
    "一个 LP 是否可以同时装载多个 SKU": "1 つの LP に複数 SKU を混載できるか",
    "系统按照什么顺序寻找上架库位": "システムが棚入れ先を検索する順序",
    "库存周转": "在庫回転", "订单组织": "注文の編成", "订单变更": "注文変更", "库位利用": "ロケーション利用", "拣货路径": "ピッキング経路", "批次控制": "ロット管理",
    "设备执行": "設備実行", "结果通知": "結果通知", "客户化资料": "顧客固有データ"
  },
  en: {
    "从业务场景出发，": "Start from business scenarios and", "看懂系统如何落地仓储要求": "understand how warehouse requirements are implemented",
    "理解模块": "Understand the module", "对应场景": "Map the scenario", "查看页面": "Review the screen", "落地作业": "Put it into operation",
    "业务主体": "Business parties", "建立客户与组织身份": "Establish customer and organization identities", "商品与包装": "Products and packaging", "让商品可识别、可换算": "Make products identifiable and convertible",
    "分类与扩展": "Classification and extensions", "按行业扩展商品资料": "Extend product data by industry", "物流资料": "Logistics data", "为运输准备承运商与地址": "Prepare carriers and addresses for transportation",
    "统一登记业务参与方，供不同仓储场景重复使用": "Register business participants once and reuse them across warehouse scenarios",
    "Organization 是系统中的统一组织主档。客户、货权方、品牌、供应商、零售商以及企业内部组织，都先以 Organization 记录主体身份，再通过 Tags 指定其可以承担的业务角色。": "Organization is the shared organization master. Customers, title owners, brands, suppliers, retailers, and internal organizations are first registered as Organizations, then assigned business roles through Tags.",
    "客户与货权方接入": "Onboard customers and title owners",
    "建立组织主档": "Create the organization master",
    "指定业务角色": "Assign business roles",
    "维护角色关系": "Maintain role relationships",
    "进入业务单据": "Use it in business documents",
    "集中查看并维护已登记的组织主档": "Review and maintain registered organizations in one list",
    "一个 Organization 可以同时承担多个业务角色": "One Organization can carry multiple business roles",
    "Tags 是 Organization 资料的一部分，用于说明该组织在系统中可以作为哪类业务主体被选择。": "Tags are part of the Organization record and define which type of business party the organization can be selected as.",
    "Info 记录组织主档，Contacts 补充联系人信息": "Use Info for the organization master and Contacts for contact details",
    "把客户约定转化为可执行的仓储配置": "Turn customer agreements into executable warehouse configuration",
    "Customer 面向货主或委托客户。在统一 Organization 身份基础上，集中维护客户资料、入出库与上架策略、设备和数据连接，以及业务伙伴关系。": "Customer represents an owner or contracted customer. Based on the shared Organization identity, it centralizes customer data, inbound/outbound and put-away strategies, equipment and data connections, and business-partner relationships.",
    "新客户仓库上线": "Bring a new customer warehouse online",
    "建立客户身份": "Establish the customer identity",
    "补充客户资料": "Complete customer information",
    "配置仓储策略": "Configure warehouse strategies",
    "关联业务伙伴": "Link business partners",
    "统一维护仓库识别、追踪和处理商品所需的主档": "Maintain the master data required to identify, track, and handle products in the warehouse",
    "新商品接入仓库": "Onboard a new product into the warehouse",
    "确认商品身份": "Confirm product identity",
    "设置追踪要求": "Set tracking requirements",
    "描述包装层级": "Describe packaging levels",
    "进入仓储业务": "Make it available to warehouse operations",
    "按行业扩展商品资料": "Extend product data by industry",
    "定义行业专属资料，并为特定作业提供商品分类依据": "Define industry-specific data and provide product classification criteria for specialized operations",
    "维护危险品定义，供商品主档识别和复用": "Maintain hazardous-material definitions for product-master identification and reuse",
    "从身份识别到运输范围，完成承运商建档": "Complete carrier setup from identity to transportation scope",
    "按客户集中维护业务地址，供订单与装载快速调用": "Maintain customer business addresses centrally for quick use in orders and loads",
    "按客户配置收货、上架、分配、拣货及设备协同方式": "Configure receiving, put-away, allocation, picking, and equipment coordination by customer",
    "入库与上架": "Inbound and put-away", "出库与拣货": "Outbound and picking", "自动化与数据连接": "Automation and data connections",
    "流程要求": "Process requirement", "时效要求": "Timing requirement", "完成标准": "Completion standard", "数量差异": "Quantity variance", "容器规则": "Container rule", "库位推荐": "Location recommendation",
    "不需要系统记录完整的月台作业步骤": "The system does not need to record every dock step",
    "货物确认后立即上架，还是整单收完后统一上架": "Put away immediately after confirmation or after the entire receipt is complete",
    "收货单何时才算完成": "When the receipt is considered complete",
    "供应商实到数量允许超过预计数量": "Allow the received quantity to exceed the expected quantity",
    "一个 LP 是否可以同时装载多个 SKU": "Whether one LP may contain multiple SKUs",
    "系统按照什么顺序寻找上架库位": "The order in which the system searches for put-away locations",
    "库存周转": "Inventory rotation", "订单组织": "Order grouping", "订单变更": "Order changes", "库位利用": "Location utilization", "拣货路径": "Picking path", "批次控制": "Lot control",
    "设备执行": "Equipment execution", "结果通知": "Result notifications", "客户化资料": "Customer-specific data"
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
