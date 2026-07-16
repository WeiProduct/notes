// ===== i18n =====
const I18N = {
  en: {
    skip: 'Skip to content',
    navHow: 'How it works', navTry: 'Try it', navFeatures: 'Features', navScreens: 'Preview', navFaq: 'FAQ', navGet: 'Get App',
    heroEyebrow: '✦ AI-assisted note taking',
    heroTitle: 'Capture ideas. Turn notes into structure.',
    heroSubtitle: 'AI Note is a focused iOS app for fast capture, clear organization, and AI writing support — so rough thoughts become useful drafts.',
    learnMore: 'See it in action', downloadAria: 'Download on the App Store',
    trust1: '✍️ Fast capture', trust2: '✦ AI writing help', trust3: '🌏 EN / 中文',
    deviceToday: 'Today', deviceNotes: 'Notes', deviceAi: 'AI ready', deviceSearch: 'Search ideas, meetings, drafts',
    deviceLabel1: 'Idea', deviceCardT1: 'Investor story outline', deviceCardP1: 'Clarify the wedge, the product surface, and the portfolio learning loop.',
    deviceAiTitle: 'AI structured your note',
    deviceOut1: 'Problem & wedge', deviceOut2: 'Current customer signal', deviceOut3: 'Next product experiment',
    chipA: '✦ AI summarized', chipB: '# Tagged · Product',
    proofRating: 'Productivity · Notes',
    stat1: 'On the App Store', stat2: 'Writing support', stat3: 'Bilingual UI', stat4: 'Ads · Trackers',
    howEyebrow: 'The flow',
    howTitle: 'From a stray thought to something useful', howSub: 'Three steps, low friction — capture fast, keep it organized, refine when it matters.',
    tryEyebrow: 'Playground',
    tryTitle: 'Feel the refine step',
    trySub: 'Pick a rough note, tap an AI action — this is the exact loop inside the app. Everything below runs right on this page.',
    tryTabMeeting: 'Meeting', tryTabReading: 'Reading', tryTabIdea: 'Idea',
    tryNoteLabel: 'Rough note',
    demoNoteMeeting: 'mtg w/ Lin 3pm — pricing?? launch slipping, Sam owns beta list, need follow-up email, decide free tier limits',
    demoNoteReading: 'article on habit loops — cue routine reward, environment design > willpower, apply to onboarding? ch3 examples good',
    demoNoteIdea: 'widget idea: capture from lock screen, voice too? auto tags?? maybe share sheet first, check what competitors miss',
    demoActSummary: 'Summarize', demoActOutline: 'Outline', demoActActions: 'Extract actions',
    demoHint: 'Tap an AI action on the left to see the result.',
    step1Title: 'Capture it fast', step1Desc: 'Open a clean writing space in a tap for thoughts, meeting points, reading notes, and product ideas.',
    step2Title: 'Keep it organized', step2Desc: 'Folders, tags, and lightweight context keep notes readable, so information can be found again.',
    step3Title: 'Refine with AI', step3Desc: 'Summarize, rewrite, tag, and extract actions to turn rough fragments into useful drafts.',
    featuresEyebrow: 'Capabilities',
    featuresTitle: 'Core capabilities', featuresSub: 'Every feature is framed around reducing friction — capture fast, organize clearly, and let AI help when a note becomes more than a note.',
    feature1Title: 'Fast capture', feature1Desc: 'A clean writing space opens quickly for thoughts, meeting points, reading notes, and product ideas.',
    feature2Title: 'Structured organization', feature2Desc: 'Folders, tags, and lightweight context keep notes readable so information can be found again.',
    feature3Title: 'AI writing support', feature3Desc: 'Summarize, rewrite, clarify, and turn rough fragments into useful drafts — right beside the text.',
    feature4Title: 'Searchable knowledge', feature4Desc: 'Notes become a reusable knowledge layer, not a pile of isolated documents you never reopen.',
    feature5Title: 'Bilingual interface', feature5Desc: 'Full support for English and Simplified Chinese, so you can work in whichever language fits.',
    feature6Title: 'Your notes stay yours', feature6Desc: 'No account needed to browse. Your notes are your information, with clear controls over AI features.',
    personasEyebrow: 'Made for real workflows',
    personasTitle: 'Whose notes become knowledge?',
    personasSub: 'Four everyday workflows AI Note is shaped around — find yours.',
    persona1Name: 'Product builder', persona1Desc: 'Turns scattered signals into a roadmap draft.', persona1Chip: '✦ Outline',
    persona2Name: 'Meeting-heavy operator', persona2Desc: 'Leaves every meeting with decisions and follow-ups.', persona2Chip: '✦ Extract actions',
    persona3Name: 'Reader & researcher', persona3Desc: 'Compresses long reads into reusable summaries.', persona3Chip: '✦ Summarize',
    persona4Name: 'Bilingual writer', persona4Desc: 'Drafts in 中文, refines in English — or the reverse.',
    screensEyebrow: 'Preview',
    screensTitle: 'See it in action', screensSub: 'Swipe through the interface — tap any screen to zoom in.',
    screensNote: 'Interface previews are rendered in code to stay reliable while App Store media is finalized.',
    s1Head: 'Idea inbox', s1L1: 'Product', s1T1: 'Portfolio review points', s1P1: 'What to keep, cut, and double down on this quarter.',
    s1L2: 'Market', s1T2: 'Market observations', s1P2: 'Signals worth turning into experiments.',
    s1L3: 'Design', s1T3: 'Design direction notes', s1P3: 'Calm, clean, reduce friction everywhere.',
    s1cap: 'Capture inbox — a clean home for raw thoughts',
    s2Sub: 'Draft', s2Head: 'Customer signal', s2L: 'Meeting', s2Tool1: 'Summarize', s2Tool2: '✦ Refine with AI',
    s2cap: 'Focused editor — minimal chrome, AI within reach',
    s3Sub: 'AI result', s3Head: 'Suggested outline', s3O1: 'Problem', s3O2: 'Current signal', s3O3: 'Next action',
    s3C1: 'Summary', s3C2: 'Rewrite', s3C3: 'Actions', s3cap: 'AI structure — outlines, summaries, next steps',
    s4Head: 'Search', s4Query: 'roadmap', s4L1: 'Product', s4T1: 'Q3 roadmap draft', s4P1: '3 notes · updated 2d ago',
    s4L2: 'Notes', s4T2: 'Roadmap review comments', s4P2: 'Grouped by tag automatically.',
    s4cap: 'Searchable knowledge — find any note again',
    s5Sub: 'Library', s5Head: 'Folders', s5F1: 'Product', s5F2: 'Meetings', s5F3: 'Reading',
    s5C1: '# idea', s5C2: '# signal', s5C3: '# action', s5cap: 'Folders & tags — a knowledge system that lasts',
    loopEyebrow: 'The method',
    loopTitle: 'Not a pile of notes — a loop',
    loopSub: 'Most notes die right after capture. AI Note keeps them moving through a loop, so old writing keeps paying off.',
    loopN1: 'Capture', loopC1: 'Get the thought down before it fades.',
    loopN2: 'Organize', loopC2: 'Folders and tags keep it findable.',
    loopN3: 'Refine', loopC3: 'AI turns fragments into structure.',
    loopN4: 'Retrieve', loopC4: 'Old notes resurface exactly when a new idea needs them.',
    loopBack: '…and back to capture',
    privacyEyebrow: 'Privacy',
    privacyTitle: 'Your notes are your own', privacyDesc: 'No account is needed to browse this site. Your notes are user-owned information, and AI or sync features are presented in the app with clear controls and platform permissions.',
    pp1: 'Notes belong to you', pp2: 'Clear AI controls', pp3: 'No ads, no trackers', pp4: 'No account to browse',
    cmpEyebrow: 'The difference',
    cmpTitle: 'Why not just keep doing it the old way?',
    cmpSub: 'No hype — just where notes usually break down, and what AI Note does differently.',
    cmpCol0: 'Where notes break down', cmpCol1: 'Scattered apps & chats', cmpCol2: 'Plain notes app',
    cmpR1: 'Capture friction', cmpR1a: 'Ideas get lost in threads', cmpR1b: 'Open, then find the right place', cmpR1c: 'One tap to a clean page',
    cmpR2: 'Finding notes later', cmpR2a: 'Scroll back and hope', cmpR2b: 'Search, if it was named well', cmpR2c: 'Search plus folders and tags',
    cmpR3: 'Turning notes into drafts', cmpR3a: 'Manual copy-paste rewrite', cmpR3b: 'Still all on you', cmpR3c: 'AI outlines, summaries, actions',
    cmpR4: 'Bilingual writing', cmpR4a: 'Mixed-language mess', cmpR4b: 'One interface language', cmpR4c: 'Full EN / 中文 support',
    cmpR5: 'Ads & trackers', cmpR5a: 'Feeds compete for attention', cmpR5b: 'Varies app to app', cmpR5c: 'Zero ads, zero trackers',
    faqEyebrow: 'FAQ',
    faqTitle: 'Frequently asked questions',
    q1: 'What can AI Note do?', a1: 'Capture ideas quickly, organize them with folders and tags, and use AI to summarize, rewrite, classify, and extract actions — turning rough notes into useful structure.',
    q2: 'Do I need an account to use AI Note?', a2: 'The website needs no account. Your notes are your own information, and AI or sync features are presented in the app with clear user controls and platform permissions.',
    q3: 'Is AI Note bilingual?', a3: 'Yes. AI Note supports both English and Simplified Chinese interfaces, so you can work in whichever language fits your notes.',
    q4: 'How does the AI writing support work?', a4: 'AI actions live close to the writing surface. You can summarize long notes, rewrite for tone and clarity, suggest tags and folders, and extract decisions and follow-up tasks.',
    q5: 'How much does AI Note cost?', a5: 'AI Note is free to download on the App Store. It is one of several focused AI utilities in the WeiProduct portfolio.',
    downloadTitle: 'Start turning notes into knowledge', downloadSubtitle: 'AI Note is available now on the App Store — part of the WeiProduct portfolio of focused AI utilities.',
    downloadCompany: 'Visit WeiProduct', downloadNote: 'Free on the App Store · iOS',
    footerTag: 'Note capture and organization for ideas that need to become useful.',
    footerProduct: 'Product', footerCompany: 'Company', footerContact: 'Contact', footerPrivacy: 'Privacy', footerTerms: 'Terms',
    footerRights: 'All rights reserved.',
    backTop: '↑ Back to top',
    stickySub: 'Capture & refine · Free', stickyGet: 'Get'
  },
  'zh-CN': {
    skip: '跳到主要内容',
    navHow: '使用流程', navTry: '试一试', navFeatures: '功能特点', navScreens: '界面预览', navFaq: '常见问题', navGet: '获取 App',
    heroEyebrow: '✦ AI 辅助的笔记工具',
    heroTitle: '随手记录想法，让笔记变成结构',
    heroSubtitle: 'AI Note 是一款专注的 iOS 笔记应用——快速记录、清晰整理、AI 写作辅助，让零散的想法变成可用的初稿。',
    learnMore: '看看效果', downloadAria: '在 App Store 下载',
    trust1: '✍️ 快速记录', trust2: '✦ AI 写作辅助', trust3: '🌏 中英双语',
    deviceToday: '今天', deviceNotes: '笔记', deviceAi: 'AI 就绪', deviceSearch: '搜索想法、会议、草稿',
    deviceLabel1: '想法', deviceCardT1: '投资故事大纲', deviceCardP1: '理清切入点、产品形态，以及组合式学习循环。',
    deviceAiTitle: 'AI 已梳理你的笔记',
    deviceOut1: '问题与切入点', deviceOut2: '当前客户信号', deviceOut3: '下一步产品实验',
    chipA: '✦ AI 已摘要', chipB: '# 已打标签 · 产品',
    proofRating: '效率工具 · 笔记',
    stat1: 'App Store 上架', stat2: '写作辅助', stat3: '双语界面', stat4: '广告 · 追踪',
    howEyebrow: '使用流程',
    howTitle: '把一个闪念，变成真正有用的东西', howSub: '三步、低摩擦——快速记录、保持有序、需要时再精修。',
    tryEyebrow: '互动演示',
    tryTitle: '亲手试试“精修”这一步',
    trySub: '选一条粗糙笔记，点一个 AI 操作——这正是 App 内的核心循环。以下演示全部在本页面运行。',
    tryTabMeeting: '会议', tryTabReading: '阅读', tryTabIdea: '想法',
    tryNoteLabel: '粗糙笔记',
    demoNoteMeeting: '3点和林开会——定价??发布要延期，beta 名单 Sam 负责，要发跟进邮件，免费档限制待定',
    demoNoteReading: '读习惯循环的文章——提示 行为 奖励，环境设计>意志力，能用在引导流程上？第三章例子不错',
    demoNoteIdea: '小组件想法：锁屏快速记录，语音也要？自动打标签??也许先做分享扩展，看看竞品漏了什么',
    demoActSummary: '摘要', demoActOutline: '大纲', demoActActions: '提取行动项',
    demoHint: '点左侧任意一个 AI 操作，看看结果。',
    step1Title: '快速记录', step1Desc: '一键打开干净的书写空间，随手记下想法、会议要点、阅读笔记与产品创意。',
    step2Title: '保持有序', step2Desc: '文件夹、标签和轻量的上下文，让笔记清晰易读，日后也能轻松找回。',
    step3Title: '用 AI 精修', step3Desc: '摘要、改写、打标签、提取行动项，把零散片段变成可用的初稿。',
    featuresEyebrow: '功能全景',
    featuresTitle: '核心能力', featuresSub: '每一项功能都围绕降低摩擦——快速记录、清晰整理，并在笔记不止是笔记时，让 AI 帮上忙。',
    feature1Title: '快速记录', feature1Desc: '干净的书写空间随点随开，记下想法、会议要点、阅读笔记与产品创意。',
    feature2Title: '结构化整理', feature2Desc: '文件夹、标签与轻量上下文让笔记保持可读，信息日后也能被找回。',
    feature3Title: 'AI 写作辅助', feature3Desc: '摘要、改写、澄清，把零散片段变成可用初稿——就在文字旁边。',
    feature4Title: '可检索的知识', feature4Desc: '让笔记成为可复用的知识层，而不是一堆再也不会打开的孤立文档。',
    feature5Title: '双语界面', feature5Desc: '完整支持中文与英文，你可以在最顺手的语言里工作。',
    feature6Title: '笔记归你所有', feature6Desc: '浏览无需账号。你的笔记属于你，AI 功能有清晰的控制权。',
    personasEyebrow: '为真实的工作流而生',
    personasTitle: '谁的笔记会沉淀成知识？',
    personasSub: 'AI Note 围绕四种日常工作流打磨——找到属于你的那一种。',
    persona1Name: '产品创造者', persona1Desc: '把零散的信号变成路线图草稿。', persona1Chip: '✦ 大纲',
    persona2Name: '会议缠身的执行者', persona2Desc: '每场会议结束，都带走决策与待办。', persona2Chip: '✦ 提取行动项',
    persona3Name: '阅读与研究者', persona3Desc: '把长文压缩成可复用的摘要。', persona3Chip: '✦ 摘要',
    persona4Name: '双语写作者', persona4Desc: '用中文起草、用 English 打磨——或者反过来。',
    screensEyebrow: '界面预览',
    screensTitle: '看看实际效果', screensSub: '左右滑动浏览界面——点击任意画面可放大查看。',
    screensNote: '界面预览由代码渲染，在 App Store 素材定稿前也能稳定呈现。',
    s1Head: '灵感收件箱', s1L1: '产品', s1T1: '组合复盘要点', s1P1: '本季度要保留、砍掉、加码的分别是什么。',
    s1L2: '市场', s1T2: '市场观察', s1P2: '值得变成实验的信号。',
    s1L3: '设计', s1T3: '设计方向笔记', s1P3: '沉静、干净，处处降低摩擦。',
    s1cap: '收件箱——安放原始想法的干净入口',
    s2Sub: '草稿', s2Head: '客户信号', s2L: '会议', s2Tool1: '摘要', s2Tool2: '✦ 用 AI 精修',
    s2cap: '专注编辑器——界面极简，AI 触手可及',
    s3Sub: 'AI 结果', s3Head: '建议的大纲', s3O1: '问题', s3O2: '当前信号', s3O3: '下一步',
    s3C1: '摘要', s3C2: '改写', s3C3: '行动项', s3cap: 'AI 结构——大纲、摘要与下一步',
    s4Head: '搜索', s4Query: '路线图', s4L1: '产品', s4T1: 'Q3 路线图草稿', s4P1: '3 条笔记 · 2 天前更新',
    s4L2: '笔记', s4T2: '路线图评审意见', s4P2: '按标签自动归类。',
    s4cap: '可检索的知识——任何笔记都能找回',
    s5Sub: '资料库', s5Head: '文件夹', s5F1: '产品', s5F2: '会议', s5F3: '阅读',
    s5C1: '# 想法', s5C2: '# 信号', s5C3: '# 行动', s5cap: '文件夹与标签——可长期维护的知识系统',
    loopEyebrow: '方法论',
    loopTitle: '不是一堆笔记，而是一个循环',
    loopSub: '大多数笔记在记下之后就沉睡了。AI Note 让它们在循环中流动，旧笔记也能持续产生价值。',
    loopN1: '记录', loopC1: '想法消散之前，先记下来。',
    loopN2: '整理', loopC2: '文件夹与标签，让它随时可寻。',
    loopN3: '精修', loopC3: 'AI 把碎片变成结构。',
    loopN4: '检索', loopC4: '当新想法需要时，旧笔记会准时浮现。',
    loopBack: '……然后回到记录',
    privacyEyebrow: '隐私',
    privacyTitle: '你的笔记，只属于你', privacyDesc: '浏览本站无需账号。你的笔记是用户自有的信息，AI 与同步功能在 App 中都提供清晰的控制项与系统权限。',
    pp1: '笔记归你所有', pp2: '清晰的 AI 控制', pp3: '无广告无追踪', pp4: '浏览无需账号',
    cmpEyebrow: '有何不同',
    cmpTitle: '为什么不继续用老办法？',
    cmpSub: '不夸张不贬低——只看笔记通常卡在哪里，以及 AI Note 的不同做法。',
    cmpCol0: '笔记卡在哪', cmpCol1: '散落在聊天和备忘里', cmpCol2: '普通笔记 App',
    cmpR1: '记录的摩擦', cmpR1a: '想法淹没在聊天串里', cmpR1b: '打开后还要找对位置', cmpR1c: '一步进入干净页面',
    cmpR2: '日后找回笔记', cmpR2a: '全靠往回翻', cmpR2b: '能搜到，前提是起对了名', cmpR2c: '搜索 + 文件夹 + 标签',
    cmpR3: '笔记变成初稿', cmpR3a: '手动复制粘贴重写', cmpR3b: '还是全靠自己', cmpR3c: 'AI 大纲、摘要、行动项',
    cmpR4: '双语写作', cmpR4a: '中英混杂难整理', cmpR4b: '界面只有一种语言', cmpR4c: '完整中英双语支持',
    cmpR5: '广告与追踪', cmpR5a: '信息流争夺注意力', cmpR5b: '因 App 而异', cmpR5c: '零广告、零追踪',
    faqEyebrow: '答疑',
    faqTitle: '常见问题',
    q1: 'AI Note 能做什么？', a1: '快速记录想法，用文件夹和标签整理，并用 AI 摘要、改写、分类、提取行动项——把零散笔记变成可用结构。',
    q2: '使用 AI Note 需要账号吗？', a2: '网站无需账号。你的笔记是你自己的信息，AI 与同步功能在 App 中都提供清晰的用户控制项与系统权限。',
    q3: 'AI Note 支持双语吗？', a3: '支持。AI Note 同时提供英文与简体中文界面，你可以在最适合的语言里记录。',
    q4: 'AI 写作辅助怎么用？', a4: 'AI 操作就在书写界面旁边。你可以摘要长笔记、改写语气与清晰度、建议标签与文件夹，并提取决策与后续任务。',
    q5: 'AI Note 收费吗？', a5: 'AI Note 在 App Store 免费下载，是 WeiProduct 一系列专注 AI 小工具中的一员。',
    downloadTitle: '让笔记开始沉淀成知识', downloadSubtitle: 'AI Note 现已在 App Store 上架——WeiProduct 专注 AI 工具组合中的一员。',
    downloadCompany: '访问 WeiProduct', downloadNote: 'App Store 免费下载 · iOS',
    footerTag: '为需要变得有用的想法而生的笔记记录与整理工具。',
    footerProduct: '产品', footerCompany: '公司', footerContact: '联系', footerPrivacy: '隐私政策', footerTerms: '使用条款',
    footerRights: '保留所有权利。',
    backTop: '↑ 回到顶部',
    stickySub: '记录与精修 · 免费', stickyGet: '获取'
  }
};

// Canned results for the "Try the AI" demo (scripted — no network)
const DEMO_RESULTS = {
  en: {
    meeting: {
      summary: ['Pricing and launch timing are the open risks.', 'Sam owns the beta list going forward.', 'A follow-up email and free-tier limits need decisions.'],
      outline: ['1. Pricing — open question', '2. Launch — timeline slipping', '3. Beta — Sam owns the list', '4. Next — follow-up email'],
      actions: ['☐ Send follow-up email after the 3pm meeting', '☐ Decide free tier limits', '☐ Confirm beta list with Sam']
    },
    reading: {
      summary: ['Habits run on a cue → routine → reward loop.', 'Environment design beats willpower.', 'The loop could shape our onboarding.'],
      outline: ['1. The habit loop model', '2. Environment over willpower', '3. Application: onboarding', '4. Revisit: chapter 3 examples'],
      actions: ['☐ Sketch onboarding as a habit loop', '☐ Re-read chapter 3 examples', '☐ Note one environment change to try']
    },
    idea: {
      summary: ['A lock-screen capture widget, possibly with voice.', 'Auto-tagging is worth exploring.', 'Share sheet may be the faster first step.'],
      outline: ['1. Core: lock-screen capture', '2. Maybe: voice input, auto tags', '3. First step: share sheet', '4. Research: competitor gaps'],
      actions: ['☐ Prototype the share sheet flow', '☐ List competitor capture gaps', '☐ Scope voice input separately']
    }
  },
  'zh-CN': {
    meeting: {
      summary: ['定价与发布时间是当前悬而未决的风险。', 'beta 名单今后由 Sam 负责。', '跟进邮件与免费档限制需要尽快决定。'],
      outline: ['1. 定价——待定问题', '2. 发布——时间在延期', '3. Beta——名单归 Sam', '4. 下一步——跟进邮件'],
      actions: ['☐ 会后发送跟进邮件', '☐ 确定免费档限制', '☐ 与 Sam 确认 beta 名单']
    },
    reading: {
      summary: ['习惯依赖“提示 → 行为 → 奖励”的循环运转。', '环境设计胜过意志力。', '这个循环可以用来设计引导流程。'],
      outline: ['1. 习惯循环模型', '2. 环境重于意志力', '3. 应用：引导流程', '4. 回看：第三章案例'],
      actions: ['☐ 把引导流程画成习惯循环', '☐ 重读第三章案例', '☐ 记一个可尝试的环境改动']
    },
    idea: {
      summary: ['一个锁屏快速记录的小组件，可能支持语音。', '自动打标签值得探索。', '分享扩展也许是更快的第一步。'],
      outline: ['1. 核心：锁屏记录', '2. 备选：语音输入、自动标签', '3. 第一步：分享扩展', '4. 调研：竞品缺口'],
      actions: ['☐ 原型验证分享扩展流程', '☐ 列出竞品的记录缺口', '☐ 单独评估语音输入']
    }
  }
};

let currentLang = 'en';
let demoRefresh = null;

function applyLang(lang) {
  currentLang = I18N[lang] ? lang : 'en';
  const t = I18N[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (t[k] !== undefined) el.textContent = t[k];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const k = el.getAttribute('data-i18n-aria');
    if (t[k] !== undefined) el.setAttribute('aria-label', t[k]);
  });
  document.documentElement.lang = currentLang;
  const label = currentLang === 'zh-CN' ? 'EN' : '中文';
  ['langSwitch', 'footLangSwitch'].forEach(id => {
    const b = document.getElementById(id);
    if (b) b.textContent = label;
  });
  if (typeof demoRefresh === 'function') demoRefresh();
  try { localStorage.setItem('lang', currentLang); } catch (e) {}
}

function initLang() {
  let saved;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  if (!saved) saved = (navigator.language || '').toLowerCase().startsWith('zh') ? 'zh-CN' : 'en';
  applyLang(saved);
}

// ===== Theme =====
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const meta = document.getElementById('themeColorMeta');
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#0c111c' : '#2563eb');
  try { localStorage.setItem('theme', theme); } catch (e) {}
}
function initTheme() {
  let saved;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  if (!saved) saved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  setTheme(saved);
}

// ===== Try the AI demo =====
function initDemo() {
  const root = document.querySelector('.demo');
  if (!root) return;
  const tabs = Array.from(root.querySelectorAll('.demo-tab'));
  const notes = Array.from(root.querySelectorAll('.demo-note-body'));
  const chips = Array.from(root.querySelectorAll('.demo-chip'));
  const out = document.getElementById('demoOut');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  let tab = 'meeting', act = null, timers = [];

  const clearTimers = () => { timers.forEach(clearTimeout); timers = []; };

  function render(animate) {
    clearTimers();
    if (!act || !out) return;
    const dict = DEMO_RESULTS[currentLang] || DEMO_RESULTS.en;
    const lines = (dict[tab] || {})[act] || [];
    out.innerHTML = '';
    lines.forEach((txt, i) => {
      const li = document.createElement('li');
      li.textContent = txt;
      if (animate && !reduce.matches) {
        li.classList.add('demo-line');
        timers.push(setTimeout(() => li.classList.add('in'), 120 + i * 260));
      }
      out.appendChild(li);
    });
  }

  tabs.forEach(b => b.addEventListener('click', () => {
    tab = b.dataset.demo;
    tabs.forEach(x => {
      x.classList.toggle('active', x === b);
      x.setAttribute('aria-pressed', x === b ? 'true' : 'false');
    });
    notes.forEach(n => { n.hidden = n.dataset.demoNote !== tab; });
    if (act) render(true);
  }));
  chips.forEach(b => b.addEventListener('click', () => {
    act = b.dataset.act;
    chips.forEach(x => {
      x.classList.toggle('active', x === b);
      x.setAttribute('aria-pressed', x === b ? 'true' : 'false');
    });
    render(true);
  }));
  demoRefresh = () => render(false);
}

// ===== Gallery =====
function initGallery() {
  const track = document.getElementById('galTrack');
  if (!track) return;
  const shots = Array.from(track.children);
  const dotsWrap = document.getElementById('galDots');
  const prev = document.getElementById('galPrev');
  const next = document.getElementById('galNext');

  shots.forEach((_, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', 'Go to screen ' + (i + 1));
    if (i === 0) b.classList.add('active');
    b.addEventListener('click', () => shots[i].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' }));
    dotsWrap.appendChild(b);
  });
  const dots = Array.from(dotsWrap.children);

  function activeIndex() {
    const c = track.scrollLeft + track.clientWidth / 2;
    let best = 0, bd = Infinity;
    shots.forEach((s, i) => {
      const center = s.offsetLeft + s.offsetWidth / 2;
      const d = Math.abs(center - c);
      if (d < bd) { bd = d; best = i; }
    });
    return best;
  }
  track.addEventListener('scroll', () => {
    const i = activeIndex();
    dots.forEach((d, j) => d.classList.toggle('active', j === i));
  }, { passive: true });

  const step = () => (shots[1] ? shots[1].offsetLeft - shots[0].offsetLeft : 300);
  if (prev) prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
  if (next) next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));

  // Lightbox — clones the code-rendered device screen into an enlarged view
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = '<button class="lightbox-close" aria-label="Close">&times;</button>';
  document.body.appendChild(lb);
  const close = () => { lb.classList.remove('open'); const d = lb.querySelector('.device'); if (d) d.remove(); };
  lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('lightbox-close')) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

  track.querySelectorAll('.device.zoomable').forEach(dev => {
    const openZoom = () => {
      const old = lb.querySelector('.device'); if (old) old.remove();
      const clone = dev.cloneNode(true);
      clone.classList.remove('zoomable');
      clone.removeAttribute('tabindex');
      clone.removeAttribute('role');
      lb.appendChild(clone);
      lb.classList.add('open');
    };
    dev.addEventListener('click', openZoom);
    dev.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openZoom(); } });
  });
}

// ===== Scroll reveal =====
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach((el, i) => { el.style.transitionDelay = (Math.min(i, 6) * 0.05) + 's'; io.observe(el); });
}

// ===== Nav + sticky =====
function initScroll() {
  const nav = document.getElementById('navbar');
  const sticky = document.getElementById('stickyCta');
  const bar = document.getElementById('progressBar');
  const onScroll = () => {
    const y = window.scrollY;
    if (nav) nav.classList.toggle('scrolled', y > 20);
    if (sticky) sticky.classList.toggle('show', y > 620);
    if (bar) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(y / max, 1) : 0) + ')';
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLang();
  initDemo();
  initGallery();
  initReveal();
  initScroll();

  const yr = document.getElementById('currentYear');
  if (yr) yr.textContent = new Date().getFullYear();

  document.querySelectorAll('#langSwitch, #footLangSwitch').forEach(b =>
    b.addEventListener('click', () => applyLang(currentLang === 'zh-CN' ? 'en' : 'zh-CN')));
  document.querySelectorAll('#themeToggle, #footThemeToggle').forEach(b =>
    b.addEventListener('click', () => setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark')));

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      }
    });
  });
});
