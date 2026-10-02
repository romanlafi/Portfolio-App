import {FaExternalLinkAlt, FaGithub} from "react-icons/fa";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";

export default function ProjectCard({ title, image, screenshots, tech, github, demo }) {
    const { t } = useTranslation();
    const images = screenshots?.length ? screenshots : [image];
    const [activeImage, setActiveImage] = useState(0);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        if (!hovered || images.length < 2) return undefined;

        const interval = window.setInterval(() => {
            setActiveImage((current) => (current + 1) % images.length);
        }, 1800);

        return () => window.clearInterval(interval);
    }, [hovered, images.length]);

    const resetSlideshow = () => {
        setHovered(false);
        setActiveImage(0);
    };

    return (
        <div
            className="group w-full max-w-[500px] mx-auto bg-[var(--color-eerie)] rounded-xl shadow-lg overflow-hidden transition hover:scale-105 duration-300"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={resetSlideshow}
        >
            <div className="relative h-48 w-full sm:h-80">
                {images.map((src, index) => (
                    <img
                        key={src}
                        src={src}
                        loading="lazy"
                        decoding="async"
                        alt={`${title} screenshot ${index + 1}`}
                        aria-hidden={index !== activeImage}
                        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${index === activeImage ? "opacity-100" : "opacity-0"}`}
                    />
                ))}
                {images.length > 1 && (
                    <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true">
                        {images.map((src, index) => (
                            <span
                                key={src}
                                className={`h-1.5 rounded-full transition-all duration-300 ${index === activeImage ? "w-5 bg-white" : "w-1.5 bg-white/50"}`}
                            />
                        ))}
                    </div>
                )}
            </div>
            <div className="p-4 sm:p-6">
                <h3 className="project-title text-lg sm:text-xl font-bold mb-3">{title}</h3>

                <div className="flex flex-wrap gap-3 text-xl sm:text-2xl mb-4 text-[var(--color-moss)]">
                    {tech.map((technology) => {
                        const Icon = technology.Icon;
                        return <Icon key={technology.id} />;
                    })}
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
