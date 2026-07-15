"use client";

import TextType from "./TextType";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <section className="pt-30">
      <div className="mx-4 md:mx-8 lg:mx-36 absolute flex gap-2 top-12 lg:top-14 left-0">
        <button
          onClick={() => setLanguage("pt-br")}
          className={`px-3 py-1 cursor-pointer rounded text-xs md:text-sm font-medium transition-all ${
            language === "pt-br"
              ? "bg-[#319ff9] text-white"
              : "bg-transparent text-white border border-[#319ff9] hover:bg-[#319ff9]/20"
          }`}
        >
          PT-BR
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={`px-3 py-1 cursor-pointer rounded text-xs md:text-sm font-medium transition-all ${
            language === "en"
              ? "bg-[#319ff9] text-white"
              : "bg-transparent text-white border border-[#319ff9] hover:bg-[#319ff9]/20"
          }`}
        >
          EN
        </button>
      </div>

      <div className="absolute flex justify-end top-14 right-0">
        <Image
          src="/session-divider.svg"
          alt="Caracter tecnologia"
          className="w-50 md:w-24 lg:w-60"
          width={240}
          height={240}
        />
      </div>

      <div className="w-full center-nav mx-auto text-white flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 lg:gap-16">
        <div className="space-y-3 md:space-y-5 flex-1">
          <p className="text-sm md:text-base lg:text-lg">
            {t("header.greeting")}
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
            <TextType
              className="blue-color"
              text={["Full Stack", ""]}
              typingSpeed={80}
              pauseDuration={1500}
            />
            <br />
            {t("header.role")}
          </h1>
        </div>

        <div className="shrink-0">
          <Image
            src="/kaua-professional-image.JPG"
            alt="Professional image of Kauã Simplício"
            className="rounded-full w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover border-4 border-[#319ff9] p-1"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className="relative mt-14">
        <div className="absolute flex justify-end bottom-0 lg:bottom-0 left-0">
          <Image
            src="/session-divider2.svg"
            alt="Caracter tecnologia"
            className="w-50 md:w-24 lg:w-60"
            width={240}
            height={240}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
