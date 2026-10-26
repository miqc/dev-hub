/**
 * Deck visual dos 180s.
 *
 * Estrutura: abertura (identidade) + os 7 eixos sugeridos na página 4 do documento
 * oficial + fechamento. Cada eixo nasce sem conteúdo — o espaço fica marcado para
 * ser preenchido com fato seu, nunca com texto genérico.
 *
 * Regra de projeção: o slide carrega a prova visual; a fala carrega a história.
 */

export type DeckSlide = {
  id: string;
  /** Segundos reservados para este slide. Somatório = TARGET_SECONDS. */
  seconds: number;
  /** Blocos do roteiro que exibem este slide. */
  blockIds: string[];
  kind: "identity" | "axis" | "closing";
  kicker: string;
  headline: string;
  support?: string;
  eyebrow?: string;
  /** Formação acadêmica, um item por curso. */
  education?: Education[];
  /** Experiência profissional que ancora o eixo. */
  internship?: Internship;
  /** Texto oficial do documento que define o que este eixo pede. */
  prompt?: string;
  /** Rótulo do espaço reservado; o conteúdo real ainda não existe. */
  empty?: string;
  /** Conteúdo já preenchido de um eixo. Quando ausente, o slide mostra o espaço vazio. */
  language?: LanguageBlock;
  place?: ResidenceBlock;
};

export type LanguageSkill = {
  label: string;
  /** Nível declarado, nas palavras do documento: básico, intermediário, avançado ou fluente. */
  level: "Básico" | "Intermediário" | "Avançado" | "Fluente";
};

export type Internship = {
  organization: string;
  city: string;
  role: string;
  duration: string;
  /** O que a duração significa, sem inventar o que a pessoa faz lá. */
  note: string;
};

export type Education = {
  course: string;
  institution: string;
  term: string;
};

/** Residência: onde mora e o que isso responde sobre mobilidade. */
export type ResidenceBlock = {
  city: string;
  /** Estado e país, em uma linha. */
  region: string;
  /** Vínculo com a cidade — a afirmação principal do slide. */
  bond: string;
  /** Consequência prática, em uma frase curta. */
  consequence: string;
};

/** Um idioma com o nível decomposto por habilidade. */
export type LanguageBlock = {
  name: string;
  /** Resumo em uma linha, lido de relance. */
  summary: string;
  skills: LanguageSkill[];
};

/**
 * Experiência atual. Vive fora dos slides porque aparece em dois lugares:
 * na identidade (slide 1) e como contexto do eixo de Competências (slide 6).
 */
export const internship: Internship = {
  organization: "Prefeitura Municipal de São José dos Campos",
  city: "São José dos Campos · SP",
  role: "Estagiário",
  duration: "1 ano e 3 meses",
  note: "Em andamento",
};

/** Os 7 eixos da página 4, com o texto do próprio documento. */
export const deckAxes: DeckSlide[] = [
  {
    id: "idioma",
    seconds: 10,
    blockIds: ["contribuicao"],
    kind: "axis",
    kicker: "Eixo 1 de 7",
    headline: "Idioma",
    prompt:
      "Idiomas que você possui conhecimento e seu nível de proficiência (básico, intermediário, avançado ou fluente). Se desejar, conte como adquiriu esse conhecimento.",
    language: {
      name: "Inglês",
      summary: "Escrita e leitura intermediárias · Conversação básica",
      skills: [
        { label: "Escrita", level: "Intermediário" },
        { label: "Leitura", level: "Intermediário" },
        { label: "Conversação", level: "Básico" },
      ],
    },
  },
  {
    id: "residencia",
    seconds: 10,
    blockIds: ["abertura"],
    kind: "axis",
    kicker: "Eixo 2 de 7",
    headline: "Residência",
    prompt:
      "Local onde você mora e, se você não mora no local da vaga, a sua disponibilidade para se mudar.",
    place: {
      city: "São José dos Campos",
      region: "São Paulo · Brasil",
      bond: "Joseense desde que nasci.",
      consequence: "Sem mudança de cidade, sem prazo de transição.",
    },
  },
  {
    id: "extracurriculares",
    seconds: 15,
    blockIds: ["trajetoria"],
    kind: "axis",
    kicker: "Eixo 3 de 7",
    headline: "Atividades Extracurriculares",
    prompt:
      "Empresa Júnior, BAJA Fórmula, Iniciação Científica, Olimpíadas Científicas ou outras.",
    empty: "A atividade, o que você fez nela e o que existe hoje por causa dela.",
  },
  {
    id: "voluntarias",
    seconds: 5,
    blockIds: ["contribuicao"],
    kind: "axis",
    kicker: "Eixo 4 de 7",
    headline: "Ações Voluntárias",
    prompt:
      "Apoio a instituições, ações sociais, projetos educacionais, campanhas de arrecadação, iniciativas ambientais ou atividades na sua comunidade.",
    empty: "Uma frase, ou corte este eixo: 5 segundos não sustentam mais que isso.",
  },
  {
    id: "competencias",
    seconds: 30,
    blockIds: ["trajetoria", "pilar"],
    kind: "axis",
    kicker: "Eixo 5 de 7",
    headline: "Competências e habilidades",
    prompt:
      "Compartilhe características que fazem parte da sua forma de agir e aprender. Utilize exemplos da sua trajetória para mostrar como elas aparecem na prática.",
    internship: internship,
    empty: "Duas competências, cada uma provada por um episódio concreto do estágio.",
  },
  {
    id: "pilar",
    seconds: 40,
    blockIds: ["pilar"],
    kind: "axis",
    kicker: "Eixo 6 de 7",
    headline: "Pilar de cultura",
    prompt:
      "Escolha o pilar de cultura com o qual você mais se identifica, explique por que ele foi a sua escolha e como ele pode contribuir para o seu desenvolvimento.",
    empty: "Pilar 4 — Trate a complexidade com simplicidade. Dois exemplos, um deles de erro.",
  },
  {
    id: "tecnicos",
    seconds: 25,
    blockIds: ["trajetoria", "embraer"],
    kind: "axis",
    kicker: "Eixo 7 de 7",
    headline: "Conhecimentos Técnicos",
    prompt:
      "Liste as ferramentas e tecnologias que você conhece e informe seu nível de conhecimento em cada uma delas.",
    empty: "Só o que você defende sob pergunta. Nível declarado por tecnologia.",
  },
];

export const deckSlides: DeckSlide[] = [
  {
    id: "abertura",
    seconds: 20,
    blockIds: ["abertura"],
    kind: "identity",
    kicker: "Etapa Dinâmica 2027",
    eyebrow: "Olá, eu sou",
    headline: "Micael Leal",
    support: "Estudante de Desenvolvimento",
    education: [
      {
        course: "Inteligência Artificial",
        institution: "UNICIVE",
        term: "1º semestre",
      },
      {
        course: "Análise e Desenvolvimento de Sistemas",
        institution: "UNIP",
        term: "4º semestre",
      },
    ],
    internship: internship,
  },
  ...deckAxes,
  {
    id: "fechamento",
    seconds: 10,
    blockIds: ["fechamento"],
    kind: "closing",
    kicker: "Fechamento",
    headline: "São José dos Campos. Pronto para começar.",
    support: "Micael Leal · Estudante de Desenvolvimento",
  },
];
