import type { CharadesWord } from "@/data/charades-types";

const actions: CharadesWord[] = [
  { word: "歯磨きをする", category: "actions", difficulty: "easy", ageGroup: "kids", wordCount: 1 },
  { word: "サッカーでシュートを決める", category: "actions", difficulty: "easy", ageGroup: "all", wordCount: 2 },
  { word: "ギターを弾く", category: "actions", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "お風呂で熱唱する", category: "actions", difficulty: "easy", ageGroup: "all", wordCount: 2 },
  { word: "モナ・リザを描く", category: "actions", difficulty: "medium", ageGroup: "all", wordCount: 2 },
  { word: "自転車を運転する", category: "actions", difficulty: "easy", ageGroup: "kids", wordCount: 1 },
  { word: "ピザを作る", category: "actions", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "スマホで自撮りをする", category: "actions", difficulty: "easy", ageGroup: "all", wordCount: 2 },
  { word: "魚を釣り上げる", category: "actions", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "ラーメンをすする", category: "actions", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "綱渡りをする", category: "actions", difficulty: "hard", ageGroup: "all", wordCount: 1 },
  { word: "あみだくじを引く", category: "actions", difficulty: "medium", ageGroup: "all", wordCount: 1 },
];

const animals: CharadesWord[] = [
  { word: "ライオン", category: "animals", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "ゴリラ", category: "animals", difficulty: "easy", ageGroup: "kids", wordCount: 1 },
  { word: "キリン", category: "animals", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "イルカ", category: "animals", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "ナマケモノ", category: "animals", difficulty: "medium", ageGroup: "all", wordCount: 1 },
  { word: "カニ", category: "animals", difficulty: "easy", ageGroup: "kids", wordCount: 1 },
  { word: "チョウチョ", category: "animals", difficulty: "easy", ageGroup: "kids", wordCount: 1 },
  { word: "カンガルー", category: "animals", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "コアラ", category: "animals", difficulty: "easy", ageGroup: "kids", wordCount: 1 },
  { word: "コウモリ", category: "animals", difficulty: "medium", ageGroup: "all", wordCount: 1 },
  { word: "ウミガメ", category: "animals", difficulty: "easy", ageGroup: "kids", wordCount: 1 },
  { word: "カモノハシ", category: "animals", difficulty: "hard", ageGroup: "all", wordCount: 1 },
];

const christmas: CharadesWord[] = [
  { word: "サンタクロース", category: "christmas", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "クリスマスツリー", category: "christmas", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "雪だるま", category: "christmas", difficulty: "easy", ageGroup: "kids", wordCount: 1 },
  { word: "トナカイ", category: "christmas", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "クリスマスプレゼント", category: "christmas", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "クラッカーを鳴らす", category: "christmas", difficulty: "easy", ageGroup: "all", wordCount: 2 },
  { word: "ローストチキンを食べる", category: "christmas", difficulty: "easy", ageGroup: "all", wordCount: 2 },
  { word: "イルミネーション", category: "christmas", difficulty: "medium", ageGroup: "all", wordCount: 1 },
  { word: "サンタのソリ", category: "christmas", difficulty: "medium", ageGroup: "all", wordCount: 2 },
];

const movies: CharadesWord[] = [
  { word: "千と千尋の神隠し", category: "movies", difficulty: "medium", ageGroup: "all", wordCount: 2 },
  { word: "となりのトトロ", category: "movies", difficulty: "easy", ageGroup: "kids", wordCount: 2 },
  { word: "君の名は。", category: "movies", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "ライオン・キング", category: "movies", difficulty: "easy", ageGroup: "kids", wordCount: 2 },
  { word: "タイタニック", category: "movies", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "ハリー・ポッター", category: "movies", difficulty: "easy", ageGroup: "all", wordCount: 2 },
  { word: "もののけ姫", category: "movies", difficulty: "medium", ageGroup: "all", wordCount: 2 },
  { word: "スター・ウォーズ", category: "movies", difficulty: "easy", ageGroup: "all", wordCount: 2 },
  { word: "ジョーカー", category: "movies", difficulty: "medium", ageGroup: "all", wordCount: 1 },
  { word: "シン・ゴジラ", category: "movies", difficulty: "medium", ageGroup: "all", wordCount: 2 },
];

const disney: CharadesWord[] = [
  { word: "Mickey Mouse", category: "disney", difficulty: "easy", ageGroup: "kids", wordCount: 2 },
  { word: "Donald Duck", category: "disney", difficulty: "easy", ageGroup: "kids", wordCount: 2 },
  { word: "Cinderella", category: "disney", difficulty: "easy", ageGroup: "kids", wordCount: 1 },
  { word: "Elsa", category: "disney", difficulty: "easy", ageGroup: "kids", wordCount: 1 },
  { word: "Winnie the Pooh", category: "disney", difficulty: "easy", ageGroup: "kids", wordCount: 3 },
  { word: "Snow White", category: "disney", difficulty: "easy", ageGroup: "kids", wordCount: 2 },
  { word: "Aladdin", category: "disney", difficulty: "easy", ageGroup: "kids", wordCount: 1 },
  { word: "Peter Pan", category: "disney", difficulty: "easy", ageGroup: "kids", wordCount: 2 },
  { word: "Woody", category: "disney", difficulty: "easy", ageGroup: "kids", wordCount: 1 },
  { word: "Ariel", category: "disney", difficulty: "easy", ageGroup: "kids", wordCount: 1 },
];

const funny: CharadesWord[] = [
  { word: "ガumを踏んでしまう", category: "funny", difficulty: "easy", ageGroup: "all", wordCount: 2 },
  { word: "スマホのパスワードをど忘れする", category: "funny", difficulty: "medium", ageGroup: "all", wordCount: 3 },
  { word: "タンスの角に足の小指をぶつける", category: "funny", difficulty: "easy", ageGroup: "all", wordCount: 4 },
  { word: "激辛カレーを食べる", category: "funny", difficulty: "easy", ageGroup: "all", wordCount: 2 },
  { word: "壁に向かって話しかける", category: "funny", difficulty: "medium", ageGroup: "all", wordCount: 2 },
  { word: "寝坊して大慌てで準備する", category: "funny", difficulty: "easy", ageGroup: "all", wordCount: 3 },
  { word: "高いヒールでよろける", category: "funny", difficulty: "easy", ageGroup: "all", wordCount: 2 },
  { word: "飛んでいるゴキブリに怯える", category: "funny", difficulty: "easy", ageGroup: "all", wordCount: 3 },
  { word: "自分の肘を舐めようとする", category: "funny", difficulty: "hard", ageGroup: "all", wordCount: 3 },
];

const emotions: CharadesWord[] = [
  { word: "うれしい", category: "emotions", difficulty: "easy", ageGroup: "kids", wordCount: 1 },
  { word: "悲しい", category: "emotions", difficulty: "easy", ageGroup: "kids", wordCount: 1 },
  { word: "怒る", category: "emotions", difficulty: "easy", ageGroup: "kids", wordCount: 1 },
  { word: "びっくりする", category: "emotions", difficulty: "easy", ageGroup: "kids", wordCount: 1 },
  { word: "恥ずかしがる", category: "emotions", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "イライラする", category: "emotions", difficulty: "medium", ageGroup: "all", wordCount: 1 },
  { word: "ドヤ顔をする", category: "emotions", difficulty: "easy", ageGroup: "all", wordCount: 2 },
  { word: "大爆笑する", category: "emotions", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "恋に落ちる", category: "emotions", difficulty: "easy", ageGroup: "all", wordCount: 2 },
];

const professions: CharadesWord[] = [
  { word: "お医者さん", category: "professions", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "学校の先生", category: "professions", difficulty: "easy", ageGroup: "all", wordCount: 2 },
  { word: "消防士", category: "professions", difficulty: "easy", ageGroup: "kids", wordCount: 1 },
  { word: "警察官", category: "professions", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "宇宙飛行士", category: "professions", difficulty: "medium", ageGroup: "kids", wordCount: 1 },
  { word: "コックさん", category: "professions", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "美容師", category: "professions", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "科学者", category: "professions", difficulty: "medium", ageGroup: "all", wordCount: 1 },
  { word: "カメラマン", category: "professions", difficulty: "easy", ageGroup: "all", wordCount: 1 },
];

const objects: CharadesWord[] = [
  { word: "スマートフォン", category: "objects", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "歯ブラシ", category: "objects", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "傘", category: "objects", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "サングラス", category: "objects", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "ハンマー", category: "objects", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "鍵", category: "objects", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "時計", category: "objects", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "本", category: "objects", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "ハサミ", category: "objects", difficulty: "easy", ageGroup: "all", wordCount: 1 },
];

const bible: CharadesWord[] = [
  { word: "ノア", category: "bible", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "ダビデとゴリアテ", category: "bible", difficulty: "easy", ageGroup: "all", wordCount: 2 },
  { word: "モーセの十戒（海が割れる）", category: "bible", difficulty: "medium", ageGroup: "all", wordCount: 3 },
  { word: "ノアの方舟", category: "bible", difficulty: "easy", ageGroup: "kids", wordCount: 2 },
  { word: "アダムとイヴ", category: "bible", difficulty: "easy", ageGroup: "all", wordCount: 2 },
  { word: "迷える羊", category: "bible", difficulty: "medium", ageGroup: "all", wordCount: 2 },
  { word: "最後の晩餐", category: "bible", difficulty: "hard", ageGroup: "all", wordCount: 2 },
];

const celebrity: CharadesWord[] = [
  { word: "大谷翔平", category: "celebrity", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "明石家さんま", category: "celebrity", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "マツコ・デラックス", category: "celebrity", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "志村けん", category: "celebrity", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "羽生結弦", category: "celebrity", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "黒柳徹子", category: "celebrity", difficulty: "medium", ageGroup: "all", wordCount: 1 },
  { word: "ビートたけし", category: "celebrity", difficulty: "easy", ageGroup: "all", wordCount: 1 },
];

const family: CharadesWord[] = [
  { word: "おばあちゃんが編み物をする", category: "family", difficulty: "easy", ageGroup: "kids", wordCount: 2 },
  { word: "お父さんがお部屋の掃除をする", category: "family", difficulty: "easy", ageGroup: "kids", wordCount: 2 },
  { word: "お母さんが料理を作る", category: "family", difficulty: "easy", ageGroup: "kids", wordCount: 2 },
  { word: "赤ちゃんが泣く", category: "family", difficulty: "easy", ageGroup: "kids", wordCount: 1 },
  { word: "公園をお散歩する", category: "family", difficulty: "easy", ageGroup: "kids", wordCount: 2 },
  { word: "家族でドライブに行く", category: "family", difficulty: "easy", ageGroup: "kids", wordCount: 2 },
];

const thanksgiving: CharadesWord[] = [
  { word: "七面鳥の丸焼き", category: "thanksgiving", difficulty: "easy", ageGroup: "all", wordCount: 2 },
  { word: "家族で食事をする", category: "thanksgiving", difficulty: "easy", ageGroup: "all", wordCount: 2 },
  { word: "みんなに感謝を伝える", category: "thanksgiving", difficulty: "medium", ageGroup: "all", wordCount: 2 },
  { word: "パンプキンパイ", category: "thanksgiving", difficulty: "medium", ageGroup: "all", wordCount: 1 },
  { word: "秋の収穫", category: "thanksgiving", difficulty: "easy", ageGroup: "all", wordCount: 1 },
];

const halloween: CharadesWord[] = [
  { word: "ジャック・オー・ランタン", category: "halloween", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "おばけ", category: "halloween", difficulty: "easy", ageGroup: "kids", wordCount: 1 },
  { word: "ほうきで飛ぶ魔女", category: "halloween", difficulty: "medium", ageGroup: "all", wordCount: 2 },
  { word: "吸血鬼（ヴァンパイア）", category: "halloween", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "ゾンビ", category: "halloween", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "お化け屋敷", category: "halloween", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "トリック・オア・トリート", category: "halloween", difficulty: "easy", ageGroup: "all", wordCount: 2 },
];

export const jaCharadesDatabase: CharadesWord[] = [
  ...actions,
  ...animals,
  ...christmas,
  ...movies,
  ...disney,
  ...funny,
  ...emotions,
  ...professions,
  ...objects,
  ...bible,
  ...celebrity,
  ...family,
  ...thanksgiving,
  ...halloween,
];
