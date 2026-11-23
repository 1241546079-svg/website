/* 详情地址由栏目名与条目的 id 组成。 */
window.wardrobeContent = {
  profile: {
    name: "刘映涵",
    introduction: "华东师范大学图书情报硕士研究生，研究方向为商业分析。",
    email: "1241546079@qq.com",
    resume: "assets/刘映涵-简历.pdf"
  },
  workbench: {
    positioning: "商业分析",
    sampleEmail: "portfolio@example.com",
    sampleResume: "assets/resume-example.pdf",
    photoNotes: [
      "雨后车站 · 傍晚 · 焦段未记录",
      "街道轨道 · 傍晚 · 焦段未记录",
      "窗面特写 · 傍晚 · 焦段未记录"
    ],
    stickers: [
      { label: "星芒", path: "assets/stickers/spark.svg" },
      { label: "小花", path: "assets/stickers/flower.svg" },
      { label: "月亮", path: "assets/stickers/moon.svg" },
      { label: "亮窗", path: "assets/stickers/window.svg" },
      { label: "叶片", path: "assets/stickers/leaf.svg" },
      { label: "黑胶", path: "assets/stickers/vinyl.svg" },
      { label: "吉他", path: "assets/stickers/guitar.svg" },
      { label: "爱心", path: "assets/stickers/heart.svg" },
      { label: "橘猫", path: "assets/stickers/cat.svg" },
      { label: "胶片机", path: "assets/stickers/camera.svg" },
      { label: "手冲咖啡", path: "assets/stickers/coffee.svg" },
      { label: "蝴蝶结", path: "assets/stickers/bow.svg" }
    ]
  },
  sections: {
    projects: {
      label: "个人经历", english: "EXPERIENCE", symbol: "⌘",
      outfit: "西装与通勤包", action: "查看个人经历", prop: [70, 58],
      appearance: {
        card: ["#304878", "#7999c3", "#e5effa", "#a1b8d7", "#425c89"],
        glow: "#f0f6ff",
        ascii: ["#1e3fd8", "#f6f8ff", "#a5d8ff", "#38bdf8"],
        light: true
      },
      eye: [[422, 418, 37, 61], [570, 420, 38, 60]],
      placement: [0, 0, 1], featured: "ecommerce-risk-detection"
    },
    photography: {
      label: "摄影作品", english: "PHOTOGRAPHY", symbol: "▣",
      demo: true,
      outfit: "工装马甲与相机", action: "查看摄影作品", prop: [58, 50],
      appearance: {
        card: ["#344339", "#788460", "#e9d5a4", "#a58455", "#4f5040"],
        glow: "#fff1d4",
        ascii: ["#374a36", "#9daa75", "#f0d398", "#a97744"],
        light: false
      },
      eye: [[428, 418, 40, 66], [569, 418, 40, 66]],
      placement: [-0.6, -2.3, 0.97], featured: "blue-hour"
    },
    painting: {
      label: "绘画作品", english: "PAINTING", symbol: "✿",
      demo: true,
      outfit: "贝雷帽与调色盘", action: "查看绘画作品", prop: [75, 42],
      appearance: {
        card: ["#c76f52", "#eaa691", "#f9dda0", "#9cb7de", "#617fac"],
        glow: "#fff4e1",
        ascii: ["#b86161", "#ffdf9a", "#a5bee7", "#ef9a85"],
        light: true
      },
      eye: [[427, 402, 41, 71], [575, 403, 40, 71]],
      placement: [-0.7, -1.2, 0.974], featured: "window-in-blue"
    },
    writing: {
      label: "文字集", english: "WRITING", symbol: "✎",
      demo: true,
      outfit: "围巾与笔记本", action: "阅读文字集", prop: [75, 40],
      appearance: {
        card: ["#78423d", "#b8765d", "#f7e4ca", "#cea280", "#794a3c"],
        glow: "#fff3df",
        ascii: ["#904d44", "#f5e2c5", "#dca27b", "#bb735c"],
        light: true
      },
      eye: [[420, 396, 40, 69], [566, 396, 41, 69]],
      placement: [0.2, -1, 0.97], featured: "after-the-rain"
    }
  },
  items: {
    projects: [
      {
        id: "ecommerce-risk-detection",
        title: "电商平台黑灰产违规商品风险识别与挖掘",
        type: "商业分析 · 风险识别",
        date: "2026.10–2026.11",
        summary: "融合商品标题与店铺经营数据，帮助审核人员优先复核高风险商品。融合模型较纯文本模型减少了 40% 的正常商品误报。",
        facts: {
          "背景": "某电商平台的高投诉样本包含 483 条商品记录、367 家店铺。人工审核成本高，伪装后的违规商品难以识别。项目评估线性与非线性模型在风险初筛中的表现。",
          "个人职责": "参与数据清洗和数据集划分。独立构建 L2 正则化逻辑回归、随机森林与 GBDT 三类结构化分类器，完成网格调参与残差归因分析。",
          "做法": "以店铺为分组单位做 5 折分层分组交叉验证，避免同店样本跨折泄露。使用卡方检验、U 检验和相关系数矩阵检查特征，对长尾特征进行 ln(1+x) 平滑与 Z-score 标准化，再融合商品标题的 TF-IDF 特征与店铺经营属性。",
          "成果": "GBDT 测试集召回率为 89.80%。融合模型测试集准确率为 88.66%，F1 为 0.8889，ROC-AUC 为 0.9126，较纯文本模型减少了 40% 的正常商品误报。提出按模型评分排序、由人工复核的审核分流方案。"
        }
      },
      {
        id: "order-lifecycle",
        title: "订单全生命周期管理系统设计与重构",
        type: "老相食 · B 端实习项目",
        date: "2025.10–2025.12",
        summary: "重新设计订单录入、改单和锁单流程，把高频改单从 5 步缩短到 2 步。",
        facts: {
          "背景": "旧订单系统功能冗余，报价依赖业务内勤手工查表，配送异常也存在状态流转和数据记录缺口。",
          "个人职责": "独立完成 30+ 张订单管理原型并同步输出流程说明。协助梳理订单业务和报价规则，负责发货后逆向流程梳理及核心场景测试。",
          "做法": "设计可溯源的原单覆盖机制，改单时沿用原订单。梳理客户档案、合约、价格及促销方案的字段映射，协助建立「促销特价 > 一客一价 > 方案价 > 基础价」的优先级与自动取价逻辑。补齐缺货、配送差错及售后退货的状态流转与数据记录。",
          "成果": "协助团队精简 30% 的冗余功能，高频改单从 5 步缩短为 2 步。完成 200+ 次前端交互与核心业务场景测试，记录并推动修复 100+ 处关键问题，支持销售与财务数据一致对账。"
        }
      },
      {
        id: "procurement-workflow",
        title: "采购供应链管理系统设计",
        type: "老相食 · B 端实习项目",
        date: "2025.10–2025.12",
        summary: "把请购、采购、验收和入库串成一条单据链，同时补齐异常退货和库存扣减流程。",
        facts: {
          "背景": "请购、采购、仓储涉及多个部门。旧系统在到货验收不通过时缺少清晰的退货与库存处理流程。",
          "个人职责": "深入业务部门与车间一线访谈，独立完成采购、仓库和单品成品管理等 30+ 张原型，负责跨模块单据流转及审核节点设计。",
          "做法": "请购单自动关联货品与供应商，拦截无档案物料和超范围请购。设计「请购单 → 采购订单 → 采购到货单 → 采购验收单」链路，验收合格后自动生成入库单。",
          "成果": "验收不通过时，经管理员审核可自动生成采购退货单和出库单。通过明确库存扣减时点及审核节点，解决了旧系统因退货导致库存账实不符的问题。"
        }
      },
      {
        id: "subiao-digital-archive",
        title: "苏裱档案资源利用数字化平台",
        type: "档案数字化 · 项目负责人",
        date: "2024.09–2025.01",
        summary: "主导从零搭建档案资源共享平台，覆盖资源管理、检索、展示与社区交流。",
        facts: {
          "背景": "传统静态档案库难以共享。项目在前期调研和可行性分析后，确定建设数字化档案资源共享平台。",
          "个人职责": "作为项目负责人，主导需求分析及平台功能设计，明确技术实现路径，协调组内分工、跟进核心功能开发，并整理需求与项目分析文档。",
          "做法": "用 Visio 和摹客绘制功能架构、流程和原型。设计包含 16 个基础实体表和 13 个关联表的关系型数据库。前端使用 HTML、CSS 和 JavaScript，后端使用 .NET Framework，数据库使用 SQL Server。",
          "成果": "平台支持用户、社区帖子和档案资源等 21 个核心业务模块与 11 个前台页面，覆盖档案标准化管理、智能检索及可视化展示。"
        }
      }
    ],
    photography: [
      {
        id: "blue-hour", title: "傍晚六点十分", type: "雨后街景 · 示例组照",
        summary: "路灯刚亮，街道还留着一整片蓝色。",
        cover: "assets/station.jpg", alt: "蓝调时刻的雨后街道，老车站的方窗发出暖光",
        related: ["painting/window-in-blue", "writing/after-the-rain"],
        photos: [
          ["assets/station.jpg", "守着那扇亮窗"],
          ["assets/tracks.jpg", "雨水沿着轨道往远处走"],
          ["assets/glass.jpg", "隔着玻璃的灯光"]
        ]
      }
    ],
    painting: [
      {
        id: "window-in-blue", title: "蓝色里的窗", type: "彩铅与粉彩风格 · 示例",
        summary: "用一小块暖黄，把刚刚暗下来的街角留在纸上。",
        cover: "assets/window.jpg", alt: "用蓝紫和暖黄表现雨后小站方窗的插画",
        medium: "彩铅与粉彩风格", year: "示例作品",
        note: "保留摄影里的窗框和街面反光，把光线简化成几块柔软的色面。",
        draft: "assets/draft.jpg",
        related: ["photography/blue-hour", "writing/after-the-rain"]
      },
      {
        id: "oranges", title: "桌上的橘子", type: "静物绘画 · 示例",
        summary: "橘子的颜色让一张普通的桌面有了下午的温度。",
        cover: "assets/oranges.jpg", alt: "暖色调静物插画，陶碗与几只橘子",
        medium: "粉彩风格", year: "示例作品",
        note: "用陶碗的冷灰衬出橘子的颜色，把影子画得比轮廓更松一些。"
      }
    ],
    writing: [
      {
        id: "after-the-rain", title: "雨停以后", type: "随笔 · 示例", date: "2025-06-10",
        summary: "雨停得比想象中轻。走到车站那扇亮窗前，我才发现伞已经很久没声音了。",
        related: ["photography/blue-hour", "painting/window-in-blue"],
        paragraphs: [
          "雨停得比想象中轻。我把伞举了一路，走到车站那扇亮窗前，才发现伞已经很久没声音了。",
          "那扇窗把街道分成两半。里面的灯是黄的，外面的水是蓝的。有人低头看表，有人用鞋尖拨开一片叶子。上一班车刚过去，没有谁显得太着急。",
          "后来我总记得这个傍晚，大概是因为那几分钟里，什么事都没有发生，时间却让人看得很清楚。"
        ],
        anchor: 1
      },
      {
        id: "small-things", title: "把小事写下来", type: "随笔 · 示例", date: "2025-06-14",
        summary: "有些事太小了，不写下来，好像从来没有发生过。",
        paragraphs: [
          "下楼的时候听见邻居在煮饭。楼道是暗的，锅铲碰到边缘，发出脆脆的一声。",
          "后来我终于想明白，记下小事是一种慢下来看的办法。它让我能在很多天以后，重新走过一小段楼梯。"
        ]
      }
    ]
  },
  comparisons: [
    {
      title: "同一扇窗，从镜头到纸面",
      description: "拖动分界线，看雨后的车站如何从摄影走进彩铅。",
      photo: "blue-hour",
      painting: "window-in-blue"
    }
  ],
  experience: {
    internship: [
      {
        title: "苏州金记食品有限公司（老相食）",
        role: "流程信息中心 · B 端产品经理实习（业务系统）",
        date: "2025.10–2025.12",
        summary: "负责订单与采购业务的需求梳理、流程设计、原型及测试。将高频改单从 5 步缩短为 2 步，并设计采购到入库的单据链。",
        projects: ["order-lifecycle", "procurement-workflow"]
      },
      {
        title: "国际档案理事会（ICA）",
        role: "中国宣传组实习生",
        date: "2024.09–2025.10",
        summary: "筛选和处理 1,000+ 份外文文献与行业报告，负责推文选题、撰写与视觉排版，参与产出的推文累计阅读 20,000+。独立编译的国际行业新闻刊登于《中国档案报》第 4347 期第三版。"
      }
    ],
    education: [
      { title: "华东师范大学", role: "图书情报 · 商业分析方向 · 硕士", date: "2026.09–2028.06" },
      {
        title: "苏州大学",
        role: "信息资源管理类 · 档案学 · 本科",
        date: "2022.09–2026.06",
        summary: "GPA 3.7/4.0，专业排名 3/32。"
      }
    ],
    honors: [
      { title: "苏州大学校级学习优秀一等奖、二等奖" }
    ],
    skills: [
      { label: "数据分析与可视化", tools: "FineBI、Tableau" },
      { label: "编程与开发", tools: "C、Python、SQL、JavaScript、.NET" },
      { label: "流程与原型设计", tools: "摹客、Visio、Xmind、Figma" },
      { label: "AI 与编程助手", tools: "ChatGPT、Codex、Claude Code" }
    ]
  }
};
