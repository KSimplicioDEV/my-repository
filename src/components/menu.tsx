"use client";
import { useState, RefObject } from "react";
import { FiMenu } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import { useLanguage } from "../contexts/LanguageContext";

interface MenuProps {
  homeRef: RefObject<HTMLDivElement | null>;
  aboutRef: RefObject<HTMLDivElement | null>;
  skillsRef: RefObject<HTMLDivElement | null>;
  projectsRef: RefObject<HTMLDivElement | null>;
  contactRef: RefObject<HTMLDivElement | null>;
}

function Menu({ homeRef, aboutRef, skillsRef, projectsRef, contactRef }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  // Função para fazer o scroll suave até a seção
  const scrollToSection = (ref: RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false); // Fecha o menu após clicar
  };

  return (
    <div className="center-nav mx-auto pt-14 text-white">
      <button className="text-2xl" onClick={() => setIsOpen(true)}>
        <FiMenu className="cursor-pointer" />
      </button>

      <div
        className={`
          fixed top-0 left-0 w-full h-full bg-[#000712] z-50
          transition-transform duration-500
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex justify-end mx-4 my-5">
          <button className="cursor-pointer" onClick={() => setIsOpen(false)}>
            <IoIosClose className="text-4xl" />
          </button>
        </div>
        <div className="mx-10 list-none space-y-4">
          <li>
            <span className="cursor-pointer" onClick={() => scrollToSection(homeRef)}>
              {t("menu.home")}
            </span>
          </li>
          <li>
            <span className="cursor-pointer" onClick={() => scrollToSection(aboutRef)}>
              {t("menu.about")}
            </span>
          </li>
          <li>
            <span className="cursor-pointer" onClick={() => scrollToSection(skillsRef)}>
              {t("menu.skills")}
            </span>
          </li>
          <li>
            <span className="cursor-pointer" onClick={() => scrollToSection(projectsRef)}>
              {t("menu.projects")}
            </span>
          </li>
          <li>
            <span className="cursor-pointer" onClick={() => scrollToSection(contactRef)}>
              {t("menu.contact")}
            </span>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Menu;
