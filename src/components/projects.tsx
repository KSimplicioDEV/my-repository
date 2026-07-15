"use client";

import Image from "next/image";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import {
  SiDocker,
  SiExpress,
  SiFastify,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSpringboot,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";

interface ProjectTech {
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  name: string;
}

interface Project {
  id: number;
  titleKey: string;
  descriptionKey: string;
  technologies: ProjectTech[];
  image: string;
  imageAlt: string;
  codeUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    titleKey: "project.quizify.title",
    descriptionKey: "project.quizify.description",
    technologies: [
      { icon: SiReact, color: "text-[#61DAFB]", name: "React" },
      { icon: SiNextdotjs, color: "text-white", name: "Next.js" },
      { icon: SiTailwindcss, color: "text-[#06B6D4]", name: "Tailwind CSS" },
      { icon: SiTypescript, color: "text-[#3178C6]", name: "TypeScript" },
      { icon: SiFastify, color: "text-white", name: "Fastify" },
      { icon: SiPrisma, color: "text-white", name: "Prisma" },
      {
        icon: SiPostgresql,
        color: "text-[#336791]",
        name: "PostgreSQL",
      },
    ],
    image: "/quizify-project.png",
    imageAlt: "Quizify Cover",
    codeUrl: "https://github.com/KauaSimplicioDEV/quizify-main",
    liveUrl: "https://quizify-unifecaf.vercel.app/intro",
  },

  {
    id: 2,
    titleKey: "project.bewear.title",
    descriptionKey: "project.bewear.description",
    technologies: [
      { icon: SiReact, color: "text-[#61DAFB]", name: "React" },
      { icon: SiNextdotjs, color: "text-white", name: "Next.js" },
      { icon: SiTailwindcss, color: "text-[#06B6D4]", name: "Tailwind CSS" },
      { icon: SiTypescript, color: "text-[#3178C6]", name: "TypeScript" },
      { icon: SiPrisma, color: "text-white", name: "Prisma" },
      {
        icon: SiPostgresql,
        color: "text-[#336791]",
        name: "PostgreSQL",
      },
    ],
    image: "/bewear-project-cover.jpg",
    imageAlt: "Bewear Project",
    liveUrl: "https://bewear-project-kaua.vercel.app/",
    codeUrl: "https://github.com/KauaSimplicioDEV/bewear-bootcamp-project",
  },

  {
    id: 3,
    titleKey: "project.weather.title",
    descriptionKey: "project.weather.description",
    technologies: [
      { icon: SiReact, color: "text-[#61DAFB]", name: "React" },
      { icon: SiNextdotjs, color: "text-white", name: "Next.js" },
      { icon: SiTailwindcss, color: "text-[#06B6D4]", name: "Tailwind CSS" },
      { icon: SiTypescript, color: "text-[#3178C6]", name: "TypeScript" },
    ],
    image: "/weather-app-cover.jpg",
    imageAlt: "Weather Cover Image",
    liveUrl: "https://weather-project-one-tau.vercel.app/",
    codeUrl: "https://github.com/KauaSimplicioDEV/weather-project",
  },

  {
    id: 4,
    titleKey: "project.detroid.title",
    descriptionKey: "project.detroid.description",
    technologies: [
      { icon: SiReact, color: "text-[#61DAFB]", name: "React" },
      { icon: SiNextdotjs, color: "text-white", name: "Next.js" },
      { icon: SiTailwindcss, color: "text-[#06B6D4]", name: "Tailwind CSS" },
      { icon: SiTypescript, color: "text-[#3178C6]", name: "TypeScript" },
      { icon: SiStripe, color: "text-[#635BFF]", name: "Stripe" },
      { icon: SiSpringboot, color: "text-[#6DB33F]", name: "Spring Boot" },
      { icon: SiDocker, color: "text-[#2496ED]", name: "Docker" },
    ],
    image: "/detroid-project-cover.jpg",
    imageAlt: "Detroit Cover",
    codeUrl: "https://github.com/KauaSimplicioDEV/detroid-project",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="flex flex-col justify-start items-start">
      <button
        className="flex items-center justify-between w-full cursor-pointer py-3 md:py-4 px-2 md:px-4 hover:bg-white/5 transition-colors rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-base md:text-lg lg:text-xl">{t(project.titleKey)}</p>
        {!isOpen ? (
          <FiPlus className="w-5 h-5 md:w-6 md:h-6" />
        ) : (
          <FiMinus className="w-5 h-5 md:w-6 md:h-6" />
        )}
      </button>

      <div className="border-b w-full" />

      {isOpen && (
        <div className="mt-4 md:mt-6 space-y-4 md:space-y-6">
          <p className="font-light text-sm md:text-base lg:text-lg leading-relaxed">
            {t(project.descriptionKey)}
          </p>
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            {project.technologies.map((tech, index) => (
              <div key={tech.name} className="flex items-center gap-3 md:gap-4">
                <tech.icon
                  className={`${tech.color} w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7`}
                />
                {index < project.technologies.length - 1 && (
                  <span className="text-gray-500">|</span>
                )}
              </div>
            ))}
          </div>

          <Image
            src={project.image}
            alt={project.imageAlt}
            width={1000}
            height={1000}
            className="w-full h-auto rounded-md md:rounded-lg hover:scale-[1.02] transition-transform duration-300"
          />

          <div className="flex flex-wrap gap-3 md:gap-4">
            {project.codeUrl && (
              <Button
                variant="outline"
                className="cursor-pointer border-2 py-4 md:py-5 px-6 md:px-8 text-sm md:text-base text-[#319ff9] border-[#319ff9] hover:bg-[#319ff9] hover:text-black transition-all"
                onClick={() => window.open(project.codeUrl, "_blank")}
              >
                {t("projects.viewCode")} <FaExternalLinkAlt className="ml-2" />
              </Button>
            )}

            {project.liveUrl && (
              <Button
                variant="outline"
                className="cursor-pointer border-2 py-4 md:py-5 px-6 md:px-8 text-sm md:text-base text-[#319ff9] border-[#319ff9] hover:bg-[#319ff9] hover:text-black transition-all"
                onClick={() => window.open(project.liveUrl, "_blank")}
              >
                {t("projects.viewLive")} <FaExternalLinkAlt className="ml-2" />
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section className="mx-auto center-nav">
      <div className="text-white mt-14 md:mt-20 lg:mt-24 font-semibold space-y-6 md:space-y-8">
        <h3 className="text-2xl md:text-3xl lg:text-5xl font-semibold">
          {t("projects.title")}{" "}
          <span className="blue-color border-r-3 pr-2">
            {t("projects.title.highlight")}
          </span>
        </h3>

        <h3 className="text-xl md:text-2xl lg:text-3xl mt-8 md:mt-10 font-semibold">
          <span className="blue-color">Web</span> {t("projects.webDev")}
        </h3>

        <div className="space-y-4 md:space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
