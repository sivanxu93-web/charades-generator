# `charades generator` 主词恢复方案

日期：2026-04-29  
目标：恢复并提升 `charades generator` 主词在 Google 搜索中的展示、排名和点击  
依据：GSC 主词过滤数据、全站近 3 个月数据、当前 Next.js 代码结构审查

## 当前判断

主词表现差的核心不是硬技术事故，而是首页作为主词中心页的信号变弱。

GSC 主词数据里，`charades generator` 近 28 天相比前 28 天：

- 点击：104 -> 34，下降 67.3%
- 展示：5,415 -> 1,666，下降 69.2%
- CTR：1.92% -> 2.04%，基本没有崩
- 平均排名：8.82 -> 12.20，明显下滑

这说明问题主要是 **排名和展示掉了**，不是单纯 snippet CTR 差。

线上技术检查结果正常：

- 首页 200
- canonical 指向 `https://charades-generator.com/`
- robots meta 为 `index, follow`
- `robots.txt` 允许抓取
- `sitemap.xml` 包含首页
- `/en/` 308 回 `/`

所以优先不要把精力放在修 robots/canonical。现在该做的是重建首页的主词中心页能力。

## 系统代码审查发现

### 1. 首页首屏语义太薄

文件：`src/components/CharadesGeneratorOptimized.tsx`

当前首页首屏由通用生成器组件渲染：

- H1：`Charades Generator`
- 副标题：`Click generate to get random words!`
- 次级提示：`Choose how many words to generate`

H1 是对的，但副标题没有覆盖这些主词语义：

- `charades word generator`
- `free charades generator`
- `online charades generator`
- `random charades words`
- `kids / adults / movies / Disney / animals`

对于 `charades generator` 这种泛主词，Google 需要看到首屏明确解释：这是一个什么工具、能生成什么、适合谁、为什么比普通 word list 更好。

### 2. 首页部分信任/场景内容被隐藏

文件：`src/components/HomeLanding.tsx`

当前 `expertInsights` 和 `communityPlaybooks` 仍在字典数据里，但页面里被注释隐藏：

- testimonials / power users
- community playbooks
- 使用场景案例

这些内容对泛主词有价值，因为它们能帮助首页从“薄工具页”变成“主词中心页”。

时间上也值得警惕：4 月 13 日隐藏这些内容后，主词 7 日滚动排名继续从 11.5 左右下滑到 15+。这不能证明因果，但它是最值得优先修复的可疑点。

### 3. 首页内部链接锚文本偏弱

文件：`src/i18n/dictionaries/en.ts`

导航首页名称是 `Free Generator`，footer 有 `Free Charades Generator`，但站内对首页的强锚文本不够集中。

当前 footer 还有：

```text
Charades Word List Generator -> /word-charades-generator/
```

这个路径在 `next.config.ts` 里 301 到 `/`，可以工作，但对内部链接来说不如直接指向 `/`。主词恢复期应减少不必要跳转，把权重和语义直接给首页。

### 4. 首页和 random 页存在轻微意图分流

`/random-charades-generator/` 当前更适合承接：

- `random charades generator`
- `random charades word generator`
- `random word generator for charades`

首页应该承接：

- `charades generator`
- `charades word generator`
- `free charades generator`
- `online charades generator`

但首页文案里频繁说 `random charades generator`，random 页又在 GSC 主词结果里混入展示。需要明确页面分工，避免 Google 犹豫哪个页面该排主词。

### 5. sitemap 覆盖不完整

文件：`src/app/sitemap.ts`

当前实际有 30 个 `page.tsx`，sitemap routeConfig 只有 21 个。未进 sitemap 的重要页面包括：

- `/charades-ideas`
- `/classroom-charades-guide`
- `/family-game-night`
- `/online-charades-guide`
- `/imposter-game-word-list`
- `/how-to-play-imposter-game`
- `/pictionary-word-generator`

这不是主词下滑的直接原因，但会影响全站主题集群发现和内链生态。应作为 P1 修复。

## 可行方案

### P0：首页首屏重写，先救主词相关性

目标：让首页第一屏就完整回答 `charades generator` 搜索意图。

建议改动位置：

- `src/i18n/dictionaries/en.ts`
- `src/i18n/dictionaries/es.ts`
- `src/app/[locale]/page.tsx`
- `src/components/CharadesGeneratorOptimized.tsx`

建议首页英文 title：

```text
Charades Generator - Free Random Charades Words & Ideas
```

或更偏 CTR：

```text
Charades Generator: Free Words for Kids, Adults & Parties
```

建议 description：

```text
Use this free charades generator to get random charades words instantly. Choose kids, adults, movies, Disney, animals, and difficulty, then copy or print your list.
```

建议首页 H1 保持：

```text
Charades Generator
```

建议首页副标题从：

```text
Click generate to get random words!
```

改为：

```text
Generate random charades words for kids, adults, movies, Disney, animals, and parties. No login needed.
```

建议次级提示从：

```text
Choose how many words to generate
```

改为：

```text
Pick a category, difficulty, and word count, then copy or print your charades list.
```

为什么优先做这个：

- 修改小
- 风险低
- 直接作用在主词落地页
- 和 GSC 下滑形态匹配

### P0：恢复首页信任/场景模块，但做轻量合规版

目标：恢复首页内容厚度和 EEAT 信号，不要原样堆回去。

建议恢复：

- `Facilitation tips from hosts`
- `Playbook examples`
- `Classroom / family / remote team` 三类使用场景

建议不要写得像虚假评价。可以把原来的 testimonial 改成更稳的“使用场景建议”：

```text
For classrooms: use easy action words for 5-minute vocabulary breaks.
For family nights: start with animal and movie prompts before switching to harder cards.
For remote teams: copy a short word list into chat and rotate actors every 60 seconds.
```

这样既能恢复场景深度，又避免合规上的“编造用户评价”问题。

### P0：把首页定义为唯一主词中心页

目标：减少 Google 对首页和 random 页的主词分流。

首页文案中保留 `random charades words`，但不要过度把首页称为 `random charades generator`。首页的核心词应该是：

- `charades generator`
- `charades word generator`
- `free charades generator`
- `online charades generator`

random 页的核心词应该是：

- `random charades generator`
- `random charades word generator`
- `random word generator for charades`
- `mixed charades ideas`

具体动作：

- 首页 `seoIntro.lead` 里把第一句从 `Looking for a random charades generator` 改成 `Looking for a free charades generator`
- 首页 `difference.title` 保持 `charades word generator`
- 首页指向 random 页的锚文本保留 `random charades generator`
- random 页指回首页时用 `main charades generator` 或 `free charades generator`

### P0：修正核心内链锚文本

目标：站内链接明确告诉 Google 首页就是 `charades generator` 和 `charades word generator` 的中心。

建议：

- 导航首页文案从 `Free Generator` 改为 `Charades Generator`
- footer 中 `Charades Word List Generator -> /word-charades-generator/` 改为 `Charades Word Generator -> /`
- 在主题页返回首页的链接锚文本统一使用：
  - `main charades generator`
  - `free charades generator`
  - `charades word generator`

保留 `/word-charades-generator/` 到 `/` 的 301，不删除，防止已有索引或外链丢失。

### P1：补齐 sitemap，增强主题集群

目标：让 Google 更完整地发现支撑主词的辅助页面。

把这些页面加进 `src/app/sitemap.ts`：

- `/charades-ideas`
- `/classroom-charades-guide`
- `/family-game-night`
- `/online-charades-guide`
- `/imposter-game-word-list`
- `/how-to-play-imposter-game`
- `/pictionary-word-generator`

建议 priority：

- `/charades-ideas`：0.8
- `/classroom-charades-guide`：0.65
- `/family-game-night`：0.65
- `/online-charades-guide`：0.65
- `/imposter-game-word-list`：0.7
- `/how-to-play-imposter-game`：0.65
- `/pictionary-word-generator`：0.6

### P1：建立“主词支持区块”

目标：在首页下半部分增加一个稳定的解释区块，覆盖泛词查询意图。

建议新增区块：

```text
What this charades generator can do
```

内容覆盖：

- generate one word or a full list
- choose kids/adults/all ages
- choose movies, Disney, animals, actions, emotions, objects
- copy list
- print list
- use it for parties, classrooms, family game night, online calls

这个区块比堆关键词更自然，也更像主词中心页。

### P1：加 FAQ 覆盖主词变体

当前 FAQ 已经有基础问题，但还可以更贴近 GSC 主词变体。

建议新增：

```text
What is a charades word generator?
Can I use this as an online charades generator?
Can I make a printable charades word list?
What categories are included in the generator?
```

### P2：建立监控和回滚规则

修改后不要频繁改。主词恢复需要给 Google 重新抓取和评估时间。

建议观察：

- 7 天：主词展示是否停止下滑
- 14 天：平均排名是否回到 10-12 区间
- 28 天：展示是否恢复到 3 月中旬 7 日滚动水平的 50% 以上

监控指标：

- `charades generator` 7 日滚动展示
- `charades generator` 7 日滚动平均排名
- 首页作为 landing page 的展示占比
- `/random-charades-generator/` 是否继续混入 exact 主词
- `charades word generator`、`charade generator`、`online charades generator` 变体表现

回滚规则：

- 如果改动后 14 天主词排名继续跌到 18+，优先回滚 title/description，不先回滚内容模块。
- 如果 impressions 恢复但 CTR 下降，再调 title/description。
- 如果首页和 random 页继续分流 exact 主词，收紧 random 页文案，减少 `charades generator` 泛词使用。

## 推荐执行顺序

### 第 1 批：当天可做

1. 改首页 title、description、副标题、次级提示。
2. 改导航首页锚文本为 `Charades Generator`。
3. footer 里把 `Charades Word List Generator` 直接指向 `/`。
4. 首页 `seoIntro` 从 random 定位改成 free/main charades generator 定位。

### 第 2 批：1-2 天内做

1. 恢复轻量版场景/信任模块。
2. 增加 `What this charades generator can do` 区块。
3. 扩展首页 FAQ。
4. 补齐 sitemap。

### 第 3 批：观察 14-28 天

1. 不频繁调整首页。
2. 每周导出 exact query + 日期维度。
3. 如果排名恢复但 CTR 仍低，再测试 title。

## 预期效果

保守目标：

- 14 天内主词平均排名回到 10-12
- 28 天内主词展示恢复到每周 800-1,200
- 首页继续作为 exact 主词主要 landing page

进取目标：

- 28-45 天内主词平均排名回到前 10
- exact `charades generator` CTR 稳定到 3%+
- `charades word generator`、`charade generator` 等变体同步增长

## 风险说明

不要一次性大改 URL、路由、canonical 或页面模板。当前技术底座没有硬伤，乱动技术层反而会制造新问题。

这次修复应聚焦在：

- 首页主词语义
- 内容厚度
- 内链锚文本
- 页面分工
- sitemap 覆盖

一句话方案：**把首页重新做回 `charades generator` 的权威中心页，同时让 random、kids、movie、Disney 等页面做清晰的子主题页，不再和首页抢主词。**

