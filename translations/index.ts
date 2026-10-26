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
    live: "Ver projeto",
    source: "Código fonte",
    items: [
      {
        title: "Dev Hub",
        description:
          "Central pessoal para organizar projetos, documentação técnica e aprendizados em um só lugar.",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        accent: "violet",
      },
      {
        title: "API Analytics",
        description:
          "Dashboard responsivo para acompanhar métricas de APIs em tempo real com filtros avançados.",
        tags: ["React", "Python", "PostgreSQL"],
        accent: "cyan",
      },
      {
        title: "Flow Tasks",
        description:
          "Aplicação colaborativa de produtividade com uma experiência rápida, simples e acessível.",
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
        period: "1 ano e 3 meses",
        title: "Estágio",
        company: "Prefeitura Municipal de São José dos Campos",
        description:
          "Atuação em andamento na administração pública municipal, conciliada com graduação dupla e projetos próprios de desenvolvimento.",
      },
      {
        period: "Atual",
        title: "Desenvolvedor de Software",
        company: "Projetos independentes",
        description:
          "Desenvolvimento de aplicações web completas, da descoberta à entrega, com foco em qualidade, performance e manutenção.",
      },
      {
        period: "Experiência",
        title: "Desenvolvimento Full Stack",
        company: "Produtos digitais",
        description:
          "Construção de interfaces responsivas, APIs robustas e integrações orientadas às necessidades reais do negócio.",
      },
      {
        period: "Último semestre",
        title: "Análise e Desenvolvimento de Sistemas",
        company: "UNIP",
        description:
          "Graduação em conclusão, em paralelo a projetos práticos de desenvolvimento web.",
      },
      {
        period: "1º semestre",
        title: "Inteligência Artificial",
        company: "UNICIVE",
        description:
          "Segunda graduação em andamento, cursada simultaneamente.",
      },
    ],
  },
  contact: {
    eyebrow: "Contato",
    title: "Tem uma ideia? Vamos construí-la juntos.",
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
    made: "Projetado e desenvolvido com atenção aos detalhes.",
    rights: "Todos os direitos reservados.",
  },
  embraer: {
    badge: "Entrevista · Embraer",
    title: "Micael Leal",
    role: "Desenvolvedor Full Stack",
    pitch:
      "Esta página reúne, em um só lugar, o que costumo apresentar em uma conversa técnica: como penso, o que já construí e como trabalho em time.",
    summaryCta: "Começar pelo resumo",
    contactCta: "Falar comigo",
    sectionsLabel: "Seções desta apresentação",
    cardTitle: "Ficha rápida",
    availability: "Disponível para novos desafios",
    facts: [
      { label: "Foco", value: "Desenvolvimento full stack de produtos web" },
      { label: "Stack", value: "TypeScript · React · Next.js · Python · Django" },
      { label: "Qualidade", value: "Clean architecture, código legível e testes" },
      { label: "Localização", value: "Joseense · São José dos Campos, SP" },
      { label: "Idiomas", value: "Português nativo · Inglês: escrita e leitura intermediárias, conversação básica" },
    ],
    cardFooter: "Ver portfólio completo",
    nav: {
      intro: "Início",
      summary: "Resumo",
      trajectory: "Trajetória",
      stack: "Stack",
      projects: "Projetos",
      approach: "Abordagem",
      contribution: "Contribuição",
      contact: "Contato",
    },
    summary: {
      eyebrow: "Resumo",
      title: "Quem eu sou, em uma página.",
      paragraphs: [
        "Sou desenvolvedor full stack e trabalho da descoberta do problema até a entrega em produção. Gosto de entender o contexto de negócio antes de decidir arquitetura, porque a maior parte dos problemas de software nasce de requisitos mal compreendidos, não de código difícil.",
        "No dia a dia, construo interfaces em React e Next.js, APIs em Python/Django e Node.js, e mantenho tudo isso previsível com tipagem, testes e integração contínua. Prefiro soluções simples, explícitas e fáceis de remover a abstrações que só fazem sentido para quem as escreveu.",
        "Valorizo comunicação clara, revisão de código e documentação enxuta — o tipo de trabalho que faz o time inteiro andar mais rápido sem depender de uma pessoa específica.",
      ],
    },
    trajectory: {
      eyebrow: "Trajetória",
      title: "Como cheguei até aqui.",
      description:
        "Uma linha do tempo curta do que fiz até hoje: formação técnica, projetos próprios e evolução contínua em produto e engenharia.",
    },
    stack: {
      eyebrow: "Stack",
      title: "Ferramentas que uso no dia a dia.",
      description:
        "Não é uma lista de tudo que já vi: são as tecnologias com as quais consigo entregar com autonomia, do front-end à infraestrutura.",
    },
    projects: {
      eyebrow: "Projetos",
      title: "O que já construí.",
      description:
        "Projetos que representam decisões técnicas reais — cada um resolve um problema concreto e está aberto para leitura do código.",
      codeCta: "Ver repositórios no GitHub",
    },
    approach: {
      eyebrow: "Como trabalho",
      title: "Método antes de código.",
      steps: [
        {
          title: "Entender o problema",
          description:
            "Levanto contexto, restrições e critérios de sucesso antes de propor solução. Pergunta boa economiza sprint inteira.",
        },
        {
          title: "Desenhar a solução",
          description:
            "Defino contratos, modelo de dados e limites entre camadas. Decisões caras são tomadas cedo e registradas.",
        },
        {
          title: "Implementar com testes",
          description:
            "Entrego em fatias pequenas, com testes no que é crítico e revisão de código antes de chegar em produção.",
        },
        {
          title: "Medir e iterar",
          description:
            "Acompanho comportamento real, removo o que não é usado e simplifico o que ficou complexo sem necessidade.",
        },
      ],
    },
    why: {
      eyebrow: "Contribuição",
      title: "O que levo para a Embraer.",
      description:
        "Engenharia de produto em um ambiente de alta exigência técnica, onde segurança, rastreabilidade e confiabilidade não são opcionais.",
      items: [
        {
          title: "Qualidade e confiabilidade",
          description:
            "Código previsível, revisado e testado. Em sistemas críticos, mudança pequena e bem validada vale mais que entrega grande e arriscada.",
        },
        {
          title: "Integração entre times",
          description:
            "Comunicação direta com produto, design e engenharia, traduzindo requisito em decisão técnica e decisão técnica em impacto de negócio.",
        },
        {
          title: "Aprendizado contínuo",
          description:
            "Domínio rápido de stack e código existentes. Não preciso conhecer a ferramenta no primeiro dia para entregar valor com segurança na primeira semana.",
        },
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos conversar.",
      description:
        "Fico à disposição para detalhar qualquer projeto, falar sobre decisões técnicas ou combinar os próximos passos do processo.",
      emailCta: "Enviar e-mail",
      copyCta: "Copiar e-mail",
      copied: "E-mail copiado!",
      back: "Voltar ao portfólio",
    },
    footer: "Apresentação preparada para a entrevista na Embraer.",
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
    live: "View project",
    source: "Source code",
    items: [
      {
        title: "Dev Hub",
        description:
          "A personal hub to organize projects, technical documentation, and learnings in one place.",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        accent: "violet",
      },
      {
        title: "API Analytics",
        description:
          "A responsive dashboard for monitoring API metrics in real time with advanced filters.",
        tags: ["React", "Python", "PostgreSQL"],
        accent: "cyan",
      },
      {
        title: "Flow Tasks",
        description:
          "A collaborative productivity app with a fast, simple, and accessible experience.",
        tags: ["Next.js", "Node.js", "Docker"],
        accent: "blue",
      },
    ],
  },
  experience: {
    eyebrow: "Journey",
    title: "Experience & education.",
    items: [
      {
        period: "1 year 3 months",
        title: "Intern",
        company: "São José dos Campos City Hall",
        description:
          "Ongoing role in municipal public administration, alongside a dual degree and independent development projects.",
      },
      {
        period: "Present",
        title: "Software Developer",
        company: "Independent projects",
        description:
          "Building complete web applications, from discovery to delivery, focused on quality, performance, and maintainability.",
      },
      {
        period: "Experience",
        title: "Full Stack Development",
        company: "Digital products",
        description:
          "Building responsive interfaces, robust APIs, and integrations grounded in real business needs.",
      },
      {
        period: "Final semester",
        title: "Systems Analysis and Development",
        company: "UNIP",
        description:
          "Degree in completion, alongside hands-on web development projects.",
      },
      {
        period: "1st semester",
        title: "Artificial Intelligence",
        company: "UNICIVE",
        description:
          "Second degree in progress, taken simultaneously.",
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
  embraer: {
    badge: "Interview · Embraer",
    title: "Micael Leal",
    role: "Full Stack Developer",
    pitch:
      "This page gathers what I usually walk through in a technical conversation: how I think, what I have built, and how I work with a team.",
    summaryCta: "Start with the summary",
    contactCta: "Talk to me",
    sectionsLabel: "Sections of this presentation",
    cardTitle: "Quick facts",
    availability: "Available for new challenges",
    facts: [
      { label: "Focus", value: "Full stack development of web products" },
      { label: "Stack", value: "TypeScript · React · Next.js · Python · Django" },
      { label: "Quality", value: "Clean architecture, readable code, and tests" },
      { label: "Location", value: "Born and raised in São José dos Campos, SP" },
      { label: "Languages", value: "Native Portuguese · English: intermediate writing and reading, basic conversation" },
    ],
    cardFooter: "View full portfolio",
    nav: {
      intro: "Intro",
      summary: "Summary",
      trajectory: "Journey",
      stack: "Stack",
      projects: "Projects",
      approach: "Approach",
      contribution: "Contribution",
      contact: "Contact",
    },
    summary: {
      eyebrow: "Summary",
      title: "Who I am, on a single page.",
      paragraphs: [
        "I'm a full stack developer working from problem discovery to production delivery. I like to understand the business context before deciding on architecture, because most software problems come from misunderstood requirements, not from hard code.",
        "Day to day I build interfaces in React and Next.js, APIs in Python/Django and Node.js, and keep all of it predictable with typing, tests, and continuous integration. I prefer solutions that are simple, explicit, and easy to delete over abstractions that only make sense to their author.",
        "I value clear communication, code review, and lean documentation — the kind of work that makes the whole team faster without depending on one specific person.",
      ],
    },
    trajectory: {
      eyebrow: "Journey",
      title: "How I got here.",
      description:
        "A short timeline of what I've done so far: technical education, personal projects, and continuous growth in product and engineering.",
    },
    stack: {
      eyebrow: "Stack",
      title: "Tools I use every day.",
      description:
        "Not a list of everything I've seen: these are the technologies I can deliver with autonomously, from frontend to infrastructure.",
    },
    projects: {
      eyebrow: "Projects",
      title: "What I have built.",
      description:
        "Projects that represent real technical decisions — each one solves a concrete problem and is open for code reading.",
      codeCta: "See repositories on GitHub",
    },
    approach: {
      eyebrow: "How I work",
      title: "Method before code.",
      steps: [
        {
          title: "Understand the problem",
          description:
            "I gather context, constraints, and success criteria before proposing a solution. A good question saves an entire sprint.",
        },
        {
          title: "Design the solution",
          description:
            "I define contracts, data model, and layer boundaries. Expensive decisions are made early and written down.",
        },
        {
          title: "Implement with tests",
          description:
            "I deliver in small slices, with tests where it matters and code review before anything reaches production.",
        },
        {
          title: "Measure and iterate",
          description:
            "I follow real behavior, remove what is unused, and simplify what became complex for no reason.",
        },
      ],
    },
    why: {
      eyebrow: "Contribution",
      title: "What I bring to Embraer.",
      description:
        "Product engineering in a technically demanding environment, where safety, traceability, and reliability are not optional.",
      items: [
        {
          title: "Quality and reliability",
          description:
            "Predictable, reviewed, tested code. In critical systems, a small well-validated change beats a large risky delivery.",
        },
        {
          title: "Cross-team integration",
          description:
            "Direct communication with product, design, and engineering, translating requirements into technical decisions and technical decisions into business impact.",
        },
        {
          title: "Continuous learning",
          description:
            "Fast ramp-up on existing stacks and codebases. I don't need to know a tool on day one to deliver value safely in the first week.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk.",
      description:
        "I'm available to go deeper on any project, discuss technical decisions, or align on the next steps of the process.",
      emailCta: "Send email",
      copyCta: "Copy email",
      copied: "Email copied!",
      back: "Back to portfolio",
    },
    footer: "Presentation prepared for the Embraer interview.",
  },
};

export type Dictionary = typeof pt;
export const translations: Record<Language, Dictionary> = { pt, en };