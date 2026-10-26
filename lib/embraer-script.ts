/**
 * Fatos extraídos de "orientações.pdf" (Programa de Estágio Embraer · Etapa Dinâmica 2027).
 * Os pilares são texto oficial: não traduzir nem parafrasear.
 */

export const TOTAL_SECONDS = 180;
export const TARGET_SECONDS = 165;

/** ~2.2 palavras por segundo em português, em ritmo de conversa. */
export const WORDS_PER_SECOND = 2.2;

/** mm:ss truncado; valores negativos são esperados (estouro de tempo). */
export function formatClock(value: number) {
  const safe = Math.max(0, Math.trunc(value));
  return `${Math.floor(safe / 60)}:${String(safe % 60).padStart(2, "0")}`;
}

export type CulturePillar = {
  id: string;
  index: number;
  label: string;
  lines: string[];
};

export const culturePillars: CulturePillar[] = [
  {
    id: "um-time",
    index: 1,
    label: "Uma Embraer. Um só time.",
    lines: [
      "Sempre aja com generosidade.",
      "Faça o que for melhor para a empresa e seus stakeholders.",
      "Empodere o time para que trabalhem com sucesso, delegue com responsabilidade e ofereça apoio.",
      "Seja confiável, coerente em suas ações e confie nas pessoas.",
    ],
  },
  {
    id: "resultados",
    index: 2,
    label: "Seja responsável pelos resultados da empresa.",
    lines: [
      "Busque continuamente entender nosso negócio e como geramos resultado.",
      "Priorize os resultados da empresa e não somente os da sua área.",
      "Cuide dos recursos da empresa como se fossem os seus.",
    ],
  },
  {
    id: "abertura",
    index: 3,
    label: "Tenha abertura e honestidade ao falar e ouvir.",
    lines: [
      "Tenha atitude respeitosa nos diálogos. Valorize diferentes perspectivas e opiniões.",
      "Demonstre vulnerabilidade e ouça com a mente aberta.",
      "Desafie ideias e critique processos mas sendo gentil com pessoa.",
    ],
  },
  {
    id: "simplicidade",
    index: 4,
    label: "Trate a complexidade com simplicidade.",
    lines: [
      "Sempre foque no que agrega valor.",
      "Busque entender os porquês antes de agir.",
      "Busque a excelência, mas evite preciosismo.",
    ],
  },
  {
    id: "primeiro-voo",
    index: 5,
    label: "Viva cada dia como se fosse um primeiro voo.",
    lines: [
      "Celebre conquistas e valorize nossa história.",
      "Viva cada dia como se fosse um primeiro voo.",
      "Lidere com o coração, respeite a diversidade e valorize nossas pessoas.",
      "Entregue o melhor valor para clientes e demais stakeholders.",
    ],
  },
];

/** Pilar escolhido para ancorar a apresentação. */
export const CHOSEN_PILLAR_ID = "simplicidade";

export type PresentationTabId = "briefing" | "roteiro" | "ensaio" | "perguntas" | "ficha";

/** Navegação principal do /embraer: as três abas. */
export const presentationTabs: { id: PresentationTabId; label: string }[] = [
  { id: "briefing", label: "Briefing" },
  { id: "roteiro", label: "Roteiro" },
  { id: "ensaio", label: "Ensaio" },
  { id: "perguntas", label: "Perguntas" },
  { id: "ficha", label: "Ficha" },
];

export type ScriptBlock = {
  id: string;
  start: number;
  end: number;
  title: string;
  goal: string;
  /** O que precisa aparecer na fala. Cada item é uma frase, não um tema. */
  mustSay: string[];
  /** Texto do slide: seis palavras no máximo. */
  slide: string;
  /** O que sai primeiro se o ensaio estourar o tempo. */
  cut: string;
};

/** Arquitetura dos 180s. Somar `end - start` = 180. */
export const scriptBlocks: ScriptBlock[] = [
  {
    id: "abertura",
    start: 0,
    end: 20,
    title: "Abertura + âncora",
    goal: "Quem você é, onde estuda, e o fato que já te separa da maioria da sala.",
    mustSay: [
      "Micael Leal, ADS na UNIP e IA na UNICIVE, estagiando na Prefeitura de SJC há 1 ano e 3 meses.",
      "Joseense de nascimento, dito cedo e sem pedido de desculpa.",
      "O fio que amarra a apresentação inteira, anunciado agora.",
    ],
    slide: "Nome · Cursos · Estágio na Prefeitura",
    cut: "Cortar a saudação e o agradecimento inicial. A âncora não sai.",
  },
  {
    id: "trajetoria",
    start: 20,
    end: 70,
    title: "Trajetória com prova",
    goal: "Estágio como prova principal, mais um segundo artefato verificável.",
    mustSay: [
      "O que você faz na Prefeitura e o artefato que existe por causa disso.",
      "Experiência 2: idem, de natureza diferente da primeira.",
      "Uma frase ligando as duas: o padrão que se repete no seu jeito de trabalhar.",
    ],
    slide: "Duas provas verificáveis",
    cut: "A segunda experiência vira uma frase. Nunca cortar o artefato.",
  },
  {
    id: "embraer",
    start: 70,
    end: 95,
    title: "Por que a Embraer",
    goal: "O que você entende do negócio — não elogio à empresa.",
    mustSay: [
      "Um fato concreto sobre o que a Embraer faz ou como ganha dinheiro.",
      "A ligação entre esse fato e o tipo de engenharia que você quer fazer.",
      "A área ou o problema que te interessa, nomeado.",
    ],
    slide: "Onde eu quero contribuir",
    cut: "Cortar história da empresa e números de mercado. Fica só a ligação com você.",
  },
  {
    id: "pilar",
    start: 95,
    end: 140,
    title: "Pilar + dois exemplos",
    goal: "\"Trate a complexidade com simplicidade\": duas histórias concretas, uma delas de erro.",
    mustSay: [
      "O pilar nomeado, com as palavras oficiais.",
      "Exemplo 1: uma vez em que simplificar exigiu coragem ou custou algo.",
      "Exemplo 2: uma vez em que você complicou e aprendeu — a vulnerabilidade aqui é o que prova honestidade.",
      "A frase que traduz o pilar para o seu trabalho: entender o porquê antes de agir.",
    ],
    slide: "Complexidade → simplicidade",
    cut: "O exemplo 2 encurta para duas frases. Nunca cortar o exemplo 1.",
  },
  {
    id: "contribuicao",
    start: 140,
    end: 170,
    title: "Contribuição + idioma",
    goal: "O que você entrega nos primeiros 90 dias e seu nível real de inglês.",
    mustSay: [
      "Uma contribuição concreta e verificável para o time, não uma virtude.",
      "O nível de inglês por habilidade, com honestidade e sem pedido de desculpa.",
      "Disponibilidade de mudança, em uma frase objetiva.",
    ],
    slide: "Primeiros 90 dias",
    cut: "Cortar a disponibilidade se o tempo apertar — ela já está no slide.",
  },
  {
    id: "fechamento",
    start: 170,
    end: 180,
    title: "Fechamento",
    goal: "Uma frase que fecha o fio da abertura. Sem \"obrigado\".",
    mustSay: [
      "Retomada literal da âncora da abertura, agora resolvida.",
      "Uma frase de disponibilidade para perguntas do grupo.",
    ],
    slide: "Nome · contato",
    cut: "Nada. Dez segundos é o mínimo para não terminar no ar.",
  },
];

export const evaluationAxes = [
  {
    title: "Autenticidade",
    detail: "História própria, sem script de cursinho. Erros e escolhas contam.",
  },
  {
    title: "Criatividade",
    detail: "Um formato ou uma ideia que ninguém mais da sala vai usar.",
  },
  {
    title: "Coragem",
    detail: "Assumir uma decisão difícil ou uma mudança de rota.",
  },
  {
    title: "Ambição",
    detail: "Pensar além do óbvio: o que você faria se tivesse o dobro do escopo.",
  },
];

/** Regras do suporte visual: o deck carrega prova, a fala carrega a história. */
export const visualRules = [
  {
    title: "Um slide por eixo, mais abertura e fechamento",
    detail: "Nove slides: identidade, os sete eixos do documento e o fechamento. Nenhum slide decorativo.",
  },
  {
    title: "O slide nunca diz o que você vai falar",
    detail: "A banca lê mais rápido do que ouve. Texto repetido transforma a sua fala em leitura em voz alta.",
  },
  {
    title: "Cada slide prova algo diferente",
    detail: "Identidade, artefato, negócio, pilar, plano, contato. Se dois slides provam a mesma coisa, um deles é decorativo.",
  },
  {
    title: "Legível a três metros",
    detail: "Título grande, no máximo três blocos de apoio. Se precisa se aproximar para ler, está pequeno.",
  },
  {
    title: "Sempre com PDF de backup",
    detail: "Site, notebook e internet podem falhar. O PDF do deck vai no pendrive e no e-mail.",
  },
  {
    title: "Vídeo gravado é proibido",
    detail: "Slides são permitidos; gravação da sua apresentação não. A avaliação é do ao vivo.",
  },
];

export const hardRules = [
  "Teto de 3 minutos. Alvo de 2min45 para absorver o nervosismo.",
  "Vídeo gravado da apresentação é proibido: a dinâmica é ao vivo.",
  "Slides são permitidos (PowerPoint, Canva ou site próprio).",
  "Um dos cinco pilares de cultura precisa ser escolhido e justificado.",
  "A dinâmica é em grupo: a fala precisa abrir conversa, não encerrar em si.",
];

export type ScriptAxis = { name: string; covered: boolean; note: string };

export type InterviewQuestion = {
  category: string;
  question: string;
  /** O que uma resposta forte contém. */
  shape: string;
  /** O erro mais comum nessa pergunta. */
  trap: string;
};

/**
 * Perguntas que a dinâmica em grupo tende a gerar, derivadas dos eixos do documento
 * e do pilar escolhido. Não são respostas prontas: são a forma que a resposta precisa ter.
 */
export const interviewQuestions: InterviewQuestion[] = [
  {
    category: "Pilar escolhido",
    question: "Por que esse pilar e não outro?",
    shape: "Um episódio em que a simplicidade foi uma escolha difícil, com o custo de não tê-la feito.",
    trap: "Responder com definição do pilar em vez de uma história.",
  },
  {
    category: "Pilar escolhido",
    question: "Me dá um exemplo em que você complicou algo sem necessidade.",
    shape: "Admitir o caso, dizer o que custou e o que você passou a fazer diferente.",
    trap: "Escolher um exemplo em que você já acertou de primeira. Soa ensaiado.",
  },
  {
    category: "Técnico",
    question: "Como você decide entre entregar rápido e entregar bem?",
    shape: "Critério explícito: o que é irreversível recebe cuidado, o que é reversível recebe velocidade.",
    trap: "Responder 'depende' sem dizer do quê.",
  },
  {
    category: "Técnico",
    question: "Conte um bug que te custou mais tempo do que devia.",
    shape: "Como você isolou o problema, o que aprendeu sobre o próprio processo.",
    trap: "Culpar ferramenta, biblioteca ou colega.",
  },
  {
    category: "Embraer e negócio",
    question: "O que você sabe sobre a Embraer?",
    shape: "Três fatos concretos: aviação comercial, defesa e executiva; engenharia no Brasil com cadeia global.",
    trap: "Elogio genérico sobre 'empresa inovadora'.",
  },
  {
    category: "Embraer e negócio",
    question: "Por que aviação e não outro setor?",
    shape: "Uma razão técnica sua — software embarcado, tolerância a falha, rastreabilidade — ligada a algo que você já fez.",
    trap: "Paixão por aviões sem nenhuma conexão com a sua prática.",
  },
  {
    category: "Sobre você",
    question: "Por que devemos escolher você?",
    shape: "Uma competência comprovada + uma lacuna que você sabe nomear e está resolvendo.",
    trap: "Lista de adjetivos. Todos os candidatos dizem o mesmo.",
  },
  {
    category: "Sobre você",
    question: "Onde você se vê em cinco anos?",
    shape: "Trajetória de aprofundamento técnico, não de cargo. Diga a área e o tipo de problema.",
    trap: "Prometer permanência ou promoção que não depende de você.",
  },
  {
    category: "Sobre você",
    question: "Fale de um conflito em um time seu.",
    shape: "O desacordo técnico, como você separou ideia de pessoa, o que decidiu e por quê.",
    trap: "Dizer que nunca teve conflito. Ninguém acredita.",
  },
  {
    category: "Idioma e mobilidade",
    question: "Como está o seu inglês?",
    shape: "Nível real por habilidade, com evidência: o que você lê, o que você já assistiu sem legenda, o que falta.",
    trap: "Inflar o nível. A entrevista em inglês aparece mais cedo ou mais tarde.",
  },
  {
    category: "Idioma e mobilidade",
    question: "Você tem disponibilidade para mudar de cidade?",
    shape: "Resposta direta, com condição se houver. Ambiguidade aqui custa a vaga.",
    trap: "Dizer 'sim' sem ter checado com a família ou com a faculdade.",
  },
  {
    category: "Idioma e mobilidade",
    question: "O que você faz quando não entende o que foi pedido?",
    shape: "Reformular o pedido em voz alta e confirmar antes de executar.",
    trap: "Dizer que pergunta. Todo mundo diz. Mostre uma vez em que perguntar evitou retrabalho.",
  },
];


/** Os sete eixos sugeridos na página 4 do PDF. */
export const scriptAxes: ScriptAxis[] = [
  { name: "Idiomas", covered: true, note: "Slide de 10s: português nativo e inglês por habilidade." },
  { name: "Residência e mobilidade", covered: true, note: "Slide de 10s: joseense desde que nasceu, na cidade da vaga." },
  { name: "Atividades extracurriculares", covered: true, note: "Slide de 15s: ainda vazio — empresa júnior, IC, olimpíada ou projeto." },
  { name: "Ações voluntárias", covered: true, note: "Slide de 5s: uma frase. Mais que isso vira lista vazia." },
  { name: "Competências e habilidades", covered: true, note: "Slide de 30s: estágio na Prefeitura ancora duas competências." },
  { name: "Pilar de cultura", covered: true, note: "Slide de 40s: o eixo mais pesado do deck." },
  { name: "Conhecimentos técnicos", covered: true, note: "Slide de 25s: só o que você defende sob pergunta." },
];
