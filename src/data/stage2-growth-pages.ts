import type { Locale } from "@/i18n/config";

export type Stage2PageKey =
  | "truth-or-dare-generator"
  | "would-you-rather-generator"
  | "family-game-night-ideas"
  | "bible-charades"
  | "halloween-party-games"
  | "christmas-party-games"
  | "celebrity-charades-generator"
  | "family-charades-generator"
  | "thanksgiving-charades-generator"
  | "halloween-charades-generator";

export interface Stage2PromptGroup {
  id: string;
  label: string;
  description: string;
  prompts: string[];
}

export interface Stage2Section {
  id: string;
  title: string;
  description: string;
  items: string[];
}

export interface Stage2RelatedLink {
  href: string;
  label: string;
  description: string;
}

export interface Stage2PageContent {
  path: string;
  title: string;
  description: string;
  keywords: string[];
  heroLabel: string;
  heroTitle: string;
  heroDescription: string;
  primaryCta: string;
  copyLabel: string;
  copiedLabel: string;
  generatorTitle: string;
  promptListTitle: string;
  generatorDescription: string;
  generatorButton: string;
  groups: Stage2PromptGroup[];
  sections: Stage2Section[];
  relatedTitle: string;
  relatedLinks: Stage2RelatedLink[];
  faqTitle: string;
  faq: Array<{ question: string; answer: string }>;
}

export const stage2PageOrder: Stage2PageKey[] = [
  "truth-or-dare-generator",
  "would-you-rather-generator",
  "family-game-night-ideas",
  "bible-charades",
  "halloween-party-games",
  "christmas-party-games",
  "celebrity-charades-generator",
  "family-charades-generator",
  "thanksgiving-charades-generator",
  "halloween-charades-generator",
];

export const stage2Pages: Record<Stage2PageKey, { en: Stage2PageContent } & Partial<Record<Locale, Stage2PageContent>>> = {
  "truth-or-dare-generator": {
    en: {
      path: "/truth-or-dare-generator",
      title: "Truth or Dare Generator - Clean Questions for Kids & Parties",
      description:
        "Use this free truth or dare generator for clean, funny, family, kids, teens, and party prompts. Pick a category and get instant questions.",
      keywords: [
        "truth or dare generator",
        "truth or dare questions generator",
        "clean truth or dare",
        "truth or dare for kids",
        "family truth or dare",
      ],
      heroLabel: "Free party question tool",
      heroTitle: "Truth or Dare Generator",
      heroDescription:
        "Generate clean truth or dare prompts for family game night, classrooms, teen hangouts, and party icebreakers without downloading an app.",
      primaryCta: "Generate a prompt",
      copyLabel: "Copy prompt",
      copiedLabel: "Copied",
      generatorTitle: "Pick a truth or dare category",
      promptListTitle: "Truth or Dare Questions List",
      generatorDescription:
        "Choose the group that matches your players. Every default prompt is designed to be safe enough for mixed groups.",
      generatorButton: "New truth or dare",
      groups: [
        {
          id: "kids",
          label: "Kids",
          description: "Simple prompts for younger players.",
          prompts: [
            "Truth: What is the funniest thing that happened at school?",
            "Dare: Act like your favorite animal for ten seconds.",
            "Truth: What food would you eat every day if you could?",
            "Dare: Draw a silly face in the air with your finger.",
          ],
        },
        {
          id: "teens",
          label: "Teens",
          description: "Light prompts for friend groups.",
          prompts: [
            "Truth: What song do you secretly know by heart?",
            "Dare: Give a dramatic weather report for this room.",
            "Truth: What trend did you try and regret?",
            "Dare: Speak in movie-trailer voice for your next turn.",
          ],
        },
        {
          id: "family",
          label: "Family",
          description: "Warm prompts for all ages.",
          prompts: [
            "Truth: Which family memory still makes you laugh?",
            "Dare: Teach everyone a dance move in fifteen seconds.",
            "Truth: Who in the family tells the best stories?",
            "Dare: Mime making breakfast without using words.",
          ],
        },
        {
          id: "funny",
          label: "Funny",
          description: "Silly prompts that keep the room moving.",
          prompts: [
            "Truth: What is the weirdest nickname you would accept?",
            "Dare: Pretend the floor is made of marshmallows.",
            "Truth: What object in this room deserves an award?",
            "Dare: Give a serious speech about socks.",
          ],
        },
        {
          id: "party",
          label: "Party",
          description: "Fast icebreakers for groups.",
          prompts: [
            "Truth: What game are you surprisingly competitive about?",
            "Dare: Start a silent wave around the group.",
            "Truth: What is your safest party trick?",
            "Dare: Introduce the person next to you like a celebrity guest.",
          ],
        },
        {
          id: "clean",
          label: "Clean",
          description: "Safe prompts for schools and work events.",
          prompts: [
            "Truth: What skill would you like to learn this year?",
            "Dare: Compliment three people in the room.",
            "Truth: What is one small win from this week?",
            "Dare: Describe your day using only three sound effects.",
          ],
        },
      ],
      sections: [
        {
          id: "how-to-use",
          title: "How to use the truth or dare generator",
          description: "Keep the round quick, safe, and easy to join.",
          items: [
            "Choose a category before each round or keep one category for the whole game.",
            "Let a player skip once if a prompt does not fit the group.",
            "Mix truth and dare prompts with charades or imposter rounds for a longer game night.",
          ],
        },
        {
          id: "safe-defaults",
          title: "Clean by default",
          description: "The page targets broad party intent without pushing the site into adult-only content.",
          items: [
            "Prompts avoid private, risky, or embarrassing personal details.",
            "Kids, family, classroom, and party modes use separate prompt pools.",
            "Hosts can copy a prompt and share it in chat for remote play.",
          ],
        },
      ],
      relatedTitle: "Keep playing",
      relatedLinks: [
        { href: "/", label: "Charades Generator", description: "Switch to acting prompts." },
        { href: "/would-you-rather-generator/", label: "Would You Rather Generator", description: "Use choice questions next." },
        { href: "/imposter-game/", label: "Imposter Game", description: "Play a secret-role word game." },
        { href: "/family-game-night-ideas/", label: "Family Game Night Ideas", description: "Build a full game plan." },
      ],
      faqTitle: "Truth or dare generator FAQ",
      faq: [
        {
          question: "Is this truth or dare generator clean?",
          answer:
            "Yes. The default prompts are written for mixed groups, families, classrooms, and casual parties.",
        },
        {
          question: "Can kids use these truth or dare prompts?",
          answer:
            "Yes. Use the kids or family category for simpler prompts that avoid adult topics.",
        },
        {
          question: "How many prompts do I need for a party?",
          answer:
            "For a short icebreaker, 10 to 20 prompts is enough. For a full game night, rotate categories and mix in charades or would-you-rather questions.",
        },
      ],
    },
    es: {
      path: "/truth-or-dare-generator",
      title: "Generador de Verdad o Reto - Preguntas limpias para fiestas",
      description:
        "Genera preguntas de verdad o reto limpias para niños, familia, adolescentes y fiestas. Elige una categoría y juega al instante.",
      keywords: [
        "generador verdad o reto",
        "preguntas verdad o reto",
        "verdad o reto limpio",
        "verdad o reto para niños",
        "verdad o reto familiar",
      ],
      heroLabel: "Herramienta gratis para fiestas",
      heroTitle: "Generador de Verdad o Reto",
      heroDescription:
        "Crea prompts limpios de verdad o reto para noches familiares, clases, grupos de adolescentes y rompehielos de fiesta sin descargar una app.",
      primaryCta: "Generar prompt",
      copyLabel: "Copiar prompt",
      copiedLabel: "Copiado",
      generatorTitle: "Elige una categoría",
      promptListTitle: "Lista de preguntas de verdad o reto",
      generatorDescription:
        "Selecciona el grupo que encaja con tus jugadores. Los prompts iniciales son seguros para grupos mixtos.",
      generatorButton: "Nuevo verdad o reto",
      groups: [
        {
          id: "kids",
          label: "Niños",
          description: "Prompts simples para jugadores jóvenes.",
          prompts: [
            "Verdad: ¿Qué fue lo más gracioso que pasó en clase?",
            "Reto: Actúa como tu animal favorito durante diez segundos.",
            "Verdad: ¿Qué comida comerías todos los días?",
            "Reto: Dibuja una cara graciosa en el aire.",
          ],
        },
        {
          id: "teens",
          label: "Adolescentes",
          description: "Preguntas ligeras para amigos.",
          prompts: [
            "Verdad: ¿Qué canción sabes de memoria en secreto?",
            "Reto: Da un reporte del clima sobre esta habitación.",
            "Verdad: ¿Qué moda probaste y luego te arrepentiste?",
            "Reto: Habla como narrador de tráiler hasta tu próximo turno.",
          ],
        },
        {
          id: "family",
          label: "Familia",
          description: "Prompts amables para todas las edades.",
          prompts: [
            "Verdad: ¿Qué recuerdo familiar todavía te hace reír?",
            "Reto: Enseña un paso de baile en quince segundos.",
            "Verdad: ¿Quién cuenta las mejores historias en tu familia?",
            "Reto: Imita preparar el desayuno sin hablar.",
          ],
        },
        {
          id: "funny",
          label: "Divertido",
          description: "Prompts graciosos para mantener el ritmo.",
          prompts: [
            "Verdad: ¿Qué apodo raro aceptarías?",
            "Reto: Imagina que el suelo es de malvaviscos.",
            "Verdad: ¿Qué objeto de esta sala merece un premio?",
            "Reto: Da un discurso serio sobre calcetines.",
          ],
        },
        {
          id: "party",
          label: "Fiesta",
          description: "Rompehielos rápidos para grupos.",
          prompts: [
            "Verdad: ¿En qué juego eres más competitivo de lo esperado?",
            "Reto: Inicia una ola silenciosa en el grupo.",
            "Verdad: ¿Cuál es tu truco de fiesta más seguro?",
            "Reto: Presenta a la persona de al lado como invitado famoso.",
          ],
        },
        {
          id: "clean",
          label: "Limpio",
          description: "Prompts seguros para clase o trabajo.",
          prompts: [
            "Verdad: ¿Qué habilidad quieres aprender este año?",
            "Reto: Haz un cumplido a tres personas.",
            "Verdad: ¿Cuál fue una pequeña victoria de esta semana?",
            "Reto: Describe tu día usando solo tres efectos de sonido.",
          ],
        },
      ],
      sections: [
        {
          id: "how-to-use",
          title: "Cómo usar el generador de verdad o reto",
          description: "Mantén la ronda rápida, segura y fácil de jugar.",
          items: [
            "Elige una categoría antes de cada ronda o usa una sola categoría toda la partida.",
            "Permite saltar una vez si un prompt no encaja con el grupo.",
            "Mezcla verdad o reto con charadas o impostor para una noche más larga.",
          ],
        },
        {
          id: "safe-defaults",
          title: "Limpio por defecto",
          description: "La página cubre intención de fiesta sin convertir el sitio en contenido solo para adultos.",
          items: [
            "Los prompts evitan detalles personales privados o incómodos.",
            "Niños, familia, clase y fiesta tienen grupos separados.",
            "Puedes copiar un prompt y compartirlo en chat para jugar a distancia.",
          ],
        },
      ],
      relatedTitle: "Seguir jugando",
      relatedLinks: [
        { href: "/", label: "Generador de Charadas", description: "Cambia a prompts de actuación." },
        { href: "/would-you-rather-generator/", label: "Generador de Qué Prefieres", description: "Usa preguntas de elección." },
        { href: "/imposter-game/", label: "Juego del Impostor", description: "Juega con roles secretos." },
        { href: "/family-game-night-ideas/", label: "Ideas para noche de juegos", description: "Arma un plan completo." },
      ],
      faqTitle: "Preguntas frecuentes",
      faq: [
        {
          question: "¿Este generador de verdad o reto es limpio?",
          answer:
            "Sí. Los prompts iniciales están escritos para grupos mixtos, familias, clases y fiestas casuales.",
        },
        {
          question: "¿Pueden usarlo niños?",
          answer:
            "Sí. Usa las categorías niños o familia para prompts más simples y sin temas adultos.",
        },
        {
          question: "¿Cuántos prompts necesito para una fiesta?",
          answer:
            "Para un rompehielos corto bastan 10 a 20 prompts. Para una noche completa, rota categorías y mezcla charadas o preguntas de qué prefieres.",
        },
      ],
    },
  },
  "would-you-rather-generator": {
    en: {
      path: "/would-you-rather-generator",
      title: "Would You Rather Generator - Funny Questions for Kids & Groups",
      description:
        "Generate clean would you rather questions for kids, family, school, party, funny, and hard rounds. Free instant question tool.",
      keywords: [
        "would you rather generator",
        "would you rather questions",
        "would you rather for kids",
        "funny would you rather",
        "hard would you rather questions",
      ],
      heroLabel: "Choice question generator",
      heroTitle: "Would You Rather Generator",
      heroDescription:
        "Get instant either-or questions for kids, families, classrooms, team warmups, and party groups.",
      primaryCta: "Generate a question",
      copyLabel: "Copy question",
      copiedLabel: "Copied",
      generatorTitle: "Choose a would-you-rather mode",
      promptListTitle: "Would You Rather Questions List",
      generatorDescription:
        "Use easy categories for younger groups or hard questions when your players want a real debate.",
      generatorButton: "New question",
      groups: [
        {
          id: "kids",
          label: "Kids",
          description: "Simple and playful choices.",
          prompts: [
            "Would you rather have a pet dragon or a pet robot?",
            "Would you rather eat pancakes for dinner or pizza for breakfast?",
            "Would you rather be able to jump super high or run super fast?",
            "Would you rather live in a treehouse or a castle?",
          ],
        },
        {
          id: "family",
          label: "Family",
          description: "Great for mixed ages.",
          prompts: [
            "Would you rather plan the next family trip or choose the next movie night?",
            "Would you rather cook dinner together or build a blanket fort?",
            "Would you rather have a weekly game night or a weekly picnic?",
            "Would you rather be famous for kindness or creativity?",
          ],
        },
        {
          id: "funny",
          label: "Funny",
          description: "Silly choices for laughs.",
          prompts: [
            "Would you rather sneeze glitter or hiccup bubbles?",
            "Would you rather wear squeaky shoes forever or talk only in rhymes for a day?",
            "Would you rather have spaghetti hair or pancake hands?",
            "Would you rather dance every time you hear your name or sing every question?",
          ],
        },
        {
          id: "hard",
          label: "Hard",
          description: "Questions with real tradeoffs.",
          prompts: [
            "Would you rather always know the truth or always know the right thing to say?",
            "Would you rather be excellent at one skill or good at many skills?",
            "Would you rather remember every detail or forget every embarrassment?",
            "Would you rather have more time or more energy?",
          ],
        },
        {
          id: "school",
          label: "School",
          description: "Classroom-friendly prompts.",
          prompts: [
            "Would you rather read a great book or build a science project?",
            "Would you rather give a speech or lead a group activity?",
            "Would you rather have art class every day or music class every day?",
            "Would you rather solve a puzzle alone or with a team?",
          ],
        },
        {
          id: "party",
          label: "Party",
          description: "Fast icebreaker choices.",
          prompts: [
            "Would you rather host the game or keep score?",
            "Would you rather win quietly or lose dramatically?",
            "Would you rather pick the playlist or pick the snacks?",
            "Would you rather play one long game or five quick games?",
          ],
        },
      ],
      sections: [
        {
          id: "how-to-play",
          title: "How to play would you rather",
          description: "The format works because everyone can answer quickly.",
          items: [
            "Read one question out loud and let everyone choose side A or side B.",
            "Ask one or two players to explain their choice before moving on.",
            "Use hard questions for discussion and funny questions for energy.",
          ],
        },
        {
          id: "group-fit",
          title: "Best groups for this generator",
          description: "Would-you-rather questions are flexible and low pressure.",
          items: [
            "Use kids and school prompts for classrooms and youth groups.",
            "Use family prompts between charades rounds.",
            "Use party prompts as a warmup before imposter or truth or dare.",
          ],
        },
      ],
      relatedTitle: "Related games",
      relatedLinks: [
        { href: "/truth-or-dare-generator/", label: "Truth or Dare Generator", description: "Add actions and questions." },
        { href: "/family-game-night-ideas/", label: "Family Game Night Ideas", description: "Plan a full night." },
        { href: "/pictionary-word-generator/", label: "Pictionary Word Generator", description: "Switch to drawing prompts." },
        { href: "/", label: "Charades Generator", description: "Act out random words." },
      ],
      faqTitle: "Would you rather generator FAQ",
      faq: [
        {
          question: "Are these would-you-rather questions family-friendly?",
          answer:
            "Yes. The default categories are clean and designed for kids, families, schools, and casual groups.",
        },
        {
          question: "Can I use this in a classroom?",
          answer:
            "Yes. Use the school category for prompts that work as warmups, speaking practice, or low-pressure discussion starters.",
        },
        {
          question: "What makes a good would-you-rather question?",
          answer:
            "A good question gives two choices that both feel possible, so players can explain their reasoning instead of picking instantly.",
        },
      ],
    },
    es: {
      path: "/would-you-rather-generator",
      title: "Generador de Qué Prefieres - Preguntas divertidas para grupos",
      description:
        "Genera preguntas limpias de qué prefieres para niños, familia, clase, fiestas, rondas divertidas y difíciles.",
      keywords: [
        "generador que prefieres",
        "preguntas que prefieres",
        "que prefieres para niños",
        "preguntas divertidas que prefieres",
        "preguntas dificiles que prefieres",
      ],
      heroLabel: "Generador de preguntas de elección",
      heroTitle: "Generador de Qué Prefieres",
      heroDescription:
        "Obtén preguntas instantáneas de una opción u otra para niños, familias, clases, equipos y grupos de fiesta.",
      primaryCta: "Generar pregunta",
      copyLabel: "Copiar pregunta",
      copiedLabel: "Copiado",
      generatorTitle: "Elige un modo",
      promptListTitle: "Lista de preguntas de qué prefieres",
      generatorDescription:
        "Usa categorías fáciles para grupos jóvenes o preguntas difíciles cuando quieran debatir de verdad.",
      generatorButton: "Nueva pregunta",
      groups: [
        {
          id: "kids",
          label: "Niños",
          description: "Opciones simples y juguetonas.",
          prompts: [
            "¿Prefieres tener un dragón mascota o un robot mascota?",
            "¿Prefieres comer pancakes en la cena o pizza en el desayuno?",
            "¿Prefieres saltar muy alto o correr muy rápido?",
            "¿Prefieres vivir en una casa del árbol o en un castillo?",
          ],
        },
        {
          id: "family",
          label: "Familia",
          description: "Perfectas para edades mezcladas.",
          prompts: [
            "¿Prefieres planear el próximo viaje familiar o elegir la próxima película?",
            "¿Prefieres cocinar juntos o construir una fortaleza con mantas?",
            "¿Prefieres una noche de juegos semanal o un picnic semanal?",
            "¿Prefieres ser famoso por tu amabilidad o por tu creatividad?",
          ],
        },
        {
          id: "funny",
          label: "Divertido",
          description: "Opciones absurdas para reír.",
          prompts: [
            "¿Prefieres estornudar purpurina o tener hipo de burbujas?",
            "¿Prefieres llevar zapatos chillones siempre o hablar en rima un día?",
            "¿Prefieres tener pelo de espagueti o manos de pancake?",
            "¿Prefieres bailar cada vez que oyes tu nombre o cantar cada pregunta?",
          ],
        },
        {
          id: "hard",
          label: "Difícil",
          description: "Preguntas con decisiones reales.",
          prompts: [
            "¿Prefieres saber siempre la verdad o saber siempre qué decir?",
            "¿Prefieres dominar una habilidad o ser bueno en muchas?",
            "¿Prefieres recordarlo todo o olvidar cada momento incómodo?",
            "¿Prefieres tener más tiempo o más energía?",
          ],
        },
        {
          id: "school",
          label: "Clase",
          description: "Prompts adecuados para aula.",
          prompts: [
            "¿Prefieres leer un gran libro o construir un proyecto de ciencia?",
            "¿Prefieres dar una presentación o liderar una actividad grupal?",
            "¿Prefieres tener arte todos los días o música todos los días?",
            "¿Prefieres resolver un puzzle solo o en equipo?",
          ],
        },
        {
          id: "party",
          label: "Fiesta",
          description: "Rompehielos rápidos.",
          prompts: [
            "¿Prefieres dirigir el juego o llevar la puntuación?",
            "¿Prefieres ganar en silencio o perder de forma dramática?",
            "¿Prefieres elegir la música o elegir los snacks?",
            "¿Prefieres jugar una partida larga o cinco juegos rápidos?",
          ],
        },
      ],
      sections: [
        {
          id: "how-to-play",
          title: "Cómo jugar a qué prefieres",
          description: "Funciona porque todos pueden responder rápido.",
          items: [
            "Lee una pregunta en voz alta y deja que todos elijan A o B.",
            "Pide a una o dos personas que expliquen su elección.",
            "Usa preguntas difíciles para debatir y divertidas para subir la energía.",
          ],
        },
        {
          id: "group-fit",
          title: "Mejores grupos para este generador",
          description: "Las preguntas de elección son flexibles y de baja presión.",
          items: [
            "Usa niños y clase para aulas y grupos juveniles.",
            "Usa familia entre rondas de charadas.",
            "Usa fiesta antes de impostor o verdad o reto.",
          ],
        },
      ],
      relatedTitle: "Juegos relacionados",
      relatedLinks: [
        { href: "/truth-or-dare-generator/", label: "Generador de Verdad o Reto", description: "Agrega acciones y preguntas." },
        { href: "/family-game-night-ideas/", label: "Ideas para noche de juegos", description: "Planea una noche completa." },
        { href: "/pictionary-word-generator/", label: "Generador Pictionary", description: "Cambia a prompts de dibujo." },
        { href: "/", label: "Generador de Charadas", description: "Actúa palabras aleatorias." },
      ],
      faqTitle: "Preguntas frecuentes",
      faq: [
        {
          question: "¿Estas preguntas son aptas para familias?",
          answer:
            "Sí. Las categorías iniciales son limpias y pensadas para niños, familias, clases y grupos casuales.",
        },
        {
          question: "¿Puedo usarlo en clase?",
          answer:
            "Sí. Usa la categoría clase para calentamientos, práctica oral o debates de baja presión.",
        },
        {
          question: "¿Qué hace buena a una pregunta de qué prefieres?",
          answer:
            "Una buena pregunta ofrece dos opciones posibles, para que los jugadores expliquen su razonamiento.",
        },
      ],
    },
  },
  "family-game-night-ideas": {
    en: {
      path: "/family-game-night-ideas",
      title: "Family Game Night Ideas - Easy Games, Printables & Generators",
      description:
        "Plan a family game night with charades, pictionary, imposter, would you rather, truth or dare, printable cards, and quick hosting ideas.",
      keywords: [
        "family game night ideas",
        "family games",
        "game night ideas",
        "family party games",
        "printable family games",
      ],
      heroLabel: "Family game night planner",
      heroTitle: "Family Game Night Ideas",
      heroDescription:
        "Build a complete family game night with fast games, printable prompts, low-pressure questions, and tools that work for mixed ages.",
      primaryCta: "Pick an idea",
      copyLabel: "Copy idea",
      copiedLabel: "Copied",
      generatorTitle: "Family game night idea picker",
      promptListTitle: "Family Game Night Ideas List",
      generatorDescription:
        "Use this picker when you need a fast plan for tonight, then follow the themed sections below.",
      generatorButton: "Pick another idea",
      groups: [
        {
          id: "quick",
          label: "Quick",
          description: "Ten-minute openers.",
          prompts: [
            "Start with five easy charades words, then let the youngest player pick the next category.",
            "Play three would-you-rather questions before dinner to warm everyone up.",
            "Print twelve pictionary cards and run a two-team drawing sprint.",
            "Use one imposter word pair as a quick mystery round.",
          ],
        },
        {
          id: "classic",
          label: "Classic",
          description: "Reliable family games.",
          prompts: [
            "Run charades in three rounds: kids, movies, then hard mode.",
            "Use pictionary cards for a drawing round, then switch to charades for movement.",
            "Play truth or dare with family-safe prompts and one skip per player.",
            "Create a scoreboard where every team earns points for creativity.",
          ],
        },
        {
          id: "printable",
          label: "Printable",
          description: "Paper-friendly game plans.",
          prompts: [
            "Print pictionary cards, cut them into slips, and place them in a bowl.",
            "Copy a charades list into a document and make one card per prompt.",
            "Make a holiday game sheet with charades, drawing, and question prompts.",
            "Prepare a family game night menu with three rounds and simple rules.",
          ],
        },
      ],
      sections: [
        {
          id: "game-matrix",
          title: "Best games for family night",
          description: "Mix movement, drawing, secret roles, and conversation.",
          items: [
            "Charades works when people need movement and laughter.",
            "Pictionary works when you want paper, markers, or a whiteboard.",
            "Imposter works for older kids and adults who enjoy bluffing.",
            "Would you rather and truth or dare work as low-setup icebreakers.",
          ],
        },
        {
          id: "schedule",
          title: "Simple 60-minute schedule",
          description: "A repeatable plan keeps the evening relaxed.",
          items: [
            "10 minutes: warm up with would-you-rather or truth-or-dare prompts.",
            "20 minutes: play charades or pictionary in teams.",
            "20 minutes: run imposter or a seasonal game.",
            "10 minutes: finish with a funny lightning round and declare a creative winner.",
          ],
        },
      ],
      relatedTitle: "Family game night tools",
      relatedLinks: [
        { href: "/", label: "Charades Generator", description: "Instant acting prompts." },
        { href: "/pictionary-word-generator/", label: "Pictionary Word Generator", description: "Drawing prompts and cards." },
        { href: "/truth-or-dare-generator/", label: "Truth or Dare Generator", description: "Clean question prompts." },
        { href: "/would-you-rather-generator/", label: "Would You Rather Generator", description: "Fast choice questions." },
        { href: "/imposter-game/", label: "Imposter Game", description: "Secret role word game." },
      ],
      faqTitle: "Family game night ideas FAQ",
      faq: [
        {
          question: "What are easy family game night ideas?",
          answer:
            "Charades, pictionary, would-you-rather questions, clean truth or dare, and imposter word games are easy because they need little setup and work for mixed ages.",
        },
        {
          question: "How long should family game night last?",
          answer:
            "A 45 to 75 minute plan works well for most families. Use shorter rounds for younger kids and longer team games for older groups.",
        },
        {
          question: "Do I need printable games?",
          answer:
            "No, but printable cards make hosting easier. You can copy or print lists from the generator pages before everyone arrives.",
        },
      ],
    },
    es: {
      path: "/family-game-night-ideas",
      title: "Ideas para Noche de Juegos en Familia - Juegos fáciles",
      description:
        "Planea una noche de juegos familiar con charadas, pictionary, impostor, qué prefieres, verdad o reto, cartas imprimibles e ideas rápidas.",
      keywords: [
        "ideas noche de juegos familia",
        "juegos familiares",
        "ideas para noche de juegos",
        "juegos para familia",
        "juegos familiares imprimibles",
      ],
      heroLabel: "Planificador de juegos familiares",
      heroTitle: "Ideas para Noche de Juegos en Familia",
      heroDescription:
        "Arma una noche completa con juegos rápidos, prompts imprimibles, preguntas simples y herramientas para edades mezcladas.",
      primaryCta: "Elegir idea",
      copyLabel: "Copiar idea",
      copiedLabel: "Copiado",
      generatorTitle: "Selector de ideas familiares",
      promptListTitle: "Lista de ideas para noche de juegos en familia",
      generatorDescription:
        "Usa este selector cuando necesites un plan rápido para hoy y luego sigue las secciones temáticas.",
      generatorButton: "Elegir otra idea",
      groups: [
        {
          id: "quick",
          label: "Rápido",
          description: "Aperturas de diez minutos.",
          prompts: [
            "Empieza con cinco palabras fáciles de charadas y deja que el jugador más joven elija la siguiente categoría.",
            "Juega tres preguntas de qué prefieres antes de cenar.",
            "Imprime doce cartas de pictionary y haz una ronda rápida por equipos.",
            "Usa una pareja de palabras del impostor como ronda misteriosa.",
          ],
        },
        {
          id: "classic",
          label: "Clásico",
          description: "Juegos familiares confiables.",
          prompts: [
            "Haz charadas en tres rondas: niños, películas y modo difícil.",
            "Usa cartas de pictionary para dibujar y luego cambia a charadas.",
            "Juega verdad o reto familiar con una opción de saltar por persona.",
            "Crea una puntuación donde todos ganen puntos por creatividad.",
          ],
        },
        {
          id: "printable",
          label: "Imprimible",
          description: "Planes fáciles en papel.",
          prompts: [
            "Imprime cartas de pictionary, recórtalas y colócalas en un bol.",
            "Copia una lista de charadas en un documento y haz una carta por prompt.",
            "Prepara una hoja festiva con charadas, dibujo y preguntas.",
            "Haz un menú de noche de juegos con tres rondas y reglas simples.",
          ],
        },
      ],
      sections: [
        {
          id: "game-matrix",
          title: "Mejores juegos para noche familiar",
          description: "Mezcla movimiento, dibujo, roles secretos y conversación.",
          items: [
            "Charadas funciona cuando el grupo necesita movimiento y risas.",
            "Pictionary funciona con papel, rotuladores o pizarra.",
            "Impostor funciona para niños mayores y adultos que disfrutan farolear.",
            "Qué prefieres y verdad o reto funcionan como rompehielos sin preparación.",
          ],
        },
        {
          id: "schedule",
          title: "Horario simple de 60 minutos",
          description: "Un plan repetible mantiene la noche relajada.",
          items: [
            "10 minutos: calienta con qué prefieres o verdad o reto.",
            "20 minutos: juega charadas o pictionary por equipos.",
            "20 minutos: juega impostor o un juego de temporada.",
            "10 minutos: termina con una ronda rápida divertida y premia la creatividad.",
          ],
        },
      ],
      relatedTitle: "Herramientas para la noche",
      relatedLinks: [
        { href: "/", label: "Generador de Charadas", description: "Prompts para actuar." },
        { href: "/pictionary-word-generator/", label: "Generador Pictionary", description: "Prompts y cartas de dibujo." },
        { href: "/truth-or-dare-generator/", label: "Generador de Verdad o Reto", description: "Preguntas limpias." },
        { href: "/would-you-rather-generator/", label: "Generador de Qué Prefieres", description: "Preguntas rápidas de elección." },
        { href: "/imposter-game/", label: "Juego del Impostor", description: "Juego de palabras con rol secreto." },
      ],
      faqTitle: "Preguntas frecuentes",
      faq: [
        {
          question: "¿Qué ideas fáciles hay para una noche familiar?",
          answer:
            "Charadas, pictionary, preguntas de qué prefieres, verdad o reto limpio e impostor son fáciles porque requieren poca preparación.",
        },
        {
          question: "¿Cuánto debe durar una noche de juegos familiar?",
          answer:
            "Un plan de 45 a 75 minutos funciona bien. Usa rondas cortas para niños pequeños y juegos por equipos para grupos mayores.",
        },
        {
          question: "¿Necesito juegos imprimibles?",
          answer:
            "No, pero las cartas imprimibles facilitan dirigir la noche. Puedes copiar o imprimir listas antes de que lleguen todos.",
        },
      ],
    },
  },
  "bible-charades": {
    en: {
      path: "/bible-charades",
      title: "Bible Charades - Words, Ideas & Family-Friendly Generator",
      description:
        "Play Bible charades with people, places, stories, actions, animals, and classroom-friendly prompts for church groups and family nights.",
      keywords: [
        "bible charades",
        "bible charades words",
        "bible charades ideas",
        "church group games",
        "christian family games",
      ],
      heroLabel: "Faith-friendly charades ideas",
      heroTitle: "Bible Charades",
      heroDescription:
        "Use people, places, stories, actions, and animals from the Bible to run a respectful charades round for families, Sunday school, and church groups.",
      primaryCta: "Pick a Bible charades prompt",
      copyLabel: "Copy prompt",
      copiedLabel: "Copied",
      generatorTitle: "Bible charades prompt picker",
      promptListTitle: "Bible Charades Words and Ideas List",
      generatorDescription:
        "Choose a group, then act out the prompt without speaking. Keep clues respectful and simple.",
      generatorButton: "New Bible prompt",
      groups: [
        {
          id: "people",
          label: "People",
          description: "Well-known Bible figures.",
          prompts: ["Noah", "Moses", "David", "Esther", "Mary", "Peter"],
        },
        {
          id: "places",
          label: "Places",
          description: "Locations and settings.",
          prompts: ["Garden of Eden", "Jericho", "Bethlehem", "Red Sea", "Mount Sinai", "Galilee"],
        },
        {
          id: "stories",
          label: "Stories",
          description: "Scenes players can act out.",
          prompts: ["Noah building the ark", "David facing Goliath", "Jonah and the big fish", "The Good Samaritan", "The lost sheep", "Feeding the five thousand"],
        },
        {
          id: "actions",
          label: "Actions",
          description: "Simple verbs for younger players.",
          prompts: ["Praying", "Building", "Fishing", "Singing", "Sharing bread", "Lighting a lamp"],
        },
        {
          id: "animals",
          label: "Animals",
          description: "Animal prompts from Bible stories.",
          prompts: ["Dove", "Sheep", "Lion", "Donkey", "Fish", "Camel"],
        },
      ],
      sections: [
        {
          id: "how-to-play",
          title: "How to play Bible charades",
          description: "Keep the round clear, respectful, and inclusive.",
          items: [
            "Choose a category that matches your group's age and Bible knowledge.",
            "Let younger players act simple animals or actions before story prompts.",
            "Use teams for church groups and let each team explain the story after guessing.",
          ],
        },
        {
          id: "classroom",
          title: "Sunday school and classroom tips",
          description: "Bible charades can reinforce stories without turning into a quiz.",
          items: [
            "Preview unfamiliar names before the round starts.",
            "Pair a confident reader with a younger actor.",
            "After each guess, ask one gentle recap question about the story.",
          ],
        },
      ],
      relatedTitle: "More family-safe games",
      relatedLinks: [
        { href: "/", label: "Charades Generator", description: "General charades prompts." },
        { href: "/charades-generator-for-kids/", label: "Kids Charades", description: "Simple child-friendly prompts." },
        { href: "/family-game-night-ideas/", label: "Family Game Night Ideas", description: "Plan a full evening." },
        { href: "/pictionary-word-generator/", label: "Pictionary Word Generator", description: "Draw prompts instead." },
      ],
      faqTitle: "Bible charades FAQ",
      faq: [
        {
          question: "What are good Bible charades ideas?",
          answer:
            "Good Bible charades ideas include people such as Noah or Moses, places such as Bethlehem, stories such as David and Goliath, and simple actions such as praying or fishing.",
        },
        {
          question: "Is Bible charades good for Sunday school?",
          answer:
            "Yes. Use simple prompts for younger students and story prompts for older groups, then recap the story after each round.",
        },
        {
          question: "Can I use this for family game night?",
          answer:
            "Yes. The prompts are family-friendly and work well for mixed-age groups that want a faith-friendly game.",
        },
      ],
    },
    es: {
      path: "/bible-charades",
      title: "Charadas Bíblicas - Palabras e ideas para familia",
      description:
        "Juega charadas bíblicas con personas, lugares, historias, acciones, animales y prompts para grupos de iglesia y familia.",
      keywords: [
        "charadas biblicas",
        "palabras charadas biblicas",
        "ideas charadas biblicas",
        "juegos para iglesia",
        "juegos cristianos familiares",
      ],
      heroLabel: "Ideas de charadas de fe",
      heroTitle: "Charadas Bíblicas",
      heroDescription:
        "Usa personas, lugares, historias, acciones y animales bíblicos para una ronda respetuosa con familias, escuela dominical y grupos de iglesia.",
      primaryCta: "Elegir prompt bíblico",
      copyLabel: "Copiar prompt",
      copiedLabel: "Copiado",
      generatorTitle: "Selector de prompts bíblicos",
      promptListTitle: "Lista de palabras e ideas para charadas bíblicas",
      generatorDescription:
        "Elige un grupo y actúa el prompt sin hablar. Mantén las pistas respetuosas y simples.",
      generatorButton: "Nuevo prompt bíblico",
      groups: [
        {
          id: "people",
          label: "Personas",
          description: "Figuras bíblicas conocidas.",
          prompts: ["Noé", "Moisés", "David", "Ester", "María", "Pedro"],
        },
        {
          id: "places",
          label: "Lugares",
          description: "Lugares y escenarios.",
          prompts: ["Jardín del Edén", "Jericó", "Belén", "Mar Rojo", "Monte Sinaí", "Galilea"],
        },
        {
          id: "stories",
          label: "Historias",
          description: "Escenas que se pueden actuar.",
          prompts: ["Noé construyendo el arca", "David frente a Goliat", "Jonás y el gran pez", "El buen samaritano", "La oveja perdida", "La multiplicación de los panes"],
        },
        {
          id: "actions",
          label: "Acciones",
          description: "Verbos simples para niños.",
          prompts: ["Orar", "Construir", "Pescar", "Cantar", "Compartir pan", "Encender una lámpara"],
        },
        {
          id: "animals",
          label: "Animales",
          description: "Animales de historias bíblicas.",
          prompts: ["Paloma", "Oveja", "León", "Burro", "Pez", "Camello"],
        },
      ],
      sections: [
        {
          id: "how-to-play",
          title: "Cómo jugar charadas bíblicas",
          description: "Mantén la ronda clara, respetuosa e inclusiva.",
          items: [
            "Elige una categoría según la edad y conocimiento bíblico del grupo.",
            "Deja que los más pequeños actúen animales o acciones antes de historias.",
            "En grupos de iglesia, pide que expliquen la historia después de adivinar.",
          ],
        },
        {
          id: "classroom",
          title: "Consejos para escuela dominical",
          description: "Las charadas bíblicas refuerzan historias sin convertirse en examen.",
          items: [
            "Repasa nombres difíciles antes de empezar.",
            "Empareja a un lector seguro con un actor más joven.",
            "Después de cada acierto, haz una pregunta breve sobre la historia.",
          ],
        },
      ],
      relatedTitle: "Más juegos familiares",
      relatedLinks: [
        { href: "/", label: "Generador de Charadas", description: "Prompts generales." },
        { href: "/charades-generator-for-kids/", label: "Charadas para niños", description: "Prompts simples." },
        { href: "/family-game-night-ideas/", label: "Ideas para noche familiar", description: "Planea una noche completa." },
        { href: "/pictionary-word-generator/", label: "Generador Pictionary", description: "Dibuja los prompts." },
      ],
      faqTitle: "Preguntas frecuentes",
      faq: [
        {
          question: "¿Qué ideas son buenas para charadas bíblicas?",
          answer:
            "Personas como Noé o Moisés, lugares como Belén, historias como David y Goliat, y acciones simples como orar o pescar.",
        },
        {
          question: "¿Sirve para escuela dominical?",
          answer:
            "Sí. Usa prompts simples para niños pequeños e historias para grupos mayores, con un breve repaso después.",
        },
        {
          question: "¿Puedo usarlo en una noche familiar?",
          answer:
            "Sí. Los prompts son familiares y funcionan para grupos de edades mezcladas.",
        },
      ],
    },
    fr: {
      path: "/bible-charades",
      title: "Jeu de Mime Biblique - Mots et Idées pour la Famille",
      description: "Jouez au jeu de mime biblique avec des personnages, des lieux, des récits, des actions et des animaux pour l'école du dimanche et la famille.",
      keywords: [
        "mime biblique",
        "mots mime biblique",
        "idées mime biblique",
        "jeux pour église",
        "jeux chrétiens en famille"
      ],
      heroLabel: "Idées de mime inspirées de la foi",
      heroTitle: "Mime Biblique",
      heroDescription: "Utilisez des personnages, des lieux, des histoires et des animaux bibliques pour un jeu de mime respectueux en famille ou au catéchisme.",
      primaryCta: "Choisir un mot biblique",
      copyLabel: "Copier le mot",
      copiedLabel: "Copié !",
      generatorTitle: "Générateur de mimes bibliques",
      promptListTitle: "Liste d'idées de mimes pour le jeu de mime biblique",
      generatorDescription: "Sélectionnez une catégorie et mimez le mot en silence. Restez respectueux et simple pour tous les âges.",
      generatorButton: "Nouveau mot biblique",
      groups: [
        {
          id: "people",
          label: "Personnages",
          description: "Figures bibliques incontournables.",
          prompts: ["Noé", "Moïse", "David", "Esther", "Marie", "Pierre"]
        },
        {
          id: "places",
          label: "Lieux",
          description: "Lieux marquants des Écritures.",
          prompts: ["Jardin d'Éden", "Jéricho", "Bethléem", "Mer Rouge", "Mont Sinaï", "Galilée"]
        },
        {
          id: "stories",
          label: "Histoires",
          description: "Récits célèbres à mimer.",
          prompts: ["Noé construisant l'arche", "David face à Goliath", "Jonas et la baleine", "Le bon Samaritain", "La brebis égarée", "La multiplication des pains"]
        },
        {
          id: "actions",
          label: "Actions",
          description: "Verbes simples pour les enfants.",
          prompts: ["Prier", "Construire", "Pêcher", "Chanter", "Partager le pain", "Allumer une lampe"]
        },
        {
          id: "animals",
          label: "Animaux",
          description: "Animaux des récits bibliques.",
          prompts: ["Colombe", "Brebis", "Lion", "Âne", "Poisson", "Chameau"]
        }
      ],
      sections: [
        {
          id: "how-to-play",
          title: "Comment Jouer au Mime Biblique",
          description: "Gardez le jeu clair, respectueux et accessible à tous.",
          items: [
            "Choisissez les catégories en fonction de l'âge et de la culture biblique du groupe.",
            "Laissez les plus jeunes mimer les animaux ou les actions avant de passer aux récits complexes.",
            "En groupe de catéchisme, demandez à l'acteur d'expliquer brièvement l'histoire après que le mot a été trouvé."
          ]
        },
        {
          id: "classroom",
          title: "Conseils pour le Catéchisme et l'École du Dimanche",
          description: "Le mime biblique renforce l'apprentissage des histoires sans être perçu comme un contrôle.",
          items: [
            "Passez en revue les noms propres difficiles avant de lancer la partie.",
            "Associez un lecteur plus âgé avec un acteur plus jeune pour un travail d'équipe fluide.",
            "Après chaque bonne réponse, posez une question simple sur le récit pour ancrer le souvenir."
          ]
        }
      ],
      relatedTitle: "Plus de Jeux en Famille",
      relatedLinks: [
        { href: "/", label: "Générateur de Mime Gratuit", description: "Générez des mots et idées au hasard." },
        { href: "/charades-generator-for-kids/", label: "Mime pour Enfants", description: "Mimes simples pour les plus petits." },
        { href: "/family-game-night-ideas/", label: "Idées de Soirées Jeux", description: "Planifiez une soirée complète." },
        { href: "/pictionary-word-generator/", label: "Générateur Pictionary", description: "Dessinez les prompts." }
      ],
      faqTitle: "Foire Aux Questions",
      faq: [
        {
          question: "Quelles sont les meilleures idées pour un mime biblique ?",
          answer: "Les personnages clés comme Noé ou Moïse, les lieux célèbres comme Bethléem, les grands récits comme David et Goliath, et des actions comme prier ou pêcher."
        },
        {
          question: "Ce jeu est-il adapté au catéchisme ?",
          answer: "Oui, tout à fait. Utilisez des mimes simples pour les petits et des histoires pour les plus grands, avec un débriefing rapide après chaque mot trouvé."
        },
        {
          question: "Puis-je y jouer lors d'une soirée familiale ?",
          answer: "Oui, les prompts sont parfaitement sains et adaptés pour réunir toutes les générations autour d'un jeu chrétien."
        }
      ]
    },
    pt: {
      path: "/bible-charades",
      title: "Mímica Bíblica - Palavras e Ideias Temáticas para a Família",
      description: "Jogue o jogo de mímica bíblica com personagens, lugares, histórias, ações e animais bíblicos para a catequese, escola dominical e família.",
      keywords: [
        "mimica biblica",
        "palavras mimica biblica",
        "ideias mimica biblica",
        "jogos para igreja",
        "jogos cristaos em familia"
      ],
      heroLabel: "Ideias de mímica inspiradas na fé",
      heroTitle: "Mímica Bíblica",
      heroDescription: "Use personagens, lugares, histórias e animais da Bíblia para um jogo de mímica respeitoso em família ou na escola dominical.",
      primaryCta: "Escolher uma palavra bíblica",
      copyLabel: "Copiar palavra",
      copiedLabel: "Copiado !",
      generatorTitle: "Gerador de mímicas bíblicas",
      promptListTitle: "Lista de ideias de mímicas para o jogo de mímica bíblica",
      generatorDescription: "Selecione uma categoria e imite a palavra em silêncio absoluto. Mantenha os gestos respeitosos e adequados.",
      generatorButton: "Nova palavra bíblica",
      groups: [
        {
          id: "people",
          label: "Personagens",
          description: "Figuras bíblicas fundamentais.",
          prompts: ["Noé", "Moisés", "Davi", "Ester", "Maria", "Pedro"]
        },
        {
          id: "places",
          label: "Lugares",
          description: "Locais marcantes das Escrituras.",
          prompts: ["Jardim do Éden", "Jericó", "Belém", "Mar Vermelho", "Monte Sinai", "Galileia"]
        },
        {
          id: "stories",
          label: "Histórias",
          description: "Relatos famosos para imitar.",
          prompts: ["Noé construindo a arca", "Davi e Golias", "Jonas e a baleia", "O bom Samaritano", "A ovelha perdida", "A multiplicação dos pães"]
        },
        {
          id: "actions",
          label: "Ações",
          description: "Verbos simples para crianças.",
          prompts: ["Orar", "Construir", "Pescar", "Cantar", "Partilhar o pão", "Acender a lâmpada"]
        },
        {
          id: "animals",
          label: "Animais",
          description: "Animais das passagens bíblicas.",
          prompts: ["Pomba", "Ovelha", "Leão", "Jumento", "Peixe", "Camelo"]
        }
      ],
      sections: [
        {
          id: "how-to-play",
          title: "Como Jogar Mímica Bíblica",
          description: "Mantenha a partida divertida, respeitosa e acessível para todos.",
          items: [
            "Escolha as categorias de acordo com a idade e o conhecimento bíblico do grupo.",
            "Deixe os menores imitarem os animais ou ações antes de passar às histórias mais complexas.",
            "Nos grupos de jovens, peça ao ator para resumir brevemente a história depois que a palavra for adivinhada."
          ]
        },
        {
          id: "classroom",
          title: "Dicas para a Escola Dominical e Catequese",
          description: "A mímica bíblica ajuda a fixar os ensinamentos das escrituras de forma lúdica e sem pressão.",
          items: [
            "Revise os nomes próprios mais difíceis antes de iniciar a rodada.",
            "Forme duplas misturando um participante mais velho e um mais novo para equilibrar o jogo.",
            "Faça uma pergunta simples sobre a passagem bíblica logo após a resposta certa ser dita."
          ]
        }
      ],
      relatedTitle: "Mais Jogos Em Família",
      relatedLinks: [
        { href: "/", label: "Gerador de Mímica Grátis", description: "Gere palavras e ideias aleatórias." },
        { href: "/charades-generator-for-kids/", label: "Mímica para Crianças", description: "Mímicas fáceis para os pequenos." },
        { href: "/family-game-night-ideas/", label: "Ideias de Noite de Jogos", description: "Planeje uma noite completa de diversão." },
        { href: "/pictionary-word-generator/", label: "Gerador Pictionary", description: "Gere prompts para desenhar." }
      ],
      faqTitle: "Perguntas Frequentes",
      faq: [
        {
          question: "Quais são as melhores ideias para uma mímica bíblica ?",
          answer: "Personagens chaves como Noé ou Moisés, lugares famosos como Belém, grandes relatos como Davi e Golias, e ações simples como orar."
        },
        {
          question: "Este jogo é apropriado para a catequese ?",
          answer: "Sim, absolutamente. Use mímicas fáceis com as crianças e relatos com os mais velhos, fazendo um breve resumo da lição após cada acerto."
        },
        {
          question: "Posso jogar em uma noite de jogos com a família ?",
          answer: "Sim, os temas são completamente saudáveis e adequados para unir todas as gerações da família em torno da fé."
        }
      ]
    },
    ja: {
      path: "/bible-charades",
      title: "聖書ジェスチャーゲームお題一覧 - 教会・家族向け無料出題器",
      description: "聖書の人物、場所、物語、アクション、動物などをテーマにしたジェスチャーお題を無料生成。教会学校やキリスト教家庭でのレクに最適です。",
      keywords: [
        "聖書 ジェスチャー",
        "聖書 お題",
        "教会 レクリエーション",
        "キリスト教 ゲーム"
      ],
      heroLabel: "聖書のエピソードからお題を生成",
      heroTitle: "聖書ジェスチャーゲーム",
      heroDescription: "聖書のストーリーや人物、身近な行動を使って、子どもから大人まで礼拝後や家族団らんで遊べる安全なお題セット。",
      primaryCta: "聖書お題をシャッフル",
      copyLabel: "お題をコピー",
      copiedLabel: "コピー完了！",
      generatorTitle: "聖書お題メーカー",
      promptListTitle: "聖書ジェスチャーゲームお題リスト",
      generatorDescription: "カテゴリを選び、声を出さずにジェスチャーだけでお題を当てます。聖なる物語を楽しく再現しましょう。",
      generatorButton: "新しいお題を出す",
      groups: [
        {
          id: "people",
          label: "聖書の人物",
          description: "旧約・新約聖書の登場人物。",
          prompts: ["ノア", "モーセ", "ダビデ", "エステル", "聖母マリア", "ペテロ"]
        },
        {
          id: "places",
          label: "聖書の場所",
          description: "聖書に登場する有名な土地や場所。",
          prompts: ["エデンの園", "エリコ", "ベツレヘム", "紅海", "シナイ山", "ガリラヤ"]
        },
        {
          id: "stories",
          label: "有名な物語",
          description: "聖書の有名なお話をジェスチャーで再現。",
          prompts: ["ノアの方舟を造る", "ダビデとゴリアテの戦い", "ヨナと巨大な魚", "善いサマリア人", "迷える羊", "五千人の給食（パンの奇跡）"]
        },
        {
          id: "actions",
          label: "日常の動作",
          description: "子どもでも簡単に演じられるシンプルな行動。",
          prompts: ["お祈りをする", "家を建てる", "魚を釣る", "賛美歌を歌う", "パンを分かち合う", "ともしびを灯す"]
        },
        {
          id: "animals",
          label: "聖書の動物",
          description: "エピソードに出てくる動物たち。",
          prompts: ["ハト", "羊", "ライオン", "ロバ", "クジラ", "ラクダ"]
        }
      ],
      sections: [
        {
          id: "how-to-play",
          title: "聖書ジェスチャーゲームの遊び方",
          description: "誰でも楽しめるよう、ルールを分かりやすく設定しましょう。",
          items: [
            "参加者の年齢層や聖書の知識レベルに応じて、出題カテゴリを調整します。",
            "小さなお子様がいる場合は、動物や簡単な動作のお題から始めるのがおすすめです。",
            "正解が出た後に、幹事や先生がそのエピソードの背景を30秒で簡単に説明すると、聖書の学びがさらに深まります。"
          ]
        },
        {
          id: "sunday-school",
          title: "教会学校・日曜学校での指導のコツ",
          description: "押し付けの勉強ではなく、体を使ったアクティブな学びとして活用できます。",
          items: [
            "難しい固有名詞がある場合は、ゲーム前に一度聖書を読み返す時間を設けるとスムーズです。",
            "年長の子どもと年少の子どもを同じチームにして、ペアで演技できるようにするとチームワークが育ちます。",
            "得点表をホワイトボードに大きく書き、ゲーム感覚を盛り上げましょう。"
          ]
        }
      ],
      relatedTitle: "他のゲームも楽しむ",
      relatedLinks: [
        { href: "/", label: "無料ジェスチャーゲームお題メーカー", description: "豊富な全ジャンルからランダム出題。" },
        { href: "/charades-generator-for-kids/", label: "子ども向けお題メーカー", description: "幼児・小学生向けの簡単お題。" },
        { href: "/family-game-night-ideas/", label: "家族向けゲームナイト", description: "おうち時間を盛り上げるレクアイデア。" },
        { href: "/pictionary-word-generator/", label: "Pictionaryお題メーカー", description: "お題を絵に描いて当てるゲーム。" }
      ],
      faqTitle: "よくある質問",
      faq: [
        {
          question: "聖書ジェスチャーゲームで人気のお題は何ですか？",
          answer: "ノアやモーセなどの有名な人物、ベツレヘムなどの場所、ダビデとゴリアテやノアの方舟などのエピソード、お祈りをするなどの簡単な行動です。"
        },
        {
          question: "教会学校のレクとして使えますか？",
          answer: "はい、最適なアクティビティです。小さな子どもには簡単なお題、高学年には物語のエピソードを出題し、正解後に簡単におさらいのミニ説教を入れると定着します。"
        },
        {
          question: "家庭の礼拝やレクでも遊べますか？",
          answer: "はい、道具が要らないため、食後の団らんや休日のファミリーナイトで楽しく聖書に親しむゲームとして遊んでいただけます。"
        }
      ]
    }
  },
  "halloween-party-games": {
    en: {
      path: "/halloween-party-games",
      title: "Halloween Party Games - Charades, Pictionary & Group Ideas",
      description:
        "Plan Halloween party games with spooky charades, pictionary prompts, would-you-rather questions, trivia ideas, and printable cards.",
      keywords: [
        "halloween party games",
        "halloween charades",
        "halloween pictionary",
        "halloween games for kids",
        "halloween group games",
      ],
      heroLabel: "Seasonal party game hub",
      heroTitle: "Halloween Party Games",
      heroDescription:
        "Use spooky but friendly prompts for Halloween charades, drawing rounds, question games, trivia, and printable party cards.",
      primaryCta: "Pick a Halloween game",
      copyLabel: "Copy idea",
      copiedLabel: "Copied",
      generatorTitle: "Halloween game idea picker",
      promptListTitle: "Halloween Party Games Ideas List",
      generatorDescription:
        "Choose a game type, then use the idea as a quick party round or printable prompt.",
      generatorButton: "New Halloween idea",
      groups: [
        {
          id: "charades",
          label: "Charades",
          description: "Act spooky prompts.",
          prompts: ["Witch stirring a potion", "Zombie learning to dance", "Ghost looking for glasses", "Pumpkin rolling downhill", "Vampire avoiding sunlight"],
        },
        {
          id: "pictionary",
          label: "Pictionary",
          description: "Draw Halloween words.",
          prompts: ["Haunted house", "Spider web", "Candy bag", "Black cat", "Jack-o-lantern"],
        },
        {
          id: "questions",
          label: "Questions",
          description: "Conversation prompts.",
          prompts: [
            "Would you rather visit a haunted library or a haunted bakery?",
            "Truth: What costume would you wear every year?",
            "Would you rather carve pumpkins or decorate cookies?",
            "Truth: What Halloween candy disappears first?",
          ],
        },
        {
          id: "trivia",
          label: "Trivia",
          description: "Quick quiz ideas.",
          prompts: [
            "Name three orange Halloween things.",
            "What do people usually say when asking for candy?",
            "Name a classic spooky animal.",
            "What month is Halloween in?",
          ],
        },
      ],
      sections: [
        {
          id: "party-plan",
          title: "Halloween party game plan",
          description: "A simple plan works for classrooms, families, and casual parties.",
          items: [
            "Start with Halloween pictionary so guests can join while arriving.",
            "Move into charades for higher energy.",
            "Use trivia or would-you-rather questions between rounds.",
            "Print a small card set for tables or classroom stations.",
          ],
        },
        {
          id: "safe-spooky",
          title: "Keep it spooky, not too scary",
          description: "Friendly Halloween games reach more families and classrooms.",
          items: [
            "Use pumpkins, costumes, candy, and silly monsters for younger groups.",
            "Avoid graphic horror prompts on family and school pages.",
            "Offer team play so shy players can act or draw with help.",
          ],
        },
      ],
      relatedTitle: "More Halloween-ready tools",
      relatedLinks: [
        { href: "/christmas-party-games/", label: "Christmas Party Games", description: "Plan the next holiday event." },
        { href: "/pictionary-word-generator/", label: "Pictionary Word Generator", description: "Draw seasonal prompts." },
        { href: "/", label: "Charades Generator", description: "Generate acting prompts." },
        { href: "/would-you-rather-generator/", label: "Would You Rather Generator", description: "Add question rounds." },
      ],
      faqTitle: "Halloween party games FAQ",
      faq: [
        {
          question: "What are easy Halloween party games?",
          answer:
            "Halloween charades, pictionary, would-you-rather questions, trivia, and printable prompt cards are easy because they need little setup.",
        },
        {
          question: "Can these games work for kids?",
          answer:
            "Yes. Use friendly prompts such as pumpkins, costumes, candy, ghosts, and silly monsters instead of scary horror prompts.",
        },
        {
          question: "How do I make Halloween games printable?",
          answer:
            "Copy the prompts into a document or print the page, then cut the prompts into cards for teams or classroom stations.",
        },
      ],
    },
    es: {
      path: "/halloween-party-games",
      title: "Juegos para Fiesta de Halloween - Charadas y Pictionary",
      description:
        "Planea juegos de Halloween con charadas, pictionary, preguntas de qué prefieres, trivia y cartas imprimibles.",
      keywords: [
        "juegos halloween fiesta",
        "charadas halloween",
        "pictionary halloween",
        "juegos halloween niños",
        "juegos halloween grupo",
      ],
      heroLabel: "Hub de juegos de temporada",
      heroTitle: "Juegos para Fiesta de Halloween",
      heroDescription:
        "Usa prompts espeluznantes pero amigables para charadas, dibujo, preguntas, trivia y cartas imprimibles.",
      primaryCta: "Elegir juego de Halloween",
      copyLabel: "Copiar idea",
      copiedLabel: "Copiado",
      generatorTitle: "Selector de juegos de Halloween",
      promptListTitle: "Lista de ideas para juegos de Halloween",
      generatorDescription:
        "Elige un tipo de juego y usa la idea como ronda rápida o prompt imprimible.",
      generatorButton: "Nueva idea de Halloween",
      groups: [
        {
          id: "charades",
          label: "Charadas",
          description: "Actúa prompts espeluznantes.",
          prompts: ["Bruja preparando una poción", "Zombie aprendiendo a bailar", "Fantasma buscando gafas", "Calabaza rodando", "Vampiro evitando el sol"],
        },
        {
          id: "pictionary",
          label: "Pictionary",
          description: "Dibuja palabras de Halloween.",
          prompts: ["Casa encantada", "Telaraña", "Bolsa de dulces", "Gato negro", "Calabaza tallada"],
        },
        {
          id: "questions",
          label: "Preguntas",
          description: "Prompts de conversación.",
          prompts: [
            "¿Prefieres visitar una biblioteca encantada o una panadería encantada?",
            "Verdad: ¿Qué disfraz usarías cada año?",
            "¿Prefieres tallar calabazas o decorar galletas?",
            "Verdad: ¿Qué dulce de Halloween desaparece primero?",
          ],
        },
        {
          id: "trivia",
          label: "Trivia",
          description: "Ideas rápidas de preguntas.",
          prompts: [
            "Nombra tres cosas naranjas de Halloween.",
            "¿Qué frase se dice para pedir dulces?",
            "Nombra un animal clásico de Halloween.",
            "¿En qué mes es Halloween?",
          ],
        },
      ],
      sections: [
        {
          id: "party-plan",
          title: "Plan de juegos para Halloween",
          description: "Un plan simple sirve para clases, familias y fiestas casuales.",
          items: [
            "Empieza con pictionary de Halloween mientras llegan los invitados.",
            "Pasa a charadas para subir la energía.",
            "Usa trivia o qué prefieres entre rondas.",
            "Imprime cartas pequeñas para mesas o estaciones de clase.",
          ],
        },
        {
          id: "safe-spooky",
          title: "Espeluznante, pero no demasiado",
          description: "Los juegos amigables funcionan mejor para familias y aulas.",
          items: [
            "Usa calabazas, disfraces, dulces y monstruos graciosos para niños.",
            "Evita prompts de terror gráfico en páginas familiares o escolares.",
            "Permite jugar en equipo para que los tímidos reciban ayuda.",
          ],
        },
      ],
      relatedTitle: "Más herramientas de temporada",
      relatedLinks: [
        { href: "/christmas-party-games/", label: "Juegos de Navidad", description: "Planea el siguiente evento." },
        { href: "/pictionary-word-generator/", label: "Generador Pictionary", description: "Dibuja prompts de temporada." },
        { href: "/", label: "Generador de Charadas", description: "Genera prompts para actuar." },
        { href: "/would-you-rather-generator/", label: "Generador de Qué Prefieres", description: "Agrega preguntas." },
      ],
      faqTitle: "Preguntas frecuentes",
      faq: [
        {
          question: "¿Qué juegos fáciles hay para Halloween?",
          answer:
            "Charadas, pictionary, preguntas de qué prefieres, trivia y cartas imprimibles son fáciles porque requieren poca preparación.",
        },
        {
          question: "¿Funcionan para niños?",
          answer:
            "Sí. Usa prompts amigables como calabazas, disfraces, dulces, fantasmas y monstruos graciosos.",
        },
        {
          question: "¿Cómo hago juegos imprimibles?",
          answer:
            "Copia los prompts en un documento o imprime la página y recorta tarjetas para equipos o estaciones.",
        },
      ],
    },
  },
  "christmas-party-games": {
    en: {
      path: "/christmas-party-games",
      title: "Christmas Party Games - Charades, Pictionary & Printable Ideas",
      description:
        "Plan Christmas party games with holiday charades, pictionary words, would-you-rather questions, trivia, and printable cards.",
      keywords: [
        "christmas party games",
        "christmas games",
        "christmas charades",
        "christmas pictionary",
        "holiday party games",
      ],
      heroLabel: "Holiday party game hub",
      heroTitle: "Christmas Party Games",
      heroDescription:
        "Build a festive game plan with Christmas charades, drawing prompts, question rounds, trivia, and printable card ideas.",
      primaryCta: "Pick a Christmas game",
      copyLabel: "Copy idea",
      copiedLabel: "Copied",
      generatorTitle: "Christmas game idea picker",
      promptListTitle: "Christmas Party Games Ideas List",
      generatorDescription:
        "Choose a holiday game type and get a quick prompt for your party, classroom, or family gathering.",
      generatorButton: "New Christmas idea",
      groups: [
        {
          id: "charades",
          label: "Charades",
          description: "Act festive prompts.",
          prompts: ["Wrapping a present", "Santa stuck in a chimney", "Building a snowman", "Caroling in the cold", "Untangling Christmas lights"],
        },
        {
          id: "pictionary",
          label: "Pictionary",
          description: "Draw holiday words.",
          prompts: ["Gingerbread house", "Candy cane", "Snow globe", "Christmas tree", "Reindeer"],
        },
        {
          id: "questions",
          label: "Questions",
          description: "Holiday conversation prompts.",
          prompts: [
            "Would you rather decorate the tree or wrap all the gifts?",
            "Truth: What holiday food do you look forward to most?",
            "Would you rather have snow on Christmas or a sunny holiday trip?",
            "Truth: What Christmas song gets stuck in your head?",
          ],
        },
        {
          id: "trivia",
          label: "Trivia",
          description: "Simple quiz rounds.",
          prompts: [
            "Name three things people hang on a Christmas tree.",
            "What color is Rudolph's nose?",
            "Name a common Christmas dessert.",
            "What do people often leave out for Santa?",
          ],
        },
      ],
      sections: [
        {
          id: "party-plan",
          title: "Christmas party game plan",
          description: "Use a mix of active, creative, and conversation games.",
          items: [
            "Start with Christmas would-you-rather questions while people settle in.",
            "Run Christmas charades as the main group activity.",
            "Add pictionary cards for smaller teams or classroom tables.",
            "Finish with trivia or a quick printable card exchange.",
          ],
        },
        {
          id: "printable",
          title: "Printable Christmas game ideas",
          description: "Printable prompts make holiday hosting easier.",
          items: [
            "Copy charades prompts into cards for a bowl draw.",
            "Print pictionary words for drawing stations.",
            "Use question prompts as table conversation cards.",
            "Create a one-page party plan with three short rounds.",
          ],
        },
      ],
      relatedTitle: "Holiday game tools",
      relatedLinks: [
        { href: "/christmas-charades-generator/", label: "Christmas Charades Generator", description: "Generate festive acting prompts." },
        { href: "/pictionary-word-generator/", label: "Pictionary Word Generator", description: "Draw holiday words." },
        { href: "/family-game-night-ideas/", label: "Family Game Night Ideas", description: "Build a complete plan." },
        { href: "/truth-or-dare-generator/", label: "Truth or Dare Generator", description: "Add clean party prompts." },
      ],
      faqTitle: "Christmas party games FAQ",
      faq: [
        {
          question: "What are good Christmas party games?",
          answer:
            "Christmas charades, pictionary, would-you-rather questions, trivia, printable prompt cards, and team guessing games are easy options for most groups.",
        },
        {
          question: "Can these games work at work or school?",
          answer:
            "Yes. Keep prompts clean, split into teams, and use trivia or pictionary if the group is shy about acting.",
        },
        {
          question: "How many Christmas prompts should I prepare?",
          answer:
            "Prepare 20 to 40 prompts for a standard party. If you have many teams, print extra cards so prompts do not repeat too quickly.",
        },
      ],
    },
    es: {
      path: "/christmas-party-games",
      title: "Juegos para Fiesta de Navidad - Charadas e imprimibles",
      description:
        "Planea juegos navideños con charadas, pictionary, preguntas de qué prefieres, trivia y cartas imprimibles.",
      keywords: [
        "juegos fiesta navidad",
        "juegos navideños",
        "charadas navidad",
        "pictionary navidad",
        "juegos fiesta familiar navidad",
      ],
      heroLabel: "Hub de juegos navideños",
      heroTitle: "Juegos para Fiesta de Navidad",
      heroDescription:
        "Crea un plan festivo con charadas navideñas, dibujo, preguntas, trivia e ideas de cartas imprimibles.",
      primaryCta: "Elegir juego navideño",
      copyLabel: "Copiar idea",
      copiedLabel: "Copiado",
      generatorTitle: "Selector de juegos navideños",
      promptListTitle: "Lista de ideas para juegos de Navidad",
      generatorDescription:
        "Elige un tipo de juego y recibe un prompt rápido para fiesta, clase o reunión familiar.",
      generatorButton: "Nueva idea navideña",
      groups: [
        {
          id: "charades",
          label: "Charadas",
          description: "Actúa prompts festivos.",
          prompts: ["Envolver un regalo", "Santa atrapado en la chimenea", "Construir un muñeco de nieve", "Cantar villancicos con frío", "Desenredar luces navideñas"],
        },
        {
          id: "pictionary",
          label: "Pictionary",
          description: "Dibuja palabras navideñas.",
          prompts: ["Casa de jengibre", "Bastón de caramelo", "Bola de nieve", "Árbol de Navidad", "Reno"],
        },
        {
          id: "questions",
          label: "Preguntas",
          description: "Conversación navideña.",
          prompts: [
            "¿Prefieres decorar el árbol o envolver todos los regalos?",
            "Verdad: ¿Qué comida navideña esperas más?",
            "¿Prefieres nieve en Navidad o un viaje soleado?",
            "Verdad: ¿Qué canción navideña se te pega?",
          ],
        },
        {
          id: "trivia",
          label: "Trivia",
          description: "Rondas simples de preguntas.",
          prompts: [
            "Nombra tres cosas que se cuelgan en un árbol de Navidad.",
            "¿De qué color es la nariz de Rudolph?",
            "Nombra un postre navideño común.",
            "¿Qué suelen dejar para Santa?",
          ],
        },
      ],
      sections: [
        {
          id: "party-plan",
          title: "Plan de juegos navideños",
          description: "Mezcla juegos activos, creativos y de conversación.",
          items: [
            "Empieza con preguntas de qué prefieres mientras llegan todos.",
            "Usa charadas navideñas como actividad principal.",
            "Agrega cartas de pictionary para equipos pequeños o mesas de clase.",
            "Termina con trivia o una ronda rápida de tarjetas imprimibles.",
          ],
        },
        {
          id: "printable",
          title: "Ideas navideñas imprimibles",
          description: "Los prompts imprimibles facilitan dirigir la fiesta.",
          items: [
            "Copia prompts de charadas en tarjetas para sacar de un bol.",
            "Imprime palabras de pictionary para estaciones de dibujo.",
            "Usa preguntas como cartas de conversación en la mesa.",
            "Crea un plan de una página con tres rondas cortas.",
          ],
        },
      ],
      relatedTitle: "Herramientas navideñas",
      relatedLinks: [
        { href: "/christmas-charades-generator/", label: "Generador de Charadas Navideñas", description: "Prompts festivos para actuar." },
        { href: "/pictionary-word-generator/", label: "Generador Pictionary", description: "Dibuja palabras navideñas." },
        { href: "/family-game-night-ideas/", label: "Ideas para noche familiar", description: "Arma un plan completo." },
        { href: "/truth-or-dare-generator/", label: "Generador de Verdad o Reto", description: "Agrega prompts limpios." },
      ],
      faqTitle: "Preguntas frecuentes",
      faq: [
        {
          question: "¿Qué juegos son buenos para una fiesta de Navidad?",
          answer:
            "Charadas navideñas, pictionary, qué prefieres, trivia, cartas imprimibles y juegos de adivinar por equipos funcionan bien.",
        },
        {
          question: "¿Sirven para trabajo o escuela?",
          answer:
            "Sí. Mantén prompts limpios, divide en equipos y usa trivia o pictionary si el grupo es tímido para actuar.",
        },
        {
          question: "¿Cuántos prompts navideños preparo?",
          answer:
            "Prepara de 20 a 40 prompts para una fiesta normal. Si hay muchos equipos, imprime más cartas para evitar repeticiones.",
        },
      ],
    },
  },
  "celebrity-charades-generator": {
    en: {
      path: "/celebrity-charades-generator",
      title: "Random Celebrity Generator - Famous People Charades & Ideas",
      description: "Generate random famous people and celebrities for charades, pictionary, or party games. Hand-curated list of actors, singers, historical figures, and characters.",
      keywords: [
        "random celebrity generator",
        "random famous people",
        "random famous person",
        "famous people generator",
        "celebrity charades ideas"
      ],
      heroLabel: "Free party game tool",
      heroTitle: "Random Celebrity Generator",
      heroDescription: "Generate random famous people and celebrities for charades, pictionary, or icebreakers. Filter by category to find the perfect star to mimic.",
      primaryCta: "Generate celebrity",
      copyLabel: "Copy name",
      copiedLabel: "Copied",
      generatorTitle: "Pick a celebrity category",
      promptListTitle: "Celebrity & Famous People Prompts List",
      generatorDescription: "Select a group to pull hand-selected actors, pop stars, historical figures, or fictional characters. Perfect for all party groups.",
      generatorButton: "New celebrity",
      groups: [
        {
          id: "actors",
          label: "Actors & Actresses",
          description: "Famous Hollywood stars and icons.",
          prompts: [
            "Johnny Depp", "Angelina Jolie", "Leonardo DiCaprio", "Brad Pitt", 
            "Tom Cruise", "Scarlett Johansson", "Will Smith", "Jennifer Lawrence",
            "Robert Downey Jr.", "Meryl Streep", "Dwayne 'The Rock' Johnson", "Emma Watson"
          ]
        },
        {
          id: "singers",
          label: "Musicians & Pop Stars",
          description: "World-class singers, rappers, and musical groups.",
          prompts: [
            "Taylor Swift", "Michael Jackson", "Beyoncé", "Elvis Presley",
            "Justin Bieber", "Madonna", "Billie Eilish", "Eminem",
            "Ed Sheeran", "Ariana Grande", "Freddie Mercury", "Rihanna"
          ]
        },
        {
          id: "historical",
          label: "Historical Figures",
          description: "Famous people who shaped human history.",
          prompts: [
            "Albert Einstein", "Abraham Lincoln", "William Shakespeare", "Isaac Newton",
            "Julius Caesar", "Leonardo da Vinci", "Cleopatra", "Winston Churchill",
            "George Washington", "Marie Curie", "Mozart", "Thomas Edison"
          ]
        },
        {
          id: "characters",
          label: "Fictional Characters",
          description: "Well-known heroes, villains, and cartoon icons.",
          prompts: [
            "Harry Potter", "Spider-Man", "Batman", "Mickey Mouse",
            "Sherlock Holmes", "Darth Vader", "Barbie", "Jack Sparrow",
            "Shrek", "Mario", "Pikachu", "SpongeBob SquarePants"
          ]
        }
      ],
      sections: [
        {
          id: "how-to",
          title: "How to Play Celebrity Charades",
          description: "Acting out famous people is highly entertaining because of their unique traits.",
          items: [
            "Actor must mimic famous poses, signature movie scenes, or catchphrases (without talking).",
            "Use signature styles: Taylor Swift holding a guitar, Einstein thinking, or Spider-Man shooting webs.",
            "You can mime their famous roles if players don't know their real-life personality.",
            "Add a house rule: Team gets 1 bonus point if they guess the celebrity and name one of their works."
          ]
        },
        {
          id: "party-tips",
          title: "Party Tips & Variations",
          description: "Elevate your game night with these fun celebrity game modes.",
          items: [
            "Celebrity Heads: Write a celebrity name on a sticky note and stick it to a player's forehead. They must guess who they are by asking yes/no questions.",
            "Time Machine Mode: Limit the generator to the 'Historical Figures' category for a historical trivia vibe.",
            "Printable cards: Copy names onto slips of paper, fold them, and pull them from a hat for a classic offline party setup."
          ]
        }
      ],
      relatedTitle: "More Fun Generators",
      relatedLinks: [
        { href: "/", label: "Free Charades Generator", description: "Generate random words and ideas." },
        { href: "/movie-charades-generator/", label: "Movie Charades Generator", description: "Get famous film prompts." },
        { href: "/funny-charades-for-adults/", label: "Funny Adult Charades", description: "Awkward and hilarious prompts." },
        { href: "/charades-generator-for-kids/", label: "Kids Charades Generator", description: "Simple family-friendly ideas." }
      ],
      faqTitle: "Frequently Asked Questions",
      faq: [
        {
          question: "How do you act out a celebrity in charades?",
          answer: "Focus on their famous habits, signatures, or roles. For singers, mimic holding a microphone or their signature dance. For actors, mime their most famous movie characters."
        },
        {
          question: "What if players don't know the celebrity?",
          answer: "You can skip the prompt or try acting out the words in their name (e.g., mime a 'taylor' sewing and then moving 'swiftly')."
        },
        {
          question: "Can I print these celebrity cards?",
          answer: "Yes, you can copy the list directly or print the page to cut out physical slips of paper for your next party."
        }
      ]
    },
    es: {
      path: "/celebrity-charades-generator",
      title: "Generador de Famosos Aleatorio - Personajes y Celebridades",
      description: "Genera famosos y celebridades aleatorias para charadas, pictionary o juegos de mesa. Lista curada de actores, cantantes, personajes históricos y de ficción.",
      keywords: [
        "generador de famosos",
        "charadas de famosos",
        "personajes famosos aleatorios",
        "celebridades para charadas",
        "ideas de famosos para actuar"
      ],
      heroLabel: "Herramienta gratuita para fiestas",
      heroTitle: "Generador de Famosos Aleatorio",
      heroDescription: "Genera celebridades y personajes famosos para charadas, pictionary o rompehielos. Filtra por categoría para encontrar la estrella perfecta.",
      primaryCta: "Generar famoso",
      copyLabel: "Copiar nombre",
      copiedLabel: "Copiado",
      generatorTitle: "Elige una categoría de famosos",
      promptListTitle: "Lista de ideas de famosos y celebridades",
      generatorDescription: "Selecciona un grupo para obtener actores, estrellas del pop, figuras históricas o personajes de ficción seleccionados a mano.",
      generatorButton: "Nuevo famoso",
      groups: [
        {
          id: "actors",
          label: "Actores y Actrices",
          description: "Estrellas famosas de Hollywood y del cine mundial.",
          prompts: [
            "Johnny Depp", "Angelina Jolie", "Leonardo DiCaprio", "Brad Pitt", 
            "Tom Cruise", "Scarlett Johansson", "Will Smith", "Jennifer Lawrence",
            "Robert Downey Jr.", "Penélope Cruz", "Dwayne 'La Roca' Johnson", "Emma Watson"
          ]
        },
        {
          id: "singers",
          label: "Músicos y Estrellas Pop",
          description: "Cantantes, raperos y grupos de música de clase mundial.",
          prompts: [
            "Shakira", "Michael Jackson", "Taylor Swift", "Luis Miguel",
            "Bad Bunny", "Rosalía", "Elvis Presley", "Eminem",
            "Lionel Messi", "Karol G", "Freddie Mercury", "Rihanna"
          ]
        },
        {
          id: "historical",
          label: "Figuras Históricas",
          description: "Personajes famosos que cambiaron el rumbo de la historia.",
          prompts: [
            "Albert Einstein", "Cristóbal Colón", "William Shakespeare", "Isaac Newton",
            "Julio César", "Leonardo da Vinci", "Cleopatra", "Frida Kahlo",
            "Simón Bolívar", "Marie Curie", "Mozart", "Thomas Edison"
          ]
        },
        {
          id: "characters",
          label: "Personajes de Ficción",
          description: "Héroes, villanos e iconos animados muy populares.",
          prompts: [
            "Harry Potter", "Spider-Man", "Batman", "Mickey Mouse",
            "Don Quijote", "Darth Vader", "Barbie", "Jack Sparrow",
            "Shrek", "Mario Bros", "Pikachu", "Bob Esponja"
          ]
        }
      ],
      sections: [
        {
          id: "how-to",
          title: "Cómo jugar charadas de famosos",
          description: "Actuar celebridades es muy divertido debido a sus gestos únicos y distintivos.",
          items: [
            "El actor debe imitar gestos característicos, poses o escenas famosas (sin emitir sonidos).",
            "Usa sus firmas: Shakira moviendo las caderas, Einstein pensando pensativo, o Spider-Man lanzando telarañas.",
            "Si no conocen su personalidad real, puedes actuar las películas o papeles más conocidos del actor.",
            "Agrega una regla: El equipo gana 1 punto extra si adivina el famoso y menciona una de sus obras o películas."
          ]
        },
        {
          id: "party-tips",
          title: "Ideas para tus fiestas",
          description: "Dale un giro divertido a tu noche de juegos con estas dinámicas.",
          items: [
            "Famoso en la Frente: Escribe un nombre en un papel y pégalo en la frente de un jugador. Debe adivinar quién es haciendo preguntas de sí o no.",
            "Máquina del Tiempo: Limita el generador al grupo 'Figuras Históricas' para un ambiente de trivia histórica.",
            "Tarjetas para imprimir: Copia los nombres en tiras de papel, dóblalas y sácalas de un sombrero para jugar al estilo tradicional sin pantallas."
          ]
        }
      ],
      relatedTitle: "Más generadores divertidos",
      relatedLinks: [
        { href: "/", label: "Generador de Charadas Gratis", description: "Genera palabras e ideas al azar." },
        { href: "/movie-charades-generator/", label: "Charadas de Películas", description: "Consigue prompts de cine." },
        { href: "/funny-charades-for-adults/", label: "Charadas para Adultos", description: "Prompts divertidos y atrevidos." },
        { href: "/charades-generator-for-kids/", label: "Charadas para Niños", description: "Ideas sencillas para toda la familia." }
      ],
      faqTitle: "Preguntas frecuentes",
      faq: [
        {
          question: "¿Cómo imitar a un famoso en charadas?",
          answer: "Enfócate en sus hábitos conocidos o papeles icónicos. Para cantantes, imita sostener un micrófono o sus pasos de baile. Para actores, imita sus personajes más reconocibles."
        },
        {
          question: "¿Qué pasa si nadie conoce a la celebridad?",
          answer: "Puedes saltar el prompt o intentar actuar las palabras que forman su nombre por separado."
        },
        {
          question: "¿Puedo imprimir estas tarjetas de famosos?",
          answer: "Sí, puedes copiar la lista generada directamente o imprimir esta página para recortar tarjetas físicas para tu reunión."
        }
      ]
    },
    fr: {
      path: "/celebrity-charades-generator",
      title: "Générateur Aléatoire de Célébrités - Personnages et Famosos",
      description: "Générateur gratuit de célébrités pour le jeu de mime ou Pictionary. Liste de chanteurs, acteurs, personnages historiques et fictifs.",
      keywords: [
        "générateur de célébrités",
        "mime célébrités",
        "personnages célèbres aléatoires",
        "idées de mimes célébrités"
      ],
      heroLabel: "Outil de fête gratuit",
      heroTitle: "Générateur Aléatoire de Célébrités",
      heroDescription: "Générez des célébrités et des personnages connus instantanément. Idéal pour animer vos soirées de jeux ou créer des cartes physiques.",
      primaryCta: "Générer des célébrités",
      copyLabel: "Copier la liste",
      copiedLabel: "Copié !",
      generatorTitle: "Sélectionnez votre catégorie",
      promptListTitle: "Liste de célébrités pour le mime",
      generatorDescription: "Sélectionnez un pack ou mélangez les chanteurs populaires, les acteurs hollywoodiens, les figures historiques et les personnages fictifs.",
      generatorButton: "Nouvelle célébrité",
      groups: [
        {
          id: "actors",
          label: "Acteurs & Actrices",
          description: "Stars de cinéma célèbres.",
          prompts: ["Brad Pitt", "Angelina Jolie", "Leonardo DiCaprio", "Marion Cotillard", "Omar Sy", "Johnny Depp"]
        },
        {
          id: "singers",
          label: "Chanteurs & Musiciens",
          description: "Artistes musicaux et pop stars.",
          prompts: ["Céline Dion", "Michael Jackson", "Beyoncé", "Stromae", "Angèle", "David Guetta"]
        },
        {
          id: "historical",
          label: "Personnages Historiques",
          description: "Figures marquantes de l'histoire.",
          prompts: ["Napoléon Bonaparte", "Marie Curie", "Albert Einstein", "Cléopâtre", "Léonard de Vinci"]
        },
        {
          id: "fictional",
          label: "Personnages Fictifs",
          description: "Héros célèbres de fiction.",
          prompts: ["Harry Potter", "Sherlock Holmes", "Spider-Man", "Batman", "Cendrillon"]
        }
      ],
      sections: [
        {
          id: "how-to",
          title: "Comment Jouer aux Mimes de Célébrités",
          description: "Suivez nos conseils pour des parties pleines de rires.",
          items: [
            "Divisez votre groupe en équipes de taille équivalente.",
            "L'acteur doit faire deviner la célébrité par le geste, sans émettre de son.",
            "Réglez un temps limite de 60 secondes par candidat."
          ]
        },
        {
          id: "tips",
          title: "Idées de Jeux pour vos Fêtes",
          description: "Dynamisez vos soirées avec ces variantes amusantes.",
          items: [
            "Célébrité sur le Front : Écrivez un nom sur un post-it collé sur le front d'un joueur, qui doit deviner qui il est par des questions fermées (oui/non).",
            "Machine à remonter le temps : Restreignez le générateur aux 'Figures Historiques' pour une ambiance culturelle.",
            "Cartes physiques : Imprimez cette page et découpez les noms pour jouer de façon traditionnelle sans écrans."
          ]
        }
      ],
      relatedTitle: "Plus de Générateurs Amusants",
      relatedLinks: [
        { href: "/", label: "Générateur de Mime Gratuit", description: "Générez des mots et idées au hasard." },
        { href: "/movie-charades-generator/", label: "Mime Cinéma", description: "Mimes de films et classiques." },
        { href: "/funny-charades-for-adults/", label: "Mime pour Adultes", description: "Mimes hilarants et décalés." },
        { href: "/charades-generator-for-kids/", label: "Mime pour Enfants", description: "Idées simples pour toute la famille." }
      ],
      faqTitle: "Foire Aux Questions",
      faq: [
        {
          question: "Comment imiter une célébrité sans parler ?",
          answer: "Concentrez-vous sur leurs habitudes marquantes ou rôles iconiques. Pour les chanteurs, mimez un micro ou un pas de danse célèbre. Pour les acteurs, mimez leur personnage le plus connu."
        },
        {
          question: "Que faire si un joueur ne connaît pas la célébrité ?",
          answer: "Vous pouvez passer au mot suivant ou essayer de mimer chaque partie du nom séparément."
        },
        {
          question: "Puis-je imprimer ces cartes de célébrités ?",
          answer: "Oui ! Copiez simplement la liste générée ou utilisez le bouton d'impression pour découper des cartes de jeu physiques."
        }
      ]
    },
    pt: {
      path: "/celebrity-charades-generator",
      title: "Gerador de Celebridades para Mímica - Famosos e Personagens",
      description: "Gerador gratuito de celebridades para mímica ou Pictionary. Encontre cantores, atores, atletas, figuras históricas e personagens fictícios.",
      keywords: [
        "gerador de celebridades",
        "mimica celebridades",
        "famosos para mimica",
        "ideias mimica famosos"
      ],
      heroLabel: "Nomes de famosos para seu jogo",
      heroTitle: "Mímica de Celebridades",
      heroDescription: "Gere cantores, atores, atletas e personagens históricos e fictícios para animar o seu jogo de mímica ou Pictionary com amigos.",
      primaryCta: "Escolher um famoso",
      copyLabel: "Copiar nome",
      copiedLabel: "Copiado !",
      generatorTitle: "Gerador aleatório de famosos",
      promptListTitle: "Lista de famosos e celebridades para mímica",
      generatorDescription: "Escolha uma categoria e imite os trejeitos marcantes, poses ou trabalhos conhecidos da celebridade sem emitir som.",
      generatorButton: "Novo famoso",
      groups: [
        {
          id: "musicians",
          label: "Cantores & Músicos",
          description: "Estrelas da música nacional e internacional.",
          prompts: ["Anitta", "Roberto Carlos", "Ivete Sangalo", "Michael Jackson", "Beyoncé", "Madonna"]
        },
        {
          id: "actors",
          label: "Atores & Atrizes",
          description: "Estrelas da TV, cinema e novelas.",
          prompts: ["Fernanda Montenegro", "Lázaro Ramos", "Selton Mello", "Brad Pitt", "Will Smith", "Angelina Jolie"]
        },
        {
          id: "athletes",
          label: "Atletas",
          description: "Ídolos do esporte mundial.",
          prompts: ["Pelé", "Neymar", "Ayrton Senna", "Marta", "Lionel Messi", "Cristiano Ronaldo"]
        },
        {
          id: "historical",
          label: "Históricos & Fictícios",
          description: "Figuras da história e ficção.",
          prompts: ["Dom Pedro I", "Albert Einstein", "Sherlock Holmes", "Harry Potter", "Batman", "Coringa"]
        }
      ],
      sections: [
        {
          id: "how-to-play",
          title: "Como Imitar Celebridades Sem Falar",
          description: "Mantenha o foco nos maneirismos físicos, gestos de palco e papéis icônicos da celebridade.",
          items: [
            "Para cantores, imite a performance de palco, passos de dance clássicos ou segurar o microfone.",
            "Para atletas, faça o gesto característico de comemoração ou a simulação do esporte que praticam.",
            "Evite soletrar as letras do nome; prefira focar nos traços físicos e roupas marcantes."
          ]
        },
        {
          id: "variations",
          title: "Variantes de Mímica de Famosos",
          description: "Crie novas dinâmicas para o seu grupo usando estas regras alternativas.",
          items: [
            "Quem sou eu ?: Escreva o nome em uma fita e cole na testa do jogador. Ele deve fazer perguntas para a equipe adivinhar quem ele é.",
            "Estilo Imagem e Ação: Permita que o jogador escolha entre fazer mímica ou desenhar a celebridade no quadro.",
            "Modo Rápido: Defina 30 segundos por famoso para aumentar a adrenalina e dar risadas rápidas."
          ]
        }
      ],
      relatedTitle: "Mais Geradores Divertidos",
      relatedLinks: [
        { href: "/", label: "Gerador de Mímica Grátis", description: "Gere ideias e palavras aleatórias." },
        { href: "/movie-charades-generator/", label: "Mímica de Cinema", description: "Encontre nomes de filmes famosos." },
        { href: "/funny-charades-for-adults/", label: "Mímica para Adultos", description: "Ideias engraçadas para festas." },
        { href: "/charades-generator-for-kids/", label: "Mímica para Crianças", description: "Ideias simples para toda a família." }
      ],
      faqTitle: "Perguntas Frequentes",
      faq: [
        {
          question: "Como fazer mímica de um famoso sem falar ?",
          answer: "Foque nos hábitos conhecidos ou nos papéis icônicos. Para cantores, imite segurar um microfone e fazer poses de palco. Para atores, faça gestos característicos do personagem mais famoso dele."
        },
        {
          question: "O que fazer se ninguém conhecer a celebridade ?",
          answer: "Você pode pular para o próximo nome ou tentar mimetizar as palavras que compõem o nome individualmente."
        },
        {
          question: "Posso imprimir as cartas de celebridades ?",
          answer: "Sim ! Você pode copiar os nomes gerados diretamente na área de transferência ou usar o botão de impressão para criar cartões físicos."
        }
      ]
    },
    ja: {
      path: "/celebrity-charades-generator",
      title: "有名人・芸能人ジェスチャーゲームお題メーカー：お笑い芸人や偉人",
      description: "ジェスチャーゲームやPictionaryで使える芸能人・有名人お題ジェネレーター。お笑い芸人、俳優、スポーツ選手、歴史上の偉人、アニメキャラまで無料出題。",
      keywords: [
        "有名人 ジェスチャー",
        "芸能人 お題",
        "ものまね お題",
        "歴史上の人物 クイズ"
      ],
      heroLabel: "有名人の特徴を捉えてものまね",
      heroTitle: "有名人ジェスチャーゲーム",
      heroDescription: "お笑い芸人の決めポーズやスポーツ選手のフォーム、アニメキャラの必殺技などを言葉を使わずに体だけで再現するお題セット。",
      primaryCta: "有名人お題をシャッフル",
      copyLabel: "お題をコピー",
      copiedLabel: "コピー完了！",
      generatorTitle: "有名人お題ジェネレーター",
      promptListTitle: "ジェスチャーゲーム用有名人・芸能人お題リスト",
      generatorDescription: "声を出したり名前を言うのは厳禁！ポーズ、癖、代表作のワンシーンなどをオーバーリアクションで演じましょう。",
      generatorButton: "次の有名人を出す",
      groups: [
        {
          id: "musicians",
          label: "アーティスト・歌手",
          description: "ステージパフォーマンスが特徴的な歌手。",
          prompts: ["マイケル・ジャクソン", "マドンナ", "レディー・ガガ", "星野源", "福山雅治", "宇多田ヒカル"]
        },
        {
          id: "actors",
          label: "芸能人・タレント",
          description: "テレビで見かける有名人やお笑い芸人。",
          prompts: ["明石家さんま", "マツコ・デラックス", "志村けん", "ビートたけし", "タモリ", "フワちゃん"]
        },
        {
          id: "athletes",
          label: "アスリート・スポーツ選手",
          description: "独特のフォームやポーズを持つスター選手。",
          prompts: ["大谷翔平", "羽生結弦", "イチロー", "三浦知良", "八村塁", "本田圭佑"]
        },
        {
          id: "historical",
          label: "偉人・二次元キャラクター",
          description: "歴史の教科書でおなじみの人物やアニメキャラ。",
          prompts: ["織田信長", "坂本龍馬", "アルベルト・アインシュタイン", "シャーロック・ホームズ", "ハリー・ポッター", "ドラえもん"]
        }
      ],
      sections: [
        {
          id: "how-to-play",
          title: "有名人を言葉を使わずに演じるコツ",
          description: "その人の顔まねや服装、有名なパフォーマンスを体全体で誇張します。",
          items: [
            "歌手なら、マイクを持つ角度や、特徴的なステージの振り付け、決めポーズを再現します。",
            "お笑い芸人なら、誰もが知る『一発ギャグ』の動きやツッコミのジェスチャーを演じます。",
            "文字数を指で教える代わりに、その人の「職業（バットを振る＝野球選手など）」を先に演じてヒントを与えましょう。"
          ]
        },
        {
          id: "variations",
          title: "有名人テーマのゲームバリエーション",
          description: "基本ルールに少し変化を加えるだけで、さらに盛り上がります。",
          items: [
            "私は誰でしょう？（額当てゲーム）：紙にお題を書いてプレイヤーの額に貼ります。本人は自分の名前を知りません。周囲のジェスチャーを見て自分が誰かを当てます。",
            "似顔絵Pictionary：ジェスチャーではなく、ホワイトボードに有名人の似顔絵や特徴を描いて当てる絵心バトル。",
            "ギャグ30秒リレー：30秒以内で次々とお笑い芸人のお題をものまねし、何人当てられるか競う超スピード戦。"
          ]
        }
      ],
      relatedTitle: "他のおもしろメーカー",
      relatedLinks: [
        { href: "/", label: "無料ジェスチャーゲームお題メーカー", description: "すべてのカテゴリからシャッフル。" },
        { href: "/movie-charades-generator/", label: "映画お題メーカー", description: "名作シネマのジェスチャー。" },
        { href: "/funny-charades-for-adults/", label: "おもしろお題（大人向け）", description: "飲み会が爆笑に包まれるネタ集。" },
        { href: "/charades-generator-for-kids/", label: "子ども向けお題メーカー", description: "子どもたちがすぐ真似できる定番お題。" }
      ],
      faqTitle: "よくある質問",
      faq: [
        {
          question: "声を出さずに有名人を表現するにはどうすればいいですか？",
          answer: "トレードマークの動きや癖を誇張します。歌手なら代表曲のサビのダンス、スポーツ選手なら試合中のフォーム、お笑い芸人なら持ちネタの動きをします。"
        },
        {
          question: "誰も知らない有名人が出た場合は？",
          answer: "お題をパスして新しく引き直すか、名前を数文字に分割して「ジェスチャーで文字を連想させる」高度なテクニックに挑んでみましょう。"
        },
        {
          question: "印刷して紙のカードとして使えますか？",
          answer: "はい、画面上のリストをそのままコピーして印刷し、ハサミで切り取って箱の中から引くようなアナログな遊び方もできます。"
        }
      ]
    }
  },
  "family-charades-generator": {
    en: {
      path: "/family-charades-generator",
      title: "Family Charades Generator - Fun Word Ideas for All Ages",
      description: "Generate funny, easy, and clean family charades words and ideas. Perfect for family game nights, kids, teens, and adults playing together.",
      keywords: [
        "family charades",
        "family charades generator",
        "family charades words",
        "family game night charades",
        "charades ideas for family"
      ],
      heroLabel: "Fun activities for game night",
      heroTitle: "Family Charades Generator",
      heroDescription: "Get instant, clean, and hilarious family charades prompts. Generate custom word lists for kids and parents to act out and play together.",
      primaryCta: "Generate family prompts",
      copyLabel: "Copy word list",
      copiedLabel: "Copied",
      generatorTitle: "Pick a family charades category",
      promptListTitle: "Family Charades Word List",
      generatorDescription: "Select a group below or get a random mix of household chores, daily routines, popular sports, and hilarious family scenarios.",
      generatorButton: "New family word",
      groups: [
        {
          id: "routines",
          label: "Daily Routines",
          description: "Simple everyday tasks around the house.",
          prompts: ["Washing the dishes", "Walking the dog", "Setting the dinner table", "Reading a bedtime story"]
        },
        {
          id: "activities",
          label: "Family Activities",
          description: "Fun things families do together.",
          prompts: ["Playing board games", "Family picnic", "Watching TV", "Blowing out birthday candles"]
        },
        {
          id: "funny",
          label: "Funny Situations",
          description: "Silly prompts that will get everyone laughing.",
          prompts: ["Learning to whistle", "Losing a game of Monopoly", "Waking up early", "Trying to catch a fly"]
        }
      ],
      sections: [
        {
          id: "how-to",
          title: "How to Play Family Charades",
          description: "Keep the game friendly, fast, and easy for everyone.",
          items: [
            "Form teams with a mix of kids and adults on each side to keep things balanced.",
            "Clue-givers must act out words using body movements, facial expressions, and gestures without making any sound.",
            "Set a 60-second timer. Each correct guess earns 1 point, and the team with the most points wins."
          ]
        },
        {
          id: "tips",
          title: "Tips for Kids and Parents",
          description: "Make sure younger players feel confident and included.",
          items: [
            "Use easy action and animal words for younger kids (under 7) so they don't get frustrated.",
            "Let younger or shy kids pair up with a parent as co-actors for extra support.",
            "Allow one free skip per turn if a player doesn't know the word or phrase."
          ]
        }
      ],
      relatedTitle: "More Family-Friendly Games",
      relatedLinks: [
        { href: "/", label: "Free Charades Generator", description: "Generate random words and ideas." },
        { href: "/charades-generator-for-kids/", label: "Kids Charades Generator", description: "Simple child-friendly prompts." },
        { href: "/family-game-night-ideas/", label: "Family Game Night Ideas", description: "Plan a full evening." },
        { href: "/would-you-rather-generator/", label: "Would You Rather Generator", description: "Fast choice questions." }
      ],
      faqTitle: "Frequently Asked Questions",
      faq: [
        {
          question: "Is this family charades generator free?",
          answer: "Yes! Our generator is 150% free to use on any browser without downloading any apps or registering."
        },
        {
          question: "What age group is this appropriate for?",
          answer: "The family category is designed for all ages (4 to 99+). It features clean, recognizable household items, sports, and common family scenarios."
        },
        {
          question: "How many players do we need?",
          answer: "You can play with as few as 3 players (one actor, two guessers), but it works best in teams of 4 or more."
        }
      ]
    },
    es: {
      path: "/family-charades-generator",
      title: "Generador de Charadas Familiares - Ideas y Palabras Divertidas",
      description: "Genera palabras e ideas limpias y divertidas para charadas familiares. Ideal para noches de juegos en familia, niños, adolescentes y adultos jugando juntos.",
      keywords: [
        "charadas familiares",
        "generador charadas familiares",
        "palabras charadas familiares",
        "juegos de charadas en familia",
        "ideas de charadas para familia"
      ],
      heroLabel: "Actividades para la noche de juegos",
      heroTitle: "Generador de Charadas Familiares",
      heroDescription: "Obtén palabras de charadas familiares limpias y divertidas al instante. Genera listas de palabras para niños y padres para actuar juntos.",
      primaryCta: "Generar palabras familiares",
      copyLabel: "Copiar lista de palabras",
      copiedLabel: "Copiado",
      generatorTitle: "Elige una categoría de charadas",
      promptListTitle: "Lista de palabras familiares para charadas",
      generatorDescription: "Selecciona una categoría o mezcla tareas del hogar, rutinas diarias, deportes populares y situaciones familiares divertidas.",
      generatorButton: "Nueva palabra familiar",
      groups: [
        {
          id: "routines",
          label: "Rutinas Diarias",
          description: "Tareas simples del día a día en casa.",
          prompts: ["Lavar los platos", "Pasear al perro", "Poner la mesa", "Leer un cuento antes de dormir"]
        },
        {
          id: "activities",
          label: "Actividades en Familia",
          description: "Cosas divertidas que las familias hacen juntas.",
          prompts: ["Jugar juegos de mesa", "Picnic familiar", "Ver la televisión", "Soplar las velas de cumpleaños"]
        },
        {
          id: "funny",
          label: "Situaciones Divertidas",
          description: "Prompts graciosos que harán reír a todos.",
          prompts: ["Aprender a silbar", "Perder en el Monopoly", "Despertarse temprano", "Intentar atrapar una mosca"]
        }
      ],
      sections: [
        {
          id: "how-to",
          title: "Cómo Jugar Charadas en Familia",
          description: "Mantén el juego amigable, rápido y fácil para todos.",
          items: [
            "Forma equipos mezclando niños y adultos en cada lado para mantener la balanza.",
            "El actor debe representar la palabra usando movimientos corporales, gestos y expresiones sin emitir ningún sonido.",
            "Establece un límite de 60 segundos. Cada respuesta correcta suma 1 punto, y el equipo con más puntos gana."
          ]
        },
        {
          id: "tips",
          title: "Consejos para Padres e Hijos",
          description: "Asegúrate de que los más jóvenes se sientan seguros e incluidos.",
          items: [
            "Usa palabras de acciones simples y animales para niños menores de 7 años para evitar frustraciones.",
            "Permite que los niños tímidos actúen en parejas con un adulto para recibir apoyo.",
            "Permite cambiar la palabra una vez por turno si no conocen la frase."
          ]
        }
      ],
      relatedTitle: "Más Juegos Familiares",
      relatedLinks: [
        { href: "/", label: "Generador de Charadas Gratis", description: "Genera palabras e ideas al azar." },
        { href: "/charades-generator-for-kids/", label: "Generador de Charadas para Niños", description: "Prompts sencillos para los pequeños." },
        { href: "/family-game-night-ideas/", label: "Ideas para Noche de Juegos", description: "Planea una noche completa." },
        { href: "/would-you-rather-generator/", label: "Generador de Qué Prefieres", description: "Preguntas rápidas de elección." }
      ],
      faqTitle: "Preguntas Frecuentes",
      faq: [
        {
          question: "¿Este generador de charadas familiares es gratis?",
          answer: "¡Sí! Nuestro generador es 150% gratuito para usar en cualquier navegador, sin descargar aplicaciones ni registrarse."
        },
        {
          question: "¿Para qué edades es adecuado?",
          answer: "La categoría familiar está diseñada para todas las edades (de 4 a 99+ años). Contiene escenas cotidianas, deportes y situaciones familiares reconocibles."
        },
        {
          question: "¿Cuántos jugadores necesitamos?",
          answer: "Puedes jugar con tan solo 3 jugadores (un actor y dos adivinadores), pero funciona mejor en equipos de 4 o más personas."
        }
      ]
    },
    fr: {
      path: "/family-charades-generator",
      title: "Générateur de Jeu de Mime en Famille - Idées et Mots Amusants",
      description: "Générez des mots de mime propres et amusants pour toute la famille. Idéal pour les soirées jeux, enfants, ados et adultes jouant ensemble.",
      keywords: [
        "mime en famille",
        "générateur mime famille",
        "mots de mime famille",
        "jeux de mime en famille",
        "idées de mime pour famille"
      ],
      heroLabel: "Activités pour soirées jeux",
      heroTitle: "Générateur de Mime en Famille",
      heroDescription: "Obtenez instantanément des idées de mimes familiales. Générez des listes de mots pour enfants et parents pour jouer et s'amuser ensemble.",
      primaryCta: "Générer des mots famille",
      copyLabel: "Copiar lista de palabras",
      copiedLabel: "Copié !",
      generatorTitle: "Choisissez une catégorie de mimes",
      promptListTitle: "Liste de mots familiaux pour le jeu de mime",
      generatorDescription: "Sélectionnez une catégorie ou mélangez les tâches ménagères, les routines quotidiennes, les sports et les situations familiales amusantes.",
      generatorButton: "Nouveau mot famille",
      groups: [
        {
          id: "routines",
          label: "Routines Quotidiennes",
          description: "Tâches simples de la vie de tous les jours à la maison.",
          prompts: ["Faire la vaisselle", "Promener le chien", "Mettre la table", "Lire une histoire au lit"]
        },
        {
          id: "activities",
          label: "Activités Familiales",
          description: "Choses amusantes que les familles font ensemble.",
          prompts: ["Jouer à un jeu de société", "Pique-nique en famille", "Regarder la télévision", "Souffler des bougies d'anniversaire"]
        },
        {
          id: "funny",
          label: "Situations Amusantes",
          description: "Des mimes cocasses pour faire rire tout le monde.",
          prompts: ["Apprendre à siffler", "Perder au Monopoly", "Se réveiller très tôt", "Essayer d'attraper une mouche"]
        }
      ],
      sections: [
        {
          id: "how-to",
          title: "Comment Jouer au Mime en Famille",
          description: "Gardez le jeu convivial, rapide et facile pour tous les participants.",
          items: [
            "Formez des équipes mixtes avec enfants et adultes pour équilibrer les chances.",
            "L'acteur doit représenter le mot en silence à l'aide de gestes, sans aucun bruit.",
            "Réglez un temps de 60 secondes. Chaque bonne réponse rapporte 1 point."
          ]
        },
        {
          id: "tips",
          title: "Conseils pour Parents et Enfants",
          description: "Assurez-vous que les plus jeunes se sentent à l'aise et inclus.",
          items: [
            "Utilisez des mots simples d'actions et d'animaux pour les enfants de moins de 7 ans afin d'éviter la frustration.",
            "Permettez aux enfants timides de mimer en duo avec un adulte pour se rassurer.",
            "Autorisez un changement de mot par tour s'ils ne connaissent pas l'expression."
          ]
        }
      ],
      relatedTitle: "Plus de Jeux en Famille",
      relatedLinks: [
        { href: "/", label: "Générateur de Mime Gratuit", description: "Générez des mots et idées au hasard." },
        { href: "/charades-generator-for-kids/", label: "Mime pour Enfants", description: "Mimes simples pour les plus petits." },
        { href: "/family-game-night-ideas/", label: "Idées de Soirées Jeux", description: "Planifiez une soirée complète." },
        { href: "/would-you-rather-generator/", label: "Générateur Tu Préfères", description: "Questions rapides de choix." }
      ],
      faqTitle: "Foire Aux Questions",
      faq: [
        {
          question: "Combien de joueurs faut-il ?",
          answer: "Vous pouvez y jouer dès 3 joueurs (un actor et deux devins), mais le jeu est encore meilleur en équipes de 4 ou plus."
        }
      ]
    },
    pt: {
      path: "/family-charades-generator",
      title: "Gerador de Mímica em Família - Palavras e Ideias Divertidas",
      description: "Gere palavras de mímica adequadas e divertidas para toda a família. Perfeito para noites de jogos, crianças, adolescentes e adultos jogarem juntos.",
      keywords: [
        "mimica em familia",
        "gerador mimica familia",
        "palavras de mimica familia",
        "jogos de mimica em familia",
        "ideias de mimica para familia"
      ],
      heroLabel: "Atividades para noites de jogos",
      heroTitle: "Gerador de Mímica em Família",
      heroDescription: "Obtenha ideias de mímica para a família instantaneamente. Gere listas de palavras para crianças e pais jogarem e se divertirem juntos.",
      primaryCta: "Gerar palavra familiar",
      copyLabel: "Copiar palavra",
      copiedLabel: "Copiado !",
      generatorTitle: "Gerador de mímica familiar",
      promptListTitle: "Lista de ideias de mímicas para jogar em família",
      generatorDescription: "Selecione uma categoria e imite a palavra ou frase em silêncio. Estimule as crianças a usarem expressões corporais criativas.",
      generatorButton: "Nova palavra familiar",
      groups: [
        {
          id: "easy",
          label: "Muito Fácil",
          description: "Ideal para crianças pequenas e iniciantes.",
          prompts: ["Gato", "Cachorro", "Chorar", "Dormir", "Escovar os dentes", "Comer sorvete"]
        },
        {
          id: "sports",
          label: "Esportes & Lazer",
          description: "Atividades físicas divertidas.",
          prompts: ["Jogar futebol", "Nadar", "Andar de skate", "Pescar", "Andar de bicicleta", "Pular corda"]
        },
        {
          id: "daily",
          label: "Rotina Familiar",
          description: "Situações normais do dia a dia doméstico.",
          prompts: ["Lavar a louça", "Varrer a casa", "Fazer dever de casa", "Assistir TV", "Arrumar a cama", "Passear com o cachorro"]
        },
        {
          id: "funny",
          label: "Situações Divertidas",
          description: "Desafios cômicos para toda a família.",
          prompts: ["Pisar em um chiclete", "Tomar um susto", "Espirrar sem parar", "Andar de patins", "Imitar um bebê", "Fugir de uma abelha"]
        }
      ],
      sections: [
        {
          id: "rules",
          title: "Como Jogar Mímica em Família",
          description: "Instruções fáceis para divertir todas as idades na sua sala de estar.",
          items: [
            "Divida a família em duas equipes (tente misturar adultos e crianças em cada time).",
            "Defina 60 ou 90 segundos por rodada para dar tempo suficiente de adivinhar.",
            "Sem sons de nenhum tipo! Apenas gestos e expressão corporal são válidos.",
            "Dica de ouro: estabeleça um limite de pulos de palavras para que ninguém fique travado."
          ]
        },
        {
          id: "benefits",
          title: "Benefícios de Jogar em Família",
          description: "A mímica vai além do entretenimento; ela desenvolve habilidades valiosas.",
          items: [
            "Estimula a comunicação não-verbal e a expressividade nas crianças.",
            "Garante risadas naturais e fortalece os laços afetivos em um ambiente livre de telas.",
            "Ajuda na desinibição e no desenvolvimento da autoconfiança de forma lúdica."
          ]
        }
      ],
      relatedTitle: "Mais Jogos Divertidos",
      relatedLinks: [
        { href: "/", label: "Gerador de Mímica Grátis", description: "Consiga palavras aleatórias." },
        { href: "/charades-generator-for-kids/", label: "Mímica para Crianças", description: "Prompts simples para os pequenos." },
        { href: "/family-game-night-ideas/", label: "Ideias de Noite de Jogos", description: "Organize um evento completo." },
        { href: "/would-you-rather-generator/", label: "Gerador O Que Você Prefere", description: "Perguntas de escolhas difíceis." }
      ],
      faqTitle: "Perguntas Frequentes",
      faq: [
        {
          question: "Este gerador de mímica familiar é gratuito ?",
          answer: "Sim ! Nossa ferramenta é 100% gratuita em qualquer navegador, sem necessidade de baixar aplicativos ou realizar cadastros."
        },
        {
          question: "Para quais idades é indicado ?",
          answer: "A categoria familiar foi desenvolvida para todas as idades (de 4 a 99+ anos), contendo conceitos do dia a dia e atividades facilmente interpretáveis."
        },
        {
          question: "Quantos jogadores são necessários ?",
          answer: "Você pode jogar com pelo menos 3 participantes (um ator e dois adivinhadores), mas o jogo fica muito melhor em equipes de 4 ou mais pessoas."
        }
      ]
    },
    ja: {
      path: "/family-charades-generator",
      title: "家族向けジェスチャーゲームお題メーカー - 親子で爆笑お題",
      description: "家族団らんやゲームナイトで使える、簡単で健全なジェスチャーお題メーカー。幼児、小学生、お父さん、お母さんが一緒に笑って遊べるネタが満載。",
      keywords: [
        "家族 ジェスチャー",
        "親子 ジェスチャーゲーム",
        "ホームパーティー お題",
        "家で遊べるゲーム"
      ],
      heroLabel: "おうち時間を彩るレクリエーション",
      heroTitle: "家族向けジェスチャーゲーム",
      heroDescription: "日常の家事、学校の様子、簡単なスポーツなど、どの世代にとっても身近な行動をテーマにした家族専用お題セット。",
      primaryCta: "家族お題をシャッフル",
      copyLabel: "お題をコピー",
      copiedLabel: "コピー完了！",
      generatorTitle: "ファミリーお題メーカー",
      promptListTitle: "家族ゲーム用の簡単ジェスチャーお題リスト",
      generatorDescription: "カテゴリを選び、ジェスチャーをします。お父さんやお母さんの必死な演技に子どもたちが大笑いすること間違いなし！",
      generatorButton: "新しいお題を出す",
      groups: [
        {
          id: "easy",
          label: "とても簡単",
          description: "小さな子どもでもすぐに理解できるお題。",
          prompts: ["猫", "犬", "泣く", "寝る", "歯を磨く", "アイスクリームを食べる"]
        },
        {
          id: "sports",
          label: "スポーツ＆レジャー",
          description: "わかりやすい全身運動のお題。",
          prompts: ["サッカー", "水泳", "スケートボード", "魚釣り", "自転車に乗る", "縄跳び"]
        },
        {
          id: "daily",
          label: "おうちの日常",
          description: "家族全員が毎日見ている家庭内の光景。",
          prompts: ["お皿を洗う", "部屋を掃除する", "宿題をする", "テレビを見る", "布団を敷く", "犬の散歩に行く"]
        },
        {
          id: "funny",
          label: "ハプニング・おもしろ",
          description: "ちょっと笑える面白いシチュエーション。",
          prompts: ["ガムを踏んでしまう", "突然驚く", "くしゃみが止まらない", "ローラースケートですべる", "赤ちゃんの真似をする", "ハチに追いかけられる"]
        }
      ],
      sections: [
        {
          id: "rules",
          title: "おうちで楽しむ家族ルールの作り方",
          description: "すべての年齢の家族が平等に楽しめるよう、ルールを工夫しましょう。",
          items: [
            "親チームvs子どもチーム、あるいは大人と子どもをミックスした混成チームに分けます。",
            "子どもが演じる時は、制限時間を少し長め（90秒など）に設定してあげましょう。",
            "声出しは絶対禁止。オーバーな身振り手振りで親子のコミュニケーションを深めます。",
            "お題が難しすぎる場合は、何度でもパス（引き直し）を認めるとスムーズに楽しめます。"
          ]
        },
        {
          id: "benefits",
          title: "家族でジェスチャーゲームをするメリット",
          description: "ただ楽しいだけでなく、絆を強めるたくさんの効果があります。",
          items: [
            "非言語的な自己表現 of 楽しさを学び、子どもの創造性を引き出します。",
            "テレビやスマホの画面から目を離し、顔を見合わせるデジタルデトックスの最高の機会になります。",
            "大人が必死にバカになって演じる姿を見せることで、家庭の雰囲気が一気に明るくなります。"
          ]
        }
      ],
      relatedTitle: "他のおすすめゲーム",
      relatedLinks: [
        { href: "/", label: "無料ジェスチャーゲームお題メーカー", description: "全カテゴリからシャッフル生成。" },
        { href: "/charades-generator-for-kids/", label: "子ども向けお題", description: "幼児・小学生向けの超簡単お題。" },
        { href: "/family-game-night-ideas/", label: "ファミリーゲームナイト", description: "家族レク全体の企画アイデア。" },
        { href: "/would-you-rather-generator/", label: "究極の選択メーカー", description: "どっちを選ぶ？家族で盛り上がる質問。" }
      ],
      faqTitle: "よくある質問",
      faq: [
        {
          question: "家族向けお題メーカーは本当に無料ですか？",
          answer: "はい！完全無料です。スマホやパソコンのブラウザさえあれば、アプリ不要でどこでも今すぐ遊べます。"
        },
        {
          question: "対象年齢は何歳からですか？",
          answer: "ファミリーカテゴリは、4歳から99歳以上まで対応しています。日常の分かりやすいシーンが中心のため、小さなお子様でも演技に参加できます。"
        },
        {
          question: "最低何人から遊べますか？",
          answer: "演者1名、回答者2名の「最低3名」から遊べますが、4名以上でチーム戦にすると圧倒的に盛り上がります。"
        }
      ]
    }
  },
  "thanksgiving-charades-generator": {
    en: {
      path: "/thanksgiving-charades-generator",
      title: "Thanksgiving Charades Generator - Fun Dinner Game Ideas",
      description: "Free interactive Thanksgiving charades generator. Instant clean words, cards, and rules for family gatherings, kids, and holiday dinner parties.",
      keywords: [
        "thanksgiving charades",
        "thanksgiving charades generator",
        "thanksgiving charades words",
        "thanksgiving charades ideas",
        "thanksgiving charades cards"
      ],
      heroLabel: "Holiday family activities",
      heroTitle: "Thanksgiving Charades Generator",
      heroDescription: "Get instant Thanksgiving-themed charades prompts. Generate custom word lists for holiday dinners, family gatherings, and kids playing together.",
      primaryCta: "Generate Thanksgiving prompts",
      copyLabel: "Copy word list",
      copiedLabel: "Copied",
      generatorTitle: "Pick a Thanksgiving category",
      promptListTitle: "Thanksgiving Charades Words and Prompts List",
      generatorDescription: "Select a category below or get a random mix of holiday food, historical symbols, cozy autumn nature, and fun traditions.",
      generatorButton: "New Thanksgiving word",
      groups: [
        {
          id: "food",
          label: "Food & Feast",
          description: "Delicious Thanksgiving dishes and foods.",
          prompts: ["Turkey", "Pumpkin pie", "Gravy", "Mashed potatoes", "Cranberry sauce", "Apple cider"]
        },
        {
          id: "symbols",
          label: "History & Symbols",
          description: "Traditional symbols of the autumn holiday.",
          prompts: ["Pilgrim", "Native American", "Mayflower", "Cornucopia", "Harvest", "Scarecrow"]
        },
        {
          id: "traditions",
          label: "Traditions & Fun",
          description: "Holiday activities and family fun.",
          prompts: ["Football", "Feasting", "Giving thanks", "Family reunion", "Parade", "Hayride"]
        }
      ],
      sections: [
        {
          id: "how-to",
          title: "How to Play Thanksgiving Charades",
          description: "Keep the round fast, fun, and friendly while waiting for dinner.",
          items: [
            "Divide guests into teams. Mix different generations (grandparents, kids, parents) on each side for the most fun.",
            "Actor must represent the word using body language and gestures without speaking or making sound effects.",
            "Set a 60-second timer. Each correct guess scores 1 point, and the team with the highest score wins."
          ]
        },
        {
          id: "tips",
          title: "Hosting Tips for Thanksgiving Dinner",
          description: "Incorporate charades easily into your holiday routine.",
          items: [
            "Play a quick round at the dinner table while waiting for the turkey to carve or dessert to serve.",
            "Use easy terms for kids (like eating corn or acting like a turkey) and save historical terms for adults.",
            "Offer small holiday treats (like a slice of pie or a chocolate) as prizes for the winning team."
          ]
        }
      ],
      relatedTitle: "More Holiday Games",
      relatedLinks: [
        { href: "/", label: "Free Charades Generator", description: "Generate random words and ideas." },
        { href: "/christmas-charades-generator/", label: "Christmas Charades Generator", description: "Holiday special word generator." },
        { href: "/family-charades-generator/", label: "Family Charades Generator", description: "Clean prompts for all ages." },
        { href: "/charades-generator-for-kids/", label: "Kids Charades Generator", description: "Simple child-friendly prompts." }
      ],
      faqTitle: "Frequently Asked Questions",
      faq: [
        {
          question: "Is this Thanksgiving charades generator family-friendly?",
          answer: "Yes! All prompts are carefully hand-selected to be clean, safe, and appropriate for kids, teens, parents, and grandparents."
        },
        {
          question: "Can I print these Thanksgiving words?",
          answer: "Yes! You can copy the generated list directly or print this page to cut out physical slips of paper for your gathering."
        },
        {
          question: "When is the best time to play during Thanksgiving?",
          answer: "It works great as an icebreaker while guests arrive, or as a fun activity after the main meal while sitting around the table."
        }
      ]
    },
    es: {
      path: "/thanksgiving-charades-generator",
      title: "Generador de Charadas de Acción de Gracias - Ideas y Palabras",
      description: "Generador interactivo de charadas de Acción de Gracias. Palabras limpias, tarjetas e ideas para reuniones familiares, niños y cenas festivas.",
      keywords: [
        "charadas de accion de gracias",
        "generador charadas accion de gracias",
        "palabras charadas accion de gracias",
        "ideas charadas de accion de gracias"
      ],
      heroLabel: "Actividades familiares festivas",
      heroTitle: "Generador de Charadas de Acción de Gracias",
      heroDescription: "Obtén palabras temáticas de Acción de Gracias al instante. Genera listas de palabras para cenas festivas y reuniones familiares para actuar juntos.",
      primaryCta: "Generar palabras de Acción de Gracias",
      copyLabel: "Copiar lista de palabras",
      copiedLabel: "Copiado",
      generatorTitle: "Elige una categoría de Acción de Gracias",
      promptListTitle: "Lista de palabras e ideas de Acción de Gracias",
      generatorDescription: "Selecciona una categoría o mezcla comida festiva, símbolos históricos, naturaleza otoñal acogedora y tradiciones divertidas.",
      generatorButton: "Nueva palabra de Acción de Gracias",
      groups: [
        {
          id: "food",
          label: "Comida y Banquete",
          description: "Deliciosos platos y comidas de Acción de Gracias.",
          prompts: ["Pavo", "Pastel de calabaza", "Salsa de carne", "Puré de patatas", "Salsa de arándanos", "Sidra de manzana"]
        },
        {
          id: "symbols",
          label: "Historia y Símbolos",
          description: "Símbolos tradicionales de las fiestas de otoño.",
          prompts: ["Peregrino", "Indígena americano", "Mayflower", "Cornucopia", "Cosecha", "Espantapájaros"]
        },
        {
          id: "traditions",
          label: "Tradiciones y Diversión",
          description: "Actividades festivas y diversión en familia.",
          prompts: ["Fútbol americano", "Banquete", "Dar gracias", "Reunión familiar", "Desfile", "Paseo en heno"]
        }
      ],
      sections: [
        {
          id: "how-to",
          title: "Cómo Jugar Charadas de Acción de Gracias",
          description: "Mantén la ronda rápida, divertida y familiar mientras esperas la cena.",
          items: [
            "Divide a los invitados en equipos. Mezcla diferentes generaciones (abuelos, niños, padres) en cada lado para mayor diversión.",
            "El actor debe representar la palabra usando lenguaje corporal y gestos sin hablar ni emitir sonidos.",
            "Establece un límite de 60 segundos. Cada respuesta correcta suma 1 punto, y el equipo con más puntos gana."
          ]
        },
        {
          id: "tips",
          title: "Consejos para la Cena de Acción de Gracias",
          description: "Incorpora charadas fácilmente en tu rutina festiva.",
          items: [
            "Juega una ronda rápida en la mesa mientras esperas que se trinche el pavo o se sirva el postre.",
            "Usa términos fáciles para los niños (como comer maíz o actuar como un pavo) y guarda los términos históricos para los adultos.",
            "Ofrece pequeños dulces festivos (como una porción de pastel o chocolate) como premios para el equipo ganador."
          ]
        }
      ],
      relatedTitle: "Más Juegos Divertidos",
      relatedLinks: [
        { href: "/", label: "Generador de Charadas Gratis", description: "Genera palabras e ideas al azar." },
        { href: "/christmas-charades-generator/", label: "Generador de Charadas Navideñas", description: "Especial navideño de charadas." },
        { href: "/family-charades-generator/", label: "Generador de Charadas Familiares", description: "Prompts limpios para todas las edades." },
        { href: "/charades-generator-for-kids/", label: "Generador de Charadas para Niños", description: "Prompts sencillos para los pequeños." }
      ],
      faqTitle: "Preguntas Frecuentes",
      faq: [
        {
          question: "¿Este generador de Acción de Gracias es apto para familias?",
          answer: "¡Sí! Todos los prompts están seleccionados a mano para ser limpios, seguros y apropiados para niños, adolescentes, padres y abuelos."
        },
        {
          question: "¿Puedo imprimir estas palabras?",
          answer: "¡Sí! Puedes copiar la lista generada directamente o imprimir esta página para recortar tarjetas físicas para tu reunión."
        },
        {
          question: "¿Cuándo es el mejor momento para jugar en Acción de Gracias?",
          answer: "Funciona genial como rompehielos mientras llegan los invitados, o como una actividad divertida después de la comida principal mientras están en la mesa."
        }
      ]
    },
    fr: {
      path: "/thanksgiving-charades-generator",
      title: "Générateur de Mime d'Action de Grâce - Idées Amusantes pour le Repas",
      description: "Générateur interactif gratuit de mimes pour l'Action de Grâce. Mots, cartes et règles pour vos réunions de famille et repas de fête.",
      keywords: [
        "mime action de grâce",
        "générateur mime action de grâce",
        "mots de mime action de grâce",
        "idées de mime repas de fête",
        "cartes de mime action de grâce"
      ],
      heroLabel: "Activités familiales festives",
      heroTitle: "Générateur de Mime d'Action de Grâce",
      heroDescription: "Obtenez des mots de mime sur le thème de l'Action de Grâce. Générez des listes personnalisées pour vos repas de fête et réunions de famille.",
      primaryCta: "Générer des mimes Action de Grâce",
      copyLabel: "Copiar lista de palabras",
      copiedLabel: "Copié !",
      generatorTitle: "Choisissez votre catégorie",
      promptListTitle: "Liste de mots d'Action de Grâce pour le mime",
      generatorDescription: "Sélectionnez un pack de mots ou mélangez les plats traditionnels, les symboles de l'automne et les activités chaleureuses.",
      generatorButton: "Nouveau mot festif",
      groups: [
        {
          id: "food",
          label: "Plats Traditionnels",
          description: "La dinde, les accompagnements et les desserts classiques.",
          prompts: ["Manger de la dinde", "Tarte à la citrouille", "Couper la dinde", "Faire de la purée"]
        },
        {
          id: "symbols",
          label: "Symboles d'Automne",
          description: "Éléments et décors de la saison des récoltes.",
          prompts: ["Corne d'abondance", "Feuilles d'automne", "Une citrouille", "Un épouvantail"]
        },
        {
          id: "celebration",
          label: "Moments de Partage",
          description: "Activités chaleureuses partagées en famille.",
          prompts: ["Remercier sa famille", "Partager un repas", "Faire une sieste après manger", "Regarder le défilé"]
        }
      ],
      sections: [
        {
          id: "how-to",
          title: "Comment Jouer pendant le Repas",
          description: "Animez vos moments à table de façon fluide.",
          items: [
            "Divisez les invités en équipes. Se costumer ou porter un chapeau rigolo rend le jeu encore plus drôle !",
            "L'acteur mime le mot à l'aide de gestes sans émettre aucun son.",
            "Réglez un chronomètre de 60 secondes. Chaque mot deviné rapporte 1 point."
          ]
        },
        {
          id: "tips",
          title: "Conseils pour votre Repas de Fête",
          description: "Intégrez le jeu facilement dans vos festivités.",
          items: [
            "Jouez un tour rapide à table en attendant que la dinde soit découpée ou le dessert servi.",
            "Utilisez des mots très simples pour les petits et gardez les termes historiques pour les adultes.",
            "Offrez de petits chocolats ou des friandises comme récompenses à l'équipe gagnante."
          ]
        }
      ],
      relatedTitle: "Plus de Jeux Festifs",
      relatedLinks: [
        { href: "/", label: "Générateur de Mime Gratuit", description: "Générez des mots et idées au hasard." },
        { href: "/christmas-charades-generator/", label: "Mime de Noël", description: "Générateur thématique de Noël." },
        { href: "/family-charades-generator/", label: "Mime en Famille", description: "Mimes propres pour tous les âges." },
        { href: "/charades-generator-for-kids/", label: "Mime pour Enfants", description: "Mimes simples pour les plus petits." }
      ],
      faqTitle: "Foire Aux Questions",
      faq: [
        {
          question: "Ce générateur d'Action de Grâce est-il adapté aux enfants ?",
          answer: "Oui ! Tous les mots sont sélectionnés pour être conviviaux, sûrs et amusants pour les enfants, ados, parents et grands-parents."
        },
        {
          question: "Puis-je imprimer cette liste de mots ?",
          answer: "Oui ! Vous pouvez copier la liste générée ou utiliser notre bouton d'impression pour découper des cartes de jeu physiques."
        },
        {
          question: "Quel est le meilleur moment pour jouer le jour de la fête ?",
          answer: "C'est parfait comme jeu de bienvenue pour briser la glace, ou après le grand repas pour rire ensemble en restant à table."
        }
      ]
    },
    pt: {
      path: "/thanksgiving-charades-generator",
      title: "Gerador de Mímica de Ação de Graças - Ideias Divertidas de Jogos",
      description: "Gerador interativo de mímica de Ação de Graças. Palavras, cartões e regras limpas e fáceis para confraternizações de família, crianças e jantar de feriado.",
      keywords: [
        "mimica acao de gracas",
        "gerador mimica acao de gracas",
        "palavras mimica acao de gracas",
        "ideias mimica acao de gracas"
      ],
      heroLabel: "Ideias de jogos para feriados",
      heroTitle: "Mímica de Ação de Graças",
      heroDescription: "Use palavras de comida, tradições familiares, esportes de outono e a história da Ação de Graças para uma partida de mímica saudável e divertida.",
      primaryCta: "Gerar palavra de Ação de Graças",
      copyLabel: "Copiar palavra",
      copiedLabel: "Copiado !",
      generatorTitle: "Gerador de mímica de Ação de Graças",
      promptListTitle: "Lista de palavras de Ação de Graças para mímica",
      generatorDescription: "Escolha um grupo temático, depois imite a palavra ou frase em silêncio. Ideal para divertir a mesa de jantar.",
      generatorButton: "Nova palavra temática",
      groups: [
        {
          id: "food",
          label: "Comida & Jantar",
          description: "Pratos típicos e guloseimas do banquete.",
          prompts: ["Peru assado", "Purê de batatas", "Torta de abóbora", "Molho de cranberry", "Pão de milho", "Milho cozido"]
        },
        {
          id: "traditions",
          label: "Tradições",
          description: "Atividades típicas do dia de Ação de Graças.",
          prompts: ["Agradecer em família", "Assistir ao desfile", "Jogar futebol americano", "Fazer uma sesta", "Cozinhar juntos", "Lavar a louça do jantar"]
        },
        {
          id: "symbols",
          label: "Símbolos",
          description: "Elementos clássicos do feriado.",
          prompts: ["Cornucópia", "Espantalho", "Peregrinos", "Folhas de outono", "Abóbora", "Torta de maçã"]
        }
      ],
      sections: [
        {
          id: "how-to-play",
          title: "Como Jogar Mímica de Ação de Graças na Mesa",
          description: "Uma maneira simples de divertir a família antes ou depois do banquete.",
          items: [
            "Não precisa levantar! Você pode fazer a rodada de mímica sentando-se à mesa, usando apenas gestos da cintura para cima.",
            "Defina punições engraçadas para quem falar, como ter que passar a sobremesa para o vizinho.",
            "Deixe que a pessoa que adivinhar escolha quem será o próximo mímico da rodada."
          ]
        },
        {
          id: "tips",
          title: "Atividades para a Confraternização",
          description: "Crie momentos significativos integrando o jogo de mímica às suas tradições.",
          items: [
            "Use o gerador como quebra-gelo para os convidados que estão chegando e esperando o jantar ficar pronto.",
            "Se tiver crianças, crie cartões físicos impressos para que elas possam colorir e brincar em uma mesa separada."
          ]
        }
      ],
      relatedTitle: "Mais Jogos Festivos",
      relatedLinks: [
        { href: "/", label: "Gerador de Mímica Grátis", description: "Consiga termos e ideias ao acaso." },
        { href: "/christmas-charades-generator/", label: "Mímica de Natal", description: "Gere ideias festivas de fim de ano." },
        { href: "/family-charades-generator/", label: "Mímica em Família", description: "Palavras limpas para todas as idades." },
        { href: "/charades-generator-for-kids/", label: "Mímica para Crianças", description: "Prompts simples para os pequenos." }
      ],
      faqTitle: "Perguntas Frequentes",
      faq: [
        {
          question: "Este gerador de Ação de Graças é adequado para crianças ?",
          answer: "Sim ! Todos os prompts são selecionados manualmente para serem limpos, saudáveis e seguros para crianças, jovens, pais e avós."
        },
        {
          question: "Posso imprimir esta lista de palavras ?",
          answer: "Sim ! Você pode copiar a lista gerada de uma vez só ou usar o botão de impressão para recortar cartões de mímica de papel."
        },
        {
          question: "Qual o melhor momento para jogar no feriado ?",
          answer: "Funciona muito bem para quebrar o gelo enquanto o jantar está sendo finalizado, ou após a refeição principal para relaxar e dar risadas juntos."
        }
      ]
    },
    ja: {
      path: "/thanksgiving-charades-generator",
      title: "感謝祭ジェスチャーゲームお題メーカー - 秋のファミリーレク",
      description: "感謝祭（サンクスギビング）をテーマにした無料ジェスチャーお題メーカー。ごちそう、家族の集まり、秋のシンボルなど楽しいお題を収録。",
      keywords: [
        "感謝祭 ゲーム",
        "サンクスギビング レク",
        "秋のイベント ゲーム",
        "パーティーゲーム 出題"
      ],
      heroLabel: "秋の祝日を盛り上げるゲーム",
      heroTitle: "感謝祭ジェスチャーゲーム",
      heroDescription: "七面鳥のごちそう、秋の収穫、家族団らんをテーマに、夕食後や団らんの時間に大人数で遊べるお題セット。",
      primaryCta: "感謝祭お題をシャッフル",
      copyLabel: "お題をコピー",
      copiedLabel: "コピー完了！",
      generatorTitle: "感謝祭お題メーカー",
      promptListTitle: "感謝祭用のジェスチャーゲームお題リスト",
      generatorDescription: "テーマを選択し、声を出さずにジェスチャーします。食卓をさらに楽しくするレクリエーションです。",
      generatorButton: "新しいお題を出す",
      groups: [
        {
          id: "food",
          label: "ごちそう＆ディナー",
          description: "食卓に並ぶ秋の味覚やメインディッシュ。",
          prompts: ["七面鳥の丸焼き", "マッシュポテト", "パンプキンパイ", "クランベリーソース", "コーンブレッド", "トウモロコシをかじる"]
        },
        {
          id: "traditions",
          label: "祝日の伝統",
          description: "この時期に行う定番のイベント。",
          prompts: ["家族みんなで感謝する", "パレードを観る", "フットボール観戦", "満腹で昼寝をする", "一緒に料理を作る", "ごちそうのお皿を洗う"]
        },
        {
          id: "symbols",
          label: "秋 of シンボル",
          description: "感謝祭や秋を象徴するもの。",
          prompts: ["豊穣の角（コーヌコピア）", "かかし", "ピルグリム（開拓者）", "紅葉した落ち葉", "カボチャ", "アップルパイ"]
        }
      ],
      sections: [
        {
          id: "how-to-play",
          title: "食卓で遊ぶための感謝祭ミニルール",
          description: "お腹いっぱいでくつろいでいる時でも、席を立たずに遊べるルールです。",
          items: [
            "立ち上がる必要はありません！ディナーテーブルに座ったまま、上半身のジェスチャーだけで表現します。",
            "もし声を出してしまったら、隣の人にデザートを一口分けなければならないという罰ゲームを導入すると盛り上がります。",
            "正解を当てた人が、次にジェスチャーする人を指名して回していきます。"
          ]
        },
        {
          id: "tips",
          title: "感謝祭パーティーを成功させるコツ",
          description: "家族の集まりを思い出深いものにするためのヒント。",
          items: [
            "ごちそうの準備を待っている間の退屈な時間に、子どもたちのアイスブレイクとして出題器を使ってもましょう。",
            "印刷機能を使ってお題カードを紙に刷り出し、子ども用のテーブルに置いておくと、子どもたちだけで自律的に遊んでくれます。"
          ]
        }
      ],
      relatedTitle: "その他の季節ゲーム",
      relatedLinks: [
        { href: "/", label: "無料ジェスチャーゲームお題メーカー", description: "すべてのカテゴリからランダム出題。" },
        { href: "/christmas-charades-generator/", label: "クリスマスお題メーカー", description: "クリスマスのテーマを出題。" },
        { href: "/family-charades-generator/", label: "家族向けお題メーカー", description: "すべての世代で遊べる簡単お題。" },
        { href: "/charades-generator-for-kids/", label: "子ども向けお題メーカー", description: "幼児・小学生向けの簡単お題。" }
      ],
      faqTitle: "よくある質問",
      faq: [
        {
          question: "この感謝祭お題は子どもにも安全ですか？",
          answer: "はい！すべてのお題は手動で選別されており、子どもから大人、お年寄りまで全員で安心して遊べる内容になっています。"
        },
        {
          question: "お題を印刷して使うことはできますか？",
          answer: "はい。生成されたリストをコピーして保存するか、印刷機能を使って紙のカードにして遊ぶことができます。"
        },
        {
          question: "感謝祭でこのゲームで遊ぶのに最適なタイミングは？",
          answer: "ごちそうを待っている間や、食事を終えてデザートまでのくつろぎの時間にテーブルを囲んで遊ぶのがおすすめです。"
        }
      ]
    }
  },
  "halloween-charades-generator": {
    en: {
      path: "/halloween-charades-generator",
      title: "Halloween Charades Generator - Spooky Word Ideas",
      description: "Free interactive Halloween charades generator. Instant creepy monsters, scary actions, and rules for spooky party games and kids.",
      keywords: [
        "halloween charades",
        "halloween charades generator",
        "halloween charades words",
        "halloween charades ideas",
        "halloween charades cards"
      ],
      heroLabel: "Spooky party activities",
      heroTitle: "Halloween Charades Generator",
      heroDescription: "Get instant Halloween-themed charades prompts. Generate custom word lists for spooky parties, family gatherings, and kids playing together.",
      primaryCta: "Generate Halloween prompts",
      copyLabel: "Copy word list",
      copiedLabel: "Copied",
      generatorTitle: "Pick a Halloween category",
      promptListTitle: "Halloween Charades Words and Prompts List",
      generatorDescription: "Select a category below or get a random mix of spooky monsters, creepy objects, scary actions, and haunted places.",
      generatorButton: "New Halloween word",
      groups: [
        {
          id: "monsters",
          label: "Monsters & Villains",
          description: "Classic spooky monsters and characters.",
          prompts: ["Ghost", "Vampire", "Witch", "Mummy", "Zombie", "Skeleton"]
        },
        {
          id: "items",
          label: "Creepy Objects",
          description: "Traditional Halloween symbols and items.",
          prompts: ["Jack-o'-lantern", "Pumpkin", "Candy corn", "Tombstone", "Cauldron", "Broomstick"]
        },
        {
          id: "actions",
          label: "Scary Actions",
          description: "Spooky actions and things to act out.",
          prompts: ["Trick-or-treating", "Flying on a broomstick", "Howling at the moon", "Carving a pumpkin"]
        }
      ],
      sections: [
        {
          id: "how-to",
          title: "How to Play Halloween Charades",
          description: "Keep the game scary, spooky, and fun for all guests.",
          items: [
            "Divide guests into teams. Dress up in costumes to make acting even more fun!",
            "Actor must represent the word using body movements, scary facial expressions, and creepy gestures without making any sound.",
            "Set a 60-second timer. Each correct guess scores 1 point, and the team with the most points wins."
          ]
        },
        {
          id: "tips",
          title: "Hosting Tips for a Halloween Party",
          description: "Spookify your charades night with these creative tips.",
          items: [
            "Play under dim lights or candlelight to create a spooky atmosphere.",
            "Award bonus points if players act out their prompts while remaining in their Halloween costume characters.",
            "Give away Halloween candy or spooky treats as prizes to the winning team."
          ]
        }
      ],
      relatedTitle: "More Spooky Games",
      relatedLinks: [
        { href: "/", label: "Free Charades Generator", description: "Generate random words and ideas." },
        { href: "/halloween-party-games/", label: "Halloween Party Games", description: "Other fun party games." },
        { href: "/family-charades-generator/", label: "Family Charades Generator", description: "Clean prompts for all ages." },
        { href: "/charades-generator-for-kids/", label: "Kids Charades Generator", description: "Simple child-friendly prompts." }
      ],
      faqTitle: "Frequently Asked Questions",
      faq: [
        {
          question: "Is this Halloween charades generator safe for kids?",
          answer: "Yes! While it features classic monsters like ghosts and witches, all prompts are clean and designed to be fun rather than genuinely terrifying."
        },
        {
          question: "Can I use this for classroom parties?",
          answer: "Absolutely! Teachers love using our generator for classroom Halloween celebrations and brain breaks. It's fully school-appropriate."
        },
        {
          question: "Do we need props to play?",
          answer: "No props are required! The fun of charades is acting everything out using only body language and gestures."
        }
      ]
    },
    es: {
      path: "/halloween-charades-generator",
      title: "Generador de Charadas de Halloween - Ideas y Palabras Terroríficas",
      description: "Generador interactivo de charadas de Halloween. Palabras espeluznantes, monstruos, acciones de miedo y reglas para niños y fiestas.",
      keywords: [
        "charadas de halloween",
        "generador charadas halloween",
        "palabras charadas halloween",
        "ideas charadas de halloween"
      ],
      heroLabel: "Actividades para fiestas de miedo",
      heroTitle: "Generador de Charadas de Halloween",
      heroDescription: "Obtén palabras temáticas de Halloween al instante. Genera listas de palabras para fiestas de disfraces, reuniones y juegos infantiles para actuar juntos.",
      primaryCta: "Generar palabras de Halloween",
      copyLabel: "Copiar lista de palabras",
      copiedLabel: "Copiado",
      generatorTitle: "Elige una categoría de Halloween",
      promptListTitle: "Lista de palabras e ideas de Halloween",
      generatorDescription: "Selecciona una categoría o mezcla monstruos espantosos, objetos misteriosos, acciones de miedo y lugares embrujados.",
      generatorButton: "Nueva palabra de Halloween",
      groups: [
        {
          id: "monsters",
          label: "Monstruos y Villanos",
          description: "Clásicos monstruos y personajes de terror.",
          prompts: ["Fantasma", "Vampiro", "Bruja", "Momia", "Zombie", "Esqueleto"]
        },
        {
          id: "items",
          label: "Objetos Misteriosos",
          description: "Símbolos y artículos tradicionales de Halloween.",
          prompts: ["Calabaza de Halloween", "Calabaza", "Caramelo de maíz", "Lápida", "Caldero", "Escoba de bruja"]
        },
        {
          id: "actions",
          label: "Acciones de Miedo",
          description: "Acciones temáticas para representar con mímica.",
          prompts: ["Truco o trato", "Volar en una escoba", "Aullar a la luna", "Tallar una calabaza"]
        }
      ],
      sections: [
        {
          id: "how-to",
          title: "Cómo Jugar Charadas de Halloween",
          description: "Mantén el juego misterioso, divertido y apto para todos.",
          items: [
            "Divide a los invitados en equipos. ¡Llevar disfraces hace que la actuación sea aún más divertida!",
            "El actor debe representar la palabra usando movimientos corporales, gestos de miedo y expresiones sin emitir ningún sonido.",
            "Establece un límite de 60 segundos. Cada respuesta correcta suma 1 punto, y el equipo con más puntos gana."
          ]
        },
        {
          id: "tips",
          title: "Consejos para una Fiesta de Halloween",
          description: "Hace que tu noche de charadas sea aún más terrorífica.",
          items: [
            "Juega bajo luces tenues o a la luz de las velas para crear una atmósfera misteriosa.",
            "Otorga puntos extra si los jugadores actúan sus prompts metidos en el papel de sus personajes de disfraz.",
            "Regala dulces de Halloween o golosinas temáticas al equipo ganador."
          ]
        }
      ],
      relatedTitle: "Más Juegos Temáticos",
      relatedLinks: [
        { href: "/", label: "Generador de Charadas Gratis", description: "Genera palabras e ideas al azar." },
        { href: "/halloween-party-games/", label: "Juegos de Fiesta de Halloween", description: "Otros juegos divertidos para la noche." },
        { href: "/family-charades-generator/", label: "Generador de Charadas Familiares", description: "Prompts limpios para todas las edades." },
        { href: "/charades-generator-for-kids/", label: "Generador de Charadas para Niños", description: "Prompts sencillos para los pequeños." }
      ],
      faqTitle: "Preguntas Frecuentes",
      faq: [
        {
          question: "¿Este generador de Halloween es seguro para niños?",
          answer: "¡Sí! Aunque incluye monstruos clásicos como fantasmas y brujas, todos los prompts son aptos para todas las edades y están pensados para divertir en vez de asustar de verdad."
        },
        {
          question: "¿Puedo usarlo para fiestas en el colegio?",
          answer: "¡Claro! A los docentes les encanta usar nuestro generador para las fiestas escolares de Halloween. Es totalmente escolar y educativo."
        },
        {
          question: "¿Necesitamos accesorios para jugar?",
          answer: "¡No se necesita nada! La gracia de las charadas es representarlo todo usando únicamente el lenguaje corporal y la mímica."
        }
      ]
    },
    fr: {
      path: "/halloween-charades-generator",
      title: "Générateur de Mime d'Halloween - Idées de Mots Spéciaux",
      description: "Générateur de mimes d'Halloween gratuit. Mots effrayants, monstres, sorcières et règles pour les enfants et les soirées déguisées.",
      keywords: [
        "mime halloween",
        "générateur mime halloween",
        "mots de mime halloween",
        "idées de mime halloween"
      ],
      heroLabel: "Activités pour fêtes d'Halloween",
      heroTitle: "Générateur de Mime d'Halloween",
      heroDescription: "Obtenez des mots de mime sur le thème d'Halloween. Générez des listes pour vos soirées déguisées, fêtes d'enfants et réunions de famille.",
      primaryCta: "Générer des mots d'Halloween",
      copyLabel: "Copiar lista de palabras",
      copiedLabel: "Copié !",
      generatorTitle: "Choisissez votre catégorie",
      promptListTitle: "Liste de mots d'Halloween pour le mime",
      generatorDescription: "Sélectionnez une catégorie ou mélangez les monstres classiques, les objets mystérieux et les actions effrayantes.",
      generatorButton: "Nouveau mot d'Halloween",
      groups: [
        {
          id: "monsters",
          label: "Monstres et Créatures",
          description: "Les monstres classiques et personnages d'Halloween.",
          prompts: ["Fantôme", "Vampire", "Sorcière", "Momie", "Zombie", "Squelette"]
        },
        {
          id: "items",
          label: "Objets Mystérieux",
          description: "Symboles et articles traditionnels de la fête.",
          prompts: ["Citrouille d'Halloween", "Chapeau de sorcière", "Toile d'araignée", "Bonbons", "Chaudron", "Balai de sorcière"]
        },
        {
          id: "actions",
          label: "Actions d'Halloween",
          description: "Actions thématiques amusantes à mimer.",
          prompts: ["Bonbons ou un sort", "Voler sur un balai", "Hurler à la lune", "Creuser une citrouille"]
        }
      ],
      sections: [
        {
          id: "how-to",
          title: "Comment Jouer au Mime d'Halloween",
          description: "Rendez votre partie mystérieuse et amusante pour tous.",
          items: [
            "Divisez les invités en équipes. Porter des costumes rend la mímica encore plus drôle !",
            "L'acteur mime le mot à l'aide de gestes et d'expressions faciales, sans aucun bruit.",
            "Réglez un temps de 60 secondes. Chaque mot deviné rapporte 1 point."
          ]
        },
        {
          id: "tips",
          title: "Conseils pour votre Fête d'Halloween",
          description: "Rendez votre soirée de jeux encore plus mystérieuse.",
          items: [
            "Jouez sous une lumière tamisée ou à la bougie pour créer une ambiance mystérieuse.",
            "Attribuez des points bonus si les joueurs restent dans le rôle de leur costume en mimant.",
            "Distribuez des bonbons d'Halloween ou des friandises à l'équipe gagnante."
          ]
        }
      ],
      relatedTitle: "Plus de Jeux Thématiques",
      relatedLinks: [
        { href: "/", label: "Générateur de Mime Gratuit", description: "Générez des mots et idées au hasard." },
        { href: "/halloween-party-games/", label: "Jeux de Fête d'Halloween", description: "D'autres jeux amusants pour la soirée." },
        { href: "/family-charades-generator/", label: "Mime en Famille", description: "Mimes propres pour tous les âges." },
        { href: "/charades-generator-for-kids/", label: "Mime pour Enfants", description: "Mimes simples pour les plus petits." }
      ],
      faqTitle: "Foire Aux Questions",
      faq: [
        {
          question: "Ce générateur d'Halloween est-il adapté aux enfants ?",
          answer: "Oui ! Bien qu'il contienne des monstres classiques, les mots sont amusants et conçus pour faire rire plutôt que pour terrifier."
        },
        {
          question: "Puis-je l'utiliser pour une fête d'école ?",
          answer: "Absolument ! Les enseignants adorent utiliser notre outil pour les célébrations d'Halloween en classe. Il est 100% adapté au milieu scolaire."
        },
        {
          question: "Faut-il des accessoires pour jouer ?",
          answer: "Aucun accessoire n'est requis ! Tout le charme du jeu réside dans l'utilisation du langage corporel et de l'expression physique."
        }
      ]
    },
    pt: {
      path: "/halloween-charades-generator",
      title: "Gerador de Mímica de Halloween - Ideias de Palavras Assustadoras",
      description: "Gerador interativo de mímica de Halloween gratuito. Monstros assustadores, ações arrepiantes e regras divertidas para festas de Halloween e crianças.",
      keywords: [
        "mimica halloween",
        "gerador mimica halloween",
        "palavras mimica halloween",
        "ideias mimica halloween"
      ],
      heroLabel: "Ideias de jogos assustadoramente divertidos",
      heroTitle: "Mímica de Halloween",
      heroDescription: "Gere monstros assustadores, criaturas mágicas e ações misteriosas para animar o seu jogo de mímica em festas de Halloween infantis ou adultas.",
      primaryCta: "Gerar palavra de Halloween",
      copyLabel: "Copiar palavra",
      copiedLabel: "Copiado !",
      generatorTitle: "Gerador de mímica de Halloween",
      promptListTitle: "Lista de palavras de Halloween para mímica",
      generatorDescription: "Selecione o grupo que combine com o seu público, depois imite a palavra misteriosa em silêncio absoluto.",
      generatorButton: "Nova palavra de Halloween",
      groups: [
        {
          id: "monsters",
          label: "Monstros & Criaturas",
          description: "Criaturas clássicas das histórias de terror.",
          prompts: ["Vampiro", "Zumbi", "Fantasma", "Lobisomem", "Esqueleto", "Múmia"]
        },
        {
          id: "objects",
          label: "Objetos & Símbolos",
          description: "Elementos típicos do Halloween.",
          prompts: ["Abóbora iluminada", "Vassoura de bruxa", "Caldeirão", "Teia de aranha", "Caixão", "Chapéu de bruxa"]
        },
        {
          id: "actions",
          label: "Ações Misteriosas",
          description: "Atividades divertidas e assustadoras.",
          prompts: ["Voar em uma vassoura", "Sair do túmulo", "Uivar para a lua", "Preparar uma poção", "Pedir doces ou travessuras", "Fazer uma risada maléfica"]
        }
      ],
      sections: [
        {
          id: "how-to-play",
          title: "Como Jogar Mímica de Halloween",
          description: "Regras simples para dar um toque especial de terror à sua brincadeira.",
          items: [
            "Não são permitidos sons ou sussurros. Todo o medo deve vir do visual e dos movimentos corporais.",
            "Defina 60 segundos por rodada para manter o ritmo ágil e divertido.",
            "Os jogadores podem usar elementos de suas próprias fantasias reais para ajudar nos mimes."
          ]
        },
        {
          id: "party-tips",
          title: "Dicas de Festa de Halloween",
          description: "Crie uma atmosfera envolvente para animar a noite dos seus convidados.",
          items: [
            "Jogue sob luz baixa ou à luz de velas para criar uma atmosfera misteriosa e fantasmagórica.",
            "Dê pontos bônus se o jogador mantiver os trejeitos do personagem de sua fantasia enquanto mima.",
            "Use doces de Halloween ou guloseimas como recompensa para a equipe vencedora."
          ]
        }
      ],
      relatedTitle: "Mais Jogos Temáticos",
      relatedLinks: [
        { href: "/", label: "Gerador de Mímica Grátis", description: "Consiga palavras aleatórias." },
        { href: "/halloween-party-games/", label: "Jogos de Festa de Halloween", description: "Outras atividades assustadoras para sua noite." },
        { href: "/family-charades-generator/", label: "Mímica em Família", description: "Palavras limpas para todas as idades." },
        { href: "/charades-generator-for-kids/", label: "Mímica para Crianças", description: "Mímicas fáceis para os pequenos." }
      ],
      faqTitle: "Perguntas Frequentes",
      faq: [
        {
          question: "Este gerador de Halloween é adequado para crianças ?",
          answer: "Sim ! Embora contenha monstros clássicos do folclore, as palavras são lúdicas e desenhadas para fazer rir em vez de assustar."
        },
        {
          question: "Posso usá-lo para uma festa escolar ?",
          answer: "Com certeza ! Professores adoram usar nossa ferramenta em comemorações escolares de Halloween por ser 100% livre de termos inadequados."
        },
        {
          question: "É necessário algum acessório para jogar ?",
          answer: "Não é necessário nenhum tipo de acessório. O jogo depende pura e simplesmente da expressão física e da linguagem corporal."
        }
      ]
    },
    ja: {
      path: "/halloween-charades-generator",
      title: "ハロウィンジェスチャーゲームお題一覧 - 不気味で楽しいお題",
      description: "ハロウィンパーティーを盛り上げる無料ジェスチャーお題メーカー。おばけ、ゾンビ、魔女などのモンスターやハロウィンならではの面白いお題を収録。",
      keywords: [
        "ハロウィン ゲーム",
        "ハロウィン お題",
        "おばけ ジェスチャー",
        "パーティーゲーム ハロウィン"
      ],
      heroLabel: "怖くて面白いジェスチャーお題",
      heroTitle: "ハロウィンジェスチャーゲーム",
      heroDescription: "ドラキュラ、ゾンビ、カボチャのランタンなど、不気味でユニークなハロウィンテーマのお題セット。",
      primaryCta: "ハロウィンお題をシャッフル",
      copyLabel: "お題をコピー",
      copiedLabel: "コピー完了！",
      generatorTitle: "ハロウィンお題メーカー",
      promptListTitle: "ハロウィンパーティー用のお題リスト",
      generatorDescription: "カテゴリを選択して、声を出さずに不気味なジェスチャーをします。パーティーの余興や仮装大会に最適です。",
      generatorButton: "新しいお題を出す",
      groups: [
        {
          id: "monsters",
          label: "モンスター＆クリーチャー",
          description: "ホラーやハロウィン定番の怪物たち。",
          prompts: ["吸血鬼（ヴァンパイア）", "ゾンビ", "幽霊（ゴースト）", "狼男", "ガイコツ", "ミイラ男"]
        },
        {
          id: "objects",
          label: "グッズ＆シンボル",
          description: "ハロウィンの装飾や象徴するもの。",
          prompts: ["ジャック・オー・ランタン", "魔女のほうき", "大釜", "クモの巣", "棺桶", "魔女の帽子"]
        },
        {
          id: "actions",
          label: "不気味なアクション",
          description: "ちょっと怖い、でも面白いコミカルな動き。",
          prompts: ["ほうきで空を飛ぶ", "墓場から這い出る", "満月に吠える", "怪しいポーションを混ぜる", "お菓子をねだる", "悪魔の笑い声をする"]
        }
      ],
      sections: [
        {
          id: "how-to-play",
          title: "ハロウィンならではのジェスチャーゲームのルール",
          description: "仮装パーティーを10倍盛り上げるための特別仕様ルール。",
          items: [
            "ハミングや怪しい笑い声も含め、音出しは一切反則。完全なサイレントホラーで演じてもらいます。",
            "制限時間は60秒。仮装をして動きづらい場合は、少し長めに設定してあげましょう。",
            "自分の『仮装』をヒントとして直接アピールしてもOKなルールにすると、仮装大会と兼ねて楽しめます。"
          ]
        },
        {
          id: "party-tips",
          title: "雰囲気作りのアイデア",
          description: "ハロウィンの夜を忘れられないイベントにするためのヒント。",
          items: [
            "部屋の照明を少し暗くするか、キャンドルの明かりだけでプレイすると、非常にミステリアスな雰囲気が出ます。",
            "演者が自分の仮装したキャラクターになりきってジェスチャーした場合、審査員から『面白ボーナス点』を与えるシステムがおすすめ。",
            "正解した人や勝ったチームには、お菓子（キャンディやチョコ）を景品として配りましょう。"
          ]
        }
      ],
      relatedTitle: "他のテーマ別ゲーム",
      relatedLinks: [
        { href: "/", label: "無料ジェスチャーゲームお題メーカー", description: "全ジャンルの単語をランダムにシャッフル。" },
        { href: "/halloween-party-games/", label: "ハロウィンパーティーゲーム一覧", description: "ハロウィンに使える他の定番レク。" },
        { href: "/family-charades-generator/", label: "家族向けお題メーカー", description: "子どもから大人まで遊べる簡単お題。" },
        { href: "/charades-generator-for-kids/", label: "子ども向けお題メーカー", description: "幼児・小学生向けの簡単お題。" }
      ],
      faqTitle: "よくある質問",
      faq: [
        {
          question: "お題は子どもにとって怖すぎませんか？",
          answer: "いいえ！吸血鬼やゾンビなどのモチーフは含まれますが、どれもコミカルで笑いを誘う設計になっており、子どもたちが怖がらない内容です。"
        },
        {
          question: "学校のハロウィンイベントでも使えますか？",
          answer: "はい、大歓迎です。小学校や中学校の英語の授業、子ども英会話教室のハロウィンアクティビティとして非常に人気があります。"
        },
        {
          question: "小道具などは必要ですか？",
          answer: "一切不要です！体一つで演じきるところがジェスチャーゲームの面白さです。仮装した衣装そのものが最高のアシストになります。"
        }
      ]
    }
  }
};
