import {FaExternalLinkAlt, FaGithub} from "react-icons/fa";
import {useTranslation} from "react-i18next";

export default function ProjectCard({ title, image, tech, github, demo }) {
    const { t } = useTranslation();

    return (
        <div className="w-full max-w-[500px] mx-auto bg-[var(--color-eerie)] rounded-xl shadow-lg overflow-hidden transition hover:scale-105 duration-300">
            <img
                src={image}
                alt={title}
                className="w-full h-48 sm:h-80 object-cover"
            />
            <div className="p-4 sm:p-6">
                <h3 className="project-title text-lg sm:text-xl font-bold mb-3">{title}</h3>

                <div className="flex flex-wrap gap-3 text-xl sm:text-2xl mb-4 text-[var(--color-moss)]">
                    {tech.map((Icon, idx) => (
                        <Icon key={idx} />
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row sm:gap-6 gap-2 text-[var(--color-powder)]">
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-[var(--color-beige)] transition"
                    >
                        <FaGithub /> <span className="text-sm sm:text-base">{t('portfolio.github_link')}</span>
                    </a>
                    <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-[var(--color-beige)] transition"
                    >
                        <FaExternalLinkAlt /> <span className="text-sm sm:text-base">{t('portfolio.webpage_link')}</span>
                    </a>
                </div>
            </div>
        </div>
    );
}