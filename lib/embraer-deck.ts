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
  kind: "identity" | "system" | "axis" | "closing";
  kicker: string;
  headline: string;
  support?: string;
  eyebrow?: string;
  /** Formação acadêmica, um item por curso. */
  education?: Education[];
  /** Experiência profissional que ancora o eixo. */
  internship?: Internship;
  /** Repositórios públicos que provam o eixo de projetos. */
  projects?: ProjectCard[];
  /** Competências: como a pessoa trabalha, cada uma provada por um fato. */
  competences?: Competence[];
  /** Conhecimentos técnicos agrupados por área, com nível declarado. */
  tech?: TechGroup[];
  /** Pilar escolhido entre os cinco, com os demais listados ao lado. */
  pillarChoice?: { chosenId: string };
  /** Entrega profissional: o que foi construído, em blocos. */
  system?: { support: string; blocks: { label: string; detail: string }[] };
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

export type SkillLevel = "Básico" | "Intermediário" | "Avançado";

export type TechItem = { name: string; level: SkillLevel };

export type TechGroup = { area: string; items: TechItem[] };

export type Competence = {
  name: string;
  /** O que a competência significa na prática, em uma linha. */
  claim: string;
  /** O fato verificável que a prova. */
  proof: string;
};

export type ProjectCard = {
  name: string;
  /** O que o projeto faz, em uma linha. */
  what: string;
  /** Natureza do projeto: cliente, acadêmico ou pessoal. */
  kind: string;
  /** Tecnologias por camada, quando o projeto é multiplataforma. */
  stack: { layer: string; tech: string }[];
  /** Caminho da imagem em /public. Ausente = o card mostra o espaço reservado. */
  image?: string;
  /** Link público, quando existe. */
  href?: string;
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
    seconds: 8,
    blockIds: ["contribuicao"],
    kind: "axis",
    kicker: "Eixo 1 de 6",
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
    seconds: 5,
    blockIds: ["abertura"],
    kind: "axis",
    kicker: "Eixo 2 de 6",
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
    id: "projetos",
    seconds: 15,
    blockIds: ["trajetoria"],
    kind: "axis",
    kicker: "Eixo 3 de 6",
    headline: "Projetos",
    prompt:
      "Empresa Júnior, BAJA Fórmula, Iniciação Científica, Olimpíadas Científicas ou outras. Aqui: repositórios públicos, o que existe de verificável fora do estágio.",
    projects: [
      {
        name: "Analisador de Similaridade Textual",
        what: "Módulo do sistema da Prefeitura: compara assunto entre petições e defesas.",
        kind: "Módulo do sistema",
        stack: [
          { layer: "Linguagem", tech: "Python" },
          { layer: "NLP", tech: "spaCy" },
        ],
      },
      {
        name: "Distrito Financeiro",
        what: "Aplicação financeira da Barbearia Distrito, com autenticação centralizada em uma API Node.",
        kind: "Projeto de cliente",
        stack: [
          { layer: "Frontend", tech: "TypeScript · Vite" },
          { layer: "Backend", tech: "Node sem framework" },
          { layer: "Dados", tech: "SQLite · PostgreSQL" },
          { layer: "Deploy", tech: "Docker · Render" },
        ],
      },
      {
        name: "SmartCall",
        what: "Gerenciamento de chamados com integração de IA prevista, em quatro plataformas.",
        kind: "Projeto acadêmico",
        stack: [
          { layer: "IA", tech: "Python" },
          { layer: "Web", tech: "React JS" },
          { layer: "Mobile", tech: "React Native" },
          { layer: "Desktop", tech: "C#" },
        ],
      },
    ],
  },
  {
    id: "competencias",
    seconds: 25,
    blockIds: ["trajetoria", "pilar"],
    kind: "axis",
    kicker: "Eixo 4 de 6",
    headline: "Competências e habilidades",
    prompt:
      "Compartilhe características que fazem parte da sua forma de agir e aprender. Utilize exemplos da sua trajetória para mostrar como elas aparecem na prática.",
    internship: internship,
    competences: [
      {
        name: "Aprender rápido",
        claim: "Entro em stack nova e entrego em semanas, não em semestres.",
        proof:
          "SmartCall em quatro plataformas — Python, React, React Native e C# — enquanto cursava duas graduações.",
      },
      {
        name: "Pensar em produção",
        claim: "Não paro em 'funciona na minha máquina'.",
        proof:
          "Distrito Financeiro roda em SQLite local e PostgreSQL em produção, com senha em scrypt, Docker e deploy configurado.",
      },
    ],
  },
  {
    id: "pilar",
    seconds: 40,
    blockIds: ["pilar"],
    kind: "axis",
    kicker: "Eixo 5 de 6",
    headline: "Pilar de cultura",
    prompt:
      "Escolha o pilar de cultura com o qual você mais se identifica, explique por que ele foi a sua escolha e como ele pode contribuir para o seu desenvolvimento.",
    pillarChoice: { chosenId: "simplicidade" },
  },
  {
    id: "tecnicos",
    seconds: 14,
    blockIds: ["trajetoria", "embraer"],
    kind: "axis",
    kicker: "Eixo 6 de 6",
    headline: "Conhecimentos Técnicos",
    prompt:
      "Liste as ferramentas e tecnologias que você conhece e informe seu nível de conhecimento em cada uma delas.",
    tech: [
      {
        area: "Frontend",
        items: [
          { name: "TypeScript", level: "Avançado" },
          { name: "React · Next.js", level: "Avançado" },
          { name: "Tailwind CSS", level: "Intermediário" },
        ],
      },
      {
        area: "Backend",
        items: [
          { name: "Node.js", level: "Intermediário" },
          { name: "Python", level: "Intermediário" },
          { name: "C# · .NET", level: "Básico" },
        ],
      },
      {
        area: "Dados e infra",
        items: [
          { name: "SQLite", level: "Intermediário" },
          { name: "PostgreSQL", level: "Intermediário" },
          { name: "Docker", level: "Básico" },
        ],
      },
    ],
  },
];

/** Estágio: entra logo antes de Projetos, para a bagagem vir antes dos repositórios. */
const internshipSlide: DeckSlide = {
  id: "estagio",
  seconds: 35,
  blockIds: ["trajetoria"],
  kind: "system",
  kicker: "Prefeitura de SJC",
  headline: "Experiência de estágio",
  system: {
    support: "1 ano e 3 meses · em andamento",
    blocks: [
      {
        label: "Desenvolvimento de um sistema moderno do zero",
        detail: "Backend e frontend construídos pelos estagiários, sem base de código anterior.",
      },
      {
        label: "Migração do sistema legado para o novo",
        detail: "Substituição do sistema em uso, sem interromper a operação da Prefeitura.",
      },
      {
        label: "Infraestrutura, deploy e produção",
        detail: "Ambiente, publicação e sustentação, em time e em contato com stakeholders.",
      },
    ],
  },
  };

export const deckSlides: DeckSlide[] = [
  {
    id: "abertura",
    seconds: 15,
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
  ...deckAxes.slice(0, 2),
  internshipSlide,
  ...deckAxes.slice(2),
  {
    id: "fechamento",
    seconds: 8,
    blockIds: ["fechamento"],
    kind: "closing",
    kicker: "Fechamento",
    headline: "São José dos Campos. Pronto para começar.",
    support: "Micael Leal · Estudante de Desenvolvimento",
  },
];
