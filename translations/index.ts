export type Language = "pt" | "en";

const pt = {
  nav: {
    about: "Sobre",
    skills: "Habilidades",
    projects: "Projetos",
    experience: "Experiência",
    contact: "Contato",
    menu: "Abrir menu",
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
    eyebrow: "Habilidades",
    title: "Ferramentas que transformam ideias em produto.",
    description: "Uma stack moderna, escolhida de acordo com o desafio — nunca por moda.",
    categories: [
      { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
      { title: "Backend", items: ["Python", "Django", "Node.js", "APIs RESTful"] },
      { title: "Dados & Ferramentas", items: ["PostgreSQL", "Git", "Docker", "CI/CD"] },
    ],
  },
  projects: {
    eyebrow: "Projetos em destaque",
    title: "Alguns problemas que gostei de resolver.",
    description: "Projetos selecionados com foco em impacto, performance e boas decisões técnicas.",
    live: "Ver projeto",
    source: "Código fonte",
    items: [
      {
        title: "Dev Hub",
        description: "Central pessoal para organizar projetos, documentação técnica e aprendizados em um só lugar.",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        accent: "violet",
      },
      {
        title: "API Analytics",
        description: "Dashboard responsivo para acompanhar métricas de APIs em tempo real com filtros avançados.",
        tags: ["React", "Python", "PostgreSQL"],
        accent: "cyan",
      },
      {
        title: "Flow Tasks",
        description: "Aplicação colaborativa de produtividade com uma experiência rápida, simples e acessível.",
        tags: ["Next.js", "Node.js", "Docker"],
        accent: "blue",
      },
    ],
  },
  experience: {
    eyebrow: "Jornada",
    title: "Experiência & formação.",
    items: [
      {
        period: "Atual",
        title: "Desenvolvedor de Software",
        company: "Projetos independentes",
        description: "Desenvolvimento de aplicações web completas, da descoberta à entrega, com foco em qualidade, performance e manutenção.",
      },
      {
        period: "Experiência",
        title: "Desenvolvimento Full Stack",
        company: "Produtos digitais",
        description: "Construção de interfaces responsivas, APIs robustas e integrações orientadas às necessidades reais do negócio.",
      },
      {
        period: "Formação",
        title: "Tecnologia & Software",
        company: "Aprendizado contínuo",
        description: "Formação técnica complementada por estudo constante, projetos práticos e troca com a comunidade de desenvolvimento.",
      },
    ],
  },
  contact: {
    eyebrow: "Contato",
    title: "Tem uma ideia? Vamos construí-la juntos.",
    description: "Estou sempre aberto a conversar sobre produtos, desafios técnicos e novas oportunidades.",
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
  footer: { made: "Projetado e desenvolvido com atenção aos detalhes.", rights: "Todos os direitos reservados." },
};

const en: typeof pt = {
  nav: { about: "About", skills: "Skills", projects: "Projects", experience: "Experience", contact: "Contact", menu: "Open menu" },
  hero: {
    eyebrow: "Hello, I am",
    role: "Software Developer",
    specialties: ["Full Stack", "Web", "Clean Architecture"],
    description: "I turn complex problems into fast, accessible, and delightful digital experiences — from architecture to the last interaction.",
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
    eyebrow: "Skills",
    title: "Tools that turn ideas into products.",
    description: "A modern stack, chosen for the challenge — never for the hype.",
    categories: [
      { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
      { title: "Backend", items: ["Python", "Django", "Node.js", "RESTful APIs"] },
      { title: "Data & Tools", items: ["PostgreSQL", "Git", "Docker", "CI/CD"] },
    ],
  },
  projects: {
    eyebrow: "Featured projects",
    title: "A few problems I enjoyed solving.",
    description: "Selected work focused on impact, performance, and sound technical decisions.",
    live: "View project",
    source: "Source code",
    items: [
      { title: "Dev Hub", description: "A personal hub to organize projects, technical documentation, and learnings in one place.", tags: ["Next.js", "TypeScript", "Tailwind"], accent: "violet" },
      { title: "API Analytics", description: "A responsive dashboard for monitoring API metrics in real time with advanced filters.", tags: ["React", "Python", "PostgreSQL"], accent: "cyan" },
      { title: "Flow Tasks", description: "A collaborative productivity app with a fast, simple, and accessible experience.", tags: ["Next.js", "Node.js", "Docker"], accent: "blue" },
    ],
  },
  experience: {
    eyebrow: "Journey",
    title: "Experience & education.",
    items: [
      { period: "Present", title: "Software Developer", company: "Independent projects", description: "Building complete web applications, from discovery to delivery, focused on quality, performance, and maintainability." },
      { period: "Experience", title: "Full Stack Development", company: "Digital products", description: "Building responsive interfaces, robust APIs, and integrations grounded in real business needs." },
      { period: "Education", title: "Technology & Software", company: "Continuous learning", description: "Technical education complemented by constant study, hands-on projects, and knowledge sharing with the development community." },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Have an idea? Let's build it together.",
    description: "I'm always open to talking about products, technical challenges, and new opportunities.",
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
  footer: { made: "Designed and developed with attention to detail.", rights: "All rights reserved." },
};

export type Dictionary = typeof pt;
export const translations: Record<Language, Dictionary> = { pt, en };
