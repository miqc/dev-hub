import type { StaticImageData } from "next/image";
import comparadorShot from "@/media/analisador.png";
import distritoShot from "@/media/distrito-financeiro.png";
import naroShot from "@/media/naro.png";

export type ProjectStackItem = { layer: string; tech: string };

/**
 * Fonte única dos projetos reais. Consumida pela home, pela ficha e pelo deck
 * da Embraer — assim o mesmo projeto nunca aparece com dois textos diferentes.
 */
export type SiteProject = {
  id: string;
  name: string;
  /** Natureza do projeto. */
  kind: { pt: string; en: string };
  /** O que o projeto é, em uma linha. */
  summary: { pt: string; en: string };
  /** Tecnologias por camada, quando o projeto é multiplataforma. */
  stack: ProjectStackItem[];
  /** Captura de tela, exibida nos cards. */
  image: StaticImageData;
  /** Link público, quando existe. */
  href?: string;
};

export const siteProjects: SiteProject[] = [
  {
    id: "comparador",
    name: "Comparador de Petições Jurídicas",
    kind: { pt: "Módulo do sistema", en: "System module" },
    summary: {
      pt: "Módulo do sistema da Prefeitura: converte petições e defesas em vetores e compara por cálculo matemático.",
      en: "Module of the City Hall system: turns petitions and defenses into vectors and compares them mathematically.",
    },
    stack: [
      { layer: "Linguagem", tech: "Python" },
      { layer: "NLP", tech: "spaCy · vetorização" },
    ],
    image: comparadorShot,
    href: "https://github.com/miqc/comparador-de-peticoes",
  },
  {
    id: "distrito",
    name: "Distrito Financeiro",
    kind: { pt: "Projeto de cliente", en: "Client project" },
    summary: {
      pt: "Aplicação financeira da Barbearia Distrito, com autenticação centralizada em uma API Node.",
      en: "Financial app for Barbearia Distrito, with authentication centralized in a Node API.",
    },
    stack: [
      { layer: "Frontend", tech: "TypeScript · Vite" },
      { layer: "Backend", tech: "Node sem framework" },
      { layer: "Dados", tech: "SQLite · PostgreSQL" },
      { layer: "Deploy", tech: "Docker · Render" },
    ],
    image: distritoShot,
    href: "https://github.com/miqc/financeiro-distrito",
  },
  {
    id: "naro",
    name: "NARO",
    kind: { pt: "Projeto pessoal", en: "Personal project" },
    summary: {
      pt: "Navegador totalmente escrito em Rust, em desenvolvimento. Feito para ser rápido, seguro e otimizado.",
      en: "Browser written entirely in Rust, in development. Built to be fast, secure, and optimized.",
    },
    stack: [
      { layer: "Linguagem", tech: "Rust" },
      { layer: "Status", tech: "Em desenvolvimento" },
    ],
    image: naroShot,
    href: "https://github.com/miqc/naro",
  },
];
