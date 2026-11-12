"use client";

import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="center-nav mx-auto">
      <div className="text-white mt-30 md:mt-16 lg:mt-30 font-semibold space-y-4 md:space-y-6">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold">
          {t("about.title")}{" "}
          <span className="blue-color border-r-3 pr-2">
            {t("about.title.highlight")}
          </span>
        </h2>
        <div className="space-y-4 md:space-y-5 lg:space-y-6 lg:w-full leading-relaxed text-sm md:text-base lg:text-lg font-light">
          <p>{t("about.intro")}</p>
          <p>{t("about.tech")}</p>
          <p>{t("about.experience")}</p>
        </div>
        <p className="leading-relaxed text-sm md:text-base lg:text-lg font-light max-w-4xl">
          {t("about.motivation")}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 pt-2 md:pt-4">
          <Button
            variant="outline"
            className="cursor-pointer border-2 px-12 md:px-16 lg:px-20 py-4 md:py-5 text-sm md:text-base text-[#000B1A] bg-[#319ff9] border-[#319ff9] hover:bg-[#319ff9]/90 hover:text-black transition-all"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t("about.cta")}
          </Button>

          {/*
            BOTÃO "BAIXAR CV" — para ativar:
            1. Coloque o PDF do currículo em /public (ex.: public/cv-kaua-simplicio.pdf).
            2. Se o nome for outro, troque o href abaixo.
            3. Apague as linhas deste comentário para o botão aparecer.

          <Button
            asChild
            variant="outline"
            className="cursor-pointer border-2 px-12 md:px-16 lg:px-20 py-4 md:py-5 text-sm md:text-base text-[#319ff9] border-[#319ff9] hover:bg-[#319ff9] hover:text-black transition-all"
          >
            <a href="/cv-kaua-simplicio.pdf" download>
              {t("about.downloadCv")}
            </a>
          </Button>
          */}
        </div>
      </div>
    </section>
  );
};

export default About;
