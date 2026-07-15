"use client";

import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { useLanguage } from "../contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section className="mx-auto center-nav" id="contact">
      <div className="text-white mt-14 md:mt-20 lg:mt-24 font-semibold space-y-6 md:space-y-8">
        <h3 className="text-2xl md:text-3xl lg:text-5xl font-semibold">
          {t("contact.title")}{" "}
          <span className="blue-color border-r-3 pr-2">
            {t("contact.title.highlight")}
          </span>
        </h3>

        <div className="flex flex-col pt-4 md:pt-6 space-y-3 md:space-y-4 text-sm md:text-base lg:text-lg font-light">
          <p className="flex items-center gap-2 md:gap-3">
            <MdOutlineEmail className="blue-color w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
            <span className="hover:text-[#319ff9] transition-colors">
              kauassf8@outlook.com
            </span>
          </p>

          <div>
            <a
              className="inline-flex items-center gap-2 md:gap-3 underline hover:text-[#319ff9] transition-colors"
              href="https://www.linkedin.com/in/kau%C3%A3-simplicio-0220b51b4/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiLinkedin className="blue-color w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
              Kauã Simplício
            </a>
          </div>

          <div>
            <a
              className="inline-flex items-center gap-2 md:gap-3 underline hover:text-[#319ff9] transition-colors"
              href="https://github.com/KauaSimplicioDEV"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub className="blue-color w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
              KauaSimplicioDEV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
