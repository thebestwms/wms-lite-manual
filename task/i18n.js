const LANGUAGE_STORAGE_KEY = "wms-lite-task-manual-language";

const LANGUAGE_META = {
  zh: { htmlLang: "zh-CN", title: "Orbiflow WMS-Lite · Task 任务管理 功能说明" },
  ja: { htmlLang: "ja", title: "Orbiflow WMS-Lite · Task タスク管理 機能説明" },
  en: { htmlLang: "en", title: "Orbiflow WMS-Lite · Task Management Manual" }
};

const I18N = {
  ja: {
    "Task 概览": "Task 概要",
    "补充说明": "補足説明",
    "基于当前系统页面整理": "現在のシステム画面に基づいて整理",
    "WMS-Lite 功能说明书": "WMS-Lite 機能説明書",
    "TASK · 任务管理": "TASK · タスク管理",
    "Task 连接系统计划与仓库现场作业": "Task はシステム計画と倉庫現場作業をつなぐ",
    "Task 用来承载需要操作员执行的扫描、搬运、拣货、合托和装车动作。管理员通过 Task 查看任务来源、分配责任人、跟踪进度，并确认库存、订单或发运记录已经按预期更新。": "Task は、作業者が行うスキャン、搬送、ピッキング、パレット集約、積込などの現場作業を管理するための仕組みです。管理者は Task で発生元、担当者、進捗を確認し、在庫・注文・出荷記録が想定どおり更新されたかを追跡できます。",
    "01 · 入库执行": "01 · 入庫作業",
    "把到仓货物转成可用库存": "入荷した貨物を利用可能な在庫にする",
    "从车辆签到、卸货、建立 LP，到把货物上架到储存库位。": "車両受付、荷下ろし、LP 作成から、保管ロケーションへの棚入れまでを扱います。",
    "02 · 出库执行": "02 · 出庫作業",
    "把订单需求转成现场作业": "注文要件を現場作業に変換する",
    "组织拣货、合托和装车确认，确保货物按订单要求完成出库。": "ピッキング、パレット集約、積込確認を組織し、注文要件どおりに出庫できるようにします。",
    "03 · 辅助与专项": "03 · 補助・専用作業",
    "处理补货、移库、退库与特殊场景": "補充、庫内移動、戻し入れ、特殊シナリオを処理する",
    "覆盖库存位置调整、拣货区补货、退库回仓，以及 AGV 或 Kitting 场景。": "在庫ロケーション調整、ピッキングエリア補充、倉庫への戻し入れ、AGV や Kitting シナリオをカバーします。",
    "货车到仓后，逐步完成签到、卸货、收货的执行记录": "トラック到着後、受付・荷下ろし・入荷を段階的に記録する",
    "Receive Task 由 Inbound Receipt 触发生成，代表一次完整的收货作业。它把\"一辆车的货怎么卸下来、扫进系统\"这个过程拆成步骤来管理。每个步骤完成后自动推进到下一步，全部完成后任务关闭。": "Receive Task は Inbound Receipt によって生成され、1 回の入荷作業全体を表します。「トラックの貨物をどのように降ろし、システムへスキャンするか」をステップに分けて管理し、各ステップ完了後に次へ進み、全体完了後にタスクがクローズされます。",
    "核心场景": "主要シナリオ",
    "典型场景": "典型シナリオ",
    "典型触发场景": "典型的な発生シナリオ",
    "供应商送货到仓，操作员按步骤完成收货": "サプライヤーが納品し、作業者がステップに沿って入荷する",
    "一辆货车到达仓库，操作员先在系统签到（Dock Check In），确认月台占用；然后卸货（Offload），将货物从车上搬下；最后逐箱扫描建立容器（LP Setup），货物正式进入库存。": "トラックが倉庫に到着すると、作業者はまず Dock Check In でバース利用を確認し、次に Offload で貨物を降ろし、最後に箱ごとにスキャンして LP Setup を行います。これにより貨物は正式に在庫化されます。",
    "💡 可在 Customer Settings 中配置跳过 Dock Check In 和 Offload，任务创建时直接从 LP Setup 开始。": "💡 Customer Settings で Dock Check In と Offload をスキップする設定が可能です。その場合、タスク作成時に LP Setup から開始します。",
    "点击放大": "クリックして拡大",
    "Receive Task · 列表": "Receive Task · 一覧",
    "实时追踪每条收货任务的执行步骤与进度": "各入荷タスクのステップと進捗をリアルタイムに追跡",
    "Current Step 是日常巡检的关键字段。如果一批任务的 Current Step 长时间停在 Dock Check In，说明月台还没有人去签到；停在 Offload，说明卸货还没开始。Progress 显示已完成 LP 数 / 总数，让管理员不用逐条点开就能判断整体进度。": "Current Step は日常確認の重要項目です。複数タスクが長時間 Dock Check In のままならバース受付が未実施、Offload のままなら荷下ろし未開始を示します。Progress は完了 LP 数 / 総数を表示し、管理者は詳細を開かずに全体進捗を把握できます。",
    "手持端 · 任务列表与操作": "ハンディ端末 · タスク一覧と操作",
    "操作员在 RF/PDA 打开 Receive Task List，任务按 New / In Progress / Done 分 Tab 显示。每张任务卡片包含关键信息，操作员可直接判断优先级并开始执行。": "作業者は RF/PDA で Receive Task List を開き、タスクは New / In Progress / Done のタブで表示されます。各カードには重要情報があり、優先度を判断して作業を開始できます。",
    "PROGRESS（继续执行）": "PROGRESS（続行）",
    "ITEM DETAIL（查看货物明细）": "ITEM DETAIL（貨物明細）",
    "查看本次收货任务关联的商品清单，核对品项、数量与来源 Receipt，方便操作员在执行前确认货物信息。": "この入荷タスクに関連する商品リストを確認し、品目、数量、元 Receipt を照合できます。作業前の貨物確認に役立ちます。",
    "收货完成后，把货物搬到正确的存储库位": "入荷後、貨物を正しい保管ロケーションへ移動する",
    "Put Away Task 负责将收货区的 LP 移入仓库存储区。系统根据 Put Away Strategies 自动推荐目标库位，操作员按任务指引搬运并扫码确认。任务完成后库存位置更新，并在满足库存状态及客户配置时进入可分配状态。": "Put Away Task は入荷エリアの LP を保管エリアへ移動する作業です。システムは Put Away Strategies に基づいて推奨ロケーションを提示し、作業者は指示に従って搬送・スキャン確認します。",
    "货物建好 LP 后，还堆在收货区等待归位": "LP 作成後、貨物は入荷エリアで棚入れ待ちになる",
    "手持端 · 两种上架模式": "ハンディ端末 · 2 つの棚入れ方式",
    "操作员在 RF/PDA 看到任务列表后，每条任务可选择两种执行方式：": "作業者は RF/PDA のタスクリストから、各タスクに対して 2 つの実行方式を選べます。",
    "PUT AWAY TASK · LIST（PC 端）": "PUT AWAY TASK · LIST（PC）",
    "列表关联 Receipt ID 和 Receive Task ID 可追溯来源，Progress 显示已完成 LP 数 / 总数。": "一覧では Receipt ID と Receive Task ID から発生元を追跡でき、Progress は完了 LP 数 / 総数を表示します。",
    "生成时机由 Put Away Mode 控制：": "生成タイミングは Put Away Mode により制御されます:",
    "出库订单分配到位后，指引操作员从库位取货": "出庫注文の引当後、作業者に保管場所からのピッキングを指示する",
    "多笔订单同时出库，系统自动合并拣货路径": "複数注文を同時出庫する際、システムがピッキング経路を集約する",
    "Pick Task · 列表": "Pick Task · 一覧",
    "监控所有拣货任务的执行状态": "すべてのピッキングタスクの実行状態を監視",
    "多箱合托，整托装车": "複数箱をパレットにまとめ、パレット単位で積込",
    "Pack Task 分两种类型：": "Pack Task には 2 種類があります:",
    "多个已拣箱子等待发运，仓库需要合并成可交接的托盘": "複数のピッキング済み箱を、引き渡し可能なパレットへまとめる",
    "扫描 SLP": "SLP をスキャン",
    "逐个扫描 CLP": "CLP を順にスキャン",
    "提交确认": "確定を送信",
    "⚠️ 合托失败常见原因": "⚠️ パレット集約が失敗する主な理由",
    "箱子属于不同客户": "箱が異なる顧客に属している",
    "箱子指定了不同承运商": "箱に異なる運送会社が指定されている",
    "收货地址不一致": "届け先住所が一致しない",
    "Pack Task · 列表": "Pack Task · 一覧",
    "查看合托任务的执行状态": "パレット集約タスクの実行状態を確認",
    "库内任意位置之间的货物移动": "倉庫内の任意ロケーション間で貨物を移動する",
    "什么时候会用到 Movement Task？": "Movement Task はどのような時に使うか？",
    "Movement Task · 创建": "Movement Task · 作成",
    "管理员创建时指定移动方式与目标库存": "管理者が移動方式と対象在庫を指定して作成",
    "手持端 · 两种移动方式对比": "ハンディ端末 · 2 つの移動方式",
    "By LP（整托移动）": "By LP（LP 単位移動）",
    "By Item（拆零移动）": "By Item（商品単位移動）",
    "将库存从储存区搬运到拣货区，保障拣货区不断货": "保管エリアからピッキングエリアへ在庫を補充し、欠品を防ぐ",
    "拣货区库存低于阈值，系统自动安排补货": "ピッキングエリアの在庫がしきい値を下回ると、システムが補充を手配する",
    "Replenishment Task · 详情": "Replenishment Task · 詳細",
    "补货明细与执行步骤": "補充明細と実行ステップ",
    "将已拣货但未发运的库存退回可用存储区": "ピッキング済みだが未出荷の在庫を保管エリアへ戻す",
    "什么情况下需要退库？": "どのような場合に戻し入れが必要か？",
    "Put Back Task · 列表": "Put Back Task · 一覧",
    "先在 PC 列表里筛出待处理的退库任务": "まず PC 一覧で処理対象の戻し入れタスクを絞り込む",
    "手持端 · 执行入口": "ハンディ端末 · 実行入口",
    "RF/PDA 里点 DETAIL 进入退库执行界面。": "RF/PDA で DETAIL をタップして戻し入れ実行画面へ入ります。",
    "Put Back Task · 详情": "Put Back Task · 詳細",
    "在详情页确认任务信息、步骤和历史记录": "詳細画面でタスク情報、ステップ、履歴を確認",
    "确认货物已装入对应车辆，避免漏装或错装": "貨物が正しい車両に積み込まれたことを確認し、積み漏れ・誤積込を防ぐ",
    "承运商车辆到达月台，仓库需要确认这一车该装哪些货": "運送会社の車両がバースに到着し、この車両に積む貨物を確認する",
    "手持端 · 按步骤完成装车": "ハンディ端末 · ステップに沿って積込を完了",
    "Load Task · 列表": "Load Task · 一覧",
    "查看装车任务及关联 Load 信息": "積込タスクと関連 Load 情報を確認",
    "非主流程任务与技术日志": "主フロー外タスクと技術ログ",
    "特定场景 Task": "特定シナリオ Task",
    "AGV 专用": "AGV 専用",
    "Kitting 组装": "Kitting 組立",
    "技术排查页面": "技術調査画面",
    "功能说明书 · Task": "機能説明書 · Task",
    "说明内容基于当前系统页面及已确认的代码行为整理。": "説明内容は現在のシステム画面と確認済みのコード動作に基づいて整理しています。",
    "返回顶部 ↑": "トップへ戻る ↑"
  },
  en: {
    "Task 概览": "Task Overview",
    "补充说明": "Supplement",
    "基于当前系统页面整理": "Based on current system screens",
    "WMS-Lite 功能说明书": "WMS-Lite Manual",
    "TASK · 任务管理": "TASK · Task Management",
    "Task 连接系统计划与仓库现场作业": "Task Connects System Plans With Warehouse Execution",
    "Task 用来承载需要操作员执行的扫描、搬运、拣货、合托和装车动作。管理员通过 Task 查看任务来源、分配责任人、跟踪进度，并确认库存、订单或发运记录已经按预期更新。": "Task manages the scanning, moving, picking, pallet consolidation, and loading work performed by operators. Administrators use Task to review the source, assign ownership, track progress, and confirm that inventory, orders, or shipping records are updated as expected.",
    "01 · 入库执行": "01 · Inbound Execution",
    "把到仓货物转成可用库存": "Turn received goods into available inventory",
    "从车辆签到、卸货、建立 LP，到把货物上架到储存库位。": "Covers dock check-in, offload, LP setup, and put-away to storage locations.",
    "02 · 出库执行": "02 · Outbound Execution",
    "把订单需求转成现场作业": "Turn order requirements into floor execution",
    "组织拣货、合托和装车确认，确保货物按订单要求完成出库。": "Organizes picking, pallet consolidation, and loading confirmation to ensure goods ship according to order requirements.",
    "03 · 辅助与专项": "03 · Support & Special Tasks",
    "处理补货、移库、退库与特殊场景": "Handle replenishment, movement, put-back, and special scenarios",
    "覆盖库存位置调整、拣货区补货、退库回仓，以及 AGV 或 Kitting 场景。": "Covers location adjustment, pick-face replenishment, put-back to storage, and AGV or Kitting scenarios.",
    "货车到仓后，逐步完成签到、卸货、收货的执行记录": "Record dock check-in, offload, and receiving after a truck arrives",
    "Receive Task 由 Inbound Receipt 触发生成，代表一次完整的收货作业。它把\"一辆车的货怎么卸下来、扫进系统\"这个过程拆成步骤来管理。每个步骤完成后自动推进到下一步，全部完成后任务关闭。": "Receive Task is generated from an Inbound Receipt and represents a complete receiving operation. It breaks down how a truckload is unloaded and scanned into the system. After each step is completed, the task moves to the next step and closes when all steps are done.",
    "核心场景": "Core Scenario",
    "典型场景": "Typical Scenario",
    "典型触发场景": "Typical Trigger Scenarios",
    "供应商送货到仓，操作员按步骤完成收货": "Supplier delivers to the warehouse, and the operator completes receiving step by step",
    "一辆货车到达仓库，操作员先在系统签到（Dock Check In），确认月台占用；然后卸货（Offload），将货物从车上搬下；最后逐箱扫描建立容器（LP Setup），货物正式进入库存。": "When a truck arrives, the operator first performs Dock Check In to confirm dock usage, then Offload to unload the goods, and finally scans each box to create LPs. The goods then officially enter inventory.",
    "💡 可在 Customer Settings 中配置跳过 Dock Check In 和 Offload，任务创建时直接从 LP Setup 开始。": "💡 Customer Settings can be configured to skip Dock Check In and Offload, so the task starts directly from LP Setup.",
    "点击放大": "Click to enlarge",
    "Receive Task · 列表": "Receive Task · List",
    "实时追踪每条收货任务的执行步骤与进度": "Track the step and progress of every receiving task in real time",
    "Current Step 是日常巡检的关键字段。如果一批任务的 Current Step 长时间停在 Dock Check In，说明月台还没有人去签到；停在 Offload，说明卸货还没开始。Progress 显示已完成 LP 数 / 总数，让管理员不用逐条点开就能判断整体进度。": "Current Step is a key field for daily checks. If many tasks stay at Dock Check In for a long time, no one has checked in at the dock yet; if they stay at Offload, unloading has not started. Progress shows completed LPs / total LPs, so administrators can assess progress without opening each task.",
    "手持端 · 任务列表与操作": "RF/PDA · Task List and Actions",
    "操作员在 RF/PDA 打开 Receive Task List，任务按 New / In Progress / Done 分 Tab 显示。每张任务卡片包含关键信息，操作员可直接判断优先级并开始执行。": "Operators open the Receive Task List on RF/PDA. Tasks are grouped by New / In Progress / Done tabs. Each card contains key information so operators can judge priority and start work directly.",
    "PROGRESS（继续执行）": "PROGRESS (Continue)",
    "ITEM DETAIL（查看货物明细）": "ITEM DETAIL (Item Details)",
    "查看本次收货任务关联的商品清单，核对品项、数量与来源 Receipt，方便操作员在执行前确认货物信息。": "View the item list related to this receiving task and verify items, quantities, and source Receipt before execution.",
    "收货完成后，把货物搬到正确的存储库位": "Move received goods to the correct storage location",
    "Put Away Task 负责将收货区的 LP 移入仓库存储区。系统根据 Put Away Strategies 自动推荐目标库位，操作员按任务指引搬运并扫码确认。任务完成后库存位置更新，并在满足库存状态及客户配置时进入可分配状态。": "Put Away Task moves LPs from the receiving area to storage. The system recommends target locations based on Put Away Strategies. Operators move the LPs and scan to confirm.",
    "货物建好 LP 后，还堆在收货区等待归位": "After LP setup, goods remain in receiving and wait to be put away",
    "手持端 · 两种上架模式": "RF/PDA · Two Put-Away Modes",
    "操作员在 RF/PDA 看到任务列表后，每条任务可选择两种执行方式：": "After viewing the task list on RF/PDA, operators can choose one of two execution modes for each task:",
    "PUT AWAY TASK · LIST（PC 端）": "PUT AWAY TASK · LIST (PC)",
    "列表关联 Receipt ID 和 Receive Task ID 可追溯来源，Progress 显示已完成 LP 数 / 总数。": "The list links Receipt ID and Receive Task ID for traceability. Progress shows completed LPs / total LPs.",
    "生成时机由 Put Away Mode 控制：": "Creation timing is controlled by Put Away Mode:",
    "出库订单分配到位后，指引操作员从库位取货": "Guide operators to pick goods after outbound orders are allocated",
    "多笔订单同时出库，系统自动合并拣货路径": "When multiple orders ship together, the system consolidates the picking route",
    "Pick Task · 列表": "Pick Task · List",
    "监控所有拣货任务的执行状态": "Monitor the execution status of all picking tasks",
    "多箱合托，整托装车": "Consolidate multiple boxes onto a pallet for loading",
    "Pack Task 分两种类型：": "Pack Task has two types:",
    "多个已拣箱子等待发运，仓库需要合并成可交接的托盘": "Multiple picked boxes are waiting to ship and need to be consolidated into a handover-ready pallet",
    "扫描 SLP": "Scan SLP",
    "逐个扫描 CLP": "Scan CLPs one by one",
    "提交确认": "Submit confirmation",
    "⚠️ 合托失败常见原因": "⚠️ Common Reasons Pallet Consolidation Fails",
    "箱子属于不同客户": "Boxes belong to different customers",
    "箱子指定了不同承运商": "Boxes are assigned to different carriers",
    "收货地址不一致": "Ship-to addresses do not match",
    "Pack Task · 列表": "Pack Task · List",
    "查看合托任务的执行状态": "View the execution status of pallet consolidation tasks",
    "库内任意位置之间的货物移动": "Move goods between any warehouse locations",
    "什么时候会用到 Movement Task？": "When is Movement Task used?",
    "Movement Task · 创建": "Movement Task · Create",
    "管理员创建时指定移动方式与目标库存": "Specify movement mode and target inventory when creating the task",
    "手持端 · 两种移动方式对比": "RF/PDA · Two Movement Modes",
    "By LP（整托移动）": "By LP (move the whole LP)",
    "By Item（拆零移动）": "By Item (item-level movement)",
    "将库存从储存区搬运到拣货区，保障拣货区不断货": "Move inventory from storage to the pick face to prevent shortages",
    "拣货区库存低于阈值，系统自动安排补货": "When pick-face inventory falls below the threshold, the system schedules replenishment",
    "Replenishment Task · 详情": "Replenishment Task · Detail",
    "补货明细与执行步骤": "Replenishment details and execution steps",
    "将已拣货但未发运的库存退回可用存储区": "Return picked but unshipped inventory to available storage",
    "什么情况下需要退库？": "When is put-back needed?",
    "Put Back Task · 列表": "Put Back Task · List",
    "先在 PC 列表里筛出待处理的退库任务": "Filter pending put-back tasks on the PC list first",
    "手持端 · 执行入口": "RF/PDA · Execution Entry",
    "RF/PDA 里点 DETAIL 进入退库执行界面。": "Tap DETAIL on RF/PDA to enter the put-back execution screen.",
    "Put Back Task · 详情": "Put Back Task · Detail",
    "在详情页确认任务信息、步骤和历史记录": "Confirm task information, steps, and history on the detail page",
    "确认货物已装入对应车辆，避免漏装或错装": "Confirm goods are loaded onto the correct vehicle to prevent missing or wrong loading",
    "承运商车辆到达月台，仓库需要确认这一车该装哪些货": "When the carrier vehicle arrives at the dock, the warehouse needs to confirm what should be loaded",
    "手持端 · 按步骤完成装车": "RF/PDA · Complete loading step by step",
    "Load Task · 列表": "Load Task · List",
    "查看装车任务及关联 Load 信息": "View loading tasks and related Load information",
    "非主流程任务与技术日志": "Non-Mainflow Tasks and Technical Logs",
    "特定场景 Task": "Scenario-Specific Tasks",
    "AGV 专用": "AGV Only",
    "Kitting 组装": "Kitting Assembly",
    "技术排查页面": "Technical Troubleshooting Pages",
    "功能说明书 · Task": "Manual · Task",
    "说明内容基于当前系统页面及已确认的代码行为整理。": "Content is based on current system pages and confirmed code behavior.",
    "返回顶部 ↑": "Back to top ↑"
  }
};

Object.assign(I18N.ja, {
  "进入当前步骤的执行界面，按系统指引完成 Dock Check In、Offload 或 LP Setup。卡片上实时显示步骤进度，如": "現在ステップの実行画面に入り、システム案内に沿って Dock Check In、Offload、LP Setup を完了します。カードにはステップ進捗がリアルタイムで表示されます。例:",
  "，操作员随时知道当前在哪一步。": "。作業者は現在どのステップにいるかを把握できます。",
  "💡 任务卡片顶部标签区分优先级：": "💡 タスクカード上部のラベルで優先度を区別します:",
  "（红色）表示紧急任务，操作员应优先处理；": "（赤）は緊急タスクで、優先対応が必要です。",
  "（蓝色）为常规任务。": "（青）は通常タスクです。",
  "收货区是货物入仓后的临时作业区域。LP Setup 完成后，系统根据 Put Away Strategies（上架策略）自动推荐目标库位并生成 Put Away Task。操作员按任务指引将 LP 搬运至目标库位扫码确认，库存位置随之更新；后续是否可用于出库分配，还取决于库存状态及客户配置。": "入荷エリアは貨物入庫後の一時作業エリアです。LP Setup 完了後、システムは Put Away Strategies に基づき推奨ロケーションを提示して Put Away Task を生成します。作業者が LP を目標ロケーションへ運びスキャン確認すると在庫位置が更新されます。出庫引当可能かどうかは在庫状態と顧客設定によります。",
  "整托上架。扫描 LP 条码后，系统直接推荐目标库位，操作员将整个容器搬至目标位置扫码确认。适合托盘整进整出、无需拆件的场景，效率更高。": "LP 単位の棚入れ。LP バーコードをスキャンすると、システムが目標ロケーションを提示し、作業者は容器全体を移動してスキャン確認します。パレット単位で扱う場面に適しています。",
  "拆件上架。按商品维度逐件扫描确认，系统可为不同 SKU 推荐不同目标库位。适合混托收货、需要按品类分区存放的场景。": "商品単位の棚入れ。商品ごとにスキャン確認し、SKU ごとに異なる目標ロケーションを提示できます。混載入荷や品目別保管に適しています。",
  "💡 任务列表按 New / In Progress / Done 三个状态分 Tab 显示，操作员可直接在 New 列表中领取并开始执行。": "💡 タスクリストは New / In Progress / Done の 3 状態タブで表示され、作業者は New から直接受け取って開始できます。",
  "— 每完成一个 LP 即生成；": "— LP ごとに完了した時点で生成。",
  "— 整个收货任务关闭后统一生成。": "— 入荷タスク全体のクローズ後にまとめて生成。",
  "Pick Task 由 Order Dispatch 根据 Order Plan 的 Pick Method 和 Pick Mode 自动生成。它告诉操作员去哪个库位、取什么 SKU、取多少。拣货完成后，相关库存完成拣取并等待后续打包、合流或装车。": "Pick Task は Order Dispatch が Order Plan の Pick Method と Pick Mode に基づいて自動生成します。作業者にどのロケーションで、どの SKU を、いくつ取るかを示します。完了後、在庫はピッキング済みとなり、後続の梱包、集約、積込を待ちます。",
  "仓库同时收到 3 笔订单：DN-001（洗发水 ×2）、DN-002（洗发水 ×1）、DN-003（沐浴露 ×3）。系统将其合并为 1 个 Pick Task，拣货员只需跑 2 个库位完成全部拣取，无需手工核单。": "倉庫が 3 件の注文を同時に受けた場合: DN-001（シャンプー ×2）、DN-002（シャンプー ×1）、DN-003（ボディソープ ×3）。システムは 1 つの Pick Task にまとめ、作業者は 2 つのロケーションを回るだけで完了できます。",
  "库位 A-01": "ロケーション A-01",
  "：洗发水 ×3（DN-001 的 2 瓶 + DN-002 的 1 瓶）": "：シャンプー ×3（DN-001 の 2 本 + DN-002 の 1 本）",
  "库位 B-02": "ロケーション B-02",
  "：沐浴露 ×3（DN-003）": "：ボディソープ ×3（DN-003）",
  "Batch Assign 可批量指派操作员；Current Step 和 Progress 实时反映每条任务执行进度。": "Batch Assign で作業者を一括割当できます。Current Step と Progress は各タスクの進捗をリアルタイムに示します。",
  "（多箱合托）和": "（複数箱のパレット集約）と",
  "（小包裹快递）。本页介绍 CONSOLIDATE_PALLET——将多个已拣货箱子（CLP）归入同一托盘（SLP），适用于整车（TL）、零担（LTL）或自提（WILL_CALL）发货场景。": "（小口配送）。本ページでは CONSOLIDATE_PALLET を説明します。複数のピッキング済み箱（CLP）を同一パレット（SLP）へまとめ、TL、LTL、WILL_CALL の出荷に適用されます。",
  "拣货完成后，同一订单或同一发运批次的货物可能被装在多个箱子（CLP）中。Pack Task 用于把这些可合并的箱子归入一个托盘（SLP），形成后续装车、交接或自提时更容易管理的发运单元，同时避免不同客户、承运商或收货地址的箱子被错误混托。": "ピッキング完了後、同じ注文または出荷バッチの貨物が複数の箱（CLP）に分かれている場合があります。Pack Task は、集約可能な箱を 1 つのパレット（SLP）へまとめ、後続の積込、引き渡し、自提で扱いやすい出荷単位にし、異なる顧客、運送会社、届け先の箱が混在することを防ぎます。",
  "确认目标托盘，系统校验托盘类型和状态": "対象パレットを確認し、システムがタイプと状態を検証します。",
  "将箱子逐一扫入托盘，系统返回各箱关联的订单信息": "箱をパレットへ順にスキャンし、各箱に関連する注文情報を表示します。",
  "一致性校验通过后，CLP 归入 SLP，Pack Task 状态更新为 COMPLETED，相关订单状态更新为 PACKED": "整合性チェック後、CLP は SLP に紐づき、Pack Task は COMPLETED、関連注文は PACKED に更新されます。",
  "操作员扫码报错时可对照以上三点快速自查。": "スキャン時にエラーが出た場合、上記 3 点を確認できます。",
  "Pack Task 可由管理员在 PC 端手动创建（选择已 PICKED 状态的订单），也可在 Order Plan 配置 autoCreatePackTask 后由系统在拣货完成时自动创建。": "Pack Task は PC 側で管理者が手動作成できます（PICKED 状態の注文を選択）。また、Order Plan で autoCreatePackTask を設定すると、ピッキング完了時に自動作成されます。",
  "💡 小包裹快递发货（PARCEL）请使用": "💡 小口配送（PARCEL）は",
  "，不在本页面操作。": "を使用してください。本ページでは操作しません。",
  "Movement Task 由管理员手动创建，将库存从一个位置移至另一个位置，不触发入库或出库流程，也不改变库存业务状态。": "Movement Task は管理者が手動作成し、在庫をあるロケーションから別のロケーションへ移動します。入庫・出庫プロセスは発生せず、在庫の業務状態も変更しません。",
  "根据业务目的不同，系统支持三种 Movement 类型：": "業務目的に応じて、システムは 3 種類の Movement をサポートします:",
  "将分散在多个库位的同类库存合并到一个位置，减少碎片化": "複数ロケーションに分散した同種在庫を 1 か所にまとめ、分散を減らします。",
  "多个 LP 同时调整位置，适合整区域的批量移库操作": "複数 LP の位置を同時に調整し、エリア単位の一括移動に適しています。",
  "单个 LP 或部分商品的位置调整，最常用的普通移动类型": "単一 LP または一部商品の位置調整で、最も一般的な移動タイプです。",
  "指定 Customer 和 LP List 后提交，系统生成任务并按配置自动分配或由管理员手动指派。": "Customer と LP List を指定して送信すると、システムがタスクを生成し、設定に応じて自動割当または管理者による手動割当を行います。",
  "：扫描 LP/DN/RN/LOAD 确认来源，再扫目标库位完成 Drop，整个容器一次性换位。": "：LP/DN/RN/LOAD をスキャンして発生元を確認し、目標ロケーションをスキャンして Drop を完了します。容器全体を一度に移動します。",
  "：扫描库位或 LP 后逐件确认 Collected Items（SKU、数量、来源位置），再 Drop 到目标位置。": "：ロケーションまたは LP をスキャン後、Collected Items（SKU、数量、元ロケーション）を商品ごとに確認し、目標位置へ Drop します。",
  "Replenishment Task 由 Min/Max Setting 的 Scheduler 或手动 Trigger 触发生成。它指定从哪个来源位置（From VLG）取货、搬到哪个拣货位置（To VLG），通过 Collect → Drop 两步完成库存位置的实际移动。": "Replenishment Task は Min/Max Setting の Scheduler または手動 Trigger により生成されます。From VLG からどこで取るか、To VLG のどこへ運ぶかを指定し、Collect → Drop の 2 ステップで在庫位置を移動します。",
  "当 Min/Max 规则检测到拣货区的某个 SKU 库存低于 Min Qty 时，系统自动创建 Replenishment Task。操作员按任务指示到储存区取出对应 LP，搬运到拣货区指定库位放下，库存位置更新。": "Min/Max ルールがピッキングエリアの SKU 在庫が Min Qty を下回ったことを検知すると、Replenishment Task を自動作成します。作業者は指示に従い、保管エリアから対象 LP を取り出して指定ロケーションへ Drop し、在庫位置を更新します。",
  "💡 也可在 Min/Max Setting 页面手动点击 Trigger 立即生成补货任务，无需等待 Scheduler 自动触发。": "💡 Min/Max Setting 画面で Trigger を手動クリックし、Scheduler を待たずに補充タスクを即時生成することもできます。",
  "Replenish Details 展示补货明细：From Location（来源库位）、SKU、Qty、To Location（目标库位）及 VLG。Steps 标签页显示 Collect / Drop 两步的执行进度。": "Replenish Details には From Location、SKU、Qty、To Location、VLG などの補充明細が表示されます。Steps タブでは Collect / Drop の実行進捗を確認できます。",
  "💡 Scheduler Config 和 Execution Log 在列表页顶部工具栏也有入口，与 Min/Max Setting 中的功能相同。": "💡 Scheduler Config と Execution Log は一覧ページ上部ツールバーからも開けます。Min/Max Setting の機能と同じです。",
  "Put Back Task 用于把已拣出但未发运的库存退回存储区，常见于订单取消、超量拣货或未发运后的处理。": "Put Back Task は、ピッキング済みだが未出荷の在庫を保管エリアへ戻すために使用します。注文キャンセル、過剰ピッキング、未出荷後の処理でよく使われます。",
  "：管理员或操作员手动发起，将指定 LP 退回存储区": "：管理者または作業者が手動で開始し、指定 LP を保管エリアへ戻します。",
  "：订单取消时由系统自动创建": "：注文キャンセル時にシステムが自動作成します。",
  "：拣出数量超过实际需求时由系统自动创建": "：ピッキング数量が実需要を超えた場合に自動作成します。",
  "：货物已装车但未发运，需重新入库时由系统自动创建": "：積込済みだが未出荷の貨物を再入庫する必要がある場合に自動作成します。",
  "查询区支持按 Task ID、Order ID、Status、Customer、Assignee 过滤；列表重点看 Put BackType、Priority 和 Action。": "検索エリアでは Task ID、Order ID、Status、Customer、Assignee で絞り込めます。一覧では Put BackType、Priority、Action が重要です。",
  "💡 右上角": "💡 右上の",
  "是手持端直接创建退库任务的入口，操作员无需先回到 PC 端发起。": "は、ハンディ端末から直接戻し入れタスクを作成する入口です。作業者は PC 側へ戻る必要がありません。",
  "Basic Info 看 Task ID、Status、Put BackType、Assignee 和 Current Step；Task Steps 与 History 用于追踪执行进度。": "Basic Info では Task ID、Status、Put BackType、Assignee、Current Step を確認します。Task Steps と History は進捗追跡に使います。",
  "Load Task 是发运前的现场确认任务，用来把": "Load Task は出荷前の現場確認タスクで、",
  "中的装载计划落到实际装车动作上。它帮助仓库确认每个 LP 是否已装入正确的 Load，并为后续 Shipment Ticket、BOL 等发运记录提供依据。": "内の積載計画を実際の積込作業へ落とし込みます。各 LP が正しい Load に積まれたかを確認し、後続の Shipment Ticket、BOL などの出荷記録の根拠になります。",
  "当订单完成拣货、打包并被安排到某个 Load 后，装车现场需要核对车辆、Dock、Carrier 以及实际装入的 LP。Load Task 记录这次交接过程，确保货物不是“计划已发”，而是已经完成现场装车确认。": "注文のピッキング・梱包が完了し、特定 Load に割り当てられた後、積込現場では車両、Dock、Carrier、実際に積み込んだ LP を確認します。Load Task はこの引き渡し過程を記録し、「計画上の出荷」ではなく現場で積込確認済みであることを示します。",
  "手持端把装车现场拆成": "ハンディ端末では積込現場を",
  "三个检查点，方便操作员按实际交接进度推进。": "の 3 つのチェックポイントに分け、実際の引き渡し進捗に沿って進められます。",
  "Loading 阶段用于扫描并确认货物装入对应 Load；Sign BOL 用于完成装车后的单据确认。": "Loading では貨物をスキャンし、対応する Load に積み込まれたことを確認します。Sign BOL は積込後の書類確認に使います。",
  "列表展示 Task ID、Order ID、Loads、Customer、Carrier 等信息。": "一覧には Task ID、Order ID、Loads、Customer、Carrier などが表示されます。",
  "用于查看任务详情，": "はタスク詳細の確認に使用し、",
  "用于开始装车；装车完成后的关闭动作会触发后续发运记录处理。": "は積込開始に使用します。積込完了後のクローズ操作により後続の出荷記録処理が進みます。",
  "以下内容不是所有仓库都会使用。特定场景 Task 取决于客户配置或仓库自动化能力；技术日志页面主要用于异常排查，日常操作员通常无需关注。": "以下はすべての倉庫で使用されるものではありません。特定シナリオの Task は顧客設定や自動化能力に依存し、技術ログ画面は主に異常調査に使用されます。通常の作業者は日常的に確認する必要はありません。",
  "用于 AGV 自动化仓库、Kitting 组装等专项业务，不属于每个客户都会启用的标准作业链路。": "AGV 自動化倉庫、Kitting 組立などの専用業務に使用され、すべての顧客が有効にする標準作業フローではありません。",
  "将散落在多个半空 Tote 里的同一客户库存合并，腾出空容器循环使用。仅适用于 AGV 自动化仓库。": "複数の半空 Tote に分散した同一顧客の在庫を集約し、空容器を循環利用できるようにします。AGV 自動化倉庫専用です。",
  "合并条件：同一 Customer、库存状态为 OPEN；SKU 不要求相同。": "集約条件: 同一 Customer、在庫状態 OPEN。SKU は同一である必要はありません。",
  "出库订单含 Is Kitting 商品时生成。操作员按 BOM 取出各组件进行组装，完成后作为完整套件继续出库流程。": "出庫注文に Is Kitting 商品が含まれる場合に生成されます。作業者は BOM に従って各部品を取り出して組み立て、完了後は完成キットとして出庫フローを続行します。",
  "仅配置了 Kitting 商品的客户会产生此任务。": "Kitting 商品を設定している顧客でのみ発生します。",
  "将指定容器呼叫到工作站核对实物与系统是否一致，适用于自动化仓库的在库核对。": "指定コンテナをワークステーションへ呼び出し、実物とシステムが一致するか確認します。自動化倉庫の在庫確認に適しています。",
  "支持被动下发、By SKU、By Container 三种触发方式。": "受動連携、By SKU、By Container の 3 つのトリガー方式をサポートします。",
  "用于追踪任务动作和 WCS 通信记录，主要服务于异常定位与系统运维。": "タスク動作と WCS 通信記録を追跡し、異常特定とシステム運用保守に使用します。",
  "任务执行动作的底层记录，覆盖所有任务类型。当任务状态异常、库存位置不一致或执行结果需要追溯时，可在此查看具体动作。": "すべてのタスクタイプを対象とする実行アクションの基礎記録です。タスク状態異常、在庫位置不一致、実行結果の追跡が必要な場合に具体的な動作を確認できます。",
  "系统向 WCS（仓库执行系统）发送指令的日志记录，用于排查自动化设备、接口通信或指令响应问题。": "システムが WCS（倉庫実行システム）へ送信した指令ログです。自動化設備、インターフェース通信、指令応答の問題調査に使用します。"
});

Object.assign(I18N.en, {
  "进入当前步骤的执行界面，按系统指引完成 Dock Check In、Offload 或 LP Setup。卡片上实时显示步骤进度，如": "Open the current step execution screen and follow system guidance to complete Dock Check In, Offload, or LP Setup. The card shows live step progress, such as",
  "，操作员随时知道当前在哪一步。": ", so operators always know which step they are on.",
  "💡 任务卡片顶部标签区分优先级：": "💡 The label at the top of a task card indicates priority:",
  "（红色）表示紧急任务，操作员应优先处理；": "(red) indicates an urgent task that should be handled first;",
  "（蓝色）为常规任务。": "(blue) indicates a normal task.",
  "收货区是货物入仓后的临时作业区域。LP Setup 完成后，系统根据 Put Away Strategies（上架策略）自动推荐目标库位并生成 Put Away Task。操作员按任务指引将 LP 搬运至目标库位扫码确认，库存位置随之更新；后续是否可用于出库分配，还取决于库存状态及客户配置。": "The receiving area is a temporary work area after goods enter the warehouse. After LP Setup, the system recommends target locations based on Put Away Strategies and creates Put Away Tasks. Operators move LPs to the target location and scan to confirm. Whether the inventory can later be allocated for outbound depends on inventory status and customer settings.",
  "整托上架。扫描 LP 条码后，系统直接推荐目标库位，操作员将整个容器搬至目标位置扫码确认。适合托盘整进整出、无需拆件的场景，效率更高。": "Put away by LP. After scanning the LP barcode, the system recommends a target location. The operator moves the whole container and scans to confirm. This is efficient for pallet-level handling without item splitting.",
  "拆件上架。按商品维度逐件扫描确认，系统可为不同 SKU 推荐不同目标库位。适合混托收货、需要按品类分区存放的场景。": "Put away by item. Operators scan and confirm item by item, and the system can recommend different locations for different SKUs. This fits mixed-pallet receiving or category-based storage.",
  "💡 任务列表按 New / In Progress / Done 三个状态分 Tab 显示，操作员可直接在 New 列表中领取并开始执行。": "💡 The task list is grouped by New / In Progress / Done tabs. Operators can take tasks directly from the New list and start execution.",
  "— 每完成一个 LP 即生成；": "— generated each time an LP is completed;",
  "— 整个收货任务关闭后统一生成。": "— generated in batch after the receiving task is closed.",
  "Pick Task 由 Order Dispatch 根据 Order Plan 的 Pick Method 和 Pick Mode 自动生成。它告诉操作员去哪个库位、取什么 SKU、取多少。拣货完成后，相关库存完成拣取并等待后续打包、合流或装车。": "Pick Task is automatically generated by Order Dispatch based on the Order Plan's Pick Method and Pick Mode. It tells operators which location to visit, which SKU to pick, and how many to take. After picking, the inventory waits for packing, consolidation, or loading.",
  "仓库同时收到 3 笔订单：DN-001（洗发水 ×2）、DN-002（洗发水 ×1）、DN-003（沐浴露 ×3）。系统将其合并为 1 个 Pick Task，拣货员只需跑 2 个库位完成全部拣取，无需手工核单。": "If the warehouse receives three orders at the same time: DN-001 (shampoo x2), DN-002 (shampoo x1), and DN-003 (body wash x3), the system combines them into one Pick Task. The picker only visits two locations and does not need to manually reconcile orders.",
  "库位 A-01": "Location A-01",
  "：洗发水 ×3（DN-001 的 2 瓶 + DN-002 的 1 瓶）": ": Shampoo x3 (2 bottles from DN-001 + 1 bottle from DN-002)",
  "库位 B-02": "Location B-02",
  "：沐浴露 ×3（DN-003）": ": Body wash x3 (DN-003)",
  "Batch Assign 可批量指派操作员；Current Step 和 Progress 实时反映每条任务执行进度。": "Batch Assign can assign operators in bulk. Current Step and Progress show each task's execution status in real time.",
  "（多箱合托）和": "(multi-box pallet consolidation) and",
  "（小包裹快递）。本页介绍 CONSOLIDATE_PALLET——将多个已拣货箱子（CLP）归入同一托盘（SLP），适用于整车（TL）、零担（LTL）或自提（WILL_CALL）发货场景。": "(parcel shipping). This page explains CONSOLIDATE_PALLET, which puts multiple picked boxes (CLPs) onto one pallet (SLP). It applies to TL, LTL, or WILL_CALL shipping scenarios.",
  "拣货完成后，同一订单或同一发运批次的货物可能被装在多个箱子（CLP）中。Pack Task 用于把这些可合并的箱子归入一个托盘（SLP），形成后续装车、交接或自提时更容易管理的发运单元，同时避免不同客户、承运商或收货地址的箱子被错误混托。": "After picking, goods for the same order or shipping batch may be packed into multiple boxes (CLPs). Pack Task consolidates eligible boxes onto one pallet (SLP), creating a manageable shipping unit for loading, handover, or will-call pickup while preventing boxes with different customers, carriers, or ship-to addresses from being mixed.",
  "确认目标托盘，系统校验托盘类型和状态": "Confirm the target pallet; the system validates pallet type and status.",
  "将箱子逐一扫入托盘，系统返回各箱关联的订单信息": "Scan each box into the pallet; the system returns the order information linked to each box.",
  "一致性校验通过后，CLP 归入 SLP，Pack Task 状态更新为 COMPLETED，相关订单状态更新为 PACKED": "After validation passes, CLPs are linked to the SLP, the Pack Task status becomes COMPLETED, and related orders become PACKED.",
  "操作员扫码报错时可对照以上三点快速自查。": "When a scan error occurs, operators can quickly check these three points.",
  "Pack Task 可由管理员在 PC 端手动创建（选择已 PICKED 状态的订单），也可在 Order Plan 配置 autoCreatePackTask 后由系统在拣货完成时自动创建。": "Pack Task can be manually created on PC by an administrator by selecting orders in PICKED status. It can also be automatically created after picking if autoCreatePackTask is configured in Order Plan.",
  "💡 小包裹快递发货（PARCEL）请使用": "💡 For parcel shipping (PARCEL), use",
  "，不在本页面操作。": "; it is not handled on this page.",
  "Movement Task 由管理员手动创建，将库存从一个位置移至另一个位置，不触发入库或出库流程，也不改变库存业务状态。": "Movement Task is manually created by an administrator to move inventory from one location to another. It does not trigger inbound or outbound processes and does not change the business status of inventory.",
  "根据业务目的不同，系统支持三种 Movement 类型：": "The system supports three Movement types for different business purposes:",
  "将分散在多个库位的同类库存合并到一个位置，减少碎片化": "Consolidate similar inventory scattered across multiple locations to reduce fragmentation.",
  "多个 LP 同时调整位置，适合整区域的批量移库操作": "Move multiple LPs at the same time, suitable for area-level bulk relocation.",
  "单个 LP 或部分商品的位置调整，最常用的普通移动类型": "Adjust the location of a single LP or part of its items; the most common movement type.",
  "指定 Customer 和 LP List 后提交，系统生成任务并按配置自动分配或由管理员手动指派。": "After Customer and LP List are specified and submitted, the system creates the task and either assigns it automatically based on configuration or lets an administrator assign it manually.",
  "：扫描 LP/DN/RN/LOAD 确认来源，再扫目标库位完成 Drop，整个容器一次性换位。": ": Scan LP/DN/RN/LOAD to confirm the source, then scan the target location to complete Drop. The whole container moves at once.",
  "：扫描库位或 LP 后逐件确认 Collected Items（SKU、数量、来源位置），再 Drop 到目标位置。": ": Scan a location or LP, confirm Collected Items item by item (SKU, quantity, source location), then Drop them to the target location.",
  "Replenishment Task 由 Min/Max Setting 的 Scheduler 或手动 Trigger 触发生成。它指定从哪个来源位置（From VLG）取货、搬到哪个拣货位置（To VLG），通过 Collect → Drop 两步完成库存位置的实际移动。": "Replenishment Task is triggered by the Min/Max Setting Scheduler or by manual Trigger. It specifies the source location (From VLG) and pick location (To VLG), and moves inventory through Collect -> Drop.",
  "当 Min/Max 规则检测到拣货区的某个 SKU 库存低于 Min Qty 时，系统自动创建 Replenishment Task。操作员按任务指示到储存区取出对应 LP，搬运到拣货区指定库位放下，库存位置更新。": "When a Min/Max rule detects that a SKU in the pick face is below Min Qty, the system automatically creates a Replenishment Task. Operators retrieve the corresponding LP from storage, move it to the assigned pick location, drop it, and the inventory location is updated.",
  "💡 也可在 Min/Max Setting 页面手动点击 Trigger 立即生成补货任务，无需等待 Scheduler 自动触发。": "💡 You can also click Trigger manually on the Min/Max Setting page to create a replenishment task immediately, without waiting for the Scheduler.",
  "Replenish Details 展示补货明细：From Location（来源库位）、SKU、Qty、To Location（目标库位）及 VLG。Steps 标签页显示 Collect / Drop 两步的执行进度。": "Replenish Details shows From Location, SKU, Qty, To Location, and VLG. The Steps tab shows progress for Collect / Drop.",
  "💡 Scheduler Config 和 Execution Log 在列表页顶部工具栏也有入口，与 Min/Max Setting 中的功能相同。": "💡 Scheduler Config and Execution Log are also available from the top toolbar on the list page, with the same functions as in Min/Max Setting.",
  "Put Back Task 用于把已拣出但未发运的库存退回存储区，常见于订单取消、超量拣货或未发运后的处理。": "Put Back Task returns picked but unshipped inventory to storage. It is commonly used for order cancellation, over-picking, or post-loading but unshipped handling.",
  "：管理员或操作员手动发起，将指定 LP 退回存储区": ": Manually initiated by an administrator or operator to return a specified LP to storage.",
  "：订单取消时由系统自动创建": ": Automatically created when an order is cancelled.",
  "：拣出数量超过实际需求时由系统自动创建": ": Automatically created when picked quantity exceeds actual demand.",
  "：货物已装车但未发运，需重新入库时由系统自动创建": ": Automatically created when goods were loaded but not shipped and need to return to storage.",
  "查询区支持按 Task ID、Order ID、Status、Customer、Assignee 过滤；列表重点看 Put BackType、Priority 和 Action。": "The search area supports filtering by Task ID, Order ID, Status, Customer, and Assignee. Key list fields are Put BackType, Priority, and Action.",
  "💡 右上角": "💡 The top-right",
  "是手持端直接创建退库任务的入口，操作员无需先回到 PC 端发起。": "is the entry for creating a put-back task directly on RF/PDA, without returning to the PC side.",
  "Basic Info 看 Task ID、Status、Put BackType、Assignee 和 Current Step；Task Steps 与 History 用于追踪执行进度。": "Basic Info shows Task ID, Status, Put BackType, Assignee, and Current Step. Task Steps and History are used to trace execution progress.",
  "Load Task 是发运前的现场确认任务，用来把": "Load Task is the on-site confirmation task before shipment. It turns the loading plan in",
  "中的装载计划落到实际装车动作上。它帮助仓库确认每个 LP 是否已装入正确的 Load，并为后续 Shipment Ticket、BOL 等发运记录提供依据。": "into actual loading execution. It helps the warehouse confirm that each LP is loaded into the correct Load and provides the basis for Shipment Ticket, BOL, and other shipping records.",
  "当订单完成拣货、打包并被安排到某个 Load 后，装车现场需要核对车辆、Dock、Carrier 以及实际装入的 LP。Load Task 记录这次交接过程，确保货物不是“计划已发”，而是已经完成现场装车确认。": "After orders are picked, packed, and assigned to a Load, the loading area needs to verify the vehicle, dock, carrier, and LPs actually loaded. Load Task records this handover process and confirms the goods are not only planned to ship, but actually loaded on site.",
  "手持端把装车现场拆成": "RF/PDA breaks the loading operation into",
  "三个检查点，方便操作员按实际交接进度推进。": "three checkpoints, so operators can proceed according to the actual handover progress.",
  "Loading 阶段用于扫描并确认货物装入对应 Load；Sign BOL 用于完成装车后的单据确认。": "Loading is used to scan and confirm goods are loaded into the correct Load. Sign BOL is used for document confirmation after loading.",
  "列表展示 Task ID、Order ID、Loads、Customer、Carrier 等信息。": "The list shows Task ID, Order ID, Loads, Customer, Carrier, and other information.",
  "用于查看任务详情，": "is used to view task details, and",
  "用于开始装车；装车完成后的关闭动作会触发后续发运记录处理。": "is used to start loading. Closing after loading triggers downstream shipping record processing.",
  "以下内容不是所有仓库都会使用。特定场景 Task 取决于客户配置或仓库自动化能力；技术日志页面主要用于异常排查，日常操作员通常无需关注。": "The following content is not used by every warehouse. Scenario-specific Tasks depend on customer configuration or automation capabilities. Technical log pages are mainly used for troubleshooting and are usually not needed by daily operators.",
  "用于 AGV 自动化仓库、Kitting 组装等专项业务，不属于每个客户都会启用的标准作业链路。": "Used for AGV automated warehouses, Kitting assembly, and other special operations. These are not part of the standard workflow enabled for every customer.",
  "将散落在多个半空 Tote 里的同一客户库存合并，腾出空容器循环使用。仅适用于 AGV 自动化仓库。": "Consolidates inventory of the same customer scattered across multiple half-empty Totes, freeing empty containers for reuse. Only applies to AGV automated warehouses.",
  "合并条件：同一 Customer、库存状态为 OPEN；SKU 不要求相同。": "Consolidation conditions: same Customer, inventory status OPEN; SKU does not need to be the same.",
  "出库订单含 Is Kitting 商品时生成。操作员按 BOM 取出各组件进行组装，完成后作为完整套件继续出库流程。": "Generated when an outbound order contains Is Kitting items. Operators pick components according to the BOM and assemble them. After completion, the complete kit continues through outbound processing.",
  "仅配置了 Kitting 商品的客户会产生此任务。": "This task is generated only for customers with Kitting items configured.",
  "将指定容器呼叫到工作站核对实物与系统是否一致，适用于自动化仓库的在库核对。": "Calls the specified container to a workstation to verify whether physical inventory matches the system. Suitable for inventory checks in automated warehouses.",
  "支持被动下发、By SKU、By Container 三种触发方式。": "Supports three trigger methods: passive dispatch, By SKU, and By Container.",
  "用于追踪任务动作和 WCS 通信记录，主要服务于异常定位与系统运维。": "Used to trace task actions and WCS communication records, mainly for issue diagnosis and system operations.",
  "任务执行动作的底层记录，覆盖所有任务类型。当任务状态异常、库存位置不一致或执行结果需要追溯时，可在此查看具体动作。": "Low-level records of task execution actions across all task types. Use this page to view detailed actions when task status is abnormal, inventory location does not match, or execution results need tracing.",
  "系统向 WCS（仓库执行系统）发送指令的日志记录，用于排查自动化设备、接口通信或指令响应问题。": "Logs of instructions sent by the system to WCS (Warehouse Control System), used to troubleshoot automation equipment, interface communication, or command response issues."
});

const ATTR_I18N = {
  ja: {
    "说明书导航": "説明書ナビゲーション",
    "打开菜单": "メニューを開く",
    "关闭图片": "画像を閉じる",
    "Task 覆盖的主要作业范围": "Task がカバーする主要作業範囲",
    "收起 Task 子菜单": "Task サブメニューを折りたたむ",
    "展开 Task 子菜单": "Task サブメニューを展開",
    "收起 task 子菜单": "Task サブメニューを折りたたむ",
    "展开 task 子菜单": "Task サブメニューを展開",
    "页面截图放大预览": "画面スクリーンショット拡大プレビュー",
    "收货任务三步骤界面截图": "Receive Task 3 ステップ画面スクリーンショット",
    "Receive Task 列表页面截图": "Receive Task 一覧画面スクリーンショット",
    "Receive Task 手持端界面截图": "Receive Task ハンディ端末画面スクリーンショット",
    "Put Away Task 手持端界面截图": "Put Away Task ハンディ端末画面スクリーンショット",
    "Put Away Task 列表页面截图": "Put Away Task 一覧画面スクリーンショット",
    "Put Away Mode 配置页面截图": "Put Away Mode 設定画面スクリーンショット",
    "Pick Task 手持端界面截图": "Pick Task ハンディ端末画面スクリーンショット",
    "Pick Task 列表页面截图": "Pick Task 一覧画面スクリーンショット",
    "Pack Task 列表页面截图": "Pack Task 一覧画面スクリーンショット",
    "Movement Task 创建页面截图": "Movement Task 作成画面スクリーンショット",
    "Movement Task By LP 手持端截图": "Movement Task By LP ハンディ端末スクリーンショット",
    "Movement Task By Item 手持端截图": "Movement Task By Item ハンディ端末スクリーンショット",
    "Replenishment Task 详情截图": "Replenishment Task 詳細スクリーンショット",
    "Put Back Task 列表页面截图": "Put Back Task 一覧画面スクリーンショット",
    "Put Back Task 手持端截图": "Put Back Task ハンディ端末スクリーンショット",
    "Put Back Task 详情页面截图": "Put Back Task 詳細画面スクリーンショット",
    "Load Task 手持端步骤页面截图": "Load Task ハンディ端末ステップ画面スクリーンショット",
    "Load Task 列表页面截图": "Load Task 一覧画面スクリーンショット",
    "放大收货步骤截图": "Receive Task ステップ画面を拡大",
    "放大 Receive Task 列表截图": "Receive Task 一覧画面を拡大",
    "放大 Receive Task 手持端截图": "Receive Task ハンディ端末画面を拡大",
    "放大 Put Away Task 手持端截图": "Put Away Task ハンディ端末画面を拡大",
    "放大 Put Away Task 列表截图": "Put Away Task 一覧画面を拡大",
    "放大 Put Away Mode 配置截图": "Put Away Mode 設定画面を拡大",
    "放大 Pick Task 手持端截图": "Pick Task ハンディ端末画面を拡大",
    "放大 Pick Task 列表截图": "Pick Task 一覧画面を拡大",
    "放大 Pack Task 列表截图": "Pack Task 一覧画面を拡大",
    "放大 Movement Task 创建截图": "Movement Task 作成画面を拡大",
    "放大 By LP 手持端截图": "By LP ハンディ端末画面を拡大",
    "放大 By Item 手持端截图": "By Item ハンディ端末画面を拡大",
    "放大 Replenishment Task 详情截图": "Replenishment Task 詳細画面を拡大",
    "放大 Put Back Task 列表截图": "Put Back Task 一覧画面を拡大",
    "放大 Put Back Task 手持端截图": "Put Back Task ハンディ端末画面を拡大",
    "放大 Put Back Task 详情截图": "Put Back Task 詳細画面を拡大",
    "放大 Load Task 手持端步骤截图": "Load Task ハンディ端末ステップ画面を拡大",
    "放大 Load Task 列表截图": "Load Task 一覧画面を拡大"
  },
  en: {
    "说明书导航": "Manual navigation",
    "打开菜单": "Open menu",
    "关闭图片": "Close image",
    "Task 覆盖的主要作业范围": "Main operation scope covered by Task",
    "收起 Task 子菜单": "Collapse Task submenu",
    "展开 Task 子菜单": "Expand Task submenu",
    "收起 task 子菜单": "Collapse Task submenu",
    "展开 task 子菜单": "Expand Task submenu",
    "页面截图放大预览": "Enlarged screenshot preview",
    "收货任务三步骤界面截图": "Receive Task three-step screen screenshot",
    "Receive Task 列表页面截图": "Receive Task list page screenshot",
    "Receive Task 手持端界面截图": "Receive Task RF/PDA screen screenshot",
    "Put Away Task 手持端界面截图": "Put Away Task RF/PDA screen screenshot",
    "Put Away Task 列表页面截图": "Put Away Task list page screenshot",
    "Put Away Mode 配置页面截图": "Put Away Mode settings page screenshot",
    "Pick Task 手持端界面截图": "Pick Task RF/PDA screen screenshot",
    "Pick Task 列表页面截图": "Pick Task list page screenshot",
    "Pack Task 列表页面截图": "Pack Task list page screenshot",
    "Movement Task 创建页面截图": "Movement Task create page screenshot",
    "Movement Task By LP 手持端截图": "Movement Task By LP RF/PDA screenshot",
    "Movement Task By Item 手持端截图": "Movement Task By Item RF/PDA screenshot",
    "Replenishment Task 详情截图": "Replenishment Task detail screenshot",
    "Put Back Task 列表页面截图": "Put Back Task list page screenshot",
    "Put Back Task 手持端截图": "Put Back Task RF/PDA screenshot",
    "Put Back Task 详情页面截图": "Put Back Task detail page screenshot",
    "Load Task 手持端步骤页面截图": "Load Task RF/PDA steps page screenshot",
    "Load Task 列表页面截图": "Load Task list page screenshot",
    "放大收货步骤截图": "Enlarge Receive Task steps screenshot",
    "放大 Receive Task 列表截图": "Enlarge Receive Task list screenshot",
    "放大 Receive Task 手持端截图": "Enlarge Receive Task RF/PDA screenshot",
    "放大 Put Away Task 手持端截图": "Enlarge Put Away Task RF/PDA screenshot",
    "放大 Put Away Task 列表截图": "Enlarge Put Away Task list screenshot",
    "放大 Put Away Mode 配置截图": "Enlarge Put Away Mode settings screenshot",
    "放大 Pick Task 手持端截图": "Enlarge Pick Task RF/PDA screenshot",
    "放大 Pick Task 列表截图": "Enlarge Pick Task list screenshot",
    "放大 Pack Task 列表截图": "Enlarge Pack Task list screenshot",
    "放大 Movement Task 创建截图": "Enlarge Movement Task create screenshot",
    "放大 By LP 手持端截图": "Enlarge By LP RF/PDA screenshot",
    "放大 By Item 手持端截图": "Enlarge By Item RF/PDA screenshot",
    "放大 Replenishment Task 详情截图": "Enlarge Replenishment Task detail screenshot",
    "放大 Put Back Task 列表截图": "Enlarge Put Back Task list screenshot",
    "放大 Put Back Task 手持端截图": "Enlarge Put Back Task RF/PDA screenshot",
    "放大 Put Back Task 详情截图": "Enlarge Put Back Task detail screenshot",
    "放大 Load Task 手持端步骤截图": "Enlarge Load Task RF/PDA steps screenshot",
    "放大 Load Task 列表截图": "Enlarge Load Task list screenshot"
  }
};

function getTextNodes(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      const parent = node.parentElement;
      if (!parent || parent.closest("script, style, .language-switcher")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}

function prepareI18nNodes() {
  getTextNodes(document.body).forEach((node) => {
    node.__i18nSource = node.nodeValue.trim();
  });
  document.querySelectorAll("[aria-label], [alt], [title]").forEach((element) => {
    ["aria-label", "alt", "title"].forEach((attr) => {
      if (element.hasAttribute(attr)) {
        element.dataset[`i18n${attr.replace(/(^|-)([a-z])/g, (_, __, char) => char.toUpperCase())}`] = element.getAttribute(attr);
      }
    });
  });
}

function applyLanguage(lang) {
  const selectedLang = LANGUAGE_META[lang] ? lang : "zh";
  const translations = I18N[selectedLang] || {};

  getTextNodes(document.body).forEach((node) => {
    const source = node.__i18nSource || node.nodeValue.trim();
    const translated = selectedLang === "zh" ? source : translations[source];
    if (!translated) return;
    const leading = node.nodeValue.match(/^\s*/)?.[0] || "";
    const trailing = node.nodeValue.match(/\s*$/)?.[0] || "";
    node.nodeValue = `${leading}${translated}${trailing}`;
  });

  const meta = LANGUAGE_META[selectedLang];
  document.documentElement.lang = meta.htmlLang;
  document.title = meta.title;
  const attrTranslations = ATTR_I18N[selectedLang] || {};
  document.querySelectorAll("[aria-label], [alt], [title]").forEach((element) => {
    [
      ["aria-label", "i18nAriaLabel"],
      ["alt", "i18nAlt"],
      ["title", "i18nTitle"]
    ].forEach(([attr, key]) => {
      const source = element.dataset[key];
      if (!source) return;
      element.setAttribute(attr, selectedLang === "zh" ? source : (attrTranslations[source] || source));
    });
  });
  document.querySelectorAll("[data-lang-option]").forEach((button) => {
    button.classList.toggle("active", button.dataset.langOption === selectedLang);
  });

  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, selectedLang);
  } catch {
    // Language switching still works even when browser storage is unavailable.
  }
}

function initLanguageSwitcher() {
  prepareI18nNodes();
  document.querySelectorAll("[data-lang-option]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.langOption));
  });

  let savedLang = "zh";
  try {
    savedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY) || "zh";
  } catch {
    savedLang = "zh";
  }
  applyLanguage(savedLang);
}

initLanguageSwitcher();
