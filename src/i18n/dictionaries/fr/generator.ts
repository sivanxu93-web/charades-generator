export const categories = {
  all: "Toutes les catégories",
  movies: "Cinéma",
  animals: "Animaux",
  actions: "Actions",
  professions: "Professions",
  objects: "Objets",
  emotions: "Émotions",
  disney: "Disney",
  funny: "Amusant",
  christmas: "Noël",
  bible: "Bible",
  celebrity: "Célébrités",
  family: "Famille",
  thanksgiving: "Action de Grâce",
  halloween: "Halloween",
};

export const difficulties = {
  easy: "Facile",
  medium: "Moyen",
  hard: "Difficile",
};

export const ageGroups = {
  all: "Tous âges",
  kids: "Pour enfants",
  adults: "Pour adultes",
};

export const filter = {
  advancedOptions: "Options avancées",
  customFilters: "Filtres personnalisés",
  reset: "Réinitialiser",
  apply: "Appliquer les filtres",
  categoryLabel: "Choisir une catégorie",
  difficultyLabel: "Choisir la difficulté",
  ageGroupLabel: "Choisir la tranche d'âge",
  allLevels: "Tous les niveaux",
  activeFilters: "Filtres actifs :",
  noFilters: "Aucun",
};

export const languageSwitcher = {
  label: "Langue",
};

export const navigation = {
  homeBreadcrumb: "Générateur de Mime",
  items: [
    {
      key: "home",
      title: "Générateur",
      description: "Générateur de mots gratuit",
      href: "/",
    },
    {
      key: "kids",
      title: "Enfants",
      description: "Mots pour enfants",
      href: "/charades-generator-for-kids",
    },
    {
      key: "movies",
      title: "Cinéma",
      description: "Films et séries",
      href: "/movie-charades-generator",
    },
    {
      key: "disney",
      title: "Disney",
      description: "Mimes magiques Disney",
      href: "/disney-charades-generator",
    },
    {
      key: "christmas",
      title: "Noël",
      description: "Mots festifs de Noël",
      href: "/christmas-charades-generator",
    },
    {
      key: "reverse",
      title: "Mime Inversé",
      description: "Règles par équipe",
      href: "/reverse-charades-game",
    },
    {
      key: "howToUse",
      title: "Comment Jouer",
      description: "Guide complet et règles",
      href: "/how-to-use",
    },
  ],
};

export const sidebar = {
  quickRulesTitle: "Règles rapides",
  quickRulesList: [
    "Équipes : Divisez les joueurs en deux équipes égales.",
    "Temps limite : Réglez un chronomètre de 60 secondes par tour.",
    "Silence : L'acteur ne doit faire aucun bruit ni épeler de mots.",
    "Score : Devinez correctement avant la fin du temps pour marquer 1 point."
  ],
  popularTitle: "Catégories populaires",
  advertisement: "Publicité"
};

export const imposterWords = {
  title: "100+ Mots et Couples pour le Jeu de l'Imposteur",
  description: "Découvrez la liste ultime de mots pour le jeu de l'imposteur. Parfait pour les fêtes, l'école et les amis. Catégories : Nourriture, Films, Mode Difficile et plus.",
  heading: "Couples de Mots pour le Jeu de l'Imposteur",
  lead: "Vous cherchez de nouveaux mots pour votre prochaine partie ? Utilisez notre liste sélectionnée ci-dessous, ou ouvrez notre Salon en Ligne pour les distribuer automatiquement.",
  cta: "Jouer ce pack en ligne →",
  categories: {
    food: "Nourriture & Boissons",
    movies: "Films & Personnages",
    objects: "Objets du quotidien",
    hard: "Mode Difficile / Abstrait",
  }
};

export const imposterRules = {
  title: "Comment jouer au Jeu de l'Imposteur : Règles, Configuration et Conseils",
  description: "Apprenez à jouer au jeu de l'imposteur étape par étape. Règles claires pour la configuration, le vote et comment gagner en tant qu'imposteur ou civil.",
  heading: "Règles et Stratégies du Jeu de l'Imposteur",
  stepsTitle: "Instructions étape par étape",
  winningTipsTitle: "Comment gagner en tant qu'Imposteur",
};

export const generator = {
  defaultTitle: "Jeu de Mime en Ligne : Mots à Mimer et Idées",
  defaultDescription: "Générez des mots à mimer gratuitement. Idées de mimes faciles, drôles et thématiques (Disney, cinéma, animaux) pour enfants et adultes.",
  generateButton: "Générer des mots",
  copyButton: "Copier les mots",
  printButton: "Imprimer la liste",
  loading: "Génération...",
  empty: "Aucun mot généré pour le moment.",
  errorFetchingWords: "Erreur lors de la récupération des mots. Veuillez réessayer.",
  wordsCountSublabel: "Choisissez la catégorie, la difficulté et la quantité, puis copiez ou imprimez votre liste.",
  scenarioHeading: "Configurations Prédéfinies",
  scenarioSubheading: "Configuration rapide pour vos groupes",
  scenarioToggleOpen: "Afficher les préréglages",
  scenarioToggleClose: "Masquer les préréglages",
  scenarioReset: "Réinitialiser les filtres",
  scenarioAppliedLabel: "Appliqué :",
  roundLengthLabel: "Durée du tour",
  tipLabel: "Conseil de l'hôte",
  scenarioMarkUsed: "Marquer comme utilisé",
  scenarioMarkedMessage: "Utilisation du préréglage de scénario",
  yourWordsHeading: "Vos Mots Aléatoires",
  readyToPlay: "Prêt à jouer avec {{count}} cartes ?",
  copyListButton: "Copier la liste",
  copySuccess: "Copié !",
  copyError: "Erreur lors de la copie",
  quickPickLabel: "Sélection rapide",
  customLabel: "Quantité personnalisée",
  customAmountLabel: "Ou saisissez une quantité :",
  customPlaceholder: "1-50",
  apply: "Appliquer",
  howToPlayHeading: "Comment jouer au jeu de mime",
  howToPlaySteps: [
    "Divisez les joueurs en équipes ou jouez individuellement.",
    "Un joueur mime le mot en silence en utilisant des gestes.",
    "Les autres joueurs devinent le mot avant la fin du temps imparti !"
  ],
  scenarios: [
    {
      id: "family",
      title: "Soirée en Famille",
      description: "Mimes faciles adaptés à tous les âges.",
      category: "all",
      difficulty: "easy",
      ageGroup: "all",
      wordCount: 5,
      roundLength: "60s",
      tip: "Faites tourner le rôle de l'acteur à chaque tour.",
    },
    {
      id: "classroom",
      title: "Classe / FLE",
      description: "Verbes d'action éducatifs et simples pour étudiants.",
      category: "actions",
      difficulty: "easy",
      ageGroup: "kids",
      wordCount: 10,
      roundLength: "90s",
      tip: "Divisez la classe en deux grandes équipes compétitives.",
    },
    {
      id: "adults",
      title: "Soirée entre Adultes",
      description: "Mimes drôles et parfois un peu plus mûrs.",
      category: "funny",
      difficulty: "medium",
      ageGroup: "adults",
      wordCount: 8,
      roundLength: "60s",
      tip: "Idéal pour briser la glace lors d'un dîner ou d'une fête.",
    },
    {
      id: "lightning",
      title: "Ronde Éclair",
      description: "Action rapide avec un temps de réflexion très court.",
      category: "all",
      difficulty: "hard",
      ageGroup: "all",
      wordCount: 3,
      roundLength: "30s",
      tip: "Aucun saut de mot n'est autorisé dans ce mode ultra-rapide !",
    },
  ],
  filters: {
    category: "Catégorie",
    difficulty: "Difficulté",
    ageGroup: "Tranche d'âge",
    count: "Nombre de mots",
  },
  activeFilters: "Filtres actifs :",
  noFilters: "Aucun (tous affichés)",
};
