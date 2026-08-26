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
    "仓储业务，从准确的基础资料开始": "正確なマスターデータから始まる倉庫業務",
    "MDM 集中定义“与谁开展业务、仓库处理什么商品，以及这些对象具备哪些分类和属性”。资料建立后，供入库、出库、库存、任务和运输等流程选择或读取，避免同一对象在不同业务中重复维护。": "MDM は「誰と取引するか、倉庫でどの商品を扱うか、各対象がどの分類と属性を持つか」を一元定義します。登録したデータは入庫、出庫、在庫、タスク、輸送などのフローから参照され、同じ対象を業務ごとに重複管理することを防ぎます。",
    "Organization 统一记录参与仓储业务的组织身份，Customer 在此基础上补充客户关系和作业规则。": "Organization は倉庫業務に参加する組織の識別情報を一元管理し、Customer はその上で顧客関係と作業ルールを補足します。",
    "Item 维护 SKU 与追踪要求，UOM 和 Pallet Config 描述商品的包装换算及托盘码放配置。": "Item は SKU と追跡要件を管理し、UOM と Pallet Config は商品の包装換算とパレット積付け設定を定義します。",
    "Industry 通过 Property Template 定义行业专属字段；Hazard 维护可供 Item 引用的危险品分类资料。": "Industry は Property Template で業種固有の項目を定義し、Hazard は Item から参照できる危険品分類情報を管理します。",
    "Carrier 记录实际承运商及运输方式，Address 维护客户在订单和装载业务中使用的地址。": "Carrier は実運送会社と輸送方式を記録し、Address は注文と積込業務で使用する顧客住所を管理します。",
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
    "设备执行": "設備実行", "结果通知": "結果通知", "客户化资料": "顧客固有データ",
    "从商品身份到追踪要求，在一个页面完成基础建档": "商品識別から追跡要件までを 1 つの画面で登録する",
    "补充商品单位、托盘码放和行业属性": "商品単位、パレット積付け、業種属性を補足する",
    "商品身份": "商品識別情報", "追踪要求": "追跡要件", "特殊属性": "特殊属性", "运输规则": "輸送ルール",
    "Add UOM｜为商品增加计量或包装单位": "Add UOM｜計量・包装単位を追加する",
    "记录商品在托盘上的标准码放结构": "パレット上の商品標準積付け構造を記録する",
    "Industry Properties｜维护行业专属的商品资料": "Industry Properties｜業種固有の商品情報を管理する",
    "在行业主档中维护 Property Template": "業種マスタで Property Template を管理する",
    "维护危险品的识别与分类资料": "危険品の識別・分類情報を管理する",
    "先标记 Hazardous，再选择对应定义": "Hazardous を設定してから対応する定義を選択する",
    "从身份识别到运输范围，完成承运商建档": "識別情報から輸送範囲まで運送会社マスタを登録する",
    "建立一条可在业务单据中选择的客户地址": "業務伝票で選択できる顧客住所を登録する",
    "统一维护实际运输承运商，供出库订单与装载业务引用": "出庫注文と積込業務で参照する実運送会社を一元管理する",
    "Carrier 用于登记仓库合作承运商的识别资料、可承接的运输方式和联系信息。建立主档后，操作人员可以在出库订单或 Load 中选择实际运输方，并在后续查询和运输单据中识别承运商。": "Carrier は倉庫と連携する運送会社の識別情報、対応可能な輸送方式、連絡先を登録します。マスタ登録後、作業者は出庫注文や Load で実際の運送会社を選択し、検索や輸送伝票で識別できます。",
    "页面预览": "画面プレビュー",
    "从 Carrier Management 查找可用承运商": "Carrier Management で利用可能な運送会社を検索する",
    "列表可按 Carrier Code、Carrier Name、SCAC Code 和 Status 查询，并集中查看承运商支持的 Shipping Methods、联系人及当前状态。": "一覧では Carrier Code、Carrier Name、SCAC Code、Status で検索し、対応する Shipping Methods、連絡先、現在のステータスを確認できます。"
    ,"维护主体编码、名称、全称和状态；CUSTOMER Tag 建立客户身份。": "主体コード、名称、正式名称、ステータスを管理し、CUSTOMER Tag で顧客を識別します。"
    ,"把客户合同和运营要求转化为仓储资料、作业策略与关系范围。": "顧客契約と運用要件を倉庫情報、作業戦略、関係範囲に変換します。"
    ,"收货步骤、上架时机、超收和库位推荐": "入荷ステップ、棚入れタイミング、超過入荷、ロケーション推奨"
    ,"库存分配、订单分组、取消节点和拣货排序": "在庫引当、注文グループ化、キャンセル可能時点、ピッキング順序"
    ,"WCS、Webhook 和动态扩展字段": "WCS、Webhook、動的拡張項目"
    ,"当仓库开始为新客户提供服务时，先建立客户身份和基础资料，再根据合同约定配置收货、上架、库存分配、拣货及设备协同规则；如涉及多个货权方或业务伙伴，则在 Relationships 中建立对应关联。": "倉庫が新しい顧客へのサービスを開始するときは、まず顧客の識別情報と基本情報を登録し、契約に基づいて入荷、棚入れ、在庫引当、ピッキング、設備連携のルールを設定します。複数の所有者や業務パートナーが関係する場合は、Relationships で関連付けます。"
    ,"从 Organization 或 Customer 入口创建": "Organization または Customer の入口から作成する"
    ,"维护行业、联系人和显示信息": "業種、連絡先、表示情報を管理する"
    ,"确定收货、上架、分配与拣货方式": "入荷、棚入れ、引当、ピッキング方法を決める"
    ,"维护 Title、Brand、Supplier 等关系": "Title、Brand、Supplier などの関係を管理する"
    ,"快速收货": "迅速な入荷", "收货过程中生成上架任务，减少货物等待": "入荷中に棚入れタスクを作成し、貨物の待機時間を短縮する"
    ,"释放库位": "ロケーションを解放", "优先分配拣完后可以清空库位的库存": "ピッキング後にロケーションを空にできる在庫を優先して引き当てる"
    ,"自动化执行": "自動実行", "将指定任务类型的 Action 发送至 WCS": "指定したタスク種別の Action を WCS に送信する"
    ,"Item 以租户内唯一的 SKU 识别商品，并记录当前 Customer、商品类型、条码、序列号、批次效期、计量单位、托盘配置及行业扩展资料。业务单据和库存通过稳定的 Item ID 持续引用商品。": "Item はテナント内で一意の SKU によって商品を識別し、現在の Customer、商品タイプ、バーコード、シリアル番号、ロット・有効期限、単位、パレット設定、業種拡張情報を記録します。業務伝票と在庫は安定した Item ID で商品を継続的に参照します。"
    ,"Item 列表集中查看与管理商品主档": "Item 一覧で商品マスタを一元確認・管理する"
    ,"通过列表查询已有商品，并查看 SKU、Customer、Type、Status 等主要资料；需要新建或维护商品时，可从这里进入对应操作。": "一覧から登録済みの商品を検索し、SKU、Customer、Type、Status などの主要情報を確認します。商品の新規作成や管理もここから開始できます。"
    ,"仓库开始接收一个新商品前，先确认租户内是否已有相同 SKU；没有可复用主档时，再确定客户归属和商品类型，补充识别与追踪要求，并根据实际包装和码放方式维护 UOM 与 Pallet Config。": "倉庫で新商品を受け入れる前に、テナント内に同じ SKU がないか確認します。再利用できるマスタがなければ、顧客と商品タイプを決め、識別・追跡要件を追加し、実際の包装と積付け方法に合わせて UOM と Pallet Config を管理します。"
    ,"条码、序列号、批次效期和出库要求共同决定仓库如何识别、追踪和处理该商品。": "バーコード、シリアル番号、ロット・有効期限、出庫要件によって、倉庫での商品識別、追跡、処理方法が決まります。"
    ,"Item 当前归属的客户。可以修改，但不会同步改变已有单据和库存中的 Customer。": "Item の現在の顧客です。変更できますが、既存の伝票や在庫の Customer は連動して変更されません。"
    ,"租户内唯一的商品编码，创建后固定，作为长期识别 Item 的业务编号。": "テナント内で一意の商品コードです。作成後は固定され、Item を継続的に識別する業務番号として使用します。"
    ,"创建时确定商品分类：PRODUCT 为普通产品，MATERIAL 主要用于物料候选。": "作成時に商品分類を決定します。PRODUCT は通常商品、MATERIAL は主に資材候補に使用します。"
    ,"控制商品在新入库、RMA 和出库选择中的常规可选状态；停用不删除已有库存和业务记录。": "新規入荷、RMA、出庫選択で商品を通常選択できるか制御します。無効化しても既存の在庫や業務記録は削除されません。"
    ,"维护商品的完整描述和列表中便于快速识别的简短描述。": "商品の詳細説明と、一覧で識別しやすい短い説明を管理します。"
    ,"记录商品所属行业和品牌；选择 Industry 后启用对应的 Industry Properties。": "商品の業種とブランドを記録します。Industry を選択すると対応する Industry Properties が有効になります。"
    ,"补充商品原产地和等级资料。": "商品の原産国とグレード情報を補足します。"
    ,"记录商品标签和别名，帮助使用不同业务称呼识别同一商品。": "商品のタグと別名を記録し、異なる業務名称でも同じ商品を識別できるようにします。"
    ,"维护不同商品或包装层级使用的标准条码。": "商品または包装階層ごとの標準バーコードを管理します。"
    ,"补充出版物、运输分类和商品分类编码。": "出版物、輸送分類、商品分類のコードを補足します。"
    ,"标识商品是否启用序列号管理。": "商品でシリアル番号管理を有効にするかを示します。"
    ,"分别配置收货和发货环节是否采集序列号。": "入荷時と出荷時にシリアル番号を収集するかを個別に設定します。"
    ,"配置入库或出库过程中是否执行序列号校验。": "入庫または出庫時にシリアル番号を検証するかを設定します。"
    ,"维护序列号长度和格式规则。": "シリアル番号の長さと形式ルールを管理します。"
    ,"标识商品是否启用批次管理。": "商品でロット管理を有効にするかを示します。"
    ,"分别设置收货和发货过程中是否采集批次。": "入荷時と出荷時にロットを収集するかを個別に設定します。"
    ,"记录商品保质期天数。": "商品の保存可能日数を記録します。"
    ,"配置收货时是否采集有效期和生产日期。": "入荷時に有効期限と製造日を収集するかを設定します。"
    ,"为商品选择默认的出库库存规则。": "商品の既定の出庫在庫ルールを選択します。"
    ,"记录该商品允许出库的天数要求。": "商品の出庫可能日数要件を記録します。"
    ,"维护出库规则使用的时间窗口。": "出庫ルールで使用する時間枠を管理します。"
    ,"记录商品成分或其他需要展示的补充说明。": "商品の成分や表示が必要な補足情報を記録します。"
    ,"最多上传 5 张商品图片，供 Item 资料查看。": "Item 情報で確認できる商品画像を最大 5 枚アップロードできます。"
    ,"基础资料": "基本情報", "条码与追踪": "バーコードと追跡", "特殊商品": "特殊商品", "出库与补充资料": "出庫と補足情報"
    ,"Industry 用于标识商品所属行业，并通过 Property Template 规定该行业的 Item 需要填写哪些专属属性。该分类同时会参与 VLG 上架范围判断和料箱出库的 Item 过滤。": "Industry は商品の業種を識別し、Property Template でその業種の Item に必要な固有属性を定義します。この分類は VLG の棚入れ範囲判定とコンテナ出庫の Item フィルターにも使用されます。"
    ,"Industry 列表同时展示行业主档和模板使用情况": "Industry 一覧で業種マスタとテンプレートの利用状況を確認する"
    ,"列表可按 Industry Code 或 Name 查询，并通过 Property Template Count 查看该行业配置了多少个动态属性，通过 Related SKU Count 查看已有多少个 Item 使用该 Industry。": "一覧では Industry Code または Name で検索できます。Property Template Count で動的属性数を、Related SKU Count でその Industry を使用する Item 数を確認できます。"
    ,"为一次出库运输指定实际承运商": "出庫輸送に実際の運送会社を指定する"
    ,"仓库接入新的运输合作方时，先建立 Carrier 主档并记录其运输方式与联系信息。出库订单需要记录运输方时可手动选择 Carrier；订单进入装载阶段后，Load 继续关联实际承运商，并将相应信息用于运输识别和 BOL。": "倉庫が新しい輸送パートナーと連携するときは、Carrier マスタを登録し、輸送方式と連絡先を記録します。出庫注文では Carrier を手動選択でき、積込段階では Load が実際の運送会社を引き継ぎ、輸送識別と BOL に利用します。"
    ,"合作方接入": "パートナー登録", "建立 Carrier 主档": "Carrier マスタを登録する", "维护承运商编码、名称、SCAC、运输方式及联系人。": "運送会社コード、名称、SCAC、輸送方式、連絡先を管理します。", "订单选择 Carrier": "注文で Carrier を選択する", "创建或编辑订单时手动选择承运商；订单保存 Carrier ID，详情显示承运商名称，并支持按 Carrier 查询订单。": "注文の作成・編集時に運送会社を手動選択します。注文には Carrier ID が保存され、詳細に名称が表示され、Carrier で検索できます。", "装载关联运输方": "積込に運送会社を関連付ける", "创建 Load 时指定 Carrier，说明本次装载由哪家承运商执行，并承接 BOL 中的承运商信息。": "Load 作成時に Carrier を指定し、積込を実行する運送会社を示します。BOL の運送会社情報にも引き継がれます。"
    ,"Address 是客户地址簿。一个 Customer 可以建立多个门店、收货点或其他业务地址，并通过名称、简称和 Tags 帮助操作人员在创建订单或 Load 时找到正确地址。": "Address は顧客の住所録です。1 つの Customer に複数の店舗、納品先、その他の業務住所を登録でき、名称、略称、Tags により注文や Load 作成時に正しい住所を検索できます。"
    ,"从 Address Management 查看客户地址清单": "Address Management で顧客住所一覧を確認する"
    ,"查询框可按地址名称、简称或联系人搜索；列表集中展示 Address Name、Shorthand、Customer、Tags、国家、城市及联系人信息。": "検索欄では住所名、略称、連絡先で検索できます。一覧には Address Name、Shorthand、Customer、Tags、国、都市、連絡先をまとめて表示します。"
    ,"同一客户拥有多个门店或收货地址": "1 つの顧客が複数の店舗または納品先を持つ"
    ,"例如零售客户在上海、苏州和杭州分别设有门店。仓库可以为同一个 Customer 建立三条 Address，通过 Address Name 表示门店名称、Shorthand 记录日常简称，并用 Tags 标记区域或用途。创建出库单时，操作人员按客户筛选并选择对应门店地址。": "例えば小売顧客が上海、蘇州、杭州に店舗を持つ場合、同じ Customer に 3 件の Address を登録します。Address Name で店舗名、Shorthand で日常の略称を示し、Tags で地域や用途を付けます。出庫注文では顧客で絞り込み、対応する店舗住所を選択します。"
    ,"客户地址簿": "顧客住所録", "维护多个 Address": "複数の Address を管理する", "同一 Customer 可维护多个门店或收货点，并通过 Address Name、Shorthand 和 Tags 识别。": "同じ Customer に複数の店舗や納品先を登録し、Address Name、Shorthand、Tags で識別できます。"
    ,"业务单据选择": "業務伝票で選択する", "复制当前地址内容": "現在の住所内容をコピーする", "创建 Outbound Order 或 Load 时按 Customer 筛选并选择 Address。": "Outbound Order または Load の作成時に Customer で絞り込み、Address を選択します。"
    ,"历史保留": "履歴を保持する", "形成地址快照": "住所スナップショットを作成する", "地址写入单据后独立保存，主档修改不改变已有订单或 Load。": "住所は伝票に書き込まれた後に独立保存され、マスタを変更しても既存の注文や Load は変わりません。"
    ,"建立一条可在业务单据中选择的客户地址": "業務伝票で選択できる顧客住所を登録する"
    ,"先确定地址属于哪个客户": "まず住所の顧客を決める", "选择 Customer 并填写 Address Name，形成地址的归属和主要识别名称。Shorthand 适合记录操作人员熟悉的简称；Tags 可自由输入区域、门店类别或业务用途。": "Customer を選択して Address Name を入力し、住所の所属と主な識別名を設定します。Shorthand には作業者が使う略称を、Tags には地域、店舗区分、業務用途を自由に入力できます。"
    ,"再填写可以实际送达的地址": "実際に配送できる住所を入力する", "Country 为页面必填项；选择国家后继续选择 State/Province 和 City，再补充两行详细地址及 Zip Code。州省和城市会根据前一级选择逐步开放。": "Country は必須です。国を選択した後、State/Province と City を選び、詳細住所 2 行と Zip Code を入力します。州・省・都市は上位の選択に応じて順に有効になります。"
    ,"补充现场收货联系人": "現地の荷受け連絡先を補足する", "Contact、Phone 和 Email 用于记录该地址的对接窗口；Note 可以补充卸货时间、门店收货要求或其他现场说明。": "Contact、Phone、Email は住所の窓口を記録するために使用します。Note には荷下ろし時間、店舗の荷受け要件、その他の現場メモを補足できます。"
    ,"本说明书按照实际操作流程介绍系统。每个模块先解释业务定位和使用场景，再结合真实页面说明字段、配置方法及其在仓储作业中的作用。": "本マニュアルは実際の操作フローに沿ってシステムを説明します。各モジュールでは、まず業務上の位置付けと利用シーンを説明し、実際の画面を使って項目、設定方法、倉庫作業での役割を解説します。"
    ,"统一登记业务参与方，供不同仓储场景重复使用": "倉庫業務の参加者を一元登録し、さまざまなシナリオで再利用する"
    ,"客户与零售商": "顧客と小売業者", "货权方与资产所有者": "所有者と資産所有者", "品牌、供应商与制造商": "ブランド、サプライヤー、メーカー", "租户、本公司与部门": "テナント、自社、部門"
    ,"委托仓储与接收商品的组织": "保管を委託し商品を受け取る組織", "库存及仓储资产的归属主体": "在庫と倉庫資産の所有主体", "商品品牌、供货及生产来源": "商品ブランド、供給元、生産元", "平台租户、账户主体及内部组织": "プラットフォームのテナント、アカウント、社内組織"
    ,"一个公司或组织建立一次，在不同业务场景中复用同一主体身份。": "会社や組織は一度登録すれば、さまざまな業務シナリオで同じ主体情報を再利用できます。"
    ,"配置 CUSTOMER 后，建立或同步对应的 Customer 资料。": "CUSTOMER を設定したら、対応する Customer 情報を登録または同期します。"
    ,"当仓库接入新的客户或货权方时，先按名称或编码确认是否已有可复用的 Organization。没有对应主档时，再分别建立主体、指定 CUSTOMER 或 TITLE 等业务角色，并维护客户与货权方关系，供后续入库、出库和库存记录使用。": "新しい顧客または所有者を受け入れる際は、まず名称またはコードで再利用できる Organization があるか確認します。該当するマスタがなければ主体を登録し、CUSTOMER や TITLE などの役割を指定して関係を管理し、入出庫と在庫記録で使用します。"
    ,"按 Organization Code、Organization Name 或 Status 定位目标组织。": "Organization Code、Organization Name、Status で対象組織を検索します。"
    ,"查看组织编码、名称、完整名称、Tags、状态及创建时间，快速确认主体身份和业务角色。": "組織コード、名称、正式名称、Tags、ステータス、作成日時を確認し、主体と業務上の役割をすばやく把握します。"
    ,"基础资料 · 角色 Tags · 联系信息": "基本情報 · ロール Tags · 連絡先"
    ,"组织的业务编码；创建后可修改。具有 CUSTOMER 角色时同步对应的 Customer Code。": "組織の業務コードです。作成後に変更できます。CUSTOMER ロールの場合は対応する Customer Code と同期します。"
    ,"记录并展示 Organization 主档的有效状态。": "Organization マスタの有効ステータスを記録・表示します。"
    ,"定义 Organization 可以承担的业务角色，支持同时选择多个角色。": "Organization が担える業務上の役割を定義し、複数の役割を同時に選択できます。"
    ,"维护一位组织联系人及其电话、邮箱资料。": "組織の連絡担当者、電話番号、メールアドレスを管理します。"
    ,"联系人分类文本，可自由输入一个值，保存后按输入内容展示。": "連絡先の分類を自由入力します。保存後は入力した値が表示されます。"
    ,"Customer 沿用 Organization 的主体编码和名称；关系页签补充该客户涉及的品牌、零售商、供应商、部门与货权方。": "Customer は Organization のコードと名称を引き継ぎます。Relationships タブでは関係するブランド、小売業者、サプライヤー、部門、所有者を追加します。"
    ,"沿用 Organization 的主体编码，是客户在业务单据和配置中的识别编码。": "Organization の主体コードを引き継ぎ、業務伝票と設定で顧客を識別するコードです。"
    ,"客户简称与完整名称，由对应 Organization 同步。": "顧客の略称と正式名称で、対応する Organization から同期されます。"
    ,"Customer 与 Organization 的一对一关联标识，由系统生成且不可更换。": "Customer と Organization の 1 対 1 関係を示す識別子です。システムが生成し変更できません。"
    ,"记录客户主档的有效状态。": "顧客マスタの有効ステータスを記録します。"
    ,"记录客户所属行业，便于客户资料分类和查询。": "顧客の業種を記録し、顧客情報の分類と検索に役立てます。"
    ,"维护客户联系人资料；Role 可按实际职责自由填写。": "顧客の連絡先を管理します。Role は実際の職責に合わせて自由に入力できます。"
    ,"从具备对应 Organization Tag 的业务主体中选择并建立关联。": "対応する Organization Tag を持つ業務主体を選択して関連付けます。"
    ,"形成该客户涉及的品牌、零售商、供应商和部门清单。": "顧客に関係するブランド、小売業者、サプライヤー、部門の一覧を作成します。"
    ,"维护该客户可以使用的货权方；创建 Customer 时自动关联自身。": "顧客が利用できる所有者を管理します。Customer 作成時には自身が自動的に関連付けられます。"
    ,"同一仓库服务不同客户时，可以在 Customer Settings 中分别维护作业要求，使任务创建和执行过程采用对应客户的规则。": "同じ倉庫で複数の顧客に対応する場合、Customer Settings で顧客ごとの作業要件を管理し、タスクの作成と実行に対応するルールを適用します。"
    ,"根据客户对月台周转、收货差异和库位使用的要求，决定收货任务怎样推进。": "顧客のドック回転、入荷差異、ロケーション利用の要件に基づき、入荷タスクの進め方を決定します。"
    ,"可按客户跳过 Dock Check In 或 Offload。适合不在系统中管理签到或卸货步骤的业务；LP Setup 仍会保留，因为它负责建立实际收货的 LP。": "顧客ごとに Dock Check In または Offload を省略できます。受付や荷下ろしをシステムで管理しない業務に適しています。実際の入荷 LP を作成する LP Setup は残ります。"
    ,"按 Receipt Type 控制是否允许超收和最大比例。例如退货收货可以接受一定差异，常规采购收货则可以设置为不允许超收。": "Receipt Type ごとに超過入荷の可否と上限比率を制御します。返品入荷では一定の差異を許可し、通常の購買入荷では超過を禁止できます。"
    ,"开启后允许同一 LP 混放不同商品；实际存放仍需满足 Location、Container Type 等其他规则。": "有効にすると同じ LP に異なる商品を混載できます。ただし実際の保管は Location や Container Type などの他のルールを満たす必要があります。"
    ,"Default Shipping Rule 是默认库存分配规则。选择 FIFO 时，系统按库存创建时间由早到晚进行分配，用于落实先进先出的周转要求。": "Default Shipping Rule は既定の在庫引当ルールです。FIFO を選ぶと在庫の作成日時が古い順に引き当て、先入れ先出しを実現します。"
    ,"开启后，还需在 Task Config 中启用对应任务类型。两项条件同时满足时，相关 Task Action 才会发送到 WCS。": "有効化後、Task Config でも対応するタスク種別を有効にする必要があります。両方の条件を満たすと Task Action が WCS に送信されます。"
    ,"可为 Item、Receipt、Order、明细和 Inventory 配置扩展字段名称，用于页面展示、导入导出、接口同步和精确查询。": "Item、Receipt、Order、明細、Inventory に拡張フィールド名を設定し、画面表示、インポート・エクスポート、API 同期、詳細検索に利用できます。"
  },
  en: {
    "从业务场景出发，": "Start from business scenarios and", "看懂系统如何落地仓储要求": "understand how warehouse requirements are implemented",
    "理解模块": "Understand the module", "对应场景": "Map the scenario", "查看页面": "Review the screen", "落地作业": "Put it into operation",
    "业务主体": "Business parties", "建立客户与组织身份": "Establish customer and organization identities", "商品与包装": "Products and packaging", "让商品可识别、可换算": "Make products identifiable and convertible",
    "分类与扩展": "Classification and extensions", "按行业扩展商品资料": "Extend product data by industry", "物流资料": "Logistics data", "为运输准备承运商与地址": "Prepare carriers and addresses for transportation",
    "统一登记业务参与方，供不同仓储场景重复使用": "Register business participants once and reuse them across warehouse scenarios",
    "仓储业务，从准确的基础资料开始": "Warehouse operations start with accurate master data",
    "MDM 集中定义“与谁开展业务、仓库处理什么商品，以及这些对象具备哪些分类和属性”。资料建立后，供入库、出库、库存、任务和运输等流程选择或读取，避免同一对象在不同业务中重复维护。": "MDM centrally defines who the warehouse works with, which products it handles, and the classifications and attributes of those objects. Once created, the data is selected or read by inbound, outbound, inventory, task, and transportation flows, preventing duplicate maintenance of the same object.",
    "Organization 统一记录参与仓储业务的组织身份，Customer 在此基础上补充客户关系和作业规则。": "Organization provides the shared identity for parties involved in warehouse operations; Customer adds customer relationships and operating rules on top of it.",
    "Item 维护 SKU 与追踪要求，UOM 和 Pallet Config 描述商品的包装换算及托盘码放配置。": "Item maintains the SKU and tracking requirements, while UOM and Pallet Config describe packaging conversions and pallet configuration.",
    "Industry 通过 Property Template 定义行业专属字段；Hazard 维护可供 Item 引用的危险品分类资料。": "Industry defines industry-specific fields through Property Template; Hazard maintains hazardous-material classifications that Items can reference.",
    "Carrier 记录实际承运商及运输方式，Address 维护客户在订单和装载业务中使用的地址。": "Carrier records the actual carrier and transportation methods; Address maintains customer addresses used by orders and load operations.",
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
    "设备执行": "Equipment execution", "结果通知": "Result notifications", "客户化资料": "Customer-specific data",
    "从商品身份到追踪要求，在一个页面完成基础建档": "Complete the product master from identity to tracking requirements on one page",
    "补充商品单位、托盘码放和行业属性": "Add product units, pallet patterns, and industry attributes",
    "商品身份": "Product identity", "追踪要求": "Tracking requirements", "特殊属性": "Special attributes", "运输规则": "Shipping rules",
    "Add UOM｜为商品增加计量或包装单位": "Add UOM｜Add a measurement or packaging unit",
    "记录商品在托盘上的标准码放结构": "Record the standard pallet configuration for the product",
    "Industry Properties｜维护行业专属的商品资料": "Industry Properties｜Maintain industry-specific product data",
    "在行业主档中维护 Property Template": "Maintain the Property Template in the industry master",
    "维护危险品的识别与分类资料": "Maintain hazardous-material identification and classification data",
    "先标记 Hazardous，再选择对应定义": "Mark the item as Hazardous, then select its definition",
    "从身份识别到运输范围，完成承运商建档": "Complete carrier setup from identity to transportation scope",
    "建立一条可在业务单据中选择的客户地址": "Create a customer address that can be selected in business documents",
    "统一维护实际运输承运商，供出库订单与装载业务引用": "Maintain the actual carriers used by outbound orders and load operations",
    "Carrier 用于登记仓库合作承运商的识别资料、可承接的运输方式和联系信息。建立主档后，操作人员可以在出库订单或 Load 中选择实际运输方，并在后续查询和运输单据中识别承运商。": "Carrier records the identity, supported transportation methods, and contact information of warehouse partners. After the master is created, operators can select the actual carrier in an Outbound Order or Load and identify it in searches and transportation documents.",
    "页面预览": "Page Preview",
    "从 Carrier Management 查找可用承运商": "Find available carriers in Carrier Management",
    "列表可按 Carrier Code、Carrier Name、SCAC Code 和 Status 查询，并集中查看承运商支持的 Shipping Methods、联系人及当前状态。": "Use Carrier Code, Carrier Name, SCAC Code, and Status to search the list and review supported Shipping Methods, contacts, and the current status."
    ,"维护主体编码、名称、全称和状态；CUSTOMER Tag 建立客户身份。": "Maintain the party code, name, full name, and status; the CUSTOMER Tag establishes the customer identity."
    ,"把客户合同和运营要求转化为仓储资料、作业策略与关系范围。": "Turn customer contracts and operating requirements into warehouse data, operating strategies, and relationship scope."
    ,"收货步骤、上架时机、超收和库位推荐": "Receiving steps, put-away timing, over-receipt, and location recommendations"
    ,"库存分配、订单分组、取消节点和拣货排序": "Inventory allocation, order grouping, cancellation points, and pick sequencing"
    ,"WCS、Webhook 和动态扩展字段": "WCS, webhooks, and dynamic extension fields"
    ,"当仓库开始为新客户提供服务时，先建立客户身份和基础资料，再根据合同约定配置收货、上架、库存分配、拣货及设备协同规则；如涉及多个货权方或业务伙伴，则在 Relationships 中建立对应关联。": "When the warehouse starts serving a new customer, establish the customer identity and master data first, then configure receiving, put-away, inventory allocation, picking, and equipment coordination rules according to the contract. If multiple title owners or business partners are involved, create the corresponding relationships in Relationships."
    ,"本说明书按照实际操作流程介绍系统。每个模块先解释业务定位和使用场景，再结合真实页面说明字段、配置方法及其在仓储作业中的作用。": "This manual explains the system along the actual operating flow. Each module first describes its business purpose and use case, then uses the real screens to explain fields, configuration, and the role each setting plays in warehouse operations."
    ,"统一登记业务参与方，供不同仓储场景重复使用": "Register business participants once and reuse them across warehouse scenarios"
    ,"客户与零售商": "Customers and retailers", "货权方与资产所有者": "Title owners and asset owners", "品牌、供应商与制造商": "Brands, suppliers, and manufacturers", "租户、本公司与部门": "Tenants, our company, and departments"
    ,"委托仓储与接收商品的组织": "Organizations that entrust storage and receive goods", "库存及仓储资产的归属主体": "Owners of inventory and warehouse assets", "商品品牌、供货及生产来源": "Product brands, supply sources, and manufacturers", "平台账户所属主体": "Platform tenant, account, and internal organization"
    ,"一个公司或组织建立一次，在不同业务场景中复用同一主体身份。": "Create each company or organization once and reuse the same party identity across business scenarios."
    ,"配置 CUSTOMER 后，建立或同步对应的 Customer 资料。": "After configuring CUSTOMER, create or synchronize the corresponding Customer record."
    ,"按 Organization Code、Organization Name 或 Status 定位目标组织。": "Locate an organization by Organization Code, Organization Name, or Status."
    ,"查看组织编码、名称、完整名称、Tags、状态及创建时间，快速确认主体身份和业务角色。": "Review the organization code, name, full name, Tags, status, and creation time to confirm its identity and business roles."
    ,"基础资料 · 角色 Tags · 联系信息": "Master data · role Tags · contact information"
    ,"组织的业务编码；创建后可修改。具有 CUSTOMER 角色时同步对应的 Customer Code。": "The organization's business code; it can be edited after creation. When the CUSTOMER role is present, it syncs to the corresponding Customer Code."
    ,"记录并展示 Organization 主档的有效状态。": "Record and display the active status of the Organization master."
    ,"定义 Organization 可以承担的业务角色，支持同时选择多个角色。": "Define the business roles an Organization can perform; multiple roles may be selected."
    ,"维护一位组织联系人及其电话、邮箱资料。": "Maintain an organization contact and their phone and email details."
    ,"联系人分类文本，可自由输入一个值，保存后按输入内容展示。": "A free-text contact category; the saved value is displayed as entered."
    ,"Customer 沿用 Organization 的主体编码和名称；关系页签补充该客户涉及的品牌、零售商、供应商、部门与货权方。": "Customer inherits the party code and name from Organization; the Relationships tab adds the brands, retailers, suppliers, departments, and title owners involved."
    ,"沿用 Organization 的主体编码，是客户在业务单据和配置中的识别编码。": "The Organization party code used to identify the customer in business documents and configuration."
    ,"客户简称与完整名称，由对应 Organization 同步。": "The customer's short and full names, synchronized from the related Organization."
    ,"Customer 与 Organization 的一对一关联标识，由系统生成且不可更换。": "The system-generated one-to-one link between Customer and Organization; it cannot be replaced."
    ,"记录客户主档的有效状态。": "Record the active status of the customer master."
    ,"记录客户所属行业，便于客户资料分类和查询。": "Record the customer's industry for classification and search."
    ,"维护客户联系人资料；Role 可按实际职责自由填写。": "Maintain customer contact details; enter Role freely according to the person's responsibilities."
    ,"从具备对应 Organization Tag 的业务主体中选择并建立关联。": "Select and link a business party with the corresponding Organization Tag."
    ,"形成该客户涉及的品牌、零售商、供应商和部门清单。": "Build the list of brands, retailers, suppliers, and departments associated with the customer."
    ,"维护该客户可以使用的货权方；创建 Customer 时自动关联自身。": "Maintain the title owners available to the customer; the customer itself is linked automatically when Customer is created."
    ,"同一仓库服务不同客户时，可以在 Customer Settings 中分别维护作业要求，使任务创建和执行过程采用对应客户的规则。": "When one warehouse serves multiple customers, maintain requirements separately in Customer Settings so task creation and execution use each customer's rules."
    ,"根据客户对月台周转、收货差异和库位使用的要求，决定收货任务怎样推进。": "Determine how receiving tasks proceed based on the customer's dock-turnover, receiving-variance, and location-use requirements."
    ,"可按客户跳过 Dock Check In 或 Offload。适合不在系统中管理签到或卸货步骤的业务；LP Setup 仍会保留，因为它负责建立实际收货的 LP。": "Skip Dock Check In or Offload for selected customers. This suits operations that do not manage check-in or unloading in the system; LP Setup remains because it creates the actual receiving LP."
    ,"按 Receipt Type 控制是否允许超收和最大比例。例如退货收货可以接受一定差异，常规采购收货则可以设置为不允许超收。": "Control over-receipt permission and its maximum ratio by Receipt Type. For example, returns may allow a variance while regular purchase receipts can prohibit over-receipt."
    ,"开启后允许同一 LP 混放不同商品；实际存放仍需满足 Location、Container Type 等其他规则。": "When enabled, one LP may contain different items; storage must still satisfy rules such as Location and Container Type."
    ,"是默认库存分配规则。选择 FIFO 时，系统按库存创建时间由早到晚进行分配，用于落实先进先出的周转要求。": "is the default inventory allocation rule. With FIFO, inventory is allocated from oldest to newest by creation time to enforce first-in, first-out rotation."
    ,"开启后，还需在 Task Config 中启用对应任务类型。两项条件同时满足时，相关 Task Action 才会发送到 WCS。": "After enabling this, the corresponding task type must also be enabled in Task Config. The Task Action is sent to WCS only when both conditions are met."
    ,"可为 Item、Receipt、Order、明细和 Inventory 配置扩展字段名称，用于页面展示、导入导出、接口同步和精确查询。": "Configure extension field names for Item, Receipt, Order, lines, and Inventory for display, import/export, API synchronization, and precise searches."
    ,"从 Organization 或 Customer 入口创建": "Create it from the Organization or Customer entry point"
    ,"维护行业、联系人和显示信息": "Maintain industry, contact, and display information"
    ,"确定收货、上架、分配与拣货方式": "Define receiving, put-away, allocation, and picking methods"
    ,"维护 Title、Brand、Supplier 等关系": "Maintain relationships such as Title, Brand, and Supplier"
    ,"快速收货": "Fast receiving", "收货过程中生成上架任务，减少货物等待": "Generate put-away tasks during receiving to reduce waiting time"
    ,"释放库位": "Release locations", "优先分配拣完后可以清空库位的库存": "Prioritize inventory that will empty a location after picking"
    ,"自动化执行": "Automated execution", "将指定任务类型的 Action 发送至 WCS": "Send the Action for selected task types to WCS"
    ,"Item 以租户内唯一的 SKU 识别商品，并记录当前 Customer、商品类型、条码、序列号、批次效期、计量单位、托盘配置及行业扩展资料。业务单据和库存通过稳定的 Item ID 持续引用商品。": "Item identifies each product by a tenant-unique SKU and records its current Customer, product type, barcodes, serial numbers, lot and shelf-life data, units of measure, pallet configurations, and industry extensions. Business documents and inventory continue to reference the product through a stable Item ID."
    ,"Item 列表集中查看与管理商品主档": "Review and manage product masters in the Item list"
    ,"通过列表查询已有商品，并查看 SKU、Customer、Type、Status 等主要资料；需要新建或维护商品时，可从这里进入对应操作。": "Search existing products in the list and review key details such as SKU, Customer, Type, and Status. Start the appropriate action here when creating or maintaining a product."
    ,"仓库开始接收一个新商品前，先确认租户内是否已有相同 SKU；没有可复用主档时，再确定客户归属和商品类型，补充识别与追踪要求，并根据实际包装和码放方式维护 UOM 与 Pallet Config。": "Before receiving a new product, confirm that the same SKU does not already exist in the tenant. If no reusable master exists, assign the Customer and product Type, add identification and tracking requirements, and maintain UOM and Pallet Config according to the actual packaging and pallet pattern."
    ,"条码、序列号、批次效期和出库要求共同决定仓库如何识别、追踪和处理该商品。": "Barcodes, serial numbers, lot and shelf-life data, and outbound requirements determine how the warehouse identifies, tracks, and handles the product."
    ,"Item 当前归属的客户。可以修改，但不会同步改变已有单据和库存中的 Customer。": "The Customer currently assigned to the Item. It can be changed, but the Customer on existing documents and inventory is not updated automatically."
    ,"租户内唯一的商品编码，创建后固定，作为长期识别 Item 的业务编号。": "The tenant-unique product code. It is fixed after creation and serves as the long-term business identifier for the Item."
    ,"创建时确定商品分类：PRODUCT 为普通产品，MATERIAL 主要用于物料候选。": "Set the product classification at creation: PRODUCT is a regular product, while MATERIAL is primarily used as a material candidate."
    ,"控制商品在新入库、RMA 和出库选择中的常规可选状态；停用不删除已有库存和业务记录。": "Controls whether the product is normally selectable for new inbound, RMA, and outbound operations. Deactivation does not delete existing inventory or business records."
    ,"维护商品的完整描述和列表中便于快速识别的简短描述。": "Maintain the full product description and a short description for quick identification in lists."
    ,"记录商品所属行业和品牌；选择 Industry 后启用对应的 Industry Properties。": "Record the product's industry and brand. Selecting an Industry enables the corresponding Industry Properties."
    ,"补充商品原产地和等级资料。": "Add the product's country of origin and grade."
    ,"记录商品标签和别名，帮助使用不同业务称呼识别同一商品。": "Record product tags and aliases so the same product can be identified under different business names."
    ,"维护不同商品或包装层级使用的标准条码。": "Maintain standard barcodes used for different products or packaging levels."
    ,"补充出版物、运输分类和商品分类编码。": "Add publication, transportation-classification, and commodity-classification codes."
    ,"标识商品是否启用序列号管理。": "Indicates whether serial-number management is enabled for the product."
    ,"分别配置收货和发货环节是否采集序列号。": "Configure separately whether serial numbers are collected during receiving and shipping."
    ,"配置入库或出库过程中是否执行序列号校验。": "Configure whether serial numbers are validated during inbound or outbound processing."
    ,"维护序列号长度和格式规则。": "Maintain serial-number length and format rules."
    ,"标识商品是否启用批次管理。": "Indicates whether lot management is enabled for the product."
    ,"分别设置收货和发货过程中是否采集批次。": "Configure separately whether lot numbers are collected during receiving and shipping."
    ,"记录商品保质期天数。": "Record the product's shelf life in days."
    ,"配置收货时是否采集有效期和生产日期。": "Configure whether expiration and manufacturing dates are collected during receiving."
    ,"为商品选择默认的出库库存规则。": "Select the default outbound inventory rule for the product."
    ,"记录该商品允许出库的天数要求。": "Record the number-of-days requirement for shipping the product."
    ,"维护出库规则使用的时间窗口。": "Maintain the time window used by the shipping rule."
    ,"记录商品成分或其他需要展示的补充说明。": "Record product ingredients or other supplementary information that needs to be displayed."
    ,"最多上传 5 张商品图片，供 Item 资料查看。": "Upload up to five product images for review in the Item record."
    ,"基础资料": "Master data", "条码与追踪": "Barcodes and tracking", "特殊商品": "Special products", "出库与补充资料": "Outbound and supplementary data"
    ,"Industry 用于标识商品所属行业，并通过 Property Template 规定该行业的 Item 需要填写哪些专属属性。该分类同时会参与 VLG 上架范围判断和料箱出库的 Item 过滤。": "Industry identifies the product's industry and uses Property Template to define the attributes required for Items in that industry. The classification also participates in VLG put-away scope checks and filters Items for container outbound operations."
    ,"Industry 列表同时展示行业主档和模板使用情况": "Review the industry master and template usage in the Industry list"
    ,"列表可按 Industry Code 或 Name 查询，并通过 Property Template Count 查看该行业配置了多少个动态属性，通过 Related SKU Count 查看已有多少个 Item 使用该 Industry。": "Search by Industry Code or Name. Property Template Count shows the number of configured dynamic attributes, while Related SKU Count shows how many Items use the Industry."
    ,"为一次出库运输指定实际承运商": "Assign the actual carrier for an outbound shipment"
    ,"仓库接入新的运输合作方时，先建立 Carrier 主档并记录其运输方式与联系信息。出库订单需要记录运输方时可手动选择 Carrier；订单进入装载阶段后，Load 继续关联实际承运商，并将相应信息用于运输识别和 BOL。": "When the warehouse onboards a new transportation partner, create the Carrier master and record its transportation methods and contact details. Select the Carrier on an outbound order when needed; once the order reaches loading, the Load keeps the actual carrier and uses the information for transport identification and the BOL."
    ,"合作方接入": "Partner onboarding", "建立 Carrier 主档": "Create the Carrier master", "维护承运商编码、名称、SCAC、运输方式及联系人。": "Maintain the carrier code, name, SCAC, transportation methods, and contacts.", "订单选择 Carrier": "Select the Carrier on the order", "创建或编辑订单时手动选择承运商；订单保存 Carrier ID，详情显示承运商名称，并支持按 Carrier 查询订单。": "Select the carrier manually when creating or editing an order. The order stores the Carrier ID, shows the carrier name in details, and supports searches by Carrier.", "装载关联运输方": "Link the carrier to the load", "创建 Load 时指定 Carrier，说明本次装载由哪家承运商执行，并承接 BOL 中的承运商信息。": "Specify the Carrier when creating a Load to identify who performs the loading and carry the carrier information into the BOL."
    ,"Address 是客户地址簿。一个 Customer 可以建立多个门店、收货点或其他业务地址，并通过名称、简称和 Tags 帮助操作人员在创建订单或 Load 时找到正确地址。": "Address is the customer's address book. A Customer can have multiple stores, receiving points, or other business addresses, and names, shorthand, and Tags help operators find the right address when creating an order or Load."
    ,"从 Address Management 查看客户地址清单": "Review customer addresses in Address Management"
    ,"查询框可按地址名称、简称或联系人搜索；列表集中展示 Address Name、Shorthand、Customer、Tags、国家、城市及联系人信息。": "Search by address name, shorthand, or contact. The list presents Address Name, Shorthand, Customer, Tags, country, city, and contact information together."
    ,"同一客户拥有多个门店或收货地址": "One customer has multiple stores or receiving addresses"
    ,"例如零售客户在上海、苏州和杭州分别设有门店。仓库可以为同一个 Customer 建立三条 Address，通过 Address Name 表示门店名称、Shorthand 记录日常简称，并用 Tags 标记区域或用途。创建出库单时，操作人员按客户筛选并选择对应门店地址。": "For example, a retail customer may have stores in Shanghai, Suzhou, and Hangzhou. Create three Addresses for the same Customer, use Address Name for each store, Shorthand for its everyday abbreviation, and Tags for region or purpose. When creating an outbound order, filter by customer and select the relevant store address."
    ,"客户地址簿": "Customer address book", "维护多个 Address": "Maintain multiple Addresses", "同一 Customer 可维护多个门店或收货点，并通过 Address Name、Shorthand 和 Tags 识别。": "Maintain multiple stores or receiving points for one Customer and identify them with Address Name, Shorthand, and Tags."
    ,"业务单据选择": "Business document selection", "复制当前地址内容": "Copy the current address details", "创建 Outbound Order 或 Load 时按 Customer 筛选并选择 Address。": "Filter by Customer and select an Address when creating an Outbound Order or Load."
    ,"历史保留": "History retention", "形成地址快照": "Create an address snapshot", "地址写入单据后独立保存，主档修改不改变已有订单或 Load。": "Once written to a document, the address is saved independently; master-data changes do not change existing orders or Loads."
    ,"建立一条可在业务单据中选择的客户地址": "Create a customer address that can be selected in business documents"
    ,"先确定地址属于哪个客户": "First identify the customer for the address", "选择 Customer 并填写 Address Name，形成地址的归属和主要识别名称。Shorthand 适合记录操作人员熟悉的简称；Tags 可自由输入区域、门店类别或业务用途。": "Select the Customer and enter Address Name to establish ownership and the primary identifier. Use Shorthand for a familiar abbreviation, and enter region, store type, or business purpose freely in Tags."
    ,"再填写可以实际送达的地址": "Then enter the deliverable address", "Country 为页面必填项；选择国家后继续选择 State/Province 和 City，再补充两行详细地址及 Zip Code。州省和城市会根据前一级选择逐步开放。": "Country is required. After choosing the country, select State/Province and City, then add two address lines and Zip Code. State/province and city become available progressively based on the previous selection."
    ,"补充现场收货联系人": "Add the on-site receiving contact", "Contact、Phone 和 Email 用于记录该地址的对接窗口；Note 可以补充卸货时间、门店收货要求或其他现场说明。": "Use Contact, Phone, and Email to record the contact window for the address. Use Note for unloading times, store receiving requirements, or other on-site notes."
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


