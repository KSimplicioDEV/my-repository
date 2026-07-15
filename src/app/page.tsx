"use client";

import About from "../components/about";
import Header from "../components/header";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Contact from "../components/contact";
import { LanguageProvider } from "../contexts/LanguageContext";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="dark-bg min-h-screen pb-10">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </LanguageProvider>
  );
}
