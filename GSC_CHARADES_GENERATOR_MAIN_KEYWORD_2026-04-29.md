# `charades generator` 主词曲线与技术原因排查

数据源：`/Users/sivan/Downloads/charades-generator.com-Performance-on-Search-2026-04-29 (1).zip`  
GSC 过滤条件：网络搜索、过去 3 个月、查询 = `charades generator`  
实际日期范围：2026-01-27 至 2026-04-26

## 结论先行

`charades generator` 主词确实出现了明显下滑，但从数据形态看，**不像是 robots、canonical、noindex、站点地图失效这类硬技术事故**。

更像是：

1. 3 月中旬后，Google 对首页承接 `charades generator` 这个主词的信心下降，导致排名和展示同步下滑。
2. 3 月 26 日和 4 月 13 日的首页内容调整，可能进一步削弱了首页的主词相关性、内容厚度或信任信号。
3. 当前线上技术 SEO 基础项正常，但首页首屏和 SERP 标题仍有优化空间。

## 主词总览

| 指标 | 数值 |
|---|---:|
| 点击 | 221 |
| 展示 | 9,901 |
| CTR | 2.23% |
| 平均排名 | 9.83 |

主词主要落地页：

| 页面 | 点击 | 展示 | CTR | 平均排名 |
|---|---:|---:|---:|---:|
| `/` | 184 | 8,307 | 2.21% | 8.76 |
| `/funny-charades-for-adults/` | 20 | 653 | 3.06% | 20.20 |
| `/movie-charades-generator/` | 12 | 615 | 1.95% | 11.20 |
| `/christmas-charades-generator/` | 3 | 169 | 1.78% | 11.22 |
| `/random-charades-generator/` | 2 | 169 | 1.18% | 51.63 |
| `/charades-generator-for-kids/` | 0 | 201 | 0.00% | 31.41 |

判断：主词基本由首页承担。所以下滑排查重点应放在首页，而不是所有页面。

## 曲线阶段

### 按周表现

| 周起始日 | 点击 | 展示 | CTR | 平均排名 | 观察 |
|---|---:|---:|---:|---:|---|
| 2026-01-26 | 22 | 639 | 3.44% | 9.98 | 初始在首页边缘 |
| 2026-02-02 | 12 | 385 | 3.12% | 12.44 | 短暂回落 |
| 2026-02-09 | 21 | 556 | 3.78% | 9.56 | 恢复 |
| 2026-02-16 | 13 | 523 | 2.49% | 12.10 | 波动 |
| 2026-02-23 | 15 | 717 | 2.09% | 9.08 | 排名改善 |
| 2026-03-02 | 27 | 1,538 | 1.76% | 8.54 | 开始放量 |
| 2026-03-09 | 43 | 1,972 | 2.18% | 8.32 | 峰值期 |
| 2026-03-16 | 23 | 1,027 | 2.24% | 9.14 | 展示腰斩 |
| 2026-03-23 | 11 | 878 | 1.25% | 10.07 | 继续下滑 |
| 2026-03-30 | 11 | 614 | 1.79% | 10.21 | 弱势延续 |
| 2026-04-06 | 9 | 423 | 2.13% | 11.54 | 排名下台阶 |
| 2026-04-13 | 8 | 400 | 2.00% | 13.98 | 明显恶化 |
| 2026-04-20 | 6 | 229 | 2.62% | 15.61 | 展示触底 |

### 关键窗口对比

| 窗口 | 日期 | 点击 | 展示 | CTR | 平均排名 | 点击/天 | 展示/天 |
|---|---|---:|---:|---:|---:|---:|---:|
| 前 14 天 | 2026-01-27 至 2026-02-09 | 35 | 1,032 | 3.39% | 10.99 | 2.5 | 73.7 |
| 中段 14 天 | 2026-03-06 至 2026-03-19 | 75 | 3,294 | 2.28% | 8.57 | 5.4 | 235.3 |
| 峰值后 14 天 | 2026-03-29 至 2026-04-11 | 18 | 1,039 | 1.73% | 10.79 | 1.3 | 74.2 |
| 最近 14 天 | 2026-04-13 至 2026-04-26 | 14 | 629 | 2.23% | 14.58 | 1.0 | 44.9 |

### 近 28 天对比

| 窗口 | 日期 | 点击 | 展示 | CTR | 平均排名 |
|---|---|---:|---:|---:|---:|
| 前 28 天 | 2026-03-02 至 2026-03-29 | 104 | 5,415 | 1.92% | 8.82 |
| 近 28 天 | 2026-03-30 至 2026-04-26 | 34 | 1,666 | 2.04% | 12.20 |

变化：

- 点击：-67.3%
- 展示：-69.2%
- CTR：基本持平，略升
- 平均排名：从 8.82 下滑到 12.20

这个形态很关键：**不是 CTR 崩了，而是排名和展示一起掉了**。所以首要问题不是 snippet 点击吸引力，而是 Google 给主词的排名资格下降。

## 下滑时间线

主词峰值出现在 3 月中旬：

- 7 日滚动点击高点：2026-03-14，44 点击 / 1,834 展示 / 2.40% CTR / 排名 8.48
- 7 日滚动展示高点：2026-03-17，41 点击 / 2,084 展示 / 1.97% CTR / 排名 8.17

之后开始走弱：

- 2026-03-23：7 日滚动展示降到 969，排名 9.20
- 2026-03-30：展示降到 831，排名 10.11
- 2026-04-13：展示降到 447，排名 11.51
- 2026-04-26：展示降到 229，排名 15.61

判断：下滑不是某一天突然断崖，而是从 3 月中旬开始的连续再评估。

## 技术 SEO 排查

已检查线上响应：

| 项目 | 结果 | 判断 |
|---|---|---|
| 首页状态码 | 200 | 正常 |
| 首页 canonical | `https://charades-generator.com/` | 正常 |
| 首页 robots meta | `index, follow` | 正常 |
| `robots.txt` | `Allow: /`，包含 sitemap | 正常 |
| `sitemap.xml` | 200，包含首页 | 正常 |
| `/en/` | 308 到 `/` | 正常，避免英文重复首页 |
| `/random-charades-generator/` | 200 | 正常 |

源码层面也未发现明显硬伤：

- `src/app/[locale]/page.tsx` 首页 canonical 正确。
- `src/utils/seo.ts` 英文首页 canonical 会生成根路径。
- `src/middleware.ts` 根路径 rewrite 到 `/en`，但对外 URL 仍是 `/`，线上 canonical 也正确。
- `src/app/robots.ts` 未禁止抓取。
- `src/app/sitemap.ts` 首页 priority 为 1.0，且线上 sitemap 包含首页。

因此，当前没有证据支持“主词下滑是因为 noindex、robots 禁抓、canonical 错误、首页 404/重定向异常、sitemap 丢失”等硬技术原因。

## 可疑的非硬技术原因

### 1. 首页内容厚度和信任信号被削弱

本地 Git 时间线显示：

- 2026-03-26：`优化SEO` 提交改动了首页 metadata、`HomeLanding.tsx` 和英文词典内容。
- 2026-04-13：`调整` 提交中，首页隐藏了 testimonials 和 community playbooks。

尤其是 2026-04-13 之后，主词排名从 11.5 左右进一步滑到 15+。这并不能证明因果关系，但时间上值得警惕。

对 Google 来说，`charades generator` 这种主词通常需要首页同时满足：

- 工具可直接使用
- 页面解释清楚它是 charades word generator
- 有足够的玩法、场景、分类、FAQ、信任信号
- 内链结构明确告诉 Google 首页就是主词中心页

如果首页内容被压缩，或 EEAT/UGC/案例类模块被隐藏，可能会让 Google 把首页从“主词中心页”降级为“轻工具页”。

### 2. 首页和 random 页之间可能存在意图分流

GSC 显示 `charades generator` 主词下，除了首页外，还有这些页面获得展示：

- `/funny-charades-for-adults/`
- `/movie-charades-generator/`
- `/random-charades-generator/`
- `/charades-generator-for-kids/`

这说明 Google 对“哪个页面最适合承接主词”有一些犹豫。首页仍然是主承接页，但主题页也在混入。

建议：不要让 `/random-charades-generator/` 去抢 `charades generator` 这个最大主词。首页应明确承接：

- `charades generator`
- `charades word generator`
- `free charades generator`
- `online charades generator`

`/random-charades-generator/` 则承接：

- `random charades generator`
- `random charades word generator`
- `random word generator for charades`

### 3. 标题可能不够贴合当前主词竞争

当前线上 title：

`Charades Generator: 1000+ Free Online Words (No Login) | Charades Generator`

它包含主词，但有两个问题：

1. `Charades Generator` 重复出现，浪费标题空间。
2. `1000+ Free Online Words` 语义略泛，不如 `Random Charades Words & Ideas` 直接。

更建议测试：

`Charades Generator - Free Random Charades Words & Ideas`

或：

`Charades Generator: Free Words for Kids, Adults & Parties`

## 优先处理建议

### P0：恢复并加强首页主词中心页信号

建议恢复或替换 4 月 13 日隐藏掉的信任/案例类内容，不一定原样恢复，但首页需要重新有这些信号：

- 适合哪些场景：family night、classroom、party、team icebreaker
- 用户/主持人视角的使用建议
- 可打印、可复制、可筛选的工具价值
- FAQ 覆盖 `charades generator` 和 `charades word generator`

### P0：重写首页 title 和 description

建议 title：

`Charades Generator - Free Random Charades Words & Ideas`

建议 description：

`Use this free charades generator to get random charades words instantly. Choose kids, adults, movies, Disney, animals, and difficulty, then copy or print your list.`

### P0：首屏强化 exact-match

当前首屏 H1 是 `Charades Generator`，这是好的；但副标题 `Click generate to get random words!` 太薄。

建议改为类似：

`Generate random charades words for kids, adults, movies, Disney, animals, and more. No login needed.`

### P1：内链锚文本收束

从主题页指回首页时，优先使用这些锚文本：

- `charades generator`
- `charades word generator`
- `free charades generator`
- `online charades generator`

从首页指向 random 页时，使用：

- `random charades generator`
- `random charades word generator`

### P1：观察周期

修改后不要每天改。建议观察：

- 7 天：抓取和展示是否恢复
- 14 天：平均排名是否回到 10 以内
- 28 天：展示是否接近 3 月中旬水平

核心监控指标：

- `charades generator` 7 日滚动展示
- `charades generator` 7 日滚动平均排名
- 首页作为 landing page 的展示占比
- `/random-charades-generator/` 是否继续混入主词

## 最终判断

主词下滑是实的，而且幅度不小：近 28 天相比前 28 天，展示下降约 69%，点击下降约 67%，平均排名从 8.82 掉到 12.20。

但当前线上没有硬技术 SEO 事故。更可能的原因是 Google 对首页主词相关性的再评估，加上首页内容结构和信任模块调整后，主词中心页信号变弱。处理方向应该是：**恢复首页内容厚度、强化主词语义、收束内链和页面分工，而不是优先排查 robots/canonical。**

