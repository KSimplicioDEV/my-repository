"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiFastify,
  SiGit,
  SiPrisma,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGithub,
  SiDocker,
  SiStrapi,
  SiVitest,
  SiFigma,
} from "react-icons/si";

import ScrollVelocity from "./ui/ScrollVelocity";
import { useLanguage } from "../contexts/LanguageContext";

interface SkillGroup {
  titleKey: string;
  skills: {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
  }[];
}

// Lista com nome por extenso: quem não reconhece o logo lê o nome.
const skillGroups: SkillGroup[] = [
  {
    titleKey: "skills.group.frontend",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    ],
  },
  {
    titleKey: "skills.group.backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
      { name: "Express", icon: SiExpress, color: "text-white" },
      { name: "Fastify", icon: SiFastify, color: "text-white" },
      { name: "Prisma", icon: SiPrisma, color: "text-white" },
    ],
  },
  {
    titleKey: "skills.group.database",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#336791]" },
      { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
    ],
  },
  {
    titleKey: "skills.group.tools",
    skills: [
      { name: "Strapi", icon: SiStrapi, color: "text-[#8E75FF]" },
      { name: "Vitest", icon: SiVitest, color: "text-[#6E9F18]" },
      { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
      { name: "Git", icon: SiGit, color: "text-[#F05032]" },
      { name: "GitHub", icon: SiGithub, color: "text-white" },
      { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]" },
    ],
  },
];

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section className="center-nav mx-auto">
      <div className="text-white mt-16 md:mt-20 lg:mt-24 font-semibold space-y-6 md:space-y-8">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold">
          {t("skills.title")}{" "}
          <span className="blue-color border-r-3 pr-2">
            {t("skills.title.highlight")}
          </span>
        </h2>

        <div className="mt-8 md:mt-10 lg:mt-12" aria-hidden="true">
          <ScrollVelocity
            items={[
              <SiJavascript key="js" className="text-[#F7DF1E]" />,
              <SiTypescript key="ts" className="text-[#3178C6]" />,
              <SiReact key="react" className="text-[#61DAFB]" />,
              <SiNextdotjs key="next" className="text-white" />,
              <SiTailwindcss key="tailwind" className="text-[#06B6D4]" />,

              <SiNodedotjs key="node" className="text-[#339933]" />,
              <SiExpress key="express" className="text-white" />,
              <SiFastify key="fastify" className="text-white" />,
              <SiPrisma key="prisma" className="text-white" />,

              <SiPostgresql key="postgresql" className="text-[#336791]" />,
              <SiMysql key="mysql" className="text-[#4479A1]" />,
              <SiMongodb key="mongodb" className="text-[#47A248]" />,

              <SiStrapi key="strapi" className="text-[#8E75FF]" />,
              <SiVitest key="vitest" className="text-[#6E9F18]" />,

              <SiGit key="git" className="text-[#F05032]" />,
              <SiGithub key="github" className="text-white" />,
              <SiFigma key="figma" className="text-[#F24E1E]" />,
            ]}
            velocity={100}
            iconClassName="size-10 md:size-14 lg:size-16"
            itemsGap="gap-8 md:gap-12 lg:gap-16"
          />
        </div>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4 pt-4">
          {skillGroups.map((group) => (
            <div key={group.titleKey} className="space-y-3">
              <h3 className="text-base md:text-lg blue-color">{t(group.titleKey)}</h3>
              <ul className="space-y-2 text-sm md:text-base font-light">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center gap-3">
                    <skill.icon className={`${skill.color} w-5 h-5 shrink-0`} />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;