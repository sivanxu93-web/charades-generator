import type { Locale } from "@/i18n/config";

export type Stage2PageKey =
  | "truth-or-dare-generator"
  | "would-you-rather-generator"
  | "family-game-night-ideas"
  | "bible-charades"
  | "halloween-party-games"
  | "christmas-party-games";

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
];

export const stage2Pages: Record<Stage2PageKey, Record<Locale, Stage2PageContent>> = {
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
};
