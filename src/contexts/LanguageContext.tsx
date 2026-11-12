
"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
  ReactNode,
} from "react";

type Language = "pt-br" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  "pt-br": {
    "header.greeting": "Olá, eu sou Kauã Simplício 👋",
    "header.role": "Developer",

    "about.title": "Conheça",
    "about.title.highlight": "mais sobre mim",

    "about.intro":
      "Sou Desenvolvedor Full Stack com experiência no desenvolvimento de aplicações web modernas, escaláveis e focadas na experiência do usuário.",

    "about.tech":
      "Trabalho principalmente com React, Next.js, TypeScript e Node.js, desenvolvendo interfaces performáticas, APIs robustas e integrações para aplicações reais.",

    "about.experience":
      "Tenho experiência profissional transformando layouts do Figma em aplicações funcionais, desenvolvendo sistemas orientados por CMS, integrações de APIs e soluções voltadas para performance e manutenção.",

    "about.motivation":
      "Acredito que escrever software vai além de fazer funcionar. Gosto de entender como as tecnologias funcionam internamente e construir soluções limpas, escaláveis e fáceis de manter.",

    "about.cta": "Vamos conversar",
    "about.downloadCv": "Baixar CV",

    "experience.title": "Minha",
    "experience.title.highlight": "experiência",
    "experience.unifecaf.role": "Desenvolvedor Web",
    "experience.unifecaf.company": "UniFECAF",
    "experience.unifecaf.period": "Novembro 2024 – atual",

    "experience.unifecaf.item1":
      "Desenvolvimento e manutenção do site institucional utilizando Next.js, React e TypeScript, transformando layouts do Figma em interfaces responsivas, acessíveis e focadas na experiência do usuário.",

    "experience.unifecaf.item2":
      "Desenvolvimento de páginas dinâmicas e integração com Strapi CMS, conectando componentes do frontend a conteúdos estruturados e APIs para facilitar o gerenciamento e a atualização das informações.",

    "experience.unifecaf.item3":
      "Idealização, arquitetura e desenvolvimento do frontend do CorrigeAI, plataforma de correção de redações do ENEM com inteligência artificial. Responsável pela experiência do usuário, estrutura da aplicação e definição dos fluxos de navegação. O projeto foi apresentado à Diretoria de Ensino de Taboão da Serra, alcançando uma rede de aproximadamente 32 escolas públicas estaduais.",

    "experience.unifecaf.item4":
      "Desenvolvimento de landing pages para campanhas institucionais e implementação de integrações com HubSpot, conectando iniciativas de marketing a experiências web funcionais.",

    "experience.unifecaf.item5":
      "Atuação em melhorias de SEO, performance e manutenção das aplicações, identificando problemas, otimizando o carregamento das páginas e garantindo uma experiência consistente em diferentes dispositivos.",

    "skills.group.frontend": "Front-end",
    "skills.group.backend": "Back-end",
    "skills.group.database": "Banco de dados",
    "skills.group.tools": "CMS e ferramentas",

    "skills.title": "Minha",
    "skills.title.highlight": "stack tecnológica",

    "projects.title": "Projetos em",
    "projects.title.highlight": "destaque",
    "projects.viewCode": "Ver código",
    "projects.viewLive": "Ver projeto",
    "projects.webDev": "Desenvolvimento Web",
    "projects.imageSoon": "Imagem do projeto em breve",
    "projects.featuredBadge": "Projeto profissional",

    "project.corrigeai.title": "CorrigeAI | Corretor de redação com IA",
    "project.corrigeai.description":
      "Corretor gratuito de redação do ENEM com inteligência artificial, criado na UniFECAF. Avalia o texto pelas 5 competências da prova, de 0 a 1.000 pontos, com devolutiva e painel de evolução. Foi apresentado à Diretoria de Ensino de Taboão da Serra, que reúne cerca de 32 escolas estaduais, e repercutiu em 20 veículos de imprensa. Código proprietário da UniFECAF.",

    "project.bewear.title": "Bewear | E-commerce",
    "project.bewear.description":
      "Aplicação Full Stack desenvolvida com Next.js, TypeScript, Tailwind CSS, Drizzle ORM e PostgreSQL, focada em arquitetura moderna e experiência de compra.",

    "project.weather.title": "Weather App",
    "project.weather.description":
      "Aplicação web que consome uma API de clima para exibir previsões em tempo real com foco em performance, experiência do usuário e interface responsiva.",

    "project.detroid.title": "Detroit | E-commerce",
    "project.detroid.description":
      "Plataforma de e-commerce desenvolvida com React, TypeScript e Tailwind CSS, integrada a um backend em Spring Boot, Docker e Stripe para processamento de pagamentos.",

    "project.quizify.title": "Quizify App",
    "project.quizify.description":
      "Plataforma Full Stack para criação, gerenciamento e resolução de quizzes interativos, desenvolvida com foco em autenticação, gerenciamento de usuários e arquitetura moderna.",

    "contact.title": "Entre em",
    "contact.title.highlight": "contato",
  },

  en: {
    "header.greeting": "Hi, I'm Kauã Simplicio 👋",
    "header.role": "Developer",

    "about.title": "About",
    "about.title.highlight": "Me",

    "about.intro":
      "I'm a Full Stack Developer with experience building modern, scalable, and user-centered web applications.",

    "about.tech":
      "I primarily work with React, Next.js, TypeScript, and Node.js, building performant user interfaces, robust APIs, and production-ready web applications.",

    "about.experience":
      "My professional experience includes transforming Figma designs into production-ready applications, developing CMS-driven websites, integrating third-party APIs, and maintaining scalable codebases.",

    "about.motivation":
      "I believe software engineering is more than making things work. I'm passionate about understanding how technologies work under the hood and building clean, scalable, and maintainable solutions.",

    "about.cta": "Let's Talk",
    "about.downloadCv": "Download CV",

    "experience.title": "My",
    "experience.title.highlight": "Experience",
    "experience.unifecaf.role": "Web Developer",
    "experience.unifecaf.company": "UniFECAF",
    "experience.unifecaf.period": "November 2024 – present",

    "experience.unifecaf.item1":
      "Developed and maintained institutional websites using Next.js, React, and TypeScript, transforming Figma designs into responsive, accessible, and user-friendly interfaces.",

    "experience.unifecaf.item2":
      "Developed dynamic pages and integrated Strapi CMS, connecting frontend components with structured content and APIs to simplify content management and updates.",

    "experience.unifecaf.item3":
      "Conceived, architected, and developed the frontend of CorrigeAI, an AI-powered ENEM essay evaluation platform. Responsible for the user experience, application structure, and navigation flows. The project was presented to the Taboão da Serra Regional Education Board, reaching a network of approximately 32 public schools.",

    "experience.unifecaf.item4":
      "Developed campaign landing pages and implemented HubSpot integrations, connecting marketing initiatives with functional web experiences.",

    "experience.unifecaf.item5":
      "Contributed to SEO, web performance, and application maintenance by identifying issues, optimizing page loading, and ensuring a consistent user experience across different devices.",

    "skills.group.frontend": "Front-end",
    "skills.group.backend": "Back-end",
    "skills.group.database": "Databases",
    "skills.group.tools": "CMS & Tools",

    "skills.title": "Tech",
    "skills.title.highlight": "Stack",

    "projects.title": "Featured",
    "projects.title.highlight": "Projects",
    "projects.viewCode": "View Code",
    "projects.viewLive": "Live Demo",
    "projects.webDev": "Web Development",
    "projects.imageSoon": "Project image coming soon",
    "projects.featuredBadge": "Professional project",

    "project.corrigeai.title": "CorrigeAI | AI Essay Grader",
    "project.corrigeai.description":
      "A free AI-powered grader for the ENEM essay (Brazil's national university entrance exam), built at UniFECAF. It scores essays on the exam's 5 competencies, from 0 to 1,000 points, with feedback and a progress dashboard. It was presented to the Taboão da Serra Regional Education Board, which oversees about 32 public state schools, and was covered by 20 news outlets. Proprietary code owned by UniFECAF.",

    "project.bewear.title": "Bewear | E-commerce",
    "project.bewear.description":
      "A full-stack e-commerce application built with Next.js, TypeScript, Tailwind CSS, Drizzle ORM, and PostgreSQL, focused on modern architecture and user experience.",

    "project.weather.title": "Weather App",
    "project.weather.description":
      "A weather application that consumes a public API to provide real-time forecasts through a responsive and intuitive user interface.",

    "project.detroid.title": "Detroit | E-commerce",
    "project.detroid.description":
      "An e-commerce platform built with React, TypeScript, and Tailwind CSS, integrated with a Spring Boot backend, Docker, and Stripe for payment processing.",

    "project.quizify.title": "Quizify App",
    "project.quizify.description":
      "A full-stack quiz platform that allows users to create, manage, and answer interactive quizzes, focusing on authentication, user management, and modern application architecture.",

    "contact.title": "Get in",
    "contact.title.highlight": "Touch",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const STORAGE_KEY = "portfolio-language";

const HTML_LANG: Record<Language, string> = {
  "pt-br": "pt-BR",
  en: "en",
};

let sessionChoice: Language | null = null;
const listeners = new Set<() => void>();

function readBrowserLanguage(): Language {
  if (sessionChoice) return sessionChoice;

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);

    if (saved === "pt-br" || saved === "en") return saved;
  } catch {
    // Uses the browser language when storage is unavailable.
  }

  return navigator.language.toLowerCase().startsWith("pt") ? "pt-br" : "en";
}

function subscribe(listener: () => void) {
  listeners.add(listener);

  return () => listeners.delete(listener);
}

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const language = useSyncExternalStore(
    subscribe,
    readBrowserLanguage,
    () => "pt-br" as Language,
  );

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[language];
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    sessionChoice = lang;

    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Language selection remains available for the current session.
    }

    listeners.forEach((listener) => listener());
  }, []);

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["en"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
