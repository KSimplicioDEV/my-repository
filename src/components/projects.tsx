"use client";

import Image from "next/image";
import {
  SiDocker,
  SiFastify,
  SiHubspot,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSpringboot,
  SiStrapi,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";

interface ProjectTech {
  icon: React.ComponentType<{ className?: string; title?: string }>;
  color: string;
  name: string;
}

interface Project {
  id: number;
  titleKey: string;
  descriptionKey: string;
  technologies: ProjectTech[];
  /** Sem imagem, o card mostra um espaço reservado. */
  image?: string;
  imageAlt: string;
  codeUrl?: string;
  liveUrl?: string;
  /** Projeto em destaque: card largo, no topo, com o selo de projeto profissional. */
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 0,
    titleKey: "project.corrigeai.title",
    descriptionKey: "project.corrigeai.description",
    technologies: [
      { icon: SiReact, color: "text-[#61DAFB]", name: "React" },
      { icon: SiNextdotjs, color: "text-white", name: "Next.js" },
      { icon: SiTailwindcss, color: "text-[#06B6D4]", name: "Tailwind CSS" },
      { icon: SiTypescript, color: "text-[#3178C6]", name: "TypeScript" },
      { icon: SiStrapi, color: "text-[#4945FF]", name: "Strapi" },
      { icon: SiHubspot, color: "text-[#FF7A59]", name: "HubSpot" },
    ],
    image: "/corrigeai-print-homepage.png",
    imageAlt: "CorrigeAI Cover",
    // Código proprietário da UniFECAF: sem link para o repositório.
    liveUrl: "https://unifecaf.com.br/corrigeai",
    featured: true,
  },

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
    codeUrl: "https://github.com/MuriloNovaes/quizify",
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

const linkButtonClass =
  "cursor-pointer border-2 py-4 md:py-5 px-6 md:px-8 text-sm md:text-base text-[#319ff9] border-[#319ff9] hover:bg-[#319ff9] hover:text-black transition-all";

const ProjectImage = ({ project }: { project: Project }) =>
  project.image ? (
    <Image
      src={project.image}
      alt={project.imageAlt}
      width={1000}
      height={1000}
      sizes={project.featured ? "(min-width: 1024px) 50vw, 90vw" : "(min-width: 768px) 40vw, 90vw"}
      className="w-full h-auto aspect-video object-cover object-top rounded-md md:rounded-lg"
    />
  ) : (
    <ImagePlaceholder label={project.imageAlt} />
  );

const ImagePlaceholder = ({ label }: { label: string }) => {
  const { t } = useLanguage();

  return (
    <div
      role="img"
      aria-label={label}
      className="flex aspect-video w-full items-center justify-center rounded-md md:rounded-lg border-2 border-dashed border-white/20 bg-white/5"
    >
      <span className="font-light text-sm md:text-base text-gray-400">
        {t("projects.imageSoon")}
      </span>
    </div>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const { t } = useLanguage();

  return (
    <article
      className={`flex flex-col gap-4 md:gap-5 rounded-lg border p-4 md:p-6 transition-colors ${
        project.featured
          ? "border-[#319ff9]/60 bg-[#319ff9]/5 lg:flex-row lg:items-center lg:gap-10"
          : "border-white/10 bg-white/[0.02] hover:border-[#319ff9]/40"
      }`}
    >
      <div className={project.featured ? "lg:w-1/2" : ""}>
        <ProjectImage project={project} />
      </div>

      <div
        className={`flex flex-1 flex-col gap-4 ${project.featured ? "lg:w-1/2" : ""}`}
      >
        {project.featured && (
          <span className="w-fit rounded-full bg-[#319ff9] px-3 py-1 text-xs md:text-sm font-semibold text-[#000B1A]">
            {t("projects.featuredBadge")}
          </span>
        )}

        <h4 className="text-lg md:text-xl lg:text-2xl">{t(project.titleKey)}</h4>

        <p className="font-light text-sm md:text-base leading-relaxed">
          {t(project.descriptionKey)}
        </p>

        <ul className="flex flex-wrap items-center gap-3 md:gap-4">
          {project.technologies.map((tech) => (
            <li key={tech.name}>
              <tech.icon
                title={tech.name}
                className={`${tech.color} w-5 h-5 md:w-6 md:h-6`}
              />
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 md:gap-4 pt-2">
          {project.codeUrl && (
            <Button asChild variant="outline" className={linkButtonClass}>
              <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                {t("projects.viewCode")} <FaExternalLinkAlt className="ml-2" />
              </a>
            </Button>
          )}

          {project.liveUrl && (
            <Button asChild variant="outline" className={linkButtonClass}>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                {t("projects.viewLive")} <FaExternalLinkAlt className="ml-2" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const { t } = useLanguage();
  const featured = projects.filter((project) => project.featured);
  const others = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="mx-auto center-nav scroll-mt-8">
      <div className="text-white mt-14 md:mt-20 lg:mt-24 font-semibold space-y-6 md:space-y-8">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold">
          {t("projects.title")}{" "}
          <span className="blue-color border-r-3 pr-2">
            {t("projects.title.highlight")}
          </span>
        </h2>

        <h3 className="text-xl md:text-2xl lg:text-3xl mt-8 md:mt-10 font-semibold blue-color">
          {t("projects.webDev")}
        </h3>

        <div className="space-y-6 md:space-y-8">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            {others.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
