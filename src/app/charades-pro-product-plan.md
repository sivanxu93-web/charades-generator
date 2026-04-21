# Charades Generator Pro — 可落地产品方案

> 文档版本：v1.0 | 日期：2026-04-13  
> 网站：charades-generator.com | 技术栈：Next.js | 支付：Creem

---

## 目录

1. [现状总结](#一现状总结)
2. [产品目标](#二产品目标)
3. [免费 / 付费功能边界](#三免费--付费功能边界)
4. [付费功能详细设计](#四付费功能详细设计)
5. [定价方案](#五定价方案)
6. [付费引导设计](#六付费引导设计)
7. [技术实现方案](#七技术实现方案)
8. [开发优先级与排期](#八开发优先级与排期)
9. [收入预期](#九收入预期)
10. [上线 Checklist](#十上线-checklist)

---

## 一、现状总结

### 流量数据（2026年3月）

| 指标 | 数值 |
|------|------|
| 月活用户 | 3,160 |
| 月页面浏览 | 10,640 |
| 流量来源 | 78% Google 自然搜索 |
| 主要市场 | 美国 44%、英国 10%、加拿大 8%、澳大利亚 5% |
| 平均停留时长 | 2 分 46 秒 |
| 回访用户 | 672（占总活跃 21%） |
| 广告月收入 | ~$15（Page RPM $3.01） |

### 现有页面与功能

**核心工具**
- 随机词生成，支持 1 / 3 / 5 / 10 / 自定义数量
- 9 个分类：Animals、Movies、Disney、Actions、Emotions、Objects、Professions、Funny、Seasonal
- 难度筛选：Easy / Medium / Hard
- 年龄筛选：All Ages / Kids Friendly / Adults Only
- 一键复制词单
- Quick Presets（Family Night / Classroom / Team 等）

**独立分类页面**
- Movie Charades Generator（月流量最大，842 次点击）
- Kids Charades Generator（1,265 次曝光，严重浪费）
- Disney Charades Generator
- Animal Charades Game
- Funny Charades for Adults
- Christmas Charades Generator
- Reverse Charades Game
- Imposter Game（含独立 play 页面）
- Random Charades Generator
- Pictionary Word Generator

**SEO 核心数据**
- 核心词 `charades generator`：月曝光 5,254，排名 8.6，点击率仅 2.06%
- Movie 分类词：排名 2-3，点击率 30%+
- `childrens charades generator`：月搜索 1,300，排名 16，严重浪费

---

## 二、产品目标

### 核心原则

> **现有免费功能 100% 保留，付费只加新东西。**
> 
> 不让老用户感到任何东西被拿走，付费用户获得的是全新体验增量。

### 目标

- 短期（3 个月）：月付费收入超过广告收入，总月收入达到 $60+
- 中期（6 个月）：付费用户累计 100+，月收入 $150+
- 长期：随流量增长，付费收入成为主要收入来源

---

## 三、免费 / 付费功能边界

### 免费版（完全不变）

| 功能 | 状态 |
|------|------|
| 全部现有 9 个词库分类 | ✅ 完全免费 |
| Easy / Medium / Hard 难度 | ✅ 完全免费 |
| All Ages / Kids / Adults Only 筛选 | ✅ 完全免费 |
| 生成数量 1–10 个 | ✅ 完全免费 |
| 一键复制词单 | ✅ 完全免费 |
| Quick Presets | ✅ 完全免费 |
| 所有现有分类页面 | ✅ 完全免费 |
| 所有内容页面（How to Use / FAQ 等） | ✅ 完全免费 |
| 广告展示 | 正常显示 |

### Pro 版（全部是新增）

| 功能类型 | 具体内容 |
|---------|---------|
| 🔞 专属词库 | Adults-Only 成人词库（脏话笑话风格，非违规）|
| 🎉 场景词库 | Bachelorette Party / Baby Shower / Office Party |
| 🎃 季节词库 | Halloween / Thanksgiving / Valentine's Day |
| 📺 内容词库 | TV Shows / Sports / 90s Nostalgia / Bollywood |
| ⏱️ 计时器模式 | 内置全屏倒计时，60 / 90 / 120 秒可选 |
| 🃏 翻卡模式 | 手机横屏全屏展示，一人一次翻一张 |
| 📄 PDF 打印 | 一键生成可打印词卡 PDF |
| 🔢 生成数量扩展 | 上限从 10 提升至 50 个 |
| ❌ 去除全站广告 | Pro 用户完全无广告 |

---

## 四、付费功能详细设计

### 4.1 专属词库规划

| 词库名称 | 标签 | 词量目标 | 上线时间 |
|---------|------|---------|---------|
| Adults Only 🔞 | `adults-only` | 200+ | **MVP 阶段** |
| Bachelorette Party 💍 | `bachelorette` | 100+ | **MVP 阶段** |
| Halloween 🎃 | `halloween` | 80+ | 第二阶段 |
| TV Shows 📺 | `tvshows` | 150+ | 第二阶段 |
| Sports ⚽ | `sports` | 100+ | 第二阶段 |
| Baby Shower 👶 | `babyshower` | 80+ | 第三阶段 |
| Thanksgiving 🦃 | `thanksgiving` | 60+ | 第三阶段（提前 6 周上线） |
| 90s Nostalgia 📼 | `90snostalgia` | 100+ | 第三阶段 |
| Bollywood 🎬 | `bollywood` | 80+ | 第三阶段 |

**季节性词库展示策略**：Halloween 在 9–10 月高亮，Christmas 在 11–12 月高亮，其余时间正常显示但不强调。

### 4.2 计时器模式

- 全屏展示，背景黑色，数字白色大字
- 倒计时完毕震动 + 音效提示
- 可在游戏过程中随时暂停 / 重置
- 与词卡联动：计时结束后自动显示下一个词

### 4.3 翻卡模式

- 手机横屏触发，一次只显示一个词
- 左滑 = 下一个词，右滑 = 跳过
- 大字体，极简界面，适合聚会现场传递手机使用
- 显示当前进度（第 3 / 10 个）

### 4.4 PDF 打印功能

- 每页 6 张词卡，带虚线裁切线
- 包含词语、难度标签、分类标签
- 文件名自动带上分类和日期（如 `movie-charades-20261013.pdf`）

---

## 五、定价方案

### 三档定价

| 档位 | 价格 | 有效期 | 核心卖点 | 目标用户 |
|------|------|--------|---------|---------|
| 🎉 **Party Pass** | **$0.99** | 24 小时 | 今晚聚会，当场解锁 | 临时用户，冲动购买 |
| ⭐ **Pro Forever** | **$2.99** | 永久 | 只比 Party Pass 贵 $2，永久拥有 | 高频用户，重视性价比 |
| 🏫 **Group License** | **$9.99 / 年** | 1 年，多设备 | 适合教室 / 团建，有预算 | 老师、HR、活动策划 |

> **定价心理逻辑**：
> - $0.99 低于心理门槛，聚会前 5 分钟看到广告会冲动购买
> - $2.99 锚定在"只贵 $2"，大多数人会选择永久版
> - $9.99/年 针对有预算的 B 端场景，MVP 阶段可暂缓上线

### MVP 阶段只上两档

Party Pass $0.99 + Pro Forever $2.99，Group License 等验证付费意愿后再加。

---

## 六、付费引导设计

### 6.1 触发场景与文案

| 触发场景 | 引导文案 | 弹窗标题 |
|---------|---------|---------|
| 广告旁边 | "Go ad-free for $0.99" | Remove Ads |
| 点击 Adults Only 词库 | "Unlock the naughty word pack 🔞" | Unlock Adults-Only |
| 生成数量超过 10 | "Generate up to 50 words at once" | Unlock More Words |
| 点击计时器图标 | "Built-in game timer for smoother rounds ⏱️" | Unlock Timer |
| 生成词之后（主动推送） | "Want more fun tonight?" | Upgrade to Pro |

### 6.2 弹窗内容结构

```
标题（根据触发场景动态变化）

功能列表：
✅ Remove all ads
✅ Adults-Only & themed word packs
✅ Built-in countdown timer
✅ Generate up to 50 words
✅ Flip card game mode

[输入框：Your email（Pro Forever 用于找回 token，可选填）]

[  $0.99 Party Pass  ]  [  ⭐ $2.99 Pro Forever  ]
     24 hours                  Best value

[Maybe later]
```

### 6.3 广告位旁边的轻量引导

不用弹窗，直接在广告下方加一行：

```
✨ Remove all ads — Party Pass $0.99 · Pro Forever $2.99
```

这是转化率最高的位置，因为用户正在被广告打扰。

### 6.4 引导原则

- **不阻断免费使用**：弹窗可以关掉，免费功能正常使用
- **语气是"获得新东西"**，不是"功能被锁了"
- **每次会话最多弹一次**，避免骚扰

---

## 七、技术实现方案

### 7.1 整体架构

```
前端（Next.js App Router）
├── usePro() Hook        — 读取 localStorage token，判断权限
├── UpgradeModal         — 付费引导弹窗
├── CreemCheckout 组件   — 触发支付跳转
└── 功能组件             — 根据 isPro 决定是否渲染

后端（Next.js API Routes）
├── GET  /checkout       — 创建 Creem checkout session
├── POST /api/webhook/creem — 支付成功回调，生成 token
├── GET  /api/activate   — success 页面激活 token
└── GET  /api/verify-token — token 有效性验证

外部服务
├── Creem               — 支付处理（自动处理税务）
├── Vercel KV           — 存储 token（免费 tier 够用）
└── Resend              — 发送 Pro Forever 激活邮件

数据结构（KV）
├── token:{tokenId}     → { id, plan, createdAt, expiresAt, email }
└── checkout:{customerId} → tokenId（5 分钟临时映射）
```

### 7.2 环境变量

```env
CREEM_API_KEY=creem_live_xxx
CREEM_WEBHOOK_SECRET=whsec_xxx
RESEND_API_KEY=re_xxx
NEXT_PUBLIC_URL=https://charades-generator.com
KV_REST_API_URL=xxx
KV_REST_API_TOKEN=xxx
```

### 7.3 Creem Dashboard 配置

在 creem.io 后台预先创建两个产品：

| 产品名称 | 类型 | 价格 | 记录 product_id |
|---------|------|------|----------------|
| Charades Party Pass | 一次性付款 | $0.99 | `prod_party_xxx` |
| Charades Pro Forever | 一次性付款 | $2.99 | `prod_pro_xxx` |

Webhook URL 配置为：`https://charades-generator.com/api/webhook/creem`

### 7.4 核心代码结构

**安装依赖**

```bash
npm install @creem_io/nextjs @vercel/kv resend nanoid
```

**Checkout 路由**

```typescript
// app/checkout/route.ts
import { Checkout } from '@creem_io/nextjs'

export const GET = Checkout({
  apiKey: process.env.CREEM_API_KEY!,
  testMode: process.env.NODE_ENV !== 'production',
  defaultSuccessUrl: '/pro/success',
})
```

**Webhook 处理**

```typescript
// app/api/webhook/creem/route.ts
import { Webhook } from '@creem_io/nextjs'
import { kv } from '@vercel/kv'
import { nanoid } from 'nanoid'
import { sendTokenEmail } from '@/lib/email'

export const POST = Webhook({
  webhookSecret: process.env.CREEM_WEBHOOK_SECRET!,

  onCheckoutCompleted: async ({ customer, metadata }) => {
    const plan = metadata?.plan as string
    const email = metadata?.email as string || customer?.email

    const tokenId = nanoid(32)
    const tokenData = {
      id: tokenId,
      plan,
      createdAt: Date.now(),
      expiresAt: plan === 'party' ? Date.now() + 86400000 : null,
      email: email || null,
    }

    if (plan === 'party') {
      await kv.set(`token:${tokenId}`, JSON.stringify(tokenData), { ex: 86400 })
    } else {
      await kv.set(`token:${tokenId}`, JSON.stringify(tokenData))
    }

    // Pro Forever 发邮件
    if (plan === 'pro' && email) {
      await sendTokenEmail(email, tokenId)
    }

    // 临时映射，让 success 页面读取 token
    await kv.set(`checkout:${customer?.id}`, tokenId, { ex: 300 })
  },
})
```

**前端权限 Hook**

```typescript
// hooks/usePro.ts
'use client'
import { useState, useEffect } from 'react'

export function usePro() {
  const [isPro, setIsPro] = useState(false)
  const [plan, setPlan] = useState<'party' | 'pro' | null>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const tokenId = localStorage.getItem('cg_token')
    const expires = localStorage.getItem('cg_token_expires')

    if (!tokenId) { setLoaded(true); return }

    if (expires && Date.now() > parseInt(expires)) {
      localStorage.removeItem('cg_token')
      localStorage.removeItem('cg_token_expires')
      setLoaded(true)
      return
    }

    setIsPro(true)
    setPlan(expires ? 'party' : 'pro')
    setLoaded(true)
  }, [])

  return { isPro, plan, loaded }
}
```

**付费引导弹窗（核心组件）**

```tsx
// components/UpgradeModal.tsx
'use client'
import { CreemCheckout } from '@creem_io/nextjs'
import { useState } from 'react'

const PRODUCTS = {
  party: 'prod_party_xxx',  // 替换为真实 product_id
  pro:   'prod_pro_xxx',
}

const TRIGGER_COPY = {
  ad:    { title: 'Remove All Ads', desc: 'Play without interruptions 🎉' },
  dirty: { title: 'Unlock Adults-Only Pack', desc: 'The naughty word pack 🔞' },
  timer: { title: 'Unlock Game Timer', desc: 'Built-in countdown for smoother rounds ⏱️' },
  words: { title: 'Generate More Words', desc: 'Up to 50 words per round 🔢' },
  default: { title: 'Unlock Pro Features', desc: 'More fun, zero ads ⭐' },
}

export function UpgradeModal({ isOpen, onClose, trigger = 'default' }) {
  const [email, setEmail] = useState('')
  const copy = TRIGGER_COPY[trigger] || TRIGGER_COPY.default
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2>{copy.title}</h2>
        <p>{copy.desc}</p>

        <ul>
          <li>✅ Remove all ads</li>
          <li>✅ Adults-Only & themed word packs</li>
          <li>✅ Built-in countdown timer</li>
          <li>✅ Generate up to 50 words</li>
          <li>✅ Flip card game mode</li>
        </ul>

        <input
          type="email"
          placeholder="Email (optional — for Pro Forever recovery)"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <div className="plans">
          <CreemCheckout
            productId={PRODUCTS.party}
            successUrl="/pro/success"
            customer={{ email: email || undefined }}
            metadata={{ plan: 'party' }}
          >
            <button className="plan-btn">
              <strong>$0.99</strong>
              <span>Party Pass</span>
              <small>24 hours · perfect for tonight</small>
            </button>
          </CreemCheckout>

          <CreemCheckout
            productId={PRODUCTS.pro}
            successUrl="/pro/success"
            customer={{ email: email || undefined }}
            metadata={{ plan: 'pro', email }}
          >
            <button className="plan-btn featured">
              <strong>$2.99</strong>
              <span>Pro Forever</span>
              <small>Best value ⭐</small>
            </button>
          </CreemCheckout>
        </div>

        <button className="later-btn" onClick={onClose}>Maybe later</button>
      </div>
    </div>
  )
}
```

**广告组件（Pro 用户不渲染）**

```tsx
// components/AdBanner.tsx
'use client'
import { usePro } from '@/hooks/usePro'

export function AdBanner({ slot }: { slot: string }) {
  const { isPro, loaded } = usePro()
  if (!loaded || isPro) return null  // 完全不渲染，不只是隐藏

  return (
    <>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-你的ID"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <div className="ad-remove-hint">
        ✨ <a onClick={() => openUpgradeModal('ad')}>Remove ads — $0.99</a>
      </div>
    </>
  )
}
```

**Success 页面**

```tsx
// app/pro/success/page.tsx
'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const customerId = searchParams.get('customer_id')
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')

  useEffect(() => {
    async function activate() {
      const res = await fetch(`/api/activate?customer_id=${customerId}`)
      const data = await res.json()

      if (data.token) {
        localStorage.setItem('cg_token', data.token)
        if (data.expiresAt) {
          localStorage.setItem('cg_token_expires', String(data.expiresAt))
        }
        setStatus('success')
      } else {
        setStatus('error')
      }
    }
    if (customerId) activate()
  }, [customerId])

  if (status === 'loading') return <p>Activating your Pro access...</p>
  if (status === 'error') return (
    <p>Check your email for the activation link, or <a href="/contact">contact us</a>.</p>
  )

  return (
    <div>
      <h1>🎉 You're Pro!</h1>
      <p>All features unlocked. Go play!</p>
      <a href="/">Back to Generator →</a>
    </div>
  )
}
```

### 7.5 词库数据结构

```typescript
// lib/wordbanks/pro.ts
export const PRO_WORDBANKS = {
  adults: {
    id: 'adults',
    label: 'Adults Only 🔞',
    isPro: true,
    words: [
      { text: 'Walk of shame', difficulty: 'easy', tags: ['funny'] },
      { text: 'Ghosting someone', difficulty: 'medium', tags: ['dating'] },
      // ...
    ]
  },
  bachelorette: {
    id: 'bachelorette',
    label: 'Bachelorette Party 💍',
    isPro: true,
    words: [ /* ... */ ]
  },
  halloween: {
    id: 'halloween',
    label: 'Halloween 🎃',
    isPro: true,
    seasonal: true,
    peakMonths: [9, 10],  // 9–10 月高亮显示
    words: [ /* ... */ ]
  },
  // ...
}
```

---

## 八、开发优先级与排期

### Week 1 — MVP（必须上线）

| 任务 | 说明 |
|------|------|
| Vercel KV 开通配置 | 存储 token |
| Creem Dashboard 创建两个产品 | 拿到 product_id |
| Webhook 路由 + token 生成逻辑 | 支付核心 |
| Checkout 路由 | |
| Success 页面 + activate API | 自动激活 |
| `usePro()` Hook | 前端权限判断 |
| 广告组件改造（isPro 不渲染） | 去广告功能 |
| 付费弹窗组件 | 含 3 个触发场景 |
| Adults Only 词库（200 个词） | 最强付费钩子 |
| Resend 邮件发送 | Pro Forever token 找回 |

**目标：7 天内上线，开始收第一笔钱。**

### Week 2 — 体验提升

| 任务 | 说明 |
|------|------|
| 内置计时器模式 | 全屏倒计时 |
| 翻卡游戏模式 | 手机横屏 |
| 生成数量上限 50 | |
| Bachelorette 词库 | |
| Pro Forever 激活页面 `/pro/activate` | token 找回 |
| 弹窗触发优化 | 广告旁边轻量引导 |

### Week 3–4 — 词库扩充

| 任务 |
|------|
| TV Shows 词库 |
| Sports 词库 |
| Halloween 词库（季节性） |
| PDF 打印功能 |

### Month 2+ — 持续迭代

| 任务 | 决策依据 |
|------|---------|
| Group License $9.99/年 | 看是否有 B 端用户咨询 |
| 90s Nostalgia / Bollywood 词库 | 看付费用户使用数据 |
| 自定义词库（需要后端存储） | 看付费用户反馈 |
| 邮件列表（节日前提醒） | 累计足够邮箱后 |

---

## 九、收入预期

### 付费转化假设

基于 3,160 月活，聚会工具场景：
- 愿意打开付费弹窗：约 15%（474 人）
- 弹窗转化为付费：约 3%（14 人）
- 平均客单价：$1.8（Party Pass 和 Pro Forever 混合）

### 分阶段预期

| 阶段 | 月活 | 月付费用户 | 付费收入 | 广告收入 | 月总收入 |
|------|------|-----------|---------|---------|---------|
| 现在（无付费） | 3,160 | 0 | $0 | $15 | $15 |
| MVP 上线第 1 个月 | 3,160 | 10–15 | $20–30 | $40+ | $60–70 |
| 第 3 个月 | 3,500 | 25–40 | $50–80 | $50 | $100–130 |
| 流量翻倍后 | 6,000 | 60–80 | $120–160 | $80 | $200–240 |

> 广告收入 $40+ 是基于修复广告屏蔽设置后的预期（Page RPM 从 $3 提升到 $6）。

---

## 十、上线 Checklist

### 支付流程

```
□ Creem 后台创建 Party Pass / Pro Forever 两个产品
□ 记录两个 product_id 填入代码
□ 配置 Webhook URL
□ 本地用 ngrok 完整测试：支付 → webhook → token 生成 → success 页面激活
□ Party Pass 24 小时过期逻辑验证
□ Pro Forever 邮件激活链接测试
□ testMode 切换为 false
```

### 前端

```
□ usePro() 在 Safari / Firefox 兼容性测试
□ isPro=true 时广告完全不渲染（Network 面板确认请求未发出）
□ 付费弹窗在移动端（iPhone / Android）显示正常
□ 弹窗可以正常关闭，不影响继续免费使用
□ Adults Only 词库内容复查（无违规内容）
□ Creem 支付页面在手机浏览器正常打开
```

### 后端 / 基础设施

```
□ Vercel KV 连接测试
□ Resend 邮件发送测试（Pro Forever 场景）
□ /api/activate 在 success 页面正确读取 token
□ /api/verify-token 过期逻辑正确
□ 所有环境变量在 Vercel 生产环境配置完毕
```

### 上线后第一周观察

```
□ 是否有付费成功的 webhook 日志
□ 付费用户反馈（有无激活失败）
□ 广告收入是否因 isPro 判断导致意外下降
□ 弹窗触发频率是否合理（用户是否反感）
```

---

## 附录：给 Gemini 的提示词

```
# 项目背景

网站：charades-generator.com
技术栈：Next.js App Router + TypeScript
支付：Creem（@creem_io/nextjs）
存储：Vercel KV
邮件：Resend
部署：Vercel

# 任务

实现 Pro 付费功能，具体方案见下方文档。

核心原则：
- 现有免费功能 100% 不动
- 付费只加新功能
- 不需要用户注册账号，用 token 体系

# 需要新建的文件

1. hooks/usePro.ts — 读取 localStorage token，判断 isPro
2. app/checkout/route.ts — Creem checkout 路由
3. app/api/webhook/creem/route.ts — 支付成功处理，生成 token 存 KV
4. app/api/activate/route.ts — success 页面激活 token
5. app/api/verify-token/route.ts — token 有效性验证
6. app/pro/success/page.tsx — 支付成功页面，自动激活
7. app/pro/activate/page.tsx — Pro Forever token 找回激活
8. components/UpgradeModal.tsx — 付费引导弹窗
9. lib/email.ts — Resend 发送激活邮件
10. lib/wordbanks/pro.ts — Pro 专属词库数据

# 需要改动的文件

- 广告组件：isPro=true 时完全不渲染（不只是隐藏）
- 词库选择组件：Pro 词库加锁标识，点击触发付费弹窗
- 生成数量选择：超过 10 个触发付费弹窗

# Token 数据结构（存 Vercel KV）

key: token:{tokenId}
value: {
  id: string,
  plan: 'party' | 'pro',
  createdAt: number,
  expiresAt: number | null,  // party: 24h后，pro: null
  email: string | null
}

# Creem 支付成功后的 URL 参数

?checkout_id=ch_xxx&order_id=ord_xxx&customer_id=cust_xxx

请先读取项目文件结构，再给出具体的改动方案和代码。
```

---

*文档结束。如有疑问请对照第七节技术方案逐步实现，建议按 Week 1 清单顺序开发，优先跑通完整支付链路再做功能扩充。*
