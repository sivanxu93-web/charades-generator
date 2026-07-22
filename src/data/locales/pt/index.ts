import type { CharadesWord } from "@/data/charades-types";

const actions: CharadesWord[] = [
  { word: "Escovar os dentes", category: "actions", difficulty: "easy", ageGroup: "kids", wordCount: 3 },
  { word: "Jogar futebol", category: "actions", difficulty: "easy", ageGroup: "all", wordCount: 2 },
  { word: "Tocar violão", category: "actions", difficulty: "medium", ageGroup: "all", wordCount: 2 },
  { word: "Cantar no chuveiro", category: "actions", difficulty: "easy", ageGroup: "all", wordCount: 3 },
  { word: "Pintar a Mona Lisa", category: "actions", difficulty: "medium", ageGroup: "all", wordCount: 4 },
  { word: "Andar de bicicleta", category: "actions", difficulty: "easy", ageGroup: "kids", wordCount: 3 },
  { word: "Cozinhar uma pizza", category: "actions", difficulty: "easy", ageGroup: "all", wordCount: 3 },
  { word: "Tirar uma selfie", category: "actions", difficulty: "easy", ageGroup: "all", wordCount: 3 },
  { word: "Pescar um peixe", category: "actions", difficulty: "easy", ageGroup: "all", wordCount: 3 },
  { word: "Navegar na internet", category: "actions", difficulty: "medium", ageGroup: "all", wordCount: 3 },
  { word: "Trocar uma lâmpada", category: "actions", difficulty: "medium", ageGroup: "all", wordCount: 3 },
  { word: "Fazer malabarismo", category: "actions", difficulty: "hard", ageGroup: "all", wordCount: 2 },
];

const animals: CharadesWord[] = [
  { word: "Leão", category: "animals", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "Macaco", category: "animals", difficulty: "easy", ageGroup: "kids", wordCount: 1 },
  { word: "Girafa", category: "animals", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "Golfinho", category: "animals", difficulty: "medium", ageGroup: "all", wordCount: 1 },
  { word: "Preguiça", category: "animals", difficulty: "medium", ageGroup: "all", wordCount: 1 },
  { word: "Caranguejo", category: "animals", difficulty: "medium", ageGroup: "all", wordCount: 1 },
  { word: "Borboleta", category: "animals", difficulty: "easy", ageGroup: "kids", wordCount: 1 },
  { word: "Canguru", category: "animals", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "Jacaré", category: "animals", difficulty: "easy", ageGroup: "kids", wordCount: 1 },
  { word: "Morcego", category: "animals", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "Tartaruga marinha", category: "animals", difficulty: "medium", ageGroup: "kids", wordCount: 2 },
  { word: "Ornitorrinco", category: "animals", difficulty: "hard", ageGroup: "all", wordCount: 1 },
];

const christmas: CharadesWord[] = [
  { word: "Papai Noel", category: "christmas", difficulty: "easy", ageGroup: "all", wordCount: 2 },
  { word: "Árvore de Natal", category: "christmas", difficulty: "easy", ageGroup: "all", wordCount: 3 },
  { word: "Boneco de neve", category: "christmas", difficulty: "easy", ageGroup: "kids", wordCount: 3 },
  { word: "Rena", category: "christmas", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "Presente de Natal", category: "christmas", difficulty: "easy", ageGroup: "all", wordCount: 3 },
  { word: "Panetone", category: "christmas", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "Estrela de Belém", category: "christmas", difficulty: "medium", ageGroup: "all", wordCount: 3 },
  { word: "Pisca-pisca", category: "christmas", difficulty: "medium", ageGroup: "all", wordCount: 1 },
  { word: "Trenó do Papai Noel", category: "christmas", difficulty: "medium", ageGroup: "all", wordCount: 4 },
];

const movies: CharadesWord[] = [
  { word: "Cidade de Deus", category: "movies", difficulty: "hard", ageGroup: "all", wordCount: 3 },
  { word: "Minha Mãe é uma Peça", category: "movies", difficulty: "medium", ageGroup: "all", wordCount: 5 },
  { word: "Tropa de Elite", category: "movies", difficulty: "medium", ageGroup: "all", wordCount: 3 },
  { word: "O Rei Leão", category: "movies", difficulty: "easy", ageGroup: "kids", wordCount: 3 },
  { word: "Titanic", category: "movies", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "Harry Potter", category: "movies", difficulty: "easy", ageGroup: "all", wordCount: 2 },
  { word: "Coringa", category: "movies", difficulty: "medium", ageGroup: "all", wordCount: 1 },
  { word: "Star Wars", category: "movies", difficulty: "easy", ageGroup: "all", wordCount: 2 },
  { word: "Central do Brasil", category: "movies", difficulty: "hard", ageGroup: "all", wordCount: 3 },
  { word: "Divertida Mente", category: "movies", difficulty: "easy", ageGroup: "kids", wordCount: 2 },
];

const disney: CharadesWord[] = [
  { word: "Mickey Mouse", category: "disney", difficulty: "easy", ageGroup: "kids", wordCount: 2 },
  { word: "Pato Donald", category: "disney", difficulty: "easy", ageGroup: "kids", wordCount: 2 },
  { word: "Cinderela", category: "disney", difficulty: "easy", ageGroup: "kids", wordCount: 1 },
  { word: "Elsa", category: "disney", difficulty: "easy", ageGroup: "kids", wordCount: 1 },
  { word: "Simba", category: "disney", difficulty: "easy", ageGroup: "kids", wordCount: 1 },
  { word: "Branca de Neve", category: "disney", difficulty: "easy", ageGroup: "kids", wordCount: 3 },
  { word: "Aladdin", category: "disney", difficulty: "easy", ageGroup: "kids", wordCount: 1 },
  { word: "Peter Pan", category: "disney", difficulty: "easy", ageGroup: "kids", wordCount: 2 },
  { word: "Woody", category: "disney", difficulty: "easy", ageGroup: "kids", wordCount: 1 },
  { word: "Moana", category: "disney", difficulty: "easy", ageGroup: "kids", wordCount: 1 },
];

const funny: CharadesWord[] = [
  { word: "Pisar em um chiclete", category: "funny", difficulty: "easy", ageGroup: "all", wordCount: 4 },
  { word: "Esquecer a senha do celular", category: "funny", difficulty: "medium", ageGroup: "all", wordCount: 5 },
  { word: "Tomar um susto", category: "funny", difficulty: "easy", ageGroup: "all", wordCount: 3 },
  { word: "Comer pimenta forte", category: "funny", difficulty: "easy", ageGroup: "all", wordCount: 3 },
  { word: "Conversar com uma parede", category: "funny", difficulty: "medium", ageGroup: "all", wordCount: 4 },
  { word: "Imitar o chefe", category: "funny", difficulty: "medium", ageGroup: "adults", wordCount: 3 },
  { word: "Andar de salto alto", category: "funny", difficulty: "easy", ageGroup: "all", wordCount: 4 },
  { word: "Fugir de uma barata voadora", category: "funny", difficulty: "easy", ageGroup: "all", wordCount: 5 },
  { word: "Tentar lamber o próprio cotovelo", category: "funny", difficulty: "hard", ageGroup: "all", wordCount: 5 },
];

const emotions: CharadesWord[] = [
  { word: "Feliz", category: "emotions", difficulty: "easy", ageGroup: "kids", wordCount: 1 },
  { word: "Triste", category: "emotions", difficulty: "easy", ageGroup: "kids", wordCount: 1 },
  { word: "Raiva", category: "emotions", difficulty: "easy", ageGroup: "kids", wordCount: 1 },
  { word: "Assustado", category: "emotions", difficulty: "easy", ageGroup: "kids", wordCount: 1 },
  { word: "Tímido", category: "emotions", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "Ansioso", category: "emotions", difficulty: "medium", ageGroup: "all", wordCount: 1 },
  { word: "Orgulhoso", category: "emotions", difficulty: "medium", ageGroup: "all", wordCount: 1 },
  { word: "Surpreso", category: "emotions", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "Apaixonado", category: "emotions", difficulty: "easy", ageGroup: "all", wordCount: 1 },
];

const professions: CharadesWord[] = [
  { word: "Médico", category: "professions", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "Professor", category: "professions", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "Bombeiro", category: "professions", difficulty: "easy", ageGroup: "kids", wordCount: 1 },
  { word: "Policial", category: "professions", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "Astronauta", category: "professions", difficulty: "medium", ageGroup: "kids", wordCount: 1 },
  { word: "Cozinheiro", category: "professions", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "Pintor", category: "professions", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "Cientista", category: "professions", difficulty: "medium", ageGroup: "all", wordCount: 1 },
  { word: "Fotógrafo", category: "professions", difficulty: "easy", ageGroup: "all", wordCount: 1 },
];

const objects: CharadesWord[] = [
  { word: "Celular", category: "objects", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "Escova de dente", category: "objects", difficulty: "easy", ageGroup: "all", wordCount: 3 },
  { word: "Guarda-chuva", category: "objects", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "Óculos de sol", category: "objects", difficulty: "easy", ageGroup: "all", wordCount: 3 },
  { word: "Martelo", category: "objects", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "Chave", category: "objects", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "Relógio", category: "objects", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "Livro", category: "objects", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "Cadeira", category: "objects", difficulty: "easy", ageGroup: "all", wordCount: 1 },
];

const bible: CharadesWord[] = [
  { word: "Noé", category: "bible", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "Davi e Golias", category: "bible", difficulty: "easy", ageGroup: "all", wordCount: 3 },
  { word: "Moisés abrindo o Mar Vermelho", category: "bible", difficulty: "medium", ageGroup: "all", wordCount: 5 },
  { word: "Arca de Noé", category: "bible", difficulty: "easy", ageGroup: "kids", wordCount: 3 },
  { word: "Adão e Eva", category: "bible", difficulty: "easy", ageGroup: "all", wordCount: 3 },
  { word: "Jesus caminhando sobre as águas", category: "bible", difficulty: "medium", ageGroup: "all", wordCount: 5 },
  { word: "Sansão", category: "bible", difficulty: "easy", ageGroup: "all", wordCount: 1 },
];

const celebrity: CharadesWord[] = [
  { word: "Pelé", category: "celebrity", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "Neymar", category: "celebrity", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "Fernanda Montenegro", category: "celebrity", difficulty: "medium", ageGroup: "all", wordCount: 2 },
  { word: "Anitta", category: "celebrity", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "Cristiano Ronaldo", category: "celebrity", difficulty: "easy", ageGroup: "all", wordCount: 2 },
  { word: "Gisele Bündchen", category: "celebrity", difficulty: "medium", ageGroup: "all", wordCount: 2 },
  { word: "Ayrton Senna", category: "celebrity", difficulty: "easy", ageGroup: "all", wordCount: 2 },
];

const family: CharadesWord[] = [
  { word: "Vovó fazendo crochê", category: "family", difficulty: "easy", ageGroup: "kids", wordCount: 3 },
  { word: "Papai limpando a casa", category: "family", difficulty: "easy", ageGroup: "kids", wordCount: 4 },
  { word: "Mamãe cozinhando", category: "family", difficulty: "easy", ageGroup: "kids", wordCount: 2 },
  { word: "Irmãozinho chorando", category: "family", difficulty: "easy", ageGroup: "kids", wordCount: 2 },
  { word: "Passeio no parque", category: "family", difficulty: "easy", ageGroup: "kids", wordCount: 3 },
  { word: "Viagem de carro", category: "family", difficulty: "easy", ageGroup: "kids", wordCount: 3 },
];

const thanksgiving: CharadesWord[] = [
  { word: "Peru assado", category: "thanksgiving", difficulty: "easy", ageGroup: "all", wordCount: 2 },
  { word: "Comer em família", category: "thanksgiving", difficulty: "easy", ageGroup: "all", wordCount: 3 },
  { word: "Agradecer pelas bênçãos", category: "thanksgiving", difficulty: "medium", ageGroup: "all", wordCount: 3 },
  { word: "Torta de abóbora", category: "thanksgiving", difficulty: "medium", ageGroup: "all", wordCount: 3 },
  { word: "Reunião de família", category: "thanksgiving", difficulty: "easy", ageGroup: "all", wordCount: 3 },
];

const halloween: CharadesWord[] = [
  { word: "Abóbora iluminada", category: "halloween", difficulty: "easy", ageGroup: "all", wordCount: 2 },
  { word: "Fantasma assustador", category: "halloween", difficulty: "easy", ageGroup: "kids", wordCount: 2 },
  { word: "Bruxa voando na vassoura", category: "halloween", difficulty: "medium", ageGroup: "all", wordCount: 4 },
  { word: "Vampiro", category: "halloween", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "Zumbi", category: "halloween", difficulty: "easy", ageGroup: "all", wordCount: 1 },
  { word: "Casa mal-assombrada", category: "halloween", difficulty: "easy", ageGroup: "all", wordCount: 2 },
  { word: "Doces ou travessuras", category: "halloween", difficulty: "easy", ageGroup: "all", wordCount: 3 },
];

export const ptCharadesDatabase: CharadesWord[] = [
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
