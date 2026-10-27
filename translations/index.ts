export type Language = "pt" | "en";

const pt = {
  nav: {
    about: "Sobre",
    skills: "Habilidades",
    projects: "Projetos",
    experience: "Experiência",
    contact: "Contato",
    menu: "Abrir menu",
    embraer: "Embraer",
  },
  hero: {
    eyebrow: "Olá, eu sou",
    role: "Desenvolvedor de Software",
    specialties: ["Full Stack", "Web", "Clean Architecture"],
    description:
      "Transformo problemas complexos em experiências digitais rápidas, acessíveis e fáceis de usar — da arquitetura à última interação.",
    projectsCta: "Ver projetos",
    contactCta: "Vamos conversar",
    available: "Disponível para novos desafios",
    imageAlt: "Avatar 3D de Micael Leal",
    scroll: "Role para explorar",
  },
  about: {
    eyebrow: "Sobre mim",
    title: "Tecnologia com propósito, código com clareza.",
    text: [
      "Sou desenvolvedor full stack apaixonado por construir produtos digitais que unem engenharia sólida e experiências intuitivas. Gosto de entender o problema antes de escrever a primeira linha de código.",
      "Meu trabalho é guiado por arquitetura limpa, colaboração e melhoria contínua — criando soluções que funcionam hoje e continuam fáceis de evoluir amanhã.",
    ],
    stats: [
      { value: "Full Stack", label: "Visão ponta a ponta" },
      { value: "Clean Code", label: "Código sustentável" },
      { value: "UX first", label: "Experiências intuitivas" },
    ],
  },
  skills: {
    eyebrow: "Tecnologias",
    title: "Ferramentas que utilizo.",
    description:
      "Uma stack moderna para criar produtos completos, do front-end à infraestrutura.",
  },
  projects: {
    eyebrow: "Projetos em destaque",
    title: "Alguns problemas que gostei de resolver.",
    description:
      "Projetos selecionados com foco em impacto, performance e boas decisões técnicas.",
    source: "Código fonte",
  },
  experience: {
    eyebrow: "Hoje",
    title: "Onde estou agora.",
    description:
      "Sem linha do tempo: o que faço hoje, agrupado pelas três frentes que ocupam minha semana.",
    groups: [
      {
        label: "Trabalho",
        title: "Estágio na Prefeitura",
        org: "São José dos Campos · 1 ano e 3 meses",
        detail:
          "Sistema de processos jurídicos construído do zero pelos estagiários, com migração do legado e um módulo de IA em uso.",
      },
      {
        label: "Formação",
        title: "Duas graduações em paralelo",
        org: "UNIP · UNICIVE",
        detail:
          "Análise e Desenvolvimento de Sistemas no último semestre, e Inteligência Artificial iniciando agora.",
      },
      {
        label: "Prática",
        title: "Projetos próprios e de cliente",
        org: "Sempre em andamento",
        detail:
          "Um navegador escrito em Rust, um sistema financeiro real e um comparador de vetores para o setor jurídico.",
      },
    ],
  },
  contact: {
    eyebrow: "Contato",
    title: "Tem uma ideia? Vamos construir juntos.",
    description:
      "Estou sempre aberto a conversar sobre produtos, desafios técnicos e novas oportunidades.",
    name: "Nome",
    namePlaceholder: "Como posso te chamar?",
    email: "E-mail",
    emailPlaceholder: "voce@email.com",
    message: "Mensagem",
    messagePlaceholder: "Conte um pouco sobre sua ideia...",
    submit: "Enviar mensagem",
    copied: "E-mail copiado!",
    socialTitle: "Ou encontre-me por aqui",
  },
  footer: {
    made: "Projetado e desenvolvido com carinho.",
    rights: "Todos os direitos reservados.",
  },
};

const en: typeof pt = {
  nav: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
    menu: "Open menu",
    embraer: "Embraer",
  },
  hero: {
    eyebrow: "Hello, I am",
    role: "Software Developer",
    specialties: ["Full Stack", "Web", "Clean Architecture"],
    description:
      "I turn complex problems into fast, accessible, and delightful digital experiences — from architecture to the last interaction.",
    projectsCta: "View projects",
    contactCta: "Let's talk",
    available: "Available for new challenges",
    imageAlt: "3D avatar of Micael Leal",
    scroll: "Scroll to explore",
  },
  about: {
    eyebrow: "About me",
    title: "Purposeful technology, thoughtful code.",
    text: [
      "I'm a full stack developer passionate about building digital products that combine solid engineering with intuitive experiences. I like to understand the problem before writing the first line of code.",
      "My work is driven by clean architecture, collaboration, and continuous improvement — creating solutions that work today and remain easy to evolve tomorrow.",
    ],
    stats: [
      { value: "Full Stack", label: "End-to-end vision" },
      { value: "Clean Code", label: "Sustainable software" },
      { value: "UX first", label: "Intuitive experiences" },
    ],
  },
  skills: {
    eyebrow: "Technologies",
    title: "Tools I work with.",
    description:
      "A modern stack for building complete products, from frontend to infrastructure.",
  },
  projects: {
    eyebrow: "Featured projects",
    title: "A few problems I enjoyed solving.",
    description:
      "Selected work focused on impact, performance, and sound technical decisions.",
    source: "Source code",
  },
  experience: {
    eyebrow: "Now",
    title: "Where I am right now.",
    description:
      "No timeline: what I do today, grouped by the three fronts that fill my week.",
    groups: [
      {
        label: "Work",
        title: "Internship at City Hall",
        org: "São José dos Campos · 1 year 3 months",
        detail:
          "Legal process system built from scratch by the interns, with legacy migration and an AI module in production.",
      },
      {
        label: "Education",
        title: "Two degrees in parallel",
        org: "UNIP · UNICIVE",
        detail:
          "Systems Analysis and Development in its final semester, and Artificial Intelligence starting now.",
      },
      {
        label: "Practice",
        title: "Personal and client projects",
        org: "Always in progress",
        detail:
          "A browser written in Rust, a real financial system, and a vector comparator for the legal field.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Have an idea? Let's build it together.",
    description:
      "I'm always open to talking about products, technical challenges, and new opportunities.",
    name: "Name",
    namePlaceholder: "What should I call you?",
    email: "Email",
    emailPlaceholder: "you@email.com",
    message: "Message",
    messagePlaceholder: "Tell me a little about your idea...",
    submit: "Send message",
    copied: "Email copied!",
    socialTitle: "Or find me here",
  },
  footer: {
    made: "Designed and developed with attention to detail.",
    rights: "All rights reserved.",
  },
};

export type Dictionary = typeof pt;
export const translations: Record<Language, Dictionary> = { pt, en };