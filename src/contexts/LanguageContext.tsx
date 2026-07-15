"use client";

import { createContext, useContext, useState, ReactNode } from "react";

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

    "skills.title": "Minha",
    "skills.title.highlight": "stack tecnológica",

    "projects.title": "Projetos em",
    "projects.title.highlight": "destaque",
    "projects.viewCode": "Ver código",
    "projects.viewLive": "Ver projeto",
    "projects.webDev": "Desenvolvimento Web",

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

    "skills.title": "Tech",
    "skills.title.highlight": "Stack",

    "projects.title": "Featured",
    "projects.title.highlight": "Projects",
    "projects.viewCode": "View Code",
    "projects.viewLive": "Live Demo",
    "projects.webDev": "Web Development",

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

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

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
