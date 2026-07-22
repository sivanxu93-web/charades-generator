export const categories = {
  all: "すべてのカテゴリ",
  movies: "映画",
  animals: "動物",
  actions: "アクション・動作",
  professions: "職業・仕事",
  objects: "もの・道具",
  emotions: "感情・表情",
  disney: "ディズニー",
  funny: "おもしろいお題",
  christmas: "クリスマス",
  bible: "聖書",
  celebrity: "有名人・芸能人",
  family: "家族・日常",
  thanksgiving: "感謝祭",
  halloween: "ハロウィン",
};

export const difficulties = {
  easy: "かんたん",
  medium: "ふつう",
  hard: "むずかしい",
};

export const ageGroups = {
  all: "制限なし",
  kids: "子ども向け",
  adults: "大人向け",
};

export const filter = {
  advancedOptions: "詳細設定",
  customFilters: "カスタムフィルター",
  reset: "リセット",
  apply: "フィルターを適用",
  categoryLabel: "カテゴリを選択",
  difficultyLabel: "難易度を選択",
  ageGroupLabel: "対象年齢を選択",
  allLevels: "すべての難易度",
  activeFilters: "適用中のフィルター :",
  noFilters: "なし",
};

export const languageSwitcher = {
  label: "言語",
};

export const navigation = {
  homeBreadcrumb: "ジェスチャーゲームお題メーカー",
  items: [
    {
      key: "home",
      title: "お題メーカー",
      description: "お題をランダム生成",
      href: "/",
    },
    {
      key: "kids",
      title: "子ども向け",
      description: "子ども向け簡単お題",
      href: "/charades-generator-for-kids",
    },
    {
      key: "movies",
      title: "映画お題",
      description: "映画のお題一覧",
      href: "/movie-charades-generator",
    },
    {
      key: "disney",
      title: "ディズニー",
      description: "ディズニーのお題",
      href: "/disney-charades-generator",
    },
    {
      key: "christmas",
      title: "クリスマス",
      description: "クリスマスのテーマ",
      href: "/christmas-charades-generator",
    },
    {
      key: "reverse",
      title: "リバース",
      description: "チーム対抗のルール",
      href: "/reverse-charades-game",
    },
    {
      key: "howToUse",
      title: "遊び方・ルール",
      description: "基本ルールとコツ",
      href: "/how-to-use",
    },
  ],
};

export const sidebar = {
  quickRulesTitle: "基本ルール（30秒でわかる！）",
  quickRulesList: [
    "チーム分け : 参加者を均等に2チームに分けます。",
    "制限時間 : 1人あたりの制限時間は60〜90秒が目安です。",
    "ジェスチャー限定 : 声を出すことや、ジェスチャーで空中に文字を描くことは禁止です。",
    "ポイント : 制限時間内にチームメンバーが正解したら1ポイント獲得！"
  ],
  popularTitle: "人気のカテゴリ",
  advertisement: "広告"
};

export const imposterWords = {
  title: "【ワードウルフ】お題・対比ワードペア100選（コピペ可）",
  description: "ワードウルフ（インポスターゲーム）で使える厳選お題ペア集。食べ物、映画、身の回りのもの、難しいテーマなどジャンル別に収録。",
  heading: "ワードウルフおすすめお題ペア一覧",
  lead: "今すぐゲームで使えるお題ペアのリストです。このまま紙に書いて遊ぶことも、当サイトの『オンラインルーム』を使って自動配布することもできます。",
  cta: "このパックでオンラインプレイを開始 →",
  categories: {
    food: "食べ物・飲み物",
    movies: "映画・アニメ・キャラ",
    objects: "身の回りの道具・物",
    hard: "難しい・抽象テーマ",
  }
};

export const imposterRules = {
  title: "ワードウルフのルールと勝ち方のコツ：完全ガイド",
  description: "ワードウルフ（インポスターゲーム）の準備、対話、投票、勝敗決定のプロセスを初心者にもわかりやすく解説。市民とウルフ（インポスター）それぞれの必勝戦術も紹介。",
  heading: "ワードウルフ（インポスター）の基本ルールと戦略",
  stepsTitle: "ゲームの進め方・流れ",
  winningTipsTitle: "ウルフ（インポスター）として騙し抜くコツ",
};

export const generator = {
  defaultTitle: "ジェスチャーゲームお題メーカー：オンラインでランダム自動生成（無料）",
  defaultDescription: "ジェスチャーゲームのお題をボタン一つでランダム生成する無料オンラインツール。子供向け、大人向け、映画、ディズニー、動物、おもしろいお題など、豊富なカテゴリと難易度から選んで今すぐ遊べます。",
  generateButton: "お題を生成する",
  copyButton: "お題をコピーする",
  printButton: "リストを印刷する",
  loading: "生成中...",
  empty: "お題はまだ生成されていません。",
  errorFetchingWords: "お題の取得に失敗しました。再試行してください。",
  wordsCountSublabel: "カテゴリ、難易度、出題数を選択して、ボタンを押してください。コピーや印刷も可能です。",
  scenarioHeading: "かんたん設定プリセット",
  scenarioSubheading: "グループに合わせたおすすめの構成",
  scenarioToggleOpen: "おすすめプリセットを表示",
  scenarioToggleClose: "プリセット設定を非表示",
  scenarioReset: "フィルターをリセット",
  scenarioAppliedLabel: "適用中 :",
  roundLengthLabel: "制限時間の目安",
  tipLabel: "幹事のコツ",
  scenarioMarkUsed: "使用済みとしてマーク",
  scenarioMarkedMessage: "プリセット設定を適用しました",
  yourWordsHeading: "生成されたお題",
  readyToPlay: "{{count}}枚のカードでお題の準備ができました！",
  copyListButton: "お題リストをコピー",
  copySuccess: "コピーしました！",
  copyError: "コピーに失敗しました",
  quickPickLabel: "出題数",
  customLabel: "カスタム数",
  customAmountLabel: "または枚数を直接指定 :",
  customPlaceholder: "1〜50",
  apply: "適用する",
  howToPlayHeading: "ジェスチャーゲームの遊び方",
  howToPlaySteps: [
    "参加者をチームに分けるか、個人戦として全員で遊びます。",
    "出題されたお題を見た「演者」は、声を出さずにジェスチャーだけで表現します。",
    "制限時間内に、演者以外の人が何のお題かを当てられたら成功です！"
  ],
  scenarios: [
    {
      id: "family",
      title: "ファミリーナイト",
      description: "子どもからおじいちゃん、おばあちゃんまでみんなで楽しめる簡単なお題セット。",
      category: "all",
      difficulty: "easy",
      ageGroup: "all",
      wordCount: 5,
      roundLength: "60秒",
      tip: "1問ごとに演者をどんどん交代すると盛り上がります。",
    },
    {
      id: "classroom",
      title: "学校の授業・レク",
      description: "ジェスチャーしやすい動作や英語学習に役立つシンプルお題セット。",
      category: "actions",
      difficulty: "easy",
      ageGroup: "kids",
      wordCount: 10,
      roundLength: "90秒",
      tip: "クラスを2大チームに分け、黒板に得点を書くと熱狂します。",
    },
    {
      id: "adults",
      title: "大人の飲み会・忘年会",
      description: "ちょっと恥ずかしいポーズや、クスッと笑える大爆笑お題セット。",
      category: "funny",
      difficulty: "medium",
      ageGroup: "adults",
      wordCount: 8,
      roundLength: "60秒",
      tip: "お酒が入った席でのアイスブレイクや二次会に抜群の効果です。",
    },
    {
      id: "lightning",
      title: "超高速！ライトニング戦",
      description: "厳しい時間制限の中で、ひらめきと表現力の限界を競うスリリングなモード。",
      category: "all",
      difficulty: "hard",
      ageGroup: "all",
      wordCount: 3,
      roundLength: "30秒",
      tip: "パスは禁止！体当たりのスピード表現が試されます。",
    },
  ],
  filters: {
    category: "カテゴリ",
    difficulty: "難易度",
    ageGroup: "対象年齢",
    count: "出題数",
  },
  activeFilters: "適用中のフィルター :",
  noFilters: "なし（すべて表示）",
};
