"use client";

import { useLanguage } from "../contexts/LanguageContext";

interface ExperienceItem {
  id: string;
  roleKey: string;
  companyKey: string;
  periodKey: string;
  itemKeys: string[];
}

// Para adicionar uma experiência, crie um item aqui e os textos em
// LanguageContext.tsx (pt-br e en). A mais recente fica primeiro.
const experiences: ExperienceItem[] = [
  {
    id: "unifecaf",
    roleKey: "experience.unifecaf.role",
    companyKey: "experience.unifecaf.company",
    periodKey: "experience.unifecaf.period",
    itemKeys: [
      "experience.unifecaf.item1",
      "experience.unifecaf.item2",
      "experience.unifecaf.item3",
    ],
  },
];

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="center-nav mx-auto scroll-mt-8">
      <div className="text-white mt-16 md:mt-20 lg:mt-24 font-semibold space-y-6 md:space-y-8">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold">
          {t("experience.title")}{" "}
          <span className="blue-color border-r-3 pr-2">
            {t("experience.title.highlight")}
          </span>
        </h2>

        <ol className="relative space-y-8 border-l-2 border-[#319ff9]/40 pl-6 md:pl-8">
          {experiences.map((experience) => (
            <li key={experience.id} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[33px] md:-left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-[#319ff9] bg-[#000b1a]"
              />
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-4">
                <h3 className="text-lg md:text-xl lg:text-2xl">
                  {t(experience.roleKey)}{" "}
                  <span className="blue-color">· {t(experience.companyKey)}</span>
                </h3>
                <p className="text-sm md:text-base font-light text-gray-400">
                  {t(experience.periodKey)}
                </p>
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm md:text-base lg:text-lg font-light leading-relaxed marker:text-[#319ff9]">
                {experience.itemKeys.map((key) => (
                  <li key={key}>{t(key)}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
