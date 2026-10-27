/**
 * Os cinco pilares de cultura, na redação oficial do documento
 * "orientações.pdf" (Programa de Estágio Embraer · Etapa Dinâmica 2027).
 * Texto oficial: não traduzir nem parafrasear.
 */

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
    label: "Paixão por fazer a diferença.",
    lines: [
      "Celebre conquistas e valorize nossa história.",
      "Paixão por fazer a diferença.",
      "Lidere com o coração, respeite a diversidade e valorize nossas pessoas.",
      "Entregue o melhor valor para clientes e demais stakeholders.",
    ],
  },
];

