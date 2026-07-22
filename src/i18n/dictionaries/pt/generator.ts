export const categories = {
  all: "Todas as categorias",
  movies: "Cinema",
  animals: "Animais",
  actions: "Ações",
  professions: "Profissões",
  objects: "Objetos",
  emotions: "Emoções",
  disney: "Disney",
  funny: "Divertido",
  christmas: "Natal",
  bible: "Bíblia",
  celebrity: "Celebridades",
  family: "Família",
  thanksgiving: "Ação de Graças",
  halloween: "Halloween",
};

export const difficulties = {
  easy: "Fácil",
  medium: "Médio",
  hard: "Difícil",
};

export const ageGroups = {
  all: "Todas as idades",
  kids: "Para crianças",
  adults: "Para adultos",
};

export const filter = {
  advancedOptions: "Opções avançadas",
  customFilters: "Filtres personalizados",
  reset: "Redefinir",
  apply: "Aplicar filtros",
  categoryLabel: "Escolher categoria",
  difficultyLabel: "Escolher dificuldade",
  ageGroupLabel: "Escolher faixa etária",
  allLevels: "Todos os níveis",
  activeFilters: "Filtros ativos :",
  noFilters: "Nenhum",
};

export const languageSwitcher = {
  label: "Idioma",
};

export const navigation = {
  homeBreadcrumb: "Gerador de Mímica",
  items: [
    {
      key: "home",
      title: "Gerador",
      description: "Gerador de mímica grátis",
      href: "/",
    },
    {
      key: "kids",
      title: "Crianças",
      description: "Palavras infantis",
      href: "/charades-generator-for-kids",
    },
    {
      key: "movies",
      title: "Cinema",
      description: "Filmes para mímica",
      href: "/movie-charades-generator",
    },
    {
      key: "disney",
      title: "Disney",
      description: "Mímicas da Disney",
      href: "/disney-charades-generator",
    },
    {
      key: "christmas",
      title: "Natal",
      description: "Mímicas de Natal",
      href: "/christmas-charades-generator",
    },
    {
      key: "reverse",
      title: "Mímica Inversa",
      description: "Regras em equipe",
      href: "/reverse-charades-game",
    },
    {
      key: "howToUse",
      title: "Como Jogar",
      description: "Guia completo e regras",
      href: "/how-to-use",
    },
  ],
};

export const sidebar = {
  quickRulesTitle: "Regras rápidas",
  quickRulesList: [
    "Equipes : Divida os jogadores em duas equipes iguais.",
    "Tempo limite : Ajuste um cronômetro de 60 segundos por rodada.",
    "Silêncio : O ator não pode fazer som ou gesticular letras do alfabeto.",
    "Pontuação : Adivinhar corretamente antes do tempo garante 1 ponto."
  ],
  popularTitle: "Categorias populares",
  advertisement: "Publicidade"
};

export const imposterWords = {
  title: "100+ Palavras e Duplas para o Jogo do Impostor",
  description: "Descubra a lista definitiva de palavras para o jogo do impostor. Perfeito para festas, escola e amigos. Categorias: Comida, Filmes, Modo Difícil e muito mais.",
  heading: "Duplas de Palavras para o Jogo do Impostor",
  lead: "Procurando novas duplas de palavras para a sua partida? Use nossa lista selecionada abaixo ou abra nossa Sala Online para distribuir automaticamente.",
  cta: "Jogar este pacote online →",
  categories: {
    food: "Comidas & Bebidas",
    movies: "Filmes & Personagens",
    objects: "Objetos cotidianos",
    hard: "Modo Difícil / Abstrato",
  }
};

export const imposterRules = {
  title: "Como Jogar o Jogo do Impostor: Regras, Configuração e Dicas",
  description: "Aprenda a jogar o jogo do impostor passo a passo. Regras claras de preparação, votação e estratégias de vitória para civis e impostores.",
  heading: "Regras e Estratégias do Jogo do Impostor",
  stepsTitle: "Instruções passo a passo",
  winningTipsTitle: "Como vencer sendo o Impostor",
};

export const generator = {
  defaultTitle: "Jogo de Mímica Online : Palavras para Mímica e Idéias",
  defaultDescription: "Gere palavras para mímica de forma rápida e gratuita. Ideias fáceis, engraçadas e temáticas (Disney, cinema, animais) para crianças e adultos.",
  generateButton: "Gerar palavras",
  copyButton: "Copiar palavras",
  printButton: "Imprimir lista",
  loading: "Gerando...",
  empty: "Nenhuma palavra gerada ainda.",
  errorFetchingWords: "Erro ao carregar palavras. Tente novamente.",
  wordsCountSublabel: "Selecione a categoria, a dificuldade e a quantidade, depois copie ou imprima sua lista.",
  scenarioHeading: "Configurações Rápidas",
  scenarioSubheading: "Configuração rápida para o seu grupo",
  scenarioToggleOpen: "Mostrar configurações",
  scenarioToggleClose: "Ocultar configurações",
  scenarioReset: "Redefinir filtros",
  scenarioAppliedLabel: "Aplicado :",
  roundLengthLabel: "Duração da rodada",
  tipLabel: "Dica de anfitrião",
  scenarioMarkUsed: "Marcar como jogado",
  scenarioMarkedMessage: "Usando a configuração rápida",
  yourWordsHeading: "Suas Palavras Geradas",
  readyToPlay: "Pronto para jogar com {{count}} cartas?",
  copyListButton: "Copiar lista",
  copySuccess: "Copiado !",
  copyError: "Erro ao copiar",
  quickPickLabel: "Quantidade rápida",
  customLabel: "Quantidade personalizada",
  customAmountLabel: "Ou digite uma quantidade :",
  customPlaceholder: "1-50",
  apply: "Aplicar",
  howToPlayHeading: "Como jogar mímica",
  howToPlaySteps: [
    "Divida os jogadores em equipes ou jogue individualmente.",
    "Um jogador deve imitar a palavra em silêncio usando gestos.",
    "Os outros jogadores devem adivinhar antes do tempo acabar !"
  ],
  scenarios: [
    {
      id: "family",
      title: "Noite em Família",
      description: "Mímicas fáceis e divertidas adequadas para todas as idades.",
      category: "all",
      difficulty: "easy",
      ageGroup: "all",
      wordCount: 5,
      roundLength: "60s",
      tip: "Gire o papel do mímico a cada rodada.",
    },
    {
      id: "classroom",
      title: "Sala de Aula",
      description: "Verbos de ação educativos e simples para estudantes.",
      category: "actions",
      difficulty: "easy",
      ageGroup: "kids",
      wordCount: 10,
      roundLength: "90s",
      tip: "Divida a sala em duas grandes equipes para competir.",
    },
    {
      id: "adults",
      title: "Festa de Adultos",
      description: "Mímicas engraçadas e situações inusitadas.",
      category: "funny",
      difficulty: "medium",
      ageGroup: "adults",
      wordCount: 8,
      roundLength: "60s",
      tip: "Excelente para quebrar o gelo em confraternizações.",
    },
    {
      id: "lightning",
      title: "Rodada Relâmpago",
      description: "Partida de ritmo acelerado com limite de tempo curtíssimo.",
      category: "all",
      difficulty: "hard",
      ageGroup: "all",
      wordCount: 3,
      roundLength: "30s",
      tip: "Não é permitido pular palavras neste modo ultra veloz !",
    },
  ],
  filters: {
    category: "Categoria",
    difficulty: "Dificuldade",
    ageGroup: "Faixa Etária",
    count: "Quantidade de palavras",
  },
  activeFilters: "Filtros ativos :",
  noFilters: "Nenhum (mostrando todas)",
};
